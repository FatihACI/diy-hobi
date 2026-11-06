import { Cizim, daire, kutu } from "../arac";

const alev = (x: number, y: number, s = 1) =>
  `M${x} ${y} Q${x - 8 * s} ${y - 10 * s} ${x} ${y - 24 * s} Q${x + 8 * s} ${y - 10 * s} ${x} ${y} Z`;
const kavanoz = (x: number, y: number, w = 50, h = 60) =>
  `M${x - w / 2} ${y} L${x + w / 2} ${y} L${x + w / 2} ${y + h - 6} Q${x + w / 2} ${y + h} ${x + w / 2 - 6} ${y + h} L${x - w / 2 + 6} ${y + h} Q${x - w / 2} ${y + h} ${x - w / 2} ${y + h - 6} Z`;
const sabun = (x: number, y: number, w = 50, h = 16) =>
  `M${x} ${y} L${x + w} ${y - 8} L${x + w + 16} ${y} L${x + 16} ${y + 8} Z M${x} ${y} L${x} ${y + h} L${x + 16} ${y + h + 8} L${x + w + 16} ${y + h} L${x + w + 16} ${y} M${x + 16} ${y + 8} L${x + 16} ${y + h + 8}`;

// Mum & Sabun ek projelerinin çizimleri (viewBox 0 0 160 160)
export const MUM_SABUN_CIZIM: Record<string, Cizim> = {
  "ahsap-fitil-mum": {
    taramalar: [{ id: "f", sinir: kutu(72, 54, 16, 6), kutu: [72, 54, 16, 6], aralik: 2, sonra: 2 }],
    cizgiler: [
      { d: kavanoz(80, 60, 80, 84), w: 2, dolgu: true },
      { d: daire(80, 60, 40, 7), w: 1.6, dolgu: true },
      { d: kutu(72, 54, 16, 6), w: 1.4, dolgu: true },
      { d: "M60 54 Q80 20 100 54 Q90 40 80 46 Q70 40 60 54 Z", w: 1.6, dolgu: true },
      { d: "M56 34 L50 26 M104 34 L110 26 M80 22 L80 14", w: 1.2, kesik: true },
      { d: kutu(52, 90, 56, 28), w: 1 },
    ],
  },
  "bal-mumu-mum": {
    cizgiler: [
      { d: "M40 60 L40 140 Q54 148 68 140 L68 60", w: 2, dolgu: true },
      { d: daire(54, 60, 14, 5), w: 1.6, dolgu: true },
      { d: "M54 60 L54 50", w: 1.4 },
      { d: alev(54, 50, 0.9), w: 1.4, dolgu: true },
      { d: "M40 80 L68 80 M40 100 L68 100 M40 120 L68 120", w: 0.8 },
      { d: "M84 130 L146 70 L146 130 Z", w: 2, dolgu: true },
      {
        d: Array.from({ length: 5 }, (_, r) =>
          Array.from({ length: 5 - r }, (_, c) => {
            const x = 96 + c * 10 + r * 5,
              y = 124 - r * 9;
            return `M${x} ${y - 5} L${x + 4} ${y - 2.5} L${x + 4} ${y + 2.5} L${x} ${y + 5} L${x - 4} ${y + 2.5} L${x - 4} ${y - 2.5} Z`;
          }).join(" "),
        ).join(" "),
        w: 0.7,
      },
    ],
  },
  "kalip-mum": {
    taramalar: [{ id: "k", sinir: "M20 90 L60 90 L60 140 L20 140 Z", kutu: [20, 90, 40, 50], aralik: 3 }],
    cizgiler: [
      { d: "M20 90 L60 90 L60 140 L20 140 Z", w: 2, dolgu: true },
      { d: "M40 90 L40 70 M30 70 L50 70", w: 1.4 },
      { d: "M90 140 L90 80 L110 60 L130 80 L130 140 Z", w: 2, dolgu: true },
      { d: "M90 80 L130 80 M110 60 L110 140 M90 100 L130 100 M90 120 L130 120", w: 0.9 },
      { d: "M110 60 L110 50", w: 1.4 },
      { d: alev(110, 50, 0.8), w: 1.4, dolgu: true },
    ],
  },
  "mum-erit-yenile": {
    taramalar: [{ id: "t", sinir: "M20 80 L90 80 L84 140 L26 140 Z", kutu: [20, 100, 70, 40], aralik: 4 }],
    cizgiler: [
      { d: "M20 80 L90 80 L84 140 L26 140 Z", w: 2, dolgu: true },
      { d: kutu(36, 60, 38, 40), w: 1.8, dolgu: true },
      { d: "M36 70 Q55 64 74 70", w: 1 },
      { d: "M20 80 L8 74 M90 80 L102 74", w: 2 },
      { d: "M30 150 Q34 144 30 140 M54 150 Q58 144 54 140 M78 150 Q82 144 78 140", w: 1, kesik: true },
      { d: kavanoz(128, 90, 34, 50), w: 1.8, dolgu: true },
      { d: "M111 106 L145 106 M111 120 L145 120", w: 1 },
      { d: "M74 66 Q100 50 118 80", w: 1, kesik: true },
    ],
  },
  "masaj-mumu": {
    taramalar: [
      { id: "y", sinir: "M40 80 L110 80 L110 120 Q75 132 40 120 Z", kutu: [40, 90, 70, 40], aralik: 4, sonra: 0 },
    ],
    cizgiler: [
      { d: "M40 80 L40 120 Q75 132 110 120 L110 80 Q118 76 124 78 L118 86 L110 86", w: 2, dolgu: true },
      { d: daire(75, 80, 35, 7), w: 1.6, dolgu: true },
      { d: "M75 80 L75 70", w: 1.4 },
      { d: alev(75, 70, 0.8), w: 1.4, dolgu: true },
      { d: "M124 80 Q132 96 128 110", w: 1.2, kesik: true },
      { d: "M100 140 Q120 128 140 136 Q130 150 104 150 Z", w: 1.4 },
    ],
  },
  "sivi-sabun": {
    taramalar: [
      {
        id: "s",
        sinir: "M50 70 L110 70 L110 140 Q110 148 102 148 L58 148 Q50 148 50 140 Z",
        kutu: [50, 96, 60, 52],
        aralik: 4,
      },
    ],
    cizgiler: [
      { d: "M50 70 L110 70 L110 140 Q110 148 102 148 L58 148 Q50 148 50 140 Z", w: 2.2, dolgu: true },
      { d: kutu(70, 54, 20, 16), w: 1.6, dolgu: true },
      { d: "M76 54 L76 36 L110 36 L110 44", w: 2 },
      { d: kutu(64, 30, 30, 8), w: 1.6, dolgu: true },
      { d: "M50 96 Q80 90 110 96", w: 1 },
      { d: daire(126, 40, 4) + daire(136, 30, 3) + daire(140, 50, 2.5), w: 1 },
      { d: sabun(10, 120, 20, 10), w: 1.2, dolgu: true },
    ],
  },
  "tuz-banyosu": {
    taramalar: [{ id: "t", sinir: kavanoz(70, 50, 70, 90), kutu: [35, 80, 70, 60], aralik: 4 }],
    cizgiler: [
      { d: kavanoz(70, 50, 70, 90), w: 2.2, dolgu: true },
      { d: kutu(32, 38, 76, 12), w: 1.8, dolgu: true },
      { d: "M35 80 Q70 74 105 80", w: 1 },
      { d: daire(52, 96, 3) + daire(70, 104, 2.4) + daire(88, 96, 3) + daire(60, 120, 2.4) + daire(84, 124, 3), w: 1 },
      { d: "M120 120 Q114 100 124 86 M124 86 q-8 2 -10 8 M120 100 q8 -2 10 -8", w: 1.2 },
      { d: "M134 140 L150 110 M136 140 Q144 136 146 128", w: 1.2 },
    ],
  },
  "banyo-bombasi": {
    taramalar: [{ id: "b", sinir: daire(60, 90, 34), kutu: [26, 56, 68, 68], aralik: 5, sonra: 0 }],
    cizgiler: [
      { d: daire(60, 90, 34), w: 2.2, dolgu: true },
      { d: "M26 90 Q60 100 94 90", w: 1.2 },
      { d: daire(116, 112, 22, 8), w: 1.6 },
      { d: "M100 108 q4 -8 8 0 M112 104 q4 -8 8 0 M124 108 q4 -8 8 0", w: 1.1 },
      { d: daire(108, 92, 3) + daire(122, 84, 4) + daire(130, 96, 2.4) + daire(116, 72, 2.4), w: 1 },
      { d: "M48 72 Q52 64 60 68", w: 1 },
    ],
  },
  "dudak-balsami": {
    taramalar: [{ id: "t", sinir: kutu(50, 70, 24, 70), kutu: [50, 70, 24, 70], aralik: 4, sonra: 0 }],
    cizgiler: [
      { d: kutu(50, 70, 24, 70), w: 2, dolgu: true },
      { d: kutu(52, 44, 20, 26), w: 1.8, dolgu: true },
      { d: "M52 44 Q62 34 72 44", w: 1.4 },
      { d: kutu(96, 60, 24, 80), w: 2, dolgu: true },
      { d: "M96 80 L120 80", w: 1 },
      { d: daire(132, 50, 10, 4), w: 1.4 },
      { d: "M20 30 Q30 20 40 30", w: 1, kesik: true },
    ],
  },
  "kalipli-sabun-hediye": {
    taramalar: [{ id: "k", sinir: kutu(20, 70, 120, 70), kutu: [20, 70, 120, 70], aralik: 6, sonra: 0 }],
    cizgiler: [
      { d: kutu(20, 70, 120, 70), w: 2, dolgu: true },
      { d: "M80 70 L80 140 M20 104 L140 104", w: 3 },
      { d: "M80 70 Q66 50 56 58 Q62 70 80 70 Q94 50 104 58 Q98 70 80 70", w: 1.6, dolgu: true },
      ...[
        [44, 88],
        [116, 88],
        [44, 122],
        [116, 122],
      ].map(([x, y]) => ({ d: `${daire(x, y, 9)} ${daire(x, y, 3)}`, w: 1.3, dolgu: true })),
    ],
  },
  "kecili-sabun": {
    taramalar: [{ id: "k", sinir: daire(80, 90, 50, 30), kutu: [30, 60, 100, 60], aralik: 4, sonra: 0 }],
    cizgiler: [
      { d: daire(80, 90, 50, 30), w: 2.2, dolgu: true },
      { d: "M40 80 Q60 70 80 82 Q100 94 120 84 M38 98 Q60 90 82 102 Q104 112 122 100", w: 1.2 },
      { d: "M30 140 Q50 130 70 140 Q90 150 110 140 Q130 130 150 140", w: 1, kesik: true },
      { d: "M120 30 Q130 40 140 30 Q150 20 140 14", w: 1.2 },
    ],
  },
  "kahve-sabunu": {
    cizgiler: [
      { d: sabun(24, 90, 70, 22), w: 2, dolgu: true },
      {
        d:
          daire(50, 98, 1.4) +
          daire(62, 92, 1.4) +
          daire(76, 96, 1.4) +
          daire(88, 90, 1.4) +
          daire(58, 102, 1.4) +
          daire(80, 102, 1.4),
        w: 1,
        dolgu: true,
      },
      { d: "M110 40 L146 40 L142 74 L114 74 Z", w: 1.8, dolgu: true },
      { d: "M146 48 Q156 52 152 62 L144 64", w: 1.4 },
      { d: "M120 34 Q118 26 122 20 M132 34 Q130 26 134 20", w: 1, kesik: true },
      { d: "M34 60 Q40 50 46 56 Q40 64 34 60 Z M52 54 Q58 44 64 50 Q58 58 52 54 Z", w: 1.2, dolgu: true },
    ],
  },
  "zeytinyagli-kastil": {
    taramalar: [{ id: "s", sinir: "M14 110 L84 96 L110 110 L40 124 Z", kutu: [14, 96, 96, 28], aralik: 4, sonra: 0 }],
    cizgiler: [
      { d: "M14 110 L84 96 L110 110 L40 124 Z", w: 2, dolgu: true },
      { d: "M14 110 L14 130 L40 146 L110 128 L110 110 M40 124 L40 146", w: 2 },
      { d: "M120 30 Q112 50 120 70 L140 70 Q148 50 140 30 Z", w: 1.8, dolgu: true },
      { d: "M126 30 L126 18 L134 18 L134 30", w: 1.6 },
      { d: "M40 40 Q60 20 80 40 M60 30 Q50 44 60 60 M70 32 Q80 46 70 60", w: 1.4 },
      { d: daire(60, 66, 6, 8), w: 1.4, dolgu: true },
    ],
  },
  "defne-sabunu": {
    taramalar: [{ id: "s", sinir: kutu(30, 80, 80, 60), kutu: [30, 80, 80, 60], aralik: 5, sonra: 0 }],
    cizgiler: [
      { d: kutu(30, 80, 80, 60), w: 2.2, dolgu: true },
      { d: "M30 80 L50 66 L130 66 L110 80 M110 140 L130 126 L130 66", w: 2 },
      { d: daire(70, 110, 14), w: 1.2 },
      {
        d: "M120 30 Q100 20 92 40 Q104 46 120 30 Z M120 30 Q132 12 148 18 Q144 34 120 30 Z M120 30 L110 50",
        w: 1.4,
        dolgu: true,
      },
    ],
  },
  "mum-boyama": {
    cizgiler: [
      { d: "M46 50 L46 140 Q66 148 86 140 L86 50", w: 2, dolgu: true },
      { d: daire(66, 50, 20, 6), w: 1.6, dolgu: true },
      { d: "M66 50 L66 40", w: 1.4 },
      { d: alev(66, 40, 0.8), w: 1.4, dolgu: true },
      { d: "M56 110 Q66 96 76 110 Q66 124 56 110 Z M66 110 m-3 0 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0", w: 1.2 },
      { d: "M52 128 Q66 120 80 128", w: 1, kesik: true },
      { d: "M110 70 L150 40 L156 48 L118 78 Z", w: 1.6, dolgu: true },
      { d: "M104 80 L96 86 M110 88 L100 96", w: 1, kesik: true },
    ],
  },
  "oda-kokusu": {
    taramalar: [
      {
        id: "y",
        sinir: "M50 90 L110 90 L110 140 Q110 148 102 148 L58 148 Q50 148 50 140 Z",
        kutu: [50, 110, 60, 38],
        aralik: 4,
      },
    ],
    cizgiler: [
      { d: "M50 90 L110 90 L110 140 Q110 148 102 148 L58 148 Q50 148 50 140 Z", w: 2.2, dolgu: true },
      { d: "M70 90 L70 78 L90 78 L90 90", w: 1.6 },
      { d: "M50 110 Q80 104 110 110", w: 1 },
      { d: "M74 80 L46 10 M78 80 L66 6 M80 80 L84 6 M84 80 L104 8 M86 80 L120 14", w: 1.3 },
      { d: "M30 30 Q24 40 30 50 M130 40 Q138 50 130 60", w: 1, kesik: true },
    ],
  },
  "mum-vazosu": {
    cizgiler: [
      { d: "M44 50 L116 50 L110 140 L50 140 Z", w: 2, dolgu: true },
      { d: daire(80, 50, 36, 6), w: 1.4 },
      { d: "M60 140 Q56 120 64 106 M64 106 q-8 -2 -10 -10 M62 120 q8 -4 10 -12", w: 1.2 },
      { d: "M90 140 Q94 120 86 104 M86 104 q8 0 10 -8 M90 124 q-8 -2 -10 -10", w: 1.2 },
      { d: daire(100, 118, 6) + daire(70, 96, 5), w: 1.2, dolgu: true },
      { d: kutu(66, 110, 28, 10), w: 1.2, dolgu: true },
      { d: alev(80, 110, 0.7), w: 1.3, dolgu: true },
    ],
  },
};
