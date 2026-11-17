// Fiyat girme öncelik listesi: hangi katalog kalemine fiyat girilirse en çok proje tamamlanır?
// Çıktı: veri/fiyat-oncelik.md  ·  Çalıştırma: npm run oncelik (önce npm run aktar && npm run topla)
import { readFileSync, writeFileSync } from "node:fs";

const oku = (y) => JSON.parse(readFileSync(new URL(y, import.meta.url), "utf8"));
// Evde bulunan / ücretsiz kalemler (su, pet şişe, dilimleme yazılımı…) fiyat beklemez
const katalog = oku("./veri/malzemeler.json").filter((k) => !k.evde);
const fiyatlar = oku("./cikti/fiyatlar.json").fiyatlar;
const fiyatli = new Set(Object.keys(fiyatlar));

// Proje → katalog kalemleri; bir projenin kaç kalemi eksik?
const projeKalem = {};
for (const k of katalog) for (const p of k.projeler) (projeKalem[p] ??= []).push(k.id);
const eksikSayisi = (p) => projeKalem[p].filter((id) => !fiyatli.has(id)).length;

const satir = katalog.reduce((t, k) => t + k.satirlar.length, 0);
const kapsanan = katalog.filter((k) => fiyatli.has(k.id)).reduce((t, k) => t + k.satirlar.length, 0);
const tamProje = Object.keys(projeKalem).filter((p) => eksikSayisi(p) === 0).length;

// Puan: geçtiği proje sayısı + eksik kalemi az projelere katkı (o projeyi tamamlamaya yakınlaştırır)
const adaylar = katalog
  .filter((k) => !fiyatli.has(k.id))
  .map((k) => ({ ...k, puan: k.projeler.length + k.projeler.filter((p) => eksikSayisi(p) <= 2).length * 0.5 }))
  .sort((a, b) => b.puan - a.puan || a.id.localeCompare(b.id))
  .slice(0, 100);

const md = [
  "# Fiyat girme öncelik listesi",
  "",
  `Otomatik üretildi: \`npm run oncelik\` · ${new Date().toISOString().slice(0, 10)}`,
  "",
  `- Katalog kalemi: **${katalog.length}** · fiyatlı: **${fiyatli.size}**`,
  `- Malzeme satırı kapsamı: **${kapsanan} / ${satir}** (%${((kapsanan / satir) * 100).toFixed(1)})`,
  `- Tüm malzemelerinin fiyatı bilinen proje: **${tamProje} / ${Object.keys(projeKalem).length}**`,
  "",
  "Nasıl girilir: `veri/manuel.csv` → `katalogId;mağaza;fiyat;ürün-linki;tarih`. Link **ürün sayfası** olmalı (kategori/arama sayfası değil).",
  "Alet olan kalemlerde (⚒) en uygun fiyatlı güvenilir ürünü seç; sarf malzemede en küçük uygun paketi seç.",
  "",
  "| # | katalogId | Ad | Proje | Tür |",
  "|---|---|---|---|---|",
  ...adaylar.map(
    (k, i) =>
      `| ${i + 1} | \`${k.id}\` | ${k.ad.replace(/\|/g, "/")} | ${k.projeler.length} | ${k.arac ? "⚒ alet" : "sarf"} |`,
  ),
  "",
];
writeFileSync(new URL("./veri/fiyat-oncelik.md", import.meta.url), md.join("\n"));
console.log(`İlk 100 aday → veri/fiyat-oncelik.md · kapsam %${((kapsanan / satir) * 100).toFixed(1)}`);
