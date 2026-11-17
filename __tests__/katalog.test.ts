// Merkezi malzeme kataloğu: sabit kimlikler ve fiyat verisiyle tutarlılık
import { describe, expect, test } from "@jest/globals";
import { katalogKimligi } from "../src/data/katalog";
import { PROJELER } from "../src/data/projeler";

import ESLESME from "../fiyat-toplayici/veri/eslesme.json";
import AKTARILAN from "../fiyat-toplayici/veri/malzemeler.json";

// Jest Node'da çalışır; tip tanımı olmadan fs'e erişim (uygulama koduna Node tipi sızmasın)
declare const require: (m: string) => { readFileSync: (yol: string, k: string) => string };
const MANUEL: string = require("fs").readFileSync(`${process.cwd()}/fiyat-toplayici/veri/manuel.csv`, "utf8");

describe("katalog kimliği", () => {
  test("satın almayı değiştirmeyen parantez atılır", () => {
    expect(katalogKimligi("Ahşap tutkalı (D3)")).toBe("ahsap-tutkali");
    expect(katalogKimligi("Ahşap tutkalı")).toBe("ahsap-tutkali");
    expect(katalogKimligi("Polimer kil (pastel renkler)")).toBe("polimer-kil");
  });
  test("ürünü değiştiren parantez korunur", () => {
    expect(katalogKimligi("Silikon (akvaryum uyumlu)")).toBe("silikon-akvaryum-uyumlu");
    expect(katalogKimligi("Silikon")).toBe("silikon");
  });
  test("eş anlamlılar birleşir; oyuncak boyası EN 71-3'lü ürüne bağlanır", () => {
    expect(katalogKimligi("Su bazlı oyuncak boyası")).toBe("su-bazli-oyuncak-boyasi-en-71-3");
    expect(katalogKimligi("Kostik soda (saf NaOH)")).toBe(katalogKimligi("Kostik soda (sodyum hidroksit, saf)"));
  });
  test("her malzemenin katalog kimliği var ve URL dostu", () => {
    for (const p of PROJELER) for (const m of p.malzemeler) expect(m.kid).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
  });
  test("katalog satır sayısından belirgin şekilde az kalem üretir", () => {
    const kalem = new Set(PROJELER.flatMap((p) => p.malzemeler.map((m) => m.kid)));
    expect(kalem.size).toBeLessThan(1500);
  });
});

describe("fiyat toplayıcı verisi katalogla tutarlı", () => {
  const katalog = new Set(PROJELER.flatMap((p) => p.malzemeler.map((m) => m.kid!)));
  test("manuel.csv'deki her katalogId katalogda var", () => {
    const bilinmeyen = MANUEL.split(/\r?\n/)
      .filter((s: string) => s.trim() && !s.startsWith("#") && !s.startsWith("katalogId"))
      .map((s: string) => s.split(";")[0].trim())
      .filter((id: string) => !katalog.has(id));
    expect(bilinmeyen).toEqual([]);
  });
  test("eslesme.json anahtarları katalogda var", () => {
    expect(Object.keys(ESLESME).filter((id) => !katalog.has(id))).toEqual([]);
  });
  test("malzemeler.json güncel (npm run aktar çalıştırılmış)", () => {
    const aktarilan = new Set((AKTARILAN as { id: string }[]).map((k) => k.id));
    expect([...katalog].filter((k) => !aktarilan.has(k))).toEqual([]);
  });
});
