// Uygulamadaki malzeme listesini toplayıcının okuyacağı JSON'a aktarır.
// Çalıştırma: npm run aktar
import { writeFileSync } from "node:fs";
import { PROJELER } from "../src/data/projeler";

const malzemeler = PROJELER.flatMap((p) =>
  p.malzemeler.map((m) => ({ id: m.id, ad: m.ad, miktar: m.miktar, projeId: p.id, kategoriId: p.kategoriId })),
);

writeFileSync(new URL("./veri/malzemeler.json", import.meta.url), JSON.stringify(malzemeler, null, 2));
console.log(`${malzemeler.length} malzeme aktarıldı → veri/malzemeler.json`);
