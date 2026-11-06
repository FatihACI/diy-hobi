import { Cizim, daire, kutu } from "../arac";

// Küçük kuş (x,y = gövde merkezi, sağa bakar)
const kus = (x: number, y: number, s = 1) =>
  `M${x - 12 * s} ${y} Q${x - 8 * s} ${y - 12 * s} ${x + 4 * s} ${y - 10 * s} Q${x + 14 * s} ${y - 8 * s} ${x + 12 * s} ${y} Q${x + 4 * s} ${y + 8 * s} ${x - 12 * s} ${y} Z M${x + 12 * s} ${y - 6 * s} L${x + 19 * s} ${y - 4 * s} L${x + 12 * s} ${y - 2 * s} M${x - 12 * s} ${y} L${x - 22 * s} ${y + 4 * s} L${x - 16 * s} ${y - 4 * s}`;
// Oturan kedi silüeti
const kedi = (x: number, y: number) =>
  `M${x - 14} ${y} Q${x - 18} ${y - 30} ${x - 8} ${y - 40} L${x - 10} ${y - 52} L${x - 2} ${y - 44} Q${x + 2} ${y - 46} ${x + 6} ${y - 44} L${x + 12} ${y - 52} L${x + 12} ${y - 40} Q${x + 22} ${y - 30} ${x + 16} ${y} Z M${x + 16} ${y} Q${x + 34} ${y - 2} ${x + 30} ${y - 20}`;
const pati = (x: number, y: number) =>
  daire(x, y, 3) + daire(x - 5, y - 5, 1.6) + daire(x, y - 7, 1.6) + daire(x + 5, y - 5, 1.6);

// Kuş Evi & Evcil Hayvan ek projelerinin çizimleri (viewBox 0 0 160 160)
export const KUS_EVI_CIZIM: Record<string, Cizim> = {
  "kus-banyosu": {
    taramalar: [{ id: "s", sinir: "M62 150 L98 150 L92 110 L68 110 Z", kutu: [62, 110, 36, 40], aralik: 4 }],
    cizgiler: [
      { d: "M62 150 L98 150 L92 110 L68 110 Z", w: 1.8, dolgu: true },
      { d: "M66 110 L94 110 L90 86 L70 86 Z", w: 1.8, dolgu: true },
      { d: "M24 80 Q30 96 80 98 Q130 96 136 80 Z", w: 2, dolgu: true },
      { d: daire(80, 80, 56, 8), w: 1.8, dolgu: true },
      { d: "M40 82 q6 -3 12 0 t12 0 M84 80 q6 -3 12 0 t12 0", w: 0.9 },
      { d: kus(104, 64, 1.1), w: 1.6, dolgu: true },
      { d: "M100 72 L100 78 M106 72 L106 78", w: 1.1 },
      { d: "M118 50 L122 44 M126 54 L132 50", w: 1, kesik: true },
    ],
  },
  "kus-keki": {
    taramalar: [{ id: "k", sinir: "M60 60 L100 60 L96 110 L64 110 Z", kutu: [60, 60, 40, 50], aralik: 4, sonra: 1 }],
    cizgiler: [
      { d: "M80 10 L80 60", w: 1.2 },
      { d: "M60 60 L100 60 L96 110 L64 110 Z", w: 2, dolgu: true },
      {
        d: daire(70, 72, 1.6) + daire(84, 80, 1.6) + daire(76, 94, 1.6) + daire(90, 100, 1.6) + daire(88, 68, 1.6),
        w: 1,
      },
      { d: "M10 20 Q60 6 150 14", w: 3 },
      { d: kus(124, 80, 1.1), w: 1.6, dolgu: true },
      { d: "M104 82 L110 82", w: 1.2 },
      { d: "M20 140 L30 130 M40 146 L50 136 M110 140 L120 130", w: 1, kesik: true },
    ],
  },
  "kedi-yatagi": {
    taramalar: [{ id: "y", sinir: daire(80, 104, 60, 30), kutu: [20, 74, 120, 60], aralik: 5, sonra: 0 }],
    cizgiler: [
      { d: daire(80, 104, 60, 30), w: 2.2, dolgu: true },
      { d: daire(80, 100, 42, 18), w: 1.8, dolgu: true },
      { d: "M50 100 Q60 80 80 82 Q100 80 108 94 Q104 106 80 108 Q58 108 50 100 Z", w: 1.6, dolgu: true },
      { d: "M100 86 L104 76 L108 88 M90 84 L92 74 L98 84", w: 1.2 },
      { d: "M56 100 Q46 104 60 108", w: 1.2 },
      { d: "M96 92 L100 92", w: 1 },
      { d: "M30 30 q6 -6 12 0 M50 20 q6 -6 12 0", w: 1, kesik: true },
    ],
  },
  "kedi-oltasi": {
    cizgiler: [
      { d: "M10 150 L120 20", w: 2.4 },
      { d: "M120 20 Q136 50 120 90", w: 1 },
      { d: "M120 90 Q110 100 104 116 M120 90 Q118 104 122 120 M120 90 Q130 100 136 114", w: 1.4 },
      { d: daire(120, 90, 4), w: 1.4, dolgu: true },
      { d: kedi(50, 150), w: 1.8, dolgu: true },
      { d: "M100 70 L96 66 M140 80 L146 76", w: 1, kesik: true },
    ],
  },
  "kopek-kulubesi": {
    taramalar: [
      { id: "c", sinir: "M14 70 L80 24 L146 70 L136 70 L80 32 L24 70 Z", kutu: [14, 24, 132, 46], aralik: 3, sonra: 0 },
    ],
    cizgiler: [
      { d: "M14 70 L80 24 L146 70 L136 70 L80 32 L24 70 Z", w: 2, dolgu: true },
      { d: "M28 66 L28 140 L132 140 L132 66", w: 2, dolgu: true },
      { d: "M56 140 L56 100 Q80 76 104 100 L104 140", w: 2, dolgu: true },
      { d: "M28 90 L56 90 M104 90 L132 90 M28 115 L56 115 M104 115 L132 115", w: 0.8 },
      { d: "M20 146 L140 146", w: 1.4 },
      { d: "M66 44 L94 44", w: 0.8 },
      { d: kutu(68, 46, 24, 10), w: 1.2 },
    ],
  },
  "kopek-halat-oyuncak": {
    cizgiler: [
      { d: daire(26, 80, 12) + daire(134, 80, 12), w: 2, dolgu: true },
      { d: "M38 80 Q48 70 58 80 Q68 90 78 80 Q88 70 98 80 Q108 90 122 80", w: 2.6 },
      {
        d: "M38 86 Q48 96 58 86 Q68 76 78 86 Q88 96 98 86 Q108 76 122 86 M38 74 Q48 64 58 74 Q68 84 78 74 Q88 64 98 74 Q108 84 122 74",
        w: 1.2,
      },
      { d: "M14 80 L4 72 M14 80 L4 88 M146 80 L156 72 M146 80 L156 88", w: 1.2 },
      { d: pati(50, 130) + pati(80, 140) + pati(110, 130), w: 1, dolgu: true },
    ],
  },
  "kopek-odulu": {
    taramalar: [{ id: "t", sinir: kutu(14, 110, 132, 30), kutu: [14, 110, 132, 30], aralik: 5 }],
    cizgiler: [
      { d: kutu(14, 110, 132, 30), w: 1.8, dolgu: true },
      ...[
        [50, 70],
        [110, 60],
        [80, 96],
      ].map(([x, y]) => ({
        d: `${daire(x - 18, y - 6, 7)} ${daire(x - 18, y + 6, 7)} ${daire(x + 18, y - 6, 7)} ${daire(x + 18, y + 6, 7)} M${x - 14} ${y - 4} L${x + 14} ${y - 4} M${x - 14} ${y + 4} L${x + 14} ${y + 4}`,
        w: 1.6,
        dolgu: true,
      })),
      { d: "M30 30 Q36 20 30 10 M50 30 Q56 20 50 10", w: 1, kesik: true },
    ],
  },
  "hamster-labirent": {
    taramalar: [
      { id: "r", sinir: "M96 100 L130 100 L130 116 L96 116 Z", kutu: [96, 100, 34, 16], aralik: 3, sonra: 2 },
    ],
    cizgiler: [
      { d: "M10 60 L120 40 L150 70 L40 96 Z", w: 1.8 },
      { d: "M30 70 L60 64 L66 74 M80 56 L84 70 L110 64 M50 84 L90 76", w: 1.6 },
      { d: "M96 100 L130 100 L130 116 L96 116 Z", w: 1.6, dolgu: true },
      { d: daire(96, 108, 2, 8), w: 1.2 },
      { d: "M40 104 Q46 92 60 94 Q72 96 72 106 Q66 116 50 114 Q40 112 40 104 Z", w: 1.6, dolgu: true },
      { d: "M44 96 L42 90 M52 94 L54 88", w: 1.2 },
      { d: daire(140, 116, 2) + daire(146, 120, 2), w: 1, dolgu: true },
    ],
    noktalar: [[48, 100, 1.4]],
  },
  "kedi-cimi": {
    taramalar: [{ id: "s", sinir: "M40 110 L120 110 L112 150 L48 150 Z", kutu: [40, 110, 80, 40], aralik: 4 }],
    cizgiler: [
      { d: "M40 110 L120 110 L112 150 L48 150 Z", w: 2, dolgu: true },
      { d: kutu(36, 102, 88, 8), w: 1.6, dolgu: true },
      {
        d: Array.from({ length: 16 }, (_, i) => {
          const x = 44 + i * 5;
          return `M${x} 102 Q${x + (i % 2 ? 4 : -4)} 70 ${x + (i % 3) * 2} ${46 + (i % 4) * 6}`;
        }).join(" "),
        w: 1.1,
      },
      { d: "M120 60 Q132 48 144 56", w: 1, kesik: true },
    ],
  },
  "mama-standi": {
    taramalar: [{ id: "s", sinir: "M14 76 L146 76 L146 90 L14 90 Z", kutu: [14, 76, 132, 14], aralik: 3, sonra: 0 }],
    cizgiler: [
      { d: "M14 76 L146 76 L146 90 L14 90 Z", w: 2, dolgu: true },
      { d: "M24 90 L24 146 M136 90 L136 146 M24 146 L136 146", w: 2 },
      { d: "M30 76 Q32 60 50 60 Q68 60 70 76 M90 76 Q92 60 110 60 Q128 60 130 76", w: 1.8, dolgu: true },
      { d: daire(50, 62, 18, 4) + daire(110, 62, 18, 4), w: 1.4 },
      { d: "M100 60 q4 -2 8 0 q4 -2 8 0", w: 1 },
      { d: daire(46, 60, 1.6) + daire(54, 61, 1.6) + daire(50, 58, 1.6), w: 1, dolgu: true },
    ],
  },
  "kedi-raflari": {
    cizgiler: [
      { d: "M10 10 L10 150", w: 1, kesik: true },
      ...[
        [20, 134],
        [70, 108],
        [20, 82],
        [70, 58],
      ].map(([x, y]) => ({
        d: `${kutu(x, y, 56, 8)} M${x + 6} ${y + 8} L${x + 6} ${y + 20} L${x + 18} ${y + 8} M${x + 50} ${y + 8} L${x + 50} ${y + 20} L${x + 38} ${y + 8}`,
        w: 1.6,
        dolgu: true,
      })),
      { d: kedi(100, 58), w: 1.6, dolgu: true },
      { d: "M46 132 Q60 116 80 114", w: 0.9, kesik: true },
    ],
  },
  "kus-tunegi": {
    cizgiler: [
      {
        d: "M20 20 L20 150 M140 20 L140 150 M20 150 L140 150 M40 20 L40 150 M60 20 L60 150 M80 20 L80 150 M100 20 L100 150 M120 20 L120 150",
        w: 0.7,
      },
      { d: "M20 20 Q80 -6 140 20", w: 1.4 },
      { d: "M20 90 Q50 84 80 92 Q110 98 140 88", w: 3.2 },
      { d: "M60 89 L54 80 M100 95 L108 104", w: 1.6 },
      { d: kus(70, 74, 1.2), w: 1.6, dolgu: true },
      { d: "M66 82 L66 88 M74 82 L74 90", w: 1.2 },
      { d: "M20 126 L140 124", w: 2 },
    ],
  },
  "paracord-tasma": {
    cizgiler: [
      { d: daire(80, 80, 52, 40), w: 6 },
      { d: daire(80, 80, 52, 40), w: 1.2, kesik: true },
      { d: kutu(120, 70, 18, 20), w: 1.8, dolgu: true },
      { d: "M124 80 L134 80", w: 1.4 },
      { d: daire(80, 128, 8), w: 2 },
      { d: "M20 20 Q40 10 60 20 Q80 30 100 20", w: 1, kesik: true },
    ],
  },
  "kedi-tuvalet-dolabi": {
    taramalar: [{ id: "d", sinir: "M110 40 L140 26 L140 120 L110 134 Z", kutu: [110, 26, 30, 108], aralik: 4 }],
    cizgiler: [
      { d: kutu(20, 40, 90, 94), w: 2, dolgu: true },
      { d: "M20 40 L50 26 L140 26 L110 40", w: 2 },
      { d: "M110 40 L140 26 L140 120 L110 134 Z", w: 2, dolgu: true },
      { d: daire(125, 92, 10, 14), w: 1.8, dolgu: true },
      { d: "M65 46 L65 128 M58 86 L62 86 M68 86 L72 86", w: 1.2 },
      { d: daire(36, 52, 2) + daire(44, 52, 2) + daire(52, 52, 2), w: 1 },
      { d: pati(30, 150) + pati(60, 146), w: 1, dolgu: true },
    ],
  },
  "bocek-oteli": {
    taramalar: [{ id: "c", sinir: "M20 50 L80 14 L140 50 Z", kutu: [20, 14, 120, 36], aralik: 3.5, sonra: 0 }],
    cizgiler: [
      { d: "M20 50 L80 14 L140 50 Z", w: 2, dolgu: true },
      { d: kutu(28, 50, 104, 96), w: 2, dolgu: true },
      { d: "M28 82 L132 82 M28 114 L132 114 M80 50 L80 146", w: 1.6 },
      {
        d:
          daire(38, 60, 4) +
          daire(48, 60, 4) +
          daire(58, 60, 4) +
          daire(68, 60, 4) +
          daire(38, 72, 4) +
          daire(48, 72, 4) +
          daire(58, 72, 4) +
          daire(68, 72, 4),
        w: 1,
      },
      { d: "M90 60 q6 8 0 16 M100 60 q6 8 0 16 M110 60 q6 8 0 16 M120 60 q6 8 0 16", w: 1 },
      { d: "M34 90 L74 106 M34 100 L74 96 M40 108 L70 88", w: 1.2 },
      { d: daire(96, 96, 6, 8) + daire(116, 100, 5, 7), w: 1.2 },
      { d: daire(90, 124, 2) + daire(104, 128, 2) + daire(118, 124, 2) + daire(96, 138, 2) + daire(112, 138, 2), w: 1 },
      { d: "M38 124 L72 124 M38 132 L72 132 M38 140 L72 140", w: 1 },
    ],
  },
  "kirpi-evi": {
    taramalar: [{ id: "c", sinir: "M20 66 L100 40 L140 66 L60 92 Z", kutu: [20, 40, 120, 52], aralik: 4 }],
    cizgiler: [
      { d: "M20 66 L100 40 L140 66 L60 92 Z", w: 2, dolgu: true },
      { d: "M26 70 L26 130 L64 144 L64 94 M64 144 L134 118 L134 70", w: 2 },
      { d: "M34 140 L34 116 L50 116 L50 136", w: 1.6 },
      { d: "M2 150 L34 140 M2 128 L34 116", w: 1.2 },
      { d: "M96 146 Q104 128 124 130 Q140 132 142 146 Z", w: 1.6, dolgu: true },
      { d: "M100 134 L96 126 M108 130 L106 120 M116 128 L116 118 M124 128 L126 118 M132 132 L136 124", w: 1.2 },
      { d: "M142 146 L150 142", w: 1.2 },
    ],
  },
  "yemlik-kamerasi": {
    taramalar: [{ id: "e", sinir: kutu(20, 60, 30, 54), kutu: [20, 60, 30, 54], aralik: 4, sonra: 0 }],
    cizgiler: [
      { d: kutu(20, 60, 30, 54), w: 2, dolgu: true },
      { d: daire(35, 70, 4), w: 1.4, dolgu: true },
      { d: "M35 114 L35 150 M20 150 L50 150 M35 130 L24 150 M35 130 L46 150", w: 1.6 },
      { d: "M56 86 L100 76 M56 92 L100 104", w: 0.8, kesik: true },
      { d: "M100 40 L140 40 L132 56 L108 56 Z", w: 1.8, dolgu: true },
      { d: "M120 20 L120 40 M104 56 L104 100 M136 56 L136 100 M100 100 L140 100", w: 1.6 },
      { d: kus(124, 88, 1), w: 1.6, dolgu: true },
    ],
  },
};
