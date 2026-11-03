// İçerik bütünlüğü: id'ler benzersiz, her proje/kategori eksiksiz ve çizimli
import { describe, expect, test } from "@jest/globals";
import { TUM_KATEGORI_CIZIM, TUM_PROJE_CIZIM } from "../src/cizimler";
import { KATEGORILER } from "../src/data/kategoriler";
import { PROJELER } from "../src/data/projeler";

describe("içerik", () => {
  test("20 kategori, id'ler benzersiz, hepsinin çizimi var", () => {
    expect(KATEGORILER).toHaveLength(20);
    expect(new Set(KATEGORILER.map((k) => k.id)).size).toBe(20);
    for (const k of KATEGORILER) expect(TUM_KATEGORI_CIZIM[k.id]).toBeDefined();
  });

  test("proje ve malzeme id'leri benzersiz", () => {
    const pid = PROJELER.map((p) => p.id);
    expect(new Set(pid).size).toBe(pid.length);
    const mid = PROJELER.flatMap((p) => p.malzemeler.map((m) => m.id));
    expect(mid.filter((x, i) => mid.indexOf(x) !== i)).toEqual([]);
  });

  test("her kategoride en az 3 proje", () => {
    for (const k of KATEGORILER) expect([k.id, PROJELER.filter((p) => p.kategoriId === k.id).length >= 3]).toEqual([k.id, true]);
  });

  test("her proje eksiksiz ve çizimli", () => {
    for (const p of PROJELER) {
      expect(KATEGORILER.some((k) => k.id === p.kategoriId)).toBe(true);
      expect([p.id, !!TUM_PROJE_CIZIM[p.id]]).toEqual([p.id, true]);
      expect(p.malzemeler.length).toBeGreaterThanOrEqual(3);
      expect(p.adimlar.length).toBeGreaterThanOrEqual(3);
      expect(p.guvenlik.length).toBeGreaterThanOrEqual(1);
      expect(p.ipuclari.length).toBeGreaterThanOrEqual(1);
    }
  });
});
