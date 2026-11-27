// Proje içeriğinin çeviri katmanı.
// Veri Türkçe yazılır; İngilizce karşılıklar src/data/en/ altındadır. Dil değişince projeler, kategoriler
// ve katalog kalemleri YERİNDE güncellenir: modüllerde önceden hesaplanmış listeler (seçkinler, gruplar…)
// aynı nesneleri tuttuğu için onlar da yeni dili gösterir. Mantık alanları (id, kid, sure, zorluk, yaş,
// kategori grubu) hiç değişmez; süre ve zorluk ekranda i18n.ts ile çevrilir.
// Tutarlılık __tests__/ceviri.test.ts ile denetlenir (her proje çevrili, dizi uzunlukları eşit).
import type { Dil } from "../i18n";
import { EN_KATALOG } from "./en/katalog";
import { EN_KATEGORI } from "./en/kategoriler";
import { miktarEn } from "./en/miktar";
import { EN_PROJELER } from "./en/projeler";
import { KALEMLER } from "./katalog-dizin";
import { KATEGORILER } from "./kategoriler";
import { PROJELER } from "./projeler";
import type { Proje } from "./types";

// Çeviri dosyalarının biçimi
export type AdimCeviri = [baslik: string, aciklama: string] | [baslik: string, aciklama: string, kontrol: string];
export type ProjeCeviri = {
  ad: string;
  ozet: string;
  adimlar: AdimCeviri[];
  ipuclari: string[];
  guvenlik: string[];
  sikHatalar?: string[];
};

type TrProje = Omit<ProjeCeviri, "adimlar"> & {
  adimlar: { baslik: string; aciklama: string; kontrol?: string }[];
  malzemeler: { ad: string; miktar: string }[];
};

// Türkçe asıllar (modül yüklenirken, henüz hiçbir şey değişmemişken alınır)
const TR = new Map<string, TrProje>(
  PROJELER.map((p) => [
    p.id,
    {
      ad: p.ad,
      ozet: p.ozet,
      adimlar: p.adimlar.map((a) => ({ baslik: a.baslik, aciklama: a.aciklama, kontrol: a.kontrol })),
      ipuclari: [...p.ipuclari],
      guvenlik: [...p.guvenlik],
      sikHatalar: p.sikHatalar && [...p.sikHatalar],
      malzemeler: p.malzemeler.map((m) => ({ ad: m.ad, miktar: m.miktar })),
    },
  ]),
);
const TR_KATEGORI = new Map(KATEGORILER.map((k) => [k.id, { ad: k.ad, aciklama: k.aciklama }]));
const TR_KALEM = new Map(
  [...KALEMLER.values()].map((k) => [k.kid, { ad: k.ad, miktar: k.projeler.map((x) => x.miktar) }]),
);

// Aramada her iki dil de bulunsun diye (ör. İngilizce arayüzde "ahşap" yazılırsa)
export const trProje = (id: string) => TR.get(id)!;
export const trKalemAd = (kid: string) => TR_KALEM.get(kid)?.ad ?? kid;
export const trKategoriAd = (id: string) => TR_KATEGORI.get(id)?.ad ?? id;

let uygulanan: Dil = "tr";
export const icerikDili = () => uygulanan;

function projeUygula(p: Proje, dil: Dil) {
  const tr = TR.get(p.id)!;
  const en = dil === "en" ? EN_PROJELER[p.id] : undefined;
  p.ad = en?.ad ?? tr.ad;
  p.ozet = en?.ozet ?? tr.ozet;
  p.adimlar.forEach((a, i) => {
    const e = en?.adimlar[i];
    a.baslik = e?.[0] ?? tr.adimlar[i].baslik;
    a.aciklama = e?.[1] ?? tr.adimlar[i].aciklama;
    if (tr.adimlar[i].kontrol !== undefined) a.kontrol = e?.[2] ?? tr.adimlar[i].kontrol;
  });
  p.ipuclari = en?.ipuclari ?? tr.ipuclari;
  p.guvenlik = en?.guvenlik ?? tr.guvenlik;
  if (tr.sikHatalar) p.sikHatalar = en?.sikHatalar ?? tr.sikHatalar;
  p.malzemeler.forEach((m, i) => {
    const t = tr.malzemeler[i];
    m.ad = dil === "en" ? (EN_KATALOG[m.kid!] ?? t.ad) : t.ad;
    m.miktar = dil === "en" ? miktarEn(t.miktar) : t.miktar;
  });
}

export function icerikDiliUygula(dil: Dil) {
  if (dil === uygulanan) return;
  uygulanan = dil;
  for (const p of PROJELER) projeUygula(p, dil);
  for (const k of KATEGORILER) {
    const tr = TR_KATEGORI.get(k.id)!;
    const en = dil === "en" ? EN_KATEGORI[k.id] : undefined;
    k.ad = en?.ad ?? tr.ad;
    k.aciklama = en?.aciklama ?? tr.aciklama;
  }
  for (const k of KALEMLER.values()) {
    const tr = TR_KALEM.get(k.kid)!;
    k.ad = dil === "en" ? (EN_KATALOG[k.kid] ?? tr.ad) : tr.ad;
    k.projeler.forEach((x, i) => (x.miktar = dil === "en" ? miktarEn(tr.miktar[i]) : tr.miktar[i]));
  }
}
