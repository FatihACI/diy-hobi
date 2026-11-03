// Tüm çizimleri tek bir HTML sayfasında ızgara olarak gösterir (kontrol için).
// Çalıştırma: npx tsx araclar/cizim-onizle.ts > cizimler.html
import { taramaYollari } from "../src/cizim/arac";
import { KATEGORI_CIZIM } from "../src/cizim/kategori";
import { KATEGORI_EK } from "../src/cizim/kategori-ek";
import { PROJE_CIZIM } from "../src/cizim/proje";
import { PROJE_COCUK_DOGA } from "../src/cizim/proje-cocuk-doga";
import { PROJE_EL_SANATLARI } from "../src/cizim/proje-el-sanatlari";
import { PROJE_TEKNIK_EV } from "../src/cizim/proje-teknik-ev";

const K = "#2B2B2B",
  P = "#FBF8F1";
function svg(ad: string, v: any) {
  const id = ad.replace(/[^a-z0-9]/gi, "");
  const tara = (i: number) =>
    (v.taramalar ?? [])
      .filter((t: any) => (t.sonra ?? -1) === i)
      .map(
        (t: any) =>
          `<g clip-path="url(#${id}${t.id})"><path d="${taramaYollari(t.kutu, t.aralik ?? 4, t.ters)}" stroke="${K}" stroke-width="0.7" opacity="0.45"/></g>`,
      )
      .join("");
  const c = v.cizgiler
    .map(
      (s: any, i: number) =>
        `<path d="${s.d}" stroke="${K}" stroke-width="${s.w ?? 1.4}" opacity="0.88" fill="${s.dolgu ? P : "none"}" stroke-linecap="round" stroke-linejoin="round" ${s.kesik ? 'stroke-dasharray="3 3"' : ""}/>` +
        tara(i),
    )
    .join("");
  const g = v.cizgiler
    .map(
      (s: any) =>
        `<path d="${s.d}" stroke="${K}" stroke-width="${(s.w ?? 1.4) * 0.7}" fill="none" ${s.kesik ? 'stroke-dasharray="3 3"' : ""}/>`,
    )
    .join("");
  const n = (v.noktalar ?? [])
    .map(([x, y, r]: number[]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${K}" opacity="0.8"/>`)
    .join("");
  const defs = (v.taramalar ?? [])
    .map((t: any) => `<clipPath id="${id}${t.id}"><path d="${t.sinir}"/></clipPath>`)
    .join("");
  return `<div><svg width="200" height="200" viewBox="0 0 160 160" style="background:${P}"><defs>${defs}</defs><g transform="translate(0.9 0.7)" opacity="0.3">${g}</g>${tara(-1)}${c}${n}</svg><p>${ad}</p></div>`;
}
const filtre = process.argv[2];
const hepsi: Record<string, any> = {
  ...KATEGORI_CIZIM,
  ...KATEGORI_EK,
  ...PROJE_CIZIM,
  ...PROJE_COCUK_DOGA,
  ...PROJE_EL_SANATLARI,
  ...PROJE_TEKNIK_EV,
};
const kaynak =
  filtre === "kategori"
    ? { ...KATEGORI_EK }
    : filtre === "cocuk"
      ? PROJE_COCUK_DOGA
      : filtre === "el"
        ? PROJE_EL_SANATLARI
        : filtre === "teknik"
          ? PROJE_TEKNIK_EV
          : hepsi;
console.log(
  `<html><body style="font:12px sans-serif;display:flex;flex-wrap:wrap;gap:8px;margin:8px">${Object.entries(kaynak)
    .map(([k, v]) => svg(k, v))
    .join("")}</body></html>`,
);
