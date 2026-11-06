import { Cizim, daire, kutu } from "../arac";

const y2 = (x: number) => Math.round(x * 100) / 100;
// Pirografi kalemi: uç (x,y) noktasında, gövde sağ üste uzanır
const kalem = (x: number, y: number) =>
  `M${x} ${y} L${x + 8} ${y - 14} L${x + 14} ${y - 10} Z M${x + 8} ${y - 14} L${x + 34} ${y - 50} L${x + 44} ${y - 42} L${x + 14} ${y - 10} M${x + 39} ${y - 46} Q${x + 54} ${y - 64} ${x + 66} ${y - 62}`;
const cevreNokta = (cx: number, cy: number, r: number, adet: number, rr: number) =>
  Array.from({ length: adet }, (_, i) => {
    const a = (i / adet) * Math.PI * 2;
    return daire(y2(cx + Math.cos(a) * r), y2(cy + Math.sin(a) * r), rr);
  }).join(" ");

// Kalp eğrisi üzerinde çivi noktaları
const kalpTeli = (): [number, number][] =>
  Array.from({ length: 20 }, (_, i) => {
    const t = (i / 20) * Math.PI * 2;
    return [
      y2(80 + 2.9 * 16 * Math.pow(Math.sin(t), 3)),
      y2(76 - 3 * (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t))),
    ];
  });

// Pirografi & Resim ek projelerinin çizimleri (viewBox 0 0 160 160)
export const PIROGRAFI_CIZIM: Record<string, Cizim> = {
  "pirografi-kasik": {
    taramalar: [{ id: "k", sinir: daire(50, 50, 24, 32), kutu: [26, 18, 48, 64], aralik: 5 }],
    cizgiler: [
      { d: daire(50, 50, 24, 32), w: 2.2, dolgu: true },
      { d: "M56 80 L120 144 L132 136 L64 76", w: 2.2, dolgu: true },
      { d: "M84 104 Q92 98 96 106 Q92 114 84 104 Z M100 120 L104 112 M108 126 Q116 120 118 128", w: 1.2 },
    ],
  },
  "pirografi-kesme-tahtasi": {
    cizgiler: [
      {
        d: "M20 40 L120 40 Q130 40 130 50 L130 110 Q130 120 120 120 L20 120 Q10 120 10 110 L10 50 Q10 40 20 40 Z",
        w: 2.2,
        dolgu: true,
      },
      { d: "M130 70 L150 70 L150 90 L130 90", w: 2, dolgu: true },
      { d: daire(144, 80, 3), w: 1.2 },
      { d: "M30 70 Q40 60 46 70 Q52 80 60 70 M66 64 L66 80 M72 64 L80 80 L88 64 M96 70 Q104 60 110 70", w: 2 },
      { d: "M40 96 L100 96", w: 1, kesik: true },
    ],
  },
  "pirografi-portre": {
    taramalar: [
      {
        id: "p",
        sinir: "M50 60 Q48 30 80 28 Q112 30 110 60 Q114 100 80 116 Q46 100 50 60 Z",
        kutu: [46, 28, 68, 88],
        aralik: 4,
      },
    ],
    cizgiler: [
      { d: kutu(20, 14, 120, 132), w: 2.2, dolgu: true },
      { d: "M50 60 Q48 30 80 28 Q112 30 110 60 Q114 100 80 116 Q46 100 50 60 Z", w: 1.8 },
      { d: "M52 40 L40 20 L62 32 M108 40 L120 20 L98 32", w: 1.8, dolgu: true },
      { d: daire(68, 64, 4) + " " + daire(92, 64, 4), w: 1.6, dolgu: true },
      { d: "M74 82 L80 88 L86 82 Z M80 88 L80 96 M72 98 Q80 102 88 98", w: 1.4 },
    ],
  },
  "pirografi-saat": {
    taramalar: [{ id: "h", sinir: daire(80, 80, 62), kutu: [18, 18, 124, 124], aralik: 11 }],
    cizgiler: [
      { d: daire(80, 80, 62), w: 3, dolgu: true },
      { d: daire(80, 80, 54), w: 1 },
      { d: daire(80, 80, 30) + " " + daire(80, 80, 18), w: 0.7 },
      { d: "M78 30 L78 40 M82 30 L82 40 M120 78 L128 78 M30 80 L40 80 M76 120 L84 120 M80 120 L80 130", w: 1.8 },
      { d: "M80 80 L80 46 M80 80 L104 90", w: 2.4 },
    ],
    noktalar: [[80, 80, 3]],
  },
  "pirografi-mandala": {
    cizgiler: [
      { d: kutu(14, 14, 132, 132), w: 2, dolgu: true },
      { d: daire(80, 80, 56) + " " + daire(80, 80, 40) + " " + daire(80, 80, 20), w: 1.4 },
      {
        d: Array.from({ length: 12 }, (_, i) => {
          const a = (i / 12) * Math.PI * 2,
            b = a + Math.PI / 12;
          return `M${y2(80 + Math.cos(a) * 20)} ${y2(80 + Math.sin(a) * 20)} Q${y2(80 + Math.cos(b) * 44)} ${y2(80 + Math.sin(b) * 44)} ${y2(80 + Math.cos(a + Math.PI / 6) * 20)} ${y2(80 + Math.sin(a + Math.PI / 6) * 20)}`;
        }).join(" "),
        w: 1.2,
      },
      { d: cevreNokta(80, 80, 48, 24, 2), w: 1, dolgu: true },
      { d: daire(80, 80, 6), w: 1.6, dolgu: true },
    ],
  },
  "pirografi-kutu": {
    taramalar: [{ id: "y", sinir: "M20 60 L100 60 L140 40 L60 40 Z", kutu: [20, 40, 120, 20], aralik: 3 }],
    cizgiler: [
      { d: "M20 60 L100 60 L100 130 L20 130 Z", w: 2.2, dolgu: true },
      { d: "M100 60 L140 40 L140 110 L100 130", w: 2.2, dolgu: true },
      { d: "M20 60 L60 40 L140 40", w: 2.2 },
      { d: "M40 84 Q60 70 80 84 Q60 98 40 84 Z M60 84 L60 112 M48 100 L60 106 L72 100", w: 1.4 },
    ],
  },
  "pirografi-deri": {
    taramalar: [{ id: "d", sinir: "M30 50 L110 50 L110 130 L30 130 Z", kutu: [30, 50, 80, 80], aralik: 7 }],
    cizgiler: [
      {
        d: "M30 50 Q28 40 40 40 L100 40 Q112 40 110 50 L114 130 Q116 140 104 140 L36 140 Q24 140 26 130 Z",
        w: 2.2,
        dolgu: true,
      },
      { d: "M50 90 Q70 60 90 90 Q70 120 50 90 Z", w: 1.6 },
      { d: daire(70, 90, 6), w: 1.4 },
      { d: kalem(96, 96), w: 1.8, dolgu: true },
      { d: "M92 100 Q88 92 94 86", w: 1, kesik: true },
    ],
  },
  "pirografi-kalemlik": {
    cizgiler: [
      { d: "M40 60 L40 140 Q80 150 120 140 L120 60", w: 2.2, dolgu: true },
      { d: daire(80, 60, 40, 8), w: 2, dolgu: true },
      { d: daire(80, 60, 30, 5), w: 0.8 },
      { d: "M56 90 Q64 80 72 90 Q80 100 88 90 Q96 80 104 90 M60 114 L100 114", w: 1.6 },
      { d: "M64 60 L56 14 L62 10 L70 58 M90 58 L100 18 L106 22 L96 60", w: 1.6, dolgu: true },
    ],
  },
  "akrilik-tuval-manzara": {
    taramalar: [{ id: "d", sinir: "M24 110 L60 64 L84 90 L104 70 L136 110 Z", kutu: [24, 64, 112, 46], aralik: 4 }],
    cizgiler: [
      { d: kutu(20, 26, 120, 100), w: 2.4, dolgu: true },
      { d: "M24 110 L60 64 L84 90 L104 70 L136 110", w: 1.8 },
      { d: daire(110, 50, 12), w: 1.6 },
      { d: "M30 120 L50 120 M70 118 L110 118", w: 1 },
      { d: "M50 126 L36 156 M110 126 L124 156 M80 126 L80 150", w: 2 },
    ],
  },
  "tas-boyama-mandala": {
    cizgiler: [
      { d: "M24 84 Q20 40 80 36 Q140 40 136 84 Q132 124 80 126 Q28 124 24 84 Z", w: 2.4, dolgu: true },
      { d: cevreNokta(80, 82, 12, 8, 3), w: 1.2, dolgu: true },
      { d: cevreNokta(80, 82, 24, 14, 2.6), w: 1.2 },
      { d: cevreNokta(80, 82, 36, 20, 2), w: 1.2, dolgu: true },
    ],
    noktalar: [[80, 82, 5]],
  },
  "suluboya-kartpostal": {
    cizgiler: [
      { d: kutu(20, 30, 120, 100), w: 2, dolgu: true },
      { d: kutu(24, 34, 112, 92), w: 0.8, kesik: true },
      {
        d: Array.from({ length: 5 }, (_, i) => {
          const a = (i / 5) * Math.PI * 2 - Math.PI / 2;
          return daire(y2(70 + Math.cos(a) * 12), y2(64 + Math.sin(a) * 12), 9);
        }).join(" "),
        w: 1.4,
      },
      { d: "M70 76 Q66 100 72 120 M70 100 Q56 92 50 100 Q60 106 70 100", w: 1.4 },
      { d: "M104 40 L128 40 L128 64 L104 64 Z", w: 1, kesik: true },
    ],
    noktalar: [[70, 64, 3]],
  },
  "tisort-boyama": {
    cizgiler: [
      {
        d: "M50 20 Q80 34 110 20 L144 40 L132 64 L116 56 L116 144 L44 144 L44 56 L28 64 L16 40 Z",
        w: 2.2,
        dolgu: true,
      },
      { d: "M62 20 Q80 30 98 20", w: 1.2 },
      { d: "M80 74 L86 90 L104 90 L90 100 L96 118 L80 108 L64 118 L70 100 L56 90 L74 90 Z", w: 2, dolgu: true },
      { d: "M128 110 L150 132 L142 140 L120 118 Z", w: 1.4 },
    ],
  },
  "cam-boyama": {
    cizgiler: [
      {
        d: "M44 30 L116 30 L116 40 Q126 50 126 66 L126 130 Q126 142 114 142 L46 142 Q34 142 34 130 L34 66 Q34 50 44 40 Z",
        w: 2.2,
        dolgu: true,
      },
      { d: kutu(44, 22, 72, 8), w: 1.6 },
      {
        d: "M34 80 L80 60 L126 80 M34 110 L80 130 L126 110 M80 60 L80 130 M34 80 L80 96 L126 80 M34 110 L80 96 L126 110",
        w: 1.6,
      },
    ],
  },
  "string-art": {
    cizgiler: [
      { d: kutu(14, 14, 132, 132), w: 2.2, dolgu: true },
      {
        d: kalpTeli()
          .map(([x, y], i, n) => `M${x} ${y} L${n[(i + 7) % n.length][0]} ${n[(i + 7) % n.length][1]}`)
          .join(" "),
        w: 0.7,
      },
      {
        d:
          kalpTeli()
            .map(([x, y], i) => `${i ? "L" : "M"}${x} ${y}`)
            .join(" ") + " Z",
        w: 0.9,
      },
    ],
    noktalar: kalpTeli().map(([x, y]) => [x, y, 1.8] as [number, number, number]),
  },
  "pirografi-baslangic": {
    taramalar: [
      { id: "a", sinir: kutu(20, 100, 24, 24), kutu: [20, 100, 24, 24], aralik: 6 },
      { id: "b", sinir: kutu(50, 100, 24, 24), kutu: [50, 100, 24, 24], aralik: 4 },
      { id: "c", sinir: kutu(80, 100, 24, 24), kutu: [80, 100, 24, 24], aralik: 2.5 },
    ],
    cizgiler: [
      { d: kutu(10, 60, 140, 76), w: 2.2, dolgu: true },
      { d: "M20 72 L70 72 M20 80 Q45 74 70 80 M20 88 L70 88", w: 1.4 },
      {
        d:
          kutu(20, 100, 24, 24) +
          " " +
          kutu(50, 100, 24, 24) +
          " " +
          kutu(80, 100, 24, 24) +
          " " +
          kutu(110, 100, 24, 24),
        w: 1.2,
      },
      { d: kalem(84, 82), w: 1.8, dolgu: true },
    ],
    noktalar: [
      [116, 106, 1.5],
      [124, 112, 1.5],
      [118, 118, 1.5],
      [128, 104, 1.5],
    ],
  },
  "akiskan-resim-bardak-alti": {
    cizgiler: [
      {
        d: kutu(20, 30, 56, 56) + " " + kutu(84, 30, 56, 56) + " " + kutu(20, 94, 56, 56) + " " + kutu(84, 94, 56, 56),
        w: 2,
        dolgu: true,
      },
      {
        d: "M20 54 Q40 40 56 60 Q66 72 76 64 M84 46 Q100 70 120 54 Q130 46 140 60 M20 120 Q36 104 52 124 Q62 136 76 120 M84 110 Q104 96 112 120 Q120 140 140 126",
        w: 1.4,
      },
      { d: daire(46, 48, 4) + " " + daire(118, 70, 5) + " " + daire(40, 132, 3) + " " + daire(110, 104, 4), w: 1 },
    ],
  },
  "pirografi-isimlik": {
    taramalar: [{ id: "u", sinir: "M20 110 L140 110 L120 130 L40 130 Z", kutu: [20, 110, 120, 20], aralik: 3 }],
    cizgiler: [
      { d: "M20 110 L50 50 L130 50 L140 110 Z", w: 2.2, dolgu: true },
      { d: "M20 110 L40 130 L120 130 L140 110", w: 2 },
      { d: "M60 88 L68 70 L76 88 M63 82 L73 82 M84 70 L84 88 L96 88 M104 72 L104 88 M104 66 L104 67", w: 1.8 },
      { d: "M60 98 L112 98", w: 1 },
    ],
  },
};
