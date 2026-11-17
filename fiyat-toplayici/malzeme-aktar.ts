// Uygulamadaki malzemeleri KATALOG kalemlerine indirger ve toplayıcının okuyacağı JSON'a yazar.
// Aynı ürün 10 projede geçse de tek kalemdir → fiyat bir kez bulunur/girilir.
// Çalıştırma: npm run aktar
import { writeFileSync } from "node:fs";
import { PROJELER } from "../src/data/projeler";

type Kalem = { id: string; ad: string; arac: boolean; projeler: string[]; satirlar: string[] };
const katalog = new Map<string, Kalem>();
for (const p of PROJELER)
  for (const m of p.malzemeler) {
    const k = katalog.get(m.kid!) ?? { id: m.kid!, ad: m.ad, arac: !!m.arac, projeler: [], satirlar: [] };
    if (!k.projeler.includes(p.id)) k.projeler.push(p.id);
    k.satirlar.push(m.id);
    katalog.set(k.id, k);
  }

// En çok projede geçen önce: fiyat girerken öncelik sırası
const malzemeler = [...katalog.values()].sort(
  (a, b) => b.projeler.length - a.projeler.length || a.id.localeCompare(b.id),
);
writeFileSync(new URL("./veri/malzemeler.json", import.meta.url), JSON.stringify(malzemeler, null, 2));
const satir = malzemeler.reduce((t, k) => t + k.satirlar.length, 0);
console.log(`${satir} malzeme satırı → ${malzemeler.length} katalog kalemi → veri/malzemeler.json`);
