import assert from "node:assert/strict";
import { test } from "node:test";
import { eslesiyorMu, kuralOlustur, normal, varsayilanArama } from "../eslestir.mjs";
import * as manuel from "../kaynaklar/manuel.mjs";
import * as xmlFeed from "../kaynaklar/xml-feed.mjs";
import { feedUrunleri, fiyatCoz } from "../kaynaklar/xml-feed.mjs";
import { calistir } from "../topla.mjs";

test("fiyat biçimleri çözülür", () => {
  assert.equal(fiyatCoz("1.234,50 TRY"), 1234.5);
  assert.equal(fiyatCoz("1234.50 TRY"), 1234.5);
  assert.equal(fiyatCoz("89,90 TL"), 89.9);
  assert.equal(fiyatCoz("1,234.50 TRY"), 1234.5);
});

test("Türkçe karakterler normalize edilir", () => {
  assert.equal(normal("Ahşap TEKERLEK Işık"), "ahsap tekerlek isik");
});

test("varsayılan arama ölçüleri atar", () => {
  assert.equal(varsayilanArama("Çam blok 4×8×18 cm"), "Çam blok");
  assert.equal(varsayilanArama("Hava hortumu"), "Hava hortumu");
  assert.equal(varsayilanArama("Florokarbon lider 0,25–0,30 mm").includes("Florokarbon lider"), true);
});

test("eşleştirme: zorunlu, hariç ve fiyat aralığı", () => {
  const k = kuralOlustur({ ad: "Hava hortumu" }, { haric: ["kompresör"] });
  assert.ok(eslesiyorMu("Akvaryum Hava Hortumu 5 m", 40, k));
  assert.ok(!eslesiyorMu("Kompresör Hava Hortumu", 40, k));
  assert.ok(!eslesiyorMu("Hava pompası", 40, k));
  const k2 = kuralOlustur({ ad: "LED" }, { zorunlu: ["led"], max: 100 });
  assert.ok(!eslesiyorMu("LED panel", 500, k2));
});

test("feed: indirimli fiyat ve stok durumu", () => {
  const xml = `<rss xmlns:g="x"><channel><item><title>A</title><link>https://a</link><g:price>100 TRY</g:price><g:sale_price>80 TRY</g:sale_price><g:availability>out of stock</g:availability></item></channel></rss>`;
  const [u] = feedUrunleri(xml);
  assert.equal(u.fiyat, 80);
  assert.equal(u.stokta, false);
});

test("uçtan uca: manuel + feed, bozuk feed diğerlerini durdurmaz", async () => {
  const kok = new URL("./ornek/", import.meta.url);
  const sessiz = { ad: "sahte", topla: async () => { throw new Error("çöktü"); } };
  const c = await calistir({ kok, kaynaklar: [manuel, xmlFeed, sessiz], bugun: "2026-11-03T00:00:00.000Z" });
  const f = c.fiyatlar;

  // Tekerlek: feed'deki 74,50 (indirimli) en ucuz, manuel 1049,90 ikinci
  assert.equal(f.aa2[0].fiyat, 74.5);
  assert.equal(f.aa2[0].magaza, "Test Mağazası A");
  assert.equal(f.aa2.length, 2); // aynı mağazadan tek teklif
  assert.equal(f.aa2[1].fiyat, 1049.9);
  assert.equal(f.aa2[1].guncelleme, "2026-11-01");

  // Hortum: kompresör hortumu hariç tutuldu, 0 TL'lik manuel satır elendi
  assert.equal(f.co5.length, 1);
  assert.equal(f.co5[0].fiyat, 39.9);

  // LED: şerit LED hariç
  assert.equal(f.tl3.length, 1);
  assert.equal(f.tl3[0].url, "https://ornek.test/a/5");

  // Sensör stokta yok → fiyat yok
  assert.equal(f.ns2, undefined);
});
