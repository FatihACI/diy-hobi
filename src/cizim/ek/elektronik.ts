import { Cizim, daire, kutu } from "../arac";

// Arduino kartı: sol üst köşe (x,y), 70×50
const kart = (x: number, y: number) =>
  kutu(x, y, 70, 50) +
  " " +
  kutu(x + 6, y + 4, 44, 5) +
  " " +
  kutu(x + 20, y + 41, 40, 5) +
  " " +
  kutu(x - 6, y + 10, 12, 12) +
  " " +
  kutu(x + 30, y + 18, 22, 10);
// LED: tepe (x,y)
const led = (x: number, y: number) =>
  `M${x - 6} ${y + 14} L${x - 6} ${y + 6} Q${x - 6} ${y} ${x} ${y} Q${x + 6} ${y} ${x + 6} ${y + 6} L${x + 6} ${y + 14} Z M${x - 8} ${y + 14} L${x + 8} ${y + 14} M${x - 3} ${y + 14} L${x - 3} ${y + 26} M${x + 3} ${y + 14} L${x + 3} ${y + 22}`;
const isin = (x: number, y: number) =>
  `M${x - 14} ${y - 4} L${x - 20} ${y - 8} M${x} ${y - 10} L${x} ${y - 16} M${x + 14} ${y - 4} L${x + 20} ${y - 8}`;
// Kablo: iki nokta arasında hafif kavis
const kablo = (x1: number, y1: number, x2: number, y2: number) =>
  `M${x1} ${y1} Q${(x1 + x2) / 2} ${Math.max(y1, y2) + 14} ${x2} ${y2}`;
const buton = (x: number, y: number) => kutu(x - 8, y - 8, 16, 16) + " " + daire(x, y, 5);

// Elektronik ek projelerinin çizimleri (viewBox 0 0 160 160)
export const ELEKTRONIK_CIZIM: Record<string, Cizim> = {
  "led-yanip-sonme": {
    taramalar: [{ id: "k", sinir: kutu(14, 90, 70, 50), kutu: [14, 90, 70, 50], aralik: 6 }],
    cizgiler: [
      { d: kart(14, 90), w: 1.8, dolgu: true },
      { d: led(116, 40), w: 2, dolgu: true },
      { d: isin(116, 40), w: 1.2, kesik: true },
      { d: kablo(113, 66, 40, 94) + " " + kablo(119, 62, 60, 94), w: 1.2 },
    ],
  },
  "butonlu-led": {
    taramalar: [{ id: "k", sinir: kutu(14, 96, 70, 50), kutu: [14, 96, 70, 50], aralik: 6 }],
    cizgiler: [
      { d: kart(14, 96), w: 1.8, dolgu: true },
      { d: buton(50, 40), w: 2, dolgu: true },
      { d: led(116, 30), w: 2, dolgu: true },
      { d: isin(116, 30), w: 1.2, kesik: true },
      { d: kablo(50, 48, 40, 100) + " " + kablo(116, 56, 64, 100), w: 1.2 },
      { d: "M40 24 L46 30 M60 24 L54 30", w: 1 },
    ],
  },
  "pot-led-parlaklik": {
    cizgiler: [
      { d: daire(50, 70, 26), w: 2.2, dolgu: true },
      { d: daire(50, 70, 10), w: 1.6 },
      { d: "M50 70 L66 52", w: 2 },
      { d: "M36 96 L36 116 M50 96 L50 116 M64 96 L64 116", w: 1.6 },
      { d: "M30 46 A30 30 0 0 1 76 50", w: 1, kesik: true },
      { d: led(116, 50), w: 2, dolgu: true },
      { d: isin(116, 50) + " M96 40 L88 34 M136 40 L144 34", w: 1.2 },
    ],
  },
  "ldr-gece-lambasi": {
    cizgiler: [
      { d: daire(110, 40, 18), w: 1.6 },
      { d: "M110 22 Q96 40 110 58 Q90 54 90 40 Q90 26 110 22 Z", w: 1.6, dolgu: true },
      { d: "M40 130 L40 70 Q40 50 60 50 Q80 50 80 70 L80 130 Z", w: 2.2, dolgu: true },
      { d: kutu(36, 130, 48, 10), w: 2, dolgu: true },
      { d: led(60, 76), w: 1.8 },
      { d: daire(112, 116, 12), w: 2, dolgu: true },
      { d: "M104 110 Q108 116 104 122 M112 108 Q116 116 112 124 M120 110 Q124 116 120 122", w: 1 },
      { d: "M106 128 L106 146 M118 128 L118 146", w: 1.4 },
    ],
  },
  "servo-kontrol": {
    taramalar: [{ id: "s", sinir: kutu(40, 70, 80, 40), kutu: [40, 70, 80, 40], aralik: 5 }],
    cizgiler: [
      { d: kutu(40, 70, 80, 40), w: 2.2, dolgu: true },
      { d: "M30 80 L40 80 L40 100 L30 100 Z M120 80 L130 80 L130 100 L120 100 Z", w: 1.6 },
      { d: daire(64, 70, 10, 4), w: 1.8, dolgu: true },
      { d: "M64 66 L116 36 L120 42 L66 74", w: 2, dolgu: true },
      { d: "M90 30 A40 40 0 0 1 112 64", w: 1, kesik: true },
      { d: "M80 110 Q84 130 70 146", w: 1.4 },
    ],
  },
  "rgb-led-renk": {
    taramalar: [{ id: "l", sinir: daire(80, 66, 30), kutu: [50, 36, 60, 60], aralik: 7 }],
    cizgiler: [
      { d: daire(80, 66, 30), w: 2.2, dolgu: true },
      { d: "M62 96 L98 96", w: 2 },
      { d: "M68 96 L68 140 M76 96 L76 148 M84 96 L84 140 M92 96 L92 136", w: 1.6 },
      { d: "M40 40 L28 30 M120 40 L132 30 M80 26 L80 12 M36 70 L22 70 M124 70 L138 70", w: 1.2, kesik: true },
    ],
  },
  "buzzer-melodi": {
    cizgiler: [
      { d: daire(60, 90, 30), w: 2.2, dolgu: true },
      { d: daire(60, 90, 6), w: 1.6, dolgu: true },
      { d: daire(60, 90, 18), w: 0.8 },
      { d: "M52 120 L52 140 M68 120 L68 136", w: 1.6 },
      { d: "M100 50 L100 22 L124 16 L124 44 M100 22 L124 16", w: 2 },
      { d: daire(94, 50, 6, 5) + " " + daire(118, 44, 6, 5), w: 1.8, dolgu: true },
      { d: "M96 80 Q104 90 96 100 M106 72 Q118 90 106 108", w: 1.2 },
    ],
  },
  "reaksiyon-oyunu": {
    cizgiler: [
      { d: daire(80, 50, 30), w: 2 },
      { d: "M80 50 L80 28 M80 50 L96 58", w: 2 },
      { d: kutu(74, 14, 12, 6), w: 1.6 },
      { d: buton(50, 120), w: 2, dolgu: true },
      { d: led(116, 104), w: 2, dolgu: true },
      { d: isin(116, 104), w: 1.2, kesik: true },
      { d: "M50 98 L56 108 M40 102 L46 110", w: 1 },
    ],
  },
  "hareket-alarmi": {
    taramalar: [{ id: "p", sinir: kutu(30, 70, 44, 30), kutu: [30, 70, 44, 30], aralik: 4 }],
    cizgiler: [
      { d: kutu(30, 70, 44, 30), w: 2, dolgu: true },
      { d: "M34 70 Q52 34 70 70 Z", w: 2, dolgu: true },
      { d: "M40 60 L64 60 M38 52 L66 52", w: 0.8 },
      { d: "M82 50 Q96 70 82 90 M94 40 Q114 70 94 100 M106 30 Q132 70 106 110", w: 1.2, kesik: true },
      { d: daire(130, 120, 10) + " M126 116 L134 124 M134 116 L126 124", w: 1.6 },
      { d: "M120 140 L130 130 L140 140", w: 1.6 },
    ],
  },
  "lcd-sicaklik": {
    taramalar: [{ id: "e", sinir: kutu(28, 36, 104, 38), kutu: [28, 36, 104, 38], aralik: 8 }],
    cizgiler: [
      { d: kutu(16, 26, 128, 60), w: 2.2, dolgu: true },
      { d: kutu(28, 36, 104, 38), w: 1.6 },
      { d: "M36 46 L44 46 M40 46 L40 56 M50 46 L50 56 L58 56 M36 64 L46 64 M52 64 L60 64", w: 1.4 },
      { d: kutu(60, 110, 40, 34), w: 2, dolgu: true },
      { d: Array.from({ length: 4 }, (_, i) => `M64 ${116 + i * 7} L96 ${116 + i * 7}`).join(" "), w: 0.8 },
      { d: "M70 144 L70 154 M80 144 L80 154 M90 144 L90 154", w: 1.4 },
      { d: kablo(80, 86, 80, 110), w: 1, kesik: true },
    ],
  },
  "su-seviye-alarmi": {
    taramalar: [{ id: "s", sinir: "M20 116 L140 116 L140 140 L20 140 Z", kutu: [20, 116, 120, 24], aralik: 4 }],
    cizgiler: [
      { d: "M20 116 Q40 110 60 116 Q80 122 100 116 Q120 110 140 116", w: 1.6 },
      { d: kutu(64, 50, 32, 80), w: 2, dolgu: true },
      { d: Array.from({ length: 5 }, (_, i) => `M${70 + i * 5} 70 L${70 + i * 5} 124`).join(" "), w: 0.9 },
      { d: "M72 50 L72 30 M80 50 L80 26 M88 50 L88 30", w: 1.4 },
      { d: "M120 40 L132 28 M124 54 L140 50 M110 30 L114 16", w: 1.2, kesik: true },
    ],
  },
  "akilli-saksi-pompa": {
    taramalar: [{ id: "t", sinir: "M20 100 L80 100 L74 146 L26 146 Z", kutu: [20, 100, 60, 46], aralik: 4 }],
    cizgiler: [
      { d: "M20 100 L80 100 L74 146 L26 146 Z", w: 2.2, dolgu: true },
      { d: "M50 100 Q36 70 46 52 Q54 72 50 100 M50 100 Q64 64 76 58 Q72 80 50 100", w: 1.6, dolgu: true },
      { d: "M36 100 L36 126 L42 126 L42 100", w: 1.6 },
      { d: "M106 80 L106 146 L146 146 L146 80", w: 2, dolgu: true },
      { d: "M106 100 Q126 94 146 100", w: 1 },
      { d: kutu(118, 124, 16, 14), w: 1.6, dolgu: true },
      { d: "M126 124 L126 60 Q126 44 96 44 Q70 44 64 64", w: 1.6 },
      { d: "M62 72 L60 80 M66 74 L66 82", w: 1, kesik: true },
    ],
  },
  "elektronik-zar": {
    cizgiler: [
      { d: kutu(44, 44, 72, 72), w: 2.4, dolgu: true },
      { d: kutu(50, 50, 60, 60), w: 0.8 },
      {
        d: [
          [60, 60],
          [100, 60],
          [80, 80],
          [60, 100],
          [100, 100],
        ]
          .map(([x, y]) => daire(x, y, 7))
          .join(" "),
        w: 1.8,
        dolgu: true,
      },
      { d: buton(80, 140), w: 1.8 },
      { d: "M30 30 L36 36 M130 30 L124 36", w: 1, kesik: true },
    ],
    noktalar: [
      [80, 80, 3],
      [60, 60, 3],
      [100, 60, 3],
      [60, 100, 3],
      [100, 100, 3],
    ],
  },
  "sicaklik-fan": {
    cizgiler: [
      { d: kutu(20, 30, 90, 90), w: 2.2, dolgu: true },
      { d: daire(65, 75, 38), w: 1.4 },
      { d: daire(65, 75, 8), w: 1.8, dolgu: true },
      {
        d: "M65 67 Q60 44 76 42 Q78 60 71 70 M73 75 Q96 70 98 86 Q80 88 70 81 M65 83 Q70 106 54 108 Q52 90 59 80 M57 75 Q34 80 32 64 Q50 62 60 69",
        w: 1.6,
      },
      { d: "M130 40 L130 116 M126 40 Q126 34 130 34 Q134 34 134 40 L134 116", w: 1.6 },
      { d: daire(130, 124, 9), w: 1.8, dolgu: true },
      { d: "M138 60 L144 60 M138 76 L144 76 M138 92 L144 92", w: 1 },
    ],
  },
  "kapi-alarmi": {
    taramalar: [{ id: "k", sinir: kutu(20, 20, 70, 130), kutu: [20, 20, 70, 130], aralik: 8 }],
    cizgiler: [
      { d: kutu(20, 20, 70, 130), w: 2.2, dolgu: true },
      { d: daire(76, 90, 4), w: 1.6 },
      { d: kutu(92, 60, 10, 30), w: 1.8, dolgu: true },
      { d: kutu(108, 60, 10, 30), w: 1.8, dolgu: true },
      { d: "M90 20 L140 20 L140 150", w: 1.2 },
      { d: "M124 70 Q132 75 124 80 M128 64 Q140 75 128 86", w: 1.2, kesik: true },
    ],
  },
  "lehim-baslangic": {
    taramalar: [{ id: "p", sinir: kutu(20, 100, 120, 44), kutu: [20, 100, 120, 44], aralik: 5 }],
    cizgiler: [
      { d: kutu(20, 100, 120, 44), w: 2, dolgu: true },
      {
        d: Array.from({ length: 5 }, (_, i) => daire(40 + i * 20, 122, 4)).join(" "),
        w: 1.2,
      },
      { d: "M60 122 L60 100 M80 122 L80 100", w: 1.4 },
      { d: kutu(54, 86, 32, 14), w: 1.6, dolgu: true },
      { d: "M100 118 L132 40 L140 44 L106 122 Z M132 40 L148 8", w: 2, dolgu: true },
      { d: "M100 118 L98 124", w: 1.4 },
      { d: "M40 60 Q44 50 38 40 Q34 30 40 20 M54 60 Q58 50 52 40", w: 1, kesik: true },
    ],
  },
};
