import { Cizim, daire, kutu, zikzak } from "./arac";

// 3D Baskı, Bisiklet, Ev Tamiratı projeleri (viewBox 0 0 160 160)
export const PROJE_TEKNIK_EV: Record<string, Cizim> = {
  // Nozül, kağıt ve kalibrasyon küpü
  "ilk-baski": {
    taramalar: [
      { id: "t", sinir: "M10 118 L110 118 L150 96 L50 96 Z", kutu: [10, 96, 140, 22], aralik: 6 },
      { id: "s", sinir: "M96 82 L116 74 L116 54 L96 62 Z", kutu: [96, 54, 20, 28], aralik: 3, sonra: 5 },
    ],
    cizgiler: [
      { d: "M10 118 L110 118 L150 96 L50 96 Z", w: 2, dolgu: true },
      { d: "M10 118 L10 126 L110 126 L150 104 L150 96 M110 118 L110 126", w: 1.8 },
      { d: "M30 112 L80 112 L100 100 L50 100 Z", w: 1.3, dolgu: true },
      { d: "M48 30 L72 30 L72 66 L64 66 L60 76 L56 66 L48 66 Z", w: 1.8, dolgu: true },
      { d: "M76 82 L96 82 L96 62 L76 62 Z M76 62 L96 54 L116 54 L96 62", w: 1.6, dolgu: true },
      { d: "M96 82 L116 74 L116 54 L96 62 Z", w: 1.6, dolgu: true },
      { d: "M80 74 L86 68 M86 74 L80 68 M100 46 L104 42 L106 46", w: 1 },
      { d: daire(26, 132, 7, 4), w: 1.4, dolgu: true },
      { d: "M60 80 L60 84", w: 1, kesik: true },
      { d: "M84 22 L96 22 M90 16 L90 28", w: 1 },
    ],
  },

  // Telefon standı ve telefon
  "telefon-standi": {
    taramalar: [
      { id: "s", sinir: "M30 130 L130 130 L130 122 L66 122 L54 60 L44 62 Z", kutu: [30, 60, 100, 70], aralik: 3.5 },
    ],
    cizgiler: [
      { d: "M30 130 L130 130 L130 122 L66 122 L54 60 L44 62 Z", w: 2, dolgu: true },
      { d: "M118 122 L118 112 L126 112 L126 122", w: 1.6 },
      { d: "M64 118 L94 26 Q96 20 102 22 L118 28 Q122 30 120 36 L90 128 Z", w: 2, dolgu: true },
      { d: "M72 112 L98 32 L112 36 L86 116 Z", w: 1 },
      { d: daire(110, 28, 1.6), w: 0.9 },
      { d: "M40 136 L56 136 M104 136 L120 136", w: 1.4 },
    ],
  },

  // Kapaklı kutu + ölçü okları
  "tinkercad-kutu": {
    taramalar: [
      { id: "y", sinir: "M110 96 L140 80 L140 120 L110 136 Z", kutu: [110, 80, 30, 56], aralik: 3.5 },
    ],
    cizgiler: [
      { d: "M30 96 L110 96 L140 80 L60 80 Z", w: 1.6, dolgu: true },
      { d: "M38 94 L106 94 L130 82 L64 82 Z", w: 0.9 },
      { d: "M30 96 L30 136 L110 136 L110 96 M110 136 L140 120 L140 80", w: 2 },
      { d: "M30 50 L110 50 L140 34 L60 34 Z", w: 1.8, dolgu: true },
      { d: "M30 50 L30 58 L110 58 L140 42 L140 34 M110 50 L110 58", w: 1.8 },
      { d: "M44 62 L104 62 L124 52", w: 0.9, kesik: true },
      { d: "M30 146 L110 146 M30 142 L30 150 M110 142 L110 150 M36 143 L30 146 L36 149 M104 143 L110 146 L104 149", w: 1 },
      { d: "M18 96 L18 136 M14 96 L22 96 M14 136 L22 136", w: 1 },
      { d: "M70 66 L70 76 M66 72 L70 76 L74 72", w: 1.2 },
    ],
  },

  // Lastik, levye ve yama
  "ic-lastik": {
    taramalar: [
      { id: "l", sinir: daire(70, 88, 58) + " " + daire(70, 88, 44), kutu: [12, 30, 116, 116], aralik: 5 },
    ],
    cizgiler: [
      { d: daire(70, 88, 58), w: 2.4 },
      { d: daire(70, 88, 44), w: 1.8, dolgu: true },
      { d: daire(70, 88, 40), w: 0.8 },
      { d: daire(70, 88, 5), w: 1.6, dolgu: true },
      { d: "M70 48 L70 128 M30 88 L110 88 M42 60 L98 116 M98 60 L42 116", w: 0.6 },
      { d: "M104 40 Q120 30 130 44 Q118 52 108 50", w: 1.6, dolgu: true },
      { d: "M112 42 L150 10 L156 16 L120 50", w: 2, dolgu: true },
      { d: kutu(118, 116, 24, 18), w: 1.6, dolgu: true },
      { d: "M124 122 L136 122 M124 128 L132 128", w: 1 },
    ],
  },

  // Aynakol dişlisi, zincir ve yağ şişesi
  "zincir-bakim": {
    taramalar: [
      { id: "s", sinir: "M112 40 L132 40 L132 76 Q132 82 126 82 L118 82 Q112 82 112 76 Z", kutu: [112, 40, 20, 42], aralik: 3, sonra: 4 },
    ],
    cizgiler: [
      { d: zikzak(18, 100, 18, 100, 1, 0) + " " + daire(52, 100, 34), w: 2 },
      { d: daire(52, 100, 26) + daire(52, 100, 8), w: 1.2 },
      { d: "M52 66 L140 80 M52 134 L140 120", w: 1.4, kesik: true },
      { d: "M52 66 L140 80 M52 134 L140 120", w: 3, kesik: true },
      { d: "M112 40 L132 40 L132 76 Q132 82 126 82 L118 82 Q112 82 112 76 Z", w: 1.8, dolgu: true },
      { d: "M118 40 L120 26 L124 26 L126 40", w: 1.6, dolgu: true },
      { d: "M122 20 Q119 26 122 28 Q125 26 122 20 Z", w: 1.1 },
      { d: "M52 92 L52 74 M60 104 L76 110 M44 104 L28 110", w: 0.8 },
    ],
  },

  // Jant kesiti, V-fren kolları, balata, alyan
  "fren-ayari": {
    taramalar: [
      { id: "b1", sinir: kutu(50, 76, 10, 24), kutu: [50, 76, 10, 24], aralik: 2.5, sonra: 2 },
      { id: "b2", sinir: kutu(100, 76, 10, 24), kutu: [100, 76, 10, 24], aralik: 2.5, sonra: 3 },
    ],
    cizgiler: [
      { d: "M62 20 L62 150 M98 20 L98 150 M62 20 Q80 10 98 20 M62 150 Q80 160 98 150", w: 2.2 },
      { d: "M68 24 L68 146 M92 24 L92 146", w: 0.8 },
      { d: kutu(50, 76, 10, 24), w: 1.6, dolgu: true },
      { d: kutu(100, 76, 10, 24), w: 1.6, dolgu: true },
      { d: "M44 130 L44 40 L30 30 M116 130 L116 40 L130 30", w: 2.4 },
      { d: "M44 88 L50 88 M116 88 L110 88", w: 1.6 },
      { d: "M30 30 L80 20 L130 30", w: 1, kesik: true },
      { d: "M130 30 L150 22", w: 1.4 },
      { d: "M14 150 L14 116 L30 116", w: 2.6 },
    ],
  },

  // Musluk, damla, conta ve anahtar
  "musluk-conta": {
    taramalar: [
      { id: "c", sinir: daire(124, 116, 18) + " " + daire(124, 116, 8), kutu: [106, 98, 36, 36], aralik: 3 },
    ],
    cizgiler: [
      { d: "M10 50 L40 50 L40 70 L10 70", w: 2 },
      { d: "M40 52 L94 52 Q104 52 104 62 L104 80 L92 80 L92 66 L40 66", w: 2, dolgu: true },
      { d: kutu(56, 28, 24, 24), w: 1.8, dolgu: true },
      { d: "M48 22 L88 22 L88 28 L48 28 Z", w: 1.8, dolgu: true },
      { d: daire(68, 18, 4), w: 1.4, dolgu: true },
      { d: "M98 90 Q94 98 98 102 Q102 98 98 90 Z M98 110 Q95 116 98 118 Q101 116 98 110 Z", w: 1.3 },
      { d: daire(124, 116, 18) + daire(124, 116, 8), w: 1.8, dolgu: true },
      { d: "M14 140 L60 120", w: 3 },
      { d: "M58 112 Q72 108 72 120 L66 122 L62 116 L58 124 Q50 124 58 112 Z", w: 1.6, dolgu: true },
    ],
  },

  // Duvar, delik, çatlak, macunlu spatula
  "duvar-tamir": {
    taramalar: [
      { id: "m", sinir: "M84 104 L130 84 L140 104 L96 124 Z", kutu: [84, 84, 56, 40], aralik: 3, sonra: 4 },
    ],
    cizgiler: [
      { d: kutu(14, 14, 100, 132), w: 1.4 },
      { d: daire(50, 50, 7), w: 1.8, dolgu: true },
      { d: "M44 48 L36 42 M56 54 L62 60", w: 1 },
      { d: "M30 90 L42 100 L38 110 L50 122 L46 134", w: 1.4 },
      { d: "M84 104 L130 84 L140 104 L96 124 Z", w: 1.8, dolgu: true },
      { d: "M118 94 L150 60", w: 3 },
      { d: "M144 66 L154 54 Q158 50 156 58 L148 70 Z", w: 1.4, dolgu: true },
      { d: "M20 30 L108 30 M20 70 L108 70 M64 14 L64 30 M40 30 L40 70 M88 30 L88 70", w: 0.5, kesik: true },
    ],
    noktalar: [[50, 50, 2]],
  },

  // Küvet köşesi ve silikon tabancası
  "silikon-yenileme": {
    taramalar: [
      { id: "f", sinir: "M10 96 L150 96 L150 150 L10 150 Z", kutu: [10, 96, 140, 54], aralik: 6 },
    ],
    cizgiler: [
      { d: "M10 10 L10 96 L150 96", w: 1.6 },
      { d: "M30 10 L30 96 M50 10 L50 96 M70 10 L70 96 M90 10 L90 96 M110 10 L110 96 M130 10 L130 96 M10 30 L150 30 M10 50 L150 50 M10 70 L150 70", w: 0.5 },
      { d: "M10 96 Q14 120 40 124 L150 124", w: 2, dolgu: true },
      { d: "M10 100 L96 100", w: 3.2 },
      { d: "M96 100 L108 92", w: 1.6 },
      { d: "M108 92 L146 64 L152 72 L114 100 Z", w: 1.8, dolgu: true },
      { d: "M140 70 L156 84 L150 90 L136 76", w: 1.8, dolgu: true },
      { d: "M146 64 L154 58", w: 1.4 },
    ],
  },
};
