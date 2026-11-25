// Maket kategorisi (Altın 40 dışı 18 proje): adım sahneleri (viewBox 0 0 240 150).
// Adım sayısı ve sırası src/data/ek/maket.ts içeriğiyle birebir eşleşir.
import { Cizgi, Cizim, daire, kutu, yuvarla as r } from "../arac";
import {
  bant,
  bicak,
  cetvel,
  damla,
  ev,
  firca,
  kablo,
  kalem,
  kase,
  makas,
  ok,
  onay,
  saat,
  sprey,
  sis,
  yayOk,
  ZEMIN,
  zimpara,
} from "./parca";

type Nokta = [number, number, number];

// ---------- Ortak parçalar ----------
// Diorama tabanı (perspektif): ön sol (x,y)
const TABAN = (x = 20, y = 120, en = 200, dr = 30): Cizgi[] => [
  { d: `M${x} ${y} L${x + en} ${y} L${x + en - 20} ${y - dr} L${x + 20} ${y - dr} Z`, w: 1.7, dolgu: true },
  { d: kutu(x, y, en, 10), w: 1.6, dolgu: true },
];
// Tepe silueti
const TEPE: Cizgi = { d: `M44 92 Q70 40 100 70 Q120 50 150 76 Q176 52 196 92 Z`, w: 1.6, dolgu: true };
// Noktalı doku (strafor/kum): kutu içinde
const doku = (x: number, y: number, en: number, boy: number, a = 9, rr = 0.7): Nokta[] => {
  const n: Nokta[] = [];
  for (let i = 4; i < en; i += a)
    for (let j = 4; j < boy; j += a) n.push([r(x + i + ((j / a) % 2) * (a / 3)), y + j, rr]);
  return n;
};
// Çim tüyleri: x1 → x2, y
const cim = (x1: number, x2: number, y: number): Cizgi => {
  let d = "";
  for (let x = x1; x < x2; x += 6) d += `M${x} ${y} l2 -6 l2 6 `;
  return { d: d.trim(), w: 0.8 };
};
// Kaya: merkez alt (x,y)
const kaya = (x: number, y: number, s = 1): Cizgi => ({
  d: `M${r(x - 14 * s)} ${y} L${r(x - 10 * s)} ${r(y - 10 * s)} L${r(x - 2 * s)} ${r(y - 14 * s)} L${r(x + 10 * s)} ${r(y - 9 * s)} L${r(x + 14 * s)} ${y} Z`,
  w: 1.4,
  dolgu: true,
});
// Ağaç (köknar): taban (x,y)
const agac = (x: number, y: number, s = 1): Cizgi[] => [
  { d: `M${x} ${y} L${x} ${r(y - 8 * s)}`, w: 1.6 },
  {
    d: `M${r(x - 12 * s)} ${r(y - 8 * s)} L${x} ${r(y - 34 * s)} L${r(x + 12 * s)} ${r(y - 8 * s)} Z`,
    w: 1.3,
    dolgu: true,
  },
];
// Tüp tutkal: ağız (x,y), gövde sağa
const tutkal = (x: number, y: number): Cizgi[] => [
  { d: `M${x} ${y} L${x + 8} ${y - 3} L${x + 8} ${y + 3} Z`, w: 1.1, dolgu: true },
  { d: `M${x + 8} ${y - 7} L${x + 44} ${y - 9} L${x + 44} ${y + 9} L${x + 8} ${y + 7} Z`, w: 1.5, dolgu: true },
];
// Serpme (tanecik yağmuru): (x,y) altına
const serp = (x: number, y: number): Nokta[] => [
  [x, y, 1],
  [x + 6, y + 6, 1],
  [x - 5, y + 10, 1],
  [x + 3, y + 15, 1],
  [x - 2, y + 21, 1],
  [x + 7, y + 24, 1],
];
// Sünger parçası: merkez (x,y)
const sunger = (x: number, y: number): Cizgi => ({ d: kutu(x - 10, y - 7, 20, 14), w: 1.4, dolgu: true });
// LED (küçük, yandan): üst (x,y)
const led = (x: number, y: number, yanik = false): Cizgi[] => [
  {
    d: `M${x - 4} ${y + 10} L${x - 4} ${y + 3} Q${x - 4} ${y - 3} ${x} ${y - 3} Q${x + 4} ${y - 3} ${x + 4} ${y + 3} L${x + 4} ${y + 10} Z`,
    w: 1.2,
    dolgu: true,
  },
  ...(yanik
    ? [
        {
          d: `M${x} ${y - 7} L${x} ${y - 12} M${x + 7} ${y - 5} L${x + 10} ${y - 8} M${x - 7} ${y - 5} L${x - 10} ${y - 8}`,
          w: 0.8,
        },
      ]
    : []),
];
// Pil yuvası: sol üst (x,y)
const pil = (x: number, y: number): Cizgi[] => [
  { d: kutu(x, y, 30, 16), w: 1.4, dolgu: true },
  { d: `M${x + 15} ${y} L${x + 15} ${y + 16}`, w: 0.7 },
];
// Tank (yandan): sol alt (x,y)
const tank = (x: number, y: number): Cizgi[] => [
  {
    d: `M${x} ${y - 10} Q${x} ${y} ${x + 12} ${y} L${x + 108} ${y} Q${x + 120} ${y} ${x + 120} ${y - 10} Q${x + 120} ${y - 20} ${x + 108} ${y - 20} L${x + 12} ${y - 20} Q${x} ${y - 20} ${x} ${y - 10} Z`,
    w: 1.7,
    dolgu: true,
  },
  { d: [16, 36, 56, 76, 96].map((d) => daire(x + 12 + d * 0.98, y - 10, 6)).join(" "), w: 1.1 },
  { d: `M${x + 6} ${y - 20} L${x + 14} ${y - 38} L${x + 106} ${y - 38} L${x + 114} ${y - 20} Z`, w: 1.6, dolgu: true },
  { d: `M${x + 36} ${y - 38} L${x + 44} ${y - 54} L${x + 84} ${y - 54} L${x + 90} ${y - 38} Z`, w: 1.6, dolgu: true },
  { d: `M${x + 86} ${y - 48} L${x + 140} ${y - 50} L${x + 140} ${y - 45} L${x + 88} ${y - 43}`, w: 1.4, dolgu: true },
];
// Gemi (yandan, küçük): baş sağda, sol alt (x,y)
const gemi = (x: number, y: number, s = 1, yatik = false): Cizgi[] => {
  const X = (d: number) => r(x + d * s),
    Y = (d: number) => r(y + d * s);
  const direk = yatik
    ? `M${X(22)} ${Y(-6)} L${X(-6)} ${Y(-14)} M${X(44)} ${Y(-6)} L${X(16)} ${Y(-16)}`
    : `M${X(22)} ${Y(-6)} L${X(22)} ${Y(-44)} M${X(44)} ${Y(-6)} L${X(44)} ${Y(-38)}`;
  return [
    { d: `M${x} ${Y(-6)} L${X(70)} ${Y(-6)} L${X(60)} ${y} L${X(8)} ${y} Z`, w: 1.5, dolgu: true },
    { d: direk, w: 1.4 },
    ...(yatik
      ? []
      : [
          {
            d: `M${X(22)} ${Y(-42)} L${X(36)} ${Y(-24)} L${X(22)} ${Y(-12)} Z M${X(44)} ${Y(-36)} L${X(56)} ${Y(-20)} L${X(44)} ${Y(-12)} Z`,
            w: 1.1,
            dolgu: true,
          },
        ]),
  ];
};
// Yatık şişe: boyun sağda; sol orta (x,y)
const SISE_YATIK = (x: number, y: number): Cizgi => ({
  d: `M${x} ${y - 26} L${x + 120} ${y - 26} Q${x + 140} ${y - 26} ${x + 146} ${y - 8} L${x + 170} ${y - 8} L${x + 170} ${y + 8} L${x + 146} ${y + 8} Q${x + 140} ${y + 26} ${x + 120} ${y + 26} L${x} ${y + 26} Q${x - 8} ${y} ${x} ${y - 26} Z`,
  w: 1.7,
});
// Kibrit: baş (x,y), aşağı
const kibrit = (x: number, y: number, boy = 30): Cizgi[] => [
  { d: `M${x} ${y} L${x} ${y + boy}`, w: 2.2 },
  { d: daire(x, y, 2.4, 3), w: 1.1, dolgu: true },
];
// Ray (üstten oval)
const RAY = (dr = 0): Cizgi => ({ d: daire(120, 76, 90 - dr, 44 - dr), w: 1.4 });
// Figür (minyatür, basit): taban (x,y)
const figur = (x: number, y: number): Cizgi[] => [
  { d: daire(x, y - 46, 6), w: 1.4, dolgu: true },
  {
    d: `M${x - 8} ${y - 6} L${x - 6} ${y - 38} Q${x} ${y - 42} ${x + 6} ${y - 38} L${x + 8} ${y - 6} Z`,
    w: 1.4,
    dolgu: true,
  },
  { d: `M${x - 6} ${y - 34} L${x - 14} ${y - 18} M${x + 6} ${y - 34} L${x + 14} ${y - 20}`, w: 1.4 },
  { d: kutu(x - 12, y - 6, 24, 6), w: 1.3, dolgu: true },
];
// Mantar tıpa: üst orta (x,y)
const tipa = (x: number, y: number): Cizgi => ({
  d: `M${x - 12} ${y} L${x + 12} ${y} L${x + 10} ${y + 22} L${x - 10} ${y + 22} Z`,
  w: 1.5,
  dolgu: true,
});
// Tel ağaç: taban (x,y), dallı
const telAgac = (x: number, y: number, yaprak = false): Cizgi[] => [
  {
    d: `M${x - 10} ${y} Q${x - 4} ${y - 6} ${x - 3} ${y - 40} M${x + 10} ${y} Q${x + 4} ${y - 6} ${x + 3} ${y - 40}`,
    w: 1.6,
  },
  {
    d: `M${x - 3} ${y - 40} Q${x - 20} ${y - 56} ${x - 34} ${y - 64} M${x} ${y - 40} L${x + 2} ${y - 76} M${x + 3} ${y - 40} Q${x + 20} ${y - 54} ${x + 36} ${y - 62} M${x - 22} ${y - 58} L${x - 22} ${y - 72} M${x + 22} ${y - 56} L${x + 26} ${y - 72}`,
    w: 1.1,
  },
  ...(yaprak
    ? [
        {
          d: daire(x - 30, y - 70, 12, 8) + " " + daire(x + 2, y - 82, 14, 9) + " " + daire(x + 32, y - 70, 12, 8),
          w: 1.1,
          dolgu: true,
        },
      ]
    : []),
];
// Fener gövdesi: alt orta (x,y)
const fener = (x: number, y: number, isik = false): Cizgi[] => [
  { d: `M${x - 16} ${y} L${x - 10} ${y - 70} L${x + 10} ${y - 70} L${x + 16} ${y} Z`, w: 1.7, dolgu: true },
  { d: kutu(x - 10, y - 86, 20, 16), w: 1.4 },
  { d: `M${x - 13} ${y - 86} L${x} ${y - 100} L${x + 13} ${y - 86} Z`, w: 1.5, dolgu: true },
  ...(isik
    ? [
        {
          d: `M${x + 12} ${y - 78} L${x + 50} ${y - 90} M${x + 12} ${y - 78} L${x + 50} ${y - 70} M${x - 12} ${y - 78} L${x - 50} ${y - 90} M${x - 12} ${y - 78} L${x - 50} ${y - 70}`,
          w: 0.8,
          kesik: true,
        },
      ]
    : []),
];
// Topografik katman: ölçek s
const katman = (s: number, dy = 0): Cizgi => ({
  d: `M${r(120 - 90 * s)} ${r(90 + dy)} Q${r(120 - 70 * s)} ${r(90 - 40 * s + dy)} ${r(120 - 10 * s)} ${r(90 - 44 * s + dy)} Q${r(120 + 60 * s)} ${r(90 - 50 * s + dy)} ${r(120 + 90 * s)} ${r(90 + dy)} Q${r(120 + 40 * s)} ${r(90 + 30 * s + dy)} ${r(120 - 90 * s)} ${r(90 + dy)} Z`,
  w: 1.5,
  dolgu: true,
});
// Kale kulesi: alt orta (x,y)
const kule = (x: number, y: number, boy = 80, en = 36): Cizgi[] => [
  {
    d: `M${x - en / 2} ${y} L${x - en / 2} ${y - boy} L${x - en / 2 + 6} ${y - boy} L${x - en / 2 + 6} ${y - boy + 6} L${x - 3} ${y - boy + 6} L${x - 3} ${y - boy} L${x + 3} ${y - boy} L${x + 3} ${y - boy + 6} L${x + en / 2 - 6} ${y - boy + 6} L${x + en / 2 - 6} ${y - boy} L${x + en / 2} ${y - boy} L${x + en / 2} ${y} Z`,
    w: 1.7,
    dolgu: true,
  },
];
const tasDesen = (x: number, y: number, en: number, boy: number): Cizgi => {
  let d = "";
  for (let j = 0; j * 10 < boy; j++) {
    d += `M${x} ${y + j * 10} L${x + en} ${y + j * 10} `;
    for (let i = (j % 2) * 8; i < en; i += 16) d += `M${x + i} ${y + j * 10} L${x + i} ${y + j * 10 + 10} `;
  }
  return { d: d.trim(), w: 0.6 };
};
const KALE: Cizgi[] = [
  ...kule(50, 126),
  ...kule(190, 126),
  { d: `M68 126 L68 76 L172 76 L172 126 Z M104 126 L104 100 Q120 86 136 100 L136 126`, w: 1.7, dolgu: true },
];

// ---------- 1. Diorama Zemini (5) ----------
export const DIORAMA_ZEMIN_ADIM: Cizim[] = [
  { cizgiler: [...TABAN(), TEPE, ...bicak(170, 60)], noktalar: doku(60, 60, 120, 30) },
  { cizgiler: [...TABAN(), TEPE, kase(200, 30, 36, 16), ...firca(120, 60), { d: `M150 70 l6 -4 l4 6 l6 -5`, w: 0.8 }] },
  {
    cizgiler: [...TABAN(), TEPE, kaya(160, 90, 1.3), ...firca(170, 70)],
    taramalar: [{ id: "t", sinir: TEPE.d, kutu: [44, 40, 152, 52], aralik: 5, sonra: 2 }],
  },
  {
    cizgiler: [
      ...TABAN(),
      TEPE,
      { d: `M40 112 Q100 100 130 108 Q170 116 200 104`, w: 1, kesik: true },
      ...tutkal(160, 40),
    ],
    noktalar: [...serp(110, 80), ...serp(140, 84)],
  },
  { cizgiler: [...TABAN(), TEPE, cim(50, 120, 92), cim(140, 196, 92), cim(46, 196, 112)], noktalar: serp(100, 56) },
];

// ---------- 2. Kutu İçinde Oda (5) ----------
const ODA: Cizgi[] = [
  { d: `M40 120 L200 120 L170 96 L70 96 Z`, w: 1.6, dolgu: true },
  { d: `M70 96 L70 20 L170 20 L170 96 M40 120 L40 40 L70 20 M200 120 L200 40 L170 20`, w: 1.7 },
];
export const MINI_ODA_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...ODA, ...cetvel(40, 130, 160, 8)] },
  {
    cizgiler: [
      ZEMIN,
      ...ODA,
      { d: `M60 112 L180 112 M66 104 L174 104 M80 96 L60 120 M120 96 L120 120 M160 96 L180 120`, w: 0.7 },
      { d: `M80 30 l6 6 l6 -6 M100 30 l6 6 l6 -6 M120 30 l6 6 l6 -6 M140 30 l6 6 l6 -6`, w: 0.7 },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...ODA,
      { d: `M48 60 L62 52 L62 80 L48 88 Z`, w: 1.4 },
      { d: `M48 70 L62 62 M55 56 L55 84`, w: 0.6 },
      ...bicak(62, 80),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...ODA,
      { d: kutu(100, 90, 40, 6) + ` M104 96 L104 112 M136 96 L136 112`, w: 1.4, dolgu: true },
      { d: kutu(150, 60, 16, 40), w: 1.3, dolgu: true },
    ],
  },
  { cizgiler: [ZEMIN, ...ODA, ...led(120, 22, true), kablo(124, 26, 190, 70, 10, 1), ...pil(196, 66)] },
];

// ---------- 3. Tank Maketi (6) ----------
export const TANK_MAKETI_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...tank(40, 120), ok(110, 30, 100, 64), ...tutkal(170, 30)] },
  { cizgiler: [ZEMIN, ...tank(30, 120), ...sprey(196, 100), ...sis(194, 52, 30)] },
  { cizgiler: [ZEMIN, ...tank(30, 120), ...firca(120, 76), { d: `M60 90 L100 90 M80 76 L80 96`, w: 1.4 }] },
  { cizgiler: [ZEMIN, ...tank(30, 120), sunger(150, 66), { d: `M44 104 l3 -2 M50 108 l2 -3 M140 80 l3 -2`, w: 1.3 }] },
  { cizgiler: [ZEMIN, ...tank(30, 120), ...firca(80, 112)], noktalar: [...serp(60, 104), ...serp(110, 106)] },
  { cizgiler: [ZEMIN, ...tank(30, 120), ...sprey(196, 100), ...sis(194, 52, 30), onay(200, 20, 1.2)] },
];

// ---------- 4. Şişe İçinde Gemi (6) ----------
export const SISEDE_GEMI_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...gemi(50, 110, 1.6), ...bicak(160, 106), { d: `M40 120 L180 120`, w: 0.6 }] },
  {
    cizgiler: [
      ZEMIN,
      ...gemi(50, 110, 1.6),
      { d: daire(85, 100, 3) + " " + daire(120, 100, 3), w: 1.2 },
      yayOk(85, 100, 30, 3.6, 4.6),
    ],
  },
  { cizgiler: [ZEMIN, ...gemi(50, 110, 1.6), { d: `M85 40 L200 96 M120 50 L200 100`, w: 0.7 }] },
  {
    cizgiler: [
      ZEMIN,
      SISE_YATIK(30, 80),
      { d: `M36 100 q10 -6 20 0 q10 6 20 0 q10 -6 20 0 q10 6 20 0 q10 -6 20 0`, w: 1.3 },
      { d: `M60 100 L220 80`, w: 1.6 },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      SISE_YATIK(30, 80),
      ...gemi(60, 100, 1, true),
      ok(220, 100, 190, 90),
      { d: `M66 86 L230 78 M80 84 L230 82`, w: 0.6 },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      SISE_YATIK(30, 80),
      ...gemi(60, 100, 1),
      { d: `M82 56 L230 76 M104 62 L230 80`, w: 0.6 },
      ok(200, 120, 230, 120),
    ],
  },
];

// ---------- 5. Kibrit Çöpü Ev (5) ----------
const DUVARK: Cizgi[] = Array.from({ length: 14 }, (_, i) => kibrit(60 + i * 8, 60, 60)).flat();
export const KIBRIT_EV_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(40, 60, 70, 60) + " " + kutu(130, 60, 70, 60), w: 1.5, dolgu: true },
      { d: `M130 60 L165 30 L200 60`, w: 1.5 },
      ...bicak(110, 120),
    ],
  },
  { cizgiler: [ZEMIN, ...DUVARK, { d: kutu(84, 90, 20, 30), w: 1.3, dolgu: true }, ...tutkal(180, 40)] },
  {
    cizgiler: [
      ZEMIN,
      {
        d: [0, 1, 2, 3, 4, 5]
          .map((i) => (i % 2 ? `M60 ${120 - i * 10} L140 ${120 - i * 10}` : `M70 ${120 - i * 10} L150 ${120 - i * 10}`))
          .join(" "),
        w: 2.4,
      },
      { d: `M60 70 L150 70`, w: 2.4 },
    ],
  },
  { cizgiler: [ZEMIN, ...ev(70, 130, 80)] },
  { cizgiler: [ZEMIN, ...ev(70, 130, 80), ...sprey(196, 120), ...sis(194, 72, 20)] },
];

// ---------- 6. Papercraft Bina (5) ----------
const KALIP: Cizgi[] = [
  { d: kutu(40, 30, 160, 100), w: 1.4, dolgu: true },
  { d: `M70 50 L170 50 L170 110 L70 110 Z M100 50 L100 110 M140 50 L140 110`, w: 1.2 },
  { d: `M70 50 L76 44 L94 44 L100 50 M140 50 L146 44 L164 44 L170 50`, w: 1 },
];
export const PAPERCRAFT_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...KALIP, onay(212, 30, 1.2)] },
  { cizgiler: [ZEMIN, ...KALIP, { d: `M100 50 L100 110`, w: 1.2, kesik: true }, ...kalem(100, 90)] },
  { cizgiler: [ZEMIN, ...KALIP, ...makas(170, 80)] },
  {
    cizgiler: [
      ZEMIN,
      { d: `M60 120 L60 60 L120 40 L120 100 Z M120 40 L180 60 L180 120 L120 100`, w: 1.6, dolgu: true },
      yayOk(150, 80, 20, 3.4, 5),
    ],
  },
  { cizgiler: [ZEMIN, ...ev(70, 124, 90), ...tutkal(170, 60), damla(166, 70, 0.6)] },
];

// ---------- 7. Masa Üstü Tren (5) ----------
const LOK: Cizgi[] = [
  { d: kutu(36, 64, 30, 14), w: 1.5, dolgu: true },
  { d: kutu(52, 54, 14, 10), w: 1.3, dolgu: true },
];
export const N_TREN_ADIM: Cizim[] = [
  {
    cizgiler: [RAY(), RAY(8), { d: `M30 76 L4 76 M210 76 L236 76`, w: 0.8 }, ok(10, 60, 26, 60), ok(230, 60, 214, 60)],
  },
  { cizgiler: [{ d: daire(120, 76, 94, 48), w: 3.4 }, ...tutkal(170, 30)] },
  { cizgiler: [RAY(), RAY(8), { d: `M118 28 L118 40 M122 28 L122 40`, w: 1.1 }, ...cekicK(160, 40)] },
  {
    cizgiler: [
      RAY(),
      RAY(8),
      ...LOK,
      { d: kutu(190, 110, 30, 20), w: 1.5, dolgu: true },
      { d: daire(205, 120, 5), w: 1.1 },
      kablo(190, 116, 140, 120, 6),
    ],
  },
  {
    cizgiler: [
      RAY(),
      RAY(8),
      ...LOK,
      ...ev(110, 86, 30),
      ...agac(80, 90, 0.7),
      ...agac(160, 92, 0.7),
      cim(96, 150, 100),
    ],
  },
];
function cekicK(x: number, y: number): Cizgi[] {
  return [
    { d: kutu(x - 12, y - 5, 24, 10), w: 1.5, dolgu: true },
    { d: `M${x + 4} ${y + 5} L${x + 30} ${y + 34} L${x + 35} ${y + 30} L${x + 9} ${y + 1}`, w: 1.4, dolgu: true },
  ];
}

// ---------- 8. Köpük Karton Mimari Maket (5) ----------
const PLAN: Cizgi = { d: `M50 30 L190 30 L190 120 L50 120 Z M120 30 L120 80 M50 80 L150 80`, w: 1.4 };
const MIM: Cizgi = { d: `M50 120 L50 70 L130 50 L130 100 Z M130 50 L190 66 L190 116 L130 100`, w: 1.7, dolgu: true };
export const MIMARI_MAKET_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, PLAN, ...cetvel(50, 126, 140, 8), ...kalem(150, 80)] },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(40, 60, 160, 50), w: 1.5, dolgu: true },
      { d: `M120 60 L120 110`, w: 0.9, kesik: true },
      ...bicak(120, 70),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(40, 40, 160, 80), w: 1.5, dolgu: true },
      { d: kutu(70, 60, 30, 24) + " " + kutu(140, 60, 30, 24), w: 1.3 },
      { d: `M70 72 L100 72 M85 60 L85 84`, w: 0.6 },
    ],
  },
  { cizgiler: [ZEMIN, MIM, { d: `M128 56 L136 48 M128 90 L136 82`, w: 1.4 }, damla(130, 108, 0.6)] },
  {
    cizgiler: [
      ZEMIN,
      MIM,
      { d: `M46 70 L90 40 L134 50 M130 50 L170 36 L194 66`, w: 1.5 },
      ...agac(30, 130, 0.8),
      ...agac(212, 130, 0.8),
      { d: `M0 134 L240 128`, w: 0.6, kesik: true },
    ],
  },
];

// ---------- 9. Plastik Otomobil (5) ----------
const ARABA: Cizgi[] = [
  { d: `M30 110 L30 94 Q32 86 50 84 L80 70 Q100 62 140 64 L170 82 Q206 84 210 96 L210 110 Z`, w: 1.8, dolgu: true },
  { d: daire(66, 110, 14) + " " + daire(176, 110, 14), w: 1.6, dolgu: true },
  { d: `M86 82 L102 70 L134 70 L156 82 Z`, w: 1.1 },
];
export const ARABA_MAKETI_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...ARABA, ...zimpara(100, 46, 30, 10), damla(200, 50), damla(210, 60, 0.7)] },
  { cizgiler: [ZEMIN, ...ARABA, ...sprey(200, 70), ...sis(198, 24, 30)] },
  { cizgiler: [ZEMIN, ...ARABA, ...sprey(200, 70), ...sis(198, 24, 30), ...saat(30, 30, 10)] },
  {
    cizgiler: [
      ZEMIN,
      ...ARABA,
      { d: kutu(100, 50, 30, 12), w: 1.4, dolgu: true },
      { d: `M60 80 L66 74 M180 88 L186 82 M120 66 L124 60`, w: 1 },
      ...saat(30, 30, 10),
    ],
  },
  { cizgiler: [ZEMIN, ...ARABA, ...kalem(150, 98), { d: `M90 76 L150 76`, w: 1 }] },
];

// ---------- 10. Figür Boyama (5) ----------
export const FIGUR_BOYAMA_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, tipa(120, 112), ...figur(120, 112), ...sprey(190, 130), ...sis(188, 82, 30)] },
  { cizgiler: [ZEMIN, tipa(120, 112), ...figur(120, 112), ...firca(130, 90)] },
  {
    cizgiler: [ZEMIN, tipa(120, 112), ...figur(120, 112), ...firca(130, 80)],
    taramalar: [
      { id: "g", sinir: `M112 106 L114 74 L126 74 L128 106 Z`, kutu: [112, 74, 16, 32], aralik: 3, sonra: 2 },
    ],
  },
  { cizgiler: [ZEMIN, tipa(120, 112), ...figur(120, 112), { d: `M116 72 L118 104`, w: 1.6 }, ...firca(120, 70)] },
  { cizgiler: [ZEMIN, tipa(120, 112), ...figur(120, 112), ...firca(124, 66), cim(108, 132, 106), onay(200, 30, 1.2)] },
];

// ---------- 11. Telden Ağaç (5) ----------
export const TEL_AGAC_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      { d: Array.from({ length: 8 }, (_, i) => `M${100 + i * 5} 30 L${100 + i * 5} 120`).join(" "), w: 1 },
      ...makas(150, 120),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: `M100 120 Q110 110 116 80 Q120 60 116 40 M140 120 Q130 110 124 80 Q120 60 124 40`, w: 1.4 },
      yayOk(120, 80, 14, 0, 5.5),
    ],
  },
  { cizgiler: [ZEMIN, ...telAgac(120, 126)] },
  {
    cizgiler: [ZEMIN, ...telAgac(120, 126), ...firca(130, 110)],
    taramalar: [
      { id: "k", sinir: `M108 126 L117 86 L123 86 L132 126 Z`, kutu: [108, 86, 24, 40], aralik: 3, sonra: 0 },
    ],
  },
  { cizgiler: [ZEMIN, ...telAgac(120, 126, true)], noktalar: serp(200, 40) },
];

// ---------- 12. Diorama Suyu (5) ----------
const DERE = `M60 120 Q90 104 120 104 Q160 104 190 90 L200 96 Q170 112 128 114 Q96 114 72 120 Z`;
export const DIORAMA_SU_ADIM: Cizim[] = [
  {
    cizgiler: [...TABAN(), { d: DERE, w: 1.4, dolgu: true }, ...firca(150, 104)],
    taramalar: [{ id: "d", sinir: DERE, kutu: [60, 90, 140, 30], aralik: 3, sonra: 2 }],
  },
  {
    cizgiler: [
      ...TABAN(),
      { d: DERE, w: 1.4, dolgu: true },
      { d: kutu(18, 116, 204, 16), w: 1.2, kesik: true },
      bant(30, 124),
      bant(210, 124),
    ],
  },
  {
    cizgiler: [
      ...TABAN(),
      { d: DERE, w: 1.4, dolgu: true },
      { d: `M120 50 L136 50 L132 76 L124 76 Z`, w: 1.4, dolgu: true },
      { d: `M128 76 L128 100`, w: 1.1, kesik: true },
      { d: `M150 90 L170 90 M160 84 L160 96`, w: 0.7 },
      ...saat(200, 40, 9),
    ],
  },
  {
    cizgiler: [
      ...TABAN(),
      { d: DERE, w: 1.4, dolgu: true },
      { d: `M80 114 q4 -3 8 0 M110 108 q4 -3 8 0 M150 104 q4 -3 8 0`, w: 1 },
      ...firca(150, 100),
    ],
  },
  {
    cizgiler: [
      ...TABAN(),
      { d: DERE, w: 1.4, dolgu: true },
      kaya(70, 112),
      kaya(190, 98, 0.8),
      { d: `M100 100 L98 84 M104 100 L106 82 M108 100 L112 86`, w: 1 },
    ],
  },
];

// ---------- 13. LED Işıklı Gece Dioraması (5) ----------
export const ISIKLI_DIORAMA_ADIM: Cizim[] = [
  {
    cizgiler: [
      ...TABAN(20, 90, 200, 30),
      { d: daire(80, 76, 3, 2) + " " + daire(150, 76, 3, 2), w: 1.2 },
      { d: `M80 100 L80 120 M150 100 L150 120`, w: 0.9, kesik: true },
    ],
  },
  {
    cizgiler: [
      ...TABAN(20, 90, 200, 30),
      ...ev(66, 80, 28),
      ...ev(136, 80, 28),
      ...led(80, 60, true),
      ...led(150, 60, true),
      { d: `M80 100 L80 120 M150 100 L150 120`, w: 1 },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...led(60, 40),
      ...led(110, 40),
      ...led(160, 40),
      {
        d: `M58 50 L58 70 L162 70 M62 50 L62 80 L166 80 M108 50 L108 70 M112 50 L112 80 M158 50 L158 70 M162 50 L162 80`,
        w: 1,
      },
      kablo(166, 75, 190, 100, 10),
      ...pil(186, 100),
    ],
  },
  { cizgiler: [...TABAN(20, 90, 200, 30), { d: `M180 80 L180 30 Q180 22 172 22`, w: 2 }, ...led(170, 22, true)] },
  {
    cizgiler: [
      ...TABAN(20, 90, 200, 30),
      ...ev(66, 80, 28),
      ...ev(136, 80, 28),
      { d: `M60 64 L80 50 L98 64 M130 64 L150 50 L168 64`, w: 2 },
    ],
    noktalar: [...serp(40, 20), ...serp(110, 14), ...serp(190, 22)],
  },
];

// ---------- 14. Güneş Sistemi (4) ----------
const GEZEGEN: [number, number][] = [
  [20, 22],
  [62, 16],
  [98, 13],
  [128, 9],
  [154, 7],
  [176, 6],
  [196, 4],
];
export const GUNES_SISTEMI_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      { d: GEZEGEN.map(([x, rr]) => daire(x + 10, 110 - rr, rr)).join(" "), w: 1.4, dolgu: true },
      ok(30, 60, 220, 60),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: daire(120, 70, 20), w: 1.6, dolgu: true },
      { d: daire(120, 70, 34, 8), w: 1.4 },
      { d: `M120 90 L120 130`, w: 1.4 },
      ...firca(150, 60),
    ],
  },
  {
    cizgiler: [
      { d: daire(120, 90, 18), w: 1.6, dolgu: true },
      { d: `M120 72 L120 10`, w: 0.8 },
      { d: `M114 72 Q120 66 126 72`, w: 1 },
    ],
  },
  {
    cizgiler: [
      { d: daire(120, 20, 100, 8), w: 1.6 },
      { d: daire(120, 80, 22), w: 1.6, dolgu: true },
      { d: `M120 28 L120 58 M40 24 L40 96 M70 26 L70 110 M170 26 L170 104 M200 24 L200 92`, w: 0.6 },
      {
        d: daire(40, 100, 5) + " " + daire(70, 116, 8) + " " + daire(170, 112, 9) + " " + daire(200, 98, 6),
        w: 1.3,
        dolgu: true,
      },
    ],
  },
];

// ---------- 15. Işıklı Deniz Feneri (5) ----------
const KAYALIK = `M60 134 Q70 106 100 110 Q120 96 146 108 Q176 104 186 134 Z`;
export const DENIZ_FENERI_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      { d: `M104 130 L110 50 L130 50 L136 130 Z`, w: 1.7, dolgu: true },
      { d: `M106 106 L134 106 M108 78 L132 78`, w: 4 },
      ...firca(150, 90),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: `M104 130 L110 60 L130 60 L136 130 Z`, w: 1.7, dolgu: true },
      { d: kutu(110, 40, 20, 20), w: 1.4 },
      ...led(120, 46, true),
    ],
  },
  {
    cizgiler: [ZEMIN, { d: `M90 90 L120 40 L150 90 Z`, w: 1.7, dolgu: true }, ...makas(160, 100)],
    taramalar: [{ id: "c", sinir: `M90 90 L120 40 L150 90 Z`, kutu: [90, 40, 60, 50], aralik: 3, sonra: 1 }],
  },
  { cizgiler: [ZEMIN, { d: KAYALIK, w: 1.7, dolgu: true }, ...firca(176, 100)], noktalar: doku(80, 112, 90, 20) },
  { cizgiler: [ZEMIN, { d: KAYALIK, w: 1.7, dolgu: true }, ...fener(122, 108, true), ...pil(150, 120)] },
];

// ---------- 16. Topografik Harita (5) ----------
export const TOPOGRAFIK_HARITA_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(30, 20, 180, 110), w: 1.4, dolgu: true },
      { d: daire(120, 76, 80, 44) + " " + daire(124, 72, 56, 30) + " " + daire(128, 68, 30, 16), w: 1 },
      { d: daire(124, 72, 56, 30), w: 2 },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(30, 30, 180, 100), w: 1.4, dolgu: true },
      { d: daire(120, 80, 56, 30), w: 1.3, kesik: true },
      ...kalem(176, 80),
    ],
  },
  { cizgiler: [ZEMIN, katman(0.8, 10), ...bicak(170, 100)] },
  { cizgiler: [ZEMIN, katman(1, 20), katman(0.75, 10), katman(0.5, 0), katman(0.28, -10)] },
  {
    cizgiler: [ZEMIN, katman(1, 20), katman(0.75, 10), katman(0.5, 0), katman(0.28, -10), ...firca(180, 92)],
    taramalar: [{ id: "u", sinir: katman(0.28, -10).d, kutu: [90, 50, 60, 40], aralik: 3, sonra: 4 }],
  },
];

// ---------- 17. Ahşap Yelkenli Kit (5) ----------
const OMURGA: Cizgi = { d: `M30 100 L210 100 L200 110 L40 110 Z`, w: 1.6, dolgu: true };
const KABURGA: Cizgi = {
  d: [60, 90, 120, 150, 180]
    .map((x) => `M${x} 100 Q${x - 18} 80 ${x - 14} 56 M${x} 100 Q${x + 18} 80 ${x + 14} 56`)
    .join(" "),
  w: 1.4,
};
const GOVDE: Cizgi = { d: `M30 70 L210 70 Q200 112 120 116 Q40 112 30 70 Z`, w: 1.8, dolgu: true };
export const AHSAP_GEMI_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, OMURGA, KABURGA, { d: `M190 70 L190 100 L210 100`, w: 1.5 }] },
  {
    cizgiler: [
      ZEMIN,
      OMURGA,
      KABURGA,
      { d: `M40 80 Q120 96 200 80 M40 88 Q120 104 200 88`, w: 2 },
      damla(210, 40),
      damla(220, 50, 0.7),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      GOVDE,
      { d: `M40 80 Q120 98 200 80 M50 92 Q120 106 190 92`, w: 0.6 },
      ...zimpara(100, 50, 40, 12),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      GOVDE,
      { d: `M30 70 L210 70 M40 64 L200 64 M30 70 L40 64 M210 70 L200 64`, w: 1.3 },
      { d: [60, 80, 100, 120, 140, 160, 180].map((x) => `M${x} 64 L${x} 70`).join(" "), w: 0.6 },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      GOVDE,
      { d: `M90 70 L90 10 M150 70 L150 20 M30 70 L90 12 L210 70 M90 12 L150 22`, w: 1.2 },
      { d: `M90 16 L120 40 L90 60 Z M150 24 L176 46 L150 62 Z`, w: 1.1, dolgu: true },
    ],
  },
];

// ---------- 18. Strafor Kale (5) ----------
export const STRAFOR_KALE_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(30, 40, 40, 90) + " " + kutu(90, 70, 70, 60) + " " + kutu(180, 40, 40, 90), w: 1.5, dolgu: true },
      ...bicak(150, 70),
    ],
    noktalar: doku(90, 70, 70, 60, 10),
  },
  {
    cizgiler: [ZEMIN, { d: kutu(50, 40, 140, 80), w: 1.6, dolgu: true }, tasDesen(50, 40, 140, 80), ...kalem(150, 80)],
  },
  { cizgiler: [ZEMIN, ...KALE, { d: `M68 90 L60 90 M172 90 L180 90`, w: 1.8 }, ...tutkal(180, 30)] },
  {
    cizgiler: [ZEMIN, ...KALE, ...firca(150, 110)],
    taramalar: [
      { id: "s", sinir: `M68 126 L68 76 L172 76 L172 126 Z`, kutu: [68, 76, 104, 50], aralik: 2.5, sonra: 2 },
    ],
  },
  { cizgiler: [ZEMIN, ...KALE, tasDesen(70, 80, 100, 40), ...firca(150, 100)] },
];
