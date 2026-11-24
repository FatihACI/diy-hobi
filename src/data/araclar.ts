// Hobi hesaplayıcıları. Her araç: giriş alanları + hesaplama fonksiyonu (ekran bunları genel olarak çizer).
// Sonuçlar YAKLAŞIKTIR; malzeme etiketi/üretici önerisi her zaman önceliklidir.
// Soğuk sabun (kostik) hesabı bilerek yok: yanlış değer kimyasal yanığa yol açar, uzman kontrolü gerekir.
import type { IkonAdi } from "./types";

export type Deger = number | string;
export type Degerler = Record<string, Deger>;

export type Alan =
  | {
      tip: "sayi";
      id: string;
      etiket: string;
      birim?: string;
      varsayilan: number;
      goster?: (v: Degerler) => boolean;
    }
  | {
      tip: "secim";
      id: string;
      etiket: string;
      secenekler: { deger: Deger; etiket: string }[];
      varsayilan: Deger;
      goster?: (v: Degerler) => boolean;
    };

export type Sonuc = { etiket: string; deger: string; vurgu?: boolean };
export type Hesap = { sonuclar: Sonuc[]; uyari?: string };

export type Arac = {
  id: string;
  ad: string;
  ozet: string;
  ikon: IkonAdi;
  kategoriler: string[]; // ilgili kategori id'leri (proje detayında kısayol)
  alanlar: Alan[];
  hesapla: (v: Degerler) => Hesap;
  not: string;
};

// "12,5" → 12.5; geçersiz → NaN
export const sayiOku = (s: string) => {
  const t = s.trim().replace(/\s/g, "").replace(",", ".");
  return t === "" || !/^-?\d*\.?\d+$/.test(t) ? NaN : Number(t);
};
export const sayiYaz = (n: number, ond = 0) =>
  n.toLocaleString("tr-TR", { minimumFractionDigits: ond, maximumFractionDigits: ond });
const para = (n: number) => sayiYaz(n, 2) + " ₺";
const n = (v: Degerler, k: string) => Number(v[k]);

export const varsayilanlar = (a: Arac): Degerler => Object.fromEntries(a.alanlar.map((x) => [x.id, x.varsayilan]));

// E12 standart direnç serisi: hesaplanan değerin bir ÜSTÜ seçilir (LED'e daha az akım = güvenli taraf)
const E12 = [1.0, 1.2, 1.5, 1.8, 2.2, 2.7, 3.3, 3.9, 4.7, 5.6, 6.8, 8.2];
export function e12Ust(r: number): number {
  if (!(r > 0)) return 0;
  let k = 10 ** Math.floor(Math.log10(r));
  for (;;) {
    for (const e of E12) {
      const aday = Math.round(e * k * 1000) / 1000;
      if (aday >= r - 1e-9) return aday;
    }
    k *= 10;
  }
}
const ohmYaz = (r: number) =>
  r >= 1e6 ? sayiYaz(r / 1e6, 1) + " MΩ" : r >= 1000 ? sayiYaz(r / 1000, r % 1000 ? 1 : 0) + " kΩ" : sayiYaz(r) + " Ω";
const GUCLER = [0.125, 0.25, 0.5, 1, 2, 5];
const gucYaz = (w: number) => (w === 0.125 ? "1/8 W" : w === 0.25 ? "1/4 W" : w === 0.5 ? "1/2 W" : `${w} W`);

const pozitif = (v: Degerler, ...k: string[]) => k.every((x) => n(v, x) > 0);
const EKSIK: Hesap = { sonuclar: [], uyari: "Tüm değerleri sıfırdan büyük gir." };

export const ARACLAR: Arac[] = [
  {
    id: "epoksi",
    ad: "Epoksi reçine miktarı",
    ozet: "Kalıp ölçüsünden reçine ve sertleştirici miktarı",
    ikon: "beaker-outline",
    kategoriler: ["epoksi"],
    alanlar: [
      {
        tip: "secim",
        id: "sekil",
        etiket: "Kalıp şekli",
        secenekler: [
          { deger: "kare", etiket: "Dikdörtgen" },
          { deger: "yuvarlak", etiket: "Yuvarlak" },
        ],
        varsayilan: "kare",
      },
      { tip: "sayi", id: "u", etiket: "Uzunluk", birim: "cm", varsayilan: 20, goster: (v) => v.sekil === "kare" },
      { tip: "sayi", id: "g", etiket: "Genişlik", birim: "cm", varsayilan: 10, goster: (v) => v.sekil === "kare" },
      { tip: "sayi", id: "cap", etiket: "Çap", birim: "cm", varsayilan: 12, goster: (v) => v.sekil === "yuvarlak" },
      { tip: "sayi", id: "d", etiket: "Döküm kalınlığı", birim: "cm", varsayilan: 1 },
      {
        tip: "secim",
        id: "oran",
        etiket: "Karışım oranı (A:B, hacimce)",
        secenekler: [
          { deger: 1, etiket: "1:1" },
          { deger: 2, etiket: "2:1" },
          { deger: 3, etiket: "3:1" },
        ],
        varsayilan: 1,
      },
    ],
    hesapla: (v) => {
      const alanOk = v.sekil === "kare" ? pozitif(v, "u", "g") : pozitif(v, "cap");
      if (!alanOk || !pozitif(v, "d")) return EKSIK;
      const taban = v.sekil === "kare" ? n(v, "u") * n(v, "g") : Math.PI * (n(v, "cap") / 2) ** 2;
      const hacim = taban * n(v, "d") * 1.1; // cm³ = ml, %10 fire
      const oran = n(v, "oran");
      return {
        sonuclar: [
          { etiket: "Toplam karışım (%10 fire dahil)", deger: `${sayiYaz(hacim)} ml`, vurgu: true },
          { etiket: "A – Reçine", deger: `${sayiYaz((hacim * oran) / (oran + 1))} ml` },
          { etiket: "B – Sertleştirici", deger: `${sayiYaz(hacim / (oran + 1))} ml` },
          { etiket: "Yaklaşık ağırlık", deger: `${sayiYaz(hacim * 1.1)} g` },
        ],
        uyari:
          n(v, "d") > 2
            ? "2 cm'den kalın dökümde ısınma ve çatlama olabilir. Kalın döküm reçinesi kullan ya da katman katman dök."
            : undefined,
      };
    },
    not: "Oran hacimce mi ağırlıkça mı, ürün etiketine bak; etikette yazan oran geçerlidir. Eldiven ve havalandırma şart.",
  },
  {
    id: "mum",
    ad: "Mum ve koku yağı",
    ozet: "Kap hacminden mum ve esans miktarı",
    ikon: "candle",
    kategoriler: ["mum-sabun"],
    alanlar: [
      { tip: "sayi", id: "hacim", etiket: "Bir kabın hacmi (suyla ölç)", birim: "ml", varsayilan: 200 },
      { tip: "sayi", id: "adet", etiket: "Kap sayısı", birim: "adet", varsayilan: 1 },
      {
        tip: "secim",
        id: "tur",
        etiket: "Mum türü",
        secenekler: [
          { deger: 0.86, etiket: "Soya" },
          { deger: 0.9, etiket: "Parafin" },
          { deger: 0.95, etiket: "Balmumu" },
        ],
        varsayilan: 0.86,
      },
      { tip: "sayi", id: "koku", etiket: "Koku oranı", birim: "%", varsayilan: 8 },
    ],
    hesapla: (v) => {
      if (!pozitif(v, "hacim", "adet")) return EKSIK;
      const koku = n(v, "koku");
      if (!(koku >= 0)) return EKSIK;
      const mum = n(v, "hacim") * n(v, "adet") * n(v, "tur");
      return {
        sonuclar: [
          { etiket: "Mum (katı)", deger: `${sayiYaz(mum)} g`, vurgu: true },
          { etiket: "Koku yağı", deger: `${sayiYaz((mum * koku) / 100)} g` },
          { etiket: "Kap başına mum", deger: `${sayiYaz(mum / n(v, "adet"))} g` },
        ],
        uyari:
          koku > 10
            ? "Çoğu mum %6–10 koku yağı taşır. Fazlası terler, is yapar ve yanmayı bozabilir; mumun etiketine bak."
            : undefined,
      };
    },
    not: "Koku yağını mum üreticisinin önerdiği sıcaklıkta ekle. Eriyen mumu asla gözetimsiz bırakma; benmari kullan.",
  },
  {
    id: "makrome",
    ad: "Makrome ip uzunluğu",
    ozet: "Bitmiş ölçüden kesilecek ip boyu",
    ikon: "vector-polyline",
    kategoriler: ["makrome"],
    alanlar: [
      { tip: "sayi", id: "boy", etiket: "Bitmiş uzunluk", birim: "cm", varsayilan: 60 },
      { tip: "sayi", id: "ip", etiket: "İp sayısı (kesilecek)", birim: "adet", varsayilan: 8 },
      {
        tip: "secim",
        id: "yogun",
        etiket: "Düğüm yoğunluğu",
        secenekler: [
          { deger: 3, etiket: "Seyrek" },
          { deger: 4, etiket: "Orta" },
          { deger: 5, etiket: "Yoğun" },
        ],
        varsayilan: 4,
      },
      {
        tip: "secim",
        id: "katla",
        etiket: "İpler ortadan katlanıp mı bağlanıyor?",
        secenekler: [
          { deger: 2, etiket: "Evet" },
          { deger: 1, etiket: "Hayır" },
        ],
        varsayilan: 2,
      },
    ],
    hesapla: (v) => {
      if (!pozitif(v, "boy", "ip")) return EKSIK;
      const kesim = n(v, "boy") * n(v, "yogun") * n(v, "katla");
      const toplam = kesim * n(v, "ip") * 1.1;
      return {
        sonuclar: [
          { etiket: "Her ipi kes", deger: `${sayiYaz(kesim / 100, 2)} m`, vurgu: true },
          { etiket: "Toplam ip (%10 pay dahil)", deger: `${sayiYaz(toplam / 100, 1)} m` },
        ],
      };
    },
    not: "Kalın ip ve sık düğüm daha çok ip yer. Emin değilsen bir ipi deneme olarak 10 cm ör ve ne kadar kısaldığını ölç.",
  },
  {
    id: "led",
    ad: "LED direnci",
    ozet: "LED için seri direnç ve gücü",
    ikon: "led-on",
    kategoriler: ["elektronik", "rc", "maket"],
    alanlar: [
      { tip: "sayi", id: "vs", etiket: "Besleme gerilimi", birim: "V", varsayilan: 5 },
      {
        tip: "secim",
        id: "vf",
        etiket: "LED rengi",
        secenekler: [
          { deger: 2.0, etiket: "Kırmızı" },
          { deger: 2.1, etiket: "Sarı / turuncu" },
          { deger: 2.2, etiket: "Yeşil (klasik)" },
          { deger: 3.1, etiket: "Mavi / beyaz" },
        ],
        varsayilan: 2.0,
      },
      { tip: "sayi", id: "ma", etiket: "LED akımı", birim: "mA", varsayilan: 15 },
    ],
    hesapla: (v) => {
      if (!pozitif(v, "vs", "ma")) return EKSIK;
      const vs = n(v, "vs");
      const vf = n(v, "vf");
      const i = n(v, "ma") / 1000;
      if (vs <= vf)
        return { sonuclar: [], uyari: `Besleme gerilimi LED'in ${sayiYaz(vf, 1)} V eşiğinden yüksek olmalı.` };
      const r = (vs - vf) / i;
      const std = e12Ust(r);
      const gercekI = (vs - vf) / std;
      const guc = gercekI ** 2 * std;
      const onerilen = GUCLER.find((g) => g >= guc * 2) ?? 5;
      return {
        sonuclar: [
          { etiket: "Standart direnç (E12)", deger: ohmYaz(std), vurgu: true },
          { etiket: "Hesaplanan", deger: ohmYaz(Math.round(r)) },
          { etiket: "Gerçek akım", deger: `${sayiYaz(gercekI * 1000, 1)} mA` },
          { etiket: "Dirençte harcanan güç", deger: `${sayiYaz(guc * 1000)} mW` },
          { etiket: "Direnç gücü (en az)", deger: gucYaz(onerilen) },
        ],
        uyari:
          n(v, "ma") > 20
            ? "Standart 5 mm LED'ler en fazla 20 mA içindir; daha fazlası LED'i kısa sürede bozar."
            : undefined,
      };
    },
    not: "Değer, LED'in tipik eşik gerilimine göredir; LED'in teknik sayfası varsa oradaki değeri kullan. Arduino pininden en fazla ~20 mA çek.",
  },
  {
    id: "baski",
    ad: "3D baskı maliyeti",
    ozet: "Filament ve elektrik maliyeti",
    ikon: "printer-3d-nozzle-outline",
    kategoriler: ["baski3d"],
    alanlar: [
      { tip: "sayi", id: "gr", etiket: "Model ağırlığı (dilimleyiciden)", birim: "g", varsayilan: 50 },
      { tip: "sayi", id: "makara", etiket: "Makara fiyatı", birim: "₺", varsayilan: 600 },
      { tip: "sayi", id: "makaraG", etiket: "Makara ağırlığı", birim: "g", varsayilan: 1000 },
      { tip: "sayi", id: "saat", etiket: "Baskı süresi", birim: "saat", varsayilan: 3 },
      { tip: "sayi", id: "w", etiket: "Yazıcının ortalama gücü", birim: "W", varsayilan: 120 },
      { tip: "sayi", id: "kwh", etiket: "Elektrik birim fiyatı", birim: "₺/kWh", varsayilan: 3 },
    ],
    hesapla: (v) => {
      if (!pozitif(v, "gr", "makara", "makaraG")) return EKSIK;
      const fil = (n(v, "gr") * n(v, "makara")) / n(v, "makaraG");
      const elk = Math.max(0, n(v, "saat")) * (Math.max(0, n(v, "w")) / 1000) * Math.max(0, n(v, "kwh"));
      return {
        sonuclar: [
          { etiket: "Toplam", deger: para(fil + elk), vurgu: true },
          { etiket: "Filament", deger: para(fil) },
          { etiket: "Elektrik", deger: para(elk) },
          { etiket: "Başarısız baskı payıyla (%10)", deger: para((fil + elk) * 1.1) },
        ],
      };
    },
    not: "Elektrik birim fiyatını kendi faturandan gir. Ortalama güç, ısıtma tablası açıkken çoğu masaüstü yazıcıda 100–150 W arasıdır.",
  },
  {
    id: "boya",
    ad: "Boya / vernik miktarı",
    ozet: "Yüzey ölçüsünden kaç litre gerektiği",
    ikon: "format-paint",
    kategoriler: ["ahsap", "ev-tamir", "pirografi", "kus-evi"],
    alanlar: [
      { tip: "sayi", id: "en", etiket: "Genişlik", birim: "cm", varsayilan: 60 },
      { tip: "sayi", id: "boy", etiket: "Yükseklik", birim: "cm", varsayilan: 40 },
      { tip: "sayi", id: "yuz", etiket: "Boyanacak yüz sayısı", birim: "adet", varsayilan: 2 },
      { tip: "sayi", id: "kat", etiket: "Kat sayısı", birim: "kat", varsayilan: 2 },
      { tip: "sayi", id: "kapama", etiket: "Kapama (kutu etiketi)", birim: "m²/L", varsayilan: 10 },
    ],
    hesapla: (v) => {
      if (!pozitif(v, "en", "boy", "yuz", "kat", "kapama")) return EKSIK;
      const alan = (n(v, "en") * n(v, "boy") * n(v, "yuz")) / 10000;
      const litre = (alan * n(v, "kat")) / n(v, "kapama");
      return {
        sonuclar: [
          {
            etiket: "Gereken boya",
            deger: litre < 1 ? `${sayiYaz(litre * 1000)} ml` : `${sayiYaz(litre, 2)} L`,
            vurgu: true,
          },
          { etiket: "Toplam alan", deger: `${sayiYaz(alan, 2)} m²` },
          {
            etiket: "%15 payla",
            deger: litre * 1.15 < 1 ? `${sayiYaz(litre * 1150)} ml` : `${sayiYaz(litre * 1.15, 2)} L`,
          },
        ],
      };
    },
    not: "Ham ahşap ilk katta daha çok boya emer. Kapama değeri kutunun üzerinde yazar (genelde 8–12 m²/L).",
  },
  {
    id: "akvaryum",
    ad: "Akvaryum hacmi",
    ozet: "Litre, net su ve su değişimi",
    ikon: "fishbowl-outline",
    kategoriler: ["akvaryum", "terraryum"],
    alanlar: [
      { tip: "sayi", id: "u", etiket: "Uzunluk", birim: "cm", varsayilan: 60 },
      { tip: "sayi", id: "g", etiket: "Genişlik", birim: "cm", varsayilan: 30 },
      { tip: "sayi", id: "y", etiket: "Yükseklik", birim: "cm", varsayilan: 35 },
      { tip: "sayi", id: "degisim", etiket: "Haftalık su değişimi", birim: "%", varsayilan: 25 },
    ],
    hesapla: (v) => {
      if (!pozitif(v, "u", "g", "y")) return EKSIK;
      const brut = (n(v, "u") * n(v, "g") * n(v, "y")) / 1000;
      const net = brut * 0.85; // kum, dekor, su seviyesi boşluğu
      const d = Math.max(0, n(v, "degisim"));
      return {
        sonuclar: [
          { etiket: "Brüt hacim", deger: `${sayiYaz(brut)} L`, vurgu: true },
          { etiket: "Net su (yaklaşık)", deger: `${sayiYaz(net)} L` },
          { etiket: "Haftalık değişim", deger: `${sayiYaz((net * d) / 100, 1)} L` },
          { etiket: "Dolu ağırlık (cam hariç)", deger: `≈ ${sayiYaz(net * 1.2)} kg` },
        ],
        uyari: d > 50 ? "Tek seferde suyun yarısından fazlasını değiştirmek balıkları strese sokabilir." : undefined,
      };
    },
    not: "Dolu akvaryum çok ağırdır: sehpa ve zemin bu yükü taşıyabilmeli. Dolu ağırlığa kum ve taş da dahildir.",
  },
];

export const aracBul = (id: string) => ARACLAR.find((a) => a.id === id);
export const kategoriAraclari = (kategoriId: string) => ARACLAR.filter((a) => a.kategoriler.includes(kategoriId));
