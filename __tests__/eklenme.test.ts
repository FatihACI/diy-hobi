// "Son eklenenler": her projenin eklenme tarihi olmalı (yeni proje eklerken src/data/eklenme.json'a da yaz)
import { describe, expect, test } from "@jest/globals";
import EKLENME from "../src/data/eklenme.json";
import { PROJELER, sonEklenenler } from "../src/data/projeler";

describe("eklenme tarihi", () => {
  test("her projenin geçerli bir eklenme tarihi var", () => {
    const eksik = PROJELER.filter((p) => !/^\d{4}-\d{2}-\d{2}$/.test(p.eklenme ?? "")).map((p) => p.id);
    expect(eksik).toEqual([]);
    for (const p of PROJELER) expect(Number.isNaN(Date.parse(p.eklenme!))).toBe(false);
  });

  test("eklenme.json'da olmayan proje id'si yok", () => {
    const ids = new Set(PROJELER.map((p) => p.id));
    expect(Object.keys(EKLENME).filter((k) => !ids.has(k))).toEqual([]);
  });

  test("son eklenenler yeniden eskiye sıralı", () => {
    const son = sonEklenenler(6);
    expect(son).toHaveLength(6);
    const enYeni = PROJELER.map((p) => p.eklenme!)
      .sort()
      .at(-1);
    expect(son[0].eklenme).toBe(enYeni);
    for (let i = 1; i < son.length; i++) expect(son[i - 1].eklenme! >= son[i].eklenme!).toBe(true);
  });
});
