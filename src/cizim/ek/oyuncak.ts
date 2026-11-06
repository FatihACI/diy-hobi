import { Cizim, daire, kutu } from "../arac";

// Oyuncak ek projelerinin çizimleri (viewBox 0 0 160 160)
export const OYUNCAK_CIZIM: Record<string, Cizim> = {
  // Fil yapbozu, bir parça kalkık
  "ahsap-yapboz": {
    taramalar: [{ id: "p", sinir: "M112 30 L146 30 L146 56 L112 56 Z", kutu: [112, 30, 34, 26], aralik: 3, sonra: 4 }],
    cizgiler: [
      { d: kutu(14, 60, 132, 86), w: 2 },
      {
        d: "M30 130 L30 104 Q30 76 64 74 L96 74 Q114 74 118 92 Q122 104 132 110 L128 118 Q116 114 112 106 L112 130 L98 130 L98 112 L50 112 L50 130 Z",
        w: 1.8,
        dolgu: true,
      },
      { d: "M64 74 L64 112 M98 74 L90 112 M30 98 L64 98", w: 1.2, kesik: true },
      { d: daire(104, 88, 2) + "M112 82 Q108 92 112 100", w: 1.2 },
      { d: "M112 30 L146 30 L146 56 L112 56 Z", w: 1.8, dolgu: true },
      { d: "M104 50 L110 44 M100 40 L108 38", w: 1 },
    ],
  },

  // Dişli kuleli karton kale
  "karton-kale": {
    taramalar: [
      { id: "k", sinir: "M66 146 L66 112 Q80 98 94 112 L94 146 Z", kutu: [66, 98, 28, 48], aralik: 3, sonra: 3 },
    ],
    cizgiler: [
      { d: "M14 146 L14 40 L22 40 L22 32 L30 32 L30 40 L38 40 L38 32 L46 32 L46 40 L46 146", w: 2, dolgu: true },
      {
        d: "M114 146 L114 40 L122 40 L122 32 L130 32 L130 40 L138 40 L138 32 L146 32 L146 40 L146 146",
        w: 2,
        dolgu: true,
      },
      {
        d: "M46 146 L46 66 L54 66 L54 58 L62 58 L62 66 L70 66 L70 58 L78 58 L78 66 L86 66 L86 58 L94 58 L94 66 L102 66 L102 58 L110 58 L110 66 L114 66 L114 146",
        w: 2,
        dolgu: true,
      },
      { d: "M66 146 L66 112 Q80 98 94 112 L94 146 Z", w: 1.8, dolgu: true },
      { d: "M66 114 L50 140 M94 114 L110 140", w: 1, kesik: true },
      { d: kutu(26, 60, 8, 14) + kutu(126, 60, 8, 14) + kutu(26, 96, 8, 14) + kutu(126, 96, 8, 14), w: 1.3 },
      { d: "M30 32 L30 10 L44 16 L30 22", w: 1.3 },
      { d: "M14 146 L146 146", w: 2 },
    ],
  },

  // Çorap kukla
  "corap-kukla": {
    taramalar: [
      { id: "a", sinir: "M40 84 Q60 70 84 76 L84 94 Q60 100 40 92 Z", kutu: [40, 70, 44, 30], aralik: 2.5, sonra: 1 },
    ],
    cizgiler: [
      {
        d: "M86 150 L86 104 Q86 96 76 96 L48 96 Q26 96 24 80 Q24 60 48 58 L80 58 Q112 60 114 90 L114 150",
        w: 2,
        dolgu: true,
      },
      { d: "M40 84 Q60 70 84 76 L84 94 Q60 100 40 92 Z", w: 1.4 },
      { d: daire(72, 46, 9) + daire(96, 48, 9), w: 1.6, dolgu: true },
      { d: "M78 30 Q74 16 82 12 M88 30 Q90 14 98 12 M96 32 Q104 20 112 22", w: 1.4 },
      { d: "M86 130 L114 130 M86 138 L114 138", w: 0.9 },
      { d: "M30 74 L26 70", w: 1.6 },
    ],
    noktalar: [
      [74, 47, 3],
      [94, 49, 3],
    ],
  },

  // İple bağlı iki bardak
  "bardak-telefon": {
    taramalar: [
      { id: "a", sinir: "M14 60 L46 70 L46 100 L14 110 Z", kutu: [14, 60, 32, 50], aralik: 3, sonra: 0 },
      {
        id: "b",
        sinir: "M146 60 L114 70 L114 100 L146 110 Z",
        kutu: [114, 60, 32, 50],
        aralik: 3,
        ters: true,
        sonra: 1,
      },
    ],
    cizgiler: [
      { d: "M14 60 L46 70 L46 100 L14 110 Z", w: 2, dolgu: true },
      { d: "M146 60 L114 70 L114 100 L146 110 Z", w: 2, dolgu: true },
      { d: daire(14, 85, 6, 25), w: 1.6 },
      { d: daire(146, 85, 6, 25), w: 1.6 },
      { d: "M46 85 Q80 92 114 85", w: 1.1 },
      { d: "M60 64 Q66 70 60 76 M70 58 Q80 70 70 82", w: 1.2 },
      { d: "M100 64 Q94 70 100 76 M90 58 Q80 70 90 82", w: 1, kesik: true },
    ],
  },

  // Kaleydoskop ve desen
  kaleydoskop: {
    taramalar: [{ id: "t", sinir: "M20 120 L80 60 L96 76 L36 136 Z", kutu: [20, 60, 76, 76], aralik: 4 }],
    cizgiler: [
      { d: "M20 120 L80 60 L96 76 L36 136 Z", w: 2, dolgu: true },
      { d: daire(88, 68, 11, 11), w: 1.6, dolgu: true },
      { d: daire(28, 128, 6), w: 1.4, dolgu: true },
      { d: daire(118, 44, 30), w: 2, dolgu: true },
      { d: "M118 14 L118 74 M92 29 L144 59 M92 59 L144 29", w: 0.8 },
      { d: "M118 30 L128 44 L118 58 L108 44 Z", w: 1.4, dolgu: true },
      {
        d:
          daire(102, 36, 4) +
          daire(134, 36, 4) +
          daire(102, 52, 4) +
          daire(134, 52, 4) +
          daire(118, 22, 3) +
          daire(118, 66, 3),
        w: 1.1,
      },
    ],
  },

  // Baklava uçurtma
  ucurtma: {
    taramalar: [{ id: "u", sinir: "M80 12 L120 52 L80 112 Z", kutu: [80, 12, 40, 100], aralik: 4, sonra: 0 }],
    cizgiler: [
      { d: "M80 12 L120 52 L80 112 L40 52 Z", w: 2, dolgu: true },
      { d: "M80 12 L80 112 M40 52 L120 52", w: 1.4 },
      { d: "M80 112 Q70 126 84 134 Q98 142 86 154", w: 1.2 },
      {
        d: "M74 124 L80 120 L80 128 Z M78 124 L86 120 L86 128 Z M82 144 L88 140 L88 148 Z M86 144 L94 140 L94 148 Z",
        w: 1.2,
        dolgu: true,
      },
      { d: "M80 62 Q40 96 14 154", w: 0.9, kesik: true },
      { d: "M130 24 L144 20 M132 36 L148 36", w: 1 },
    ],
  },

  // Oyun hamuru topları, merdane, kalıp
  "oyun-hamuru": {
    taramalar: [{ id: "h", sinir: daire(46, 70, 22), kutu: [24, 48, 44, 44], aralik: 4, sonra: 0 }],
    cizgiler: [
      { d: daire(46, 70, 22), w: 2, dolgu: true },
      { d: daire(96, 60, 18), w: 2, dolgu: true },
      { d: daire(130, 84, 14), w: 2, dolgu: true },
      { d: "M90 52 Q96 48 102 52", w: 0.9 },
      { d: "M14 130 L120 100 L126 112 L20 142 Z", w: 1.8, dolgu: true },
      { d: "M120 100 L144 94 M126 112 L148 106", w: 2 },
      {
        d: "M108 130 L114 120 L122 130 L132 128 L126 136 L130 146 L120 142 L112 148 L112 138 L104 134 Z",
        w: 1.6,
        dolgu: true,
      },
    ],
  },

  // Klasik tangram karesi
  tangram: {
    taramalar: [
      { id: "b", sinir: "M30 30 L130 30 L80 80 Z", kutu: [30, 30, 100, 50], aralik: 4, sonra: 0 },
      { id: "s", sinir: "M80 80 L105 55 L130 80 L105 105 Z", kutu: [80, 55, 50, 50], aralik: 3, ters: true, sonra: 3 },
      { id: "p", sinir: "M55 105 L105 105 L80 130 L30 130 Z", kutu: [30, 105, 75, 25], aralik: 3, sonra: 6 },
    ],
    cizgiler: [
      { d: "M30 30 L130 30 L80 80 Z", w: 1.8, dolgu: true },
      { d: "M30 30 L80 80 L30 130 Z", w: 1.8, dolgu: true },
      { d: "M105 55 L130 30 L130 80 Z", w: 1.8, dolgu: true },
      { d: "M80 80 L105 55 L130 80 L105 105 Z", w: 1.8, dolgu: true },
      { d: "M80 80 L105 105 L55 105 Z", w: 1.8, dolgu: true },
      { d: "M130 80 L130 130 L80 130 Z", w: 1.8, dolgu: true },
      { d: "M55 105 L105 105 L80 130 L30 130 Z", w: 1.8, dolgu: true },
      { d: kutu(30, 30, 100, 100), w: 2.4 },
    ],
  },

  // Fırıldak
  firildak: {
    taramalar: [
      { id: "a", sinir: "M80 60 L80 14 L120 54 Z", kutu: [80, 14, 40, 46], aralik: 3, sonra: 0 },
      { id: "b", sinir: "M80 60 L80 106 L40 66 Z", kutu: [40, 60, 40, 46], aralik: 3, sonra: 2 },
    ],
    cizgiler: [
      { d: "M80 60 L80 14 L120 54 Z", w: 1.8, dolgu: true },
      { d: "M80 60 L126 60 L86 100 Z", w: 1.8, dolgu: true },
      { d: "M80 60 L80 106 L40 66 Z", w: 1.8, dolgu: true },
      { d: "M80 60 L34 60 L74 20 Z", w: 1.8, dolgu: true },
      { d: daire(80, 60, 4), w: 1.6, dolgu: true },
      { d: "M80 64 L84 154", w: 3 },
      { d: "M130 24 Q140 30 136 42 M24 96 Q16 104 22 114", w: 1, kesik: true },
    ],
  },

  // Fermuarlı, düğmeli sessiz kitap
  "sessiz-kitap": {
    taramalar: [{ id: "s", sinir: "M84 50 L144 44 L144 128 L84 136 Z", kutu: [84, 44, 60, 92], aralik: 6, sonra: 1 }],
    cizgiler: [
      { d: "M80 40 L16 48 L16 132 L80 124 Z", w: 2, dolgu: true },
      { d: "M80 40 L144 44 L144 128 L80 124 Z", w: 2, dolgu: true },
      { d: "M80 40 L80 124", w: 1.4 },
      { d: "M28 70 L68 66", w: 2.2 },
      {
        d: "M30 68 L30 72 M34 68 L34 72 M38 67 L38 71 M42 67 L42 71 M46 67 L46 71 M50 67 L50 71 M54 66 L54 70 M58 66 L58 70 M62 66 L62 70",
        w: 0.9,
      },
      { d: "M68 66 L72 62 L74 70 Z", w: 1.2, dolgu: true },
      { d: daire(36, 100, 7) + daire(60, 98, 7), w: 1.6, dolgu: true },
      { d: daire(110, 70, 12), w: 1.8, dolgu: true },
      { d: "M110 58 L114 50 M100 108 L124 106 L124 118 L100 120 Z", w: 1.4, dolgu: true },
    ],
    noktalar: [
      [34, 99, 1],
      [38, 101, 1],
      [58, 97, 1],
      [62, 99, 1],
    ],
  },

  // Tekerlekli ördek ve ipi
  "cekme-ordek": {
    taramalar: [{ id: "k", sinir: "M60 90 Q74 76 96 84 Q88 98 70 100 Z", kutu: [60, 76, 36, 24], aralik: 3, sonra: 0 }],
    cizgiler: [
      {
        d: "M30 104 Q24 80 44 78 Q42 58 58 50 Q74 46 78 62 Q78 72 70 76 Q100 70 118 84 Q130 92 128 104 Q100 118 30 104 Z",
        w: 2,
        dolgu: true,
      },
      { d: "M60 90 Q74 76 96 84 Q88 98 70 100 Z", w: 1.4, dolgu: true },
      { d: "M78 58 L94 62 L78 66", w: 1.6, dolgu: true },
      { d: daire(52, 120, 14) + daire(108, 120, 14), w: 2, dolgu: true },
      { d: daire(56, 124, 3) + daire(104, 116, 3), w: 1.2, dolgu: true },
      { d: "M30 104 Q14 110 14 126 Q14 140 4 150", w: 1.2 },
      { d: "M14 140 L150 140", w: 0.8, kesik: true },
    ],
    noktalar: [[64, 60, 2.2]],
  },

  // Perdeli kukla sahnesi
  "kukla-tiyatrosu": {
    taramalar: [
      { id: "l", sinir: "M40 50 L66 50 Q58 70 62 96 L40 96 Z", kutu: [40, 50, 26, 46], aralik: 3, sonra: 2 },
      {
        id: "r",
        sinir: "M120 50 L94 50 Q102 70 98 96 L120 96 Z",
        kutu: [94, 50, 26, 46],
        aralik: 3,
        ters: true,
        sonra: 3,
      },
    ],
    cizgiler: [
      { d: kutu(20, 26, 120, 124), w: 2.2, dolgu: true },
      { d: kutu(40, 50, 80, 46), w: 1.6, dolgu: true },
      { d: "M40 50 L66 50 Q58 70 62 96 L40 96 Z", w: 1.4, dolgu: true },
      { d: "M120 50 L94 50 Q102 70 98 96 L120 96 Z", w: 1.4, dolgu: true },
      { d: daire(80, 76, 10), w: 1.6, dolgu: true },
      { d: "M72 70 L68 62 L76 66 M88 70 L92 62 L84 66", w: 1.2 },
      { d: "M76 80 Q80 84 84 80 M80 86 L80 96", w: 1 },
      { d: "M20 26 L80 6 L140 26", w: 1.6 },
      { d: kutu(56, 110, 48, 16), w: 1.2 },
    ],
    noktalar: [
      [77, 74, 1.4],
      [83, 74, 1.4],
    ],
  },

  // Şişe lobutlar ve top
  "sise-bowling": {
    taramalar: [{ id: "t", sinir: daire(30, 126, 18), kutu: [12, 108, 36, 36], aralik: 4, sonra: 0 }],
    cizgiler: [
      { d: daire(30, 126, 18), w: 2, dolgu: true },
      ...[
        [104, 40],
        [90, 66],
        [118, 66],
        [76, 92],
        [104, 92],
        [132, 92],
      ].map(([x, y]) => ({
        d: `M${x - 3} ${y - 14} L${x + 3} ${y - 14} L${x + 3} ${y - 8} Q${x + 9} ${y - 4} ${x + 9} ${y + 4} L${x + 9} ${y + 26} L${x - 9} ${y + 26} L${x - 9} ${y + 4} Q${x - 9} ${y - 4} ${x - 3} ${y - 8} Z M${x - 9} ${y + 8} L${x + 9} ${y + 8} M${x - 9} ${y + 14} L${x + 9} ${y + 14}`,
        w: 1.5,
        dolgu: true,
      })),
      { d: "M50 122 L64 118 M50 132 L66 132", w: 1 },
    ],
  },

  // Balonlu şişe araba
  "balon-araba": {
    taramalar: [{ id: "b", sinir: daire(70, 44, 26, 22), kutu: [44, 22, 52, 44], aralik: 4, sonra: 0 }],
    cizgiler: [
      { d: daire(70, 44, 26, 22), w: 2, dolgu: true },
      { d: "M90 58 L104 74 L120 82", w: 1.6 },
      {
        d: "M20 82 L124 82 Q138 82 138 96 L138 104 Q138 112 124 112 L20 112 Q12 112 12 104 L12 90 Q12 82 20 82 Z",
        w: 2,
        dolgu: true,
      },
      { d: daire(36, 120, 12) + daire(112, 120, 12), w: 2, dolgu: true },
      { d: daire(36, 120, 3) + daire(112, 120, 3), w: 1.2 },
      { d: "M120 82 L150 76", w: 1.4 },
      { d: "M146 64 Q152 70 146 76 M152 58 Q160 70 152 82", w: 1, kesik: true },
      { d: "M2 132 L10 132 M2 124 L14 124", w: 1 },
    ],
  },

  // Blok kule ve kemer
  "yapi-bloklari": {
    taramalar: [
      { id: "a", sinir: kutu(30, 108, 30, 30), kutu: [30, 108, 30, 30], aralik: 4, sonra: 0 },
      { id: "b", sinir: "M60 48 L80 26 L100 48 Z", kutu: [60, 26, 40, 22], aralik: 3, sonra: 5 },
    ],
    cizgiler: [
      { d: kutu(30, 108, 30, 30), w: 1.8, dolgu: true },
      { d: kutu(100, 108, 30, 30), w: 1.8, dolgu: true },
      { d: "M30 108 L130 108 L130 92 L30 92 Z", w: 1.8, dolgu: true },
      { d: kutu(50, 62, 60, 30), w: 1.8, dolgu: true },
      { d: kutu(64, 48, 32, 14), w: 1.8, dolgu: true },
      { d: "M60 48 L80 26 L100 48 Z", w: 1.8, dolgu: true },
      { d: "M60 138 Q80 118 100 138", w: 1.4 },
      { d: "M14 138 L146 138", w: 2 },
      { d: kutu(132, 120, 18, 18), w: 1.6, dolgu: true },
    ],
  },

  // Bez bebek
  "bez-bebek": {
    taramalar: [{ id: "e", sinir: "M60 74 L100 74 L112 124 L48 124 Z", kutu: [48, 74, 64, 50], aralik: 4, sonra: 2 }],
    cizgiler: [
      { d: "M66 124 L62 150 L72 150 L76 124 M84 124 L88 150 L98 150 L94 124", w: 1.8, dolgu: true },
      { d: "M60 78 L36 104 L42 110 L62 90 M100 78 L124 104 L118 110 L98 90", w: 1.8, dolgu: true },
      { d: "M60 74 L100 74 L112 124 L48 124 Z", w: 2, dolgu: true },
      { d: daire(80, 48, 24), w: 2, dolgu: true },
      { d: "M56 40 Q60 20 80 22 Q100 20 104 40 M56 40 Q48 56 52 70 M104 40 Q112 56 108 70", w: 1.6 },
      { d: "M74 58 Q80 62 86 58", w: 1.3 },
      { d: "M70 46 L74 46 M86 46 L90 46", w: 1.6 },
      { d: daire(66, 54, 3) + daire(94, 54, 3), w: 0.8 },
    ],
  },

  // Aslan maskesi
  "kagit-maske": {
    taramalar: [
      {
        id: "y",
        sinir: daire(80, 80, 66) + " " + daire(80, 80, 44),
        kutu: [14, 14, 132, 132],
        aralik: 5,
      },
    ],
    cizgiler: [
      {
        d:
          Array.from({ length: 16 }, (_, i) => {
            const t = (i / 16) * Math.PI * 2;
            const t2 = ((i + 0.5) / 16) * Math.PI * 2;
            const x = (80 + Math.cos(t) * 64).toFixed(1),
              y = (80 + Math.sin(t) * 64).toFixed(1);
            const x2 = (80 + Math.cos(t2) * 46).toFixed(1),
              y2 = (80 + Math.sin(t2) * 46).toFixed(1);
            return `${i ? "L" : "M"}${x} ${y} L${x2} ${y2}`;
          }).join(" ") + " Z",
        w: 1.6,
      },
      { d: daire(80, 80, 44), w: 2, dolgu: true },
      { d: "M56 70 Q64 62 72 70 Q64 76 56 70 Z M88 70 Q96 62 104 70 Q96 76 88 70 Z", w: 1.6 },
      { d: "M74 88 L86 88 L80 96 Z", w: 1.4, dolgu: true },
      { d: "M80 96 L80 102 M70 104 Q80 110 90 104", w: 1.3 },
      { d: "M62 96 L44 92 M62 100 L44 102 M98 96 L116 92 M98 100 L116 102", w: 0.9 },
      { d: "M48 48 L40 36 L56 42 M112 48 L120 36 L104 42", w: 1.4 },
    ],
  },
};
