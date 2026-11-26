// RC kategorisi (Altın 40 dışı 18 proje): adım sahneleri (viewBox 0 0 240 150).
// Adım sayısı ve sırası src/data/ek/rc.ts içeriğiyle birebir eşleşir.
import { Cizgi, Cizim, daire, kutu, yuvarla as r } from "../arac";
import {
  bant,
  bicak,
  carpi,
  cetvel,
  damla,
  direnc,
  firca,
  kablo,
  kart,
  makas,
  ok,
  saat,
  sise,
  onay,
  parmak,
  suYuzu,
  tahta,
  testere,
  tornavida,
  yayOk,
  ZEMIN,
  zimpara,
} from "./parca";

// ---------- Ortak parçalar ----------
const UNO = (x = 24, y = 70): Cizgi[] => [
  ...kart(x, y, 64, 44, 12),
  { d: kutu(x - 5, y + 8, 9, 12), w: 1.2, dolgu: true },
];
const tel = (i: number, x2: number, y2: number, egri = -24, x = 24, y = 70): Cizgi =>
  kablo(x + 8 + i * 7, y, x2, y2, egri, 1.2);
const laptop = (x: number, y: number, kod = true): Cizgi[] => [
  { d: kutu(x, y, 70, 44), w: 1.7, dolgu: true },
  { d: kutu(x + 4, y + 4, 62, 36), w: 0.8 },
  { d: `M${x - 6} ${y + 44} L${x + 76} ${y + 44} L${x + 82} ${y + 52} L${x - 12} ${y + 52} Z`, w: 1.6, dolgu: true },
  ...(kod
    ? [
        {
          d: `M${x + 9} ${y + 12} L${x + 36} ${y + 12} M${x + 13} ${y + 19} L${x + 50} ${y + 19} M${x + 13} ${y + 26} L${x + 44} ${y + 26}`,
          w: 0.9,
        },
      ]
    : []),
];
const YUKLE = (ek: Cizgi[] = []): Cizim => ({
  cizgiler: [ZEMIN, ...laptop(20, 40), ...UNO(150, 80), kablo(100, 88, 145, 94, 12), ok(110, 60, 140, 70), ...ek],
});
const led = (x: number, y: number, yanik = false): Cizgi[] => [
  {
    d: `M${x - 5} ${y + 12} L${x - 5} ${y + 3} Q${x - 5} ${y - 4} ${x} ${y - 4} Q${x + 5} ${y - 4} ${x + 5} ${y + 3} L${x + 5} ${y + 12} Z`,
    w: 1.3,
    dolgu: true,
  },
  { d: `M${x - 2} ${y + 12} L${x - 2} ${y + 24} M${x + 2} ${y + 12} L${x + 2} ${y + 30}`, w: 1 },
  ...(yanik
    ? [
        {
          d: `M${x} ${y - 8} L${x} ${y - 14} M${x + 8} ${y - 6} L${x + 12} ${y - 10} M${x - 8} ${y - 6} L${x - 12} ${y - 10}`,
          w: 0.9,
        },
      ]
    : []),
];
const buton = (x: number, y: number): Cizgi[] => [
  { d: kutu(x - 8, y - 8, 16, 16), w: 1.4, dolgu: true },
  { d: daire(x, y, 4.5), w: 1.2, dolgu: true },
];
const pot = (x: number, y: number): Cizgi[] => [
  { d: daire(x, y, 12), w: 1.6, dolgu: true },
  { d: daire(x, y, 5), w: 1.3, dolgu: true },
  {
    d: `M${x - 8} ${y + 9} L${x - 8} ${y + 20} M${x} ${y + 12} L${x} ${y + 20} M${x + 8} ${y + 9} L${x + 8} ${y + 20}`,
    w: 1.1,
  },
];
const servo = (x: number, y: number, aci = 0): Cizgi[] => {
  const cx = x + 12,
    cy = y - 2,
    a = (aci * Math.PI) / 180;
  return [
    { d: kutu(x, y, 40, 22), w: 1.6, dolgu: true },
    { d: kutu(x - 6, y + 4, 52, 4), w: 1.2, dolgu: true },
    { d: daire(cx, cy, 4), w: 1.2, dolgu: true },
    { d: `M${cx} ${cy} L${r(cx + 22 * Math.cos(a))} ${r(cy - 22 * Math.sin(a))}`, w: 3 },
  ];
};
const modul = (x: number, y: number, en = 34, boy = 24): Cizgi[] => kart(x, y, en, boy, 4);
// HC-SR04: sol üst (x,y)
const hcsr = (x: number, y: number): Cizgi[] => [
  { d: kutu(x, y, 48, 22), w: 1.6, dolgu: true },
  { d: daire(x + 12, y + 11, 8.5) + " " + daire(x + 36, y + 11, 8.5), w: 1.6, dolgu: true },
];
// Kumanda (verici): sol üst (x,y)
const kumanda = (x: number, y: number): Cizgi[] => [
  {
    d: `M${x} ${y + 10} Q${x} ${y} ${x + 10} ${y} L${x + 70} ${y} Q${x + 80} ${y} ${x + 80} ${y + 10} L${x + 76} ${y + 44} Q${x + 74} ${y + 52} ${x + 64} ${y + 50} L${x + 16} ${y + 50} Q${x + 6} ${y + 52} ${x + 4} ${y + 44} Z`,
    w: 1.7,
    dolgu: true,
  },
  { d: daire(x + 22, y + 22, 9) + " " + daire(x + 58, y + 22, 9), w: 1.3 },
  { d: daire(x + 22, y + 22, 2.5) + " " + daire(x + 58, y + 22, 2.5), w: 1.2, dolgu: true },
  { d: `M${x + 70} ${y} L${x + 74} ${y - 26}`, w: 2 },
];
// Drone (üstten, X): merkez (x,y)
const drone = (x: number, y: number, pervane = true, s = 1): Cizgi[] => {
  const k = 34 * s;
  const kol = [
    [-1, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
  ];
  return [
    { d: kol.map(([a, b]) => `M${x} ${y} L${r(x + a * k)} ${r(y + b * k * 0.7)}`).join(" "), w: 3 },
    { d: kutu(r(x - 12 * s), r(y - 9 * s), r(24 * s), r(18 * s)), w: 1.5, dolgu: true },
    { d: kol.map(([a, b]) => daire(r(x + a * k), r(y + b * k * 0.7), 5 * s)).join(" "), w: 1.4, dolgu: true },
    ...(pervane
      ? [{ d: kol.map(([a, b]) => daire(r(x + a * k), r(y + b * k * 0.7), 16 * s)).join(" "), w: 0.8, kesik: true }]
      : []),
  ];
};
// Tekne gövdesi (yandan): sol alt (x,y), en
const tekne = (x: number, y: number, en = 160): Cizgi => ({
  d: `M${x} ${y - 24} L${x + en} ${y - 24} Q${x + en - 10} ${y} ${x + en * 0.6} ${y} L${x + 10} ${y} Q${x} ${y - 10} ${x} ${y - 24} Z`,
  w: 1.8,
  dolgu: true,
});
// LiPo pil: sol üst (x,y), şişik
const lipo = (x: number, y: number, sisik = false): Cizgi[] => [
  sisik
    ? {
        d: `M${x} ${y + 4} Q${x + 30} ${y - 10} ${x + 60} ${y + 4} L${x + 60} ${y + 26} Q${x + 30} ${y + 40} ${x} ${y + 26} Z`,
        w: 1.7,
        dolgu: true,
      }
    : { d: kutu(x, y, 60, 30), w: 1.7, dolgu: true },
  { d: `M${x + 60} ${y + 8} L${x + 76} ${y + 8} M${x + 60} ${y + 22} L${x + 72} ${y + 22}`, w: 1.6 },
  { d: kutu(x + 72, y + 18, 8, 8), w: 1.2, dolgu: true },
];
// Şarj cihazı: sol üst (x,y)
const sarj = (x: number, y: number): Cizgi[] => [
  { d: kutu(x, y, 56, 40), w: 1.7, dolgu: true },
  { d: kutu(x + 6, y + 6, 30, 16), w: 1 },
  { d: daire(x + 46, y + 14, 4) + " " + daire(x + 14, y + 32, 3) + " " + daire(x + 28, y + 32, 3), w: 1.1 },
];
// Uçak (üstten, düz köpük): merkez (x,y)
const ucak = (x: number, y: number): Cizgi[] => [
  { d: kutu(x - 8, y - 50, 16, 100), w: 1.6, dolgu: true },
  { d: `M${x - 90} ${y - 16} L${x + 90} ${y - 16} L${x + 86} ${y + 8} L${x - 86} ${y + 8} Z`, w: 1.7, dolgu: true },
  { d: `M${x - 34} ${y + 38} L${x + 34} ${y + 38} L${x + 30} ${y + 50} L${x - 30} ${y + 50} Z`, w: 1.5, dolgu: true },
];
// Pervane (yandan, dengeleyicide): merkez (x,y), eğim
const pervane = (x: number, y: number, egim = 0): Cizgi[] => [
  {
    d: `M${x - 70} ${y + egim} Q${x - 40} ${y - 6 + egim / 2} ${x} ${y} Q${x + 40} ${y + 6 - egim / 2} ${x + 70} ${y - egim} Q${x + 40} ${y - 4 - egim / 2} ${x} ${y} Q${x - 40} ${y + 4 + egim / 2} ${x - 70} ${y + egim} Z`,
    w: 1.5,
    dolgu: true,
  },
  { d: daire(x, y, 4), w: 1.3, dolgu: true },
];
const DENGE: Cizgi[] = [
  { d: `M70 130 L70 70 M170 130 L170 70 M60 130 L80 130 M160 130 L180 130`, w: 2 },
  { d: daire(70, 70, 4) + " " + daire(170, 70, 4), w: 1.2, dolgu: true },
  { d: `M70 70 L170 70`, w: 1 },
];
// Paletli şasi (yandan): sol alt (x,y)
const palet = (x: number, y: number): Cizgi[] => [
  {
    d: `M${x + 10} ${y} L${x + 130} ${y} Q${x + 140} ${y} ${x + 140} ${y - 12} Q${x + 140} ${y - 24} ${x + 130} ${y - 24} L${x + 10} ${y - 24} Q${x} ${y - 24} ${x} ${y - 12} Q${x} ${y} ${x + 10} ${y} Z`,
    w: 2,
  },
  { d: [14, 42, 70, 98, 126].map((d) => daire(x + d, y - 12, 8)).join(" "), w: 1.3, dolgu: true },
  { d: kutu(x + 6, y - 44, 128, 18), w: 1.6, dolgu: true },
];
// Robot şasi (üstten): merkez (x,y)
const robot = (x: number, y: number): Cizgi[] => [
  { d: kutu(x - 40, y - 30, 80, 60), w: 1.7, dolgu: true },
  { d: kutu(x - 50, y - 26, 10, 22) + " " + kutu(x + 40, y - 26, 10, 22), w: 1.5, dolgu: true },
  { d: daire(x, y + 24, 4), w: 1.2 },
];
// Roket (dik): alt orta (x,y)
const roket = (x: number, y: number, kanat = true): Cizgi[] => [
  {
    d: `M${x - 14} ${y - 20} L${x - 14} ${y - 90} Q${x} ${y - 112} ${x + 14} ${y - 90} L${x + 14} ${y - 20} Q${x + 8} ${y - 8} ${x + 4} ${y - 6} L${x + 4} ${y} L${x - 4} ${y} L${x - 4} ${y - 6} Q${x - 8} ${y - 8} ${x - 14} ${y - 20} Z`,
    w: 1.7,
    dolgu: true,
  },
  ...(kanat
    ? [
        {
          d: `M${x - 14} ${y - 22} L${x - 28} ${y - 4} L${x - 14} ${y - 40} M${x + 14} ${y - 22} L${x + 28} ${y - 4} L${x + 14} ${y - 40}`,
          w: 1.5,
          dolgu: true,
        },
      ]
    : []),
];
// nRF24 modül: sol üst (x,y)
const nrf = (x: number, y: number): Cizgi[] => [
  ...kart(x, y, 40, 18, 4),
  { d: `M${x + 40} ${y + 4} q4 2 0 4 q-4 2 0 4 q4 2 0 4`, w: 1 },
];
// Joystick: merkez (x,y)
const joystick = (x: number, y: number): Cizgi[] => [
  { d: kutu(x - 16, y - 16, 32, 32), w: 1.5, dolgu: true },
  { d: daire(x, y, 9), w: 1.4, dolgu: true },
  { d: daire(x, y, 3), w: 1 },
];
// Araba (yandan, RC): sol alt (x,y)
const araba = (x: number, y: number): Cizgi[] => [
  {
    d: `M${x} ${y - 14} L${x + 20} ${y - 30} L${x + 110} ${y - 30} L${x + 130} ${y - 14} L${x + 130} ${y - 4} L${x} ${y - 4} Z`,
    w: 1.7,
    dolgu: true,
  },
  { d: daire(x + 26, y, 14) + " " + daire(x + 104, y, 14), w: 1.7, dolgu: true },
  { d: daire(x + 26, y, 6) + " " + daire(x + 104, y, 6), w: 1 },
];
// Amortisör: üst (x,y)
const amortisor = (x: number, y: number, acik = false): Cizgi[] => [
  { d: kutu(x - 6, y, 12, 50), w: 1.5, dolgu: true },
  { d: `M${x} ${y - 14} L${x} ${y}`, w: 2 },
  { d: Array.from({ length: 6 }, (_, i) => `M${x - 9} ${y + 6 + i * 7} L${x + 9} ${y + 10 + i * 7}`).join(" "), w: 1 },
  ...(acik ? [] : [{ d: kutu(x - 7, y + 50, 14, 6), w: 1.3, dolgu: true }]),
];
// Gözlük: sol üst (x,y)
const gozluk = (x: number, y: number): Cizgi[] => [
  {
    d: `M${x} ${y + 6} Q${x} ${y} ${x + 8} ${y} L${x + 92} ${y} Q${x + 100} ${y} ${x + 100} ${y + 6} L${x + 100} ${y + 30} Q${x + 100} ${y + 36} ${x + 92} ${y + 36} L${x + 60} ${y + 36} Q${x + 50} ${y + 26} ${x + 40} ${y + 36} L${x + 8} ${y + 36} Q${x} ${y + 36} ${x} ${y + 30} Z`,
    w: 1.8,
    dolgu: true,
  },
  { d: `M${x + 80} ${y} L${x + 86} ${y - 20}`, w: 2 },
];
// VTX kamera: sol üst (x,y)
const vtx = (x: number, y: number, anten = true): Cizgi[] => [
  { d: kutu(x, y, 30, 24), w: 1.5, dolgu: true },
  { d: daire(x + 15, y + 12, 7), w: 1.3 },
  ...(anten
    ? [
        { d: `M${x + 30} ${y + 6} L${x + 46} ${y + 6} L${x + 46} ${y - 16}`, w: 1.8 },
        { d: daire(x + 46, y - 20, 4), w: 1.2, dolgu: true },
      ]
    : []),
];
const RAMPA = `M20 126 L170 126 L170 76 Z`;

// ---------- 1. Mini FPV Drone (6) ----------
export const MINI_DRONE_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      ...drone(120, 75, false, 1.4),
      yayOk(72, 42, 10, 3.5, 6),
      yayOk(168, 108, 10, 3.5, 6),
      ...tornavida(170, 50),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...drone(120, 75, false, 1.4),
      ...kart(104, 64, 32, 22, 0).slice(0, 1),
      ok(120, 70, 120, 58, 0.9),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...drone(120, 75, false, 1.4),
      kablo(72, 42, 106, 68, 6, 1.1),
      { d: `M176 30 L150 52`, w: 2 },
      { d: `M176 30 L206 6`, w: 4 },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...laptop(20, 40),
      ...drone(180, 80, false, 0.8),
      kablo(100, 88, 170, 84, 12),
      yayOk(153, 61, 8, 3.5, 6),
    ],
  },
  { cizgiler: [ZEMIN, ...drone(120, 75, true, 1.4), yayOk(72, 42, 18, 3.5, 6), onay(210, 30, 1.2)] },
  {
    cizgiler: [
      ZEMIN,
      ...drone(150, 50, true, 0.8),
      ...kumanda(20, 80),
      ok(150, 90, 150, 76),
      { d: `M150 120 L150 134`, w: 0.6, kesik: true },
    ],
  },
];

// ---------- 2. Köpük RC Tekne (6) ----------
export const RC_TEKNE_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      tekne(40, 100),
      { d: kutu(80, 76, 70, 18), w: 1.2, kesik: true },
      ...bicak(170, 80),
      ...cetvel(40, 110, 160, 8),
    ],
  },
  {
    cizgiler: [ZEMIN, tekne(40, 100), ...firca(140, 90)],
    taramalar: [{ id: "f", sinir: tekne(40, 100).d, kutu: [40, 76, 160, 24], aralik: 4, sonra: 1 }],
  },
  {
    cizgiler: [
      ZEMIN,
      tekne(40, 100),
      { d: `M60 92 L30 110`, w: 2.4 },
      { d: `M30 110 l-6 -4 l-2 8 Z`, w: 1.2, dolgu: true },
      { d: kutu(70, 78, 20, 14), w: 1.4, dolgu: true },
      damla(56, 98, 0.6),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      tekne(40, 100),
      { d: `M44 96 L44 116 L36 116 L36 96`, w: 1.4, dolgu: true },
      ...servo(70, 70),
      { d: `M84 70 L44 92`, w: 1 },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      tekne(40, 100),
      { d: kutu(90, 66, 60, 24), w: 1.5, dolgu: true },
      { d: kutu(94, 70, 20, 12) + " " + kutu(120, 70, 24, 12), w: 1 },
      { d: `M90 66 L150 60`, w: 1.4 },
    ],
  },
  {
    cizgiler: [
      { d: `M20 70 L220 70 L210 130 L30 130 Z`, w: 1.8 },
      suYuzu(24, 216, 86),
      tekne(60, 100),
      carpi(200, 40, 6),
      damla(200, 50, 0.7),
    ],
  },
];

// ---------- 3. RC Araba Ayarı (5) ----------
export const RC_ARABA_AYAR_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      ...amortisor(80, 40, true),
      { d: `M70 110 L90 110 L86 124 L74 124 Z`, w: 1.4, dolgu: true },
      damla(80, 98, 0.8),
      ...tornavida(140, 70),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...amortisor(110, 50, true),
      ...sise(170, 120, 22, 50),
      ok(160, 60, 120, 60),
      { d: daire(110, 70, 2) + " " + daire(112, 84, 1.6), w: 0.8 },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: daire(110, 80, 40) + " " + daire(110, 80, 22), w: 1.8, dolgu: true },
      { d: `M80 54 L74 48`, w: 1.4 },
      ...sise(190, 120, 18, 40),
      damla(176, 66, 0.7),
    ],
  },
  {
    cizgiler: [ZEMIN, ...araba(50, 110), { d: `M30 80 L30 110 M200 80 L200 110 M26 80 L34 80 M196 80 L204 80`, w: 1 }],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: daire(80, 76, 10, 34) + " " + daire(160, 76, 10, 34), w: 1.8, dolgu: true },
      { d: `M80 40 L86 112 M160 40 L154 112`, w: 0.8, kesik: true },
      { d: `M90 76 L150 76`, w: 2 },
    ],
  },
];

// ---------- 4. LiPo Güvenli Şarj (5) ----------
export const LIPO_SARJ_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(60, 100, 120, 30), w: 1.6 },
      { d: `M60 115 L180 115 M100 100 L100 130 M140 100 L140 130`, w: 0.6 },
      { d: daire(200, 20, 10), w: 1.4, dolgu: true },
      { d: `M200 30 L200 40`, w: 1 },
      carpi(30, 60, 14),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...lipo(30, 50, true),
      carpi(70, 30, 10),
      ...lipo(130, 90),
      { d: kutu(140, 60, 30, 20), w: 1.3, dolgu: true },
      kablo(155, 80, 208, 108, 6),
    ],
  },
  { cizgiler: [ZEMIN, ...sarj(90, 50), { d: `M100 62 L120 62`, w: 1.2 }, ok(150, 64, 180, 64), onay(200, 50, 1.2)] },
  {
    cizgiler: [
      ZEMIN,
      ...sarj(20, 60),
      { d: kutu(120, 70, 100, 50), w: 1.8, dolgu: true },
      ...lipo(130, 84).slice(0, 1),
      kablo(76, 80, 132, 90, -10),
      kablo(76, 94, 150, 100, 10),
    ],
  },
  { cizgiler: [ZEMIN, ...lipo(60, 70), { d: `M60 60 L120 60`, w: 0.7 }, ...saat(190, 50, 12)] },
];

// ---------- 5. Motorlu Depron Uçak (6) ----------
export const MOTORLU_DEPRON_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(30, 20, 180, 110), w: 1.4, dolgu: true },
      ...ucak(120, 75).map((c) => ({ ...c, w: 0.9, dolgu: false, kesik: true })),
      onay(210, 20, 1),
    ],
  },
  { cizgiler: [ZEMIN, ...ucak(120, 75), { d: `M34 66 L206 66`, w: 2.4 }, ...bicak(200, 100)] },
  {
    cizgiler: [
      ZEMIN,
      ...ucak(120, 75),
      { d: `M50 83 L90 83 M150 83 L190 83 M90 113 L150 113`, w: 1.2, kesik: true },
      ...servo(96, 90).slice(0, 1),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...ucak(120, 80),
      { d: kutu(112, 18, 16, 10), w: 1.5, dolgu: true },
      { d: `M90 16 L150 16`, w: 2.4 },
    ],
  },
  { cizgiler: [ZEMIN, ...ucak(120, 75), ...parmak(120, 66), { d: daire(120, 66, 4), w: 1 }, ok(150, 40, 130, 40)] },
  { cizgiler: [ZEMIN, ...kumanda(10, 92), ...ucak(150, 56), yayOk(150, 66, 30, 0.3, 1.2)] },
];

// ---------- 6. Drone Simülatörü (5) ----------
export const DRONE_SIMULATOR_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...laptop(110, 40, false), ...kumanda(10, 70), kablo(86, 80, 116, 94, -10)] },
  {
    cizgiler: [
      ZEMIN,
      ...kumanda(80, 50),
      ok(102, 72, 102, 52, 0.9),
      ok(138, 72, 158, 72, 0.9),
      ok(102, 72, 82, 72, 0.9),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...laptop(80, 40, false),
      ...drone(115, 60, true, 0.35),
      { d: `M95 74 L135 74`, w: 0.6, kesik: true },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...laptop(80, 40, false),
      { d: `M100 54 L130 54 L130 76 L100 76 Z`, w: 1, kesik: true },
      { d: `M144 54 a6 6 0 1 1 0 12 a6 6 0 1 0 0 12`, w: 1 },
    ],
  },
  { cizgiler: [ZEMIN, ...laptop(80, 40, false), yayOk(115, 64, 10, 0, 5.8), ok(40, 64, 70, 64)] },
];

// ---------- 7. FPV Kanal Ayarı (5) ----------
export const FPV_GOZLUK_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...vtx(80, 70), onay(140, 40, 1.2), ...vtx(160, 100, false), carpi(175, 80, 8)] },
  {
    cizgiler: [
      ZEMIN,
      ...vtx(60, 70),
      { d: kutu(130, 60, 60, 30), w: 1.4 },
      { d: `M140 76 L150 70 L150 82 M160 70 L170 70 L170 82 L160 82`, w: 1.2 },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...vtx(60, 70),
      { d: `M130 100 L130 50 M130 100 L200 100`, w: 1.2 },
      { d: `M130 90 L150 90 L150 100`, w: 2 },
      { d: `M130 90 L200 90`, w: 0.7, kesik: true },
    ],
  },
  { cizgiler: [ZEMIN, ...gozluk(30, 60), ...vtx(170, 70), { d: `M140 70 q10 -10 20 0`, w: 0.9, kesik: true }] },
  { cizgiler: [ZEMIN, ...gozluk(20, 60), ...drone(190, 50, true, 0.6), ok(130, 80, 170, 70), ok(170, 90, 130, 96)] },
];

// ---------- 8. Pervane Dengeleme (4) ----------
export const PERVANE_DENGELEME_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...DENGE, ...pervane(120, 70)] },
  { cizgiler: [ZEMIN, ...DENGE, ...pervane(120, 70, 18), ok(56, 96, 56, 112)] },
  { cizgiler: [ZEMIN, ...DENGE, ...pervane(120, 70, 18), ...zimpara(40, 70, 26, 10), bant(186, 56)] },
  { cizgiler: [ZEMIN, ...DENGE, ...pervane(120, 70), onay(200, 30, 1.2)] },
];

// ---------- 9. Paletli Robot (4) ----------
export const PALETLI_ROBOT_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...palet(50, 120), ...tornavida(176, 70), yayOk(190, 108, 10, 0, 4)] },
  { cizgiler: [ZEMIN, ...UNO(), ...modul(130, 40), ...modul(180, 80, 30, 18), tel(2, 140, 64), tel(5, 186, 80)] },
  YUKLE(),
  {
    cizgiler: [
      ZEMIN,
      ...palet(50, 120),
      { d: kutu(100, 50, 40, 26), w: 1.4, dolgu: true },
      { d: kutu(104, 20, 32, 30), w: 1.5, dolgu: true },
      { d: daire(120, 34, 5), w: 1.2 },
    ],
  },
];

// ---------- 10. Çizgi İzleyen Robot (5) ----------
export const CIZGI_IZLEYEN_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      ...robot(120, 70),
      { d: kutu(96, 32, 14, 8) + " " + kutu(130, 32, 14, 8), w: 1.3, dolgu: true },
      { d: `M114 20 L114 44 M126 20 L126 44`, w: 0.8, kesik: true },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...UNO(),
      ...modul(150, 30),
      { d: kutu(190, 100, 14, 8) + " " + kutu(210, 100, 14, 8), w: 1.3, dolgu: true },
      tel(1, 197, 100),
      tel(2, 217, 100, -30),
      tel(5, 160, 54),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(60, 70, 50, 20), w: 1.5, dolgu: true },
      { d: daire(80, 80, 5), w: 1.2 },
      ...tornavida(86, 76),
      ...led(140, 60, true),
      { d: kutu(160, 110, 50, 10), w: 1, dolgu: true },
    ],
  },
  { cizgiler: [ZEMIN, { d: daire(120, 75, 90, 50), w: 5 }, { d: daire(120, 75, 90, 50), w: 3 }] },
  { cizgiler: [{ d: daire(120, 75, 90, 50), w: 5 }, ...robot(120, 46), ok(170, 46, 200, 56)] },
];

// ---------- 11. Engelden Kaçan Robot (5) ----------
export const ENGEL_ROBOT_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...robot(110, 80), ...hcsr(86, 30), ok(110, 26, 110, 6, 0.8)] },
  {
    cizgiler: [
      ZEMIN,
      ...UNO(),
      ...hcsr(150, 30),
      tel(1, 166, 52),
      tel(2, 170, 52, -30),
      tel(4, 174, 52, -20),
      tel(6, 178, 52, -14),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...UNO(),
      ...modul(150, 40),
      tel(3, 160, 64),
      tel(5, 170, 64, -20),
      { d: kutu(170, 100, 40, 20), w: 1.5, dolgu: true },
      kablo(180, 100, 170, 64, -10),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...robot(80, 90),
      { d: kutu(170, 40, 30, 90), w: 1.8, dolgu: true },
      { d: `M130 90 L166 90`, w: 0.9, kesik: true },
      yayOk(80, 90, 50, 3.6, 4.6),
    ],
  },
  { cizgiler: [ZEMIN, ...laptop(40, 40), { d: `M60 60 L90 60`, w: 1.6 }, ...saat(190, 60, 14)] },
];

// ---------- 12. CD Hovercraft (4) ----------
const CD = { d: daire(120, 110, 70, 12), w: 1.8, dolgu: true };
const KAPAK = { d: kutu(110, 88, 20, 20), w: 1.5, dolgu: true };
const BALON = { d: `M114 88 Q90 60 104 30 Q120 10 136 30 Q150 60 126 88 Z`, w: 1.6, dolgu: true };
export const BALON_HOVERCRAFT_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, CD, { d: daire(120, 110, 8, 2), w: 1 }, KAPAK, damla(108, 104, 0.6), damla(132, 104, 0.6)] },
  { cizgiler: [ZEMIN, CD, KAPAK, BALON] },
  {
    cizgiler: [
      ZEMIN,
      CD,
      KAPAK,
      BALON,
      { d: `M40 122 L20 128 M200 122 L220 128 M80 124 L74 132 M160 124 L166 132`, w: 1, kesik: true },
    ],
  },
  { cizgiler: [ZEMIN, CD, KAPAK, BALON, ...parmak(40, 96), ok(200, 80, 236, 80), ok(200, 96, 230, 96)] },
];

// ---------- 13. Su Roketi (5) ----------
export const SU_ROKETI_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      ...roket(80, 134, false),
      ...makas(150, 60),
      { d: `M150 100 L180 100 L176 80 L154 80 Z`, w: 1.4, dolgu: true },
    ],
  },
  { cizgiler: [ZEMIN, ...roket(120, 134), bant(150, 120)] },
  { cizgiler: [ZEMIN, ...roket(120, 134), { d: daire(120, 40, 6), w: 1.3, dolgu: true }, ok(160, 40, 130, 40)] },
  {
    cizgiler: [
      ZEMIN,
      ...roket(120, 134),
      { d: `M106 104 L134 104`, w: 1, kesik: true },
      { d: `M80 134 L100 110 M160 134 L140 110`, w: 2 },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...roket(60, 120),
      kablo(60, 120, 120, 128, 6),
      { d: `M120 120 L120 134 M116 122 L124 122`, w: 2 },
      { d: `M140 100 L230 100`, w: 0.9 },
      ok(150, 110, 220, 110),
    ],
  },
];

// ---------- 14. nRF24 Kablosuz Kumanda (5) ----------
export const NRF_KUMANDA_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...laptop(80, 40), { d: kutu(92, 50, 46, 26), w: 1 }, ok(120, 20, 120, 40), onay(180, 40, 1.2)] },
  {
    cizgiler: [
      ZEMIN,
      ...UNO(),
      ...nrf(160, 40),
      tel(0, 166, 40),
      tel(1, 172, 40, -30),
      tel(3, 178, 40, -20),
      tel(6, 184, 40, -14),
      { d: `M170 30 L180 20`, w: 0.8 },
      carpi(214, 100, 6),
    ],
  },
  { cizgiler: [ZEMIN, ...UNO(), ...joystick(180, 50), tel(2, 176, 66), tel(3, 184, 66, -30)] },
  { cizgiler: [ZEMIN, ...UNO(), ...servo(150, 40), ...servo(150, 90), tel(2, 160, 62), tel(4, 160, 112, 30)] },
  {
    cizgiler: [
      ZEMIN,
      ...joystick(50, 80),
      ...servo(150, 80, 50),
      { d: `M70 60 q20 -14 40 0 M76 50 q14 -10 28 0`, w: 0.9, kesik: true },
      yayOk(50, 80, 22, 3.6, 5.4),
    ],
  },
];

// ---------- 15. Mini RC Yelkenli (5) ----------
export const RC_YELKENLI_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      tekne(40, 90),
      { d: `M120 90 L116 124 L124 124 Z`, w: 1.4, dolgu: true },
      { d: daire(120, 126, 8, 5), w: 1.5, dolgu: true },
    ],
  },
  {
    cizgiler: [ZEMIN, tekne(40, 90), ...firca(150, 80)],
    taramalar: [{ id: "y", sinir: tekne(40, 90).d, kutu: [40, 66, 160, 24], aralik: 4, sonra: 1 }],
  },
  {
    cizgiler: [
      ZEMIN,
      tekne(40, 90),
      { d: `M110 66 L110 10 M110 56 L170 56`, w: 1.8 },
      { d: `M112 14 L164 54 L112 54 Z`, w: 1.3, dolgu: true },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      tekne(40, 90),
      { d: `M110 66 L110 10 M110 56 L170 56`, w: 1.8 },
      ...servo(70, 70),
      { d: `M84 68 L160 56`, w: 0.8 },
    ],
  },
  {
    cizgiler: [
      suYuzu(0, 240, 110),
      tekne(60, 110),
      { d: `M130 86 L130 30 M130 76 L190 70`, w: 1.8 },
      { d: `M132 34 L186 68 L132 74 Z`, w: 1.3, dolgu: true },
      { d: `M10 40 Q30 36 50 40 M14 50 Q34 46 54 50`, w: 0.9 },
    ],
  },
];

// ---------- 16. RC LED Far (5) ----------
export const RC_LED_FAR_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...araba(50, 110), { d: daire(176, 92, 3) + " " + daire(54, 92, 3), w: 1.3 }] },
  { cizgiler: [ZEMIN, ...led(70, 40), direnc(72, 70, 40), { d: `M112 70 L130 70`, w: 1.1 }, onay(180, 50, 1.2)] },
  {
    cizgiler: [
      ZEMIN,
      ...led(60, 40),
      ...led(100, 40),
      ...led(140, 40),
      {
        d: `M62 70 L62 84 L182 84 M102 70 L102 84 M142 70 L142 84 M58 64 L58 100 L182 100 M98 64 L98 100 M138 64 L138 100`,
        w: 1.1,
      },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: `M40 80 L200 80`, w: 1.3 },
      { d: kutu(100, 74, 40, 12), w: 1.6, dolgu: true },
      ok(170, 60, 140, 76),
    ],
  },
  {
    cizgiler: [ZEMIN, ...modul(30, 60, 60, 36), kablo(70, 60, 150, 50, -20), ...araba(96, 118)],
  },
];

// ---------- 17. RC Rampa (4) ----------
export const RC_RAMPA_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      ...tahta(30, 50, 180, 50),
      { d: `M30 100 L40 96`, w: 1 },
      ...zimpara(170, 30, 30, 10),
      ...cetvel(30, 110, 180, 8),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: `M60 120 L60 60 L84 60 L84 84 L108 84 L108 104 L132 104 L132 120 Z`, w: 1.6, dolgu: true },
      { d: `M80 60 L84 66 M104 84 L108 90 M128 104 L132 110`, w: 1.3 },
      ...testere(150, 80, 60),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: RAMPA, w: 1.7, dolgu: true },
      { d: `M170 76 L190 126`, w: 2.4 },
      { d: kutu(164, 70, 12, 12), w: 1.3, dolgu: true },
    ],
  },
  { cizgiler: [ZEMIN, { d: RAMPA, w: 1.7, dolgu: true }, { d: `M60 117 L150 89`, w: 4 }, onay(210, 40, 1.2)] },
];

// ---------- 18. Servo Test Cihazı (4) ----------
export const SERVO_TEST_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...UNO(), ...pot(180, 40), tel(1, 172, 60), tel(4, 180, 60, -30), tel(7, 188, 60, -20)] },
  { cizgiler: [ZEMIN, ...UNO(), ...buton(180, 50), tel(1, 172, 50), tel(0, 188, 50, -50)] },
  {
    cizgiler: [
      ZEMIN,
      ...UNO(),
      ...servo(150, 40),
      tel(5, 160, 62),
      { d: kutu(190, 100, 34, 20), w: 1.4, dolgu: true },
      kablo(196, 100, 170, 62, -10),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...pot(60, 80),
      ...buton(60, 30),
      ...servo(140, 80, 90),
      ok(84, 80, 124, 80),
      yayOk(152, 78, 26, 1.4, 1.75),
    ],
  },
];
