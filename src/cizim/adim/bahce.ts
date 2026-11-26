// Bahçe kategorisi (Altın 40 dışı 18 proje): adım sahneleri (viewBox 0 0 240 150).
// Adım sayısı ve sırası src/data/ek/bahce.ts içeriğiyle birebir eşleşir.
import { Cizgi, Cizim, Tarama, daire, kutu, yuvarla as r } from "../arac";
import {
  carpi,
  damla,
  damlalik,
  fide,
  kablo,
  kalem,
  kase,
  kavanoz,
  makas,
  matkap,
  ok,
  onay,
  parmak,
  saat,
  saksi,
  sapBitki,
  sis,
  sprey,
  tahta,
  termometre,
  vida,
  yayOk,
  ZEMIN,
} from "./parca";

type Nokta = [number, number, number];

// ---------- Ortak parçalar ----------
const toprakT = (id: string, x: number, y: number, en: number, boy: number, sonra = -1): Tarama => ({
  id,
  sinir: kutu(x, y, en, boy),
  kutu: [x, y, en, boy],
  aralik: 4,
  sonra,
});
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
const takvim = (x: number, y: number): Cizgi[] => [
  { d: kutu(x, y, 30, 28), w: 1.4, dolgu: true },
  {
    d: `M${x} ${y + 8} L${x + 30} ${y + 8} M${x + 8} ${y - 3} L${x + 8} ${y + 3} M${x + 22} ${y - 3} L${x + 22} ${y + 3}`,
    w: 1.2,
  },
];
const cakil = (x1: number, x2: number, y1: number, y2: number, a = 7): Nokta[] => {
  const n: Nokta[] = [];
  for (let y = y1 + 3; y < y2; y += a)
    for (let x = x1 + 4 + ((y / a) % 2) * 3; x < x2 - 2; x += a) n.push([r(x), r(y), 1.5]);
  return n;
};
// Marul: taban (x,y)
const marul = (x: number, y: number, s = 1): Cizgi => ({
  d: `M${x} ${y} Q${r(x - 24 * s)} ${r(y - 6 * s)} ${r(x - 20 * s)} ${r(y - 24 * s)} Q${r(x - 8 * s)} ${r(y - 20 * s)} ${x} ${y} Q${r(x - 6 * s)} ${r(y - 30 * s)} ${x} ${r(y - 36 * s)} Q${r(x + 6 * s)} ${r(y - 30 * s)} ${x} ${y} Q${r(x + 8 * s)} ${r(y - 20 * s)} ${r(x + 20 * s)} ${r(y - 24 * s)} Q${r(x + 24 * s)} ${r(y - 6 * s)} ${x} ${y} Z`,
  w: 1.3,
  dolgu: true,
});
// Hidroponik kutu (önden): üst kapak y=60
const HIDRO: Cizgi[] = [
  { d: kutu(40, 60, 160, 70), w: 1.8, dolgu: true },
  { d: kutu(36, 54, 168, 8), w: 1.6, dolgu: true },
];
const netSaksi = (x: number, y = 54): Cizgi => ({
  d: `M${x - 10} ${y} L${x + 10} ${y} L${x + 7} ${y + 20} L${x - 7} ${y + 20} Z M${x - 8} ${y + 7} L${x + 8} ${y + 7} M${x - 7} ${y + 14} L${x + 7} ${y + 14}`,
  w: 1.3,
  dolgu: true,
});
const SU = (y: number): Cizgi => ({
  d: `M42 ${y} q10 -3 20 0 q10 3 20 0 q10 -3 20 0 q10 3 20 0 q10 -3 20 0 q10 3 20 0 q10 -3 20 0 q10 3 16 0`,
  w: 1,
});
const kok = (x: number, y: number, boy = 20): Cizgi => ({
  d: `M${x} ${y} L${x - 4} ${y + boy} M${x} ${y} L${x} ${y + boy + 4} M${x} ${y} L${x + 4} ${y + boy}`,
  w: 0.8,
});
// Saksı sırası (balkon)
const saksiSira = (y = 100): Cizgi[] => [...saksi(60, y, 40, 30), ...saksi(120, y, 40, 30), ...saksi(180, y, 40, 30)];
const HAT = (y = 136): Cizgi => ({ d: `M20 ${y} L210 ${y}`, w: 2.4 });
const damlatici = (x: number, y: number): Cizgi[] => [
  { d: `M${x} ${y} L${x} ${y - 12}`, w: 2 },
  { d: kutu(x - 3, y - 18, 6, 6), w: 1.2, dolgu: true },
];
// Musluk (duvar): (x,y)
const musluk = (x: number, y: number): Cizgi => ({
  d: `M${x} ${y} L${x + 20} ${y} L${x + 20} ${y + 10} M${x + 10} ${y} L${x + 10} ${y - 8} M${x + 4} ${y - 8} L${x + 16} ${y - 8}`,
  w: 2.2,
});
// Kutu (kompost): sol üst (x,y)
const KUTU = (x = 50, y = 50, en = 140, boy = 80): Cizgi[] => [
  { d: kutu(x, y, en, boy), w: 1.8, dolgu: true },
  { d: kutu(x - 4, y - 8, en + 8, 8), w: 1.5, dolgu: true },
];
const delikler = (x1: number, x2: number, y: number, a = 14): Cizgi => ({
  d: Array.from({ length: Math.floor((x2 - x1) / a) + 1 }, (_, i) => daire(x1 + i * a, y, 2)).join(" "),
  w: 1,
});
const solucan = (x: number, y: number): Cizgi => ({ d: `M${x} ${y} q5 -5 10 0 q5 5 10 0 q5 -5 10 0`, w: 2 });
// Kabuk: (x,y)
const kabuk = (x: number, y: number): Cizgi => ({
  d: `M${x - 8} ${y} Q${x} ${y - 8} ${x + 8} ${y} Z`,
  w: 1.2,
  dolgu: true,
});
// Viyol (fide tepsisi): 6 göz
const VIYOL: Cizgi[] = [
  { d: kutu(40, 96, 160, 34), w: 1.7, dolgu: true },
  { d: [1, 2, 3, 4, 5].map((i) => `M${40 + i * 26.7} 96 L${40 + i * 26.7} 130`).join(" "), w: 1 },
];
const gozX = (i: number) => r(53 + i * 26.7);
// Bidon (kompost): sol üst (x,y)
const BIDON: Cizgi[] = [
  { d: `M70 40 L170 40 L166 130 L74 130 Z`, w: 1.8, dolgu: true },
  { d: kutu(66, 32, 108, 8), w: 1.5, dolgu: true },
];
// Yatak (yükseltilmiş, perspektif)
const YATAK: Cizgi[] = [
  { d: `M30 120 L170 120 L210 96 L70 96 Z`, w: 1.4 },
  { d: kutu(30, 100, 140, 30), w: 1.8, dolgu: true },
  { d: `M170 100 L210 76 L210 106 L170 130 M30 100 L70 76 L210 76`, w: 1.6 },
  { d: `M30 115 L170 115 M170 115 L210 91`, w: 0.8 },
];
// Palet (dik/yatay): sol üst (x,y)
const palet = (x: number, y: number, yatik = false): Cizgi[] =>
  yatik
    ? [...[0, 1, 2, 3].flatMap((i) => tahta(x, y + i * 14, 180, 9, false))]
    : [
        ...[0, 1, 2, 3, 4].flatMap((i) => tahta(x, y + i * 22, 120, 12, false)),
        { d: kutu(x + 4, y - 4, 10, 106) + " " + kutu(x + 106, y - 4, 10, 106), w: 1.5 },
      ];
// Soğan: alt (x,y)
const sogan = (x: number, y: number, s = 1): Cizgi => ({
  d: `M${r(x - 7 * s)} ${y} Q${r(x - 9 * s)} ${r(y - 8 * s)} ${x} ${r(y - 14 * s)} Q${r(x + 9 * s)} ${r(y - 8 * s)} ${r(x + 7 * s)} ${y} Z M${x} ${y} l-3 3 M${x} ${y} l3 3`,
  w: 1.2,
  dolgu: true,
});
const SAKSI_B: Cizgi[] = saksi(120, 30, 140, 104);
// Varil: sol üst (x,y)
const varil = (x = 80, y = 30): Cizgi[] => [
  { d: `M${x} ${y} L${x + 70} ${y} L${x + 70} ${y + 80} L${x} ${y + 80} Z`, w: 1.8, dolgu: true },
  { d: `M${x} ${y + 26} L${x + 70} ${y + 26} M${x} ${y + 54} L${x + 70} ${y + 54}`, w: 0.9 },
];
const BLOK: Cizgi = { d: kutu(76, 110, 36, 24) + " " + kutu(118, 110, 36, 24), w: 1.6, dolgu: true };
// Domates: merkez (x,y)
const domates = (x: number, y: number, R = 16): Cizgi[] => [
  { d: daire(x, y, R), w: 1.6, dolgu: true },
  { d: `M${x - 6} ${y - R + 2} L${x} ${y - R - 4} L${x + 6} ${y - R + 2}`, w: 1.2 },
];
const zarf = (x: number, y: number): Cizgi[] => [
  { d: kutu(x, y, 46, 32), w: 1.5, dolgu: true },
  { d: `M${x} ${y} L${x + 23} ${y + 16} L${x + 46} ${y}`, w: 1.1 },
];
// Çilek kulesi (dik boru): sol üst (x,y)
const KULE: Cizgi = { d: kutu(96, 20, 48, 114), w: 1.8, dolgu: true };
const KULE_DELIK: [number, number][] = [
  [108, 40],
  [132, 58],
  [108, 76],
  [132, 94],
  [108, 112],
];
const cilek = (x: number, y: number): Cizgi => ({
  d: `M${x - 5} ${y} Q${x} ${y + 10} ${x + 5} ${y} Q${x} ${y - 3} ${x - 5} ${y} Z`,
  w: 1.2,
  dolgu: true,
});
// Sepet (asma): orta (x,y)
const sepet = (x: number, y: number): Cizgi[] => [
  { d: `M${x - 44} ${y} Q${x - 44} ${y + 44} ${x} ${y + 44} Q${x + 44} ${y + 44} ${x + 44} ${y}`, w: 1.8, dolgu: true },
  { d: `M${x - 44} ${y} L${x + 44} ${y}`, w: 1.4 },
];
const zincir = (x: number, y: number): Cizgi => ({
  d: `M${x - 40} ${y} L${x} ${y - 60} L${x + 40} ${y} M${x} ${y - 60} L${x} ${y - 70}`,
  w: 1,
});
// Test tüpü: ağız (x,y)
const tup = (x: number, y: number, boy = 44): Cizgi[] => [
  {
    d: `M${x - 5} ${y} L${x - 5} ${y + boy - 5} Q${x - 5} ${y + boy} ${x} ${y + boy} Q${x + 5} ${y + boy} ${x + 5} ${y + boy - 5} L${x + 5} ${y}`,
    w: 1.4,
    dolgu: true,
  },
  { d: `M${x - 5} ${y + boy * 0.4} L${x + 5} ${y + boy * 0.4}`, w: 0.9 },
];
const kurek = (x: number, y: number): Cizgi[] => [
  { d: `M${x} ${y} Q${x - 8} ${y + 12} ${x} ${y + 22} Q${x + 8} ${y + 12} ${x} ${y} Z`, w: 1.4, dolgu: true },
  { d: `M${x} ${y} L${x} ${y - 40}`, w: 2.4 },
];
// Gül çalısı: taban (x,y)
const GUL: Cizgi = {
  d: `M120 130 L120 100 L90 60 L80 30 M120 100 L150 56 L160 26 M120 110 L100 50 M120 104 L140 40 M90 60 L70 50`,
  w: 2,
};

// ---------- 1. Kratky Marul (6) ----------
export const KRATKY_MARUL_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(60, 96, 30, 30) + " " + kutu(100, 96, 30, 30) + " " + kutu(140, 96, 30, 30), w: 1.5, dolgu: true },
      ...fide(75, 96),
      ...fide(115, 96),
      ...takvim(190, 40),
    ],
    noktalar: [[155, 92, 1.4]],
  },
  {
    cizgiler: [
      ZEMIN,
      ...HIDRO,
      { d: daire(70, 58, 9) + " " + daire(110, 58, 9) + " " + daire(150, 58, 9) + " " + daire(190, 58, 0), w: 1.3 },
      ...matkap(150, 52),
    ],
  },
  { cizgiler: [ZEMIN, ...HIDRO, SU(80), ...damlalik(120, 30), damla(120, 40), ...tup(200, 60)] },
  {
    cizgiler: [
      ZEMIN,
      ...HIDRO,
      SU(80),
      netSaksi(80),
      netSaksi(160),
      ...fide(80, 54),
      ...fide(160, 54),
      kok(80, 74, 10),
      kok(160, 74, 10),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...HIDRO,
      SU(100),
      netSaksi(80),
      netSaksi(160),
      marul(80, 54, 0.8),
      marul(160, 54, 0.8),
      kok(80, 74, 30),
      kok(160, 74, 30),
      { d: `M44 78 L196 78`, w: 0.6, kesik: true },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...HIDRO,
      netSaksi(80),
      netSaksi(160),
      marul(80, 54, 1.4),
      marul(160, 54, 1.4),
      ...makas(190, 30),
      onay(30, 30, 1.2),
    ],
  },
];

// ---------- 2. Balkon Damla Sulama (5) ----------
export const DAMLA_SULAMA_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...saksiSira(), HAT(), { d: kutu(210, 132, 8, 8), w: 1.4, dolgu: true }] },
  {
    cizgiler: [
      ZEMIN,
      musluk(20, 30),
      { d: kutu(26, 44, 24, 30), w: 1.5, dolgu: true },
      ...saat(38, 59, 8),
      { d: `M38 74 Q38 136 80 136 L210 136`, w: 2.4 },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...saksiSira(),
      HAT(),
      { d: daire(60, 136, 2) + " " + daire(120, 136, 2), w: 1.2 },
      { d: `M180 136 L180 120 M176 124 L184 124`, w: 1.8 },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...saksiSira(),
      HAT(),
      kablo(60, 136, 66, 96, -20, 1),
      kablo(120, 136, 126, 96, -20, 1),
      ...damlatici(66, 96),
      ...damlatici(126, 96),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...saksiSira(),
      HAT(),
      ...damlatici(66, 96),
      ...damlatici(126, 96),
      ...damlatici(186, 96),
      damla(66, 100, 0.6),
      damla(126, 100, 0.6),
      ...saat(30, 30, 10),
    ],
  },
];

// ---------- 3. Solucan Kompost (5) ----------
export const SOLUCAN_KOMPOST_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...KUTU(), delikler(60, 180, 130), delikler(60, 180, 56, 20), ...matkap(196, 60)] },
  {
    cizgiler: [
      ZEMIN,
      ...KUTU(),
      { d: `M60 100 l10 -8 l12 6 l8 -10 l14 8 l10 -6 l14 8 l12 -8 l10 6 l14 -6`, w: 1 },
      damla(190, 30),
    ],
    taramalar: [toprakT("y", 52, 100, 136, 28, 1)],
  },
  {
    cizgiler: [ZEMIN, ...KUTU(), { d: `M52 100 L188 100`, w: 1 }, solucan(80, 96), solucan(120, 94), solucan(150, 98)],
  },
  {
    cizgiler: [
      ZEMIN,
      ...KUTU(),
      { d: `M52 100 L188 100`, w: 1 },
      kabuk(90, 98),
      kabuk(120, 98),
      kabuk(140, 96),
      ...takvim(196, 10),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...KUTU(),
      { d: `M52 100 L188 100`, w: 1 },
      ok(90, 110, 70, 110),
      kabuk(160, 98),
      ...kurek(80, 70),
    ],
    taramalar: [toprakT("h", 52, 100, 60, 28, 0)],
  },
];

// ---------- 4. Tohumdan Domates Fidesi (5) ----------
export const DOMATES_FIDE_ADIM: Cizim[] = [
  {
    cizgiler: [ZEMIN, ...VIYOL, ok(gozX(1), 70, gozX(1), 90)],
    noktalar: [0, 1, 2, 3, 4, 5].flatMap(
      (i) =>
        [
          [gozX(i) - 3, 102, 1.3],
          [gozX(i) + 3, 103, 1.3],
        ] as Nokta[],
    ),
  },
  {
    cizgiler: [
      ZEMIN,
      ...VIYOL,
      { d: `M36 96 Q120 60 204 96`, w: 1.3, kesik: true },
      ...termometre(210, 40, 46),
      ...takvim(20, 40),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...VIYOL,
      ...[0, 1, 2, 3, 4, 5].flatMap((i) => fide(gozX(i), 96, 0.7)),
      { d: kutu(160, 10, 60, 50), w: 1.4 },
      ...gunes(190, 35),
    ],
  },
  { cizgiler: [ZEMIN, ...VIYOL, ...[0, 2, 4].flatMap((i) => fide(gozX(i), 96, 1)), ...makas(gozX(1) + 4, 92)] },
  {
    cizgiler: [
      ZEMIN,
      ...saksi(60, 90, 40, 40),
      ...fide(60, 90, 1.2),
      ok(90, 80, 140, 80),
      ...gunes(190, 40),
      { d: `M150 100 L230 100`, w: 0.6 },
      ...takvim(180, 104),
    ],
  },
];

// ---------- 5. Balkon Kompost Bidonu (5) ----------
export const SICAK_KOMPOST_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...BIDON, delikler(86, 158, 70), delikler(86, 158, 100), ...matkap(186, 60)] },
  { cizgiler: [ZEMIN, ...BIDON, { d: `M80 120 L100 112 L96 126 L120 114 L118 128 L140 116 L150 126`, w: 1.4 }] },
  {
    cizgiler: [
      ZEMIN,
      ...BIDON,
      { d: `M78 110 L162 110 M77 92 L163 92 M76 74 L164 74`, w: 1 },
      kabuk(100, 106),
      kabuk(140, 70),
      { d: `M110 88 l8 -4 M130 88 l6 -5`, w: 1.2 },
    ],
  },
  { cizgiler: [ZEMIN, ...BIDON, { d: `M120 30 L120 110`, w: 2.4 }, yayOk(120, 90, 24, 0, 5.5), ...takvim(196, 40)] },
  {
    cizgiler: [ZEMIN, ...BIDON, { d: kutu(96, 116, 48, 14), w: 1.3 }, ok(120, 130, 200, 134), ...kurek(206, 96)],
    taramalar: [toprakT("k", 96, 116, 48, 14, 1)],
  },
];

// ---------- 6. Yükseltilmiş Sebze Yatağı (4) ----------
export const YUKSELTILMIS_YATAK_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...YATAK, vida(34, 106), vida(34, 124), vida(166, 106), vida(166, 124), ...matkap(200, 66)] },
  { cizgiler: [ZEMIN, ...YATAK, ...gunes(200, 30), { d: `M40 118 L160 118`, w: 0.8, kesik: true }] },
  {
    cizgiler: [ZEMIN, ...YATAK, { d: `M40 100 L80 88 L120 100 L160 86`, w: 1.4 }, ...kurek(120, 40)],
    taramalar: [{ id: "t", sinir: `M30 100 L70 76 L210 76 L170 100 Z`, kutu: [30, 76, 180, 24], aralik: 4, sonra: 2 }],
  },
  {
    cizgiler: [
      ZEMIN,
      ...YATAK,
      marul(70, 92, 0.6),
      marul(110, 92, 0.6),
      marul(150, 92, 0.6),
      marul(100, 82, 0.5),
      marul(140, 82, 0.5),
    ],
  },
];

// ---------- 7. Paletten Dikey Bahçe (5) ----------
export const PALET_DIKEY_BAHCE_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...palet(60, 24), { d: kutu(100, 60, 40, 20), w: 1.3 }, onay(190, 40, 1.2)] },
  {
    cizgiler: [
      ZEMIN,
      ...palet(30, 70, true),
      { d: `M30 70 L210 70 L210 126 L30 126`, w: 1, kesik: true },
      { d: `M80 64 l4 -4 M140 64 l4 -4`, w: 1.6 },
    ],
  },
  {
    cizgiler: [ZEMIN, ...palet(30, 70, true), ...kurek(120, 30)],
    taramalar: [toprakT("a", 30, 70, 180, 9, 0), toprakT("b", 30, 98, 180, 9, 6)],
  },
  {
    cizgiler: [ZEMIN, ...palet(30, 70, true), ...fide(70, 70), ...fide(120, 70), ...fide(170, 70), ...takvim(190, 20)],
  },
  {
    cizgiler: [
      { d: `M0 40 L240 40 M0 80 L240 80 M0 120 L240 120 M60 0 L60 40 M180 0 L180 40`, w: 0.4 },
      ...palet(60, 24),
      ...fide(90, 24),
      ...fide(130, 46),
      ...fide(100, 68),
      ...fide(140, 90),
    ],
  },
];

// ---------- 8. Lale ve Sümbül Soğanı (5) ----------
export const CICEK_SOGANI_ADIM: Cizim[] = [
  { cizgiler: [...SAKSI_B], noktalar: cakil(82, 158, 118, 130) },
  {
    cizgiler: [
      ...SAKSI_B,
      { d: `M58 118 L182 118`, w: 1 },
      sogan(80, 116),
      sogan(110, 116),
      sogan(140, 116),
      sogan(166, 116),
    ],
  },
  {
    cizgiler: [
      ...SAKSI_B,
      { d: `M58 118 L182 118 M54 92 L186 92`, w: 1 },
      sogan(80, 116),
      sogan(140, 116),
      sogan(96, 90, 0.8),
      sogan(146, 90, 0.8),
    ],
  },
  {
    cizgiler: [
      ...SAKSI_B,
      { d: `M58 118 L182 118 M54 92 L186 92 M50 66 L190 66`, w: 1 },
      sogan(96, 90, 0.8),
      sogan(146, 90, 0.8),
      sogan(90, 64, 0.5),
      sogan(120, 64, 0.5),
      sogan(150, 64, 0.5),
      damla(200, 30),
    ],
  },
  {
    cizgiler: [
      ...saksi(80, 70, 100, 64),
      ...sapBitki(60, 70, 50),
      ...sapBitki(96, 70, 40),
      { d: daire(200, 40, 14), w: 1, kesik: true },
      ok(160, 70, 186, 50),
    ],
  },
];

// ---------- 9. Yağmur Suyu Varili (5) ----------
export const YAGMUR_SUYU_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, BLOK, ...varil(80, 30), ok(115, 26, 115, 6, 0.8)] },
  { cizgiler: [ZEMIN, BLOK, ...varil(80, 30), musluk(150, 98), { d: daire(152, 98, 4), w: 1 }] },
  {
    cizgiler: [
      ZEMIN,
      BLOK,
      ...varil(80, 30),
      musluk(150, 98),
      { d: `M150 40 L170 40 Q190 40 190 70 L190 134`, w: 2.4 },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      BLOK,
      ...varil(80, 30),
      musluk(150, 98),
      { d: `M60 0 L60 60 L80 50`, w: 4 },
      { d: kutu(54, 40, 12, 14), w: 1.4, dolgu: true },
      damla(70, 60, 0.6),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      BLOK,
      ...varil(80, 30),
      musluk(150, 98),
      { d: `M76 26 L154 26`, w: 2 },
      { d: `M80 22 l4 -4 l4 4 l4 -4 l4 4 l4 -4 l4 4 l4 -4 l4 4 l4 -4 l4 4 l4 -4 l4 4 l4 -4 l4 4 l4 -4 l4 4`, w: 0.7 },
      carpi(200, 30, 8),
    ],
  },
];

// ---------- 10. Tohum Toplama ve Saklama (5) ----------
export const TOHUM_SAKLAMA_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      ...domates(60, 90, 22),
      { d: `M60 90 L84 90`, w: 1 },
      ...kavanoz(160, 134, 60, 70, false),
      { d: `M134 104 q13 -4 26 0 q13 4 26 0`, w: 1 },
      ...takvim(200, 20),
    ],
    noktalar: [
      [150, 116, 1.4],
      [162, 120, 1.4],
      [170, 114, 1.4],
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      kase(80, 70, 80, 36),
      { d: `M50 70 L110 70 M60 76 L100 76`, w: 0.7 },
      damla(80, 50),
      { d: kutu(140, 110, 80, 10), w: 1.3, dolgu: true },
    ],
    noktalar: [
      [160, 108, 1.4],
      [176, 108, 1.4],
      [190, 108, 1.4],
      [204, 108, 1.4],
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: `M60 40 Q90 30 120 60 Q100 70 60 40 Z`, w: 1.4, dolgu: true },
      { d: `M80 46 l2 6 M96 54 l2 6`, w: 1 },
      ok(130, 70, 160, 90),
      kase(190, 100, 60, 26),
    ],
    noktalar: [
      [180, 104, 2],
      [192, 106, 2],
      [202, 103, 2],
    ],
  },
  { cizgiler: [ZEMIN, ...zarf(60, 70), ...zarf(130, 70), ...kalem(110, 82)] },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(60, 70, 120, 60), w: 1.8, dolgu: true },
      { d: kutu(56, 62, 128, 10), w: 1.5, dolgu: true },
      ...termometre(200, 40, 50),
      { d: `M30 40 a12 12 0 1 0 10 -20 a10 10 0 1 1 -10 20 Z`, w: 1.3, dolgu: true },
    ],
  },
];

// ---------- 11. Dikey Çilek Kulesi (4) ----------
export const CILEK_KULESI_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, KULE, { d: KULE_DELIK.map(([x, y]) => daire(x, y, 6)).join(" "), w: 1.3 }, ...matkap(170, 54)] },
  {
    cizgiler: [
      ZEMIN,
      KULE,
      { d: kutu(116, 10, 8, 120), w: 1.3, dolgu: true },
      { d: daire(120, 40, 1.4) + " " + daire(120, 70, 1.4) + " " + daire(120, 100, 1.4), w: 0.9 },
    ],
  },
  {
    cizgiler: [ZEMIN, KULE, ...fide(108, 112), ...fide(132, 94), ...kurek(180, 60)],
    taramalar: [toprakT("t", 98, 90, 44, 42, 0)],
  },
  {
    cizgiler: [
      ZEMIN,
      KULE,
      ...KULE_DELIK.flatMap(([x, y]) => fide(x, y, 0.8)),
      ...fide(110, 20),
      ...fide(130, 20),
      cilek(100, 48),
      cilek(140, 102),
      damla(120, 4),
    ],
  },
];

// ---------- 12. Çelikle Çoğaltma (5) ----------
export const CELIKLE_COGALTMA_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...sapBitki(110, 134, 100), { d: `M90 80 L130 80`, w: 0.8, kesik: true }, ...makas(116, 80)] },
  { cizgiler: [ZEMIN, ...sapBitki(120, 120, 60), ...parmak(116, 116), ok(140, 110, 170, 124)] },
  {
    cizgiler: [
      ZEMIN,
      ...sapBitki(90, 110, 60),
      { d: kutu(140, 90, 30, 40), w: 1.5, dolgu: true },
      ok(110, 108, 140, 100),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...saksi(120, 80, 70, 54),
      ...sapBitki(120, 96, 50),
      { d: `M90 80 L90 96 M86 80 L94 80 M86 96 L94 96`, w: 0.9 },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...saksi(120, 80, 70, 54),
      ...sapBitki(120, 80, 50),
      { d: `M80 80 Q80 10 120 10 Q160 10 160 80`, w: 1.3, kesik: true },
      ...takvim(190, 30),
    ],
  },
];

// ---------- 13. Yaprak Bitine Sabunlu Su (5) ----------
const yaprakB = (x: number, y: number): Cizgi => ({
  d: `M${x} ${y} Q${x + 30} ${y - 30} ${x + 70} ${y - 10} Q${x + 40} ${y + 20} ${x} ${y} Z M${x} ${y} L${x + 70} ${y - 10}`,
  w: 1.4,
  dolgu: true,
});
const bitler: Nokta[] = [
  [110, 76, 1.6],
  [120, 80, 1.6],
  [130, 72, 1.6],
  [140, 78, 1.6],
];
export const DOGAL_YAPRAK_BITI_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      ...sprey(80, 130),
      { d: kutu(140, 100, 26, 16), w: 1.3, dolgu: true },
      ok(140, 96, 100, 70),
      ...termometre(200, 40, 46),
    ],
  },
  { cizgiler: [ZEMIN, yaprakB(80, 80), ...sprey(200, 120), ...sis(198, 72, 30), ...takvim(30, 20)] },
  {
    cizgiler: [ZEMIN, yaprakB(80, 80), ...sprey(200, 120), ...sis(198, 72, 30), { d: daire(30, 30, 10), w: 1.2 }],
    noktalar: bitler,
  },
  { cizgiler: [ZEMIN, yaprakB(80, 80), damla(110, 50), damla(130, 46, 0.8), damla(150, 52, 0.7), ...saat(30, 40, 10)] },
  { cizgiler: [ZEMIN, yaprakB(80, 80), ...takvim(180, 30), yayOk(195, 44, 22, 0, 5)], noktalar: bitler.slice(0, 1) },
];

// ---------- 14. Asma Çiçek Sepeti (5) ----------
export const ASKI_SEPET_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      ...sepet(120, 60),
      { d: `M80 64 Q120 120 160 64`, w: 1.2, kesik: true },
      { d: daire(110, 100, 2) + " " + daire(130, 100, 2), w: 1 },
    ],
  },
  { cizgiler: [ZEMIN, ...sepet(120, 60), { d: `M80 82 L160 82`, w: 1 }, ...kurek(180, 40)] },
  { cizgiler: [ZEMIN, ...sepet(120, 60), ...bicak0(76, 90), ...fide(80, 92, 0.9)] },
  { cizgiler: [ZEMIN, ...sepet(120, 60), ...fide(100, 60), ...fide(130, 60), ...fide(82, 90, 0.8)] },
  {
    cizgiler: [
      zincir(120, 60),
      ...sepet(120, 60),
      ...fide(100, 60),
      ...fide(130, 60),
      ...gunes(200, 30),
      damla(160, 30),
    ],
  },
];
function bicak0(x: number, y: number): Cizgi[] {
  return [
    { d: `M${x} ${y} L${x - 10} ${y - 12}`, w: 1.6 },
    { d: `M${x - 10} ${y - 12} L${x - 30} ${y - 30} L${x - 26} ${y - 34} L${x - 6} ${y - 16}`, w: 1.4, dolgu: true },
  ];
}

// ---------- 15. Toprak pH Testi (5) ----------
export const TOPRAK_PH_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      { d: daire(50, 130, 6, 2) + " " + daire(100, 132, 6, 2) + " " + daire(150, 130, 6, 2), w: 1 },
      ...kurek(100, 96),
      { d: `M90 134 L90 144 M86 134 L94 134`, w: 0.8 },
      kase(200, 100, 50, 24),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      kase(100, 80, 100, 40),
      ...parmak(110, 82),
      { d: `M160 120 l6 -6 l6 4 M180 110 q4 -6 8 0`, w: 1.2 },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...tup(100, 40, 60),
      { d: kutu(140, 80, 16, 10), w: 1.3, dolgu: true },
      ok(140, 84, 108, 60),
      yayOk(100, 70, 24, 3.6, 5.6),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...tup(70, 40, 60),
      { d: kutu(110, 60, 110, 30), w: 1.5, dolgu: true },
      { d: [0, 1, 2, 3, 4].map((i) => kutu(116 + i * 20, 66, 14, 18)).join(" "), w: 1 },
      ok(86, 70, 108, 74),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(50, 70, 40, 50), w: 1.5, dolgu: true },
      { d: kutu(150, 70, 40, 50), w: 1.5, dolgu: true },
      ok(96, 96, 144, 96),
      ...kurek(120, 60),
    ],
  },
];

// ---------- 16. Beton Saksı (5) ----------
const KAP_B = `M50 40 L190 40 L176 130 L64 130 Z`;
const KAP_K = `M86 50 L154 50 L146 110 L94 110 Z`;
export const BETON_SAKSI_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, { d: KAP_B, w: 1.7 }, { d: `M100 10 L140 10 L136 40 L104 40 Z`, w: 1.5 }, ...firca0(170, 90)] },
  {
    cizgiler: [
      ZEMIN,
      { d: KAP_B, w: 1.7 },
      { d: `M62 116 L178 116`, w: 1.2 },
      { d: kutu(114, 96, 12, 24), w: 1.4, dolgu: true },
    ],
    taramalar: [
      { id: "b", sinir: `M62 116 L178 116 L176 130 L64 130 Z`, kutu: [62, 116, 116, 14], aralik: 3, sonra: 1 },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: KAP_B, w: 1.7 },
      { d: KAP_K, w: 1.6, dolgu: true },
      { d: daire(110, 90, 6) + " " + daire(130, 92, 6), w: 1.2, dolgu: true },
      ok(40, 50, 60, 70),
    ],
    taramalar: [{ id: "b", sinir: KAP_B, kutu: [50, 40, 140, 90], aralik: 3, sonra: 0 }],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: KAP_B, w: 1.7 },
      { d: KAP_K, w: 1.6, dolgu: true },
      { d: `M30 70 l10 4 M30 90 l10 0 M30 110 l10 -4`, w: 1.4 },
      { d: daire(80, 80, 2) + " " + daire(160, 100, 2), w: 0.8 },
      ok(80, 80, 80, 60, 0.7),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: `M64 130 L76 50 L164 50 L176 130 Z`, w: 1.8, dolgu: true },
      { d: `M90 50 L96 90 L144 90 L150 50`, w: 1.2 },
      damla(200, 40),
      ...takvim(190, 70),
    ],
  },
];
function firca0(x: number, y: number): Cizgi[] {
  return [
    { d: `M${x} ${y} L${x + 14} ${y - 12}`, w: 3 },
    { d: `M${x + 14} ${y - 12} L${x + 50} ${y - 40}`, w: 2 },
  ];
}

// ---------- 17. Pet Şişe Mini Sera (4) ----------
const SISE_S = (x: number, kapakli = true): Cizgi[] => [
  {
    d: `M${x - 24} 130 L${x - 24} 70 Q${x - 24} 56 ${x - 8} 50 L${x - 8} 40 L${x + 8} 40 L${x + 8} 50 Q${x + 24} 56 ${x + 24} 70 L${x + 24} 130`,
    w: 1.7,
  },
  ...(kapakli ? [{ d: kutu(x - 10, 32, 20, 8), w: 1.4, dolgu: true }] : []),
];
export const MINI_SERA_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...SISE_S(100), { d: `M70 110 L130 110`, w: 1, kesik: true }, ...makas(150, 110)] },
  { cizgiler: [ZEMIN, ...SISE_S(120), ...fide(120, 130, 1.2), ok(170, 60, 146, 80)] },
  {
    cizgiler: [
      ZEMIN,
      ...SISE_S(120),
      ...fide(120, 130, 1.2),
      { d: `M160 134 L160 60`, w: 2.4 },
      { d: `M144 80 L160 76`, w: 1 },
      { d: `M20 50 Q40 46 60 50 M24 60 Q44 56 64 60`, w: 0.9 },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...SISE_S(120, false),
      ...fide(120, 130, 1.2),
      { d: kutu(150, 20, 20, 8), w: 1.4, dolgu: true },
      ...gunes(200, 30),
      ok(120, 36, 120, 16),
    ],
  },
];

// ---------- 18. Gül Budama (5) ----------
export const GUL_BUDAMA_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, GUL, ...takvim(180, 30), { d: `M120 40 l-3 -4 M146 50 l3 -4`, w: 1.4 }] },
  { cizgiler: [ZEMIN, GUL, { d: `M70 50 L60 44`, w: 1.4, kesik: true }, carpi(70, 40, 6), ...makas(110, 104)] },
  { cizgiler: [ZEMIN, GUL, carpi(100, 50, 6), carpi(140, 40, 6), { d: daire(120, 60, 22), w: 0.8, kesik: true }] },
  {
    cizgiler: [
      ZEMIN,
      GUL,
      { d: `M74 34 L88 40 M154 30 L168 34`, w: 1, kesik: true },
      ...makas(170, 34),
      { d: `M88 40 l4 -2 M154 30 l3 -3`, w: 1.2 },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: `M120 130 L120 100 L96 66 M120 100 L146 64 M120 104 L140 60`, w: 2 },
      { d: `M70 130 Q120 120 170 130`, w: 1.3 },
      ...kurek(200, 96),
    ],
    taramalar: [{ id: "k", sinir: `M70 130 Q120 120 170 130 Z`, kutu: [70, 124, 100, 6], aralik: 3, sonra: 1 }],
  },
];
