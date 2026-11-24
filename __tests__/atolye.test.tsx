// Atölyem özellikleri: Elimdekilerle yap, Proje Bulucu, rozetler, hesaplayıcılar, karanlık mod.
import { describe, expect, jest, test } from "@jest/globals";
import { fireEvent, render, screen } from "@testing-library/react-native";
import App from "../App";
import { ARACLAR, e12Ust, sayiOku, varsayilanlar, aracBul } from "../src/data/araclar";
import { Cevaplar, gevset, oneriler, uygunMu, yasAlt } from "../src/data/bulucu";
import { GRUPLAR, KATEGORILER } from "../src/data/kategoriler";
import { PROJELER } from "../src/data/projeler";
import { ROZETLER, rozetDurumlari, seviye } from "../src/data/rozet";
import { sureCoz } from "../src/data/sure";
import { kalemAra, sikKalemler, yapabilecekler } from "../src/data/yapabilir";
import { temizle } from "../src/store";
import { renk, stil, temaKoyuMu, temaUygula } from "../src/theme";

jest.mock("react-native-safe-area-context", () => require("react-native-safe-area-context/jest/mock").default);
jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock"),
);

describe("Elimdekilerle yap", () => {
  test("hiçbir şey yoksa öneri yok", () => {
    expect(yapabilecekler([])).toEqual([]);
  });
  test("bir projenin tüm kalemleri varsa 'hazır' gelir, en başta", () => {
    const p = PROJELER.find((x) => x.altin)!;
    const kidler = p.malzemeler.filter((m) => !m.evde).map((m) => m.kid!);
    const l = yapabilecekler(kidler);
    expect(l[0].eksik).toHaveLength(0);
    expect(l.find((x) => x.p.id === p.id)?.eksik).toHaveLength(0);
  });
  test("en fazla 2 eksik; sahip olunan kalemi kullanmayan proje gelmez; sıralı", () => {
    const kid = sikKalemler([])[0].kid; // en çok projede geçen kalem
    const l = yapabilecekler([kid]);
    expect(l.length).toBeGreaterThan(0);
    for (const x of l) {
      expect(x.eksik.length).toBeLessThanOrEqual(2);
      expect(x.p.malzemeler.some((m) => m.kid === kid)).toBe(true);
      expect(x.eksik.every((m) => !m.evde)).toBe(true);
    }
    for (let i = 1; i < l.length; i++) expect(l[i].eksik.length).toBeGreaterThanOrEqual(l[i - 1].eksik.length);
  });
  test("kalem arama Türkçe karakter duyarsız, evde bulunanları göstermez", () => {
    expect(kalemAra("tutkal").length).toBeGreaterThan(0);
    expect(kalemAra("ahsap tutkali").map((k) => k.ad)).toEqual(kalemAra("Ahşap TUTKALI").map((k) => k.ad));
    expect(kalemAra("").length).toBe(0);
    expect(sikKalemler([]).every((k) => !k.ornek.evde)).toBe(true);
    const ilk = sikKalemler([])[0];
    expect(sikKalemler([ilk.kid]).some((k) => k.kid === ilk.kid)).toBe(false);
  });
});

describe("Proje Bulucu", () => {
  const temel: Cevaplar = { kimle: "kendim", zaman: 0, deneyim: "biraz", gruplar: [] };
  test("yaş etiketi okunur", () => {
    expect(yasAlt("8+ yaş (gözetimle)")).toBe(8);
    expect(yasAlt("12+ yaş")).toBe(12);
    expect(yasAlt(undefined)).toBeNull();
  });
  test("filtreler uygulanır", () => {
    const c: Cevaplar = { kimle: "kucuk", zaman: 60, deneyim: "yeni", gruplar: ["Çocuk & Oyun"] };
    for (const p of oneriler(c)) {
      expect(p.zorluk).toBe("Kolay");
      expect(sureCoz(p.sure)[1]).toBeLessThanOrEqual(60);
      expect(yasAlt(p.yas)!).toBeLessThanOrEqual(6);
      expect(KATEGORILER.find((k) => k.id === p.kategoriId)!.grup).toBe("Çocuk & Oyun");
    }
    expect(oneriler({ ...temel, deneyim: "usta" }).every((p) => p.zorluk !== "Kolay")).toBe(true);
    expect(
      uygunMu(
        PROJELER.find((p) => !p.yas)!,
        { ...temel, kimle: "buyuk" },
      ),
    ).toBe(false);
  });
  test("seçkin projeler önce gelir", () => {
    const l = oneriler(temel);
    const ilkNormal = l.findIndex((p) => !p.altin);
    expect(l.slice(ilkNormal).some((p) => p.altin)).toBe(false);
  });
  test("her cevap kombinasyonu (gerekirse gevşetilerek) en az bir proje bulur", () => {
    const kimler = ["kendim", "kucuk", "buyuk"] as const;
    const zamanlar = [60, 180, 480, 0] as const;
    const deneyimler = ["yeni", "biraz", "usta"] as const;
    const grupSecenekleri = [[], ...GRUPLAR.map((g) => [g])];
    for (const kimle of kimler)
      for (const zaman of zamanlar)
        for (const deneyim of deneyimler)
          for (const gruplar of grupSecenekleri) {
            let c: Cevaplar = { kimle, zaman, deneyim, gruplar };
            let l = oneriler(c);
            while (!l.length) {
              const g = gevset(c);
              if (!g) break;
              c = g.cevap;
              l = oneriler(c);
            }
            expect(l.length).toBeGreaterThan(0);
          }
  });
});

describe("Rozetler ve seviye", () => {
  test("seviye eşikleri", () => {
    expect(seviye(0).simdiki.ad).toBe("Çırak");
    expect(seviye(1).simdiki.ad).toBe("Bronz");
    expect(seviye(3).simdiki.ad).toBe("Gümüş");
    expect(seviye(25).simdiki.ad).toBe("Elmas");
    expect(seviye(25).sonraki).toBeNull();
    expect(seviye(2).oran).toBeCloseTo(0.5);
  });
  test("rozetler doğru hesaplanır", () => {
    const bos = rozetDurumlari({ tamamlanan: [], bitenAdimSayisi: 0, bendeSayisi: 0 });
    expect(bos.some((d) => d.kazanildi)).toBe(false);
    expect(new Set(ROZETLER.map((r) => r.id)).size).toBe(ROZETLER.length);

    // Her gruptan bir proje + bir zor proje
    const secim = GRUPLAR.map((g) => PROJELER.find((p) => KATEGORILER.find((k) => k.id === p.kategoriId)!.grup === g)!);
    secim.push(PROJELER.find((p) => p.zorluk === "Zor")!);
    const d = rozetDurumlari({
      tamamlanan: [...secim.map((p) => p.id), "silinmis-proje"],
      bitenAdimSayisi: 50,
      bendeSayisi: 15,
    });
    const k = (id: string) => d.find((x) => x.r.id === id)!.kazanildi;
    expect(k("ilk")).toBe(true);
    expect(k("bes")).toBe(true);
    expect(k("cok-yonlu")).toBe(true);
    expect(k("zor")).toBe(true);
    expect(k("titiz")).toBe(true);
    expect(k("atolye")).toBe(true);
    for (const x of d) expect(x.ilerleme).toBeLessThanOrEqual(x.hedef);
  });
  test("kayıt temizliği: silinmiş proje tamamlananlardan düşer", () => {
    const pid = PROJELER[0].id;
    expect(
      temizle({ tamamlanan: { [pid]: "2026-11-24", yok: "2026-11-24", [PROJELER[1].id]: 5 as never } }).tamamlanan,
    ).toEqual({
      [pid]: "2026-11-24",
    });
  });
});

describe("Hesaplayıcılar", () => {
  test("sayı okuma Türkçe virgül", () => {
    expect(sayiOku("12,5")).toBe(12.5);
    expect(sayiOku(" 3 ")).toBe(3);
    expect(sayiOku("")).toBeNaN();
    expect(sayiOku("abc")).toBeNaN();
    expect(sayiOku("1,2,3")).toBeNaN();
  });
  test("E12 bir üst standart değer", () => {
    expect(e12Ust(200)).toBe(220);
    expect(e12Ust(220)).toBe(220);
    expect(e12Ust(150)).toBe(150);
    expect(e12Ust(83)).toBe(100);
    expect(e12Ust(4700)).toBe(4700);
    expect(e12Ust(8300)).toBe(10000);
  });
  test("her araç varsayılan değerlerle sonuç verir (NaN yok); geçersiz girişte uyarı", () => {
    for (const a of ARACLAR) {
      const h = a.hesapla(varsayilanlar(a));
      expect(h.sonuclar.length).toBeGreaterThan(0);
      for (const r of h.sonuclar) expect(r.deger).not.toMatch(/NaN|Infinity/);
      const bozuk = Object.fromEntries(a.alanlar.map((x) => [x.id, x.tip === "sayi" ? NaN : x.varsayilan]));
      const hb = a.hesapla(bozuk);
      expect(hb.sonuclar.length === 0 || hb.sonuclar.every((r) => !/NaN/.test(r.deger))).toBe(true);
      for (const k of a.kategoriler) expect(KATEGORILER.some((x) => x.id === k)).toBe(true);
    }
  });
  test("bilinen değerler", () => {
    const deger = (id: string, v: Record<string, number | string>, etiket: string) =>
      aracBul(id)!
        .hesapla({ ...varsayilanlar(aracBul(id)!), ...v })
        .sonuclar.find((r) => r.etiket.startsWith(etiket))!.deger;
    expect(deger("led", { vs: 5, vf: 2.0, ma: 15 }, "Standart")).toBe("220 Ω");
    expect(deger("led", { vs: 12, vf: 3.1, ma: 20 }, "Standart")).toBe("470 Ω");
    expect(aracBul("led")!.hesapla({ vs: 3, vf: 3.1, ma: 15 }).uyari).toBeTruthy();
    expect(deger("epoksi", { sekil: "kare", u: 20, g: 10, d: 1, oran: 1 }, "Toplam")).toBe("220 ml");
    expect(deger("epoksi", { sekil: "kare", u: 20, g: 10, d: 1, oran: 1 }, "A")).toBe("110 ml");
    expect(deger("epoksi", { sekil: "kare", u: 20, g: 10, d: 1, oran: 3 }, "B")).toBe("55 ml");
    expect(deger("akvaryum", { u: 60, g: 30, y: 35 }, "Brüt")).toBe("63 L");
    expect(deger("makrome", { boy: 60, ip: 8, yogun: 4, katla: 2 }, "Her ipi")).toBe("4,80 m");
    expect(deger("mum", { hacim: 200, adet: 1, tur: 0.86, koku: 8 }, "Mum")).toBe("172 g");
    expect(deger("baski", { gr: 50, makara: 600, makaraG: 1000, saat: 0, w: 0, kwh: 0 }, "Filament")).toBe("30,00 ₺");
    expect(deger("boya", { en: 100, boy: 100, yuz: 1, kat: 2, kapama: 10 }, "Gereken")).toBe("200 ml");
  });
});

describe("Karanlık mod", () => {
  test("tema değişince renkler ve stiller güncellenir", () => {
    const s = stil(() => ({ k: { backgroundColor: renk.kart } }));
    expect(s.k.backgroundColor).toBe("#FFFFFF");
    temaUygula(true);
    expect(temaKoyuMu()).toBe(true);
    expect(s.k.backgroundColor).not.toBe("#FFFFFF");
    temaUygula(false);
    expect(s.k.backgroundColor).toBe("#FFFFFF");
  });
});

const geri = () => fireEvent.press(screen.getAllByLabelText("Geri").at(-1)!);

test("Atölyem ekranları gezilir; proje tamamlanınca rozet kazanılır; koyu tema", async () => {
  await render(<App />);
  expect(await screen.findByText("Evde Hobi")).toBeTruthy();

  // Keşfet → Proje Bulucu
  await fireEvent.press(screen.getByText("Ne yapsam?"));
  await fireEvent.press(await screen.findByText("Kendim için"));
  await fireEvent.press(await screen.findByText("En fazla 3 saat"));
  await fireEvent.press(await screen.findByText("Yeni başlıyorum"));
  await fireEvent.press(await screen.findByText("El Sanatları"));
  await fireEvent.press(screen.getByText("Projeleri göster"));
  expect(await screen.findByText("Sana önerilenler")).toBeTruthy();
  await geri(); // son soruya
  await geri();
  await geri();
  await geri();
  await geri(); // Keşfet

  // Atölyem
  await fireEvent.press(screen.getAllByText("Atölyem").at(-1)!);
  expect(await screen.findByText("Çırak")).toBeTruthy();

  // Malzemelerim → sık kullanılandan ekle → Yapabileceklerim
  await fireEvent.press(screen.getByText("Malzemelerim"));
  const ilk = sikKalemler([])[0];
  await fireEvent.press(await screen.findByLabelText(`${ilk.ad}: ekle`));
  expect(await screen.findByText("Sende olanlar (1)")).toBeTruthy();
  await fireEvent.changeText(screen.getByPlaceholderText("Alet veya malzeme ara (ör. tutkal)"), "tutkal");
  await fireEvent.press((await screen.findAllByLabelText(/: bende var$/))[0]);
  await fireEvent.press(screen.getByText(/Yapabileceklerim \(\d+\)/));
  expect(await screen.findByText("Elimdekilerle yap")).toBeTruthy();
  await geri();
  await geri();

  // Araçlar → LED
  await fireEvent.press(screen.getByText("Araçlar"));
  await fireEvent.press(await screen.findByText("LED direnci"));
  expect(await screen.findByText("220 Ω")).toBeTruthy();
  await fireEvent.changeText(screen.getByLabelText("LED akımı"), "10");
  expect(await screen.findByText("330 Ω")).toBeTruthy();
  await fireEvent.press(screen.getByText("Mavi / beyaz"));
  expect(await screen.findByText("190 Ω")).toBeTruthy(); // hesaplanan (5-3,1)/0,01
  await geri();
  await geri();

  // Bir projeyi tamamla → İlk adım rozeti
  const p = PROJELER.find((x) => x.kategoriId === "epoksi")!;
  await fireEvent.press(screen.getAllByText("Keşfet").at(-1)!);
  await fireEvent.changeText(screen.getByPlaceholderText("Proje, malzeme veya kategori ara"), p.ad);
  await fireEvent.press((await screen.findAllByText(p.ad))[0]);
  expect(await screen.findByText("Hesapla: Epoksi reçine miktarı")).toBeTruthy();
  await fireEvent.press(screen.getByText("Adımlar"));
  await fireEvent.press(await screen.findByLabelText("Projeyi tamamladım"));
  expect(await screen.findByText(/Yeni rozet:/)).toBeTruthy();
  await geri();

  await fireEvent.press(screen.getAllByText("Atölyem").at(-1)!);
  expect(await screen.findByText("Bronz")).toBeTruthy();
  await fireEvent.press(screen.getByLabelText("Seviye Bronz, rozetleri gör"));
  expect(await screen.findByLabelText("İlk adım: kazanıldı")).toBeTruthy();
  expect(screen.getByText("Tamamlanan projeler (1)")).toBeTruthy();
  await geri();

  // Koyu tema: aynı ekranda kalır
  await fireEvent.press(screen.getByLabelText("Görünüm: Koyu"));
  expect(temaKoyuMu()).toBe(true);
  expect(await screen.findByText("Görünüm")).toBeTruthy();
  expect(screen.getByLabelText("Görünüm: Koyu").props.accessibilityState).toEqual({ checked: true });
  await fireEvent.press(screen.getByLabelText("Görünüm: Açık"));
  expect(temaKoyuMu()).toBe(false);
});
