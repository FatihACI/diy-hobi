import { Cizim, daire, kutu } from "../arac";

const yildiz = (x: number, y: number, r: number) =>
  Array.from({ length: 10 }, (_, i) => {
    const a = -Math.PI / 2 + (i * Math.PI) / 5,
      rr = i % 2 ? r * 0.45 : r;
    return `${i ? "L" : "M"}${(x + Math.cos(a) * rr).toFixed(2)} ${(y + Math.sin(a) * rr).toFixed(2)}`;
  }).join(" ") + " Z";
const kalp = (x: number, y: number, s: number) =>
  `M${x} ${y + 10 * s} C${x - 16 * s} ${y} ${x - 10 * s} ${y - 12 * s} ${x} ${y - 4 * s} C${x + 10 * s} ${y - 12 * s} ${x + 16 * s} ${y} ${x} ${y + 10 * s} Z`;

// Polimer Kil & Seramik ek projelerinin çizimleri (viewBox 0 0 160 160)
export const KIL_CIZIM: Record<string, Cizim> = {
  "kil-saksi": {
    taramalar: [{ id: "s", sinir: "M40 70 L120 70 L110 136 L50 136 Z", kutu: [40, 100, 80, 36], aralik: 4 }],
    cizgiler: [
      { d: "M40 70 L120 70 L110 136 L50 136 Z", w: 2.2, dolgu: true },
      { d: "M62 92 Q66 88 70 92 M90 92 Q94 88 98 92 M72 112 Q80 118 88 112 M80 98 L78 106 L82 106", w: 1.4 },
      { d: "M70 70 Q60 44 72 30 Q76 50 80 70 M80 70 Q86 40 100 34 Q96 54 88 70", w: 1.6, dolgu: true },
    ],
  },
  "kil-boncuk": {
    cizgiler: [
      { d: "M14 40 Q80 70 146 40", w: 1, kesik: true },
      {
        d: daire(34, 50, 12) + " " + daire(62, 58, 13) + " " + daire(92, 58, 13) + " " + daire(122, 50, 12),
        w: 2,
        dolgu: true,
      },
      { d: "M26 46 Q34 54 42 46 M54 54 L70 62 M84 62 Q92 50 100 62 M116 46 L128 54", w: 1 },
      { d: daire(50, 110, 14) + " " + daire(90, 112, 16), w: 2, dolgu: true },
      { d: daire(50, 110, 3) + " " + daire(90, 112, 3), w: 1.2 },
      { d: "M80 104 Q90 96 100 104 M80 120 Q90 128 100 120", w: 1 },
    ],
  },
  "kil-hayvan-figur": {
    taramalar: [{ id: "g", sinir: daire(80, 110, 34, 26), kutu: [80, 84, 34, 52], aralik: 4 }],
    cizgiler: [
      { d: daire(80, 110, 34, 26), w: 2.2, dolgu: true },
      { d: daire(80, 66, 22), w: 2.2, dolgu: true },
      { d: "M68 50 Q58 14 70 12 Q78 18 76 46 M92 50 Q102 14 90 12 Q82 18 84 46", w: 2, dolgu: true },
      { d: daire(72, 64, 2.5) + " " + daire(88, 64, 2.5), w: 1.4, dolgu: true },
      { d: "M77 72 L80 75 L83 72", w: 1.2 },
      { d: daire(116, 118, 7), w: 1.6, dolgu: true },
    ],
  },
  "kil-mekan-plakasi": {
    cizgiler: [
      { d: "M50 40 L80 14 L110 40", w: 1.2 },
      { d: daire(80, 80, 60, 36), w: 2.2, dolgu: true },
      { d: daire(50, 54, 3) + " " + daire(110, 54, 3), w: 1.2 },
      {
        d: "M50 72 L50 92 L62 92 M50 72 L62 72 M50 82 L60 82 M68 72 L76 92 L84 72 M92 72 L92 92 M92 68 L92 66 M100 92 L100 72 L108 84 L116 72 L116 92",
        w: 1.8,
      },
      { d: daire(40, 104, 4) + " " + daire(120, 104, 4), w: 1 },
    ],
  },
  "kil-yuzuk-tabagi": {
    cizgiler: [
      { d: daire(80, 130, 50, 12), w: 2.2, dolgu: true },
      {
        d: "M62 128 L60 76 Q60 70 64 70 Q68 70 68 76 L68 60 Q68 54 72 54 Q76 54 76 60 L76 50 Q76 44 80 44 Q84 44 84 50 L84 58 Q84 52 88 52 Q92 52 92 58 L92 88 Q100 78 106 82 Q108 86 100 98 L98 128",
        w: 2,
        dolgu: true,
      },
      { d: daire(72, 76, 6, 3), w: 1.6 },
      { d: daire(108, 132, 7, 3) + " " + daire(50, 134, 6, 2.5), w: 1.4 },
    ],
  },
  "kil-miknatis-meyve": {
    taramalar: [{ id: "k", sinir: "M20 60 A40 40 0 0 0 100 60 Z", kutu: [20, 60, 80, 40], aralik: 4 }],
    cizgiler: [
      { d: "M14 60 A46 46 0 0 0 106 60 Z", w: 2.2, dolgu: true },
      { d: "M20 60 A40 40 0 0 0 100 60", w: 1.4 },
      { d: daire(110, 112, 30), w: 2.2, dolgu: true },
      { d: daire(110, 112, 24), w: 1 },
      {
        d: "M110 112 L110 88 M110 112 L131 100 M110 112 L131 124 M110 112 L110 136 M110 112 L89 124 M110 112 L89 100",
        w: 1.1,
      },
    ],
    noktalar: [
      [44, 72, 2],
      [60, 80, 2],
      [76, 72, 2],
      [56, 66, 1.6],
      [70, 88, 1.6],
    ],
  },
  "seramik-kupa-boyama": {
    cizgiler: [
      { d: "M36 40 L36 128 Q36 138 46 138 L94 138 Q104 138 104 128 L104 40", w: 2.2, dolgu: true },
      { d: daire(70, 40, 34, 7), w: 1.8 },
      { d: "M104 60 Q132 60 132 86 Q132 112 104 112 M104 72 Q120 72 120 86 Q120 100 104 100", w: 2 },
      { d: "M48 110 Q58 80 70 100 Q82 120 92 86 M56 74 L58 70 L62 74 Z M80 72 L84 66 L88 72", w: 1.4 },
      { d: "M120 20 L140 40 L134 46 L114 26 Z", w: 1.4 },
    ],
  },
  "kil-mum-tutucu": {
    taramalar: [{ id: "t", sinir: daire(80, 120, 50, 14), kutu: [30, 120, 100, 14], aralik: 3 }],
    cizgiler: [
      { d: daire(80, 120, 50, 14), w: 2.2, dolgu: true },
      { d: "M30 120 L30 128 Q80 150 130 128 L130 120", w: 1.8 },
      { d: kutu(70, 60, 20, 58), w: 2, dolgu: true },
      { d: "M80 60 L80 52", w: 1.2 },
      { d: "M80 52 Q72 42 80 28 Q88 42 80 52 Z", w: 1.4, dolgu: true },
    ],
  },
  "kil-kase-carkli": {
    taramalar: [{ id: "c", sinir: daire(80, 126, 60, 12), kutu: [20, 126, 120, 12], aralik: 3 }],
    cizgiler: [
      { d: daire(80, 126, 60, 12), w: 2.2, dolgu: true },
      { d: "M20 126 L20 140 Q80 160 140 140 L140 126", w: 1.8 },
      { d: "M50 116 Q46 80 54 66 L106 66 Q114 80 110 116 Z", w: 2, dolgu: true },
      { d: daire(80, 66, 26, 6), w: 1.6 },
      { d: "M34 60 Q42 70 50 82 M126 60 Q118 70 110 82", w: 2.4 },
      { d: "M14 40 Q20 34 28 40 M132 40 Q140 34 146 40", w: 1, kesik: true },
    ],
  },
  "kil-sabunluk": {
    cizgiler: [
      { d: daire(80, 92, 62, 32), w: 2.2, dolgu: true },
      { d: daire(80, 88, 50, 24), w: 1.2 },
      {
        d:
          daire(64, 82, 3) +
          " " +
          daire(80, 80, 3) +
          " " +
          daire(96, 82, 3) +
          " " +
          daire(72, 96, 3) +
          " " +
          daire(88, 96, 3),
        w: 1.2,
      },
      { d: "M40 90 Q60 70 90 104 Q110 120 124 92", w: 0.8 },
      { d: "M56 60 L66 36 L110 40 L104 64 Z", w: 1.8, dolgu: true },
    ],
  },
  "kil-isim-kolye": {
    cizgiler: [
      { d: "M24 14 Q80 90 136 14", w: 1, kesik: true },
      { d: daire(80, 62, 6), w: 1.6 },
      { d: "M56 76 L104 76 L104 92 L88 92 L88 136 L72 136 L72 92 L56 92 Z", w: 2.2, dolgu: true },
      { d: "M62 84 Q70 80 78 84 M90 112 L82 120", w: 1 },
    ],
  },
  "kil-tabak-baski": {
    taramalar: [{ id: "y", sinir: "M80 20 Q140 60 80 140 Q20 60 80 20 Z", kutu: [20, 20, 120, 120], aralik: 6 }],
    cizgiler: [
      { d: "M80 20 Q140 60 80 140 Q20 60 80 20 Z", w: 2.2, dolgu: true },
      { d: "M80 26 L80 136", w: 1.8 },
      {
        d: "M80 48 L58 40 M80 48 L102 40 M80 70 L50 58 M80 70 L110 58 M80 92 L52 82 M80 92 L108 82 M80 112 L62 106 M80 112 L98 106",
        w: 1.1,
      },
    ],
  },
  "kil-minyatur-pasta": {
    taramalar: [{ id: "p", sinir: kutu(36, 96, 88, 34), kutu: [36, 96, 88, 34], aralik: 4 }],
    cizgiler: [
      { d: kutu(36, 96, 88, 34) + " " + kutu(50, 62, 60, 34), w: 2.2, dolgu: true },
      { d: "M50 62 Q56 74 62 64 Q68 76 74 64 Q80 76 86 64 Q92 76 98 64 Q104 74 110 62", w: 1.6 },
      { d: "M36 96 Q44 106 52 98 Q60 108 68 98 Q76 108 84 98 Q92 108 100 98 Q108 108 116 98 Q120 104 124 96", w: 1.6 },
      { d: "M70 62 L70 44 M90 62 L90 44", w: 1.8 },
      { d: "M70 44 Q66 38 70 32 Q74 38 70 44 M90 44 Q86 38 90 32 Q94 38 90 44", w: 1.2, dolgu: true },
      { d: daire(80, 140, 64, 6), w: 1.4 },
    ],
  },
  "kil-kalemlik": {
    cizgiler: [
      { d: "M44 140 L44 70 L116 70 L116 140 Z", w: 2.2, dolgu: true },
      {
        d: Array.from({ length: 7 }, (_, i) => `M44 ${74 + i * 10} Q80 ${80 + i * 10} 116 ${74 + i * 10}`).join(" "),
        w: 1,
      },
      {
        d: "M60 70 L52 24 L58 20 L66 70 M80 70 L82 16 L90 16 L88 70 M100 70 L114 30 L120 34 L106 70",
        w: 1.8,
        dolgu: true,
      },
      { d: "M52 24 L55 14 L58 20 M82 16 L86 6 L90 16", w: 1.2 },
    ],
  },
  "kil-esarp-halkasi": {
    cizgiler: [
      { d: "M30 10 Q60 60 52 160 M60 10 Q72 60 78 160 M130 10 Q100 60 108 160 M100 10 Q88 60 82 160", w: 1.2 },
      { d: daire(80, 76, 34, 14), w: 2.2, dolgu: true },
      { d: "M46 76 L46 96 Q80 116 114 96 L114 76", w: 2.2, dolgu: true },
      { d: daire(66, 96, 5) + " " + daire(94, 96, 5) + " " + daire(80, 100, 4), w: 1.2 },
    ],
  },
  "kil-saat": {
    taramalar: [{ id: "z", sinir: daire(80, 80, 60), kutu: [20, 20, 120, 120], aralik: 9 }],
    cizgiler: [
      { d: daire(80, 80, 60), w: 2.4, dolgu: true },
      { d: daire(80, 80, 50), w: 1 },
      {
        d: Array.from({ length: 12 }, (_, i) => {
          const a = (i / 12) * Math.PI * 2;
          return daire(80 + Math.cos(a) * 42, 80 + Math.sin(a) * 42, i % 3 ? 2 : 4);
        }).join(" "),
        w: 1.2,
        dolgu: true,
      },
      { d: "M80 80 L80 50 M80 80 L100 92", w: 2.4 },
    ],
    noktalar: [[80, 80, 3]],
  },
  "kil-hediye-etiketi": {
    cizgiler: [
      { d: yildiz(50, 60, 32), w: 2, dolgu: true },
      { d: kalp(112, 104, 2.6), w: 2, dolgu: true },
      { d: daire(50, 40, 3) + " " + daire(112, 86, 3), w: 1.2 },
      { d: "M50 37 Q40 14 60 10 M112 83 Q128 60 118 40", w: 1, kesik: true },
      { d: "M38 62 L44 66 L50 60 L56 66 L62 62", w: 0.8 },
    ],
  },
};
