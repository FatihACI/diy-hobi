import { Cizim, daire, kutu } from "../arac";

// Nozul: uç (x,y)
const nozul = (x: number, y: number) =>
  kutu(x - 14, y - 34, 28, 18) +
  ` M${x - 8} ${y - 16} L${x + 8} ${y - 16} L${x + 4} ${y - 6} L${x - 4} ${y - 6} Z M${x - 2} ${y - 6} L${x} ${y} L${x + 2} ${y - 6}`;
// Yatay katman çizgileri
const katmanlar = (x: number, y: number, w: number, h: number, ara = 4) =>
  Array.from({ length: Math.floor(h / ara) }, (_, i) => `M${x} ${y + i * ara} L${x + w} ${y + i * ara}`).join(" ");
// İzometrik kutu: ön sol alt köşe (x,y), genişlik w, yükseklik h, derinlik d
const izoKutu = (x: number, y: number, w: number, h: number, d: number) =>
  `M${x} ${y} L${x + w} ${y} L${x + w} ${y - h} L${x} ${y - h} Z M${x} ${y - h} L${x + d} ${y - h - d * 0.6} L${x + w + d} ${y - h - d * 0.6} L${x + w} ${y - h} M${x + w} ${y} L${x + w + d} ${y - d * 0.6} L${x + w + d} ${y - h - d * 0.6}`;

// 3D Baskı ek projelerinin çizimleri (viewBox 0 0 160 160)
export const BASKI3D_CIZIM: Record<string, Cizim> = {
  "kalibrasyon-kupu": {
    cizgiler: [
      { d: izoKutu(40, 130, 60, 60, 30), w: 2.2, dolgu: true },
      { d: katmanlar(40, 74, 60, 56, 5), w: 0.6 },
      { d: "M56 88 L68 112 M68 88 L56 112 M80 88 L86 100 L92 88 M86 100 L86 112", w: 2 },
      { d: "M40 140 L100 140 M40 136 L40 144 M100 136 L100 144", w: 1, kesik: true },
    ],
  },
  "tabla-seviyeleme": {
    taramalar: [{ id: "t", sinir: "M10 110 L150 110 L150 120 L10 120 Z", kutu: [10, 110, 140, 10], aralik: 3 }],
    cizgiler: [
      { d: nozul(80, 100), w: 2, dolgu: true },
      { d: "M40 104 L120 104 L124 108 L44 108 Z", w: 1.4 },
      { d: kutu(10, 110, 140, 10), w: 2.2, dolgu: true },
      { d: "M24 120 L24 134 M136 120 L136 134", w: 2 },
      { d: daire(24, 140, 8, 4) + " " + daire(136, 140, 8, 4), w: 1.8, dolgu: true },
      { d: "M14 144 A10 6 0 0 0 34 144", w: 1, kesik: true },
    ],
  },
  "kablo-klipsi": {
    taramalar: [{ id: "m", sinir: kutu(10, 80, 80, 20), kutu: [10, 80, 80, 20], aralik: 4 }],
    cizgiler: [
      { d: kutu(10, 80, 80, 20), w: 2, dolgu: true },
      { d: "M70 74 L100 74 L100 106 L70 106 L70 100 L94 100 L94 80 L70 80 Z", w: 2.2, dolgu: true },
      { d: daire(108, 70, 7) + " " + daire(108, 90, 7) + " " + daire(108, 110, 7), w: 1.8 },
      { d: "M115 70 Q140 70 150 40 M115 90 Q140 96 152 86 M115 110 Q140 120 148 140", w: 1.6 },
    ],
  },
  "duvar-anahtar-askisi": {
    cizgiler: [
      { d: "M30 90 L30 50 L80 20 L130 50 L130 90 Z", w: 2.2, dolgu: true },
      { d: katmanlar(34, 56, 92, 32, 6), w: 0.5 },
      { d: daire(60, 50, 3) + " " + daire(100, 50, 3), w: 1.2 },
      { d: [44, 66, 94, 116].map((x) => `M${x} 90 L${x} 102 Q${x} 108 ${x + 6} 104`).join(" "), w: 2 },
      { d: "M66 106 L66 120 M62 120 L70 120 L70 140 L62 140 Z", w: 1.6 },
      { d: daire(66, 112, 4), w: 1.4 },
    ],
  },
  "kendi-sulayan-saksi": {
    taramalar: [{ id: "s", sinir: "M34 116 L126 116 L120 146 L40 146 Z", kutu: [34, 116, 92, 30], aralik: 3 }],
    cizgiler: [
      { d: "M30 80 L130 80 L124 146 L36 146 Z", w: 2.2, dolgu: true },
      { d: "M42 80 L118 80 L110 112 L50 112 Z", w: 1.6 },
      { d: "M34 116 Q80 110 126 116", w: 1.2 },
      { d: "M80 112 Q78 124 84 136", w: 1.4, kesik: true },
      { d: katmanlar(32, 86, 96, 56, 8), w: 0.4 },
      { d: "M80 80 Q66 50 72 30 Q82 52 80 80 M80 80 Q96 46 110 40 Q104 64 80 80", w: 1.6, dolgu: true },
    ],
  },
  "filament-kurutma": {
    cizgiler: [
      { d: kutu(20, 40, 120, 100), w: 2.2, dolgu: true },
      { d: daire(80, 90, 38), w: 2, dolgu: true },
      { d: daire(80, 90, 14), w: 1.6 },
      { d: daire(80, 90, 30) + " " + daire(80, 90, 24) + " " + daire(80, 90, 19), w: 0.6 },
      { d: kutu(110, 48, 22, 12), w: 1.2 },
      { d: "M60 32 Q56 24 62 16 M80 32 Q76 24 82 16 M100 32 Q96 24 102 16", w: 1, kesik: true },
    ],
  },
  "dis-macunu-sikacagi": {
    taramalar: [{ id: "s", sinir: kutu(50, 70, 60, 20), kutu: [50, 70, 60, 20], aralik: 3 }],
    cizgiler: [
      { d: "M60 140 L100 140 L96 40 Q80 36 64 40 Z", w: 2, dolgu: true },
      { d: kutu(68, 140, 24, 12), w: 1.6 },
      { d: kutu(50, 70, 60, 20), w: 2.2, dolgu: true },
      { d: "M62 80 L98 80", w: 1.8 },
      { d: "M62 40 L60 24 L100 24 L98 40", w: 1.4 },
      { d: "M120 90 L120 60 M114 66 L120 58 L126 66", w: 1.6 },
    ],
  },
  "kurabiye-kalibi-3d": {
    cizgiler: [
      {
        d: "M80 26 L92 58 L126 58 L98 78 L108 112 L80 92 L52 112 L62 78 L34 58 L68 58 Z",
        w: 2.4,
        dolgu: true,
      },
      { d: "M80 36 L89 61 L116 61 L94 77 L102 103 L80 87 L58 103 L66 77 L44 61 L71 61 Z", w: 1 },
      { d: "M20 130 Q80 120 140 130 L140 146 Q80 136 20 146 Z", w: 1.8, dolgu: true },
      { d: "M60 134 L64 138 M90 132 L96 136", w: 1 },
    ],
  },
  "cekmece-bolme": {
    cizgiler: [
      { d: "M10 140 L150 140 L130 60 L30 60 Z", w: 2.2, dolgu: true },
      { d: "M30 60 L30 50 L130 50 L130 60", w: 1.6 },
      { d: "M24 116 L136 116 M28 88 L132 88 M66 60 L60 140 M100 60 L104 140", w: 1.6 },
      { d: daire(46, 128, 4) + " " + daire(118, 102, 5, 3), w: 1.2 },
      { d: "M72 100 L94 104 M74 76 L88 72 L92 80", w: 1.2 },
    ],
  },
  "renkli-anahtarlik-3d": {
    taramalar: [{ id: "a", sinir: kutu(30, 60, 100, 50), kutu: [30, 60, 100, 50], aralik: 5 }],
    cizgiler: [
      {
        d: "M40 60 L130 60 Q140 60 140 70 L140 100 Q140 110 130 110 L40 110 Q30 110 30 100 L30 70 Q30 60 40 60 Z",
        w: 2.2,
        dolgu: true,
      },
      { d: daire(44, 85, 6), w: 1.6 },
      { d: daire(30, 85, 16), w: 1.8 },
      { d: "M66 74 L66 96 M66 74 L80 74 M66 85 L77 85 M66 96 L80 96 M92 74 L102 96 L112 74", w: 3 },
    ],
  },
  "vidali-kapakli-kutu": {
    cizgiler: [
      { d: "M40 70 L40 136 Q80 150 120 136 L120 70", w: 2.2, dolgu: true },
      { d: daire(80, 70, 40, 10), w: 1.8 },
      {
        d: Array.from({ length: 4 }, (_, i) => `M40 ${56 + i * 5} Q80 ${70 + i * 5} 120 ${52 + i * 5}`).join(" "),
        w: 1,
      },
      { d: daire(80, 30, 44, 12), w: 2.2, dolgu: true },
      { d: "M36 30 L36 42 Q80 58 124 42 L124 30", w: 2 },
      {
        d: Array.from(
          { length: 9 },
          (_, i) => `M${44 + i * 9} ${42 + (i > 4 ? 8 - i : i)} L${44 + i * 9} ${50 + (i > 4 ? 8 - i : i)}`,
        ).join(" "),
        w: 0.8,
      },
    ],
  },
  "tpu-telefon-kilifi": {
    cizgiler: [
      {
        d: "M52 16 L108 16 Q122 16 122 30 L122 130 Q122 144 108 144 L52 144 Q38 144 38 130 L38 30 Q38 16 52 16 Z",
        w: 2.6,
        dolgu: true,
      },
      {
        d: "M56 24 L104 24 Q114 24 114 34 L114 126 Q114 136 104 136 L56 136 Q46 136 46 126 L46 34 Q46 24 56 24 Z",
        w: 1,
      },
      { d: kutu(54, 30, 24, 24), w: 1.6 },
      { d: "M122 50 L128 50 L128 70 L122 70", w: 1.4 },
      { d: "M64 140 Q80 150 96 140", w: 1.2, kesik: true },
    ],
  },
  "nozul-degisimi": {
    taramalar: [{ id: "b", sinir: kutu(50, 40, 50, 36), kutu: [50, 40, 50, 36], aralik: 3 }],
    cizgiler: [
      { d: kutu(66, 10, 18, 30), w: 1.8 },
      { d: kutu(50, 40, 50, 36), w: 2.2, dolgu: true },
      { d: "M64 76 L86 76 L80 92 L70 92 Z M73 92 L75 98 L77 92", w: 2, dolgu: true },
      { d: "M100 56 L130 56", w: 1.4 },
      { d: "M78 100 L120 130 L132 120 L136 130 L126 142 L116 138 L74 108", w: 2, dolgu: true },
    ],
  },
  "litofan-lamba": {
    taramalar: [{ id: "l", sinir: "M40 30 L120 30 L120 120 L40 120 Z", kutu: [40, 30, 80, 90], aralik: 3 }],
    cizgiler: [
      { d: kutu(40, 30, 80, 90), w: 2.2, dolgu: true },
      { d: daire(80, 66, 18, 22) + " M60 120 Q60 92 80 90 Q100 92 100 120", w: 2.4 },
      { d: kutu(30, 120, 100, 20), w: 2.2, dolgu: true },
      { d: "M130 60 L146 50 M130 80 L148 80 M130 100 L146 110", w: 1.2, kesik: true },
    ],
  },
  "eklemli-ejderha": {
    cizgiler: [
      { d: "M18 86 L34 74 L48 76 L44 90 L30 94 Z", w: 2, dolgu: true },
      { d: "M30 74 L28 64 L36 72", w: 1.4 },
      { d: daire(36, 80, 2), w: 1.2, dolgu: true },
      {
        d: Array.from({ length: 9 }, (_, i) => {
          const x = 54 + i * 10,
            y = 84 + Math.round(Math.sin(i * 0.8) * 10);
          return `M${x - 4} ${y - 10 + i} L${x + 4} ${y - 10 + i} L${x + 6} ${y + 6 - i * 0.5} L${x - 6} ${y + 6 - i * 0.5} Z`;
        }).join(" "),
        w: 1.6,
        dolgu: true,
      },
      { d: "M70 70 L64 52 L84 62 M80 66 L96 40 L102 66", w: 1.6, dolgu: true },
      { d: "M144 92 L156 98 L146 102", w: 1.6 },
    ],
  },
  "kulaklik-askisi": {
    taramalar: [{ id: "m", sinir: kutu(10, 20, 140, 16), kutu: [10, 20, 140, 16], aralik: 4 }],
    cizgiler: [
      { d: kutu(10, 20, 140, 16), w: 2, dolgu: true },
      { d: "M70 36 L70 70 Q70 86 86 86 L100 86 Q108 86 108 78 L108 70", w: 3 },
      { d: kutu(60, 36, 20, 6), w: 1.4 },
      { d: "M86 80 Q86 60 110 60 Q134 60 134 84", w: 2.2 },
      { d: "M78 84 Q74 110 84 130 M140 84 Q144 110 134 130", w: 1.4 },
      { d: "M76 124 L92 124 L92 148 L76 148 Z M126 124 L142 124 L142 148 L126 148 Z", w: 2, dolgu: true },
    ],
  },
  "baski-hata-cozumu": {
    cizgiler: [
      { d: izoKutu(16, 130, 34, 40, 14) + " " + izoKutu(96, 130, 34, 40, 14), w: 2, dolgu: true },
      { d: "M50 98 Q62 104 70 96 Q78 104 96 98 M50 110 Q66 118 96 108", w: 0.8 },
      { d: "M16 130 L12 120 M50 130 L54 122", w: 1.4 },
      { d: daire(80, 40, 20), w: 2 },
      { d: "M80 28 L80 42 M80 48 L80 50", w: 2.4 },
    ],
  },
};
