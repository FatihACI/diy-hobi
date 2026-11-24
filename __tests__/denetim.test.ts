// 17 Kasım denetiminde bulunan hataların geri gelmemesi için testler
import { describe, expect, jest, test } from "@jest/globals";
import { katla, projeAra } from "../src/data/ara";
import { kategoriBul } from "../src/data/kategoriler";
import { PROJELER } from "../src/data/projeler";
import { fiyatTarihi } from "../src/fiyat";
import { temizle, v1Tasi } from "../src/store";

jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock"),
);

describe("Türkçe karakter duyarsız arama", () => {
  test("katla Türkçe harfleri sadeleştirir", () => {
    expect(katla("  Kuş   EVİ Çiçek ğüöı ")).toBe("kus evi cicek guoi");
  });
  test("Türkçe klavyesiz yazılan sorgu bulur", () => {
    const tr = projeAra("kuş evi").map((p) => p.id);
    expect(tr.length).toBeGreaterThan(0);
    expect(projeAra("kus evi").map((p) => p.id)).toEqual(tr);
  });
  test("çok kelimeli sorguda tüm kelimeler geçmeli", () => {
    for (const p of projeAra("sabun kalıp")) {
      const metin = katla([p.ad, p.ozet, kategoriBul(p.kategoriId).ad, ...p.malzemeler.map((m) => m.ad)].join(" "));
      expect(metin).toContain("sabun");
      expect(metin).toContain("kalip");
    }
  });
  test("adında geçen proje üstte", () => {
    const ilk = projeAra("sabun")[0];
    expect(katla(ilk.ad)).toContain("sabun");
  });
  test("boş sorgu boş sonuç", () => expect(projeAra("   ")).toEqual([]));
});

describe("Fiyat tarihi", () => {
  test("dosyanın yazılma zamanı değil, en son kontrol edilen teklifin tarihi", () => {
    const d = {
      surum: 1,
      guncelleme: "2026-11-17T06:17:00Z",
      fiyatlar: {
        a: [{ magaza: "X", fiyat: 10, url: "https://x", guncelleme: "2026-11-06" }],
        b: [{ magaza: "Y", fiyat: 12, url: "https://y", guncelleme: "2026-11-08" }],
      },
    };
    expect(fiyatTarihi(d)).toBe("2026-11-08");
  });
  test("teklif yoksa dosya tarihine düşer", () => {
    expect(fiyatTarihi({ surum: 1, guncelleme: "2026-11-17", fiyatlar: {} })).toBe("2026-11-17");
  });
});

describe("Telefondaki kayıt temizliği", () => {
  const p = PROJELER[0];
  const kid = p.malzemeler[0].kid!;
  test("silinmiş proje/malzeme ve geçersiz adım numaraları atılır", () => {
    const sonuc = temizle({
      favoriler: [p.id, "olmayan-proje"],
      liste: {
        [kid]: { projeler: [p.id, "yok"], alindi: false },
        "hayalet-kalem": { projeler: [p.id], alindi: false },
      },
      bende: [kid, "hayalet"],
      bitenAdimlar: { [p.id]: [0, 999, -1], yok: [0] },
    });
    expect(sonuc.favoriler).toEqual([p.id]);
    expect(sonuc.liste).toEqual({ [kid]: { projeler: [p.id], alindi: false } });
    expect(sonuc.bende).toEqual([kid]);
    expect(sonuc.bitenAdimlar).toEqual({ [p.id]: [0] });
  });
  test("bozuk kayıt çökertmez", () => {
    expect(temizle({} as never)).toEqual({ favoriler: [], liste: {}, bende: [], bitenAdimlar: {}, tamamlanan: {} });
  });
});

describe("Eski (v1) kayıt katalog kimliğine taşınır", () => {
  test("aynı malzeme iki projeden gelince tek kalem, alınmamışsa alınmadı", () => {
    // Aynı katalog kalemini paylaşan iki farklı projedeki malzemeyi bul
    const satirlar = PROJELER.flatMap((p) => p.malzemeler.map((m) => ({ p, m })));
    const ilk = satirlar.find((a) => satirlar.some((b) => b.m.kid === a.m.kid && b.p.id !== a.p.id))!;
    const ikinci = satirlar.find((b) => b.m.kid === ilk.m.kid && b.p.id !== ilk.p.id)!;
    const d = v1Tasi({
      favoriler: [ilk.p.id],
      liste: {
        [ilk.m.id]: { projeId: ilk.p.id, alindi: true },
        [ikinci.m.id]: { projeId: ikinci.p.id, alindi: false },
        silinmis: { projeId: "x", alindi: false },
      },
      bitenAdimlar: {},
    });
    expect(Object.keys(d.liste)).toEqual([ilk.m.kid]);
    expect(d.liste[ilk.m.kid!]).toEqual({ projeler: [ilk.p.id, ikinci.p.id], alindi: false });
    expect(d.favoriler).toEqual([ilk.p.id]);
  });
});
