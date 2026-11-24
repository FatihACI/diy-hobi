// Proje Bulucu: birkaç soruya göre proje önerir.
import { kategoriBul } from "./kategoriler";
import { PROJELER } from "./projeler";
import { sureCoz } from "./sure";
import type { KategoriGrubu, Proje, Zorluk } from "./types";

export type Kimle = "kendim" | "kucuk" | "buyuk"; // kucuk: 3–6 yaş, buyuk: 7–12 yaş çocukla
export type Zaman = 60 | 180 | 480 | 0; // dakika üst sınırı (aktif çalışma); 0 = fark etmez
export type Deneyim = "yeni" | "biraz" | "usta";

export type Cevaplar = {
  kimle: Kimle;
  zaman: Zaman;
  deneyim: Deneyim;
  gruplar: KategoriGrubu[]; // boş = hepsi
};

const ZORLUKLAR: Record<Deneyim, Zorluk[]> = {
  yeni: ["Kolay"],
  biraz: ["Kolay", "Orta"],
  usta: ["Orta", "Zor"],
};

// "8+ yaş (gözetimle)" → 8
export const yasAlt = (yas?: string) => {
  const r = /(\d+)\s*\+/.exec(yas ?? "");
  return r ? Number(r[1]) : null;
};

export function uygunMu(p: Proje, c: Cevaplar): boolean {
  if (!ZORLUKLAR[c.deneyim].includes(p.zorluk)) return false;
  if (c.zaman && sureCoz(p.sure)[1] > c.zaman) return false;
  if (c.gruplar.length && !c.gruplar.includes(kategoriBul(p.kategoriId).grup)) return false;
  if (c.kimle !== "kendim") {
    // Yalnızca çocuğa uygunluğu belirtilmiş (yaş etiketli) projeler
    const alt = yasAlt(p.yas);
    if (alt === null || alt > (c.kimle === "kucuk" ? 6 : 12)) return false;
  }
  return true;
}

// Seçkin projeler önce (ayrıntılı anlatımlı), sonra kısa süreliler
export function oneriler(c: Cevaplar, projeler: Proje[] = PROJELER): Proje[] {
  return projeler
    .filter((p) => uygunMu(p, c))
    .sort(
      (a, b) =>
        Number(!!b.altin) - Number(!!a.altin) ||
        Number(!!b.sikHatalar) - Number(!!a.sikHatalar) ||
        sureCoz(a.sure)[1] - sureCoz(b.sure)[1] ||
        a.ad.localeCompare(b.ad, "tr"),
    );
}

// Sonuç yoksa kriterleri sırayla gevşet: önce süre, sonra ilgi alanı, sonra deneyim
export function gevset(c: Cevaplar): { cevap: Cevaplar; neyi: string } | null {
  if (c.zaman !== 0) return { cevap: { ...c, zaman: 0 }, neyi: "süre" };
  if (c.gruplar.length) return { cevap: { ...c, gruplar: [] }, neyi: "ilgi alanı" };
  if (c.deneyim !== "biraz") return { cevap: { ...c, deneyim: "biraz" }, neyi: "deneyim" };
  return null;
}
