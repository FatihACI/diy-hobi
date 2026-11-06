// Güvenlik notları: her projede en az bir not olmalı ve riskli malzemeler için
// temel uyarılar eksik kalmamalı (guvenlik-kurallari.ts).
import { describe, expect, test } from "@jest/globals";
import { PROJELER } from "../src/data/projeler";
import { GUVENLIK_KURALLARI, guvenlikTamamla } from "../src/data/guvenlik-kurallari";

const kucuk = (s: string) => s.toLocaleLowerCase("tr");
const metin = (p: (typeof PROJELER)[number]) =>
  kucuk([p.ad, ...p.malzemeler.map((m) => m.ad), ...p.adimlar.map((a) => `${a.baslik} ${a.aciklama}`)].join(" "));

describe("güvenlik notları", () => {
  test("her projede en az bir güvenlik notu var", () => {
    const bos = PROJELER.filter((p) => p.guvenlik.length === 0).map((p) => p.id);
    expect(bos).toEqual([]);
  });

  test("tamamlayıcı ikinci kez not eklemez", () => {
    for (const p of PROJELER) expect(guvenlikTamamla(p).guvenlik).toEqual(p.guvenlik);
  });

  test("aynı not bir projede iki kez geçmez", () => {
    for (const p of PROJELER) expect(new Set(p.guvenlik).size).toBe(p.guvenlik.length);
  });

  for (const k of GUVENLIK_KURALLARI) {
    test(`kural: ${k.ad}`, () => {
      const eksik = PROJELER.filter(
        (p) =>
          (!k.sadeceCocuk || p.yas) &&
          (!k.kategoriler || k.kategoriler.includes(p.kategoriId)) &&
          k.tetik.test(metin(p)) &&
          !k.var.test(kucuk(p.guvenlik.join(" "))),
      ).map((p) => p.id);
      expect(eksik).toEqual([]);
    });
  }

  test("soğuk işlem sabunda kostik sırası uyarısı var", () => {
    const p = PROJELER.find((x) => x.id === "soguk-sabun")!;
    expect(kucuk(p.guvenlik.join(" "))).toMatch(/suya ekle/);
  });
});
