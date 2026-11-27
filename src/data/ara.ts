import { icerikDili, trKategoriAd, trProje } from "./ceviri";
import { KATEGORILER } from "./kategoriler";
import { PROJELER } from "./projeler";
import { katla } from "./metin";
import type { Proje } from "./types";

export { katla };

// Her projenin aranabilir metni dil başına bir kez hazırlanır (her tuşta 1874 malzemeyi yeniden katlamamak için).
// Türkçe asıl metin her zaman dizinde: İngilizce arayüzde "ahşap" yazan da sonuç bulur.
let dizin: { p: Proje; ad: string; metin: string }[] = [];
let dizinDili: string | null = null;
function dizinAl() {
  if (dizinDili === icerikDili()) return dizin;
  dizinDili = icerikDili();
  dizin = PROJELER.map((p) => {
    const tr = trProje(p.id);
    const parca = [
      p.ad,
      p.ozet,
      KATEGORILER.find((k) => k.id === p.kategoriId)?.ad ?? "",
      ...p.malzemeler.map((m) => m.ad),
    ];
    if (dizinDili !== "tr") parca.push(tr.ad, tr.ozet, trKategoriAd(p.kategoriId), ...tr.malzemeler.map((m) => m.ad));
    return { p, ad: katla(p.ad + " " + tr.ad), metin: katla(parca.join(" | ")) };
  });
  return dizin;
}

// Tüm kelimeler geçmeli ("ahşap lamba" → ikisini de içeren projeler). Adında geçenler önce gelir.
export function projeAra(sorgu: string): Proje[] {
  const kelimeler = katla(sorgu).split(" ").filter(Boolean);
  if (!kelimeler.length) return [];
  return dizinAl()
    .filter((d) => kelimeler.every((k) => d.metin.includes(k)))
    .sort((a, b) => Number(kelimeler.every((k) => b.ad.includes(k))) - Number(kelimeler.every((k) => a.ad.includes(k))))
    .map((d) => d.p);
}
