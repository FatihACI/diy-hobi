// Altın 40: seçim kuralları ve derin içeriğin bütünlüğü
import { describe, expect, test } from "@jest/globals";
import { ALTIN_40, ALTIN_ICERIK } from "../src/data/altin";
import { KATEGORILER } from "../src/data/kategoriler";
import { PROJELER } from "../src/data/projeler";

describe("Altın 40", () => {
  test("40 benzersiz, var olan proje; her kategoriden tam 2", () => {
    expect(new Set(ALTIN_40).size).toBe(40);
    for (const id of ALTIN_40) expect(PROJELER.find((p) => p.id === id)).toBeTruthy();
    for (const k of KATEGORILER)
      expect(PROJELER.filter((p) => p.kategoriId === k.id && p.altin).map((p) => p.id)).toHaveLength(2);
  });

  test("derin içerik yalnızca Altın projelerde ve kurallara uygun", () => {
    for (const [id, ic] of Object.entries(ALTIN_ICERIK)) {
      expect(ALTIN_40).toContain(id);
      const p = PROJELER.find((x) => x.id === id)!;
      // Kısa projeler (ör. kuş yemliği) 4–5 adımda biter; adım sayısı çizimlerle birebir eşleşir
      expect(p.adimlar.length).toBeGreaterThanOrEqual(4);
      for (const a of p.adimlar) {
        expect(a.sure).toBeTruthy();
        expect(a.kontrol).toBeTruthy();
        expect(a.aciklama.length).toBeGreaterThan(60); // tek cümlelik yüzeysel adım değil
      }
      expect(p.sikHatalar!.length).toBeGreaterThanOrEqual(3);
      // Değiştirilen malzemeler gerçekten projede var
      for (const mid of Object.keys(ic.malzemeDegistir ?? {}))
        expect(p.malzemeler.some((m) => m.id === mid)).toBe(true);
    }
  });

  test("güvenlik notları derin içerikte de korunur (eklenir, silinmez)", () => {
    for (const id of Object.keys(ALTIN_ICERIK)) {
      const p = PROJELER.find((x) => x.id === id)!;
      expect(p.guvenlik.length).toBeGreaterThan(0);
    }
  });
});
