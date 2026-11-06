import { Cizim, daire, kutu } from "../arac";

// Yay sarımı (amortisör)
const yay = (x: number, y1: number, y2: number, w: number, n: number) => {
  const h = (y2 - y1) / n;
  let d = `M${x - w} ${y1}`;
  for (let i = 0; i < n; i++) d += ` L${x + w} ${y1 + h * (i + 0.5)} L${x - w} ${y1 + h * (i + 1)}`;
  return d;
};

// Basit 2WD robot (üstten): gövde + tekerlekler
const robot = (x: number, y: number) =>
  `M${x} ${y} L${x + 44} ${y} Q${x + 52} ${y} ${x + 52} ${y + 8} L${x + 52} ${y + 52} Q${x + 52} ${y + 60} ${x + 44} ${y + 60} L${x} ${y + 60} Q${x - 8} ${y + 60} ${x - 8} ${y + 52} L${x - 8} ${y + 8} Q${x - 8} ${y} ${x} ${y} Z`;

// RC & Drone ek projelerinin çizimleri (viewBox 0 0 160 160)
export const RC_CIZIM: Record<string, Cizim> = {
  "rc-tekne": {
    taramalar: [
      { id: "g", sinir: "M14 86 L146 86 L128 112 L30 112 Z", kutu: [14, 86, 132, 26], aralik: 3.5, sonra: 0 },
    ],
    cizgiler: [
      { d: "M14 86 L146 86 L128 112 L30 112 Z", w: 2.2, dolgu: true },
      { d: "M60 86 L66 66 L110 66 L118 86", w: 1.8, dolgu: true },
      { d: kutu(74, 70, 12, 8) + kutu(92, 70, 12, 8), w: 1.1 },
      { d: "M100 66 L100 30", w: 1.4 },
      { d: "M30 112 L26 124 M22 124 L30 124 M26 118 L18 122 L26 128", w: 1.6 },
      { d: "M38 112 L38 126", w: 1.6 },
      { d: "M6 118 q8 -4 16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0", w: 1.1 },
      { d: "M6 134 q8 -4 16 0 t16 0 t16 0 t16 0 t16 0 t16 0", w: 0.8 },
      { d: "M136 80 q8 -4 16 -2 M140 72 q8 -2 14 2", w: 0.9, kesik: true },
    ],
  },

  "rc-araba-ayar": {
    taramalar: [{ id: "l", sinir: daire(110, 100, 34) + " " + daire(110, 100, 18), kutu: [76, 66, 68, 68], aralik: 4 }],
    cizgiler: [
      { d: kutu(30, 20, 20, 50), w: 1.8, dolgu: true },
      { d: "M38 70 L38 120 M42 70 L42 120", w: 1.6 },
      { d: yay(40, 46, 116, 14, 8), w: 1.6 },
      { d: daire(40, 14, 6) + daire(40, 128, 6), w: 1.6, dolgu: true },
      { d: kutu(24, 42, 32, 6), w: 1.4, dolgu: true },
      { d: daire(110, 100, 34), w: 2.2, dolgu: true },
      { d: daire(110, 100, 18), w: 1.8, dolgu: true },
      { d: daire(110, 100, 4) + "M110 82 L110 96 M92 100 L106 100 M114 100 L128 100 M110 104 L110 118", w: 1.2 },
      { d: "M78 92 L72 88 M80 112 L72 114 M110 64 L110 58", w: 1 },
    ],
  },

  "lipo-sarj": {
    taramalar: [{ id: "c", sinir: "M16 70 L84 70 L92 140 L8 140 Z", kutu: [8, 70, 84, 70], aralik: 6 }],
    cizgiler: [
      { d: "M16 70 L84 70 L92 140 L8 140 Z", w: 2, dolgu: true },
      { d: "M16 70 Q50 50 84 70", w: 1.4 },
      { d: kutu(24, 84, 52, 34), w: 1.8, dolgu: true },
      { d: "M24 95 L76 95 M24 106 L76 106", w: 0.9 },
      { d: "M76 92 Q92 92 104 98 M76 100 Q94 104 104 104 M76 110 Q98 116 104 112", w: 1.2 },
      { d: kutu(104, 84, 46, 40), w: 2, dolgu: true },
      { d: kutu(110, 90, 34, 14), w: 1.2 },
      { d: "M114 98 L120 98 M124 94 L124 102 M128 96 L136 96 L136 100", w: 1 },
      { d: daire(116, 114, 4) + daire(134, 114, 4), w: 1.2 },
      {
        d: "M44 30 Q40 20 46 12 Q48 22 54 24 Q58 16 56 10 Q66 22 60 34 Q54 40 48 38 Q42 36 44 30 Z",
        w: 1.3,
        kesik: true,
      },
    ],
  },

  "motorlu-depron": {
    taramalar: [{ id: "k", sinir: "M12 64 L148 64 L142 82 L18 82 Z", kutu: [12, 64, 136, 18], aralik: 4, sonra: 1 }],
    cizgiler: [
      { d: "M76 26 L84 26 L86 140 L74 140 Z", w: 1.8, dolgu: true },
      { d: "M12 64 L148 64 L142 82 L18 82 Z", w: 2, dolgu: true },
      { d: "M52 128 L108 128 L104 138 L56 138 Z", w: 1.6, dolgu: true },
      { d: "M80 140 L80 150", w: 1.4 },
      { d: daire(80, 20, 24, 4), w: 1, kesik: true },
      { d: "M58 20 L102 20", w: 1.8 },
      { d: kutu(76, 18, 8, 8), w: 1.4, dolgu: true },
      { d: "M24 82 L24 76 L50 76 L50 82 M110 82 L110 76 L136 76 L136 82", w: 0.9 },
    ],
  },

  "drone-simulator": {
    taramalar: [
      {
        id: "k",
        sinir:
          "M40 116 L120 116 Q132 116 132 128 L132 140 Q132 152 120 152 L40 152 Q28 152 28 140 L28 128 Q28 116 40 116 Z",
        kutu: [28, 116, 104, 36],
        aralik: 5,
        sonra: 4,
      },
    ],
    cizgiler: [
      { d: kutu(14, 14, 132, 82), w: 2, dolgu: true },
      { d: "M70 96 L66 108 L94 108 L90 96", w: 1.6 },
      { d: "M62 52 L98 52 M70 52 L60 44 M90 52 L100 44 M70 52 L60 60 M90 52 L100 60", w: 1.6 },
      {
        d: daire(58, 42, 6) + daire(102, 42, 6) + daire(58, 62, 6) + daire(102, 62, 6) + kutu(74, 46, 12, 12),
        w: 1.3,
        dolgu: true,
      },
      {
        d: "M40 116 L120 116 Q132 116 132 128 L132 140 Q132 152 120 152 L40 152 Q28 152 28 140 L28 128 Q28 116 40 116 Z",
        w: 2,
        dolgu: true,
      },
      { d: daire(56, 134, 8) + daire(104, 134, 8), w: 1.6, dolgu: true },
      { d: "M56 134 L60 128 M104 134 L98 138", w: 1.6 },
      { d: "M24 86 Q50 70 80 80 Q110 90 136 76", w: 0.7, kesik: true },
    ],
  },

  "fpv-gozluk": {
    taramalar: [
      { id: "a", sinir: kutu(34, 70, 36, 26), kutu: [34, 70, 36, 26], aralik: 3, sonra: 1 },
      { id: "b", sinir: kutu(90, 70, 36, 26), kutu: [90, 70, 36, 26], aralik: 3, ters: true, sonra: 1 },
    ],
    cizgiler: [
      {
        d: "M24 60 L136 60 Q146 60 146 72 L146 96 Q146 108 134 108 L102 108 Q92 108 86 98 L74 98 Q68 108 58 108 L26 108 Q14 108 14 96 L14 72 Q14 60 24 60 Z",
        w: 2.2,
        dolgu: true,
      },
      { d: kutu(34, 70, 36, 26) + kutu(90, 70, 36, 26), w: 1.4, dolgu: true },
      { d: "M14 80 Q4 82 4 92 M146 80 Q156 82 156 92", w: 2 },
      { d: "M120 60 L120 36", w: 1.8 },
      { d: daire(120, 28, 9), w: 1.6, dolgu: true },
      { d: "M120 28 L112 22 M120 28 L128 22 M120 28 L120 38", w: 1 },
      { d: "M134 20 Q140 28 134 36 M140 14 Q150 28 140 42", w: 1, kesik: true },
    ],
  },

  "pervane-dengeleme": {
    taramalar: [
      {
        id: "p",
        sinir: "M80 70 Q60 62 20 66 Q18 74 22 78 Q60 80 80 74 Z",
        kutu: [18, 62, 62, 18],
        aralik: 3,
        sonra: 2,
      },
    ],
    cizgiler: [
      { d: "M26 140 L134 140 M40 140 L40 110 L60 110 L60 140 M100 140 L100 110 L120 110 L120 140", w: 2, dolgu: true },
      { d: "M60 120 L100 120 M60 128 L100 128", w: 1 },
      { d: "M80 70 Q60 62 20 66 Q18 74 22 78 Q60 80 80 74 Z", w: 1.8, dolgu: true },
      { d: "M80 70 Q100 62 140 66 Q142 74 138 78 Q100 80 80 74 Z", w: 1.8, dolgu: true },
      { d: daire(80, 72, 6), w: 1.8, dolgu: true },
      { d: "M50 72 L50 110 M110 72 L110 110", w: 1.2, kesik: true },
      { d: "M24 50 Q20 40 26 32 M136 50 Q140 40 134 32", w: 1, kesik: true },
      { d: "M22 52 L26 48 L28 54 M138 52 L134 48 L132 54", w: 1 },
    ],
  },

  "paletli-robot": {
    taramalar: [
      {
        id: "p",
        sinir: "M20 100 L140 100 Q156 100 156 116 Q156 132 140 132 L20 132 Q4 132 4 116 Q4 100 20 100 Z",
        kutu: [4, 100, 152, 32],
        aralik: 4,
        sonra: 0,
      },
    ],
    cizgiler: [
      {
        d: "M20 100 L140 100 Q156 100 156 116 Q156 132 140 132 L20 132 Q4 132 4 116 Q4 100 20 100 Z",
        w: 2.2,
        dolgu: true,
      },
      {
        d: daire(22, 116, 10) + daire(138, 116, 10) + daire(58, 120, 7) + daire(80, 120, 7) + daire(102, 120, 7),
        w: 1.5,
        dolgu: true,
      },
      { d: kutu(24, 70, 112, 30), w: 2, dolgu: true },
      { d: kutu(36, 78, 30, 14), w: 1, kesik: true },
      { d: "M110 70 L110 44 L120 44 L120 70", w: 1.6 },
      { d: kutu(98, 18, 34, 26), w: 1.8, dolgu: true },
      { d: daire(115, 31, 6), w: 1.4 },
      { d: "M130 70 L130 50 M128 50 L132 50", w: 1.2 },
    ],
  },

  "cizgi-izleyen": {
    taramalar: [{ id: "r", sinir: robot(66, 54), kutu: [58, 54, 60, 60], aralik: 5, sonra: 1 }],
    cizgiler: [
      { d: "M10 150 Q20 100 60 96 Q100 92 110 60 Q118 30 150 20", w: 7 },
      { d: robot(66, 54), w: 2, dolgu: true },
      { d: kutu(52, 62, 6, 20) + kutu(116, 62, 6, 20), w: 1.8, dolgu: true },
      { d: daire(87, 108, 4), w: 1.4, dolgu: true },
      { d: kutu(80, 44, 6, 10) + kutu(92, 44, 6, 10), w: 1.4, dolgu: true },
      { d: "M83 44 L83 38 M95 44 L95 38", w: 1, kesik: true },
    ],
  },

  "engel-robot": {
    taramalar: [{ id: "d", sinir: kutu(132, 20, 20, 124), kutu: [132, 20, 20, 124], aralik: 4 }],
    cizgiler: [
      { d: kutu(132, 20, 20, 124), w: 2 },
      { d: "M132 40 L152 40 M132 60 L152 60 M132 80 L152 80 M132 100 L152 100 M132 120 L152 120", w: 0.8 },
      { d: kutu(20, 70, 64, 40), w: 2, dolgu: true },
      { d: daire(34, 116, 10) + daire(70, 116, 10), w: 1.8, dolgu: true },
      { d: kutu(84, 76, 10, 24), w: 1.6, dolgu: true },
      { d: daire(89, 82, 4) + daire(89, 94, 4), w: 1.2 },
      { d: "M100 78 Q106 88 100 98 M108 72 Q118 88 108 104 M116 66 Q128 88 116 110", w: 1.1, kesik: true },
      { d: "M60 54 Q40 36 22 50 M22 50 L24 42 M22 50 L30 52", w: 1.4 },
    ],
  },

  "balon-hovercraft": {
    taramalar: [{ id: "b", sinir: daire(80, 50, 30, 34), kutu: [50, 16, 60, 68], aralik: 4, sonra: 0 }],
    cizgiler: [
      { d: daire(80, 50, 30, 34), w: 2, dolgu: true },
      { d: "M76 84 L84 84 L84 100 L76 100 Z", w: 1.6, dolgu: true },
      { d: daire(80, 112, 60, 14), w: 2.2, dolgu: true },
      { d: daire(80, 112, 10, 3), w: 1.2 },
      { d: kutu(72, 98, 16, 10), w: 1.4, dolgu: true },
      { d: "M24 132 L14 138 M50 134 L44 142 M110 134 L116 142 M136 132 L146 138", w: 1.2 },
      { d: "M14 138 L18 134 M146 138 L142 134", w: 1 },
    ],
  },

  "su-roketi": {
    taramalar: [
      {
        id: "s",
        sinir: "M66 70 L94 70 L94 100 Q94 106 88 106 L72 106 Q66 106 66 100 Z",
        kutu: [66, 70, 28, 36],
        aralik: 3,
        sonra: 0,
      },
    ],
    cizgiler: [
      { d: "M66 40 Q66 30 80 14 Q94 30 94 40 L94 100 Q94 106 88 106 L72 106 Q66 106 66 100 Z", w: 2.2, dolgu: true },
      { d: "M66 82 L50 104 L66 100 M94 82 L110 104 L94 100", w: 1.8, dolgu: true },
      { d: "M66 40 L94 40", w: 1.2 },
      { d: "M76 106 L76 112 L84 112 L84 106", w: 1.4 },
      { d: "M80 112 L80 140 M60 140 L100 140 M66 140 L58 152 M94 140 L102 152", w: 1.8 },
      { d: "M80 140 Q110 142 124 130 L124 110", w: 1.2 },
      { d: kutu(118, 90, 12, 20), w: 1.6, dolgu: true },
      { d: "M124 90 L124 80 M116 80 L132 80", w: 1.6 },
      { d: "M70 118 L62 128 M90 118 L98 128 M80 120 L80 130", w: 1, kesik: true },
    ],
  },

  "nrf-kumanda": {
    taramalar: [
      { id: "a", sinir: kutu(14, 80, 44, 26), kutu: [14, 80, 44, 26], aralik: 3, sonra: 0 },
      { id: "b", sinir: kutu(102, 80, 44, 26), kutu: [102, 80, 44, 26], aralik: 3, ters: true, sonra: 1 },
    ],
    cizgiler: [
      { d: kutu(14, 80, 44, 26), w: 1.8, dolgu: true },
      { d: kutu(102, 80, 44, 26), w: 1.8, dolgu: true },
      { d: "M50 80 L50 54 M110 80 L110 54", w: 1.6 },
      { d: daire(50, 52, 3) + daire(110, 52, 3), w: 1.2, dolgu: true },
      { d: "M60 46 Q66 52 60 58 M66 40 Q76 52 66 64 M100 46 Q94 52 100 58 M94 40 Q84 52 94 64", w: 1.1, kesik: true },
      { d: kutu(18, 116, 36, 30), w: 1.8, dolgu: true },
      { d: daire(36, 131, 9), w: 1.4 },
      { d: "M36 131 L36 118", w: 2.2 },
      { d: kutu(106, 118, 36, 22), w: 1.8, dolgu: true },
      { d: "M124 118 L124 110 M110 108 L138 112", w: 2 },
      { d: "M36 106 L36 116 M124 106 L124 118", w: 1, kesik: true },
    ],
  },

  "rc-yelkenli": {
    taramalar: [{ id: "y", sinir: "M84 20 L84 96 L136 96 Z", kutu: [84, 20, 52, 76], aralik: 4, sonra: 1 }],
    cizgiler: [
      { d: "M80 14 L80 100", w: 1.8 },
      { d: "M84 20 L84 96 L136 96 Z", w: 1.8, dolgu: true },
      { d: "M76 28 L76 96 L36 96 Z", w: 1.6, dolgu: true },
      { d: "M24 100 L136 100 L124 114 L36 114 Z", w: 2, dolgu: true },
      { d: "M80 114 L80 140", w: 2 },
      { d: daire(80, 144, 12, 5), w: 1.8, dolgu: true },
      { d: "M6 112 q8 -4 16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0", w: 1.1 },
      { d: "M84 96 L136 96", w: 2.2 },
      { d: "M144 40 L156 40 M140 52 L156 52 M146 64 L156 64", w: 1 },
    ],
  },

  "rc-led-far": {
    taramalar: [{ id: "c", sinir: "M40 70 L120 70 L132 96 L28 96 Z", kutu: [28, 70, 104, 26], aralik: 3, sonra: 1 }],
    cizgiler: [
      { d: "M22 96 L138 96 Q148 96 148 106 L148 122 L12 122 L12 106 Q12 96 22 96 Z", w: 2.2, dolgu: true },
      { d: "M40 70 L120 70 L132 96 L28 96 Z", w: 1.8, dolgu: true },
      { d: daire(34, 108, 8) + daire(126, 108, 8), w: 1.8, dolgu: true },
      { d: daire(34, 108, 3) + daire(126, 108, 3), w: 1 },
      { d: kutu(56, 104, 48, 10), w: 1.2 },
      { d: "M18 122 L18 134 L36 134 L36 122 M124 122 L124 134 L142 134 L142 122", w: 1.8, dolgu: true },
      { d: "M24 108 L4 104 M24 112 L4 118 M136 108 L156 104 M136 112 L156 118", w: 1.1, kesik: true },
    ],
  },

  "rc-rampa": {
    taramalar: [{ id: "r", sinir: "M20 140 L104 140 L104 104 Z", kutu: [20, 104, 84, 36], aralik: 4 }],
    cizgiler: [
      { d: "M20 140 L104 140 L104 104 Z", w: 2.2, dolgu: true },
      { d: "M6 140 L154 140", w: 1.6 },
      { d: "M104 140 L104 104", w: 1.4 },
      { d: "M98 52 L138 40 Q148 38 150 46 L152 54 L102 68 Z", w: 2, dolgu: true },
      { d: "M110 52 L118 42 L134 38 L136 46", w: 1.4 },
      { d: daire(108, 70, 8) + daire(144, 60, 8), w: 1.8, dolgu: true },
      { d: "M40 96 Q70 56 96 58", w: 1, kesik: true },
      { d: "M86 40 L76 36 M88 50 L74 50", w: 1 },
    ],
  },

  "servo-test": {
    taramalar: [{ id: "s", sinir: kutu(20, 70, 56, 36), kutu: [20, 70, 56, 36], aralik: 3.5, sonra: 0 }],
    cizgiler: [
      { d: kutu(20, 70, 56, 36), w: 2, dolgu: true },
      { d: "M12 84 L20 84 M76 84 L84 84 M12 80 L12 88 M84 80 L84 88", w: 1.6 },
      { d: daire(36, 64, 6), w: 1.6, dolgu: true },
      { d: "M14 60 Q14 56 18 56 L54 56 Q58 56 58 60 Q58 64 54 64 L18 64 Q14 64 14 60 Z", w: 1.6, dolgu: true },
      { d: "M76 100 Q100 110 104 122", w: 1.2 },
      { d: kutu(96, 112, 52, 34), w: 2, dolgu: true },
      { d: daire(116, 128, 9), w: 1.8, dolgu: true },
      { d: "M116 128 L116 120", w: 1.8 },
      { d: daire(138, 128, 4), w: 1.4, dolgu: true },
      { d: "M24 40 Q36 30 48 40", w: 1, kesik: true },
      { d: "M44 38 L48 40 L46 34", w: 1 },
    ],
  },
};
