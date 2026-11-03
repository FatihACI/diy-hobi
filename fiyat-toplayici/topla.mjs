// Fiyat toplayıcı: tüm kaynaklardan teklifleri toplar, her malzeme için en ucuz 3 teklifi
// cikti/fiyatlar.json dosyasına yazar. Uygulama bu dosyayı internetten okur.
// Çalıştırma: npm run topla   (önce bir kez: npm run aktar)
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { kuralOlustur } from "./eslestir.mjs";
import * as amazon from "./kaynaklar/amazon-tr.mjs";
import * as manuel from "./kaynaklar/manuel.mjs";
import * as xmlFeed from "./kaynaklar/xml-feed.mjs";

const KOK = new URL("./", import.meta.url);
const KAYNAKLAR = [manuel, xmlFeed, amazon];
const log = (s) => console.log(s);
const okuJson = (kok, yol, varsayilan) =>
  existsSync(new URL(yol, kok)) ? JSON.parse(readFileSync(new URL(yol, kok), "utf8")) : varsayilan;

export async function calistir({ kaynaklar = KAYNAKLAR, bugun = new Date().toISOString(), kok = KOK } = {}) {
  const oku = (yol, v) => okuJson(kok, yol, v);
  const malzemeler = oku("veri/malzemeler.json", null);
  if (!malzemeler) throw new Error("veri/malzemeler.json yok. Önce: npm run aktar");
  const ozelKurallar = oku("veri/eslesme.json", {});
  const kurallar = Object.fromEntries(malzemeler.map((m) => [m.id, kuralOlustur(m, ozelKurallar[m.id])]));

  const teklifler = [];
  for (const k of kaynaklar) {
    log(`▶ ${k.ad}`);
    try {
      const t = await k.topla({ malzemeler, kurallar, kok, log });
      log(`  ${t.length} teklif`);
      teklifler.push(...t);
    } catch (e) {
      log(`  ! ${k.ad} başarısız: ${e.message}`); // bir kaynak çökerse diğerleri devam eder
    }
  }

  // Malzeme başına: aynı mağazadan yalnızca en ucuzu, sonra en ucuz 3 mağaza
  const fiyatlar = {};
  for (const m of malzemeler) {
    const enUcuzMagaza = new Map();
    for (const t of teklifler.filter((x) => x.malzemeId === m.id)) {
      const mevcut = enUcuzMagaza.get(t.magaza);
      if (!mevcut || t.fiyat < mevcut.fiyat) enUcuzMagaza.set(t.magaza, t);
    }
    const ilk3 = [...enUcuzMagaza.values()].sort((a, b) => a.fiyat - b.fiyat).slice(0, 3);
    if (ilk3.length) {
      fiyatlar[m.id] = ilk3.map((t) => ({
        magaza: t.magaza,
        fiyat: Math.round(t.fiyat * 100) / 100,
        url: t.url,
        guncelleme: t.guncelleme ?? bugun,
      }));
    }
  }

  const cikti = { surum: 1, guncelleme: bugun, fiyatlar };
  mkdirSync(new URL("cikti/", kok), { recursive: true });
  writeFileSync(new URL("cikti/fiyatlar.json", kok), JSON.stringify(cikti, null, 2));
  log(`✔ ${Object.keys(fiyatlar).length}/${malzemeler.length} malzemenin fiyatı bulundu → cikti/fiyatlar.json`);
  return cikti;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  calistir().catch((e) => {
    console.error(e.message);
    process.exit(1);
  });
}
