// Akvaryum kategorisi (Altın 40 dışı 18 proje): adım sahneleri (viewBox 0 0 240 150).
// Adım sayısı ve sırası src/data/ek/akvaryum.ts içeriğiyle birebir eşleşir.
import { Cizgi, Cizim, daire, kutu, yuvarla as r } from "../arac";
import {
  akvaryum,
  bicak,
  carpi,
  cetvel,
  cimbiz,
  damla,
  damlalik,
  firca,
  kabarcik,
  kablo,
  kase,
  makas,
  matkap,
  ok,
  onay,
  parmak,
  saat,
  sapBitki,
  silikon,
  sise,
  suYuzu,
  termometre,
  vida,
  yayOk,
  ZEMIN,
} from "./parca";

// ---------- Ortak parçalar ----------
// Standart tank: sol üst (x,y)
const TANK = (x = 40, y = 30, en = 160, boy = 96) => akvaryum(x, y, en, boy);
// Çakıl zemini: x1 → x2, üst çizgi y
const cakil = (x1: number, x2: number, y: number): Cizgi => {
  let d = `M${x1} ${y}`;
  for (let x = x1; x + 10 <= x2; x += 10) d += ` q5 -4 10 0`;
  return { d, w: 1 };
};
// Küçük balık: burun (x,y), yon 1 sağa yüzer (burun solda), -1 sola
const balikK = (x: number, y: number, s = 1, yon = 1): Cizgi => {
  const X = (d: number) => r(x + yon * d * s);
  const Y = (d: number) => r(y + d * s);
  return {
    d: `M${X(0)} ${y} Q${X(9)} ${Y(-7)} ${X(18)} ${y} L${X(25)} ${Y(-6)} L${X(24)} ${y} L${X(25)} ${Y(6)} L${X(18)} ${y} Q${X(9)} ${Y(7)} ${X(0)} ${y} Z`,
    w: 1.2,
    dolgu: true,
  };
};
// Karides (yandan): baş (x,y), kuyruk sağda
const karides = (x: number, y: number, s = 1): Cizgi[] => {
  const X = (d: number) => r(x + d * s);
  const Y = (d: number) => r(y + d * s);
  return [
    {
      d: `M${x} ${y} Q${X(12)} ${Y(-12)} ${X(26)} ${Y(-4)} L${X(32)} ${Y(4)} L${X(25)} ${Y(3)} Q${X(12)} ${Y(-3)} ${X(2)} ${Y(5)} Z`,
      w: 1.2,
      dolgu: true,
    },
    {
      d: `M${x} ${y} Q${X(-10)} ${Y(-10)} ${X(-20)} ${Y(-6)} M${x} ${Y(1)} Q${X(-8)} ${Y(-4)} ${X(-16)} ${Y(2)}`,
      w: 0.7,
    },
    {
      d: `M${X(8)} ${Y(-1)} L${X(7)} ${Y(6)} M${X(13)} ${Y(-2)} L${X(13)} ${Y(5)} M${X(18)} ${Y(-2)} L${X(19)} ${Y(5)}`,
      w: 0.7,
    },
  ];
};
// Betta: burun (x,y), uzun yüzgeçli
const betta = (x: number, y: number): Cizgi[] => [
  {
    d: `M${x + 30} ${y} Q${x + 52} ${y - 26} ${x + 66} ${y - 12} Q${x + 58} ${y} ${x + 66} ${y + 14} Q${x + 52} ${y + 28} ${x + 30} ${y} Z`,
    w: 1.2,
    dolgu: true,
  },
  { d: `M${x + 14} ${y - 8} Q${x + 24} ${y - 22} ${x + 34} ${y - 6}`, w: 1.1, dolgu: true },
  { d: `M${x + 14} ${y + 8} Q${x + 20} ${y + 24} ${x + 32} ${y + 6}`, w: 1.1, dolgu: true },
  balikK(x, y, 1.3),
  { d: daire(x + 6, y - 2, 1.4), w: 1, dolgu: true },
];
// Isıtıcı (dikey): üst (x,y)
const isitici = (x: number, y: number, boy = 56): Cizgi[] => [
  { d: kutu(x - 4, y, 8, boy), w: 1.5, dolgu: true },
  { d: kutu(x - 6, y - 8, 12, 8), w: 1.4, dolgu: true },
  { d: `M${x - 4} ${y + 12} L${x + 4} ${y + 12} M${x - 4} ${y + 18} L${x + 4} ${y + 18}`, w: 0.6 },
];
// Sünger filtre: taban orta (x,y)
const sungerF = (x: number, y: number): Cizgi[] => [
  { d: kutu(x - 10, y - 30, 20, 30), w: 1.5, dolgu: true },
  { d: `M${x} ${y - 30} L${x} ${y - 56} L${x + 8} ${y - 56}`, w: 2 },
  { d: daire(x - 4, y - 20, 1.4) + " " + daire(x + 4, y - 12, 1.4) + " " + daire(x - 3, y - 6, 1.2), w: 0.7 },
];
// Kova: taban orta (cx,y)
const kova = (cx: number, y: number, en = 50, boy = 44): Cizgi[] => [
  {
    d: `M${cx - en / 2} ${y - boy} L${cx - en / 2 + 6} ${y} L${cx + en / 2 - 6} ${y} L${cx + en / 2} ${y - boy} Z`,
    w: 1.7,
    dolgu: true,
  },
  { d: `M${cx - en / 2} ${y - boy} Q${cx} ${y - boy - 24} ${cx + en / 2} ${y - boy}`, w: 1.1 },
  { d: `M${cx - en / 2 + 3} ${y - boy + 10} L${cx + en / 2 - 3} ${y - boy + 10}`, w: 0.6, kesik: true },
];
// Balık torbası: düğüm (cx,y), torba aşağı
const torba = (cx: number, y: number): Cizgi[] => [
  {
    d: `M${cx - 3} ${y} Q${cx - 22} ${y + 10} ${cx - 18} ${y + 36} Q${cx} ${y + 44} ${cx + 18} ${y + 36} Q${cx + 22} ${y + 10} ${cx + 3} ${y} Z`,
    w: 1.4,
    dolgu: true,
  },
  { d: `M${cx - 4} ${y} L${cx} ${y - 8} L${cx + 4} ${y}`, w: 1.2 },
  { d: `M${cx - 16} ${y + 18} Q${cx} ${y + 15} ${cx + 16} ${y + 18}`, w: 0.7 },
];
// Test tüpü: ağız (x,y)
const tup = (x: number, y: number, boy = 44, dolu = 0.6): Cizgi[] => [
  {
    d: `M${x - 5} ${y} L${x - 5} ${y + boy - 5} Q${x - 5} ${y + boy} ${x} ${y + boy} Q${x + 5} ${y + boy} ${x + 5} ${y + boy - 5} L${x + 5} ${y}`,
    w: 1.4,
    dolgu: true,
  },
  { d: `M${x - 5} ${r(y + boy * (1 - dolu))} L${x + 5} ${r(y + boy * (1 - dolu))}`, w: 0.9 },
];
// Taş: taban orta (cx,y), tepe egim kadar sağa kayar
const tas = (cx: number, y: number, en: number, boy: number, egim = 0): Cizgi => ({
  d: `M${r(cx - en / 2)} ${y} L${r(cx - en * 0.36)} ${r(y - boy * 0.7)} L${r(cx + egim)} ${y - boy} L${r(cx + en * 0.4)} ${r(y - boy * 0.45)} L${r(cx + en / 2)} ${y} Z`,
  w: 1.6,
  dolgu: true,
});
// Vantuz: merkez (x,y)
const vantuz = (x: number, y: number): Cizgi[] => [
  { d: daire(x, y, 5), w: 1.2, dolgu: true },
  { d: `M${x} ${y} L${x + 8} ${y}`, w: 1.6 },
];
// Izgara: sol üst (x,y)
const izgara = (x: number, y: number, en: number, boy: number, a = 10): Cizgi[] => {
  let d = "";
  for (let i = a; i < en; i += a) d += `M${x + i} ${y} L${x + i} ${y + boy} `;
  for (let j = a; j < boy; j += a) d += `M${x} ${y + j} L${x + en} ${y + j} `;
  return [
    { d: kutu(x, y, en, boy), w: 1.5 },
    { d: d.trim(), w: 0.7 },
  ];
};
// Yosun öbeği (bulut gibi): sol alt (x,y), genişlik en
const yosun = (x: number, y: number, en = 30): Cizgi => {
  let d = `M${x} ${y}`;
  for (let i = 0; i + 8 <= en; i += 8) d += ` q4 -11 8 0`;
  return { d: d + ` Z`, w: 0.9, dolgu: true };
};
// Kepçe: file ağzı merkez (x,y), sap sağ üste
const kepce = (x: number, y: number): Cizgi[] => [
  { d: daire(x, y, 14, 8), w: 1.4 },
  { d: `M${x - 14} ${y} Q${x} ${y + 26} ${x + 14} ${y}`, w: 1, kesik: true },
  { d: `M${x + 14} ${y} L${x + 50} ${y - 34}`, w: 2 },
];
// Işık kapağı: tank üstünde, sol (x,y)
const lamba = (x: number, y: number, en: number, isik = true): Cizgi[] => [
  { d: kutu(x, y, en, 8), w: 1.6, dolgu: true },
  ...(isik
    ? [
        {
          d: `M${x + en * 0.25} ${y + 10} L${x + en * 0.2} ${y + 26} M${x + en * 0.5} ${y + 10} L${x + en * 0.5} ${y + 26} M${x + en * 0.75} ${y + 10} L${x + en * 0.8} ${y + 26}`,
          w: 0.8,
          kesik: true,
        },
      ]
    : []),
];
// Takvim: sol üst (x,y)
const takvim = (x: number, y: number): Cizgi[] => [
  { d: kutu(x, y, 30, 28), w: 1.4, dolgu: true },
  { d: `M${x} ${y + 8} L${x + 30} ${y + 8}`, w: 1 },
  { d: `M${x + 8} ${y - 3} L${x + 8} ${y + 3} M${x + 22} ${y - 3} L${x + 22} ${y + 3}`, w: 1.4 },
  {
    d: [0, 1, 2].flatMap((i) => [0, 1].map((j) => daire(x + 7 + i * 8, y + 14 + j * 8, 1.2))).join(" "),
    w: 0.8,
  },
];
// Güneş: merkez (x,y)
const gunes = (x: number, y: number): Cizgi[] => [
  { d: daire(x, y, 7), w: 1.3, dolgu: true },
  {
    d: [0, 1, 2, 3, 4, 5, 6, 7]
      .map((i) => {
        const a = (i * Math.PI) / 4;
        return `M${r(x + 10 * Math.cos(a))} ${r(y + 10 * Math.sin(a))} L${r(x + 14 * Math.cos(a))} ${r(y + 14 * Math.sin(a))}`;
      })
      .join(" "),
    w: 1,
  },
];
// Küçük kap (yandan): sol üst (x,y)
const kap = (x: number, y: number, en = 26, boy = 18): Cizgi => ({
  d: `M${x} ${y} L${x + 3} ${y + boy} L${x + en - 3} ${y + boy} L${x + en} ${y}`,
  w: 1.5,
  dolgu: true,
});
// Su terazisi: sol üst (x,y)
const terazi = (x: number, y: number, en = 70): Cizgi[] => [
  { d: kutu(x, y, en, 10), w: 1.5, dolgu: true },
  { d: kutu(x + en / 2 - 9, y + 2, 18, 6), w: 1 },
  { d: daire(x + en / 2, y + 5, 2), w: 0.8, dolgu: true },
];
// Strafor blok (noktalı): sol üst (x,y)
const strafor = (x: number, y: number, en: number, boy: number): Cizim["noktalar"] => {
  const n: [number, number, number][] = [];
  for (let i = 6; i < en; i += 9) for (let j = 6; j < boy; j += 9) n.push([x + i + ((j / 9) % 2) * 3, y + j, 0.7]);
  return n;
};
// Yaprak (geniş): sap dibi (x,y), uç (x2,y2)
const yaprak = (x: number, y: number, x2: number, y2: number): Cizgi => ({
  d: `M${x} ${y} Q${r((x + x2) / 2 - 12)} ${r((y + y2) / 2 - 10)} ${x2} ${y2} Q${r((x + x2) / 2 + 8)} ${r((y + y2) / 2 + 10)} ${x} ${y} Z`,
  w: 1.2,
  dolgu: true,
});
// Yem taneleri
const yem = (x: number, y: number): Cizim["noktalar"] => [
  [x, y, 1.3],
  [x + 6, y + 4, 1.2],
  [x - 5, y + 7, 1.2],
  [x + 3, y + 11, 1.3],
];

// ---------- 1. Mayalı DIY CO₂ Sistemi (5) ----------
export const DIY_CO2_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      ...sise(70, 134, 40, 96),
      { d: `M70 32 Q70 10 40 14 Q20 16 22 40`, w: 1.3 },
      ...silikon(80, 34),
      ...saat(200, 40, 12),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...sise(80, 134, 44, 96),
      { d: `M60 70 L100 70`, w: 0.8, kesik: true },
      ...termometre(120, 60, 40),
      kase(180, 96, 56, 26),
      ok(160, 80, 106, 50),
    ],
    noktalar: [
      [172, 104, 1.4],
      [182, 108, 1.4],
      [190, 102, 1.4],
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...sise(30, 134, 30, 80),
      kablo(30, 48, 74, 70, -26),
      { d: kutu(74, 70, 20, 40), w: 1.5, dolgu: true },
      kabarcik(84, 104),
      kablo(94, 76, 124, 90, -10),
      { d: kutu(124, 84, 22, 12), w: 1.5, dolgu: true },
      ok(128, 90, 142, 90, 0.9),
      kablo(146, 90, 176, 118, 10),
      ...akvaryum(160, 70, 70, 60),
      { d: daire(190, 120, 5), w: 1.4, dolgu: true },
    ],
  },
  {
    cizgiler: [
      ...TANK(),
      cakil(42, 198, 116),
      { d: kutu(170, 34, 16, 50), w: 1.5, dolgu: true },
      ok(170, 80, 150, 92),
      { d: daire(150, 108, 6), w: 1.4, dolgu: true },
      kablo(150, 102, 150, 20, -40),
      kabarcik(150, 96),
    ],
  },
  {
    cizgiler: [
      ...TANK(30, 30, 130, 96),
      cakil(32, 158, 116),
      kabarcik(70, 108),
      kabarcik(110, 104),
      ...takvim(185, 40),
      yayOk(200, 104, 16, 0, 5),
    ],
  },
];

// ---------- 2. Haftalık Su Değişimi ve Sifon (4) ----------
export const SU_DEGISIMI_ADIM: Cizim[] = [
  {
    cizgiler: [
      ...TANK(20, 30, 110, 96),
      ...isitici(40, 46),
      { d: kutu(100, 40, 20, 40), w: 1.5, dolgu: true },
      carpi(40, 76, 8),
      carpi(110, 60, 8),
      ...kova(185, 134, 56, 50),
      ...termometre(200, 50, 40),
      ...damlalik(170, 70),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...akvaryum(20, 20, 130, 80),
      cakil(22, 148, 90),
      { d: kutu(60, 70, 14, 26), w: 1.5, dolgu: true },
      kablo(67, 70, 190, 96, -90),
      ...kova(190, 134, 56, 34),
      ok(100, 50, 100, 30),
    ],
  },
  {
    cizgiler: [
      ...TANK(),
      cakil(42, 198, 116),
      { d: kutu(110, 50, 30, 20), w: 1.5, dolgu: true },
      { d: `M60 50 L80 60 L66 72 L86 82 L70 96`, w: 0.8, kesik: true },
      ...parmak(125, 50),
    ],
  },
  {
    cizgiler: [
      ...TANK(20, 50, 140, 80),
      cakil(22, 158, 120),
      ...kova(200, 50, 50, 36),
      kablo(190, 30, 80, 104, -40),
      { d: kutu(60, 104, 40, 4), w: 1.2, dolgu: true },
      ...sapBitki(130, 120, 50),
      onay(220, 120, 1.2),
    ],
  },
];

// ---------- 3. Karides Akvaryumu (4) ----------
export const KARIDES_AKVARYUMU_ADIM: Cizim[] = [
  {
    cizgiler: [
      ...TANK(20, 30, 140, 96),
      cakil(22, 158, 116),
      ...sungerF(60, 116),
      kabarcik(68, 70),
      ...takvim(190, 50),
      yayOk(205, 106, 14, 0, 5),
    ],
  },
  {
    cizgiler: [
      ...TANK(),
      cakil(42, 198, 116),
      ...sapBitki(70, 116, 60),
      ...sapBitki(176, 116, 70),
      yosun(90, 116, 36),
      yosun(140, 116, 24),
      ...karides(110, 100),
    ],
  },
  {
    cizgiler: [
      ...TANK(),
      cakil(42, 198, 116),
      ...torba(110, 44),
      ...karides(100, 76, 0.6),
      ...damlalik(110, 34),
      damla(110, 38, 0.6),
      ...saat(200, 20, 9),
    ],
  },
  {
    cizgiler: [ZEMIN, ...karides(90, 100, 2.2), ...saat(190, 40, 12)],
    noktalar: yem(150, 112),
  },
];

// ---------- 4. Betta Isıtmalı Akvaryum (4) ----------
export const BETTA_AKVARYUMU_ADIM: Cizim[] = [
  {
    cizgiler: [
      ...TANK(),
      cakil(42, 198, 116),
      ...isitici(60, 46, 60),
      ...termometre(180, 44, 46),
      { d: kutu(140, 40, 16, 34), w: 1.5, dolgu: true },
      ok(150, 76, 140, 84, 0.8),
    ],
  },
  {
    cizgiler: [
      ...TANK(),
      cakil(42, 198, 116),
      { d: `M150 116 Q146 80 140 46`, w: 1.2 },
      yaprak(140, 46, 100, 42),
      yaprak(140, 46, 180, 44),
      ...betta(96, 56),
    ],
  },
  {
    cizgiler: [
      ...TANK(),
      cakil(42, 198, 116),
      { d: daire(80, 70, 12) + " " + daire(120, 90, 12) + " " + daire(160, 70, 12), w: 1.3, dolgu: true },
      ok(94, 74, 106, 84),
      ok(134, 84, 146, 74),
      yayOk(120, 62, 30, 3.6, 5.8),
    ],
  },
  {
    cizgiler: [
      { d: kutu(36, 22, 168, 6), w: 1.6, dolgu: true },
      ...TANK(),
      cakil(42, 198, 116),
      ...torba(80, 40),
      ...betta(110, 84),
      ok(170, 10, 170, 20),
    ],
  },
];

// ---------- 5. Su Testlerini Yorumlama (4) ----------
export const SU_TESTI_ADIM: Cizim[] = [
  {
    cizgiler: [
      ...akvaryum(20, 30, 110, 96),
      ...tup(170, 50, 60, 0.7),
      { d: `M160 66 L180 66`, w: 0.8, kesik: true },
      ok(120, 50, 158, 50),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...tup(100, 70, 60, 0.7),
      ...damlalik(100, 40),
      damla(100, 48, 0.7),
      damla(100, 60, 0.6),
      ...saat(180, 60, 12),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(40, 40, 120, 70), w: 1.5, dolgu: true },
      {
        d:
          kutu(52, 90, 16, 12) + " " + kutu(76, 90, 16, 12) + " " + kutu(100, 90, 16, 12) + " " + kutu(124, 90, 16, 12),
        w: 1,
      },
      ...tup(100, 30, 54, 0.7),
      ...gunes(200, 34),
    ],
    taramalar: [
      { id: "k", sinir: kutu(124, 90, 16, 12), kutu: [124, 90, 16, 12], aralik: 2.5, sonra: 2 },
      { id: "m", sinir: kutu(100, 90, 16, 12), kutu: [100, 90, 16, 12], aralik: 4, sonra: 2 },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...tup(50, 50, 54, 0.7),
      ...tup(80, 50, 54, 0.7),
      ...tup(110, 50, 54, 0.7),
      onay(50, 40),
      onay(80, 40),
      carpi(110, 40, 5),
      ok(130, 80, 160, 90),
      ...kova(196, 134, 52, 40),
    ],
    taramalar: [{ id: "n", sinir: kutu(105, 66, 10, 38), kutu: [105, 66, 10, 38], aralik: 2.5, sonra: 5 }],
  },
];

// ---------- 6. Yosun Kontrolü (4) ----------
export const YOSUN_KONTROL_ADIM: Cizim[] = [
  {
    cizgiler: [
      ...lamba(56, 14, 148),
      ...TANK(60, 30, 140, 96),
      cakil(62, 198, 116),
      ...saat(222, 70, 11),
      ...gunes(28, 50),
      carpi(28, 50, 18),
    ],
  },
  {
    cizgiler: [ZEMIN, balikK(60, 80, 3), ...saat(190, 50, 12)],
    noktalar: [
      [150, 96, 1.3],
      [158, 100, 1.2],
    ],
  },
  {
    cizgiler: [
      ...TANK(20, 30, 140, 96),
      cakil(22, 158, 116),
      { d: `M60 40 L60 70`, w: 2 },
      { d: kutu(52, 70, 16, 6), w: 1.4, dolgu: true },
      yosun(80, 60, 30),
      kablo(130, 100, 200, 100, -60),
      ...kova(200, 134, 46, 34),
    ],
  },
  {
    cizgiler: [
      ...TANK(),
      cakil(42, 198, 116),
      ...sapBitki(70, 116, 76),
      ...sapBitki(90, 116, 64),
      ...sapBitki(150, 116, 80),
      ...sapBitki(170, 116, 66),
      ok(120, 100, 120, 60),
    ],
  },
];

// ---------- 7. Iwagumi Taş Düzeni (4) ----------
const IWA_CAKIL = cakil(42, 198, 112);
const IWA_UCLER: Cizgi = { d: `M93 34 L93 124 M147 34 L147 124`, w: 0.6, kesik: true };
const ANA_TAS = tas(93, 114, 46, 66, 8);
const YARDIMCI = [tas(132, 114, 32, 42, -6), tas(60, 114, 26, 30, 4)];
const KUCUK = [tas(160, 114, 16, 14), tas(116, 114, 12, 10), tas(176, 114, 12, 9)];
export const IWAGUMI_ADIM: Cizim[] = [
  { cizgiler: [...TANK(), IWA_CAKIL, IWA_UCLER, ANA_TAS] },
  {
    cizgiler: [
      ...TANK(),
      IWA_CAKIL,
      IWA_UCLER,
      ANA_TAS,
      ...YARDIMCI,
      ok(120, 60, 106, 60, 0.8),
      ok(54, 70, 72, 64, 0.8),
    ],
  },
  { cizgiler: [...TANK(), IWA_CAKIL, ANA_TAS, ...YARDIMCI, ...KUCUK] },
  {
    cizgiler: [
      ...TANK(),
      IWA_CAKIL,
      ANA_TAS,
      ...YARDIMCI,
      ...KUCUK,
      { d: `M150 114 l2 -6 l2 6 l2 -7 l2 7 M186 114 l2 -6 l2 6 l2 -6 l2 6`, w: 0.8 },
      ...cimbiz(144, 112),
    ],
  },
];

// ---------- 8. Kapak ve LED Aydınlatma (4) ----------
export const AKVARYUM_KAPAK_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      { d: `M30 60 L190 60 L190 110 L176 110 L176 98 L162 98 L162 110 L30 110 Z`, w: 1.6, dolgu: true },
      { d: `M30 54 L190 54`, w: 0.8, kesik: true },
      ...cetvel(30, 36, 160, 10),
      ...bicak(176, 98),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...akvaryum(40, 70, 160, 60),
      { d: kutu(40, 60, 160, 6), w: 1.4, dolgu: true },
      { d: `M40 60 L60 30 L200 30 L200 60`, w: 1.4, kesik: true },
      { d: daire(80, 63, 3) + " " + daire(160, 63, 3), w: 1.1, dolgu: true },
      yayOk(120, 66, 34, 3.8, 4.6),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(30, 70, 180, 14), w: 1.6, dolgu: true },
      { d: kutu(36, 74, 168, 6), w: 1, dolgu: true },
      { d: `M20 100 L220 100`, w: 0.8, kesik: true },
      ok(120, 50, 120, 68),
    ],
    noktalar: [50, 70, 90, 110, 130, 150, 170, 190].map((x) => [x, 77, 1.5] as [number, number, number]),
  },
  {
    cizgiler: [
      ZEMIN,
      ...akvaryum(20, 50, 110, 80),
      { d: kutu(20, 42, 110, 8), w: 1.4, dolgu: true },
      { d: `M110 46 Q150 46 150 80 Q150 104 160 104 Q168 104 168 94 Q168 80 180 80`, w: 1.3 },
      { d: kutu(180, 72, 22, 18), w: 1.5, dolgu: true },
      { d: kutu(186, 96, 30, 34), w: 1.5, dolgu: true },
      ...saat(201, 112, 8),
      damla(168, 106, 0.7),
    ],
  },
];

// ---------- 9. Lepistes Yavru Kutusu (4) ----------
const KUTU = { d: kutu(70, 40, 100, 70), w: 1.7, dolgu: true };
const PENCERE = kutu(84, 52, 72, 46);
export const YAVRU_KUTUSU_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, KUTU, { d: PENCERE, w: 1.2, kesik: true }, ...bicak(156, 98)] },
  {
    cizgiler: [ZEMIN, KUTU, { d: PENCERE, w: 1.3 }, ...silikon(156, 52), ...saat(40, 50, 10)],
    taramalar: [
      { id: "f", sinir: PENCERE, kutu: [84, 52, 72, 46], aralik: 4, sonra: 2 },
      { id: "g", sinir: PENCERE, kutu: [84, 52, 72, 46], aralik: 4, ters: true, sonra: 2 },
    ],
  },
  {
    cizgiler: [
      ...TANK(),
      cakil(42, 198, 116),
      { d: kutu(150, 34, 40, 30), w: 1.5, dolgu: true },
      ...vantuz(194, 42),
      ...vantuz(194, 58),
      balikK(80, 80, 1.6),
    ],
  },
  {
    cizgiler: [
      ...TANK(),
      cakil(42, 198, 116),
      kap(70, 70, 30, 20),
      balikK(78, 78, 0.5),
      ok(110, 70, 146, 54),
      { d: kutu(150, 34, 40, 30), w: 1.5, dolgu: true },
      carpi(70, 50, 6),
      ...kepce(50, 40),
    ],
  },
];

// ---------- 10. Dış Filtre Temizliği (4) ----------
const KANISTER = (x: number, y: number): Cizgi[] => [
  { d: kutu(x, y, 40, 56), w: 1.7, dolgu: true },
  { d: kutu(x - 3, y - 8, 46, 8), w: 1.6, dolgu: true },
  { d: `M${x + 10} ${y - 8} L${x + 10} ${y - 20} M${x + 30} ${y - 8} L${x + 30} ${y - 20}`, w: 2 },
];
export const DIS_FILTRE_BAKIMI_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      ...KANISTER(50, 78),
      kablo(60, 58, 30, 20, -10),
      kablo(80, 58, 110, 20, -10),
      carpi(60, 52, 5),
      carpi(80, 52, 5),
      ok(110, 100, 150, 100),
      ...kova(190, 134, 56, 44),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...kova(80, 134, 70, 50),
      { d: `M58 94 Q80 86 102 94 L100 110 Q80 116 60 110 Z`, w: 1.4, dolgu: true },
      ...parmak(72, 92),
      ...parmak(90, 92),
      { d: `M170 40 L200 40 L200 50 M170 40 L170 34 L180 34`, w: 2.2 },
      damla(200, 56, 0.8),
      carpi(200, 76, 10),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: `M20 84 Q110 64 200 84 M20 96 Q110 76 200 96`, w: 1.6 },
      { d: daire(20, 90, 3, 6) + " " + daire(200, 90, 3, 6), w: 1.2 },
      { d: `M40 89 Q110 70 210 90 L236 94`, w: 1, kesik: true },
      { d: `M206 82 l0 16 M210 82 l0 16 M214 83 l0 16 M218 84 l0 16`, w: 0.9 },
      ok(80, 110, 120, 110),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: daire(110, 90, 50, 20), w: 2 },
      { d: daire(110, 90, 44, 16), w: 1 },
      ...parmak(150, 82),
      onay(200, 40, 1.4),
    ],
  },
];

// ---------- 11. Artemia Çıkarma (4) ----------
// Ters şişe: boyun aşağıda (cx, y), gövde yukarı
const TERS_SISE = (cx: number, y: number): Cizgi[] => [
  {
    d: `M${cx - 4} ${y} L${cx - 4} ${y - 8} Q${cx - 18} ${y - 14} ${cx - 18} ${y - 26} L${cx - 18} ${y - 84} L${cx + 18} ${y - 84} L${cx + 18} ${y - 26} Q${cx + 18} ${y - 14} ${cx + 4} ${y - 8} L${cx + 4} ${y} Z`,
    w: 1.7,
    dolgu: true,
  },
  { d: `M${cx - 30} ${y + 34} L${cx - 14} ${y - 20} M${cx + 30} ${y + 34} L${cx + 14} ${y - 20}`, w: 1.3 },
];
export const ARTEMIA_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...TERS_SISE(100, 100), { d: `M200 40 Q160 0 104 12 L104 94`, w: 1.2 }, ok(170, 70, 130, 70)] },
  {
    cizgiler: [
      ZEMIN,
      ...TERS_SISE(80, 100),
      { d: `M62 40 L98 40`, w: 0.8, kesik: true },
      { d: `M150 70 Q150 82 162 82 Q174 82 174 70 Z M174 74 L210 66`, w: 1.4, dolgu: true },
      ok(150, 60, 104, 40),
    ],
    noktalar: [
      [158, 66, 1],
      [164, 64, 1],
      [168, 67, 1],
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...TERS_SISE(80, 100),
      { d: `M150 50 Q130 0 84 12 L84 94`, w: 1.2 },
      kabarcik(80, 80),
      ...lamba(110, 10, 50),
      ...termometre(196, 50, 46),
    ],
    noktalar: [
      [74, 56, 0.8],
      [86, 60, 0.8],
      [80, 50, 0.8],
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...TERS_SISE(80, 100),
      kablo(81, 100, 160, 120, 20),
      { d: `M150 116 Q166 136 182 116 Z`, w: 1.3, dolgu: true },
      ...saat(200, 40, 11),
    ],
    noktalar: [
      [70, 22, 1],
      [80, 20, 1],
      [90, 23, 1],
      [78, 86, 1.6],
      [82, 90, 1.6],
      [76, 92, 1.6],
      [84, 84, 1.6],
    ],
  },
];

// ---------- 12. Java Yosunu Duvarı (4) ----------
const YOSUN_SIRA = [yosun(46, 66, 36), yosun(90, 70, 42), yosun(140, 66, 36), yosun(60, 100, 40), yosun(116, 102, 44)];
export const YOSUN_DUVARI_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...izgara(40, 40, 150, 80), ...YOSUN_SIRA] },
  {
    cizgiler: [
      ZEMIN,
      ...izgara(40, 40, 150, 80),
      ...YOSUN_SIRA,
      ...izgara(46, 34, 150, 80),
      {
        d: kutu(36, 36, 14, 8) + " " + kutu(184, 36, 14, 8) + " " + kutu(36, 110, 14, 8) + " " + kutu(184, 110, 14, 8),
        w: 1.5,
        dolgu: true,
      },
    ],
  },
  {
    cizgiler: [
      ...TANK(),
      cakil(42, 198, 116),
      ...izgara(56, 40, 128, 64, 8),
      ...vantuz(62, 46).slice(0, 1),
      ...vantuz(178, 46).slice(0, 1),
      ...vantuz(62, 98).slice(0, 1),
      ...vantuz(178, 98).slice(0, 1),
    ],
  },
  {
    cizgiler: [
      ...TANK(30, 30, 140, 96),
      cakil(32, 158, 116),
      yosun(40, 60, 120),
      yosun(40, 84, 120),
      yosun(40, 108, 120),
      ...takvim(190, 50),
    ],
  },
];

// ---------- 13. Tatil Otomatik Yemlik (4) ----------
const YEMLIK = (x: number, y: number): Cizgi[] => [
  { d: kutu(x, y, 30, 36), w: 1.6, dolgu: true },
  { d: daire(x + 15, y + 14, 8), w: 1.2 },
  { d: `M${x + 15} ${y + 14} L${x + 15} ${y + 8}`, w: 1 },
  { d: kutu(x + 24, y + 36, 8, 8), w: 1.3, dolgu: true },
];
export const TATIL_YEMLIGI_ADIM: Cizim[] = [
  {
    cizgiler: [
      ...TANK(),
      cakil(42, 198, 116),
      ...YEMLIK(150, 6),
      { d: `M150 30 L144 30 L144 44 L150 44`, w: 2 },
      vida(147, 37, 2),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(60, 40, 80, 80), w: 1.8, dolgu: true },
      { d: daire(100, 80, 28), w: 1.5 },
      { d: `M100 52 L100 58 M128 80 L122 80`, w: 1.6 },
      { d: `M100 80 L100 60`, w: 1.4 },
      ...saat(190, 50, 12),
    ],
  },
  {
    cizgiler: [
      ...akvaryum(20, 40, 130, 86),
      ...YEMLIK(110, 8),
      balikK(60, 80, 1.5),
      ...takvim(175, 40),
      onay(190, 100, 1.2),
    ],
    noktalar: yem(118, 60),
  },
  {
    cizgiler: [ZEMIN, ...YEMLIK(90, 50), damla(150, 50), damla(166, 60, 0.8), carpi(158, 60, 14)],
  },
];

// ---------- 14. Akvaryum Sehpası (5) ----------
const CERCEVE = (y: number): Cizgi => ({ d: `M40 ${y} L180 ${y} L200 ${y - 14} L60 ${y - 14} Z`, w: 1.6 });
export const AKVARYUM_SEHPASI_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      ...akvaryum(40, 40, 100, 64),
      { d: kutu(30, 104, 120, 30), w: 1.6, dolgu: true },
      ok(90, 10, 90, 34),
      ok(180, 60, 180, 120),
      ok(204, 60, 204, 120),
    ],
  },
  {
    cizgiler: [ZEMIN, CERCEVE(60), CERCEVE(120), vida(44, 58), vida(176, 58), ...matkap(200, 86)],
  },
  {
    cizgiler: [
      ZEMIN,
      CERCEVE(40),
      CERCEVE(120),
      { d: `M40 40 L40 120 M180 40 L180 120 M110 40 L110 120 M60 26 L60 106 M200 26 L200 106`, w: 2.2 },
      ok(40, 122, 40, 134, 0.8),
      ok(110, 122, 110, 134, 0.8),
      ok(180, 122, 180, 134, 0.8),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: `M30 50 L180 50 L210 30 L60 30 Z`, w: 1.8, dolgu: true },
      { d: `M30 50 L30 130 M180 50 L180 130 M210 30 L210 110`, w: 2.2 },
      ...firca(110, 40),
      vida(60, 40, 2),
      vida(170, 40, 2),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(50, 30, 140, 56), w: 1, kesik: true },
      { d: `M40 90 L200 90 M40 90 L40 134 M200 90 L200 134 M120 90 L120 134`, w: 2.2 },
      ...terazi(85, 80),
      onay(210, 30, 1.2),
    ],
  },
];

// ---------- 15. Mini Paludaryum (5) ----------
// Paludaryum tankı: su seviyesi alçak (y 90), kara bölmesi sağda suyun üstüne çıkar
const PALU: Cizgi[] = [
  { d: kutu(40, 30, 160, 96), w: 1.8 },
  { d: `M37 30 L203 30 M37 126 L203 126`, w: 2.4 },
  suYuzu(42, 118, 90),
];
const KARA = `M120 126 L120 62 L198 54 L198 126 Z`;
const KARA_C: Cizgi = { d: KARA, w: 1.6, dolgu: true };
export const PALUDARYUM_ADIM: Cizim[] = [
  { cizgiler: [...PALU, KARA_C, ...silikon(64, 70)], noktalar: strafor(122, 60, 74, 64) },
  {
    cizgiler: [
      ...PALU,
      KARA_C,
      { d: kutu(70, 106, 16, 14), w: 1.5, dolgu: true },
      { d: `M86 112 Q190 118 190 60 Q170 50 130 60`, w: 1.2, kesik: true },
      { d: `M122 62 Q118 76 116 92 M127 61 Q123 76 121 92`, w: 0.9 },
      kabarcik(118, 112),
    ],
  },
  {
    cizgiler: [...PALU, KARA_C, ...firca(160, 84)],
    noktalar: [
      [130, 80, 0.8],
      [140, 96, 0.8],
      [150, 110, 0.8],
      [184, 72, 0.8],
      [188, 100, 0.8],
      [170, 116, 0.8],
      [132, 112, 0.8],
    ],
  },
  {
    cizgiler: [
      ...PALU,
      KARA_C,
      { d: `M156 58 L156 48`, w: 1.1 },
      yaprak(156, 48, 140, 30),
      yaprak(156, 48, 176, 32),
      yosun(126, 62, 24),
      yosun(176, 56, 18),
      ...sapBitki(70, 126, 50),
      ...sapBitki(92, 126, 38),
    ],
  },
  {
    cizgiler: [...PALU, KARA_C, yayOk(96, 106, 10, 0, 5), balikK(50, 104, 1), ...saat(222, 20, 9)],
  },
];

// ---------- 16. Sap Bitkisi Budama (4) ----------
export const BITKI_BUDAMA_ADIM: Cizim[] = [
  {
    cizgiler: [
      ...TANK(),
      cakil(42, 198, 116),
      ...sapBitki(100, 116, 84),
      { d: `M80 76 L130 76`, w: 0.8, kesik: true },
      ...makas(104, 76),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...sapBitki(110, 120, 60),
      ...parmak(98, 116),
      ok(120, 116, 160, 124),
      yaprak(166, 126, 180, 120),
    ],
  },
  {
    cizgiler: [
      ...TANK(),
      cakil(42, 198, 104),
      ...sapBitki(100, 116, 40),
      ...cimbiz(102, 112),
      { d: `M70 104 L70 116 M66 104 L74 104 M66 116 L74 116`, w: 0.9 },
    ],
  },
  {
    cizgiler: [
      ...TANK(),
      cakil(42, 198, 104),
      ...sapBitki(90, 104, 50),
      ...sapBitki(120, 104, 46),
      { d: kutu(140, 110, 10, 6), w: 1.3, dolgu: true },
      ok(145, 80, 145, 104),
    ],
  },
];

// ---------- 17. Karantina Tankı (4) ----------
export const KARANTINA_TANKI_ADIM: Cizim[] = [
  {
    cizgiler: [
      ...akvaryum(20, 30, 110, 96),
      cakil(22, 128, 116),
      ...akvaryum(160, 70, 64, 56),
      ...sungerF(200, 124),
      ok(120, 60, 170, 80),
    ],
  },
  {
    cizgiler: [...akvaryum(50, 40, 140, 86), ...torba(120, 46), balikK(110, 74, 0.8), ...sungerF(170, 124)],
  },
  {
    cizgiler: [
      ZEMIN,
      balikK(40, 80, 3.2),
      { d: daire(80, 76, 22), w: 1.6 },
      { d: `M96 92 L120 116`, w: 3 },
      ...takvim(180, 40),
    ],
    noktalar: [
      [74, 72, 1.2],
      [86, 78, 1.2],
      [78, 84, 1.2],
    ],
  },
  {
    cizgiler: [
      ...akvaryum(16, 70, 64, 56),
      ...akvaryum(110, 30, 120, 96),
      cakil(112, 228, 116),
      ok(70, 60, 120, 60),
      balikK(150, 80, 1.2),
      ...kepce(40, 40),
    ],
  },
];

// ---------- 18. 3B Kaya Arka Fon (4) ----------
const FON = `M40 30 L200 30 L200 120 L40 120 Z`;
const CATLAK: Cizgi = { d: `M70 40 L84 70 L74 100 M130 34 L140 60 L160 66 M110 80 L150 90 L170 112`, w: 1.1 };
const RAF: Cizgi = { d: `M54 76 L96 72 L96 80 L54 84 Z M150 46 L190 44 L190 52 L150 54 Z`, w: 1.3, dolgu: true };
export const ARKA_FON_ADIM: Cizim[] = [
  {
    cizgiler: [ZEMIN, { d: FON, w: 1.7, dolgu: true }, CATLAK, RAF, ...bicak(140, 60)],
    noktalar: strafor(40, 30, 160, 90),
  },
  {
    cizgiler: [ZEMIN, { d: FON, w: 1.7, dolgu: true }, CATLAK, RAF, ...firca(150, 108), kase(212, 96, 30, 14)],
    taramalar: [{ id: "c", sinir: FON, kutu: [40, 30, 160, 90], aralik: 5, sonra: 1 }],
  },
  {
    cizgiler: [
      { d: kutu(20, 40, 200, 90), w: 1.8 },
      { d: kutu(40, 60, 160, 60), w: 1.4, dolgu: true },
      {
        d: `M20 52 q8 -3 16 0 q8 3 16 0 q8 -3 16 0 q8 3 16 0 q8 -3 16 0 q8 3 16 0 q8 -3 16 0 q8 3 16 0 q8 -3 16 0 q8 3 16 0 q8 -3 16 0 q8 3 16 0`,
        w: 1,
      },
      ...saat(200, 20, 10),
      yayOk(40, 20, 12, 0, 5),
    ],
  },
  {
    cizgiler: [
      ...akvaryum(30, 30, 180, 96),
      { d: `M36 34 L204 34 L204 122 L36 122 Z`, w: 1.4, dolgu: true },
      CATLAK,
      ...silikon(150, 80),
      ...saat(20, 14, 9),
    ],
  },
];
