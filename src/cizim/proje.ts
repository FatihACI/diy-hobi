import { Cizim, daire, dalga, kutu } from "./arac";
import { KATEGORI_CIZIM } from "./kategori";

// Keçe kukla gövdesi (x merkez, üst y)
const kukla = (x: number, ust: number) =>
  `M${x - 14} 140 L${x - 14} ${ust + 18} Q${x - 14} ${ust} ${x} ${ust} Q${x + 14} ${ust} ${x + 14} ${ust + 18} L${x + 14} 140`;
const yuz = (x: number, y: number) =>
  `M${x - 4} ${y + 8} Q${x} ${y + 12} ${x + 4} ${y + 8}`;

// Üçlü iğne (x, y = gövdeye bağlandığı nokta)
const ucluIgne = (x: number, y: number) =>
  `M${x} ${y} L${x} ${y + 16} M${x} ${y + 16} Q${x} ${y + 24} ${x - 7} ${y + 22} Q${x - 10} ${y + 18} ${x - 7} ${y + 15}` +
  ` M${x} ${y + 16} Q${x} ${y + 24} ${x + 7} ${y + 22} Q${x + 10} ${y + 18} ${x + 7} ${y + 15}`;

export const PROJE_CIZIM: Record<string, Cizim> = {
  // ─── OYUNCAK ───
  "ahsap-araba": KATEGORI_CIZIM.oyuncak,

  "kece-kukla": {
    taramalar: [
      { id: "k1", sinir: kutu(31, 124, 28, 16), kutu: [31, 124, 28, 16], aralik: 3, sonra: 2 },
      { id: "k2", sinir: kutu(66, 124, 28, 16), kutu: [66, 124, 28, 16], aralik: 3, ters: true, sonra: 5 },
      { id: "k3", sinir: kutu(101, 124, 28, 16), kutu: [101, 124, 28, 16], aralik: 3, sonra: 7 },
    ],
    cizgiler: [
      // ayı
      { d: daire(34, 64, 6), w: 1.5, dolgu: true },
      { d: daire(56, 64, 6), w: 1.5, dolgu: true },
      { d: kukla(45, 58) + " Z", w: 2, dolgu: true },
      // tavşan
      { d: `M74 54 Q66 16 74 14 Q82 18 78 54 Z`, w: 1.5, dolgu: true },
      { d: `M86 54 Q94 16 86 14 Q78 18 82 54 Z`, w: 1.5, dolgu: true },
      { d: kukla(80, 48) + " Z", w: 2, dolgu: true },
      // kedi
      { d: `M102 74 L103 56 L112 64 Z M128 74 L127 56 L118 64 Z`, w: 1.5, dolgu: true },
      { d: kukla(115, 60) + " Z", w: 2, dolgu: true },
      // yüzler
      { d: yuz(45, 82) + " " + yuz(80, 72) + " " + yuz(115, 84), w: 1.2 },
      { d: "M43 86 L47 86 M78 76 L82 76 M113 88 L117 88 M104 90 L96 88 M104 92 L96 94 M126 90 L134 88 M126 92 L134 94", w: 1 },
      // dikiş izleri
      { d: "M34 120 L34 82 M56 120 L56 82 M69 120 L69 70 M91 120 L91 70 M104 120 L104 84 M126 120 L126 84", w: 0.9, kesik: true },
      // iğne + iplik
      { d: "M132 34 L154 10", w: 1.6 },
      { d: daire(151, 13.5, 1.5), w: 0.8 },
      { d: "M151 13 Q160 34 146 44 Q130 52 140 30", w: 0.9 },
    ],
    noktalar: [[41, 80, 1.8], [49, 80, 1.8], [76, 70, 1.8], [84, 70, 1.8], [111, 82, 1.8], [119, 82, 1.8]],
  },

  "bilye-parkuru": {
    taramalar: [
      { id: "r1", sinir: "M28 36 L122 52 L122 60 L28 44 Z", kutu: [28, 36, 94, 24], aralik: 4 },
      { id: "r2", sinir: "M132 74 L38 90 L38 98 L132 82 Z", kutu: [38, 74, 94, 24], aralik: 4, ters: true },
      { id: "r3", sinir: "M28 110 L104 123 L104 131 L28 118 Z", kutu: [28, 110, 76, 21], aralik: 4 },
    ],
    cizgiler: [
      { d: kutu(16, 10, 128, 144), w: 0.9 },
      { d: "M28 36 L122 52 L122 60 L28 44 Z", w: 1.8 },
      { d: "M132 74 L38 90 L38 98 L132 82 Z", w: 1.8 },
      { d: "M28 110 L104 123 L104 131 L28 118 Z", w: 1.8 },
      { d: "M122 52 L132 58 L132 74 M38 98 L28 104 L28 110", w: 1.1, kesik: true },
      // bilyeler
      { d: daire(42, 32, 5), w: 1.4, dolgu: true },
      { d: daire(96, 79, 5), w: 1.4, dolgu: true },
      { d: daire(118, 108, 4.5), w: 1.4, dolgu: true },
      { d: "M110 100 L104 96 M112 106 L104 104", w: 0.9 },
      // bardak
      { d: "M106 132 L110 150 L132 150 L136 132", w: 1.8, dolgu: true },
      { d: daire(121, 132, 15, 3), w: 1.4 },
    ],
    noktalar: [[40, 30, 1.2], [94, 77, 1.2]],
  },

  // ─── BALIKÇILIK ───
  "samandirali-takim": {
    taramalar: [
      { id: "s1", sinir: "M80 58 Q92 70 80 104 Q68 70 80 58 Z", kutu: [66, 58, 28, 22], aralik: 3, sonra: 1 },
    ],
    cizgiler: [
      { d: "M80 30 L80 58", w: 2 },
      { d: "M80 58 Q92 70 80 104 Q68 70 80 58 Z", w: 2, dolgu: true },
      { d: "M80 30 Q92 8 156 4", w: 0.9 },
      { d: dalga(6, 80, 4) + " " + dalga(98, 80, 5), w: 1.3 },
      { d: "M62 84 q4 2 8 0 M90 84 q4 2 8 0", w: 0.9 },
      { d: "M80 104 L80 146", w: 0.9 },
      { d: "M80 146 L80 150 Q80 158 74 156 Q70 152 72 147 L75 149", w: 1.4 },
      { d: "M24 138 Q34 130 44 138 Q34 146 24 138 Z M24 138 L17 133 L17 143 Z", w: 1.3, dolgu: true },
      { d: "M14 112 L40 112 M110 124 L150 124 M100 146 L130 146", w: 0.6 },
    ],
    noktalar: [[80, 116, 3], [80, 124, 2.4], [40, 137, 1]],
  },

  "spin-kurulum": {
    taramalar: [
      { id: "p1", sinir: kutu(28, 72, 30, 30), kutu: [28, 72, 30, 30], aralik: 3, sonra: 3 },
    ],
    cizgiler: [
      { d: "M6 42 L154 28", w: 3 },
      { d: "M64 38 L78 37 L74 62 L68 62 Z", w: 1.6, dolgu: true },
      { d: daire(80, 86, 22), w: 2, dolgu: true },
      { d: kutu(28, 72, 30, 30), w: 1.8, dolgu: true },
      { d: "M24 70 L28 72 M24 104 L28 102 M24 70 L24 104", w: 1.6 },
      { d: "M28 72 Q14 87 28 102", w: 1.6 },
      { d: "M80 86 L112 112", w: 2 },
      { d: daire(116, 116, 6), w: 1.6, dolgu: true },
      { d: daire(80, 86, 6), w: 1.2 },
      { d: "M40 72 L110 33", w: 0.8 },
      { d: "M110 33 L110 26 M134 30 L134 24", w: 1.2 },
    ],
  },

  "ahsap-sahte-yem": {
    taramalar: [
      { id: "y1", sinir: "M30 80 Q40 58 90 60 Q130 62 140 80 Q130 98 90 100 Q40 102 30 80 Z", kutu: [30, 58, 112, 16], aralik: 3.5, sonra: 1 },
    ],
    cizgiler: [
      { d: "M32 84 L8 102 L14 108 L36 90", w: 1.6, dolgu: true },
      { d: "M30 80 Q40 58 90 60 Q130 62 140 80 Q130 98 90 100 Q40 102 30 80 Z", w: 2, dolgu: true },
      { d: daire(46, 76, 6), w: 1.4, dolgu: true },
      { d: "M60 64 Q52 80 60 96", w: 1.2 },
      { d: "M70 84 q4 -3 8 0 M84 84 q4 -3 8 0 M98 84 q4 -3 8 0 M77 90 q4 -3 8 0 M91 90 q4 -3 8 0", w: 0.8 },
      { d: daire(11, 103, 2.5), w: 1.1 },
      { d: daire(84, 104, 3), w: 1.2 },
      { d: ucluIgne(84, 107), w: 1.3 },
      { d: daire(141, 84, 3), w: 1.2 },
      { d: ucluIgne(141, 87), w: 1.3 },
    ],
    noktalar: [[47, 76, 2.4]],
  },

  // ─── AKVARYUM ───
  "nano-bitkili": KATEGORI_CIZIM.akvaryum,

  "sunger-filtre": {
    taramalar: [
      { id: "f1", sinir: "M52 82 L108 82 Q112 82 112 86 L112 142 Q112 146 108 146 L52 146 Q48 146 48 142 L48 86 Q48 82 52 82 Z", kutu: [48, 82, 64, 64], aralik: 6 },
    ],
    cizgiler: [
      { d: dalga(6, 40, 13), w: 1 },
      { d: "M6 150 Q80 146 154 150", w: 1.2 },
      { d: "M52 82 L108 82 Q112 82 112 86 L112 142 Q112 146 108 146 L52 146 Q48 146 48 142 L48 86 Q48 82 52 82 Z", w: 2 },
      { d: kutu(72, 26, 16, 56), w: 1.8, dolgu: true },
      { d: kutu(70, 22, 20, 6), w: 1.4, dolgu: true },
      { d: "M80 22 Q80 6 46 8 Q20 10 14 32", w: 1.3 },
      { d: daire(80, 66, 3) + daire(78, 54, 2.4) + daire(81, 44, 2) + daire(84, 16, 2) + daire(88, 8, 1.5), w: 1 },
      { d: daire(60, 96, 3, 2) + daire(96, 102, 3, 2) + daire(66, 124, 2.5, 2) + daire(100, 132, 3, 2) + daire(82, 116, 2, 1.5), w: 0.9 },
    ],
  },

  "diy-co2": {
    taramalar: [
      { id: "c1", sinir: "M40 60 Q40 50 48 46 L48 34 L60 34 L60 46 Q68 50 68 60 L68 140 Q68 146 62 146 L46 146 Q40 146 40 140 Z", kutu: [40, 92, 28, 56], aralik: 3.5 },
    ],
    cizgiler: [
      { d: "M40 60 Q40 50 48 46 L48 34 L60 34 L60 46 Q68 50 68 60 L68 140 Q68 146 62 146 L46 146 Q40 146 40 140 Z", w: 2 },
      { d: kutu(46, 26, 16, 8), w: 1.6, dolgu: true },
      { d: "M40 92 q7 -3 14 0 t14 0", w: 1.2 },
      { d: daire(48, 86, 2) + daire(58, 84, 1.5) + daire(62, 88, 1.8), w: 0.9 },
      { d: "M54 26 Q54 8 88 10 Q118 12 118 40", w: 1.3 },
      { d: kutu(113, 40, 10, 14), w: 1.4, dolgu: true },
      { d: "M118 54 L118 114", w: 1.3 },
      { d: "M92 64 L92 150 L156 150", w: 1.6 },
      { d: dalga(92, 72, 5), w: 1 },
      { d: daire(118, 120, 6), w: 1.6, dolgu: true },
      { d: daire(122, 104, 2) + daire(116, 94, 1.5) + daire(121, 84, 2), w: 0.9 },
      { d: "M140 150 Q136 128 144 110 M146 150 Q150 132 148 120", w: 1.1 },
    ],
  },

  // ─── AHŞAP ───
  "kesme-tahtasi": {
    taramalar: [
      { id: "t1", sinir: "M24 142 L24 149 Q26 158 36 156 L136 136 Q146 134 144 125 L144 118 Q146 128 136 130 L36 150 Q26 152 24 142 Z", kutu: [24, 118, 122, 40], aralik: 3 },
      { id: "t2", sinir: "M106 88 L136 82 L138 90 L108 96 Z", kutu: [106, 82, 32, 14], aralik: 2.5, ters: true, sonra: 5 },
    ],
    cizgiler: [
      { d: "M20 70 L120 50 Q130 48 132 58 L144 118 Q146 128 136 130 L36 150 Q26 152 24 142 Z", w: 2, dolgu: true },
      { d: "M24 142 L24 149 Q26 158 36 156 L136 136 Q146 134 144 125", w: 1.8 },
      { d: daire(122, 64, 5), w: 1.4 },
      { d: "M34 84 Q80 70 126 74 M36 110 Q80 98 134 100 M40 132 Q90 120 138 122", w: 0.7 },
      { d: "M40 112 Q60 98 104 88 L106 96 L42 115 Z", w: 1.6, dolgu: true },
      { d: "M106 88 L136 82 L138 90 L108 96 Z", w: 1.6, dolgu: true },
      { d: daire(62, 132, 9) + daire(80, 136, 9), w: 1.4, dolgu: true },
      { d: daire(62, 132, 5) + daire(80, 136, 5), w: 0.8 },
    ],
    noktalar: [[60, 131, 0.9], [64, 133, 0.9], [78, 135, 0.9], [82, 137, 0.9]],
  },

  "yuzer-raf": {
    taramalar: [
      { id: "r1", sinir: kutu(20, 96, 100, 12), kutu: [20, 96, 100, 12], aralik: 3 },
      { id: "r2", sinir: "M20 108 L120 108 L110 120 L30 120 Z", kutu: [20, 108, 100, 12], aralik: 6, ters: true },
      { id: "r3", sinir: kutu(54, 54, 9, 36), kutu: [54, 54, 9, 36], aralik: 2.5, sonra: 5 },
    ],
    cizgiler: [
      { d: "M6 20 L6 150 M154 20 L154 150", w: 0.5 },
      { d: "M20 96 L120 96 L140 84 L40 84 Z", w: 1.8, dolgu: true },
      { d: kutu(20, 96, 100, 12), w: 1.8 },
      { d: "M120 108 L140 96 L140 84", w: 1.8 },
      { d: kutu(42, 48, 12, 42), w: 1.6, dolgu: true },
      { d: kutu(54, 54, 9, 36), w: 1.6, dolgu: true },
      { d: kutu(63, 46, 13, 44), w: 1.6, dolgu: true },
      { d: "M76 90 L88 54 L97 57 L85 92 Z", w: 1.6, dolgu: true },
      { d: "M45 56 L51 56 M45 60 L51 60 M66 54 L73 54 M66 82 L73 82", w: 0.9 },
      { d: "M104 88 L101 70 L127 70 L124 88 Z", w: 1.6, dolgu: true },
      { d: "M114 70 Q108 50 98 46 M114 70 Q116 46 126 38 M114 70 Q124 58 134 58", w: 1.3 },
      { d: "M98 46 q6 -2 8 6 M126 38 q2 8 -4 10 M134 58 q-4 6 -10 2", w: 1 },
    ],
  },

  "ahsap-kutu": {
    taramalar: [
      { id: "a1", sinir: "M100 100 L140 80 L140 120 L100 140 Z", kutu: [100, 80, 40, 60], aralik: 3.5, sonra: 2 },
    ],
    cizgiler: [
      { d: "M30 80 L70 62 L140 80 L100 100 Z", w: 1.4, dolgu: true },
      { d: "M38 81 L70 67 L132 81 L100 96 Z", w: 1 },
      { d: "M100 100 L140 80 L140 120 L100 140 Z", w: 2, dolgu: true },
      { d: "M62 70 L72 30 L78 32 L68 72", w: 1.4, dolgu: true },
      { d: "M72 30 L74 22 L78 32", w: 1.2 },
      { d: "M84 74 L112 36 L118 40 L92 76", w: 1.4, dolgu: true },
      { d: "M100 50 L104 53 M106 43 L110 46", w: 0.9 },
      { d: "M30 80 L100 100 L100 140 L30 120 Z", w: 2, dolgu: true },
      { d: "M30 100 L100 120 M100 120 L140 100", w: 1.1 },
      { d: "M40 92 Q66 96 90 104 M40 110 Q64 116 92 124", w: 0.7 },
    ],
    noktalar: [[34, 86, 1.4], [34, 114, 1.4], [96, 106, 1.4], [96, 134, 1.4]],
  },

  // ─── ELEKTRONİK ───
  "trafik-lambasi": {
    taramalar: [
      { id: "l2", sinir: daire(80, 69, 12), kutu: [68, 57, 24, 24], aralik: 3, sonra: 3 },
      { id: "l3", sinir: daire(80, 102, 12), kutu: [68, 90, 24, 24], aralik: 3, sonra: 4 },
    ],
    cizgiler: [
      { d: "M64 14 L96 14 Q102 14 102 20 L102 118 Q102 124 96 124 L64 124 Q58 124 58 118 L58 20 Q58 14 64 14 Z", w: 2, dolgu: true },
      { d: "M64 30 Q80 18 96 30 M64 63 Q80 51 96 63 M64 96 Q80 84 96 96", w: 1.3 },
      { d: daire(80, 36, 12), w: 1.6, dolgu: true },
      { d: daire(80, 69, 12), w: 1.6, dolgu: true },
      { d: daire(80, 102, 12), w: 1.6, dolgu: true },
      { d: "M50 36 L40 36 M110 36 L120 36 M54 22 L46 14 M106 22 L114 14 M54 50 L46 56 M106 50 L114 56", w: 1.3 },
      { d: "M76 124 L76 152 M84 124 L84 152 M62 152 L98 152", w: 1.6 },
    ],
    noktalar: [[76, 32, 1.6]],
  },

  "nem-sensoru": {
    taramalar: [
      { id: "n1", sinir: "M40 92 L50 150 L110 150 L120 92 Z", kutu: [40, 120, 80, 30], aralik: 4 },
      { id: "n2", sinir: kutu(94, 40, 20, 18), kutu: [94, 40, 20, 18], aralik: 2.5, sonra: 5 },
    ],
    cizgiler: [
      { d: "M40 92 L50 150 L110 150 L120 92 Z", w: 2, dolgu: true },
      { d: kutu(36, 84, 88, 10), w: 1.8, dolgu: true },
      { d: "M44 96 q6 -3 12 0 t12 0 t12 0 t12 0 t12 0 t12 0", w: 0.9 },
      { d: "M66 92 Q60 64 70 40 M66 92 Q74 70 72 56", w: 1.6 },
      { d: "M70 40 Q54 34 50 46 Q62 52 70 40 Z M68 60 Q82 52 88 62 Q76 70 68 60 Z M64 72 Q48 66 46 78 Q58 82 64 72 Z", w: 1.3, dolgu: true },
      { d: kutu(94, 40, 20, 18), w: 1.6, dolgu: true },
      { d: "M98 58 L110 58 L110 108 L104 116 L98 108 Z", w: 1.6, dolgu: true },
      { d: "M101 64 L101 104 M107 64 L107 104", w: 0.8 },
      { d: "M104 40 Q104 18 136 18 L152 18", w: 1.3 },
      { d: "M140 58 Q133 70 140 76 Q147 70 140 58 Z", w: 1.4 },
    ],
  },

  "akvaryum-termometre": {
    taramalar: [
      { id: "m1", sinir: "M114 112 L122 112 L122 136 Q118 142 114 136 Z", kutu: [112, 112, 12, 30], aralik: 2.5, sonra: 9 },
    ],
    cizgiler: [
      { d: kutu(14, 20, 90, 44), w: 2, dolgu: true },
      { d: kutu(22, 28, 74, 28), w: 1.3 },
      { d: "M30 32 L42 32 L42 42 L30 42 L30 52 L42 52", w: 1.8 },
      { d: "M58 32 L46 32 L46 42 L58 42 L58 52 L46 52", w: 1.8 },
      { d: daire(65, 35, 2.5), w: 1.2 },
      { d: "M82 34 Q72 32 72 42 Q72 52 82 50", w: 1.6 },
      { d: "M60 64 Q60 92 108 86 Q118 86 118 112", w: 1.3 },
      { d: "M100 92 L100 152 L156 152", w: 1.6 },
      { d: dalga(100, 100, 4, 14), w: 1 },
      { d: "M114 112 L122 112 L122 136 Q118 142 114 136 Z", w: 1.6, dolgu: true },
      { d: "M134 128 Q144 120 154 128 Q144 136 134 128 Z M134 128 L128 124 L128 132 Z", w: 1.2, dolgu: true },
      { d: "M108 152 Q104 134 110 120", w: 1 },
    ],
  },

  "park-sensoru": {
    taramalar: [
      { id: "u1", sinir: daire(32, 78, 6), kutu: [26, 72, 12, 12], aralik: 2.2, sonra: 2 },
      { id: "u2", sinir: daire(56, 78, 6), kutu: [50, 72, 12, 12], aralik: 2.2, sonra: 4 },
      { id: "u3", sinir: kutu(140, 26, 16, 118), kutu: [140, 26, 16, 118], aralik: 4 },
    ],
    cizgiler: [
      { d: kutu(16, 60, 56, 36), w: 2, dolgu: true },
      { d: daire(32, 78, 10), w: 1.6, dolgu: true },
      { d: daire(32, 78, 6), w: 1.1 },
      { d: daire(56, 78, 10), w: 1.6, dolgu: true },
      { d: daire(56, 78, 6), w: 1.1 },
      { d: "M34 96 L34 106 M40 96 L40 106 M46 96 L46 106 M52 96 L52 106", w: 1.3 },
      { d: "M78 66 Q84 78 78 90 M88 60 Q96 78 88 96 M98 54 Q108 78 98 102", w: 1.3 },
      { d: kutu(140, 26, 16, 118), w: 1.8 },
      { d: "M140 46 L156 46 M140 66 L156 66 M140 86 L156 86 M140 106 L156 106 M140 126 L156 126", w: 1 },
      { d: "M78 124 L134 124 M84 120 L78 124 L84 128 M128 120 L134 124 L128 128", w: 1.2 },
    ],
  },
};
