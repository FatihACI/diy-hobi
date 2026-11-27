// Proje içeriği çevirisi: çeviri dosyaları Türkçe asılla aynı yapıda, dil geçişi geri alınabilir
import { afterAll, describe, expect, test } from "@jest/globals";
import { icerikDiliUygula, trProje } from "../src/data/ceviri";
import { EN_KATALOG } from "../src/data/en/katalog";
import { EN_KATEGORI } from "../src/data/en/kategoriler";
import { miktarEn } from "../src/data/en/miktar";
import { EN_PROJELER } from "../src/data/en/projeler";
import { KALEMLER } from "../src/data/katalog-dizin";
import { KATEGORILER } from "../src/data/kategoriler";
import { PROJELER } from "../src/data/projeler";
import { projeAra } from "../src/data/ara";
import { dilAyarla, sureDil } from "../src/i18n";

const TURKCE = /[çğışöüÇĞİŞÖÜ]/;

describe("içerik çevirisi", () => {
  afterAll(() => {
    dilAyarla("tr");
    icerikDiliUygula("tr");
  });

  test("çeviri dosyalarında olmayan proje id'si yok", () => {
    const ids = new Set(PROJELER.map((p) => p.id));
    expect(Object.keys(EN_PROJELER).filter((id) => !ids.has(id))).toEqual([]);
    expect(Object.keys(EN_KATALOG).filter((k) => !KALEMLER.has(k))).toEqual([]);
  });

  test("her proje ve her katalog kalemi İngilizceye çevrili", () => {
    expect(PROJELER.filter((p) => !EN_PROJELER[p.id]).map((p) => p.id)).toEqual([]);
    expect([...KALEMLER.keys()].filter((k) => !EN_KATALOG[k])).toEqual([]);
  });

  test("çevrilen projelerde dizi uzunlukları Türkçe asılla aynı", () => {
    const hatali: string[] = [];
    for (const [id, en] of Object.entries(EN_PROJELER)) {
      const tr = trProje(id);
      const kontrol = tr.adimlar.map((a) => a.kontrol !== undefined);
      if (en.adimlar.length !== tr.adimlar.length) hatali.push(`${id}: adım ${en.adimlar.length}≠${tr.adimlar.length}`);
      en.adimlar.forEach((a, i) => {
        if (kontrol[i] !== (a.length === 3)) hatali.push(`${id}: adım ${i + 1} kontrol`);
      });
      if (en.ipuclari.length !== tr.ipuclari.length) hatali.push(`${id}: ipucu`);
      if (en.guvenlik.length !== tr.guvenlik.length)
        hatali.push(`${id}: güvenlik ${en.guvenlik.length}≠${tr.guvenlik.length}`);
      if ((en.sikHatalar?.length ?? 0) !== (tr.sikHatalar?.length ?? 0)) hatali.push(`${id}: sık hata`);
    }
    expect(hatali).toEqual([]);
  });

  test("çeviri metinlerinde Türkçe harf kalmadı", () => {
    const hatali: string[] = [];
    for (const [id, en] of Object.entries(EN_PROJELER)) {
      const metin = [en.ad, en.ozet, ...en.adimlar.flat(), ...en.ipuclari, ...en.guvenlik, ...(en.sikHatalar ?? [])];
      for (const s of metin) if (TURKCE.test(s)) hatali.push(`${id}: ${s}`);
    }
    for (const [kid, ad] of Object.entries(EN_KATALOG)) if (TURKCE.test(ad)) hatali.push(`${kid}: ${ad}`);
    expect(hatali).toEqual([]);
  });

  test("her kategorinin ve her miktarın İngilizcesi var", () => {
    expect(KATEGORILER.filter((k) => !EN_KATEGORI[k.id]).map((k) => k.id)).toEqual([]);
    const miktarlar = new Set(PROJELER.flatMap((p) => p.malzemeler.map((m) => m.miktar)));
    expect([...miktarlar].filter((m) => TURKCE.test(miktarEn(m)))).toEqual([]);
  });

  test("süre metinlerinde Türkçe birim kalmıyor", () => {
    dilAyarla("en");
    const sureler = new Set(PROJELER.flatMap((p) => [p.sure, ...p.adimlar.map((a) => a.sure ?? "")]));
    expect([...sureler].map(sureDil).filter((s) => TURKCE.test(s) || /\b(saat|dk|gün|hafta)\b/.test(s))).toEqual([]);
    dilAyarla("tr");
  });

  test("dil geçişi yerinde çevirir ve geri alınabilir", () => {
    const p = PROJELER.find((x) => EN_PROJELER[x.id]) ?? PROJELER[0];
    const trAd = p.ad;
    const trMalzeme = p.malzemeler[0].miktar;
    icerikDiliUygula("en");
    if (EN_PROJELER[p.id]) expect(p.ad).toBe(EN_PROJELER[p.id].ad);
    expect(p.malzemeler[0].miktar).toBe(miktarEn(trMalzeme));
    expect(KATEGORILER[0].ad).toBe(EN_KATEGORI[KATEGORILER[0].id].ad);
    // Türkçe kelimeyle arama İngilizcede de sonuç verir
    expect(projeAra("ahşap").length).toBeGreaterThan(0);
    icerikDiliUygula("tr");
    expect(p.ad).toBe(trAd);
    expect(p.malzemeler[0].miktar).toBe(trMalzeme);
  });
});
