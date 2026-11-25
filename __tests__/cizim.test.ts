// Çizim yollarında geçersiz sayı olmamalı: tarayıcı NaN'ı yok sayar ama Android çöker.
import { describe, expect, test } from "@jest/globals";
import { taramaYollari } from "../src/cizim/arac";
import { TUM_KATEGORI_CIZIM, TUM_PROJE_CIZIM } from "../src/cizimler";
import { ADIM_CIZIM } from "../src/cizim/adim";
import { PROJELER } from "../src/data/projeler";

const GECERSIZ = /NaN|undefined|Infinity|null/;
// SVG yolunda yalnızca komut harfleri, sayılar, boşluk, eksi, nokta ve virgül olabilir
const IZINLI = /^[MLHVCSQTAZmlhvcsqtaz0-9\s.,-]*$/; // bilimsel gösterim (1e-16) yok

const adimlar = Object.fromEntries(
  Object.entries(ADIM_CIZIM).flatMap(([id, liste]) => liste.map((c, i) => [`${id}#adim${i + 1}`, c])),
);
const hepsi = { ...TUM_KATEGORI_CIZIM, ...TUM_PROJE_CIZIM, ...adimlar };

describe("çizim yolları", () => {
  for (const [ad, c] of Object.entries(hepsi)) {
    test(ad, () => {
      const yollar = [
        ...c.cizgiler.map((s) => s.d),
        ...(c.taramalar ?? []).flatMap((t) => [t.sinir, taramaYollari(t.kutu, t.aralik ?? 4, t.ters)]),
      ];
      for (const d of yollar) {
        expect([ad, GECERSIZ.test(d)]).toEqual([ad, false]);
        expect([ad, IZINLI.test(d)]).toEqual([ad, true]);
        expect(d.trim().length).toBeGreaterThan(0);
      }
      for (const [x, y, r] of c.noktalar ?? []) expect([x, y, r].every(Number.isFinite)).toBe(true);
    });
  }
});

describe("adım çizimleri", () => {
  for (const [id, liste] of Object.entries(ADIM_CIZIM)) {
    test(`${id}: proje var ve çizim sayısı adım sayısını geçmiyor`, () => {
      const p = PROJELER.find((x) => x.id === id);
      expect(p).toBeDefined();
      expect(liste.length).toBeGreaterThan(0);
      expect(liste.length).toBeLessThanOrEqual(p!.adimlar.length);
    });
  }
});
