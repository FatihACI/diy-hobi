import { Cizim, daire, kutu } from "../arac";

const saksi = (x: number, y: number, w = 40, h = 34) =>
  `M${x - w / 2} ${y} L${x + w / 2} ${y} L${x + w / 2 - 6} ${y + h} L${x - w / 2 + 6} ${y + h} Z`;
const fide = (x: number, y: number, h = 24) =>
  `M${x} ${y} Q${x - 2} ${y - h / 2} ${x} ${y - h} M${x} ${y - h * 0.7} Q${x - 14} ${y - h} ${x - 16} ${y - h * 0.6} Q${x - 8} ${y - h * 0.5} ${x} ${y - h * 0.7} M${x} ${y - h} Q${x + 14} ${y - h - 6} ${x + 16} ${y - h + 4} Q${x + 6} ${y - h + 6} ${x} ${y - h}`;

// Bahçe & Saksı ek projelerinin çizimleri (viewBox 0 0 160 160)
export const BAHCE_CIZIM: Record<string, Cizim> = {
  "domates-fide": {
    taramalar: [{ id: "v", sinir: kutu(14, 110, 132, 30), kutu: [14, 110, 132, 30], aralik: 4 }],
    cizgiler: [
      { d: kutu(14, 110, 132, 30), w: 2, dolgu: true },
      { d: "M47 110 L47 140 M80 110 L80 140 M113 110 L113 140", w: 1.2 },
      { d: fide(30, 110, 30) + " " + fide(63, 110, 40) + " " + fide(96, 110, 34) + " " + fide(129, 110, 26), w: 1.4 },
      { d: daire(122, 30, 10), w: 1.6, dolgu: true },
      { d: "M122 20 L120 14 M118 22 L114 18", w: 1.2 },
    ],
  },
  "sicak-kompost": {
    taramalar: [{ id: "b", sinir: "M40 40 L120 40 L114 146 L46 146 Z", kutu: [40, 90, 80, 56], aralik: 4 }],
    cizgiler: [
      { d: "M40 40 L120 40 L114 146 L46 146 Z", w: 2.2, dolgu: true },
      { d: kutu(34, 28, 92, 12), w: 1.8, dolgu: true },
      { d: daire(56, 60, 2) + daire(80, 60, 2) + daire(104, 60, 2) + daire(60, 80, 2) + daire(100, 80, 2), w: 1 },
      { d: "M44 90 Q80 84 116 90", w: 1.2 },
      { d: "M60 110 q4 -4 8 0 t8 0 M84 124 q4 -4 8 0", w: 1 },
      { d: "M130 30 Q140 20 150 26 M130 40 Q144 36 152 44", w: 1, kesik: true },
      { d: "M20 120 L30 104 L36 120 Z", w: 1.2 },
    ],
  },
  "yukseltilmis-yatak": {
    taramalar: [{ id: "y", sinir: "M14 90 L14 130 L104 146 L104 106 Z", kutu: [14, 90, 90, 56], aralik: 4 }],
    cizgiler: [
      { d: "M14 90 L70 76 L150 90 L104 106 Z", w: 2, dolgu: true },
      { d: "M14 90 L14 130 L104 146 L150 128 L150 90 M104 106 L104 146", w: 2 },
      { d: "M14 110 L104 126 L150 108", w: 1 },
      { d: fide(50, 92, 24) + " " + fide(84, 88, 30) + " " + fide(118, 92, 26), w: 1.3 },
    ],
  },
  "palet-dikey-bahce": {
    cizgiler: [
      { d: kutu(40, 14, 80, 136), w: 2 },
      { d: "M40 44 L120 44 M40 78 L120 78 M40 112 L120 112", w: 3 },
      { d: kutu(40, 14, 80, 136), w: 0.1 },
      ...[30, 64, 98, 132].map((y) => ({
        d: `${fide(58, y + 10, 18)} ${fide(82, y + 10, 22)} ${fide(104, y + 10, 18)}`,
        w: 1.1,
      })),
      { d: "M120 150 L150 150 M40 150 L10 150", w: 1.4 },
    ],
  },
  "cicek-sogani": {
    taramalar: [{ id: "s", sinir: saksi(80, 60, 90, 90), kutu: [35, 60, 90, 90], aralik: 6 }],
    cizgiler: [
      { d: saksi(80, 60, 90, 90), w: 2.2, dolgu: true },
      { d: "M42 84 L118 84 M44 106 L116 106 M46 126 L114 126", w: 0.8, kesik: true },
      ...[56, 80, 104].map((x) => ({
        d: `M${x} 140 Q${x - 8} 132 ${x} 122 Q${x + 8} 132 ${x} 140 Z M${x} 122 L${x} 118`,
        w: 1.3,
        dolgu: true,
      })),
      ...[64, 96].map((x) => ({ d: `M${x} 118 Q${x - 7} 110 ${x} 102 Q${x + 7} 110 ${x} 118 Z`, w: 1.2, dolgu: true })),
      { d: "M80 60 L80 30 M72 30 Q72 14 80 18 Q88 14 88 30 Q80 36 72 30 Z", w: 1.4, dolgu: true },
      { d: "M80 50 Q66 46 64 36 M80 50 Q94 46 96 36", w: 1.2 },
    ],
  },
  "yagmur-suyu": {
    taramalar: [{ id: "v", sinir: "M50 60 L110 60 L110 130 L50 130 Z", kutu: [50, 96, 60, 34], aralik: 4 }],
    cizgiler: [
      { d: "M50 60 L110 60 L110 130 L50 130 Z", w: 2.2, dolgu: true },
      { d: daire(80, 60, 30, 6), w: 1.6, dolgu: true },
      { d: "M50 96 L110 96", w: 1, kesik: true },
      { d: "M84 10 L84 50 L94 54", w: 2.4 },
      { d: kutu(46, 130, 30, 14) + kutu(84, 130, 30, 14), w: 1.6, dolgu: true },
      { d: "M110 120 L122 120 L122 126", w: 1.8 },
      { d: "M30 20 L26 30 M44 14 L40 24 M120 18 L116 28 M136 26 L132 36", w: 1 },
    ],
  },
  "tohum-saklama": {
    cizgiler: [
      { d: "M20 50 L80 50 L80 130 L20 130 Z", w: 2, dolgu: true },
      { d: "M20 50 L50 70 L80 50", w: 1.4 },
      { d: kutu(28, 100, 44, 18), w: 1.1 },
      { d: "M32 106 L60 106 M32 112 L50 112", w: 0.9 },
      { d: "M96 70 L136 70 L136 140 Q136 146 130 146 L102 146 Q96 146 96 140 Z", w: 2, dolgu: true },
      { d: kutu(94, 60, 44, 10), w: 1.6, dolgu: true },
      ...[
        [106, 120],
        [118, 128],
        [126, 114],
        [110, 136],
        [124, 138],
        [114, 106],
      ].map(([x, y]) => ({
        d: `M${x - 5} ${y} Q${x} ${y - 6} ${x + 5} ${y} Q${x} ${y + 6} ${x - 5} ${y} Z`,
        w: 1.1,
        dolgu: true,
      })),
    ],
  },
  "mikro-yesillik": {
    taramalar: [{ id: "t", sinir: kutu(14, 110, 132, 20), kutu: [14, 110, 132, 20], aralik: 4 }],
    cizgiler: [
      { d: kutu(14, 110, 132, 20), w: 2, dolgu: true },
      {
        d: Array.from({ length: 14 }, (_, i) => {
          const x = 22 + i * 9;
          return `M${x} 110 L${x} ${88 - (i % 3) * 4} M${x} ${88 - (i % 3) * 4} q-6 -4 -8 2 M${x} ${88 - (i % 3) * 4} q6 -4 8 2`;
        }).join(" "),
        w: 1.1,
      },
      { d: "M120 30 L150 60 M128 26 L154 54", w: 1.4 },
      { d: daire(118, 28, 5) + daire(126, 22, 5), w: 1.2 },
    ],
  },
  "cilek-kulesi": {
    taramalar: [{ id: "k", sinir: "M50 20 L110 20 L104 150 L56 150 Z", kutu: [50, 20, 60, 130], aralik: 6 }],
    cizgiler: [
      { d: "M50 20 L110 20 L104 150 L56 150 Z", w: 2.2, dolgu: true },
      ...[
        [58, 46],
        [102, 70],
        [60, 96],
        [100, 120],
      ].map(([x, y]) => ({
        d: `${daire(x, y, 7)} M${x < 80 ? x - 6 : x + 6} ${y} q${x < 80 ? -12 : 12} -6 ${x < 80 ? -16 : 16} 4 M${x < 80 ? x - 18 : x + 18} ${y + 6} Q${x < 80 ? x - 24 : x + 24} ${y + 16} ${x < 80 ? x - 16 : x + 16} ${y + 18} Q${x < 80 ? x - 12 : x + 12} ${y + 10} ${x < 80 ? x - 18 : x + 18} ${y + 6} Z`,
        w: 1.3,
        dolgu: true,
      })),
      { d: fide(80, 20, 18), w: 1.3 },
      { d: "M80 22 L80 146", w: 0.8, kesik: true },
    ],
  },
  "celikle-cogaltma": {
    taramalar: [{ id: "s", sinir: saksi(112, 110, 50, 40), kutu: [87, 110, 50, 40], aralik: 4 }],
    cizgiler: [
      { d: "M20 20 Q40 50 50 90 M34 40 q-12 0 -14 -8 M40 56 q12 -2 14 -10 M46 72 q-12 0 -14 -8", w: 1.6 },
      { d: "M44 84 L60 92", w: 1, kesik: true },
      { d: "M60 80 L76 60 M64 84 L80 66", w: 1.4 },
      { d: daire(80, 58, 4) + daire(84, 64, 4), w: 1.2 },
      { d: saksi(112, 110, 50, 40), w: 2, dolgu: true },
      { d: "M112 110 L112 70 M112 82 q-12 -4 -14 -12 M112 76 q12 -4 14 -12", w: 1.4 },
      { d: "M96 70 Q112 50 128 70 L128 108 L96 108 Z", w: 1, kesik: true },
    ],
  },
  "dogal-yaprak-biti": {
    cizgiler: [
      {
        d: "M100 140 Q90 100 110 60 M104 110 Q80 96 70 104 Q84 116 104 110 M106 86 Q130 70 140 80 Q126 94 106 86 M110 60 Q96 40 104 30 Q114 42 110 60",
        w: 1.6,
        dolgu: true,
      },
      {
        d: daire(84, 104, 2) + daire(90, 106, 2) + daire(78, 102, 1.6) + daire(124, 82, 2) + daire(130, 80, 1.6),
        w: 1,
        dolgu: true,
      },
      { d: "M14 40 L40 40 L40 60 L46 66 L46 120 Q46 126 40 126 L20 126 Q14 126 14 120 Z", w: 2, dolgu: true },
      { d: "M14 40 L14 30 L36 30 L44 22 L52 22", w: 1.6 },
      { d: "M54 22 L70 16 M54 22 L72 24 M54 22 L68 32", w: 1, kesik: true },
    ],
  },
  "balkon-otlari": {
    taramalar: [{ id: "s", sinir: "M10 100 L150 100 L144 140 L16 140 Z", kutu: [10, 100, 140, 40], aralik: 4 }],
    cizgiler: [
      { d: "M10 100 L150 100 L144 140 L16 140 Z", w: 2.2, dolgu: true },
      {
        d: "M30 100 L30 60 M30 70 q-10 -6 -12 -14 q8 0 12 8 M30 62 q10 -6 12 -14 q-8 0 -12 8 M30 82 q-10 -4 -12 -10",
        w: 1.3,
      },
      { d: "M66 100 Q62 80 66 64 M66 80 q-8 -10 -4 -16 M66 72 q8 -10 4 -16 M74 100 Q78 84 84 74", w: 1.3 },
      { d: "M106 100 L106 70 M100 92 L112 92 M98 84 L114 84 M100 76 L112 76", w: 1.2 },
      { d: "M134 100 L134 62 M128 70 Q134 58 140 70 Z M128 84 Q134 72 140 84 Z", w: 1.3, dolgu: true },
      { d: "M4 150 L156 150 M10 140 L10 150 M150 140 L150 150", w: 1.4 },
    ],
  },
  "aski-sepet": {
    taramalar: [{ id: "s", sinir: "M30 80 Q30 130 80 130 Q130 130 130 80 Z", kutu: [30, 80, 100, 50], aralik: 5 }],
    cizgiler: [
      { d: "M80 6 L30 80 M80 6 L130 80 M80 6 L80 80", w: 1.2 },
      { d: daire(80, 6, 4), w: 1.4 },
      { d: "M30 80 Q30 130 80 130 Q130 130 130 80 Z", w: 2, dolgu: true },
      { d: daire(80, 80, 50, 8), w: 1.6 },
      { d: "M40 90 Q30 110 34 134 M120 90 Q132 110 126 136 M60 120 Q54 136 58 150 M100 120 Q108 136 104 150", w: 1.2 },
      {
        d:
          daire(34, 138, 5) +
          daire(126, 140, 5) +
          daire(58, 152, 4) +
          daire(104, 152, 4) +
          daire(66, 74, 6) +
          daire(96, 72, 6),
        w: 1.3,
        dolgu: true,
      },
    ],
  },
  "toprak-ph": {
    taramalar: [{ id: "t", sinir: kutu(30, 100, 26, 30), kutu: [30, 100, 26, 30], aralik: 3, sonra: 0 }],
    cizgiler: [
      { d: "M30 70 L56 70 L56 130 Q43 140 30 130 Z", w: 2, dolgu: true },
      { d: "M30 100 L56 100", w: 1 },
      { d: kutu(70, 40, 76, 90), w: 1.8, dolgu: true },
      { d: kutu(78, 50, 14, 14) + kutu(96, 50, 14, 14) + kutu(114, 50, 14, 14) + kutu(132, 50, 10, 14), w: 1 },
      { d: "M80 80 L140 80 M80 92 L130 92 M80 104 L136 104 M80 116 L120 116", w: 0.8 },
      { d: "M14 140 L60 140", w: 1.4 },
      { d: "M24 30 L40 50 M34 26 L48 46 L44 52 L28 34", w: 1.4 },
    ],
  },
  "beton-saksi": {
    taramalar: [{ id: "b", sinir: "M30 60 L130 60 L120 140 L40 140 Z", kutu: [30, 60, 100, 80], aralik: 7, sonra: 0 }],
    cizgiler: [
      { d: "M30 60 L130 60 L120 140 L40 140 Z", w: 2.4, dolgu: true },
      { d: "M48 60 L112 60 L106 118 L54 118 Z", w: 1.6, dolgu: true },
      { d: daire(80, 60, 50, 6), w: 1.2 },
      { d: daire(52, 90, 1.4) + daire(100, 124, 1.2) + daire(118, 82, 1.4) + daire(66, 130, 1.2), w: 1 },
      { d: "M80 58 Q70 34 56 30 M80 58 Q82 30 96 22 M80 58 Q96 40 112 42", w: 1.4 },
      { d: "M56 30 q-4 8 4 10 M96 22 q6 6 0 12 M112 42 q-6 6 -10 0", w: 1.1 },
    ],
  },
  "mini-sera": {
    cizgiler: [
      { d: "M4 130 L156 130", w: 1.6 },
      ...[36, 80, 124].map((x) => ({
        d: `M${x - 18} 130 L${x - 18} 70 Q${x - 18} 56 ${x - 8} 50 L${x - 6} 34 L${x + 6} 34 L${x + 8} 50 Q${x + 18} 56 ${x + 18} 70 L${x + 18} 130`,
        w: 1.8,
      })),
      { d: kutu(28, 26, 16, 8) + kutu(116, 26, 16, 8), w: 1.4, dolgu: true },
      { d: fide(36, 130, 30) + " " + fide(80, 130, 36) + " " + fide(124, 130, 28), w: 1.3 },
      { d: "M86 36 L92 22 M74 36 L68 22", w: 1, kesik: true },
    ],
  },
  "gul-budama": {
    cizgiler: [
      { d: "M80 150 L80 100 M80 110 Q60 90 50 60 M80 104 Q100 84 112 56 M80 120 Q104 110 124 100", w: 2 },
      { d: "M50 60 L44 50 M112 56 L118 46 M124 100 L134 96", w: 1.6 },
      { d: "M66 82 L62 80 M94 78 L98 76 M104 108 L108 104", w: 1.2 },
      { d: "M50 60 m-8 -4 q8 -14 16 0", w: 1, kesik: true },
      { d: daire(118, 40, 8), w: 1.4, dolgu: true },
      { d: "M114 38 Q118 34 122 38 Q118 42 114 38", w: 1 },
      { d: "M20 30 L60 54 M24 22 L62 48", w: 1.8 },
      { d: daire(16, 30, 6) + daire(20, 20, 6), w: 1.4 },
      { d: "M40 150 L120 150", w: 1.4 },
    ],
  },
};
