// Katalog kalemlerinin dizini: her kalem hangi projelerde, hangi miktarda geçiyor.
// (katalog.ts projeleri içe aktaramaz — projeler onu kullanıyor; dizin bu yüzden ayrı dosyada.)
import { PROJELER } from "./projeler";
import type { Malzeme } from "./types";

export type Kalem = {
  kid: string;
  ad: string; // ilk geçtiği projedeki ad
  arac: boolean;
  ornek: Malzeme; // fiyat sorgusu için (kid taşır)
  projeler: { projeId: string; miktar: string }[];
};

export const KALEMLER = new Map<string, Kalem>();
for (const p of PROJELER)
  for (const m of p.malzemeler) {
    const k = KALEMLER.get(m.kid!) ?? { kid: m.kid!, ad: m.ad, arac: !!m.arac, ornek: m, projeler: [] };
    if (!k.projeler.some((x) => x.projeId === p.id)) k.projeler.push({ projeId: p.id, miktar: m.miktar });
    KALEMLER.set(k.kid, k);
  }

// Eski kayıtlar (malzeme kimliğiyle tutulan liste) için: malzeme kimliği → katalog kimliği
export const MALZEME_KID = new Map(PROJELER.flatMap((p) => p.malzemeler.map((m) => [m.id, m.kid!] as const)));
