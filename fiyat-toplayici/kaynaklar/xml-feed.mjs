// Kaynak 2: Mağazaların XML ürün feed'leri (Google Merchant / Google Alışveriş biçimi).
// Türkiye'deki birçok e-ticaret altyapısı (ikas, Ticimax, IdeaSoft, Shopify, WooCommerce eklentileri)
// bu feed'i otomatik üretir. Akakçe/Cimri de mağazalardan bu yolla veri alır.
// Mağazadan feed linki izinle alınır → veri/feedler.json'a eklenir:
//   [{ "magaza": "Örnek Akvaryum", "url": "https://.../google-feed.xml" }]
//   (test için "dosya": "test/ornek-feed.xml" de kullanılabilir)
import { existsSync, readFileSync } from "node:fs";
import { XMLParser } from "fast-xml-parser";
import { eslesiyorMu } from "../eslestir.mjs";

export const ad = "xml-feed";

// "1.234,50 TRY", "1234.50 TRY", "1.234,50 TL" → 1234.5
export function fiyatCoz(s) {
  if (s == null) return NaN;
  let t = String(s).replace(/[^\d.,]/g, "");
  if (t.includes(",") && t.lastIndexOf(",") > t.lastIndexOf(".")) t = t.replace(/\./g, "").replace(",", ".");
  else t = t.replace(/,/g, "");
  return Number(t);
}

export function feedUrunleri(xml) {
  const p = new XMLParser({ ignoreAttributes: true, removeNSPrefix: true });
  const j = p.parse(xml);
  // RSS 2.0 (channel.item) veya Atom (feed.entry)
  let items = j?.rss?.channel?.item ?? j?.feed?.entry ?? [];
  if (!Array.isArray(items)) items = [items];
  return items
    .map((it) => {
      const indirimli = fiyatCoz(it.sale_price);
      const normalFiyat = fiyatCoz(it.price);
      return {
        baslik: String(it.title ?? ""),
        url: String(it.link ?? ""),
        fiyat: indirimli > 0 ? indirimli : normalFiyat,
        stokta: !it.availability || /in.?stock|stokta/i.test(String(it.availability)),
      };
    })
    .filter((u) => u.baslik && u.url && u.fiyat > 0);
}

export async function topla({ malzemeler, kurallar, kok, log }) {
  const yol = new URL("veri/feedler.json", kok);
  if (!existsSync(yol)) return [];
  const feedler = JSON.parse(readFileSync(yol, "utf8"));
  const sonuc = [];
  for (const f of feedler) {
    let xml;
    try {
      xml = f.dosya
        ? readFileSync(new URL(f.dosya, kok), "utf8")
        : await (await fetch(f.url, { headers: { "User-Agent": "EvdeHobi-FiyatToplayici/1.0" } })).text();
    } catch (e) {
      log(`  ! ${f.magaza}: feed okunamadı (${e.message})`);
      continue;
    }
    const urunler = feedUrunleri(xml).filter((u) => u.stokta);
    let n = 0;
    for (const m of malzemeler) {
      for (const u of urunler) {
        if (eslesiyorMu(u.baslik, u.fiyat, kurallar[m.id])) {
          sonuc.push({ malzemeId: m.id, magaza: f.magaza, fiyat: u.fiyat, url: u.url, baslik: u.baslik });
          n++;
        }
      }
    }
    log(`  ${f.magaza}: ${urunler.length} ürün, ${n} eşleşme`);
  }
  return sonuc;
}
