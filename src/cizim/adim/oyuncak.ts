// Oyuncak kategorisi (Altın 40 dışı 18 proje): adım sahneleri (viewBox 0 0 240 150).
// Adım sayısı ve sırası src/data/projeler-cocuk-doga.ts içeriğiyle birebir eşleşir.
import { Cizgi, Cizim, daire, kutu, yuvarla as r } from "../arac";
import {
  alev,
  bant,
  bez,
  bicak,
  cetvel,
  damla,
  dekupaj,
  firca,
  igne,
  iskence,
  kalem,
  kavanoz,
  makas,
  matkap,
  ok,
  onay,
  parmak,
  saat,
  sise,
  tahta,
  tencere,
  testere,
  yayOk,
  ZEMIN,
  zimpara,
} from "./parca";

// ---------- Ortak parçalar ----------
// Parmak kuklası kalıbı: sol alt (x,y), en, boy (üstü yarım daire)
const parmakKalip = (x: number, y: number, en = 30, boy = 52): string =>
  `M${x} ${y} L${x} ${y - boy + en / 2} A${en / 2} ${en / 2} 0 0 1 ${x + en} ${y - boy + en / 2} L${x + en} ${y} Z`;
// Boya izi (şerit çizgiler): kutu içine eğik çizgiler
const boyaIzi = (x: number, y: number, en: number, boy: number, ara = 6): Cizgi => {
  let d = "";
  for (let i = 0; i < en + boy; i += ara) {
    const x1 = x + Math.min(i, en),
      y1 = y + Math.max(0, i - en),
      x2 = x + Math.max(0, i - boy),
      y2 = y + Math.min(i, boy);
    d += `M${r(x1)} ${r(y1)} L${r(x2)} ${r(y2)} `;
  }
  return { d: d.trim(), w: 0.5 };
};
// Ses dalgası: kaynak (x,y), yön 1 sağ / -1 sol
const sesDalga = (x: number, y: number, n = 3, yon = 1): Cizgi => ({
  d: Array.from({ length: n }, (_, i) => {
    const k = 6 + i * 6;
    return `M${x + yon * k * 0.6} ${y - k} Q${x + yon * k * 1.2} ${y} ${x + yon * k * 0.6} ${y + k}`;
  }).join(" "),
  w: 0.9,
});
// Bardak (yandan, ağız yukarı): üst orta (cx,y)
const bardak = (cx: number, y: number, en = 34, boy = 40): Cizgi => ({
  d: `M${cx - en / 2} ${y} L${cx + en / 2} ${y} L${cx + en * 0.35} ${y + boy} L${cx - en * 0.35} ${y + boy} Z`,
  w: 1.7,
  dolgu: true,
});
// Bardak yatay (ağız yan): ağız ortası (x,y), yon 1: ağız solda, gövde sağa
const bardakYan = (x: number, y: number, yon = 1, en = 34, boy = 36): Cizgi => ({
  d: `M${x} ${y - en / 2} L${x} ${y + en / 2} L${x + yon * boy} ${r(y + en * 0.35)} L${x + yon * boy} ${r(y - en * 0.35)} Z`,
  w: 1.7,
  dolgu: true,
});
// Göz (bakış): merkez (x,y)
const goz = (x: number, y: number): Cizgi[] => [
  { d: `M${x - 14} ${y} Q${x} ${y - 11} ${x + 14} ${y} Q${x} ${y + 11} ${x - 14} ${y} Z`, w: 1.3, dolgu: true },
  { d: daire(x, y, 4), w: 1.2, dolgu: true },
];
// Fil silüeti (yapboz): gövde merkezi (cx,cy)
const FIL = (cx: number, cy: number): string =>
  `M${cx - 40} ${cy - 6} Q${cx - 38} ${cy - 30} ${cx} ${cy - 30} Q${cx + 38} ${cy - 30} ${cx + 40} ${cy - 4} L${cx + 40} ${cy + 26} L${cx + 26} ${cy + 26} L${cx + 26} ${cy + 10} L${cx - 20} ${cy + 10} L${cx - 20} ${cy + 26} L${cx - 34} ${cy + 26} L${cx - 34} ${cy + 6} Q${cx - 50} ${cy + 10} ${cx - 54} ${cy + 26} L${cx - 60} ${cy + 24} Q${cx - 58} ${cy - 2} ${cx - 40} ${cy - 6} Z`;
// Ördek silüeti: gövde merkezi (cx,cy)
const ORDEK = (cx: number, cy: number): string =>
  `M${cx - 34} ${cy} Q${cx - 34} ${cy + 22} ${cx} ${cy + 22} Q${cx + 30} ${cy + 22} ${cx + 34} ${cy - 2} Q${cx + 20} ${cy - 6} ${cx + 18} ${cy - 16} Q${cx + 20} ${cy - 36} ${cx + 4} ${cy - 36} Q${cx - 12} ${cy - 36} ${cx - 10} ${cy - 18} Q${cx - 8} ${cy - 6} ${cx - 34} ${cy} Z`;
const ordekGaga = (cx: number, cy: number): Cizgi => ({
  d: `M${cx - 9} ${cy - 26} L${cx - 22} ${cy - 22} L${cx - 9} ${cy - 18} Z`,
  w: 1.3,
  dolgu: true,
});
// Bebek silüeti: baş merkezi (cx, cy)
const BEBEK = (cx: number, cy: number): string =>
  `M${cx - 12} ${cy + 12} L${cx - 40} ${cy + 26} L${cx - 38} ${cy + 36} L${cx - 14} ${cy + 28} L${cx - 16} ${cy + 66} L${cx - 30} ${cy + 94} L${cx - 18} ${cy + 96} L${cx} ${cy + 70} L${cx + 18} ${cy + 96} L${cx + 30} ${cy + 94} L${cx + 16} ${cy + 66} L${cx + 14} ${cy + 28} L${cx + 38} ${cy + 36} L${cx + 40} ${cy + 26} L${cx + 12} ${cy + 12} A14 14 0 1 0 ${cx - 12} ${cy + 12} Z`;
// Tangram parçaları (birim kare içinde)
const TANGRAM: [number, number][][] = [
  [
    [0, 0],
    [1, 0],
    [0.5, 0.5],
  ],
  [
    [0, 0],
    [0.5, 0.5],
    [0, 1],
  ],
  [
    [1, 0.5],
    [1, 1],
    [0.5, 1],
  ],
  [
    [1, 0],
    [1, 0.5],
    [0.75, 0.25],
  ],
  [
    [0.5, 0.5],
    [0.75, 0.25],
    [1, 0.5],
    [0.75, 0.75],
  ],
  [
    [0.5, 0.5],
    [0.75, 0.75],
    [0.25, 0.75],
  ],
  [
    [0, 1],
    [0.25, 0.75],
    [0.75, 0.75],
    [0.5, 1],
  ],
];
const tangramYol = (x: number, y: number, s: number, ayir = 0): string =>
  TANGRAM.map((p) => {
    const mx = p.reduce((t, q) => t + q[0], 0) / p.length - 0.5;
    const my = p.reduce((t, q) => t + q[1], 0) / p.length - 0.5;
    return (
      p.map((q, i) => `${i ? "L" : "M"}${r(x + q[0] * s + mx * ayir)} ${r(y + q[1] * s + my * ayir)}`).join(" ") + " Z"
    );
  }).join(" ");
// Kale (önden): sol alt (x,y)
const kale = (x: number, y: number, kapiAcik = false): Cizgi[] => {
  let dis = `M${x + 20} ${y - 60}`;
  for (let i = 0; i < 8; i++)
    dis += ` L${x + 20 + i * 15} ${y - 60} L${x + 20 + i * 15} ${y - 66} L${x + 27 + i * 15} ${y - 66} L${x + 27 + i * 15} ${y - 60}`;
  return [
    { d: kutu(x + 20, y - 60, 120, 60), w: 1.8, dolgu: true },
    { d: dis, w: 1.5 },
    { d: kutu(x, y - 82, 22, 82) + " " + kutu(x + 138, y - 82, 22, 82), w: 1.8, dolgu: true },
    {
      d: `M${x} ${y - 82} L${x} ${y - 88} L${x + 7} ${y - 88} L${x + 7} ${y - 82} M${x + 15} ${y - 82} L${x + 15} ${y - 88} L${x + 22} ${y - 88} L${x + 22} ${y - 82} M${x + 138} ${y - 82} L${x + 138} ${y - 88} L${x + 145} ${y - 88} L${x + 145} ${y - 82} M${x + 153} ${y - 82} L${x + 153} ${y - 88} L${x + 160} ${y - 88} L${x + 160} ${y - 82}`,
      w: 1.4,
    },
    kapiAcik
      ? { d: `M${x + 64} ${y} L${x + 96} ${y} L${x + 100} ${y + 8} L${x + 60} ${y + 8} Z`, w: 1.6, dolgu: true }
      : { d: `M${x + 64} ${y} L${x + 64} ${y - 26} Q${x + 80} ${y - 40} ${x + 96} ${y - 26} L${x + 96} ${y}`, w: 1.6 },
  ];
};
// Çorap kukla (yandan, ağız sağda): sol (x), orta y
const corap = (x: number, y: number): Cizgi => ({
  d: `M${x} ${y - 24} L${x + 120} ${y - 24} Q${x + 166} ${y - 24} ${x + 166} ${y} Q${x + 166} ${y + 24} ${x + 120} ${y + 24} L${x} ${y + 24} Z`,
  w: 1.8,
  dolgu: true,
});
// Uçurtma baklava: merkez (cx,cy)
const ucurtma = (cx: number, cy: number, s = 1): string =>
  `M${cx} ${r(cy - 44 * s)} L${r(cx + 30 * s)} ${r(cy - 12 * s)} L${cx} ${r(cy + 50 * s)} L${r(cx - 30 * s)} ${r(cy - 12 * s)} Z`;
// Fırıldak (önden): merkez (cx,cy)
const firildak = (cx: number, cy: number, R = 30): Cizgi[] => [
  {
    d: [0, 1, 2, 3]
      .map((i) => {
        const t = (i * Math.PI) / 2;
        const ax = cx + Math.cos(t) * R,
          ay = cy + Math.sin(t) * R;
        const bx = cx + Math.cos(t + Math.PI / 2) * R,
          by = cy + Math.sin(t + Math.PI / 2) * R;
        return `M${cx} ${cy} L${r(ax)} ${r(ay)} Q${r((ax + bx) / 2 + (bx - cx) * 0.2)} ${r((ay + by) / 2 + (by - cy) * 0.2)} ${cx} ${cy} Z`;
      })
      .join(" "),
    w: 1.6,
    dolgu: true,
  },
  { d: daire(cx, cy, 3), w: 1.2, dolgu: true },
];
// Araba gövde (yandan): sol alt (x,y)
const balonAraba = (x: number, y: number): Cizgi[] => [
  { d: kutu(x, y - 14, 90, 10), w: 1.7, dolgu: true },
  { d: daire(x + 16, y, 10) + " " + daire(x + 74, y, 10), w: 1.7, dolgu: true },
  { d: daire(x + 16, y, 2) + " " + daire(x + 74, y, 2), w: 1 },
];
// Mukavva kutu (perspektif): sol alt ön (x,y)
const kutuP = (x: number, y: number, en: number, boy: number, d = 20): Cizgi[] => [
  { d: kutu(x, y - boy, en, boy), w: 1.8, dolgu: true },
  {
    d: `M${x} ${y - boy} L${x + d} ${y - boy - d * 0.6} L${x + en + d} ${y - boy - d * 0.6} L${x + en} ${y - boy} M${x + en} ${y} L${x + en + d} ${y - d * 0.6} L${x + en + d} ${y - boy - d * 0.6}`,
    w: 1.4,
  },
];

// ---------- Keçe parmak kuklası ----------
export const KECE_KUKLA_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(30, 40, 110, 84), w: 1.2, dolgu: true },
      { d: parmakKalip(70, 114), w: 1.4, kesik: true },
      ...cetvel(36, 118, 98, 8),
      ...makas(150, 90),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(24, 50, 120, 76), w: 1.6, dolgu: true },
      { d: parmakKalip(48, 118), w: 1.5 },
      { d: parmakKalip(92, 118), w: 1.5 },
      ...makas(150, 92),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: parmakKalip(90, 124, 40, 80), w: 1.8, dolgu: true },
      { d: daire(92, 52, 8) + " " + daire(128, 52, 8), w: 1.4, dolgu: true },
      { d: "M104 86 Q110 92 116 86", w: 1.3 },
      damla(170, 60, 1),
    ],
    noktalar: [
      [102, 70, 3],
      [118, 70, 3],
      [110, 78, 2.5],
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: parmakKalip(90, 124, 40, 80), w: 1.8, dolgu: true },
      { d: "M94 124 L94 66 A16 16 0 0 1 126 66 L126 124", w: 1, kesik: true },
      ...igne(136, 70),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...parmak(110, 76),
      { d: parmakKalip(94, 124, 32, 56), w: 1.8, dolgu: true },
      ...makas(150, 110),
      onay(196, 46, 1),
    ],
    noktalar: [
      [104, 86, 2.5],
      [116, 86, 2.5],
    ],
  },
];

// ---------- Ahşap hayvan yapbozu ----------
export const AHSAP_YAPBOZ_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      ...tahta(20, 40, 170, 90, false),
      { d: FIL(110, 84), w: 1.4, kesik: true },
      { d: "M90 54 L90 94 M130 54 L130 94", w: 0.8, kesik: true },
      ...kalem(160, 70),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...tahta(30, 40, 160, 90, false),
      { d: FIL(116, 84), w: 1.8 },
      ...dekupaj(176, 70, 34),
      ...iskence(40, 30, 14),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: "M40 82 Q42 58 70 56 L70 106 L58 106 L58 92 Q48 94 44 106 L38 104 Q38 88 40 82 Z", w: 1.8, dolgu: true },
      { d: "M80 56 L120 56 L120 98 L80 98 Z", w: 1.8, dolgu: true },
      { d: "M130 56 Q164 56 168 80 L168 112 L154 112 L154 98 L130 98 Z", w: 1.8, dolgu: true },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: "M70 60 L130 60 L130 108 L70 108 Z", w: 1.8, dolgu: true },
      ...zimpara(116, 52, 40, 14),
      yayOk(130, 60, 12, -1.4, 0.4),
    ],
    noktalar: [
      [76, 120, 1],
      [86, 124, 1.2],
      [134, 120, 1],
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: FIL(100, 84), w: 1.8, dolgu: true },
      boyaIzi(64, 58, 70, 30, 7),
      { d: "M80 58 L80 94 M120 58 L120 94", w: 1.2 },
      ...firca(150, 70),
      ...saat(206, 110, 12),
    ],
  },
];

// ---------- Kartondan şövalye kalesi ----------
export const KARTON_KALE_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      ...kutuP(40, 128, 120, 70),
      {
        d: "M40 58 L40 50 L52 50 L52 58 M64 58 L64 50 L76 50 L76 58 M88 58 L88 50 L100 50 L100 58 M112 58 L112 50 L124 50 L124 58 M136 58 L136 50 L148 50 L148 58",
        w: 1,
        kesik: true,
      },
      ...makas(176, 46),
    ],
  },
  { cizgiler: [ZEMIN, ...kale(40, 130), ok(30, 30, 40, 44)] },
  {
    cizgiler: [
      ZEMIN,
      ...kale(40, 130),
      { d: "M104 130 L104 104 Q120 90 136 104 L136 130", w: 1, kesik: true },
      ...bicak(150, 116),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...kale(40, 130, true),
      { d: "M101 136 L106 76 M139 136 L134 76", w: 0.9 },
      ok(190, 110, 190, 80),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...kale(40, 130),
      {
        d: "M64 82 L180 82 M64 100 L180 100 M64 118 L104 118 M136 118 L180 118 M90 70 L90 82 M130 82 L130 100 M80 100 L80 118 M160 100 L160 118",
        w: 0.5,
      },
      ...firca(196, 56),
    ],
  },
];

// ---------- Çoraptan el kuklası ----------
export const CORAP_KUKLA_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      { d: daire(100, 86, 44, 32), w: 1.8, dolgu: true },
      { d: "M56 86 L144 86", w: 1, kesik: true },
      ...makas(160, 110),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      corap(20, 90),
      { d: "M150 90 L186 90", w: 1.4 },
      { d: daire(176, 90, 12, 8), w: 1.1, kesik: true },
      ok(210, 60, 192, 80),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      corap(20, 90),
      { d: "M150 90 L186 90", w: 1.4 },
      { d: daire(150, 76, 6) + " " + daire(130, 76, 6), w: 1.3, dolgu: true },
      damla(206, 50, 0.9),
    ],
    noktalar: [
      [150, 76, 2.5],
      [130, 76, 2.5],
      [176, 82, 3],
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      corap(20, 90),
      { d: "M150 90 L186 90", w: 1.4 },
      { d: daire(150, 76, 6) + " " + daire(130, 76, 6), w: 1.3, dolgu: true },
      { d: "M110 66 Q114 48 120 66 Q126 46 132 66 Q138 48 144 66 Q150 50 156 66", w: 1.2 },
    ],
  },
];

// ---------- İpli bardak telefon ----------
export const BARDAK_TELEFON_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      { d: "M80 130 L140 130 L130 80 L90 80 Z", w: 1.8, dolgu: true },
      { d: "M110 80 L110 40", w: 1.6 },
      { d: "M106 40 L114 40 L112 32 L108 32 Z", w: 1.2, dolgu: true },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      bardak(110, 60, 60, 60),
      { d: "M110 120 L110 134 M110 60 Q100 40 70 30", w: 1 },
      { d: "M100 116 L120 116", w: 2.4 },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      bardakYan(40, 84, -1),
      bardakYan(200, 84, 1),
      { d: "M40 84 L200 84", w: 0.9 },
      ok(26, 60, 10, 60),
      ok(214, 60, 230, 60),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      bardakYan(40, 84, -1),
      bardakYan(200, 84, 1),
      { d: "M40 84 L200 84", w: 0.9 },
      sesDalga(46, 84, 3, 1),
      ...parmak(200, 40),
    ],
  },
];

// ---------- Kaleydoskop ----------
export const KALEYDOSKOP_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(30, 60, 150, 14) + " " + kutu(30, 80, 150, 14) + " " + kutu(30, 100, 150, 14), w: 1.5, dolgu: true },
      ...cetvel(30, 120, 150, 8),
      ...bicak(186, 96),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: "M60 110 L100 40 L140 110 Z", w: 1.8, dolgu: true },
      { d: "M70 104 L100 52 L130 104", w: 0.8 },
      { d: kutu(160, 60, 60, 30), w: 1.6, dolgu: true },
      ok(144, 76, 158, 76),
    ],
  },
  {
    cizgiler: [ZEMIN, { d: daire(110, 80, 40), w: 2, dolgu: true }, { d: daire(110, 80, 36), w: 0.8 }],
    noktalar: [
      [96, 70, 4],
      [118, 66, 3],
      [126, 86, 4],
      [100, 92, 3],
      [112, 80, 2.5],
      [88, 84, 2],
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(40, 64, 140, 32), w: 1.8, dolgu: true },
      { d: "M172 64 L172 96 M178 62 L178 98", w: 1.4 },
      bant(180, 62),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(70, 64, 140, 32), w: 1.8, dolgu: true },
      { d: daire(70, 80, 4), w: 1.2 },
      ...goz(36, 80),
      ok(52, 60, 64, 72),
    ],
  },
];

// ---------- Klasik baklava uçurtma ----------
export const UCURTMA_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      { d: "M110 20 L110 130 M70 48 L150 48", w: 2.4 },
      { d: daire(110, 48, 5), w: 1.2 },
      yayOk(110, 48, 12, 0.2, 2.6),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: "M110 20 L110 130 M70 48 L150 48", w: 2.4 },
      { d: "M110 20 L150 48 L110 130 L70 48 Z", w: 0.9 },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(30, 14, 170, 122), w: 1, dolgu: true },
      { d: "M110 16 L156 48 L110 134 L64 48 Z", w: 1, kesik: true },
      { d: "M110 24 L148 48 L110 126 L72 48 Z", w: 1.8 },
      ...makas(176, 100),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: ucurtma(90, 70), w: 1.8, dolgu: true },
      { d: "M90 30 L130 74 L90 118", w: 0.9 },
      { d: daire(130, 74, 3), w: 1.2 },
      { d: "M133 76 L220 120", w: 0.8 },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: ucurtma(90, 60), w: 1.8, dolgu: true },
      { d: "M90 110 Q80 120 92 128 Q104 136 94 146", w: 1.2 },
      { d: "M84 118 L96 116 M88 130 L100 128", w: 1.6 },
      { d: "M120 64 L220 130", w: 0.8 },
      { d: "M160 30 Q176 24 192 30 M170 44 Q186 38 202 44", w: 0.9 },
    ],
  },
];

// ---------- Ev yapımı oyun hamuru ----------
export const OYUN_HAMURU_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      ...tencere(110, 84, 100, 40),
      { d: "M150 40 L118 96", w: 2.4 },
      { d: daire(116, 100, 6, 4), w: 1.3, dolgu: true },
      yayOk(110, 104, 26, 0.2, 2.8),
    ],
    noktalar: [
      [86, 112, 1.5],
      [100, 116, 1.5],
      [130, 112, 1.5],
      [140, 118, 1.5],
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...tencere(110, 84, 100, 40),
      ...sise(190, 70, 24, 60),
      damla(160, 60, 0.9),
      damla(150, 74, 0.7),
      ok(176, 40, 150, 56),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...tencere(100, 70, 100, 40),
      alev(84, 134, 1),
      alev(100, 134, 1.2),
      alev(116, 134, 1),
      yayOk(100, 86, 24, 0.2, 2.9),
      ...saat(200, 46, 13),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: "M60 128 Q58 98 100 96 Q144 94 146 126 Z", w: 1.8, dolgu: true },
      ...parmak(104, 96),
      yayOk(104, 112, 34, 3.4, 5.9),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...kavanoz(90, 130, 60, 70),
      { d: "M68 128 Q68 104 90 102 Q114 102 112 128 Z", w: 1.4, dolgu: true },
      { d: kutu(150, 30, 70, 100), w: 1.8 },
      { d: "M150 66 L220 66 M156 44 L156 58", w: 1.4 },
    ],
  },
];

// ---------- Ahşap tangram seti ----------
const TG_X = 70,
  TG_Y = 26,
  TG_S = 96;
export const TANGRAM_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(TG_X, TG_Y, TG_S, TG_S), w: 1.8, dolgu: true },
      { d: `M${TG_X} ${TG_Y} L${TG_X + TG_S} ${TG_Y + TG_S}`, w: 1 },
      ...cetvel(40, 128, 160, 6),
      ...kalem(180, 60),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(TG_X, TG_Y, TG_S, TG_S), w: 1.8, dolgu: true },
      { d: tangramYol(TG_X, TG_Y, TG_S), w: 1, kesik: true },
      ...kalem(180, 60),
    ],
  },
  { cizgiler: [ZEMIN, { d: tangramYol(TG_X, TG_Y, TG_S, 22), w: 1.6, dolgu: true }, ...testere(150, 128, 70)] },
  {
    cizgiler: [
      ZEMIN,
      { d: tangramYol(TG_X, TG_Y, TG_S, 22), w: 1.6, dolgu: true },
      boyaIzi(68, 22, 50, 30, 6),
      ...firca(186, 60),
      ...zimpara(170, 110, 36, 12),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: "M90 44 L110 24 L130 44 L110 64 Z", w: 1.6, dolgu: true },
      { d: "M92 30 L98 18 L104 28 M116 28 L122 18 L128 30", w: 1.4 },
      { d: "M110 64 L60 114 L160 114 Z", w: 1.6, dolgu: true },
      { d: "M160 114 L190 84 L200 94 L170 124 Z", w: 1.6, dolgu: true },
      onay(206, 40, 1),
    ],
  },
];

// ---------- Kağıt fırıldak ----------
export const FIRILDAK_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(60, 24, 100, 100), w: 1.8, dolgu: true },
      { d: "M60 24 L100 64 M160 24 L120 64 M60 124 L100 84 M160 124 L120 84", w: 1.2 },
      { d: daire(110, 74, 3), w: 1 },
      ...makas(176, 30),
    ],
  },
  { cizgiler: [ZEMIN, ...firildak(110, 74, 46), yayOk(110, 74, 54, 4.2, 5.4)] },
  {
    cizgiler: [
      ZEMIN,
      { d: "M110 74 L110 140", w: 4 },
      ...firildak(110, 74, 40),
      { d: daire(110, 74, 5), w: 1.6, dolgu: true },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(60, 70, 120, 8), w: 1.6, dolgu: true },
      { d: "M110 40 L110 90", w: 1.4 },
      { d: daire(110, 40, 5), w: 1.4, dolgu: true },
      { d: kutu(102, 90, 16, 12), w: 1.6, dolgu: true },
      ok(150, 110, 122, 98),
    ],
  },
];

// ---------- Keçe sessiz kitap ----------
export const SESSIZ_KITAP_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(50, 20, 140, 110), w: 1.8, dolgu: true },
      { d: "M120 20 L120 130 M50 75 L190 75", w: 0.8, kesik: true },
      { d: daire(85, 48, 10) + " " + daire(155, 104, 12), w: 1.4 },
      { d: "M140 34 L170 34 M140 40 L170 40 M144 34 L146 40 M152 34 L154 40 M160 34 L162 40", w: 1 },
      { d: "M70 96 L100 96 L100 112 L70 112 Z", w: 1 },
    ],
    noktalar: [
      [82, 46, 1.5],
      [88, 50, 1.5],
      [74, 104, 1.5],
      [84, 104, 1.5],
      [94, 104, 1.5],
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(30, 60, 140, 66), w: 1.4, dolgu: true },
      { d: "M70 110 Q50 90 70 76 Q84 70 88 82 Q92 70 106 76 Q126 90 106 110 Z", w: 1.6 },
      { d: daire(140, 94, 14), w: 1.6 },
      ...makas(176, 100),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(40, 20, 140, 110), w: 1.8, dolgu: true },
      { d: "M100 104 Q80 84 100 70 Q114 64 118 76 Q122 64 136 70 Q156 84 136 104 Z", w: 1.6, dolgu: true },
      { d: "M104 100 Q88 84 104 74 M132 100 Q148 84 132 74", w: 0.8, kesik: true },
      ...igne(160, 70),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(30, 30, 90, 90) + " " + kutu(120, 30, 90, 90), w: 1.8, dolgu: true },
      { d: daire(120, 46, 6) + " " + daire(120, 75, 6) + " " + daire(120, 104, 6), w: 1.6 },
    ],
  },
];

// ---------- Ahşap çekmeli ördek ----------
export const CEKME_ORDEK_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      ...tahta(30, 30, 150, 96, false),
      { d: ORDEK(104, 80), w: 1.4, kesik: true },
      ...dekupaj(178, 68, 30),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: ORDEK(104, 80), w: 1.8, dolgu: true },
      ordekGaga(104, 80),
      { d: "M70 96 L138 96", w: 1, kesik: true },
      ...matkap(104, 60),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: ORDEK(110, 72), w: 1.8, dolgu: true },
      ordekGaga(110, 72),
      { d: daire(90, 112, 14) + " " + daire(134, 112, 14), w: 1.8, dolgu: true },
      { d: "M84 112 L140 108", w: 1.6 },
      { d: daire(84, 112, 2) + " " + daire(140, 108, 2), w: 1.1 },
      yayOk(110, 60, 50, 3.9, 5.5),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: ORDEK(100, 80), w: 1.8, dolgu: true },
      ordekGaga(100, 80),
      boyaIzi(74, 70, 56, 28, 6),
      ...firca(150, 60),
      ...zimpara(150, 104, 36, 12),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: ORDEK(140, 72), w: 1.8, dolgu: true },
      ordekGaga(140, 72),
      { d: daire(120, 112, 14) + " " + daire(164, 112, 14), w: 1.8, dolgu: true },
      { d: "M106 74 Q70 90 40 76", w: 1 },
      { d: daire(34, 74, 7), w: 1.6, dolgu: true },
    ],
  },
];

// ---------- Kartondan kukla tiyatrosu ----------
export const KUKLA_TIYATROSU_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      ...kutuP(40, 132, 140, 110),
      { d: kutu(60, 40, 100, 56), w: 1.1, kesik: true },
      ...bicak(180, 70),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...kutuP(40, 132, 140, 110, 30),
      { d: kutu(60, 40, 100, 56), w: 1.5 },
      { d: "M70 22 L200 22 L200 106", w: 1, kesik: true },
      ok(214, 100, 196, 80),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...kutuP(40, 132, 140, 110),
      { d: kutu(60, 40, 100, 56), w: 1.5 },
      { d: "M56 40 L164 40", w: 2.4 },
      {
        d: "M60 40 Q66 70 60 96 L84 96 Q74 70 84 40 Z M160 40 Q154 70 160 96 L136 96 Q146 70 136 40 Z",
        w: 1.4,
        dolgu: true,
      },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...kutuP(40, 132, 140, 110),
      { d: kutu(60, 40, 100, 56), w: 1.5 },
      {
        d: "M60 40 Q66 70 60 96 L84 96 Q74 70 84 40 Z M160 40 Q154 70 160 96 L136 96 Q146 70 136 40 Z",
        w: 1.4,
        dolgu: true,
      },
      { d: kutu(84, 6, 52, 16), w: 1.6, dolgu: true },
      { d: "M60 110 L70 120 M150 110 L160 120 M100 112 L104 118", w: 1 },
      ...firca(200, 60),
    ],
  },
];

// ---------- Pet şişe bowling ----------
const pin = (cx: number, y: number, s = 1): Cizgi[] => sise(cx, y, r(22 * s), r(60 * s));
export const SISE_BOWLING_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      ...sise(90, 130, 34, 96),
      { d: "M73 90 L107 84 L109 100 L75 106 Z", w: 1.2 },
      ok(116, 84, 140, 70),
      ...bez(170, 100),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...sise(110, 130, 36, 100),
      { d: "M93 116 L127 116", w: 1 },
      boyaIzi(93, 116, 34, 14, 4),
      ok(110, 10, 110, 26),
    ],
    noktalar: [
      [108, 40, 1.4],
      [112, 52, 1.4],
    ],
  },
  { cizgiler: [ZEMIN, ...sise(110, 130, 36, 100), { d: "M92 80 L128 80 M92 96 L128 96", w: 2.4 }, ...firca(160, 70)] },
  {
    cizgiler: [
      ZEMIN,
      ...pin(170, 96, 0.7),
      ...pin(160, 112, 0.7),
      ...pin(180, 112, 0.7),
      ...pin(150, 128, 0.7),
      ...pin(170, 128, 0.7),
      ...pin(190, 128, 0.7),
      { d: daire(50, 118, 14), w: 1.8, dolgu: true },
      ok(70, 118, 120, 118),
    ],
  },
];

// ---------- Balonla giden araba ----------
export const BALON_ARABA_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(50, 50, 130, 60), w: 1.8, dolgu: true },
      { d: kutu(40, 60, 150, 6) + " " + kutu(40, 94, 150, 6), w: 1.4, dolgu: true },
      bant(70, 63),
      bant(160, 97),
    ],
  },
  { cizgiler: [ZEMIN, ...balonAraba(60, 116), { d: "M60 116 L180 116", w: 1 }, ok(196, 116, 170, 116)] },
  {
    cizgiler: [
      ZEMIN,
      { d: "M60 76 Q60 40 100 40 Q140 40 140 76 Q140 106 106 112 L94 112 Q60 106 60 76 Z", w: 1.8, dolgu: true },
      { d: "M100 112 L100 140", w: 3 },
      bant(100, 116),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...balonAraba(60, 116),
      { d: "M70 98 L170 98", w: 3 },
      { d: "M66 98 Q46 98 46 90 L66 94", w: 1.4 },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...balonAraba(80, 116),
      { d: "M90 98 L180 98", w: 3 },
      { d: "M90 98 Q40 110 44 70 Q50 40 80 50 Q100 60 90 98 Z", w: 1.8, dolgu: true },
      { d: "M186 94 L210 90 M186 100 L214 100 M186 106 L210 110", w: 0.9 },
      ok(60, 132, 20, 132),
    ],
  },
];

// ---------- Ahşap yapı blokları ----------
export const YAPI_BLOKLARI_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      ...cetvel(30, 120, 180, 10),
      { d: kutu(30, 90, 30, 24) + " " + kutu(30, 60, 60, 24) + " " + kutu(30, 30, 90, 24), w: 1.6, dolgu: true },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(20, 40, 170, 20), w: 1.6, dolgu: true },
      ...testere(120, 36, 60),
      { d: kutu(30, 100, 24, 24) + " " + kutu(70, 100, 48, 24), w: 1.6, dolgu: true },
      { d: "M136 124 L160 100 L184 124 Z", w: 1.6, dolgu: true },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(80, 70, 50, 50), w: 1.8, dolgu: true },
      ...zimpara(100, 62, 40, 14),
      yayOk(130, 70, 10, -1.6, 0.2),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      {
        d:
          kutu(60, 106, 90, 24) + " " + kutu(72, 82, 30, 24) + " " + kutu(108, 82, 30, 24) + " " + kutu(66, 58, 78, 24),
        w: 1.6,
        dolgu: true,
      },
      { d: "M66 58 L105 30 L144 58 Z", w: 1.6, dolgu: true },
      damla(180, 60, 1),
      onay(200, 30, 1),
    ],
  },
];

// ---------- Pamuklu bez bebek ----------
export const BEZ_BEBEK_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(50, 16, 120, 116), w: 1.2, dolgu: true },
      { d: BEBEK(110, 28), w: 1.3, kesik: true },
      ...kalem(176, 60),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: BEBEK(100, 28), w: 1.8, dolgu: true },
      { d: "M94 30 Q100 34 106 30", w: 1 },
      ...igne(150, 30),
    ],
    noktalar: [
      [95, 24, 1.5],
      [105, 24, 1.5],
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: BEBEK(100, 28), w: 1.8, dolgu: true },
      { d: "M112 44 L134 56", w: 1, kesik: true },
      yayOk(170, 80, 18, 3.6, 6),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: BEBEK(100, 28), w: 1.8, dolgu: true },
      ...parmak(150, 54),
      { d: daire(160, 80, 8) + " " + daire(176, 74, 7), w: 1, kesik: true },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: BEBEK(100, 28), w: 1.8, dolgu: true },
      { d: "M86 22 Q90 8 100 12 Q110 8 114 22", w: 1.6 },
      { d: "M84 58 L116 58 L124 98 L76 98 Z", w: 1.6, dolgu: true },
      onay(170, 40, 1),
    ],
    noktalar: [
      [95, 26, 1.5],
      [105, 26, 1.5],
    ],
  },
];

// ---------- Kağıt tabaktan hayvan maskesi ----------
export const KAGIT_MASKE_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      { d: daire(110, 76, 52), w: 1.8, dolgu: true },
      { d: daire(110, 76, 44), w: 0.6 },
      { d: daire(92, 70, 9, 6) + " " + daire(128, 70, 9, 6), w: 1.2, kesik: true },
      ...makas(170, 110),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: daire(100, 76, 52), w: 1.8, dolgu: true },
      boyaIzi(66, 44, 68, 64, 6),
      { d: daire(82, 70, 9, 6) + " " + daire(118, 70, 9, 6), w: 1.4, dolgu: true },
      ...firca(170, 70),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: daire(110, 80, 50), w: 1.8, dolgu: true },
      { d: "M72 46 L68 16 L96 36 Z M148 46 L152 16 L124 36 Z", w: 1.6, dolgu: true },
      { d: daire(92, 74, 9, 6) + " " + daire(128, 74, 9, 6), w: 1.4, dolgu: true },
      { d: "M96 100 L64 96 M96 104 L64 108 M124 100 L156 96 M124 104 L156 108", w: 1 },
      damla(196, 60, 0.9),
    ],
    noktalar: [[110, 98, 4]],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: daire(110, 76, 50), w: 1.8, dolgu: true },
      { d: daire(92, 70, 9, 6) + " " + daire(128, 70, 9, 6), w: 1.4, dolgu: true },
      { d: daire(64, 76, 3) + " " + daire(156, 76, 3), w: 1.2 },
      { d: "M64 76 Q110 20 156 76", w: 1, kesik: true },
    ],
  },
];
