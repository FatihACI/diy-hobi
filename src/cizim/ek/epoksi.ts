import { Cizim, daire, dalga, kutu } from "../arac";

const yuvarlakKose = (x: number, y: number, w: number, h: number, r: number) =>
  `M${x + r} ${y} L${x + w - r} ${y} Q${x + w} ${y} ${x + w} ${y + r} L${x + w} ${y + h - r} Q${x + w} ${y + h} ${x + w - r} ${y + h} L${x + r} ${y + h} Q${x} ${y + h} ${x} ${y + h - r} L${x} ${y + r} Q${x} ${y} ${x + r} ${y} Z`;
const kabarciklar = (x: number, y: number): [number, number, number][] => [
  [x, y, 2],
  [x + 8, y + 6, 1.5],
  [x - 6, y + 10, 1.2],
  [x + 14, y - 4, 1],
];

// Epoksi ek projelerinin çizimleri (viewBox 0 0 160 160)
export const EPOKSI_CIZIM: Record<string, Cizim> = {
  "epoksi-anahtarlik": {
    taramalar: [
      { id: "h", sinir: "M56 70 L80 140 L104 70 L94 70 L80 112 L66 70 Z", kutu: [56, 70, 48, 70], aralik: 4 },
    ],
    cizgiler: [
      { d: daire(80, 40, 18), w: 2 },
      { d: "M80 58 L80 70", w: 1.6 },
      { d: "M56 70 L80 140 L104 70 L94 70 L80 112 L66 70 Z", w: 2, dolgu: true },
    ],
    noktalar: kabarciklar(72, 86),
  },
  "epoksi-kase": {
    taramalar: [{ id: "k", sinir: "M24 70 Q80 160 136 70 Z", kutu: [24, 70, 112, 70], aralik: 5, ters: true }],
    cizgiler: [
      { d: daire(80, 70, 56, 12), w: 2, dolgu: true },
      { d: "M24 70 Q80 160 136 70", w: 2 },
      { d: daire(80, 72, 44, 8), w: 1.2 },
      { d: "M40 90 L48 96 M60 112 L70 108 M100 110 L108 100", w: 1.4 },
    ],
  },
  "epoksi-tepsi": {
    taramalar: [{ id: "g", sinir: daire(80, 82, 18), kutu: [62, 64, 36, 36], aralik: 2.5 }],
    cizgiler: [
      { d: yuvarlakKose(16, 40, 128, 84, 10), w: 2.2, dolgu: true },
      { d: daire(80, 82, 18), w: 1.6 },
      { d: daire(80, 82, 30, 26), w: 1.2 },
      { d: daire(80, 82, 44, 36), w: 1 },
      { d: "M74 76 L80 70 L86 78 L80 90 Z M70 86 L76 80", w: 1 },
    ],
  },
  "epoksi-saat": {
    cizgiler: [
      { d: daire(80, 80, 60), w: 2.2, dolgu: true },
      { d: dalga(30, 70, 8, 12, 4), w: 1.2 },
      { d: dalga(26, 96, 9, 12, 4), w: 1.2 },
      { d: "M80 80 L80 42 M80 80 L104 92", w: 2.2 },
      { d: "M80 24 L80 30 M80 130 L80 136 M24 80 L30 80 M130 80 L136 80", w: 1.6 },
    ],
    noktalar: [[80, 80, 3]],
  },
  "epoksi-bardak-alti-agac": {
    taramalar: [{ id: "r", sinir: "M80 30 A50 50 0 0 1 80 130 Z", kutu: [80, 30, 50, 100], aralik: 4 }],
    cizgiler: [
      { d: daire(80, 80, 50), w: 2.2, dolgu: true },
      { d: "M80 30 Q60 80 80 130", w: 1.6 },
      { d: daire(52, 80, 12, 16), w: 0.9 },
      { d: daire(52, 80, 6, 9), w: 0.9 },
      { d: "M40 60 Q46 70 40 80 M44 100 Q50 108 46 116", w: 0.8 },
    ],
  },
  "epoksi-harf": {
    taramalar: [{ id: "a", sinir: "M50 116 L76 30 L84 30 L110 116 Z", kutu: [50, 30, 60, 86], aralik: 6 }],
    cizgiler: [
      { d: "M50 116 L76 30 L84 30 L110 116 L96 116 L90 96 L70 96 L64 116 Z M74 82 L86 82 L80 58 Z", w: 2, dolgu: true },
      { d: kutu(40, 116, 80, 14), w: 2, dolgu: true },
      { d: "M30 60 L20 54 M130 60 L140 54 M80 18 L80 8", w: 1.2, kesik: true },
    ],
  },
  "telefon-kilifi-recine": {
    cizgiler: [
      { d: yuvarlakKose(46, 16, 68, 128, 12), w: 2.2, dolgu: true },
      { d: yuvarlakKose(54, 24, 22, 22, 5), w: 1.4 },
      { d: daire(65, 35, 6), w: 1 },
      {
        d:
          daire(84, 90, 6) +
          " " +
          daire(84, 78, 5, 7) +
          " " +
          daire(94, 90, 7, 5) +
          " " +
          daire(74, 90, 7, 5) +
          " " +
          daire(84, 102, 5, 7),
        w: 1.2,
      },
      { d: "M84 108 Q80 124 90 132 M86 120 L96 116", w: 1.2 },
    ],
  },
  "epoksi-kesme-tahtasi-sap": {
    taramalar: [{ id: "s", sinir: kutu(110, 66, 36, 28), kutu: [110, 66, 36, 28], aralik: 3 }],
    cizgiler: [
      { d: yuvarlakKose(14, 50, 96, 60, 8), w: 2.2, dolgu: true },
      { d: kutu(110, 66, 36, 28), w: 2, dolgu: true },
      { d: daire(136, 80, 4), w: 1.2 },
      { d: "M24 64 Q60 60 100 66 M24 80 Q60 76 100 82 M24 96 Q60 92 100 98", w: 0.7 },
      { d: "M40 40 L60 20 L74 30 L56 44 Z", w: 1.4 },
    ],
  },
  "epoksi-kitap-ayraci": {
    cizgiler: [
      { d: yuvarlakKose(62, 20, 36, 110, 6), w: 2, dolgu: true },
      { d: daire(80, 30, 3), w: 1.2 },
      { d: "M80 30 L70 4 M80 30 L86 6 M80 30 L92 10", w: 1 },
      { d: "M80 112 L80 50 M80 98 L68 86 M80 82 L92 70 M80 66 L70 56", w: 1.4 },
      { d: "M80 50 Q90 70 80 112 Q70 70 80 50", w: 1 },
    ],
  },
  "epoksi-kolye-sise": {
    taramalar: [{ id: "d", sinir: "M44 94 Q80 150 116 94 Z", kutu: [44, 94, 72, 46], aralik: 3.5 }],
    cizgiler: [
      { d: "M80 14 L80 54", w: 1, kesik: true },
      { d: daire(80, 60, 6), w: 1.6 },
      { d: daire(80, 100, 36), w: 2.2, dolgu: true },
      { d: dalga(46, 94, 6, 12, 3), w: 1.2 },
      { d: "M60 118 Q66 112 72 118 M88 124 L96 120 L92 128 Z", w: 1 },
    ],
  },
  "epoksi-masa-kaplama": {
    taramalar: [{ id: "m", sinir: "M20 70 L140 70 L140 80 L20 80 Z", kutu: [20, 70, 120, 10], aralik: 2.5 }],
    cizgiler: [
      { d: "M20 70 L140 70 L140 80 L20 80 Z", w: 2, dolgu: true },
      { d: "M28 80 L28 140 M132 80 L132 140 M40 80 L40 128 M120 80 L120 128", w: 1.8 },
      { d: "M60 20 L60 40 Q60 50 70 50 L90 50 Q100 50 100 40 L100 20", w: 1.8, dolgu: true },
      { d: "M80 50 Q78 60 80 70 M140 72 Q146 78 144 90", w: 1.4 },
      { d: "M44 64 L52 58 M108 64 L116 58", w: 1, kesik: true },
    ],
  },
  "epoksi-tabak-duvar": {
    cizgiler: [
      { d: kutu(24, 24, 112, 112), w: 2.2, dolgu: true },
      { d: "M24 60 Q60 40 90 70 Q120 100 136 80", w: 1.6 },
      { d: "M24 96 Q56 80 80 104 Q104 128 136 116", w: 1.6 },
      { d: daire(60, 66, 5) + " " + daire(72, 76, 3) + " " + daire(100, 104, 4) + " " + daire(112, 96, 6), w: 1 },
    ],
  },
  "epoksi-dugme": {
    cizgiler: [
      { d: daire(52, 60, 30), w: 2, dolgu: true },
      { d: daire(52, 60, 24), w: 0.9 },
      { d: daire(46, 54, 3) + " " + daire(58, 54, 3) + " " + daire(46, 66, 3) + " " + daire(58, 66, 3), w: 1.2 },
      { d: daire(110, 104, 24), w: 2, dolgu: true },
      { d: daire(104, 104, 3) + " " + daire(116, 104, 3), w: 1.2 },
      { d: "M30 130 Q60 110 86 130", w: 1, kesik: true },
    ],
  },
  "epoksi-tamir": {
    taramalar: [
      {
        id: "c",
        sinir: "M60 40 L74 70 L64 96 L80 124 L86 124 L72 96 L82 70 L68 40 Z",
        kutu: [60, 40, 26, 84],
        aralik: 2,
      },
    ],
    cizgiler: [
      { d: kutu(16, 30, 128, 100), w: 2.2, dolgu: true },
      { d: "M60 40 L74 70 L64 96 L80 124 L86 124 L72 96 L82 70 L68 40 Z", w: 1.6 },
      { d: "M24 50 Q40 46 54 52 M24 80 Q40 76 58 84 M96 60 Q116 56 136 62 M96 100 Q116 96 136 104", w: 0.7 },
      { d: "M110 14 L96 34", w: 2 },
    ],
  },
  "epoksi-mum-tutucu": {
    cizgiler: [
      { d: "M40 130 L52 70 L108 70 L120 130 Z", w: 2.2, dolgu: true },
      { d: "M52 70 L80 96 L108 70 M80 96 L80 130 M40 130 L80 96 L120 130", w: 1 },
      { d: daire(80, 70, 14, 4), w: 1.6, dolgu: true },
      { d: "M80 66 L80 58", w: 1.2 },
      { d: "M80 58 Q72 48 80 34 Q88 48 80 58 Z", w: 1.4, dolgu: true },
    ],
  },
  "epoksi-kalem": {
    taramalar: [{ id: "g", sinir: "M38 96 L104 50 L114 62 L48 108 Z", kutu: [38, 50, 76, 58], aralik: 4 }],
    cizgiler: [
      { d: "M38 96 L104 50 L114 62 L48 108 Z", w: 2, dolgu: true },
      { d: "M104 50 L124 36 L132 46 L114 62", w: 1.8, dolgu: true },
      { d: "M38 96 L22 116 L30 118 L48 108", w: 1.8, dolgu: true },
      { d: "M22 116 L16 126", w: 1.4 },
      { d: "M120 40 L140 28", w: 1.6 },
    ],
  },
  "epoksi-kabarcik-onleme": {
    cizgiler: [
      { d: "M30 140 L130 140 L124 100 L36 100 Z", w: 2, dolgu: true },
      { d: dalga(36, 100, 7, 12.6, 2), w: 1.2 },
      { d: "M100 20 L130 60 L120 66 L92 26 Z", w: 1.8, dolgu: true },
      { d: "M116 70 L110 82 M124 70 L124 84 M108 66 L98 76", w: 1.2, kesik: true },
    ],
    noktalar: [...kabarciklar(56, 116), ...kabarciklar(90, 120)],
  },
};
