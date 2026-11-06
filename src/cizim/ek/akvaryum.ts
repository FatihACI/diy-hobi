import { Cizim, daire, dalga, kutu } from "../arac";

// Akvaryum gövdesi: cam, su çizgisi, zemin
const tank = (x: number, y: number, w: number, h: number) =>
  `M${x} ${y} L${x + w} ${y} L${x + w} ${y + h} L${x} ${y + h} Z`;
const balik = (x: number, y: number, s = 1) =>
  `M${x} ${y} Q${x - 10 * s} ${y - 7 * s} ${x - 22 * s} ${y} Q${x - 10 * s} ${y + 7 * s} ${x} ${y} Z M${x - 22 * s} ${y} L${x - 28 * s} ${y - 5 * s} L${x - 28 * s} ${y + 5 * s} Z`;
const zemin = (x: number, y: number, w: number) =>
  `M${x} ${y} Q${x + w / 4} ${y - 4} ${x + w / 2} ${y} T${x + w} ${y - 2}`;

// Akvaryum ek projelerinin çizimleri (viewBox 0 0 160 160)
export const AKVARYUM_CIZIM: Record<string, Cizim> = {
  "su-degisimi": {
    taramalar: [{ id: "k", sinir: "M100 110 L148 110 L142 150 L106 150 Z", kutu: [100, 120, 48, 30], aralik: 4 }],
    cizgiler: [
      { d: tank(10, 30, 90, 80), w: 2, dolgu: true },
      { d: dalga(10, 42, 7, 13), w: 1 },
      { d: zemin(10, 100, 90), w: 1.2 },
      { d: "M40 100 L40 80 L46 70 L46 20 Q46 6 70 6 Q110 6 118 40 L122 112", w: 1.6 },
      { d: "M36 100 L44 100 L46 80 L40 80 Z", w: 1.4, dolgu: true },
      { d: "M100 110 L148 110 L142 150 L106 150 Z", w: 1.8, dolgu: true },
      { d: balik(84, 66, 0.9), w: 1.2, dolgu: true },
    ],
  },
  "karides-akvaryumu": {
    cizgiler: [
      { d: tank(14, 30, 132, 100), w: 2 },
      { d: dalga(14, 42, 10, 13.2), w: 1 },
      { d: zemin(14, 118, 132), w: 1.2 },
      { d: "M40 118 Q34 90 44 70 M40 100 q-8 -2 -10 -10 M42 86 q8 -2 10 -10", w: 1.2 },
      { d: "M70 96 Q84 84 100 92 Q106 98 100 104 Q86 108 74 104 Z", w: 1.6, dolgu: true },
      { d: "M100 92 Q116 76 128 82 M100 94 Q118 86 132 92", w: 1 },
      { d: "M74 104 L66 112 M80 106 L76 114 M86 106 L86 114 M92 106 L94 114", w: 1 },
      { d: "M70 98 L60 92 L62 102", w: 1.1 },
      { d: kutu(110, 56, 14, 40), w: 1.4, dolgu: true },
      { d: "M110 64 L124 64 M110 72 L124 72 M110 80 L124 80 M110 88 L124 88", w: 0.6 },
    ],
    noktalar: [[96, 94, 1.4]],
  },
  "betta-akvaryumu": {
    taramalar: [
      {
        id: "f",
        sinir: "M84 70 Q100 50 112 54 Q116 74 104 96 Q92 100 84 84 Z",
        kutu: [84, 50, 32, 50],
        aralik: 3,
        sonra: 4,
      },
    ],
    cizgiler: [
      { d: tank(14, 30, 132, 100), w: 2 },
      { d: dalga(14, 42, 10, 13.2), w: 1 },
      { d: zemin(14, 118, 132), w: 1.2 },
      { d: "M60 76 Q72 66 84 74 Q72 84 60 76 Z", w: 1.6, dolgu: true },
      { d: "M84 70 Q100 50 112 54 Q116 74 104 96 Q92 100 84 84 Z", w: 1.6, dolgu: true },
      { d: "M66 72 Q70 60 80 64 M66 80 Q70 92 80 88", w: 1.1 },
      { d: kutu(124, 50, 8, 50), w: 1.4, dolgu: true },
      { d: "M30 44 Q40 52 54 44 M40 44 L40 52", w: 1.2 },
      { d: "M30 118 Q26 96 34 80 M34 80 q-8 2 -10 8 M30 100 q8 0 10 -8", w: 1.2 },
    ],
    noktalar: [[64, 75, 1.2]],
  },
  "su-testi": {
    taramalar: [
      { id: "a", sinir: kutu(20, 70, 14, 50), kutu: [20, 94, 14, 26], aralik: 2.5 },
      { id: "c", sinir: kutu(68, 70, 14, 50), kutu: [68, 84, 14, 36], aralik: 2.5, ters: true },
    ],
    cizgiler: [
      {
        d: "M20 70 L34 70 L34 118 Q27 126 20 118 Z M44 70 L58 70 L58 118 Q51 126 44 118 Z M68 70 L82 70 L82 118 Q75 126 68 118 Z",
        w: 1.8,
        dolgu: true,
      },
      { d: "M14 70 L88 70", w: 1.4 },
      { d: kutu(98, 40, 50, 80), w: 1.8, dolgu: true },
      {
        d:
          daire(110, 56, 6) +
          daire(126, 56, 6) +
          daire(140, 56, 4) +
          daire(110, 78, 6) +
          daire(126, 78, 6) +
          daire(110, 100, 6) +
          daire(126, 100, 6),
        w: 1.2,
      },
      { d: "M44 40 L52 40 L52 56 L48 62 L44 56 Z", w: 1.4, dolgu: true },
      { d: "M48 64 Q46 68 48 70", w: 1 },
    ],
  },
  "yosun-kontrol": {
    taramalar: [{ id: "y", sinir: tank(14, 30, 132, 100), kutu: [14, 30, 66, 100], aralik: 3 }],
    cizgiler: [
      { d: tank(14, 30, 132, 100), w: 2 },
      { d: "M80 30 L80 130", w: 0.8, kesik: true },
      { d: zemin(14, 118, 132), w: 1.2 },
      { d: "M110 118 Q104 90 114 60 M114 60 q-8 4 -8 12 M108 90 q8 -2 10 -10 M124 118 Q130 90 124 70", w: 1.3 },
      { d: "M84 20 L130 64", w: 2.2 },
      { d: "M78 14 L92 28 L86 34 L72 20 Z", w: 1.4, dolgu: true },
      { d: daire(146, 14, 8), w: 1.4 },
      { d: "M146 8 L146 14 L150 16", w: 1 },
    ],
  },
  iwagumi: {
    taramalar: [{ id: "a", sinir: "M40 116 L54 66 L76 58 L84 116 Z", kutu: [40, 58, 44, 58], aralik: 3, sonra: 3 }],
    cizgiler: [
      { d: tank(10, 30, 140, 100), w: 2 },
      { d: dalga(10, 40, 10, 14), w: 1 },
      { d: "M10 118 Q60 108 100 114 T150 112", w: 1.4 },
      { d: "M40 116 L54 66 L76 58 L84 116 Z", w: 1.8, dolgu: true },
      {
        d: "M90 116 L98 86 L112 82 L118 116 Z M120 116 L124 98 L134 98 L136 116 Z M24 116 L28 104 L36 106 L38 116 Z",
        w: 1.6,
        dolgu: true,
      },
      { d: "M54 66 L66 90 L76 58 M98 86 L106 104", w: 0.8 },
      { d: "M14 116 q4 -6 8 0 q4 -6 8 0 M86 116 q4 -6 8 0 M136 116 q4 -6 8 0", w: 1 },
    ],
  },
  "akvaryum-kapak": {
    taramalar: [{ id: "l", sinir: kutu(30, 22, 100, 8), kutu: [30, 22, 100, 8], aralik: 2.5, sonra: 1 }],
    cizgiler: [
      { d: "M14 40 L34 22 L146 22 L126 40 Z", w: 1.8, dolgu: true },
      { d: kutu(30, 22, 100, 8), w: 1.6, dolgu: true },
      { d: tank(14, 40, 112, 90), w: 2 },
      { d: "M126 40 L146 22 L146 112 L126 130", w: 1.4 },
      { d: "M40 44 L30 72 M70 44 L66 76 M100 44 L104 76", w: 0.9, kesik: true },
      { d: dalga(14, 56, 9, 12.4), w: 1 },
      { d: balik(86, 92), w: 1.3, dolgu: true },
      { d: "M146 30 Q156 50 150 80 Q146 90 152 96", w: 1.2 },
    ],
  },
  "yavru-kutusu": {
    taramalar: [{ id: "f", sinir: kutu(60, 46, 50, 40), kutu: [60, 46, 50, 40], aralik: 4, sonra: 1 }],
    cizgiler: [
      { d: tank(10, 30, 140, 100), w: 2 },
      { d: kutu(60, 46, 50, 40), w: 1.8, dolgu: true },
      { d: "M60 46 L60 30 M110 46 L110 30", w: 1.4 },
      { d: dalga(10, 40, 11, 12.8), w: 1 },
      { d: balik(84, 62, 0.35) + " " + balik(100, 72, 0.35) + " " + balik(80, 78, 0.3), w: 1, dolgu: true },
      { d: balik(54, 110, 1), w: 1.4, dolgu: true },
      { d: zemin(10, 122, 140), w: 1.1 },
    ],
  },
  "dis-filtre-bakimi": {
    taramalar: [{ id: "s", sinir: kutu(30, 80, 50, 60), kutu: [30, 80, 50, 60], aralik: 5, sonra: 1 }],
    cizgiler: [
      { d: "M30 80 L30 140 Q30 146 36 146 L74 146 Q80 146 80 140 L80 80", w: 2, dolgu: true },
      { d: kutu(30, 80, 50, 60), w: 0.1 },
      { d: kutu(24, 66, 62, 14), w: 1.8, dolgu: true },
      { d: "M40 66 L40 30 Q40 20 54 20 L110 20 M70 66 L70 40 Q70 32 80 32 L120 32", w: 1.6 },
      { d: kutu(100, 70, 50, 60), w: 1.6 },
      { d: "M110 86 Q118 80 126 86 Q118 92 110 86 Z M118 100 Q126 94 134 100 Q126 106 118 100 Z", w: 1.4 },
      { d: "M100 80 L150 80", w: 0.9 },
    ],
  },
  artemia: {
    taramalar: [{ id: "s", sinir: "M56 70 L104 70 L104 120 Q80 150 56 120 Z", kutu: [56, 90, 48, 50], aralik: 4 }],
    cizgiler: [
      { d: "M56 30 L104 30 L104 120 Q80 150 56 120 Z", w: 2, dolgu: true },
      { d: "M56 70 L104 70", w: 1 },
      { d: "M80 10 L80 136", w: 1.2 },
      { d: daire(78, 120, 2) + daire(84, 104, 2) + daire(76, 92, 1.6) + daire(84, 80, 1.6), w: 1 },
      { d: "M120 20 L140 20 L130 4 Z M130 20 L130 40", w: 1.4, dolgu: true },
      { d: "M118 44 L104 54 M130 46 L118 64 M142 44 L132 60", w: 1, kesik: true },
      { d: "M64 100 q3 -2 6 0 M88 112 q3 -2 6 0 M92 92 q3 -2 6 0", w: 1.2 },
    ],
  },
  "yosun-duvari": {
    taramalar: [{ id: "y", sinir: kutu(20, 40, 120, 70), kutu: [20, 40, 120, 70], aralik: 5, sonra: 1 }],
    cizgiler: [
      { d: tank(10, 30, 140, 100), w: 2 },
      { d: kutu(20, 40, 120, 70), w: 1.6, dolgu: true },
      {
        d: "M20 54 L140 54 M20 68 L140 68 M20 82 L140 82 M20 96 L140 96 M44 40 L44 110 M68 40 L68 110 M92 40 L92 110 M116 40 L116 110",
        w: 0.7,
      },
      {
        d: "M24 50 q4 -6 8 0 q4 -6 8 0 M60 64 q4 -6 8 0 q4 -6 8 0 M100 78 q4 -6 8 0 M40 92 q4 -6 8 0 q4 -6 8 0 M110 104 q4 -6 8 0",
        w: 1.1,
      },
      { d: zemin(10, 122, 140), w: 1.1 },
      { d: balik(110, 118, 0.8), w: 1.2, dolgu: true },
    ],
  },
  "tatil-yemligi": {
    taramalar: [{ id: "y", sinir: kutu(50, 14, 40, 30), kutu: [50, 14, 40, 30], aralik: 3, sonra: 1 }],
    cizgiler: [
      { d: tank(10, 50, 140, 90), w: 2 },
      { d: kutu(50, 14, 40, 30), w: 1.8, dolgu: true },
      { d: kutu(54, 44, 32, 10), w: 1.6, dolgu: true },
      { d: daire(110, 28, 12), w: 1.6 },
      { d: "M110 28 L110 20 M110 28 L116 32", w: 1.2 },
      { d: daire(66, 62, 1.6) + daire(72, 66, 1.6) + daire(64, 72, 1.6) + daire(74, 76, 1.6), w: 1 },
      { d: dalga(10, 60, 11, 12.8), w: 1 },
      { d: balik(80, 100) + " " + balik(124, 116, 0.8), w: 1.3, dolgu: true },
    ],
  },
  "akvaryum-sehpasi": {
    taramalar: [{ id: "s", sinir: kutu(14, 80, 132, 12), kutu: [14, 80, 132, 12], aralik: 3, sonra: 1 }],
    cizgiler: [
      { d: tank(24, 20, 112, 60), w: 2 },
      { d: kutu(14, 80, 132, 12), w: 2, dolgu: true },
      { d: "M20 92 L20 150 M140 92 L140 150 M80 92 L80 150 M20 146 L140 146 M20 120 L140 120", w: 2.2 },
      { d: "M20 92 L44 120 M140 92 L116 120", w: 1.2 },
      { d: dalga(24, 30, 9, 12.4), w: 1 },
      { d: balik(90, 56), w: 1.2, dolgu: true },
      { d: "M150 100 L156 100 M153 100 L153 140 M150 140 L156 140", w: 1, kesik: true },
    ],
  },
  paludaryum: {
    taramalar: [{ id: "k", sinir: "M80 70 L146 70 L146 130 L80 130 Z", kutu: [80, 70, 66, 60], aralik: 5, sonra: 2 }],
    cizgiler: [
      { d: tank(14, 30, 132, 100), w: 2 },
      { d: dalga(14, 94, 5, 13.2), w: 1 },
      { d: "M80 70 L146 70 L146 130 L80 130 Z", w: 1.8, dolgu: true },
      { d: "M80 70 Q76 82 82 94", w: 1.2 },
      { d: "M86 70 L86 54 M100 70 Q96 50 106 40 M106 40 q8 2 8 10 M120 70 Q124 52 134 48", w: 1.3 },
      { d: "M96 70 Q90 76 86 92 M98 72 Q94 82 92 96", w: 1, kesik: true },
      { d: balik(54, 112, 0.8), w: 1.2, dolgu: true },
      { d: "M30 130 Q26 110 36 98", w: 1.2 },
    ],
  },
  "bitki-budama": {
    cizgiler: [
      { d: tank(10, 30, 140, 100), w: 1.6 },
      { d: zemin(10, 120, 140), w: 1.2 },
      { d: "M50 120 L50 40 M70 120 L72 50 M90 120 L88 60", w: 1.4 },
      {
        d: "M50 50 q-8 -2 -10 -8 M50 50 q8 -2 10 -8 M50 70 q-8 -2 -10 -8 M50 70 q8 -2 10 -8 M72 64 q-8 -2 -10 -8 M72 64 q8 -2 10 -8 M88 74 q8 -2 10 -8 M88 74 q-8 -2 -10 -8",
        w: 1,
      },
      { d: "M40 42 L60 42", w: 1, kesik: true },
      { d: "M110 20 L60 40 M110 30 L62 44", w: 1.6 },
      { d: daire(116, 18, 6) + daire(118, 32, 6), w: 1.4 },
      { d: "M120 120 L120 100 M126 120 L126 104", w: 1.3 },
    ],
  },
  "karantina-tanki": {
    taramalar: [{ id: "t", sinir: tank(30, 50, 100, 70), kutu: [30, 50, 100, 70], aralik: 6, sonra: 0 }],
    cizgiler: [
      { d: tank(30, 50, 100, 70), w: 2, dolgu: true },
      { d: dalga(30, 60, 8, 12.5), w: 1 },
      { d: balik(90, 92, 1.2), w: 1.6, dolgu: true },
      { d: kutu(110, 70, 12, 30), w: 1.4, dolgu: true },
      { d: "M44 120 Q44 104 56 104 Q68 104 68 120", w: 1.4 },
      { d: "M72 14 L88 14 M80 6 L80 22", w: 3 },
      { d: daire(80, 14, 14), w: 1.4 },
    ],
  },
  "arka-fon": {
    taramalar: [{ id: "f", sinir: "M10 30 L150 30 L150 130 L10 130 Z", kutu: [10, 30, 140, 100], aralik: 7 }],
    cizgiler: [
      { d: tank(10, 30, 140, 100), w: 2 },
      {
        d: "M14 34 L40 34 L36 60 L54 74 L44 100 L60 126 M60 34 L82 50 L78 76 L96 90 L90 126 M110 34 L106 56 L128 72 L120 98 L140 126",
        w: 1.4,
      },
      { d: "M36 60 L20 70 M78 76 L60 84 M128 72 L146 66", w: 1.2 },
      { d: "M44 100 L30 108 L48 112 M96 90 L110 96", w: 1.1 },
      { d: balik(76, 110), w: 1.3, dolgu: true },
    ],
  },
};
