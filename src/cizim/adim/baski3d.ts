// 3B Baskı kategorisi (Altın 40 dışı 18 proje): adım sahneleri (viewBox 0 0 240 150).
// Adım sayısı ve sırası src/data/ek/baski3d.ts içeriğiyle birebir eşleşir.
import { Cizgi, Cizim, daire, kutu } from "../arac";
import {
  carpi,
  damla,
  kablo,
  kalem,
  makas,
  ok,
  onay,
  parmak,
  saat,
  saksi,
  telefon,
  termometre,
  vida,
  yayOk,
  ZEMIN,
  zimpara,
} from "./parca";

// ---------- Ortak parçalar ----------
const laptop = (x: number, y: number): Cizgi[] => [
  { d: kutu(x, y, 80, 50), w: 1.7, dolgu: true },
  { d: kutu(x + 4, y + 4, 72, 42), w: 0.8 },
  { d: `M${x - 6} ${y + 50} L${x + 86} ${y + 50} L${x + 92} ${y + 58} L${x - 12} ${y + 58} Z`, w: 1.6, dolgu: true },
];
// Ekranda izometrik kutu: (x,y) ön sol alt
const kup = (x: number, y: number, s = 22, ic = false): Cizgi[] => [
  { d: kutu(x, y - s, s, s), w: 1.4, dolgu: true },
  {
    d: `M${x} ${y - s} L${x + s * 0.4} ${y - s * 1.35} L${x + s * 1.4} ${y - s * 1.35} L${x + s} ${y - s} Z`,
    w: 1.2,
    dolgu: true,
  },
  {
    d: `M${x + s} ${y - s} L${x + s * 1.4} ${y - s * 1.35} L${x + s * 1.4} ${y - s * 0.35} L${x + s} ${y} Z`,
    w: 1.2,
    dolgu: true,
  },
  ...(ic
    ? [
        {
          d: `M${x + 4} ${y - s + 2} L${x + s * 0.44} ${y - s * 1.22} L${x + s * 1.3} ${y - s * 1.22} L${x + s - 4} ${y - s + 2} Z`,
          w: 0.8,
        },
      ]
    : []),
];
// Yazıcı: sol üst (x,y), kafa konumu
const yazici = (x: number, y: number, kafaX = 40, kafaY = 22): Cizgi[] => [
  { d: kutu(x, y + 90, 120, 10), w: 1.7, dolgu: true },
  { d: kutu(x + 8, y, 8, 90) + " " + kutu(x + 104, y, 8, 90), w: 1.5, dolgu: true },
  { d: kutu(x + 8, y, 104, 8), w: 1.5, dolgu: true },
  { d: `M${x + 16} ${y + kafaY + 8} L${x + 104} ${y + kafaY + 8}`, w: 2.2 },
  { d: kutu(x + kafaX, y + kafaY, 20, 22), w: 1.6, dolgu: true },
  {
    d: `M${x + kafaX + 7} ${y + kafaY + 22} L${x + kafaX + 10} ${y + kafaY + 28} L${x + kafaX + 13} ${y + kafaY + 22} Z`,
    w: 1.2,
    dolgu: true,
  },
  { d: kutu(x + 20, y + 80, 80, 6), w: 1.5, dolgu: true },
];
// Makara: merkez
const makara = (cx: number, cy: number, R = 18): Cizgi[] => [
  { d: daire(cx, cy, R), w: 1.8, dolgu: true },
  { d: daire(cx, cy, R * 0.7), w: 0.6 },
  { d: daire(cx, cy, R * 0.3), w: 1.2, dolgu: true },
];
// Kumpas: sol üst
const kumpas = (x: number, y: number): Cizgi[] => [
  { d: kutu(x, y, 110, 8), w: 1.5, dolgu: true },
  { d: `M${x} ${y + 8} L${x} ${y + 30} L${x + 8} ${y + 24} L${x + 8} ${y + 8}`, w: 1.4, dolgu: true },
  { d: kutu(x + 30, y - 4, 22, 16), w: 1.5, dolgu: true },
  { d: `M${x + 30} ${y + 12} L${x + 30} ${y + 30} L${x + 38} ${y + 12}`, w: 1.4, dolgu: true },
  {
    d: Array.from(
      { length: 12 },
      (_, i) => `M${x + 56 + i * 4} ${y} L${x + 56 + i * 4} ${y + (i % 5 === 0 ? 5 : 3)}`,
    ).join(" "),
    w: 0.6,
  },
];
// STL dosya simgesi: sol üst
const stl = (x: number, y: number): Cizgi[] => [
  {
    d: `M${x} ${y} L${x + 22} ${y} L${x + 30} ${y + 8} L${x + 30} ${y + 38} L${x} ${y + 38} Z M${x + 22} ${y} L${x + 22} ${y + 8} L${x + 30} ${y + 8}`,
    w: 1.5,
    dolgu: true,
  },
  { d: `M${x + 6} ${y + 26} L${x + 12} ${y + 16} L${x + 18} ${y + 26} Z`, w: 1 },
];
// İndirme oku (bulut)
const indir = (x: number, y: number): Cizgi[] => [
  {
    d: `M${x - 20} ${y} Q${x - 24} ${y - 14} ${x - 10} ${y - 14} Q${x - 4} ${y - 26} ${x + 8} ${y - 18} Q${x + 24} ${y - 18} ${x + 20} ${y}`,
    w: 1.4,
  },
  ok(x, y - 10, x, y + 14, 0.9),
];
// Kağıt (seviyeleme)
const kagit = (x: number, y: number): Cizgi => ({ d: kutu(x, y, 40, 4), w: 1.2, dolgu: true });
// Nozul (büyük): uç (x,y)
const nozul = (x: number, y: number): Cizgi[] => [
  { d: kutu(x - 20, y - 50, 40, 26), w: 1.7, dolgu: true },
  {
    d: `M${x - 10} ${y - 24} L${x - 10} ${y - 12} L${x - 4} ${y} L${x + 4} ${y} L${x + 10} ${y - 12} L${x + 10} ${y - 24}`,
    w: 1.6,
    dolgu: true,
  },
];
// Kurutucu kutu: sol üst
const kurutucu = (x: number, y: number): Cizgi[] => [
  { d: kutu(x, y, 80, 60), w: 1.8, dolgu: true },
  { d: kutu(x + 50, y + 8, 22, 12), w: 1.1 },
];
const silika = (x: number, y: number): Cizgi => ({
  d: kutu(x, y, 20, 14) + ` M${x + 4} ${y + 5} L${x + 16} ${y + 5}`,
  w: 1.2,
  dolgu: true,
});
// Masa kenarı kesiti
const MASA: Cizgi = { d: kutu(20, 70, 140, 16), w: 1.8, dolgu: true };
const klips = (x: number): Cizgi => ({
  d: `M${x} 64 L${x + 30} 64 L${x + 30} 92 L${x} 92 L${x} 86 L${x + 24} 86 L${x + 24} 70 L${x} 70 Z M${x + 6} 64 Q${x + 6} 54 ${x + 14} 54 Q${x + 22} 54 ${x + 22} 64`,
  w: 1.6,
  dolgu: true,
});
// Ev silüetli askı
const EV_ASKI: Cizgi = { d: `M50 90 L50 50 L120 20 L190 50 L190 90 Z`, w: 1.8, dolgu: true };
const kancalar = (y = 90): Cizgi => ({
  d: [70, 100, 140, 170]
    .map(
      (x) => `M${x} ${y} L${x} ${y + 14} Q${x} ${y + 22} ${x + 6} ${y + 22} Q${x + 10} ${y + 22} ${x + 10} ${y + 16}`,
    )
    .join(" "),
  w: 2.4,
});
// Diş macunu sıkacağı
const SIKAC: Cizgi = { d: kutu(80, 60, 80, 26), w: 1.8, dolgu: true };
const YARIK: Cizgi = { d: kutu(96, 70, 48, 4), w: 1.2 };
// Kurabiye kalıbı (kalp)
const KALP = `M120 120 Q60 90 80 60 Q100 40 120 62 Q140 40 160 60 Q180 90 120 120 Z`;
// Gridfinity ızgara
const izgara = (x: number, y: number, n: number, m: number, a = 30): Cizgi => {
  let d = kutu(x, y, n * a, m * a) + " ";
  for (let i = 1; i < n; i++) d += `M${x + i * a} ${y} L${x + i * a} ${y + m * a} `;
  for (let j = 1; j < m; j++) d += `M${x} ${y + j * a} L${x + n * a} ${y + j * a} `;
  return { d: d.trim(), w: 1.2 };
};
// İsim plakası (anahtarlık)
const PLAKA: Cizgi = {
  d: `M40 60 L190 60 Q200 60 200 70 L200 100 Q200 110 190 110 L40 110 Q30 110 30 100 L30 70 Q30 60 40 60 Z M42 85 m-6 0 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0`,
  w: 1.8,
  dolgu: true,
};
const ISIM: Cizgi = {
  d: `M70 98 L78 72 L86 98 M73 90 L83 90 M100 72 L100 98 L112 98 M124 72 L124 98 M140 72 L140 98 M140 72 L152 98 L152 72`,
  w: 3,
};
// Vidalı kutu
const KUTU_V: Cizgi[] = [
  { d: `M70 130 L70 70 M170 130 L170 70`, w: 1.8 },
  { d: daire(120, 70, 50, 12), w: 1.6, dolgu: true },
  { d: `M70 130 Q120 144 170 130`, w: 1.8 },
];
const disler = (y: number): Cizgi => ({
  d: `M70 ${y} Q120 ${y + 8} 170 ${y - 6} M70 ${y + 8} Q120 ${y + 16} 170 ${y + 2}`,
  w: 1,
});
// Litofan paneli
const LITO: Cizgi = { d: kutu(70, 20, 100, 90), w: 1.8, dolgu: true };
const lamba = (cx: number, y: number): Cizgi[] => [
  { d: kutu(cx - 50, y - 12, 100, 12), w: 1.7, dolgu: true },
  { d: daire(cx - 20, y - 6, 2) + " " + daire(cx, y - 6, 2) + " " + daire(cx + 20, y - 6, 2), w: 1, dolgu: true },
];
// Ejderha (eklemli): baş solda
const ejderha = (x: number, y: number, kivrik = false): Cizgi[] => [
  { d: `M${x} ${y} L${x + 20} ${y - 10} L${x + 30} ${y} L${x + 20} ${y + 8} Z`, w: 1.5, dolgu: true },
  {
    d: Array.from({ length: 9 }, (_, i) => {
      const ox = x + 34 + i * 14;
      const oy = y + (kivrik ? Math.round(Math.sin(i * 0.8) * 14) : 0);
      return kutu(ox, oy - 6, 12, 12);
    }).join(" "),
    w: 1.3,
    dolgu: true,
  },
];
// Kulaklık askısı (kanca)
const KANCA_A: Cizgi = {
  d: `M60 40 L180 40 L180 50 L130 50 L130 90 Q130 110 110 110 L90 110 L90 100 L110 100 Q120 100 120 90 L120 50 L60 50 Z`,
  w: 1.8,
  dolgu: true,
};
// Telefon kılıfı
const kilif = (x: number, y: number): Cizgi[] => [
  {
    d: `M${x + 6} ${y} L${x + 54} ${y} Q${x + 60} ${y} ${x + 60} ${y + 6} L${x + 60} ${y + 104} Q${x + 60} ${y + 110} ${x + 54} ${y + 110} L${x + 6} ${y + 110} Q${x} ${y + 110} ${x} ${y + 104} L${x} ${y + 6} Q${x} ${y} ${x + 6} ${y} Z`,
    w: 2.4,
  },
  { d: kutu(x + 8, y + 8, 16, 18), w: 1.2 },
  { d: kutu(x + 60, y + 30, 4, 20), w: 1 },
];
// Pense: uç (x,y)
const pense = (x: number, y: number): Cizgi[] => [
  { d: `M${x - 3} ${y} L${x - 4} ${y + 16} M${x + 3} ${y} L${x + 4} ${y + 16}`, w: 2.2 },
  { d: daire(x, y + 18, 3), w: 1.2, dolgu: true },
  {
    d: `M${x - 4} ${y + 20} Q${x - 10} ${y + 44} ${x - 20} ${y + 60} M${x + 4} ${y + 20} Q${x + 12} ${y + 44} ${x + 24} ${y + 60}`,
    w: 3.2,
  },
];
// Anahtar (nozul): ağız (x,y)
const anahtar = (x: number, y: number): Cizgi => ({
  d: `M${x - 8} ${y - 6} L${x - 8} ${y + 6} L${x - 2} ${y + 6} L${x - 2} ${y + 2} L${x + 2} ${y + 2} L${x + 2} ${y + 6} L${x + 8} ${y + 6} L${x + 8} ${y - 6} Z M${x} ${y - 6} L${x + 40} ${y - 40}`,
  w: 1.6,
  dolgu: true,
});
// Baskı parçası (küp önizleme)
const parca = (x: number, y: number, s = 30): Cizgi[] => kup(x, y, s);
// Kesik ağ
const iplik = (x1: number, x2: number, y: number): Cizgi => ({
  d: `M${x1} ${y} q${(x2 - x1) / 2} 12 ${x2 - x1} 0 M${x1} ${y + 6} q${(x2 - x1) / 2} 10 ${x2 - x1} 0`,
  w: 0.6,
});

// ---------- 1. Ölçüye Kapaklı Kutu (5) ----------
export const TINKERCAD_KUTU_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...kumpas(60, 70), { d: kutu(90, 100, 40, 30), w: 1.6, dolgu: true }] },
  { cizgiler: [ZEMIN, ...laptop(70, 30), ...kup(96, 70, 26, true)] },
  {
    cizgiler: [
      ZEMIN,
      ...laptop(70, 30),
      { d: kutu(90, 50, 40, 6), w: 1.4, dolgu: true },
      { d: kutu(94, 56, 32, 4), w: 1.2 },
      ok(110, 66, 110, 74, 0.6),
    ],
  },
  { cizgiler: [ZEMIN, ...laptop(30, 40), ...stl(150, 50), ...stl(190, 60), ok(116, 70, 144, 70)] },
  { cizgiler: [ZEMIN, ...yazici(20, 30), ...parca(60, 108, 14), ...kup(170, 130, 26), onay(210, 40, 1.2)] },
];

// ---------- 2. Kalibrasyon Küpü (4) ----------
export const KALIBRASYON_KUPU_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...laptop(30, 40), ...kup(54, 82, 18), ...indir(170, 70)] },
  { cizgiler: [ZEMIN, ...yazici(60, 20), ...kup(100, 100, 16)] },
  {
    cizgiler: [
      ZEMIN,
      ...kup(60, 120, 40),
      ...kumpas(110, 70),
      { d: `M60 130 L100 130 M60 126 L60 134 M100 126 L100 134`, w: 1 },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...laptop(30, 40),
      { d: `M40 56 L90 56 M40 66 L80 66 M40 76 L100 76`, w: 1 },
      ...kup(160, 120, 30),
      onay(210, 40, 1.2),
    ],
  },
];

// ---------- 3. Tabla Seviyeleme (4) ----------
export const TABLA_SEVIYELEME_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...yazici(60, 20), ...termometre(200, 40, 60)] },
  {
    cizgiler: [
      ZEMIN,
      ...yazici(60, 20, 14, 10),
      ok(90, 34, 76, 34),
      { d: `M200 60 L200 100`, w: 1 },
      { d: kutu(190, 60, 20, 30), w: 1.3 },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...yazici(60, 20, 20, 52),
      kagit(80, 98),
      { d: daire(90, 116, 6), w: 1.4, dolgu: true },
      yayOk(90, 116, 10, 3.6, 5.8),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(30, 60, 180, 30), w: 1.8, dolgu: true },
      { d: `M50 70 L190 70 M50 76 L190 76 M50 82 L190 82`, w: 2 },
      onay(210, 40, 1.2),
    ],
  },
];

// ---------- 4. Kablo Klipsi (4) ----------
export const KABLO_KLIPSI_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, MASA, ...kumpas(118, 40), { d: `M170 70 L170 86 M166 70 L174 70 M166 86 L174 86`, w: 1 }] },
  {
    cizgiler: [
      ZEMIN,
      ...laptop(70, 30),
      { d: `M96 66 L126 66 L126 46 L96 46 L96 52 L120 52 L120 60 L96 60 Z`, w: 1.4, dolgu: true },
    ],
  },
  { cizgiler: [ZEMIN, ...yazici(60, 20), { d: kutu(96, 92, 30, 8), w: 1.3, dolgu: true }] },
  { cizgiler: [ZEMIN, MASA, klips(140), kablo(154, 54, 200, 30, -10), kablo(150, 54, 120, 20, -10)] },
];

// ---------- 5. Duvar Anahtar Askısı (4) ----------
export const DUVAR_ANAHTAR_ASKISI_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, EV_ASKI, kancalar(), { d: daire(80, 60, 3) + " " + daire(160, 60, 3), w: 1.2 }] },
  {
    cizgiler: [
      ZEMIN,
      ...yazici(60, 20),
      { d: `M80 100 L80 92 L110 84 L140 92 L140 100 Z`, w: 1.3, dolgu: true },
      onay(200, 40, 1.2),
      carpi(30, 60, 8),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...yazici(60, 20),
      { d: `M80 100 L80 92 L110 84 L140 92 L140 100 Z`, w: 1.3, dolgu: true },
      { d: `M84 96 L136 96`, w: 0.6 },
    ],
  },
  {
    cizgiler: [
      { d: `M0 40 L240 40 M0 80 L240 80 M0 120 L240 120 M60 0 L60 40 M180 0 L180 40`, w: 0.4 },
      EV_ASKI,
      kancalar(),
      vida(80, 60),
      vida(160, 60),
      { d: `M76 112 L76 128 M136 112 L140 130`, w: 1.4 },
    ],
  },
];

// ---------- 6. Kendi Sulayan Saksı (4) ----------
export const KENDI_SULAYAN_SAKSI_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...laptop(30, 40), ...saksi(70, 60, 30, 24), ...indir(170, 70)] },
  {
    cizgiler: [
      ZEMIN,
      ...laptop(70, 30),
      { d: `M90 50 L150 50 L146 70 L94 70 Z`, w: 2.4 },
      { d: `M92 52 L148 52 M92 56 L148 56`, w: 0.8 },
    ],
  },
  {
    cizgiler: [ZEMIN, ...yazici(20, 30), ...saksi(80, 96, 30, 18), { d: kutu(160, 100, 50, 30), w: 1.6, dolgu: true }],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(70, 90, 100, 40), w: 1.8, dolgu: true },
      ...saksi(120, 40, 80, 60),
      { d: `M120 100 Q116 112 120 126`, w: 1.6 },
      { d: `M74 110 q10 -3 20 0 q10 3 20 0 q10 -3 20 0 q10 3 20 0 q10 -3 22 0`, w: 1 },
    ],
  },
];

// ---------- 7. Nemli Filament Kurutma (4) ----------
export const FILAMENT_KURUTMA_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      ...nozul(100, 80),
      { d: `M100 80 L100 100 M96 84 l-6 6 M104 86 l6 6`, w: 1 },
      { d: daire(94, 96, 2) + " " + daire(108, 100, 2), w: 1 },
      iplik(110, 170, 100),
    ],
  },
  { cizgiler: [ZEMIN, ...kurutucu(60, 60), ...makara(100, 90, 22), ...termometre(170, 40, 60), ...saat(200, 30, 10)] },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(50, 60, 140, 70), w: 1.8, dolgu: true },
      { d: kutu(46, 52, 148, 8), w: 1.5, dolgu: true },
      ...makara(100, 96, 24),
      silika(150, 106),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(50, 60, 140, 70), w: 1.8, dolgu: true },
      ...makara(100, 96, 24),
      { d: kutu(150, 80, 30, 24), w: 1.4, dolgu: true },
      { d: daire(165, 92, 7), w: 1 },
      onay(210, 40, 1.2),
    ],
  },
];

// ---------- 8. Diş Macunu Sıkacağı (4) ----------
export const DIS_MACUNU_SIKACAGI_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      ...laptop(70, 30),
      { d: kutu(96, 46, 30, 10), w: 1.4, dolgu: true },
      { d: kutu(100, 50, 22, 2), w: 0.8 },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...yazici(60, 20),
      { d: kutu(104, 72, 10, 28), w: 1.3, dolgu: true },
      { d: `M109 74 L109 98`, w: 0.8 },
    ],
  },
  { cizgiler: [ZEMIN, SIKAC, YARIK, iplik(100, 140, 72), ...makas(150, 72)] },
  {
    cizgiler: [
      ZEMIN,
      SIKAC,
      YARIK,
      { d: `M40 72 L96 72 M30 64 L40 64 L40 80 L30 80 Z`, w: 2.4 },
      { d: `M144 72 L210 72 L216 64 L216 80 L210 72`, w: 1.6 },
      ok(130, 100, 180, 100),
    ],
  },
];

// ---------- 9. Özel Kurabiye Kalıbı (4) ----------
export const KURABIYE_KALIBI_3D_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      ...laptop(70, 30),
      { d: `M110 70 Q90 60 96 50 Q102 44 110 52 Q118 44 124 50 Q130 60 110 70 Z`, w: 1.4 },
      ...kalem(160, 70),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: KALP, w: 3 },
      { d: KALP, w: 1 },
      { d: `M170 60 L200 60 M170 56 L170 64 M200 56 L200 64`, w: 0.8 },
    ],
  },
  { cizgiler: [ZEMIN, ...yazici(60, 20), { d: `M88 100 L88 94 L132 94 L132 100`, w: 1.6 }, ok(110, 70, 110, 90, 0.7)] },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(30, 100, 180, 14), w: 1.6, dolgu: true },
      { d: `M30 98 L210 98`, w: 0.8, kesik: true },
      { d: `M90 96 L90 60 L150 60 L150 96`, w: 2.4 },
      ...parmak(120, 56),
    ],
  },
];

// ---------- 10. Çekmece Düzenleyici (4) ----------
export const CEKMECE_BOLME_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(30, 30, 180, 100), w: 1.8 },
      { d: `M30 140 L210 140 M30 136 L30 144 M210 136 L210 144`, w: 1 },
      ...kumpas(60, 60),
    ],
  },
  { cizgiler: [ZEMIN, { d: kutu(30, 30, 180, 100), w: 1.8 }, izgara(36, 36, 5, 3, 33), ...kalem(172, 118)] },
  {
    cizgiler: [ZEMIN, ...yazici(20, 30), { d: kutu(160, 70, 60, 40), w: 1.6, dolgu: true }, izgara(160, 70, 2, 1, 30)],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(30, 30, 180, 100), w: 1.8 },
      izgara(36, 36, 5, 3, 33),
      { d: kutu(38, 38, 62, 29) + " " + kutu(104, 38, 29, 62) + " " + kutu(137, 71, 62, 29), w: 1.6, dolgu: true },
    ],
  },
];

// ---------- 11. Çift Renkli Anahtarlık (4) ----------
export const RENKLI_ANAHTARLIK_3D_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, PLAKA, ISIM, { d: `M210 60 L210 110 M206 60 L214 60 M206 110 L214 110`, w: 0.8 }] },
  {
    cizgiler: [
      ZEMIN,
      ...laptop(70, 30),
      { d: `M80 70 L160 70 M80 60 L160 60 M80 50 L160 50`, w: 0.8 },
      { d: `M80 56 L160 56`, w: 2.4 },
      { d: kutu(166, 50, 30, 12), w: 1.2, dolgu: true },
    ],
  },
  { cizgiler: [ZEMIN, ...yazici(40, 20), ...makara(200, 60, 18), ok(180, 40, 120, 30), damla(110, 70, 0.7)] },
  { cizgiler: [ZEMIN, PLAKA, ISIM, onay(210, 40, 1.2)] },
];

// ---------- 12. Vidalı Kapaklı Kutu (4) ----------
export const VIDALI_KAPAKLI_KUTU_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...laptop(70, 30), { d: `M100 70 L100 50 M140 70 L140 50`, w: 1.4 }, disler(54), disler(62)] },
  {
    cizgiler: [
      ZEMIN,
      ...KUTU_V,
      disler(80),
      { d: `M60 66 L180 66`, w: 1.8 },
      { d: `M196 80 L196 86 M192 80 L200 80 M192 86 L200 86`, w: 0.9 },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...yazici(20, 30),
      { d: kutu(170, 90, 40, 40), w: 1.6, dolgu: true },
      { d: `M170 96 L210 98 M170 104 L210 106`, w: 0.8 },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...KUTU_V,
      disler(80),
      { d: `M60 54 L180 54 L180 66 L60 66 Z`, w: 1.6, dolgu: true },
      yayOk(120, 60, 66, 0.2, 1),
      ...zimpara(180, 20, 30, 10),
    ],
  },
];

// ---------- 13. TPU Telefon Kılıfı (4) ----------
export const TPU_TELEFON_KILIFI_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...laptop(30, 40), ...kilif(156, 20).map((c) => ({ ...c, w: 1.4 })), ...indir(120, 30)] },
  {
    cizgiler: [
      ZEMIN,
      ...laptop(70, 30),
      { d: `M86 50 L120 50 M86 60 L110 60 M86 70 L130 70`, w: 1 },
      { d: daire(140, 60, 8), w: 1.2 },
      { d: `M140 60 L136 54`, w: 1.4 },
    ],
  },
  { cizgiler: [ZEMIN, ...yazici(60, 20), { d: kutu(84, 94, 52, 6), w: 2 }] },
  { cizgiler: [ZEMIN, ...kilif(90, 20), ...telefon(94, 24, 52, 102), onay(200, 40, 1.2)] },
];

// ---------- 14. Nozul Değişimi (4) ----------
export const NOZUL_DEGISIMI_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      ...nozul(110, 90),
      ...termometre(180, 40, 60),
      { d: `M110 40 L110 10`, w: 2 },
      ok(120, 20, 120, 4, 0.7),
    ],
  },
  { cizgiler: [ZEMIN, ...nozul(110, 90), ...pense(70, 50)] },
  { cizgiler: [ZEMIN, ...nozul(110, 90), anahtar(110, 92), yayOk(110, 92, 14, 3.6, 5.2)] },
  {
    cizgiler: [ZEMIN, ...nozul(110, 80), { d: `M110 80 Q108 100 112 120 Q116 130 108 134`, w: 2 }, onay(180, 40, 1.2)],
  },
];

// ---------- 15. Litofan Lamba (4) ----------
export const LITOFAN_LAMBA_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      ...laptop(30, 40),
      { d: kutu(150, 40, 60, 50), w: 1.4, dolgu: true },
      { d: daire(180, 60, 8) + ` M168 90 Q180 70 192 90`, w: 1 },
      ok(116, 70, 144, 66),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...laptop(70, 30),
      { d: `M86 50 L120 50 M86 60 L110 60`, w: 1 },
      { d: kutu(124, 46, 20, 18), w: 1.4, dolgu: true },
    ],
  },
  { cizgiler: [ZEMIN, ...yazici(60, 20), { d: kutu(98, 62, 24, 38), w: 1.4, dolgu: true }] },
  {
    cizgiler: [
      ZEMIN,
      ...lamba(120, 134),
      LITO,
      { d: daire(120, 56, 12) + ` M96 110 Q120 80 144 110`, w: 1.4 },
      { d: `M60 30 L44 20 M180 30 L196 20 M60 60 L40 60 M180 60 L200 60`, w: 1 },
    ],
  },
];

// ---------- 16. Eklemli Ejderha (4) ----------
export const EKLEMLI_EJDERHA_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      ...laptop(30, 40),
      { d: `M44 70 L60 62 L66 70 L60 76 Z M70 64 L110 64 L110 76 L70 76 Z`, w: 0.9 },
      ...indir(170, 70),
    ],
  },
  { cizgiler: [ZEMIN, ...yazici(60, 20, 20, 52), kagit(80, 98), onay(200, 40, 1.2)] },
  {
    cizgiler: [
      ZEMIN,
      ...yazici(60, 20),
      { d: kutu(84, 94, 52, 6), w: 1.6, dolgu: true },
      carpi(40, 60, 8),
      { d: `M30 70 L50 70 L50 90`, w: 1 },
    ],
  },
  { cizgiler: [ZEMIN, ...ejderha(20, 76, true), yayOk(110, 76, 30, 3.6, 5.8)] },
];

// ---------- 17. Masa Altı Kulaklık Askısı (4) ----------
export const KULAKLIK_ASKISI_ADIM: Cizim[] = [
  {
    cizgiler: [ZEMIN, ...laptop(30, 40), ...indir(170, 70), { d: `M50 60 L90 60 L90 64 L76 64 L76 82 L64 82`, w: 1.4 }],
  },
  { cizgiler: [ZEMIN, KANCA_A, { d: `M60 60 L180 60 M60 70 L180 70 M60 80 L180 80`, w: 0.5 }, onay(210, 30, 1.2)] },
  {
    cizgiler: [
      ZEMIN,
      ...yazici(60, 20),
      { d: `M80 100 L80 90 L140 90 L140 96 L100 96 L100 100 Z`, w: 1.4, dolgu: true },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(30, 30, 180, 10), w: 1.8, dolgu: true },
      KANCA_A,
      vida(80, 44),
      vida(160, 44),
      { d: `M86 104 Q60 120 90 134 M116 104 Q140 120 110 134`, w: 3 },
    ],
  },
];

// ---------- 18. Baskı Hata Rehberi (4) ----------
export const BASKI_HATA_COZUMU_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...kup(50, 120, 30), ...kup(150, 120, 30), iplik(92, 150, 92), ...termometre(200, 30, 50)] },
  {
    cizgiler: [
      ZEMIN,
      { d: `M50 100 Q50 110 60 110 L170 110 Q180 110 180 100`, w: 1.4 },
      { d: `M50 100 L50 80 L180 80 L180 100`, w: 1.6, dolgu: true },
      { d: `M44 112 L186 112`, w: 3 },
      { d: `M40 116 Q46 104 50 100 M190 116 Q184 104 180 100`, w: 1.2 },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(70, 100, 60, 30) + " " + kutu(84, 70, 60, 30), w: 1.6, dolgu: true },
      ok(110, 50, 140, 50),
      ...vidaGrup(),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(60, 70, 120, 50), w: 1.6, dolgu: true },
      { d: `M64 80 L80 80 M90 80 L100 80 M120 80 L130 80 M64 96 L76 96 M100 96 L120 96 M140 96 L150 96`, w: 1.6 },
      ...makara(200, 50, 16),
    ],
  },
];
function vidaGrup(): Cizgi[] {
  return [vida(180, 90), vida(196, 90), { d: `M170 110 L210 110`, w: 2 }];
}
