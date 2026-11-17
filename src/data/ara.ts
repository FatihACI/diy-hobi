import { KATEGORILER } from "./kategoriler";
import { PROJELER } from "./projeler";
import { katla } from "./metin";
import type { Proje } from "./types";

export { katla };

// Her projenin aranabilir metni bir kez hazırlanır (her tuşta 1874 malzemeyi yeniden katlamamak için)
const DIZIN = PROJELER.map((p) => ({
  p,
  ad: katla(p.ad),
  metin: katla(
    [p.ad, p.ozet, KATEGORILER.find((k) => k.id === p.kategoriId)?.ad ?? "", ...p.malzemeler.map((m) => m.ad)].join(
      " | ",
    ),
  ),
}));

// Tüm kelimeler geçmeli ("ahşap lamba" → ikisini de içeren projeler). Adında geçenler önce gelir.
export function projeAra(sorgu: string): Proje[] {
  const kelimeler = katla(sorgu).split(" ").filter(Boolean);
  if (!kelimeler.length) return [];
  return DIZIN.filter((d) => kelimeler.every((k) => d.metin.includes(k)))
    .sort((a, b) => Number(kelimeler.every((k) => b.ad.includes(k))) - Number(kelimeler.every((k) => a.ad.includes(k))))
    .map((d) => d.p);
}
