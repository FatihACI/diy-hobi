import { Cizim, daire, dalga, kutu } from "../arac";

// Basit iğne (x, y = göz)
const igne = (x: number, y: number, boy = 26) =>
  `M${x} ${y} L${x} ${y + boy} Q${x} ${y + boy + 10} ${x - 9} ${y + boy + 7} Q${x - 12} ${y + boy + 2} ${x - 9} ${y + boy - 2} L${x - 6} ${y + boy}`;
// Basit balık (x = burun, y = orta, s = ölçek)
const balik = (x: number, y: number, s = 1) =>
  `M${x} ${y} Q${x - 20 * s} ${y - 14 * s} ${x - 44 * s} ${y} Q${x - 20 * s} ${y + 14 * s} ${x} ${y} Z M${x - 44 * s} ${y} L${x - 56 * s} ${y - 10 * s} L${x - 56 * s} ${y + 10 * s} Z`;

// Balıkçılık ek projelerinin çizimleri (viewBox 0 0 160 160)
export const BALIKCILIK_CIZIM: Record<string, Cizim> = {
  "olta-dugumleri": {
    cizgiler: [
      { d: igne(40, 20, 30), w: 1.8 },
      { d: daire(40, 18, 3), w: 1.4 },
      { d: "M40 21 L40 4 M37 6 Q46 10 37 14 Q46 18 37 22 Q46 26 37 30", w: 1.2 },
      { d: "M90 30 L150 30 M90 40 L150 40", w: 1.4 },
      { d: "M112 26 Q118 35 112 44 M118 26 Q124 35 118 44 M124 26 Q130 35 124 44", w: 1.6 },
      { d: "M80 120 Q60 90 80 70 Q100 90 80 120 Z", w: 1.6 },
      { d: "M80 120 L80 150 M80 70 L80 56", w: 1.4 },
      { d: daire(80, 52, 4), w: 1.4 },
      { d: "M72 96 Q80 104 88 96", w: 1.2 },
      { d: "M24 100 L60 100 M110 100 L140 100", w: 0.8, kesik: true },
    ],
  },
  "capari-takimi": {
    cizgiler: [
      { d: "M80 4 L80 140", w: 1 },
      { d: daire(80, 144, 6, 9), w: 1.8, dolgu: true },
      ...[30, 56, 82, 108].map((y, i) => ({
        d: `M80 ${y} L${i % 2 ? 104 : 56} ${y + 6}` + " " + igne(i % 2 ? 104 : 56, y + 6, 14),
        w: 1.3,
      })),
      ...[30, 56, 82, 108].map((y, i) => ({
        d: `M${i % 2 ? 104 : 56} ${y + 8} q${i % 2 ? 10 : -10} 4 ${i % 2 ? 14 : -14} 14 M${i % 2 ? 104 : 56} ${y + 8} q${i % 2 ? 6 : -6} 6 ${i % 2 ? 8 : -8} 16`,
        w: 0.9,
      })),
      { d: balik(150, 60, 0.5) + " " + balik(40, 130, 0.45), w: 1.2, dolgu: true },
    ],
  },
  "kasik-yem": {
    taramalar: [
      {
        id: "k",
        sinir: "M40 40 Q80 20 110 60 Q120 90 100 110 Q70 120 50 90 Q34 66 40 40 Z",
        kutu: [34, 20, 86, 100],
        aralik: 5,
        sonra: 0,
      },
    ],
    cizgiler: [
      { d: "M40 40 Q80 20 110 60 Q120 90 100 110 Q70 120 50 90 Q34 66 40 40 Z", w: 2.2, dolgu: true },
      { d: "M56 56 Q80 44 98 70", w: 1, kesik: true },
      { d: daire(46, 44, 3) + daire(104, 104, 3), w: 1.4, dolgu: true },
      { d: daire(40, 34, 5), w: 1.4 },
      { d: "M40 29 L30 14", w: 1.4 },
      { d: daire(110, 112, 4), w: 1.4 },
      { d: "M112 116 L116 132 M116 132 Q116 142 108 140 M116 132 Q118 142 126 140 M116 132 Q122 140 116 146", w: 1.6 },
    ],
  },
  "silikon-yem-montaj": {
    taramalar: [
      {
        id: "s",
        sinir: "M60 70 Q90 60 120 70 Q136 74 150 66 L146 84 Q136 80 120 86 Q90 94 60 86 Z",
        kutu: [60, 60, 90, 34],
        aralik: 4,
        sonra: 1,
      },
    ],
    cizgiler: [
      { d: daire(46, 78, 14), w: 2, dolgu: true },
      { d: "M60 70 Q90 60 120 70 Q136 74 150 66 L146 84 Q136 80 120 86 Q90 94 60 86 Z", w: 2, dolgu: true },
      { d: "M72 68 L72 88 M84 66 L84 90 M96 66 L96 90", w: 0.9 },
      { d: "M32 78 L14 78", w: 1.2 },
      { d: daire(42, 74, 2.5), w: 1 },
      { d: "M104 78 L108 62", w: 1.6 },
      { d: "M108 62 L112 56", w: 1 },
      { d: dalga(10, 120, 12), w: 0.9 },
    ],
  },
  "suni-sinek": {
    cizgiler: [
      { d: "M20 150 L56 110 L60 112 L30 152 Z", w: 1.8, dolgu: true },
      { d: "M56 110 L70 96", w: 2.4 },
      { d: kutu(66, 86, 14, 14), w: 1.6, dolgu: true },
      { d: "M80 92 L120 92 Q130 92 130 102 Q130 112 122 110", w: 1.8 },
      { d: "M92 88 Q104 80 116 88 L116 96 Q104 100 92 96 Z", w: 1.6, dolgu: true },
      { d: "M116 92 L140 76 M116 92 L144 92 M116 92 L140 108 M116 90 L130 70 M116 94 L130 114", w: 1.1 },
      { d: "M92 92 L74 82 M92 92 L72 94 M92 92 L76 102", w: 0.9 },
      { d: "M98 90 L110 90 M98 94 L110 94", w: 0.7 },
    ],
  },
  "kamis-halka": {
    taramalar: [{ id: "s", sinir: kutu(50, 92, 60, 12), kutu: [50, 92, 60, 12], aralik: 2, sonra: 1 }],
    cizgiler: [
      { d: "M6 100 L154 96 M6 106 L154 101", w: 2 },
      { d: kutu(50, 92, 60, 12), w: 1.6, dolgu: true },
      { d: "M70 92 L80 60 L90 92", w: 1.8 },
      { d: daire(80, 52, 12), w: 2, dolgu: true },
      { d: daire(80, 52, 7), w: 1.2 },
      { d: "M80 40 Q120 20 150 30", w: 0.9 },
      { d: "M30 130 L60 140 M100 140 L130 130", w: 1, kesik: true },
    ],
  },
  "makara-bakimi": {
    taramalar: [{ id: "b", sinir: kutu(28, 44, 30, 40), kutu: [28, 44, 30, 40], aralik: 3, sonra: 1 }],
    cizgiler: [
      { d: daire(84, 80, 26), w: 2, dolgu: true },
      { d: kutu(28, 44, 30, 40), w: 1.8, dolgu: true },
      { d: "M84 80 L118 108", w: 2 },
      { d: daire(122, 112, 6), w: 1.6, dolgu: true },
      { d: "M78 54 L76 30 L96 30 L94 54", w: 1.6 },
      { d: "M132 20 L146 20 L146 40 L140 48 L138 48 L132 40 Z", w: 1.6, dolgu: true },
      { d: "M138 54 Q135 60 138 62 Q141 60 138 54 Z", w: 1.1 },
      { d: daire(84, 80, 6), w: 1.2 },
      { d: "M20 130 L60 130 M40 120 L40 140", w: 1, kesik: true },
    ],
  },
  "dip-takimi": {
    cizgiler: [
      { d: "M80 4 L80 120", w: 1.1 },
      { d: daire(80, 40, 4) + daire(80, 80, 4), w: 1.4, dolgu: true },
      { d: "M84 40 L118 46 M76 80 L42 86", w: 1 },
      { d: igne(118, 46, 14) + " " + igne(42, 86, 14), w: 1.4 },
      { d: "M72 120 Q80 112 88 120 L90 140 Q80 150 70 140 Z", w: 2, dolgu: true },
      { d: "M10 150 Q80 140 150 150", w: 1.4 },
      { d: dalga(6, 14, 13), w: 0.9 },
    ],
  },
  "takim-kutusu": {
    taramalar: [{ id: "k", sinir: "M20 60 L140 40 L140 60 L20 80 Z", kutu: [20, 40, 120, 40], aralik: 4 }],
    cizgiler: [
      { d: "M20 60 L140 40 L140 60 L20 80 Z", w: 1.8, dolgu: true },
      { d: kutu(20, 84, 120, 56), w: 2.2, dolgu: true },
      { d: "M20 104 L140 104 M20 124 L140 124 M60 84 L60 140 M100 84 L100 140", w: 1.2 },
      { d: "M30 92 Q40 88 50 94 M70 92 L70 100 M76 92 L76 100 M82 92 L82 100", w: 1.2 },
      { d: daire(80, 114, 4) + daire(90, 114, 3) + daire(116, 112, 5), w: 1.2, dolgu: true },
      { d: balik(54, 132, 0.4), w: 1, dolgu: true },
      { d: "M108 128 L132 128 L130 136 L110 136 Z", w: 1.1 },
    ],
  },
  "balik-fileto": {
    taramalar: [
      {
        id: "f",
        sinir: "M130 80 Q100 56 50 64 Q30 70 20 80 Q30 90 50 96 Q100 104 130 80 Z",
        kutu: [20, 56, 110, 48],
        aralik: 5,
        sonra: 1,
      },
    ],
    cizgiler: [
      { d: kutu(8, 40, 144, 90), w: 1.4 },
      {
        d: "M130 80 Q100 56 50 64 Q30 70 20 80 Q30 90 50 96 Q100 104 130 80 Z M130 80 L146 66 L146 94 Z",
        w: 2,
        dolgu: true,
      },
      { d: "M44 66 Q38 80 44 94", w: 1.2 },
      { d: "M50 80 L126 80", w: 1, kesik: true },
      { d: daire(32, 76, 2), w: 1 },
      { d: "M60 112 L120 108 L124 114 L62 120 Z", w: 1.6, dolgu: true },
      { d: "M120 108 L146 106 L146 116 L124 114", w: 1.8, dolgu: true },
    ],
  },
  "hamur-yemi": {
    taramalar: [{ id: "k", sinir: "M20 90 Q22 140 80 140 Q138 140 140 90 Z", kutu: [20, 100, 120, 40], aralik: 4 }],
    cizgiler: [
      { d: "M20 90 Q22 140 80 140 Q138 140 140 90", w: 2, dolgu: true },
      { d: daire(80, 90, 60, 12), w: 1.8, dolgu: true },
      { d: daire(56, 86, 9) + daire(78, 82, 10) + daire(102, 86, 9) + daire(90, 94, 7), w: 1.6, dolgu: true },
      { d: igne(120, 30, 20), w: 1.6 },
      { d: daire(114, 56, 6), w: 1.4, dolgu: true },
      { d: "M120 30 L120 10", w: 0.9 },
    ],
  },
  "surf-casting": {
    cizgiler: [
      { d: "M20 150 L130 14", w: 2.6 },
      { d: "M50 150 L64 112 L78 150 M58 128 L72 128", w: 1.8 },
      { d: daire(44, 122, 7), w: 1.6, dolgu: true },
      { d: "M130 14 Q150 60 154 100", w: 0.8, kesik: true },
      { d: dalga(4, 130, 13, 12, 4) + " " + dalga(4, 142, 13, 12, 4), w: 1.2 },
      { d: "M100 120 Q120 116 154 118", w: 1 },
      { d: daire(130, 30, 8, 4), w: 1 },
    ],
  },
  "igne-bileme": {
    taramalar: [{ id: "t", sinir: "M20 110 L120 80 L130 96 L30 126 Z", kutu: [20, 80, 110, 46], aralik: 3, sonra: 0 }],
    cizgiler: [
      { d: "M20 110 L120 80 L130 96 L30 126 Z", w: 2, dolgu: true },
      { d: igne(96, 18, 40), w: 2.4 },
      { d: daire(96, 15, 4), w: 1.6 },
      { d: "M78 86 L92 70", w: 1, kesik: true },
      { d: "M120 30 L140 20 M122 42 L146 38", w: 1 },
      { d: "M110 64 L130 50 L140 56 L118 70", w: 1.4 },
    ],
  },
  "tuy-samandira": {
    taramalar: [{ id: "s", sinir: "M80 70 Q94 84 80 110 Q66 84 80 70 Z", kutu: [66, 70, 28, 40], aralik: 3, sonra: 1 }],
    cizgiler: [
      { d: "M80 10 L80 146", w: 1.8 },
      { d: "M80 70 Q94 84 80 110 Q66 84 80 70 Z", w: 1.8, dolgu: true },
      { d: "M76 10 L84 10 L84 30 L76 30 Z", w: 1.4, dolgu: true },
      { d: kutu(76, 120, 8, 4) + kutu(76, 140, 8, 4), w: 1.2, dolgu: true },
      {
        d: "M120 30 Q130 60 124 110 M124 50 Q140 40 146 30 M124 64 Q142 58 150 46 M124 80 Q142 76 150 64 M124 50 Q110 40 104 30 M124 64 Q106 58 100 46",
        w: 1,
      },
      { d: dalga(6, 42, 5) + " " + dalga(96, 42, 5), w: 1 },
    ],
  },
  "lrf-takim": {
    cizgiler: [
      { d: "M14 150 L140 20", w: 1.8 },
      { d: daire(36, 128, 7), w: 1.4, dolgu: true },
      { d: "M140 20 Q150 70 120 110", w: 0.8 },
      { d: daire(116, 112, 5), w: 1.6, dolgu: true },
      { d: "M120 114 Q132 118 146 112 L144 120 Q132 124 120 118", w: 1.4, dolgu: true },
      { d: "M48 116 L48 108 M60 104 L60 96 M74 90 L74 84 M90 74 L90 68 M106 58 L106 54", w: 1 },
      { d: dalga(4, 140, 13), w: 0.9 },
    ],
  },
  "canli-yem-kovasi": {
    taramalar: [{ id: "k", sinir: "M30 50 L130 50 L120 146 L40 146 Z", kutu: [30, 90, 100, 56], aralik: 5 }],
    cizgiler: [
      { d: "M30 50 L130 50 L120 146 L40 146 Z", w: 2.2, dolgu: true },
      { d: daire(80, 50, 50, 8), w: 1.8, dolgu: true },
      { d: "M30 50 Q80 10 130 50", w: 1.4 },
      { d: kutu(96, 30, 26, 16), w: 1.6, dolgu: true },
      { d: "M104 46 L104 136", w: 1 },
      { d: daire(104, 138, 5, 3), w: 1.4, dolgu: true },
      { d: daire(100, 120, 2) + daire(108, 104, 2.5) + daire(102, 90, 2) + daire(96, 74, 2.4), w: 1 },
      { d: balik(80, 110, 0.5) + " " + balik(70, 126, 0.4), w: 1.2, dolgu: true },
    ],
  },
  "birak-yakala": {
    cizgiler: [
      { d: dalga(4, 110, 13, 12, 4) + " " + dalga(10, 126, 12, 12, 3), w: 1.2 },
      { d: balik(120, 104, 1.2), w: 2, dolgu: true },
      { d: "M100 98 Q96 104 100 110", w: 1 },
      { d: "M40 70 Q60 96 80 100 Q96 104 104 112 L96 122 Q72 116 50 104 Q36 96 30 80 Z", w: 1.8, dolgu: true },
      { d: "M120 40 L150 14 M128 46 L154 22 M118 44 L128 46", w: 1.6 },
      { d: daire(110, 102, 2), w: 1 },
    ],
  },
};
