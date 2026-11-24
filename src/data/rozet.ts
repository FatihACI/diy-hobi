// Tamamlanan projelere göre seviye ve rozetler (Bronz → Elmas).
import { GRUPLAR, kategoriBul } from "./kategoriler";
import { PROJELER } from "./projeler";
import type { IkonAdi, KategoriGrubu, Proje } from "./types";

export type Ilerleme = {
  tamamlanan: string[]; // proje id'leri
  bitenAdimSayisi: number;
  bendeSayisi: number;
};

export type Seviye = { ad: string; esik: number; renk: string; ikon: IkonAdi };
export const SEVIYELER: Seviye[] = [
  { ad: "Çırak", esik: 0, renk: "#9CA3AF", ikon: "hammer-wrench" },
  { ad: "Bronz", esik: 1, renk: "#B45309", ikon: "medal" },
  { ad: "Gümüş", esik: 3, renk: "#94A3B8", ikon: "medal" },
  { ad: "Altın", esik: 6, renk: "#EAB308", ikon: "medal" },
  { ad: "Platin", esik: 10, renk: "#14B8A6", ikon: "trophy" },
  { ad: "Elmas", esik: 20, renk: "#6366F1", ikon: "diamond-stone" },
];

export function seviye(tamamlananSayi: number) {
  let i = 0;
  while (i + 1 < SEVIYELER.length && tamamlananSayi >= SEVIYELER[i + 1].esik) i++;
  const simdiki = SEVIYELER[i];
  const sonraki = SEVIYELER[i + 1] ?? null;
  const oran = sonraki ? (tamamlananSayi - simdiki.esik) / (sonraki.esik - simdiki.esik) : 1;
  return { simdiki, sonraki, oran };
}

export type Rozet = {
  id: string;
  ad: string;
  aciklama: string;
  ikon: IkonAdi;
  // [ilerleme, hedef]
  olc: (p: Proje[], x: Ilerleme) => [number, number];
};

const grupSay = (p: Proje[], g: KategoriGrubu) => p.filter((x) => kategoriBul(x.kategoriId).grup === g).length;
const GRUP_IKON: Record<KategoriGrubu, IkonAdi> = {
  "Çocuk & Oyun": "puzzle-outline",
  "Doğa & Hayvan": "pine-tree",
  "El Sanatları": "palette-swatch-outline",
  "Teknik & Ev": "tools",
};

export const ROZETLER: Rozet[] = [
  { id: "ilk", ad: "İlk adım", aciklama: "İlk projeni tamamla", ikon: "flag-checkered", olc: (p) => [p.length, 1] },
  { id: "bes", ad: "Hamarat eller", aciklama: "5 proje tamamla", ikon: "hand-back-right", olc: (p) => [p.length, 5] },
  ...GRUPLAR.map((g): Rozet => ({
    id: `grup-${g}`,
    ad: `${g} kâşifi`,
    aciklama: `${g} grubunda bir proje tamamla`,
    ikon: GRUP_IKON[g],
    olc: (p) => [grupSay(p, g), 1],
  })),
  {
    id: "cok-yonlu",
    ad: "Çok yönlü",
    aciklama: "Dört grubun hepsinde birer proje tamamla",
    ikon: "compass-rose",
    olc: (p) => [GRUPLAR.filter((g) => grupSay(p, g) > 0).length, GRUPLAR.length],
  },
  {
    id: "uzman",
    ad: "Kategori uzmanı",
    aciklama: "Aynı kategoride 3 proje tamamla",
    ikon: "school",
    olc: (p) => {
      const say: Record<string, number> = {};
      for (const x of p) say[x.kategoriId] = (say[x.kategoriId] ?? 0) + 1;
      return [Math.max(0, ...Object.values(say)), 3];
    },
  },
  {
    id: "zor",
    ad: "Zor iş",
    aciklama: "Zor seviyede bir proje tamamla",
    ikon: "arm-flex",
    olc: (p) => [p.filter((x) => x.zorluk === "Zor").length, 1],
  },
  {
    id: "seckin",
    ad: "Seçkin koleksiyon",
    aciklama: "3 seçkin proje tamamla",
    ikon: "star-circle",
    olc: (p) => [p.filter((x) => x.altin).length, 3],
  },
  {
    id: "titiz",
    ad: "Adım adım",
    aciklama: "Toplam 50 adımı işaretle",
    ikon: "format-list-checks",
    olc: (_, x) => [x.bitenAdimSayisi, 50],
  },
  {
    id: "atolye",
    ad: "Atölye kurdum",
    aciklama: "15 malzeme veya aleti 'Bende var' olarak işaretle",
    ikon: "toolbox",
    olc: (_, x) => [x.bendeSayisi, 15],
  },
];

export type RozetDurum = { r: Rozet; ilerleme: number; hedef: number; kazanildi: boolean };

export function rozetDurumlari(x: Ilerleme, projeler: Proje[] = PROJELER): RozetDurum[] {
  const harita = new Map(projeler.map((p) => [p.id, p]));
  const biten = x.tamamlanan.map((id) => harita.get(id)).filter((p): p is Proje => !!p);
  return ROZETLER.map((r) => {
    const [ilerleme, hedef] = r.olc(biten, x);
    return { r, ilerleme: Math.min(ilerleme, hedef), hedef, kazanildi: ilerleme >= hedef };
  });
}

export const kazanilanlar = (x: Ilerleme) =>
  rozetDurumlari(x)
    .filter((d) => d.kazanildi)
    .map((d) => d.r.id);
