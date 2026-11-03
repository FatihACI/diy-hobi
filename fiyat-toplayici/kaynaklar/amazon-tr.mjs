// Kaynak 3: Amazon.com.tr — Amazon Creators API (eski PA-API'nin yerini aldı).
// ⚠️ HENÜZ GERÇEK HESAPLA TEST EDİLMEDİ. Kimlik bilgisi yoksa bu kaynak sessizce atlanır.
//
// Gerekenler (Amazon Gelir Ortaklığı: gelirortakligi.amazon.com.tr):
//   AMAZON_CLIENT_ID, AMAZON_CLIENT_SECRET  → Associates Central > Tools > Creators API > Create Application
//   AMAZON_PARTNER_TAG                      → örn. evdehobi-21
// İsteğe bağlı (dokümana göre değişirse buradan düzelt):
//   AMAZON_TOKEN_URL   (varsayılan: AB bölgesi v3.2 → https://api.amazon.co.uk/auth/o2/token)
//   AMAZON_TOKEN_SCOPE (varsayılan: creatorsapi::default)
//   AMAZON_SEARCH_URL  (varsayılan: https://creatorsapi.amazon/catalog/v1/searchItems)
import { eslesiyorMu } from "../eslestir.mjs";

export const ad = "amazon-tr";
const env = process.env;
const bekle = (ms) => new Promise((r) => setTimeout(r, ms));

async function tokenAl() {
  const r = await fetch(env.AMAZON_TOKEN_URL ?? "https://api.amazon.co.uk/auth/o2/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "client_credentials",
      client_id: env.AMAZON_CLIENT_ID,
      client_secret: env.AMAZON_CLIENT_SECRET,
      scope: env.AMAZON_TOKEN_SCOPE ?? "creatorsapi::default",
    }),
  });
  if (!r.ok) throw new Error(`token ${r.status}: ${await r.text()}`);
  return (await r.json()).access_token;
}

async function ara(token, kelimeler) {
  const r = await fetch(env.AMAZON_SEARCH_URL ?? "https://creatorsapi.amazon/catalog/v1/searchItems", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      "x-marketplace": "www.amazon.com.tr",
    },
    body: JSON.stringify({
      partnerTag: env.AMAZON_PARTNER_TAG,
      marketplace: "www.amazon.com.tr",
      keywords: kelimeler,
      searchIndex: "All",
      itemCount: 10,
      resources: ["itemInfo.title", "offersV2.listings.price"],
    }),
  });
  if (!r.ok) throw new Error(`arama ${r.status}: ${await r.text()}`);
  return (await r.json())?.searchResult?.items ?? [];
}

export async function topla({ malzemeler, kurallar, log }) {
  if (!env.AMAZON_CLIENT_ID || !env.AMAZON_CLIENT_SECRET || !env.AMAZON_PARTNER_TAG) {
    log("  (Amazon kimlik bilgisi yok, atlandı)");
    return [];
  }
  const token = await tokenAl();
  const sonuc = [];
  for (const m of malzemeler) {
    const kural = kurallar[m.id];
    try {
      const items = await ara(token, kural.arama);
      for (const it of items) {
        const baslik = it?.itemInfo?.title?.displayValue ?? "";
        const fiyat = it?.offersV2?.listings?.[0]?.price?.money?.amount;
        if (fiyat && eslesiyorMu(baslik, fiyat, kural)) {
          sonuc.push({ malzemeId: m.id, magaza: "Amazon.com.tr", fiyat, url: it.detailPageURL, baslik });
        }
      }
    } catch (e) {
      log(`  ! ${m.id}: ${e.message}`);
    }
    await bekle(1100); // istek sınırına takılmamak için ~1 istek/sn
  }
  return sonuc;
}
