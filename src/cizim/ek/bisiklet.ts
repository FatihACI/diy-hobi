import { Cizim, daire, kutu } from "../arac";

const r2 = (x: number) => Math.round(x * 100) / 100;
// Teker: lastik + jant + teller
const teker = (x: number, y: number, r: number, tel = 12) =>
  daire(x, y, r) +
  " " +
  daire(x, y, r - 5) +
  " " +
  Array.from({ length: tel }, (_, i) => {
    const a = (i / tel) * Math.PI * 2;
    return `M${x} ${y} L${r2(x + Math.cos(a) * (r - 5))} ${r2(y + Math.sin(a) * (r - 5))}`;
  }).join(" ") +
  " " +
  daire(x, y, 3);
// Dişli: diş sayısı n
const disli = (x: number, y: number, r: number, n: number) =>
  Array.from({ length: n }, (_, i) => {
    const a1 = (i / n) * Math.PI * 2,
      a2 = ((i + 0.5) / n) * Math.PI * 2;
    return `${i ? "L" : "M"}${r2(x + Math.cos(a1) * r)} ${r2(y + Math.sin(a1) * r)} L${r2(x + Math.cos(a2) * (r - 4))} ${r2(y + Math.sin(a2) * (r - 4))}`;
  }).join(" ") + " Z";

// Bisiklet Bakımı ek projelerinin çizimleri (viewBox 0 0 160 160)
export const BISIKLET_CIZIM: Record<string, Cizim> = {
  "surus-oncesi-kontrol": {
    cizgiler: [
      { d: kutu(30, 20, 90, 120), w: 2.2, dolgu: true },
      { d: kutu(60, 12, 30, 14), w: 1.8, dolgu: true },
      { d: kutu(42, 44, 10, 10) + " " + kutu(42, 72, 10, 10) + " " + kutu(42, 100, 10, 10), w: 1.6 },
      { d: "M44 49 L47 52 L52 44 M44 77 L47 80 L52 72 M44 105 L47 108 L52 100", w: 1.8 },
      { d: "M62 49 L108 49 M62 77 L102 77 M62 105 L106 105", w: 1.2 },
      { d: teker(130, 130, 22, 8), w: 1.2 },
    ],
  },
  "lastik-basinci": {
    cizgiler: [
      { d: daire(70, 70, 44), w: 2.4, dolgu: true },
      { d: daire(70, 70, 36), w: 1 },
      {
        d: Array.from({ length: 9 }, (_, i) => {
          const a = Math.PI * (0.8 + (i / 8) * 1.4);
          return `M${r2(70 + Math.cos(a) * 30)} ${r2(70 + Math.sin(a) * 30)} L${r2(70 + Math.cos(a) * 36)} ${r2(70 + Math.sin(a) * 36)}`;
        }).join(" "),
        w: 1.4,
      },
      { d: "M70 70 L94 50", w: 2.4 },
      { d: daire(70, 70, 4), w: 1.6, dolgu: true },
      { d: "M70 114 L70 130 Q70 146 90 146 L140 146", w: 2.2 },
      { d: kutu(132, 138, 10, 16), w: 1.6, dolgu: true },
    ],
  },
  "vites-ayari": {
    cizgiler: [
      { d: disli(60, 70, 34, 24) + " " + disli(60, 70, 26, 18) + " " + disli(60, 70, 18, 13), w: 1.2 },
      { d: daire(60, 70, 6), w: 1.6, dolgu: true },
      { d: "M84 94 L100 120 L80 130 L70 110", w: 2, dolgu: true },
      { d: daire(84, 112, 6) + " " + daire(78, 134, 6), w: 1.4 },
      { d: "M98 98 L124 72 M120 66 L130 76", w: 2 },
      { d: "M126 80 L146 60", w: 1, kesik: true },
    ],
  },
  "zincir-asinma-degisim": {
    cizgiler: [
      {
        d: Array.from(
          { length: 6 },
          (_, i) =>
            `M${14 + i * 22} 70 L${30 + i * 22} 70 Q${36 + i * 22} 70 ${36 + i * 22} 80 Q${36 + i * 22} 90 ${30 + i * 22} 90 L${14 + i * 22} 90 Q${8 + i * 22} 90 ${8 + i * 22} 80 Q${8 + i * 22} 70 ${14 + i * 22} 70 Z`,
        ).join(" "),
        w: 1.8,
      },
      { d: Array.from({ length: 7 }, (_, i) => daire(8 + i * 22, 80, 4)).join(" "), w: 1.4, dolgu: true },
      { d: "M30 40 L30 56 L118 56 L118 40 M30 40 L118 40 M60 40 L60 30 L84 30 L84 40", w: 2, dolgu: true },
      { d: "M30 56 L30 70 M118 56 L118 70", w: 1.4 },
      { d: "M40 120 L120 120 M40 114 L40 126 M120 114 L120 126", w: 1, kesik: true },
    ],
  },
  "disk-balata": {
    cizgiler: [
      { d: daire(70, 80, 50), w: 2.2, dolgu: true },
      {
        d: Array.from({ length: 6 }, (_, i) => {
          const a = (i / 6) * Math.PI * 2;
          return daire(r2(70 + Math.cos(a) * 36), r2(80 + Math.sin(a) * 36), 5);
        }).join(" "),
        w: 1.2,
      },
      { d: daire(70, 80, 16), w: 1.6 },
      { d: "M100 30 L140 30 L146 60 L120 76 L104 66 Z", w: 2.2, dolgu: true },
      { d: kutu(112, 40, 24, 12), w: 1.4 },
    ],
  },
  "hidrolik-fren-hava": {
    cizgiler: [
      { d: "M24 40 L84 40 L84 56 L24 56 Z", w: 2, dolgu: true },
      { d: "M84 48 L120 64 L124 58 L90 42", w: 2 },
      { d: kutu(36, 24, 26, 16), w: 1.6, dolgu: true },
      { d: "M48 24 L48 12 Q48 4 60 4 L100 4", w: 1.4 },
      { d: kutu(100, 0, 16, 26), w: 1.6 },
      { d: "M40 56 Q30 100 70 120 L100 120", w: 1.8 },
      { d: kutu(100, 108, 30, 24), w: 2, dolgu: true },
      { d: "M130 120 L140 120 L140 150 M134 146 L146 146 L146 156 L134 156 Z", w: 1.4 },
    ],
    noktalar: [
      [108, 10, 2],
      [110, 18, 1.5],
      [62, 4, 1.5],
    ],
  },
  "sele-yukseklik": {
    cizgiler: [
      { d: "M40 40 Q80 26 120 36 Q128 44 116 48 L60 50 Q40 50 40 40 Z", w: 2.2, dolgu: true },
      { d: kutu(74, 50, 12, 90), w: 2, dolgu: true },
      { d: "M76 100 L84 100 M76 104 L84 104 M76 108 L84 108", w: 0.8 },
      { d: kutu(68, 116, 24, 10), w: 1.8, dolgu: true },
      { d: "M110 60 L110 120 M104 66 L110 58 L116 66 M104 114 L110 122 L116 114", w: 1.4 },
      { d: "M40 100 L72 100", w: 1, kesik: true },
    ],
  },
  "gidon-bandi": {
    taramalar: [{ id: "b", sinir: "M30 30 L130 30 L130 44 L30 44 Z", kutu: [30, 30, 100, 14], aralik: 6 }],
    cizgiler: [
      {
        d: "M30 30 L130 30 Q150 30 150 60 Q150 90 130 96 L124 96 L124 84 Q138 80 138 60 Q138 44 130 44 L30 44 Q22 44 22 60 Q22 80 36 84 L36 96 L30 96 Q10 90 10 60 Q10 30 30 30 Z",
        w: 2.2,
        dolgu: true,
      },
      {
        d: Array.from(
          { length: 6 },
          (_, i) => `M${140 + (i % 2) * 4} ${44 + i * 8} L${132 + (i % 2) * 4} ${50 + i * 8}`,
        ).join(" "),
        w: 1,
      },
      { d: "M80 44 L80 60", w: 2.4 },
      { d: "M10 110 Q40 130 60 112 Q80 94 100 116 Q120 138 150 120", w: 2 },
    ],
  },
  "jant-ayari": {
    cizgiler: [
      { d: teker(80, 80, 60, 24), w: 1.4 },
      { d: "M80 20 L80 6 M74 6 L86 6", w: 1.6 },
      { d: "M130 30 L144 18 L150 24 L136 36 Z", w: 2, dolgu: true },
      { d: "M112 42 L130 30", w: 1.4 },
      { d: "M18 80 Q14 70 20 60 M142 80 Q146 90 140 100", w: 1, kesik: true },
    ],
  },
  "pedal-degisimi": {
    cizgiler: [
      { d: "M30 120 L90 60", w: 6 },
      { d: daire(30, 120, 10), w: 2, dolgu: true },
      { d: kutu(84, 40, 56, 40), w: 2.2, dolgu: true },
      { d: kutu(92, 48, 40, 24), w: 1 },
      { d: "M84 60 L70 60", w: 2.4 },
      { d: "M110 100 A26 26 0 1 0 64 90 M60 82 L64 92 L72 86", w: 1.4, kesik: true },
    ],
  },
  "fren-kablosu-degisimi": {
    cizgiler: [
      { d: "M20 30 L70 30 L70 44 L20 44 Z", w: 2, dolgu: true },
      { d: "M70 38 L96 58 L100 52 L76 34", w: 2 },
      { d: "M30 44 Q20 100 80 110 Q110 114 120 90", w: 3 },
      { d: "M120 90 L120 70", w: 1.2 },
      { d: "M100 70 L140 70 L136 60 M104 60 L100 70", w: 2 },
      { d: "M110 130 L150 130 M110 136 L150 136 M110 130 L104 133 L110 136", w: 1.4 },
    ],
  },
  "tubeless-donusum": {
    taramalar: [{ id: "s", sinir: "M60 120 Q80 110 100 120 Q80 134 60 120 Z", kutu: [60, 110, 40, 24], aralik: 3 }],
    cizgiler: [
      { d: daire(80, 80, 60) + " " + daire(80, 80, 48), w: 2.2 },
      { d: daire(80, 80, 44), w: 1, kesik: true },
      { d: "M60 120 Q80 110 100 120 Q80 134 60 120 Z", w: 1.4 },
      { d: "M80 32 L80 12 M76 12 L84 12", w: 1.8 },
      { d: kutu(118, 10, 18, 30), w: 1.6, dolgu: true },
      { d: "M122 10 L122 4 L132 4 L132 10", w: 1.2 },
    ],
  },
  "kaset-temizligi": {
    cizgiler: [
      { d: disli(70, 90, 46, 32) + " " + disli(70, 90, 36, 24) + " " + disli(70, 90, 26, 18), w: 1.1 },
      { d: daire(70, 90, 10), w: 1.6, dolgu: true },
      { d: "M110 30 L140 10 L146 18 L116 38 Z", w: 2, dolgu: true },
      {
        d: Array.from({ length: 5 }, (_, i) => `M${108 + i * 3} ${36 - i * 2} L${100 + i * 3} ${48 - i * 2}`).join(" "),
        w: 1,
      },
      { d: "M90 40 L96 46 M84 48 L92 52", w: 1, kesik: true },
    ],
  },
  "bisiklet-isik-montaji": {
    cizgiler: [
      { d: "M20 90 L140 90", w: 3 },
      { d: kutu(60, 64, 30, 26), w: 2.2, dolgu: true },
      { d: daire(90, 77, 10), w: 1.8, dolgu: true },
      { d: "M100 70 L148 50 M100 77 L150 77 M100 84 L148 104", w: 1.2, kesik: true },
      { d: kutu(14, 112, 20, 36), w: 2, dolgu: true },
      { d: "M18 118 L30 118 M18 126 L30 126 M18 134 L30 134 M18 142 L30 142", w: 0.8 },
    ],
  },
  "bisiklet-yikama": {
    cizgiler: [
      { d: teker(44, 110, 30, 10) + " " + teker(120, 110, 30, 10), w: 1.2 },
      { d: "M44 110 L76 76 L110 76 L120 110 M76 76 L80 110 L44 110 M80 110 L110 76", w: 2 },
      { d: daire(52, 36, 8) + " " + daire(66, 26, 6) + " " + daire(76, 44, 5) + " " + daire(96, 30, 7), w: 1.2 },
      { d: "M120 20 L130 40 M136 18 L140 36 M150 24 L146 40", w: 1, kesik: true },
    ],
  },
  "kis-depolama": {
    cizgiler: [
      { d: "M10 20 L150 20", w: 3 },
      { d: "M50 20 L50 34 Q50 40 56 40 M110 20 L110 34 Q110 40 104 40", w: 2 },
      { d: teker(56, 70, 30, 10) + " " + teker(104, 120, 30, 10), w: 1.2 },
      { d: "M56 70 L104 120 M70 90 L96 82", w: 2 },
      { d: "M130 50 L130 70 M120 60 L140 60 M123 53 L137 67 M137 53 L123 67", w: 1.4 },
    ],
  },
  "dis-lastik-degisimi": {
    taramalar: [
      { id: "l", sinir: "M80 20 A60 60 0 0 1 140 80 L128 80 A48 48 0 0 0 80 32 Z", kutu: [80, 20, 60, 60], aralik: 4 },
    ],
    cizgiler: [
      { d: daire(80, 80, 60) + " " + daire(80, 80, 48), w: 2.2 },
      { d: daire(80, 80, 44), w: 1.4 },
      { d: "M30 120 L52 98 L58 104 L36 126 Z M36 126 Q30 136 22 134", w: 2, dolgu: true },
      { d: "M100 110 L118 128 L124 122 L106 104", w: 2, dolgu: true },
      { d: "M120 30 L132 40 L126 46", w: 1.6 },
    ],
  },
};
