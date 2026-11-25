// Ahşap kategorisi (Altın 40 dışı 18 proje): adım sahneleri (viewBox 0 0 240 150).
// Adım sayısı ve sırası src/data/ek/ahsap.ts içeriğiyle birebir eşleşir.
import { Cizgi, Cizim, daire, kutu, yuvarla as r } from "../arac";
import {
  bez,
  bicak,
  cetvel,
  damla,
  dekupaj,
  firca,
  gonye,
  iskence,
  kablo,
  kalem,
  matkap,
  ok,
  onay,
  saat,
  sukulent,
  tahta,
  testere,
  vida,
  yagSisesi,
  yayOk,
  ZEMIN,
  zimpara,
} from "./parca";

// ---------- Ortak parçalar ----------
// Duvar (tuğla izi): tüm sahne arka planı
const DUVAR: Cizgi = {
  d: `M0 40 L240 40 M0 80 L240 80 M60 0 L60 40 M180 0 L180 40 M120 40 L120 80 M30 80 L30 120 M210 80 L210 120`,
  w: 0.4,
};
// Su terazisi: sol üst (x,y)
const terazi = (x: number, y: number, en = 70): Cizgi[] => [
  { d: kutu(x, y, en, 10), w: 1.5, dolgu: true },
  { d: kutu(x + en / 2 - 9, y + 2, 18, 6), w: 1 },
  { d: daire(x + en / 2, y + 5, 2), w: 0.8, dolgu: true },
];
// Çekiç: baş merkez (x,y), sap sağ alta
const cekic = (x: number, y: number): Cizgi[] => [
  { d: kutu(x - 14, y - 6, 28, 12), w: 1.6, dolgu: true },
  { d: `M${x + 4} ${y + 6} L${x + 34} ${y + 40} L${x + 40} ${y + 35} L${x + 10} ${y + 2}`, w: 1.5, dolgu: true },
];
// Menteşe (açık, önden): merkez (x,y)
const mentese = (x: number, y: number): Cizgi[] => [
  { d: kutu(x - 14, y - 8, 12, 16) + " " + kutu(x + 2, y - 8, 12, 16), w: 1.3, dolgu: true },
  { d: kutu(x - 2, y - 10, 4, 20), w: 1.3, dolgu: true },
  {
    d:
      daire(x - 8, y - 3, 1.2) +
      " " +
      daire(x - 8, y + 3, 1.2) +
      " " +
      daire(x + 8, y - 3, 1.2) +
      " " +
      daire(x + 8, y + 3, 1.2),
    w: 0.8,
  },
];
// Kanca (duvar askı): üst (x,y)
const kanca = (x: number, y: number): Cizgi => ({
  d: `M${x} ${y} L${x} ${y + 12} Q${x} ${y + 20} ${x + 6} ${y + 20} Q${x + 11} ${y + 20} ${x + 11} ${y + 14}`,
  w: 1.6,
});
// Dedektör: sol üst (x,y)
const dedektor = (x: number, y: number): Cizgi[] => [
  {
    d: `M${x} ${y + 10} Q${x} ${y} ${x + 12} ${y} L${x + 30} ${y} Q${x + 42} ${y} ${x + 42} ${y + 10} L${x + 36} ${y + 50} L${x + 6} ${y + 50} Z`,
    w: 1.6,
    dolgu: true,
  },
  { d: kutu(x + 10, y + 8, 22, 12), w: 1 },
  { d: daire(x + 21, y + 32, 5), w: 1 },
];
// Kesik çizgi (işaret)
const isaret = (x1: number, y1: number, x2: number, y2: number): Cizgi => ({
  d: `M${x1} ${y1} L${x2} ${y2}`,
  w: 0.9,
  kesik: true,
});
// Teker: merkez (x,y)
const teker = (x: number, y: number, rr = 8): Cizgi[] => [
  { d: kutu(x - 8, y - rr - 8, 16, 6), w: 1.3, dolgu: true },
  { d: `M${x - 4} ${y - rr - 2} L${x - 2} ${y} M${x + 4} ${y - rr - 2} L${x + 2} ${y}`, w: 1.2 },
  { d: daire(x, y, rr), w: 1.6, dolgu: true },
  { d: daire(x, y, 2), w: 1 },
];
// Kavela (dübel çubuğu): merkez (x,y), yatay
const kavela = (x: number, y: number, en = 24): Cizgi => ({ d: kutu(x - en / 2, y - 3, en, 6), w: 1.3, dolgu: true });
// Kavanoz (küçük baharat): taban orta (cx,y)
const kavanozK = (cx: number, y: number): Cizgi[] => [
  { d: kutu(cx - 7, y - 18, 14, 18), w: 1.3, dolgu: true },
  { d: kutu(cx - 8, y - 22, 16, 4), w: 1.3, dolgu: true },
];
// Anahtar: halka merkez (x,y), gövde aşağı
const anahtar = (x: number, y: number): Cizgi => ({
  d:
    daire(x, y, 5) +
    ` M${x} ${y + 5} L${x} ${y + 24} M${x} ${y + 18} L${x + 4} ${y + 18} M${x} ${y + 22} L${x + 4} ${y + 22}`,
  w: 1.3,
});
// Yan duran panel (perspektif): sol üst (x,y), en, boy, derinlik d
const kutuP = (x: number, y: number, en: number, boy: number, dr = 14): Cizgi[] => [
  { d: kutu(x, y, en, boy), w: 1.7, dolgu: true },
  {
    d: `M${x} ${y} L${x + dr} ${y - dr} L${x + en + dr} ${y - dr} L${x + en} ${y} M${x + en + dr} ${y - dr} L${x + en + dr} ${y + boy - dr} L${x + en} ${y + boy}`,
    w: 1.4,
  },
];
// Toz/talaş noktaları
const talas = (x: number, y: number): [number, number, number][] => [
  [x, y, 1],
  [x + 6, y + 3, 0.8],
  [x - 5, y + 5, 0.9],
  [x + 3, y + 8, 0.8],
  [x - 2, y - 4, 0.7],
];

// ---------- 1. Yüzer Duvar Rafı (6) ----------
export const YUZER_RAF_ADIM: Cizim[] = [
  {
    cizgiler: [
      DUVAR,
      ...dedektor(100, 50),
      { d: `M20 70 Q60 60 100 74 M150 70 Q190 80 230 66`, w: 1, kesik: true },
      onay(200, 40, 1.2),
    ],
  },
  {
    cizgiler: [
      DUVAR,
      ...terazi(80, 56, 90),
      isaret(30, 70, 220, 70),
      ...kalem(60, 70),
      { d: daire(70, 70, 2) + " " + daire(120, 70, 2) + " " + daire(170, 70, 2), w: 1 },
    ],
  },
  {
    cizgiler: [
      DUVAR,
      { d: kutu(50, 64, 140, 12), w: 1.7, dolgu: true },
      { d: `M80 70 L80 100 M160 70 L160 100`, w: 3 },
      vida(70, 70, 2.5),
      vida(120, 70, 2.5),
      vida(170, 70, 2.5),
      ...terazi(85, 40, 70),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...tahta(30, 90, 180, 30),
      { d: `M80 90 L80 70 M160 90 L160 70`, w: 0.9, kesik: true },
      ...matkap(80, 88),
      ok(196, 40, 196, 80),
    ],
  },
  {
    cizgiler: [ZEMIN, ...tahta(30, 90, 180, 30), ...zimpara(70, 76, 50), ...firca(160, 86), damla(200, 70)],
    noktalar: talas(130, 80),
  },
  {
    cizgiler: [
      DUVAR,
      { d: `M80 70 L80 100 M160 70 L160 100`, w: 3 },
      ...tahta(40, 96, 160, 20),
      ok(120, 140, 120, 122),
      onay(212, 40, 1.2),
    ],
  },
];

// ---------- 2. Oyma Ahşap Kaşık (5) ----------
const KASIK_YAN = `M30 80 Q30 64 60 64 Q84 64 96 74 L200 76 Q212 78 210 84 Q206 88 196 86 L96 86 Q84 96 60 96 Q30 96 30 80 Z`;
export const AHSAP_KASIK_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...tahta(20, 50, 200, 60), { d: KASIK_YAN, w: 1.2, kesik: true }, ...kalem(180, 76)] },
  {
    cizgiler: [ZEMIN, { d: KASIK_YAN, w: 1.7, dolgu: true }, ...testere(120, 40, 60), ...bicak(180, 90)],
    noktalar: talas(110, 110),
  },
  {
    cizgiler: [
      ZEMIN,
      { d: KASIK_YAN, w: 1.7, dolgu: true },
      { d: daire(62, 80, 22, 10), w: 1.2 },
      { d: `M44 74 Q60 70 74 80`, w: 0.8 },
      ok(42, 66, 60, 78, 0.8),
      ok(82, 66, 66, 78, 0.8),
      { d: `M100 50 L70 76 Q66 82 72 82`, w: 1.8 },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: daire(100, 80, 60, 30), w: 1.8, dolgu: true },
      { d: daire(100, 80, 54, 25), w: 1.2 },
      { d: `M160 80 L180 80 M180 74 L180 86 M154 74 L154 86`, w: 0.9 },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: KASIK_YAN, w: 1.7, dolgu: true },
      ...zimpara(120, 56, 40, 12),
      ...yagSisesi(200, 130),
      damla(186, 100, 0.8),
    ],
  },
];

// ---------- 3. Pencere Önü Çiçek Kutusu (4) ----------
export const CICEK_KUTUSU_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      ...tahta(20, 30, 200, 18),
      ...tahta(20, 56, 200, 18),
      ...tahta(20, 82, 200, 18),
      ...tahta(20, 108, 50, 18),
      ...tahta(84, 108, 50, 18),
      ...cetvel(150, 112, 70, 10),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...tahta(20, 70, 200, 40),
      { d: [50, 80, 110, 140, 170, 200].map((x) => daire(x, 90, 4)).join(" "), w: 1.2 },
      ...matkap(110, 66),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...kutuP(30, 70, 170, 50, 16),
      vida(36, 80),
      vida(36, 110),
      vida(194, 80),
      vida(194, 110),
      { d: `M150 30 L150 60`, w: 1.6 },
      { d: kutu(144, 14, 12, 16), w: 1.4, dolgu: true },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...kutuP(30, 70, 170, 50, 16),
      { d: `M40 66 Q120 58 210 60`, w: 0.9, kesik: true },
      ...firca(150, 100),
      ...sukulent(80, 66, 1.2),
      ...sukulent(120, 64, 1),
    ],
    taramalar: [{ id: "b", sinir: kutu(30, 70, 170, 50), kutu: [30, 70, 170, 50], aralik: 6, sonra: 0 }],
  },
];

// ---------- 4. Kulplu Servis Tepsisi (4) ----------
const TEPSI = `M30 90 L210 90 L196 120 L44 120 Z`;
export const SERVIS_TEPSISI_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      ...tahta(30, 50, 180, 12, false),
      ...tahta(30, 70, 180, 12, false),
      ...tahta(30, 90, 80, 12, false),
      ...tahta(130, 90, 80, 12, false),
      ...testere(60, 120, 100),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...tahta(40, 60, 160, 40),
      { d: daire(90, 76, 6) + " " + daire(150, 76, 6), w: 1.3 },
      isaret(90, 76, 150, 76),
      ...dekupaj(120, 70, 30),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: TEPSI, w: 1.8, dolgu: true },
      { d: `M30 90 L30 74 L210 74 L210 90`, w: 1.6 },
      ...cekic(170, 44),
      damla(60, 82, 0.6),
      damla(120, 80, 0.6),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: TEPSI, w: 1.8, dolgu: true },
      { d: `M30 90 L30 74 L210 74 L210 90`, w: 1.6 },
      ...bez(120, 60),
      ...yagSisesi(210, 70),
    ],
  },
];

// ---------- 5. Kitap / Tablet Standı (4) ----------
export const KITAP_STANDI_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      ...tahta(20, 40, 90, 70),
      ...tahta(130, 40, 40, 70),
      ...tahta(180, 70, 46, 40),
      ...cetvel(20, 118, 90, 10),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...tahta(30, 70, 180, 40),
      { d: `M80 70 L84 80 L88 70 M110 70 L114 80 L118 70 M140 70 L144 80 L148 70`, w: 1.4 },
      ...testere(150, 60, 60),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: `M60 130 L110 40 L120 46 L72 134 Z`, w: 1.6, dolgu: true },
      { d: `M110 40 L160 130`, w: 2.4 },
      ...mentese(112, 46),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(30, 120, 180, 10), w: 1.6, dolgu: true },
      { d: `M70 120 L120 34 L130 40 L82 124 Z`, w: 1.6, dolgu: true },
      { d: `M124 40 L170 120`, w: 2.4 },
      { d: kutu(62, 112, 24, 6), w: 1.4, dolgu: true },
      ok(40, 100, 62, 112),
    ],
  },
];

// ---------- 6. Basamaklı Ayakkabılık (4) ----------
export const AYAKKABILIK_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...tahta(30, 20, 70, 94), ...tahta(130, 20, 70, 94), ...cetvel(30, 120, 170, 8)] },
  {
    cizgiler: [
      ZEMIN,
      ...tahta(60, 20, 110, 110),
      { d: `M70 50 L160 42 M70 80 L160 72 M70 110 L160 102`, w: 3 },
      vida(90, 48, 2),
      vida(140, 44, 2),
      vida(90, 78, 2),
      vida(140, 74, 2),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...kutuP(50, 20, 130, 110, 18),
      { d: `M50 60 L180 50 M50 96 L180 86`, w: 2.4 },
      { d: `M50 56 L50 64 M50 92 L50 100`, w: 3 },
      { d: `M80 56 Q90 46 104 54 L104 58 L80 60 Z`, w: 1.2, dolgu: true },
    ],
  },
  { cizgiler: [ZEMIN, ...kutuP(50, 20, 130, 110, 18), ...zimpara(150, 90, 34, 12), ...firca(90, 70)] },
];

// ---------- 7. Duvar Askılığı (4) ----------
export const DUVAR_ASKILIK_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      ...tahta(20, 60, 200, 30),
      { d: [50, 95, 140, 185].map((x) => `M${x} 66 L${x} 84`).join(" "), w: 1.2 },
      ...cetvel(20, 40, 200, 10),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(40, 70, 160, 40), w: 1.8, dolgu: true },
      { d: `M120 110 L136 50`, w: 0.9, kesik: true },
      ...matkap(120, 106),
      yayOk(120, 110, 30, 4.4, 4.7),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...tahta(20, 70, 200, 30),
      { d: [50, 95, 140, 185].map((x) => `M${x} 80 L${x + 10} 52`).join(" "), w: 4 },
      damla(60, 96, 0.6),
    ],
  },
  {
    cizgiler: [
      DUVAR,
      ...tahta(20, 70, 200, 30),
      { d: [50, 95, 140, 185].map((x) => `M${x} 80 L${x + 10} 52`).join(" "), w: 4 },
      vida(30, 85),
      vida(210, 85),
      ...terazi(85, 104, 70),
    ],
  },
];

// ---------- 8. Ahşap Duvar Saati (4) ----------
const KADRAN = { d: daire(120, 75, 56), w: 1.8, dolgu: true };
const RAKAM: Cizgi = {
  d: Array.from({ length: 12 }, (_, i) => {
    const a = (i * Math.PI) / 6;
    return `M${r(120 + 46 * Math.sin(a))} ${r(75 - 46 * Math.cos(a))} L${r(120 + 52 * Math.sin(a))} ${r(75 - 52 * Math.cos(a))}`;
  }).join(" "),
  w: 1.6,
};
export const AHSAP_SAAT_ADIM: Cizim[] = [
  {
    cizgiler: [
      KADRAN,
      isaret(64, 75, 176, 75),
      isaret(120, 19, 120, 131),
      { d: daire(120, 75, 4), w: 1.4 },
      ...matkap(120, 70),
    ],
  },
  {
    cizgiler: [KADRAN, { d: kutu(96, 52, 48, 46), w: 1.3, kesik: true }, ...zimpara(150, 40, 30, 12)],
    noktalar: talas(180, 90),
  },
  { cizgiler: [KADRAN, RAKAM, { d: daire(120, 75, 3), w: 1.2 }, ...kalem(176, 75), yayOk(120, 75, 30, 4.71, 5.24)] },
  {
    cizgiler: [
      KADRAN,
      RAKAM,
      { d: `M120 75 L120 38 M120 75 L146 88`, w: 2.4 },
      { d: daire(120, 75, 3), w: 1.2, dolgu: true },
      onay(200, 30, 1.2),
    ],
  },
];

// ---------- 9. Paletten Sehpa (5) ----------
const PALET: Cizgi[] = [
  ...[0, 1, 2, 3, 4].flatMap((i) => tahta(30 + i * 37, 50, 30, 50, false)),
  { d: kutu(24, 100, 192, 14), w: 1.7, dolgu: true },
];
export const PALET_SEHPA_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...PALET, { d: kutu(96, 104, 48, 8), w: 1 }, onay(200, 30, 1.3)] },
  { cizgiler: [ZEMIN, ...PALET, ...firca(150, 70), damla(80, 40), damla(100, 36, 0.8), ...saat(30, 30, 10)] },
  { cizgiler: [ZEMIN, ...PALET, ...zimpara(90, 36, 50), ...cekic(180, 30)], noktalar: talas(70, 30) },
  { cizgiler: [ZEMIN, ...PALET, ...teker(40, 124), ...teker(200, 124), vida(34, 108, 2), vida(206, 108, 2)] },
  { cizgiler: [ZEMIN, ...PALET, ...teker(40, 124), ...teker(200, 124), ...firca(110, 46)] },
];

// ---------- 10. Basit Tabure (4) ----------
const AYAKLAR: Cizgi = { d: `M60 50 L56 130 M180 50 L184 130 M90 40 L88 112 M150 40 L152 112`, w: 3.4 };
const GERGI: Cizgi = { d: `M57 104 L183 104 M89 92 L151 92 M58 92 L89 86 M182 92 L151 86`, w: 2 };
export const TABURE_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      ...[0, 1, 2, 3].flatMap((i) => tahta(30, 30 + i * 22, 150, 12, false)),
      ...cetvel(30, 120, 150, 10),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...[0, 1, 2, 3].flatMap((i) => tahta(30 + (i % 2) * 90, 40 + Math.floor(i / 2) * 30, 80, 10, false)),
      ...testere(60, 120, 90),
    ],
  },
  { cizgiler: [ZEMIN, AYAKLAR, GERGI, kavela(40, 104, 14), ...gonye(184, 50, 30), damla(70, 98, 0.6)] },
  {
    cizgiler: [
      ZEMIN,
      AYAKLAR,
      GERGI,
      { d: `M44 50 L196 50 L170 34 L70 34 Z`, w: 1.8, dolgu: true },
      yayOk(196, 50, 10, 4.7, 6.2),
      vida(120, 46, 2),
    ],
  },
];

// ---------- 11. Tablet ve Telefon Standı (4) ----------
const BLOK = `M40 70 L200 70 L200 120 L40 120 Z`;
const KANAL: Cizgi = { d: `M100 70 L108 92 L116 92 L108 70`, w: 1.4 };
export const TABLET_STANDI_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, { d: BLOK, w: 1.8, dolgu: true }, KANAL, ...testere(90, 60, 50), yayOk(108, 92, 22, 4.3, 4.9)] },
  {
    cizgiler: [
      ZEMIN,
      { d: BLOK, w: 1.8, dolgu: true },
      KANAL,
      isaret(112, 92, 200, 108),
      kablo(200, 108, 230, 130, 10),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: `M40 80 Q40 70 50 70 L190 70 Q200 70 200 80 L200 120 L40 120 Z`, w: 1.8, dolgu: true },
      KANAL,
      ...zimpara(160, 50, 30, 12),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: `M40 80 Q40 70 50 70 L190 70 Q200 70 200 80 L200 120 L40 120 Z`, w: 1.8, dolgu: true },
      KANAL,
      { d: `M104 82 L84 20 L94 16 L114 82`, w: 1.5, dolgu: true },
      ...yagSisesi(170, 66),
    ],
  },
];

// ---------- 12. Baharat Rafı (4) ----------
const RAF_YAN: Cizgi = { d: kutu(50, 20, 12, 110) + " " + kutu(178, 20, 12, 110), w: 1.7, dolgu: true };
const RAFLAR: Cizgi = {
  d: kutu(62, 50, 116, 6) + " " + kutu(62, 84, 116, 6) + " " + kutu(62, 118, 116, 6),
  w: 1.5,
  dolgu: true,
};
export const BAHARAT_RAFI_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...tahta(30, 40, 160, 14), ...tahta(30, 64, 160, 14), ...cetvel(30, 96, 160, 10)] },
  { cizgiler: [ZEMIN, RAF_YAN, RAFLAR, vida(56, 53), vida(184, 53), vida(56, 87), vida(184, 87)] },
  {
    cizgiler: [
      ZEMIN,
      RAF_YAN,
      RAFLAR,
      { d: `M62 42 L178 42 M62 76 L178 76 M62 110 L178 110`, w: 1.8 },
      ...kavanozK(90, 50),
      ...kavanozK(120, 50),
      ...kavanozK(110, 84),
    ],
  },
  {
    cizgiler: [
      DUVAR,
      RAF_YAN,
      RAFLAR,
      { d: `M62 42 L178 42 M62 76 L178 76 M62 110 L178 110`, w: 1.8 },
      { d: daire(56, 14, 4) + " " + daire(184, 14, 4), w: 1.3 },
      ...terazi(85, 4, 70),
    ],
  },
];

// ---------- 13. Anahtar Askı Panosu (4) ----------
export const ANAHTAR_PANOSU_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...tahta(30, 60, 180, 50), ...zimpara(90, 46, 50)], noktalar: talas(160, 50) },
  {
    cizgiler: [
      ZEMIN,
      ...tahta(30, 60, 180, 50),
      { d: kutu(30, 46, 180, 14), w: 1.6, dolgu: true },
      vida(70, 53),
      vida(170, 53),
      ok(120, 30, 120, 44),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...tahta(30, 60, 180, 50),
      { d: kutu(30, 46, 180, 14), w: 1.6, dolgu: true },
      ...[60, 100, 140, 180].map((x) => kanca(x, 84)),
      isaret(30, 80, 210, 80),
    ],
  },
  {
    cizgiler: [
      DUVAR,
      ...tahta(30, 60, 180, 50),
      { d: kutu(30, 46, 180, 14), w: 1.6, dolgu: true },
      ...[60, 100, 140, 180].map((x) => kanca(x, 84)),
      anahtar(66, 110),
      anahtar(146, 110),
    ],
  },
];

// ---------- 14. Gönyeli Resim Çerçevesi (4) ----------
const CERCEVE: Cizgi = {
  d: `M40 20 L200 20 L200 130 L40 130 Z M56 36 L184 36 L184 114 L56 114 Z M40 20 L56 36 M200 20 L184 36 M200 130 L184 114 M40 130 L56 114`,
  w: 1.7,
  dolgu: true,
};
export const RESIM_CERCEVESI_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(70, 46, 100, 60), w: 1.4 },
      { d: kutu(62, 38, 116, 76), w: 1, kesik: true },
      ...cetvel(62, 120, 116, 10),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: `M30 90 L210 90 L194 106 L46 106 Z`, w: 1.7, dolgu: true },
      isaret(194, 106, 210, 90),
      ...testere(120, 70, 70),
      { d: `M30 60 L200 60`, w: 0.5 },
    ],
  },
  { cizgiler: [CERCEVE, damla(48, 28, 0.6), damla(192, 28, 0.6), ...iskence(44, 120, 10)] },
  {
    cizgiler: [
      CERCEVE,
      { d: kutu(56, 36, 128, 78), w: 1 },
      { d: `M80 90 L110 60 L130 80 L150 64 L176 90`, w: 1 },
      ok(214, 70, 196, 70),
    ],
  },
];

// ---------- 15. Merdiven Bitki Standı (4) ----------
const AYAK_M: Cizgi = { d: `M70 130 L110 20 M150 130 L114 20 M90 130 L120 40`, w: 3 };
const RAF_M: Cizgi = {
  d: kutu(104, 50, 52, 5) + " " + kutu(118, 82, 52, 5) + " " + kutu(132, 112, 52, 5),
  w: 1.5,
  dolgu: true,
};
export const BITKI_MERDIVENI_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      ...[0, 1, 2, 3].flatMap((i) => tahta(20, 30 + i * 20, 200, 10, false)),
      isaret(210, 30, 220, 40),
      ...cetvel(20, 118, 200, 10),
    ],
  },
  { cizgiler: [ZEMIN, { d: `M150 130 L114 20 M170 130 L134 20`, w: 3 }, RAF_M, vida(160, 52, 2), vida(176, 84, 2)] },
  { cizgiler: [ZEMIN, AYAK_M, RAF_M, ...mentese(112, 24)] },
  {
    cizgiler: [
      ZEMIN,
      AYAK_M,
      RAF_M,
      { d: `M88 90 q4 4 8 0 q4 4 8 0 q4 4 8 0 q4 4 8 0 q4 4 8 0`, w: 1.3 },
      ...sukulent(130, 50, 0.9),
      ...sukulent(150, 82, 0.9),
    ],
  },
];

// ---------- 16. Kütükten Kalemlik (4) ----------
const KUTUK = (alt = 120): Cizgi[] => [
  { d: `M70 50 L70 ${alt} Q120 ${alt + 10} 170 ${alt} L170 50`, w: 1.8, dolgu: true },
  { d: daire(120, 50, 50, 12), w: 1.8, dolgu: true },
  { d: daire(120, 50, 36, 8), w: 0.6 },
];
export const KUTUK_KALEMLIK_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      { d: `M60 50 L60 130 Q120 140 180 124 L180 50`, w: 1.8, dolgu: true },
      { d: daire(120, 50, 60, 12), w: 1.8, dolgu: true },
      isaret(40, 124, 200, 118),
      ...testere(150, 128, 60),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...KUTUK(),
      { d: [96, 112, 128, 144, 104, 136].map((x, i) => daire(x, 50 + (i > 3 ? 5 : -2), 4, 2)).join(" "), w: 1.2 },
      ...matkap(120, 50),
    ],
  },
  { cizgiler: [ZEMIN, ...KUTUK(), ...zimpara(170, 30, 30, 12)], noktalar: talas(200, 110) },
  { cizgiler: [ZEMIN, ...KUTUK(), { d: `M100 50 L92 10 M120 50 L124 8 M140 50 L150 14`, w: 2 }, ...firca(186, 90)] },
];

// ---------- 17. Ahşap Masa Lambası (4) ----------
const GOVDE: Cizgi = { d: kutu(96, 50, 48, 80), w: 1.8, dolgu: true };
export const AHSAP_LAMBA_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, GOVDE, isaret(120, 50, 120, 126), isaret(120, 126, 144, 126), ...matkap(120, 52)] },
  { cizgiler: [ZEMIN, GOVDE, ...zimpara(150, 70, 30, 12), ...yagSisesi(200, 130)] },
  {
    cizgiler: [
      ZEMIN,
      GOVDE,
      isaret(120, 50, 120, 126),
      kablo(144, 126, 210, 130, 6),
      { d: kutu(112, 36, 16, 14), w: 1.4, dolgu: true },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      GOVDE,
      { d: kutu(112, 36, 16, 14), w: 1.4, dolgu: true },
      { d: `M84 40 L100 4 L140 4 L156 40 Z`, w: 1.7, dolgu: true },
      kablo(144, 126, 210, 130, 6),
      { d: `M60 30 L72 30 M168 30 L180 30 M120 46 L120 46`, w: 1 },
    ],
  },
];

// ---------- 18. Kağıt Havlu Askısı (4) ----------
const TABAN: Cizgi = { d: daire(120, 110, 60, 14), w: 1.8, dolgu: true };
export const HAVLU_ASKISI_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      {
        d: `M50 80 Q50 70 60 70 L180 70 Q190 70 190 80 L190 100 Q190 110 180 110 L60 110 Q50 110 50 100 Z`,
        w: 1.8,
        dolgu: true,
      },
      ...zimpara(150, 50, 30, 12),
    ],
  },
  { cizgiler: [ZEMIN, TABAN, { d: daire(120, 108, 10, 3), w: 1.3 }, ...matkap(120, 104)] },
  {
    cizgiler: [
      ZEMIN,
      TABAN,
      { d: kutu(114, 20, 12, 90), w: 1.6, dolgu: true },
      damla(110, 102, 0.6),
      ok(160, 40, 130, 60),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      TABAN,
      { d: kutu(114, 20, 12, 90), w: 1.6, dolgu: true },
      { d: kutu(96, 40, 48, 64), w: 1.4, dolgu: true },
      { d: kutu(114, 36, 12, 72), w: 1 },
      ...bez(190, 70),
      ...yagSisesi(40, 96),
    ],
  },
];
