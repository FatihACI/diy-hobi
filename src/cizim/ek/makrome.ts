import { Cizim, daire, kutu } from "../arac";

// Dikey kare düğüm zinciri
const dugumler = (x: number, y: number, adet: number, ara = 10) =>
  Array.from({ length: adet }, (_, i) => {
    const yy = y + i * ara;
    return `M${x - 5} ${yy} Q${x} ${yy + 4} ${x + 5} ${yy} M${x - 5} ${yy + 5} Q${x} ${yy + 1} ${x + 5} ${yy + 5}`;
  }).join(" ");
// Aşağı sarkan saçak
const sacak = (x: number, y: number, adet: number, boy: number, ara = 3) =>
  Array.from({ length: adet }, (_, i) => `M${x + i * ara} ${y} L${x + i * ara + (i - adet / 2) * 0.6} ${y + boy}`).join(
    " ",
  );
// Örgü ilmek sırası (V'ler)
const ilmekSira = (x: number, y: number, adet: number, en = 8, boy = 6) =>
  Array.from(
    { length: adet },
    (_, i) => `M${x + i * en} ${y} L${x + i * en + en / 2} ${y + boy} L${x + (i + 1) * en} ${y}`,
  ).join(" ");

// Makrome & Örgü ek projelerinin çizimleri (viewBox 0 0 160 160)
export const MAKROME_CIZIM: Record<string, Cizim> = {
  "makrome-anahtarlik": {
    cizgiler: [
      { d: daire(80, 26, 14), w: 2 },
      { d: "M74 40 L74 50 M86 40 L86 50", w: 1.6 },
      { d: dugumler(80, 52, 6), w: 1.8 },
      { d: "M72 112 L88 112 L88 120 L72 120 Z", w: 1.6, dolgu: true },
      { d: sacak(70, 120, 7, 28), w: 0.9 },
    ],
  },
  "makrome-bileklik": {
    cizgiler: [
      { d: daire(80, 80, 52, 34), w: 2 },
      { d: daire(80, 80, 44, 27), w: 1.2 },
      { d: daire(80, 114, 6), w: 1.6, dolgu: true },
      { d: daire(56, 110, 4) + " " + daire(104, 110, 4), w: 1.4, dolgu: true },
      { d: kutu(70, 40, 20, 12), w: 1.8, dolgu: true },
      { d: "M74 40 L70 24 M86 40 L90 24", w: 1 },
    ],
  },
  "makrome-ayna": {
    taramalar: [{ id: "a", sinir: daire(80, 70, 30), kutu: [50, 40, 60, 60], aralik: 6 }],
    cizgiler: [
      { d: daire(80, 70, 44), w: 2.4 },
      { d: daire(80, 70, 30), w: 1.6, dolgu: true },
      {
        d: Array.from({ length: 16 }, (_, i) => {
          const a = (i / 16) * Math.PI * 2;
          return `M${80 + Math.cos(a) * 32} ${70 + Math.sin(a) * 32} L${80 + Math.cos(a) * 44} ${70 + Math.sin(a) * 44}`;
        }).join(" "),
        w: 1,
      },
      { d: sacak(56, 112, 17, 34), w: 0.8 },
    ],
  },
  "makrome-perde": {
    cizgiler: [
      { d: "M14 20 L146 20", w: 3 },
      { d: sacak(24, 20, 23, 124, 5), w: 0.8 },
      { d: dugumler(44, 30, 3) + " " + dugumler(80, 30, 3) + " " + dugumler(116, 30, 3), w: 1.6 },
      { d: dugumler(62, 64, 3) + " " + dugumler(98, 64, 3), w: 1.6 },
      { d: dugumler(80, 98, 2), w: 1.6 },
    ],
  },
  "makrome-tuy": {
    cizgiler: [
      { d: "M80 18 L80 146", w: 2.2 },
      { d: "M80 26 Q40 50 50 120 Q70 140 80 140 Q90 140 110 120 Q120 50 80 26 Z", w: 1.8, dolgu: true },
      {
        d: Array.from({ length: 12 }, (_, i) => {
          const y = 40 + i * 8;
          return `M80 ${y} L${54 + i} ${y + 10} M80 ${y} L${106 - i} ${y + 10}`;
        }).join(" "),
        w: 0.7,
      },
    ],
  },
  "cilgin-yorgan": {
    taramalar: [
      { id: "a", sinir: kutu(30, 30, 46, 46), kutu: [30, 30, 46, 46], aralik: 4 },
      { id: "b", sinir: kutu(84, 84, 46, 46), kutu: [84, 84, 46, 46], aralik: 4, ters: true },
    ],
    cizgiler: [
      {
        d: kutu(30, 30, 46, 46) + " " + kutu(84, 30, 46, 46) + " " + kutu(30, 84, 46, 46) + " " + kutu(84, 84, 46, 46),
        w: 2,
        dolgu: true,
      },
      { d: kutu(96, 42, 22, 22) + " " + kutu(42, 96, 22, 22), w: 1.2 },
      { d: daire(107, 53, 4) + " " + daire(53, 107, 4), w: 1 },
    ],
  },
  "orgu-atki": {
    cizgiler: [
      { d: "M50 20 Q80 34 110 20 L106 40 Q80 52 54 40 Z", w: 2, dolgu: true },
      { d: "M60 44 L52 132 L80 132 L84 48", w: 2, dolgu: true },
      {
        d:
          ilmekSira(54, 60, 3, 9) +
          " " +
          ilmekSira(54, 76, 3, 9) +
          " " +
          ilmekSira(53, 92, 3, 9) +
          " " +
          ilmekSira(53, 108, 3, 9),
        w: 0.9,
      },
      { d: sacak(53, 132, 9, 14), w: 0.9 },
      { d: "M120 120 L140 60 M126 122 L148 66", w: 1.8 },
    ],
  },
  "orgu-bere": {
    cizgiler: [
      { d: "M30 120 Q30 50 80 46 Q130 50 130 120 Z", w: 2.2, dolgu: true },
      { d: kutu(28, 110, 104, 18), w: 2, dolgu: true },
      { d: Array.from({ length: 13 }, (_, i) => `M${32 + i * 8} 112 L${32 + i * 8} 126`).join(" "), w: 0.8 },
      { d: ilmekSira(40, 78, 10, 8) + " " + ilmekSira(40, 94, 10, 8), w: 0.8 },
      { d: daire(80, 34, 16), w: 1.8, dolgu: true },
    ],
  },
  "amigurumi-ahtapot": {
    cizgiler: [
      { d: "M44 84 Q40 20 80 20 Q120 20 116 84 Z", w: 2.2, dolgu: true },
      { d: daire(68, 60, 4) + " " + daire(92, 60, 4), w: 1.6, dolgu: true },
      { d: "M74 72 Q80 78 86 72", w: 1.4 },
      {
        d: [46, 60, 74, 88, 102, 114]
          .map(
            (x, i) =>
              `M${x} 84 Q${x + (i % 2 ? 10 : -10)} 110 ${x} 124 Q${x + (i % 2 ? -8 : 8)} 136 ${x + (i % 2 ? 4 : -4)} 140`,
          )
          .join(" "),
        w: 2,
      },
    ],
  },
  "orgu-sepet": {
    cizgiler: [
      { d: daire(80, 50, 54, 14), w: 2.2 },
      { d: "M26 50 L36 130 Q80 146 124 130 L134 50", w: 2.2, dolgu: true },
      {
        d:
          ilmekSira(30, 66, 12, 8.4) +
          " " +
          ilmekSira(31, 84, 12, 8.2) +
          " " +
          ilmekSira(33, 102, 11, 8.6) +
          " " +
          ilmekSira(35, 118, 11, 8.2),
        w: 0.9,
      },
      { d: kutu(60, 52, 40, 6), w: 1.2 },
    ],
  },
  "orgu-bardak-alti": {
    cizgiler: [
      { d: daire(80, 80, 56, 40), w: 2.2, dolgu: true },
      { d: daire(80, 80, 40, 28), w: 1 },
      { d: daire(80, 80, 24, 16), w: 1 },
      { d: daire(80, 80, 8, 5), w: 1 },
      {
        d: Array.from({ length: 14 }, (_, i) => {
          const a = (i / 14) * Math.PI * 2;
          return `M${80 + Math.cos(a) * 50} ${80 + Math.sin(a) * 35} Q${80 + Math.cos(a + 0.22) * 62} ${80 + Math.sin(a + 0.22) * 44} ${80 + Math.cos(a + 0.45) * 50} ${80 + Math.sin(a + 0.45) * 35}`;
        }).join(" "),
        w: 1,
      },
    ],
  },
  "makrome-canta": {
    cizgiler: [
      { d: daire(60, 30, 14) + " " + daire(100, 30, 14), w: 2 },
      { d: "M40 44 L120 44 L130 132 Q80 146 30 132 Z", w: 2, dolgu: true },
      {
        d: Array.from({ length: 6 }, (_, r) =>
          Array.from({ length: 5 }, (_, c) => {
            const x = 44 + c * 18 + (r % 2) * 9,
              y = 56 + r * 14;
            return `M${x - 6} ${y} L${x} ${y + 7} L${x + 6} ${y} L${x} ${y - 7} Z`;
          }).join(" "),
        ).join(" "),
        w: 0.9,
      },
    ],
  },
  "makrome-tavuk": {
    cizgiler: [
      { d: "M80 4 L80 30", w: 1.6 },
      { d: daire(80, 34, 16, 4), w: 2 },
      { d: daire(80, 110, 46, 10), w: 2.2 },
      { d: "M64 34 L34 110 M96 34 L126 110 M72 36 L56 110 M88 36 L104 110 M80 38 L80 110", w: 1 },
      { d: dugumler(52, 60, 3) + " " + dugumler(108, 60, 3) + " " + dugumler(80, 70, 2), w: 1.4 },
      { d: sacak(40, 120, 27, 22), w: 0.7 },
      { d: daire(80, 104, 8), w: 1.4, dolgu: true },
    ],
  },
  "ponpon-hali": {
    cizgiler: [
      { d: "M20 120 L50 50 L140 50 L110 120 Z", w: 2, dolgu: true },
      {
        d: [
          [44, 66],
          [64, 66],
          [84, 66],
          [104, 66],
          [124, 66],
          [38, 86],
          [58, 86],
          [78, 86],
          [98, 86],
          [118, 86],
          [32, 106],
          [52, 106],
          [72, 106],
          [92, 106],
          [112, 106],
        ]
          .map(([x, y]) => daire(x, y, 9, 7))
          .join(" "),
        w: 1.2,
      },
    ],
    noktalar: [
      [44, 66, 1],
      [78, 86, 1],
      [112, 106, 1],
    ],
  },
  "orgu-corap": {
    cizgiler: [
      { d: "M56 16 L96 16 L96 90 Q100 110 128 116 Q146 120 140 138 L80 138 Q56 138 56 112 Z", w: 2.2, dolgu: true },
      { d: kutu(56, 16, 40, 20), w: 1.6 },
      { d: Array.from({ length: 6 }, (_, i) => `M${60 + i * 7} 18 L${60 + i * 7} 34`).join(" "), w: 0.8 },
      { d: ilmekSira(58, 48, 4, 9) + " " + ilmekSira(58, 66, 4, 9) + " " + ilmekSira(58, 84, 4, 9), w: 0.8 },
      { d: "M56 112 Q66 100 80 108 M120 118 Q114 128 120 138", w: 1.2 },
    ],
  },
  "tel-tava-orgu": {
    taramalar: [{ id: "s", sinir: "M56 100 L104 100 L98 140 L62 140 Z", kutu: [56, 100, 48, 40], aralik: 4 }],
    cizgiler: [
      { d: daire(80, 14, 8), w: 1.8 },
      { d: "M76 20 L46 100 M84 20 L114 100 M78 21 L66 100 M82 21 L94 100", w: 1.2 },
      { d: "M44 100 L116 100 L110 146 L50 146 Z", w: 2, dolgu: true },
      { d: ilmekSira(46, 108, 9, 7.6) + " " + ilmekSira(48, 124, 8, 8), w: 0.9 },
      { d: "M70 100 Q60 80 66 68 M80 100 Q82 76 92 66 M90 100 Q104 86 110 82", w: 1.4 },
    ],
  },
  "makrome-duvar-rafi": {
    cizgiler: [
      { d: daire(80, 14, 8), w: 1.8 },
      { d: "M76 20 L30 96 M84 20 L130 96", w: 1.2 },
      { d: dugumler(48, 50, 3) + " " + dugumler(112, 50, 3), w: 1.4 },
      { d: kutu(20, 96, 120, 10), w: 2.2, dolgu: true },
      { d: "M30 106 L30 120 M130 106 L130 120", w: 1 },
      { d: "M40 96 L44 74 L64 74 L68 96 Z", w: 1.6, dolgu: true },
      { d: "M54 74 Q46 60 50 52 M54 74 Q60 60 66 56", w: 1.2 },
      { d: kutu(96, 80, 16, 16), w: 1.6, dolgu: true },
    ],
  },
};
