import { Cizim, daire, kutu } from "../arac";

const egrelti = (x: number, y: number, h = 30) =>
  `M${x} ${y} Q${x - 4} ${y - h / 2} ${x + 4} ${y - h} M${x - 1} ${y - h * 0.3} q-7 -2 -9 -8 M${x} ${y - h * 0.55} q7 -2 9 -8 M${x + 2} ${y - h * 0.8} q-6 -1 -7 -6`;
const kaktus = (x: number, y: number, h = 30) =>
  `M${x - 5} ${y} L${x - 5} ${y - h + 5} Q${x} ${y - h - 4} ${x + 5} ${y - h + 5} L${x + 5} ${y} Z`;
const yosun = (x: number, y: number, n = 4) =>
  Array.from({ length: n }, (_, i) => `M${x + i * 10} ${y} q5 -7 10 0`).join(" ");

// Terraryum ek projelerinin çizimleri (viewBox 0 0 160 160)
export const TERRARYUM_CIZIM: Record<string, Cizim> = {
  "sise-bahcesi": {
    taramalar: [
      { id: "t", sinir: "M30 116 L130 116 Q128 146 80 148 Q32 146 30 116 Z", kutu: [28, 116, 104, 34], aralik: 4 },
    ],
    cizgiler: [
      { d: "M70 10 L90 10 L90 40 Q134 56 134 100 Q134 148 80 148 Q26 148 26 100 Q26 56 70 40 Z", w: 2, dolgu: true },
      { d: "M30 116 Q60 108 80 112 T130 112", w: 1.2 },
      { d: egrelti(60, 112, 34) + " " + egrelti(96, 112, 28), w: 1.3 },
      { d: yosun(70, 112, 2), w: 1 },
      { d: "M120 4 L84 90", w: 1.4 },
      { d: daire(84, 94, 4), w: 1.2, dolgu: true },
    ],
  },
  "cam-fanus": {
    taramalar: [{ id: "a", sinir: "M18 132 L142 132 L136 146 L24 146 Z", kutu: [18, 132, 124, 14], aralik: 3 }],
    cizgiler: [
      { d: "M30 132 L30 60 Q30 20 80 20 Q130 20 130 60 L130 132", w: 2 },
      { d: daire(80, 14, 6), w: 1.6, dolgu: true },
      { d: "M18 132 L142 132 L136 146 L24 146 Z", w: 1.8, dolgu: true },
      { d: yosun(40, 128, 8), w: 1.2, dolgu: true },
      { d: egrelti(64, 126, 40), w: 1.3 },
      { d: "M92 128 L96 116 L108 116 L112 128 Z", w: 1.4, dolgu: true },
      { d: "M118 50 Q122 70 120 90", w: 0.9 },
    ],
  },
  "geometrik-terraryum": {
    cizgiler: [
      { d: "M30 140 L130 140 L146 90 L80 30 L14 90 Z", w: 2 },
      { d: "M14 90 L146 90 M80 30 L50 140 M80 30 L110 140 M14 90 L50 140 M146 90 L110 140", w: 1.2 },
      { d: "M26 130 Q80 120 134 130", w: 1 },
      { d: "M56 128 Q50 116 58 108 Q66 116 60 128 M60 128 Q70 112 80 114 Q76 124 64 130", w: 1.3 },
      { d: kaktus(96, 130, 26), w: 1.4, dolgu: true },
    ],
  },
  "etcil-terraryum": {
    taramalar: [{ id: "t", sinir: "M30 110 L130 110 L126 146 L34 146 Z", kutu: [30, 110, 100, 36], aralik: 4 }],
    cizgiler: [
      { d: "M30 40 L130 40 L126 146 L34 146 Z", w: 2 },
      { d: "M30 110 L130 110", w: 1.2 },
      { d: "M60 110 L60 80 M60 80 Q46 64 52 54 Q60 66 60 80 Q74 66 68 54 Q60 66 60 80", w: 1.5 },
      { d: "M50 56 L46 52 M52 54 L50 48 M70 56 L74 52 M68 54 L70 48", w: 1 },
      { d: "M100 110 Q96 80 104 60 Q112 54 116 62 L110 104", w: 1.6, dolgu: true },
      { d: "M104 60 L118 52", w: 1.2 },
      { d: "M40 110 Q44 96 40 86 M44 110 q4 -10 10 -12", w: 1 },
    ],
  },
  "col-terraryum": {
    taramalar: [
      { id: "k", sinir: "M24 112 Q50 104 80 112 T136 108 L132 146 L28 146 Z", kutu: [24, 104, 112, 42], aralik: 3 },
    ],
    cizgiler: [
      { d: "M24 40 L136 40 L132 146 L28 146 Z", w: 2 },
      { d: "M26 96 Q50 88 80 96 T134 92 M25 112 Q50 104 80 112 T136 108 M27 126 Q60 120 90 128 T134 124", w: 1.2 },
      { d: kaktus(60, 96, 40) + " " + kaktus(98, 94, 26), w: 1.6, dolgu: true },
      { d: "M65 74 L74 74 L74 62 Q78 56 82 62 L82 80 L65 80", w: 1.4, dolgu: true },
      { d: "M120 40 L120 30 Q120 24 128 26", w: 1 },
      { d: daire(118, 20, 8), w: 1, kesik: true },
    ],
  },
  "led-terraryum": {
    cizgiler: [
      {
        d: "M40 40 L120 40 L120 50 Q132 58 132 74 L132 136 Q132 146 122 146 L38 146 Q28 146 28 136 L28 74 Q28 58 40 50 Z",
        w: 2,
      },
      { d: kutu(38, 28, 84, 12), w: 1.8, dolgu: true },
      { d: "M44 44 Q60 56 80 46 Q100 56 116 44", w: 0.9 },
      { d: daire(52, 50, 2) + daire(70, 50, 2) + daire(90, 50, 2) + daire(108, 48, 2), w: 1, dolgu: true },
      { d: "M52 56 L50 62 M70 56 L70 62 M90 56 L92 62 M108 54 L110 60", w: 0.8, kesik: true },
      { d: "M30 120 Q60 112 80 116 T130 114", w: 1.2 },
      { d: egrelti(56, 116, 36) + " " + egrelti(100, 116, 30), w: 1.3 },
      { d: kutu(70, 14, 20, 14), w: 1.4, dolgu: true },
    ],
  },
  "duvar-terraryumu": {
    cizgiler: [
      { d: "M14 20 L14 150", w: 1, kesik: true },
      ...[
        [50, 40],
        [110, 70],
        [56, 116],
      ].map(([x, y]) => ({
        d: `M${x - 26} ${y} L${x + 26} ${y} Q${x + 26} ${y + 30} ${x} ${y + 30} Q${x - 26} ${y + 30} ${x - 26} ${y} Z`,
        w: 1.8,
        dolgu: true,
      })),
      { d: "M24 40 L24 30 M134 70 L134 60 M30 116 L30 106", w: 1.4 },
      {
        d: "M40 60 q4 -10 10 -14 M50 60 q2 -12 -4 -18 M100 92 q4 -10 12 -14 M110 92 q-2 -12 6 -16 M46 136 q4 -10 10 -12 M56 136 q2 -10 -2 -16",
        w: 1.2,
      },
    ],
  },
  "wardian-kutusu": {
    taramalar: [{ id: "t", sinir: kutu(20, 120, 120, 20), kutu: [20, 120, 120, 20], aralik: 4, sonra: 0 }],
    cizgiler: [
      { d: kutu(20, 70, 120, 70), w: 2.2 },
      { d: "M20 70 L80 26 L140 70", w: 2.2 },
      { d: "M60 70 L60 140 M100 70 L100 140 M50 48 L50 70 M110 48 L110 70 M20 120 L140 120", w: 1.2 },
      { d: egrelti(40, 118, 30) + " " + egrelti(80, 118, 40) + " " + egrelti(120, 118, 28), w: 1.3 },
      { d: daire(80, 22, 4), w: 1.4, dolgu: true },
    ],
  },
  "akvaryumdan-terraryum": {
    taramalar: [{ id: "d", sinir: kutu(14, 118, 132, 16), kutu: [14, 118, 132, 16], aralik: 3 }],
    cizgiler: [
      { d: kutu(14, 30, 132, 104), w: 2 },
      { d: "M14 118 L146 118", w: 1.2, kesik: true },
      { d: "M14 108 Q50 92 80 100 T146 96", w: 1.3 },
      { d: "M40 100 Q60 70 100 64 Q116 62 120 70", w: 2.4 },
      { d: egrelti(36, 102, 30) + " " + egrelti(126, 98, 34), w: 1.3 },
      { d: yosun(70, 100, 4), w: 1 },
      { d: "M14 30 L146 30", w: 1, kesik: true },
    ],
  },
  kokedama: {
    taramalar: [{ id: "k", sinir: daire(80, 104, 30), kutu: [50, 74, 60, 60], aralik: 4, sonra: 0 }],
    cizgiler: [
      { d: daire(80, 104, 30), w: 2, dolgu: true },
      { d: "M52 92 Q80 104 108 92 M50 108 Q80 120 110 108 M66 76 Q72 104 64 132 M94 76 Q88 104 96 132", w: 1.2 },
      { d: "M80 74 L80 50 M80 60 Q66 50 60 36 Q72 38 80 52 M80 56 Q94 44 102 34 Q100 46 80 58", w: 1.5, dolgu: true },
      { d: "M60 92 L80 4 L100 92", w: 1 },
    ],
  },
  "biyoaktif-terraryum": {
    taramalar: [{ id: "t", sinir: kutu(14, 112, 132, 30), kutu: [14, 112, 132, 30], aralik: 4 }],
    cizgiler: [
      { d: kutu(14, 30, 132, 112), w: 2 },
      { d: "M14 112 Q60 104 90 110 T146 106", w: 1.3 },
      { d: "M40 108 Q48 100 58 106 Q50 112 40 108 Z M100 104 Q110 96 118 104 Q110 110 100 104 Z", w: 1.2, dolgu: true },
      { d: "M70 118 Q80 112 90 118 Q80 124 70 118 Z", w: 1.6, dolgu: true },
      { d: "M72 116 L68 112 M76 114 L74 110 M84 114 L86 110 M88 116 L92 112 M72 120 L68 124 M88 120 L92 124", w: 1 },
      { d: egrelti(36, 104, 40) + " " + egrelti(126, 100, 36), w: 1.3 },
      { d: daire(110, 128, 1.4) + daire(118, 132, 1.2) + daire(40, 132, 1.3), w: 1 },
    ],
  },
  "zen-bahcesi": {
    taramalar: [{ id: "c", sinir: "M10 100 L150 100 L150 110 L10 110 Z", kutu: [10, 100, 140, 10], aralik: 3 }],
    cizgiler: [
      { d: "M10 60 L150 60 L150 110 L10 110 Z", w: 2 },
      { d: "M10 100 L150 100", w: 1.2 },
      { d: daire(52, 80, 10, 6) + daire(108, 76, 7, 4), w: 1.8, dolgu: true },
      { d: daire(52, 80, 16, 10) + daire(52, 80, 22, 14) + daire(108, 76, 12, 8), w: 0.8 },
      { d: "M14 70 L28 70 M76 92 L146 92 M80 86 L146 86 M126 66 L146 66", w: 0.8 },
      { d: "M120 20 L100 56 M90 50 L110 62 M92 54 L94 58 M98 56 L100 60 M104 58 L106 62", w: 1.4 },
    ],
  },
  "minyatur-sahne": {
    cizgiler: [
      {
        d: "M30 20 L130 20 L130 30 Q146 40 146 60 L146 136 Q146 146 136 146 L24 146 Q14 146 14 136 L14 60 Q14 40 30 30 Z",
        w: 2,
      },
      { d: "M14 118 Q60 108 90 116 T146 112", w: 1.3 },
      { d: "M40 120 Q60 110 80 118 Q100 126 120 116", w: 3, kesik: true },
      { d: "M60 104 L60 92 M56 92 Q60 82 64 92 Z M58 98 L54 104 M62 98 L66 104", w: 1.3, dolgu: true },
      { d: daire(60, 88, 3), w: 1.2, dolgu: true },
      { d: "M100 112 L100 96 L114 104 Z", w: 1.4, dolgu: true },
      { d: egrelti(30, 116, 40) + " " + egrelti(132, 112, 34), w: 1.3 },
    ],
  },
  "terraryum-bakimi": {
    cizgiler: [
      { d: "M24 40 L136 40 L132 146 L28 146 Z", w: 2 },
      { d: "M28 116 Q60 108 80 112 T134 110", w: 1.2 },
      { d: egrelti(60, 112, 50) + " " + egrelti(100, 112, 40), w: 1.3 },
      { d: "M140 10 L104 58 M146 18 L108 62", w: 1.6 },
      { d: daire(146, 8, 5) + daire(152, 16, 5), w: 1.4 },
      { d: "M18 20 L34 20 L34 30 L28 36 L24 36 L18 30 Z", w: 1.4, dolgu: true },
      { d: "M34 24 L42 22 M40 30 L46 34 M38 16 L46 12", w: 1, kesik: true },
    ],
  },
  "sukulent-cogaltma": {
    taramalar: [{ id: "t", sinir: "M10 110 L150 110 L144 136 L16 136 Z", kutu: [10, 110, 140, 26], aralik: 4 }],
    cizgiler: [
      { d: "M10 110 L150 110 L144 136 L16 136 Z", w: 2, dolgu: true },
      ...[30, 70, 110].map((x) => ({
        d: `M${x} 104 Q${x + 10} 92 ${x + 24} 100 Q${x + 12} 110 ${x} 104 Z`,
        w: 1.5,
        dolgu: true,
      })),
      { d: "M36 104 L34 112 M40 104 L42 112 M76 104 L74 112 M80 104 L82 112", w: 0.9 },
      { d: "M112 100 Q108 88 114 84 Q118 90 116 98 M116 98 Q122 86 128 88 Q126 96 118 100", w: 1.2 },
      {
        d: "M70 60 Q60 40 70 30 Q78 40 74 60 M74 60 Q90 40 100 44 Q96 58 76 62 M70 60 Q50 46 44 54 Q50 64 70 62",
        w: 1.5,
        dolgu: true,
      },
    ],
  },
  "hava-bitkisi-duvari": {
    cizgiler: [
      { d: kutu(20, 20, 120, 120), w: 2 },
      { d: "M20 50 L140 50 M20 80 L140 80 M20 110 L140 110 M50 20 L50 140 M80 20 L80 140 M110 20 L110 140", w: 0.9 },
      ...[
        [50, 50],
        [110, 80],
        [80, 110],
        [110, 20],
        [50, 110],
      ].map(([x, y]) => ({
        d: `M${x} ${y} Q${x - 14} ${y - 4} ${x - 16} ${y - 16} M${x} ${y} Q${x - 4} ${y - 14} ${x + 2} ${y - 20} M${x} ${y} Q${x + 12} ${y - 6} ${x + 16} ${y - 14} M${x} ${y} Q${x + 14} ${y + 2} ${x + 18} ${y - 4}`,
        w: 1.3,
      })),
    ],
  },
  "teraryum-hediye": {
    cizgiler: [
      ...[
        [36, 70],
        [80, 50],
        [124, 70],
      ].map(([x, y]) => ({
        d: `M${x - 16} ${y} L${x + 16} ${y} L${x + 16} ${y + 6} Q${x + 22} ${y + 10} ${x + 22} ${y + 18} L${x + 22} ${y + 70} Q${x + 22} ${y + 76} ${x + 16} ${y + 76} L${x - 16} ${y + 76} Q${x - 22} ${y + 76} ${x - 22} ${y + 70} L${x - 22} ${y + 18} Q${x - 22} ${y + 10} ${x - 16} ${y + 6} Z`,
        w: 1.8,
      })),
      { d: kutu(20, 62, 32, 8) + kutu(64, 42, 32, 8) + kutu(108, 62, 32, 8), w: 1.4, dolgu: true },
      { d: "M80 42 Q72 34 66 38 Q72 44 80 42 Q88 34 94 38 Q88 44 80 42", w: 1.2 },
      { d: egrelti(36, 136, 30) + " " + egrelti(80, 116, 34) + " " + egrelti(124, 136, 28), w: 1.2 },
      { d: "M16 134 L56 134 M60 114 L100 114 M104 134 L144 134", w: 1 },
    ],
  },
};
