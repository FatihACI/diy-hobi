// "Elimdekilerle ne yapabilirim?": "bende var" listesine göre projeleri sıralar.
// Evde bulunan kalemler (su, pet şişe…) eksik sayılmaz.
import { KALEMLER, type Kalem } from "./katalog-dizin";
import { katla } from "./metin";
import { PROJELER } from "./projeler";
import type { Malzeme, Proje } from "./types";

export type Yapabilir = {
  p: Proje;
  eksik: Malzeme[]; // alınması gerekenler (evde bulunur olanlar hariç)
  bende: number; // projede kullanılan, kullanıcıda olan kalem sayısı
  gerekli: number; // evde bulunur olmayan kalem sayısı
};

export const AZ_EKSIK = 2; // "1–2 eksik" grubu

export function yapabilecekler(bende: Iterable<string>, projeler: Proje[] = PROJELER): Yapabilir[] {
  const set = new Set(bende);
  if (set.size === 0) return [];
  const sonuc: Yapabilir[] = [];
  for (const p of projeler) {
    const gerekli = p.malzemeler.filter((m) => !m.evde);
    const eksik = gerekli.filter((m) => !set.has(m.kid!));
    const sende = gerekli.length - eksik.length;
    // Sahip olunan hiçbir kalemi kullanmayan proje önerilmez (yalnızca 2 malzemelik her proje "az eksik" görünmesin)
    if (sende === 0 || eksik.length > AZ_EKSIK) continue;
    sonuc.push({ p, eksik, bende: sende, gerekli: gerekli.length });
  }
  return sonuc.sort(
    (a, b) =>
      a.eksik.length - b.eksik.length ||
      Number(!!b.p.altin) - Number(!!a.p.altin) ||
      b.bende - a.bende ||
      a.p.ad.localeCompare(b.p.ad, "tr"),
  );
}

// Malzemelerim ekranı: evde bulunur olmayan katalog kalemleri, en çok projede geçen önce
const ALINABILIR = [...KALEMLER.values()]
  .filter((k) => !k.ornek.evde)
  .sort((a, b) => b.projeler.length - a.projeler.length || a.ad.localeCompare(b.ad, "tr"));
const KALEM_DIZIN = ALINABILIR.map((k) => ({ k, ad: katla(k.ad) }));

export function kalemAra(sorgu: string, sinir = 40): Kalem[] {
  const kelimeler = katla(sorgu).split(" ").filter(Boolean);
  if (!kelimeler.length) return [];
  return KALEM_DIZIN.filter((d) => kelimeler.every((w) => d.ad.includes(w)))
    .slice(0, sinir)
    .map((d) => d.k);
}

// Hızlı ekleme önerileri: sık geçen aletler/malzemeler (kullanıcıda olmayanlar)
export const sikKalemler = (haric: Iterable<string>, sinir = 12) => {
  const h = new Set(haric);
  return ALINABILIR.filter((k) => !h.has(k.kid)).slice(0, sinir);
};
