// Mum & Sabun kategorisi (Altın 40 dışı 18 proje): adım sahneleri (viewBox 0 0 240 150).
// Adım sayısı ve sırası src/data/ek/mum-sabun.ts içeriğiyle birebir eşleşir.
import { Cizgi, Cizim, Tarama, daire, kutu } from "../arac";
import {
  alev,
  bicak,
  carpi,
  damla,
  damlalik,
  firca,
  kase,
  kavanoz,
  makas,
  ok,
  onay,
  parmak,
  saat,
  sise,
  sis,
  sprey,
  tencere,
  termometre,
  yayOk,
  ZEMIN,
} from "./parca";

type Nokta = [number, number, number];

// ---------- Ortak parçalar ----------
const takvim = (x: number, y: number): Cizgi[] => [
  { d: kutu(x, y, 30, 28), w: 1.4, dolgu: true },
  {
    d: `M${x} ${y + 8} L${x + 30} ${y + 8} M${x + 8} ${y - 3} L${x + 8} ${y + 3} M${x + 22} ${y - 3} L${x + 22} ${y + 3}`,
    w: 1.2,
  },
];
// Koruyucu gözlük: (x,y) sol üst
const gozluk = (x: number, y: number): Cizgi[] => [
  {
    d: `M${x} ${y + 4} Q${x} ${y} ${x + 6} ${y} L${x + 54} ${y} Q${x + 60} ${y} ${x + 60} ${y + 4} L${x + 60} ${y + 16} Q${x + 60} ${y + 22} ${x + 54} ${y + 22} L${x + 36} ${y + 22} Q${x + 30} ${y + 14} ${x + 24} ${y + 22} L${x + 6} ${y + 22} Q${x} ${y + 22} ${x} ${y + 16} Z`,
    w: 1.6,
    dolgu: true,
  },
  { d: `M${x} ${y + 10} L${x - 10} ${y + 8} M${x + 60} ${y + 10} L${x + 70} ${y + 8}`, w: 1.3 },
];
// Eldiven: bilek (x,y), parmaklar yukarı
const eldiven = (x: number, y: number): Cizgi => ({
  d: `M${x - 14} ${y} L${x - 14} ${y - 26} L${x - 20} ${y - 36} L${x - 16} ${y - 38} L${x - 10} ${y - 30} L${x - 10} ${y - 50} L${x - 5} ${y - 50} L${x - 4} ${y - 34} L${x - 2} ${y - 54} L${x + 3} ${y - 54} L${x + 4} ${y - 34} L${x + 6} ${y - 50} L${x + 11} ${y - 50} L${x + 10} ${y - 32} L${x + 14} ${y - 44} L${x + 18} ${y - 42} L${x + 14} ${y - 22} L${x + 14} ${y} Z`,
  w: 1.4,
  dolgu: true,
});
// Mutfak terazisi: sol üst (x,y)
const terazi = (x: number, y: number): Cizgi[] => [
  { d: kutu(x, y + 6, 60, 24), w: 1.7, dolgu: true },
  { d: kutu(x - 4, y, 68, 6), w: 1.5, dolgu: true },
  { d: kutu(x + 16, y + 12, 28, 10), w: 1 },
];
// Benmari: tencere + iç kap; orta (cx), tencere üst y
const benmari = (cx: number, y = 80): Cizgi[] => [
  ...tencere(cx, y, 90, 36),
  {
    d: `M${cx - 30} ${y - 16} L${cx + 30} ${y - 16} L${cx + 26} ${y + 20} L${cx - 26} ${y + 20} Z`,
    w: 1.6,
    dolgu: true,
  },
  { d: `M${cx - 40} ${y + 10} q10 -3 20 0 M${cx + 20} ${y + 10} q10 -3 20 0`, w: 0.9 },
  alev(cx - 14, y + 52, 1),
  alev(cx + 14, y + 52, 1),
];
// Mum kabı (bardak): taban orta (cx,y)
const bardak = (cx: number, y: number, en = 50, boy = 60): Cizgi => ({
  d: `M${cx - en / 2} ${y - boy} L${cx - en / 2 + 3} ${y} L${cx + en / 2 - 3} ${y} L${cx + en / 2} ${y - boy}`,
  w: 1.7,
  dolgu: true,
});
const mumDolu = (cx: number, y: number, en = 50, seviye = 40): Tarama => ({
  id: "m" + cx,
  sinir: kutu(cx - en / 2 + 3, y - seviye, en - 6, seviye),
  kutu: [cx - en / 2 + 3, y - seviye, en - 6, seviye],
  aralik: 5,
  sonra: 0,
});
const fitil = (x: number, y1: number, y2: number, ahsap = false): Cizgi =>
  ahsap ? { d: kutu(x - 1, y2, 3, y1 - y2), w: 1.4, dolgu: true } : { d: `M${x} ${y1} L${x} ${y2}`, w: 1.3 };
const fitilAlev = (x: number, y: number): Cizgi => alev(x, y, 1.1);
// Dökme sürahi: ağız (x,y), gövde sağ üstte
const surahi = (x: number, y: number): Cizgi[] => [
  {
    d: `M${x} ${y} L${x + 10} ${y - 12} L${x + 50} ${y - 30} L${x + 60} ${y - 10} L${x + 20} ${y + 6} Z`,
    w: 1.6,
    dolgu: true,
  },
  { d: `M${x} ${y} Q${x - 2} ${y + 10} ${x} ${y + 22}`, w: 1.4 },
];
// Dikdörtgen kalıp: sol üst (x,y)
const kalip = (x: number, y: number, en = 120, boy = 40): Cizgi[] => [
  { d: `M${x} ${y} L${x} ${y + boy} L${x + en} ${y + boy} L${x + en} ${y}`, w: 1.8, dolgu: true },
];
// El blenderı: uç (x,y)
const blender = (x: number, y: number): Cizgi[] => [
  { d: `M${x} ${y} L${x} ${y - 40}`, w: 3 },
  { d: kutu(x - 8, y - 76, 16, 36), w: 1.6, dolgu: true },
  { d: daire(x, y + 3, 6, 3), w: 1.3, dolgu: true },
];
// Sabun kalıpları (kesilmiş): sol (x,y)
const sabunlar = (x: number, y: number, n = 4): Cizgi => ({
  d: Array.from({ length: n }, (_, i) => kutu(x + i * 36, y, 30, 22)).join(" "),
  w: 1.5,
  dolgu: true,
});
// Rende: sol üst (x,y)
const rende = (x: number, y: number): Cizgi[] => [
  { d: `M${x} ${y + 70} L${x + 8} ${y} L${x + 40} ${y} L${x + 48} ${y + 70} Z`, w: 1.6, dolgu: true },
  {
    d: [0, 1, 2, 3].map((j) => [0, 1, 2].map((i) => daire(x + 16 + i * 8, y + 14 + j * 14, 2)).join(" ")).join(" "),
    w: 0.8,
  },
];
// Pompalı şişe: taban orta (cx,y)
const pompali = (cx: number, y: number): Cizgi[] => [
  { d: kutu(cx - 16, y - 60, 32, 60), w: 1.7, dolgu: true },
  {
    d: `M${cx - 6} ${y - 60} L${cx - 6} ${y - 68} L${cx + 6} ${y - 68} L${cx + 6} ${y - 60} M${cx} ${y - 68} L${cx} ${y - 76} L${cx + 16} ${y - 76}`,
    w: 1.6,
  },
];
// Kuru çiçek: (x,y)
const cicek = (x: number, y: number): Cizgi => ({
  d: daire(x, y, 3) + ` M${x - 6} ${y} a3 3 0 0 1 3 -5 M${x + 6} ${y} a3 3 0 0 0 -3 -5 M${x} ${y + 3} l0 10`,
  w: 1,
});
// Bomba kalıbı (yarım küre): merkez (x,y)
const yarimKure = (x: number, y: number, R = 24, ust = false): Cizgi => ({
  d: ust ? `M${x - R} ${y} A${R} ${R} 0 0 1 ${x + R} ${y} Z` : `M${x - R} ${y} A${R} ${R} 0 0 0 ${x + R} ${y} Z`,
  w: 1.6,
  dolgu: true,
});
// Dudak balsamı tüpü: taban orta (cx,y)
const tup = (cx: number, y: number, kapak = false): Cizgi[] => [
  { d: kutu(cx - 7, y - 40, 14, 40), w: 1.5, dolgu: true },
  ...(kapak ? [{ d: kutu(cx - 8, y - 54, 16, 16), w: 1.5, dolgu: true }] : []),
];
// Kurdele fiyonk: (x,y)
const fiyonk = (x: number, y: number): Cizgi => ({
  d: `M${x} ${y} Q${x - 16} ${y - 12} ${x - 14} ${y + 2} Z M${x} ${y} Q${x + 16} ${y - 12} ${x + 14} ${y + 2} Z M${x} ${y} L${x - 8} ${y + 14} M${x} ${y} L${x + 8} ${y + 14}`,
  w: 1.2,
  dolgu: true,
});
const etiket = (x: number, y: number): Cizgi[] => [
  { d: kutu(x, y, 40, 24), w: 1.4, dolgu: true },
  { d: `M${x + 6} ${y + 8} L${x + 34} ${y + 8} M${x + 6} ${y + 15} L${x + 28} ${y + 15}`, w: 0.7 },
];
// Yün elyafı: (x,y) sol, en
const yun = (x: number, y: number, en = 60): Cizgi => ({
  d: `M${x} ${y} q${en / 4} -8 ${en / 2} 0 q${en / 4} 8 ${en / 2} 0 M${x + 4} ${y + 6} q${en / 4} -6 ${en / 2} 0 q${en / 4} 6 ${en / 2 - 8} 0`,
  w: 1.2,
});
// Saç kurutma makinesi: ağız (x,y), gövde sağa
const kurutma = (x: number, y: number): Cizgi[] => [
  {
    d: `M${x} ${y - 10} L${x + 40} ${y - 14} Q${x + 60} ${y - 14} ${x + 60} ${y} Q${x + 60} ${y + 14} ${x + 40} ${y + 14} L${x} ${y + 10} Z`,
    w: 1.6,
    dolgu: true,
  },
  { d: `M${x + 40} ${y + 14} L${x + 46} ${y + 44} L${x + 56} ${y + 44} L${x + 52} ${y + 12}`, w: 1.5, dolgu: true },
  {
    d: `M${x - 6} ${y - 6} L${x - 20} ${y - 10} M${x - 6} ${y} L${x - 22} ${y} M${x - 6} ${y + 6} L${x - 20} ${y + 10}`,
    w: 0.8,
    kesik: true,
  },
];
// Silindir mum (sütun): taban orta (cx,y)
const sutunMum = (cx: number, y: number, en = 50, boy = 80): Cizgi[] => [
  { d: kutu(cx - en / 2, y - boy, en, boy), w: 1.8, dolgu: true },
  fitil(cx, y - boy, y - boy - 10),
];
// Bal mumu levha: sol üst (x,y)
const levha = (x: number, y: number, en = 120, boy = 70): Cizgi[] => [
  { d: kutu(x, y, en, boy), w: 1.6, dolgu: true },
  {
    d: Array.from(
      { length: Math.floor(en / 12) },
      (_, i) => `M${x + 6 + i * 12} ${y} L${x + 6 + i * 12} ${y + boy}`,
    ).join(" "),
    w: 0.5,
  },
];
// Rulo mum (yandan silindir): merkez alt (cx,y)
const rulo = (cx: number, y: number, R = 18, boy = 80): Cizgi[] => [
  { d: `M${cx - R} ${y} L${cx - R} ${y - boy} M${cx + R} ${y} L${cx + R} ${y - boy}`, w: 1.7 },
  { d: daire(cx, y - boy, R, 6), w: 1.6, dolgu: true },
  { d: `M${cx - R} ${y} Q${cx} ${y + 8} ${cx + R} ${y}`, w: 1.7 },
  { d: daire(cx, y - boy, R * 0.6, 3.6) + " " + daire(cx, y - boy, R * 0.25, 1.6), w: 0.7 },
  fitil(cx, y - boy, y - boy - 12),
];
// Silikon kalıp (şekilli): merkez alt (cx,y)
const silikonKalip = (cx: number, y: number): Cizgi[] => [
  { d: kutu(cx - 40, y - 70, 80, 70), w: 1.8, dolgu: true },
  {
    d: `M${cx - 20} ${y - 66} Q${cx - 26} ${y - 30} ${cx} ${y - 8} Q${cx + 26} ${y - 30} ${cx + 20} ${y - 66} Z`,
    w: 1.2,
  },
];
// Çubuk oda kokusu şişesi: taban orta (cx,y)
const kokuSise = (cx: number, y: number, n = 5, ters = false): Cizgi[] => [
  {
    d: `M${cx - 22} ${y} L${cx - 22} ${y - 40} Q${cx - 22} ${y - 50} ${cx - 8} ${y - 54} L${cx - 8} ${y - 62} L${cx + 8} ${y - 62} L${cx + 8} ${y - 54} Q${cx + 22} ${y - 50} ${cx + 22} ${y - 40} L${cx + 22} ${y} Z`,
    w: 1.7,
    dolgu: true,
  },
  {
    d: Array.from({ length: n }, (_, i) => `M${cx - 4 + i * 2} ${y - 20} L${cx - 30 + i * 14} ${y - 130}`).join(" "),
    w: ters ? 1.8 : 1.1,
  },
];
// Tealight: taban orta (cx,y)
const tealight = (cx: number, y: number): Cizgi[] => [
  { d: kutu(cx - 12, y - 8, 24, 8), w: 1.4, dolgu: true },
  fitilAlev(cx, y - 10),
];
const kokuDamla = (x: number, y: number): Cizgi[] => [...damlalik(x, y), damla(x, y + 8, 0.8)];

// ---------- 1. Soğuk İşlem Zeytinyağlı Sabun (7) ----------
export const SOGUK_SABUN_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...gozluk(30, 30), eldiven(140, 80), eldiven(180, 80), ...terazi(60, 100)] },
  {
    cizgiler: [
      ZEMIN,
      kase(90, 90, 70, 40),
      { d: `M58 98 q8 -3 16 0 q8 3 16 0 q8 -3 16 0 q8 3 12 0`, w: 1 },
      { d: kutu(100, 50, 20, 14), w: 1.4, dolgu: true },
      ok(110, 66, 96, 86),
      ...gozluk(150, 20),
    ],
  },
  { cizgiler: [ZEMIN, ...tencere(110, 80, 90, 36), alev(96, 132, 1), alev(124, 132, 1), ...termometre(170, 40, 60)] },
  { cizgiler: [ZEMIN, kase(110, 76, 110, 50), ...blender(110, 96), ...surahi(150, 64), ...termometre(200, 50, 50)] },
  {
    cizgiler: [
      ZEMIN,
      kase(90, 76, 110, 50),
      { d: `M50 86 Q70 80 90 90 Q110 98 130 86`, w: 1.4 },
      ok(150, 80, 180, 96),
      ...kalip(170, 96, 60, 30),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...kalip(30, 90, 100, 40),
      { d: `M26 86 L134 86`, w: 1.6 },
      ...saat(70, 50, 12),
      sabunlar(150, 108, 2),
      ...bicak(150, 100),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: `M20 100 L220 100`, w: 2.4 },
      sabunlar(30, 78, 5),
      ...takvim(180, 30),
      { d: `M30 50 q10 -6 20 0 q10 6 20 0`, w: 0.9 },
    ],
  },
];

// ---------- 2. Ahşap Fitilli Mum (5) ----------
export const AHSAP_FITIL_MUM_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      bardak(80, 130, 60, 70),
      fitil(80, 126, 54, true),
      { d: kutu(72, 124, 16, 6), w: 1.2, dolgu: true },
      ...makas(150, 60),
    ],
  },
  { cizgiler: [ZEMIN, ...benmari(120, 80)] },
  { cizgiler: [ZEMIN, ...benmari(100, 80), ...termometre(170, 30, 50), ...kokuDamla(100, 40)] },
  {
    cizgiler: [
      ZEMIN,
      bardak(80, 130, 60, 70),
      fitil(80, 126, 54, true),
      ...surahi(110, 60),
      ...termometre(200, 50, 50),
    ],
    taramalar: [mumDolu(80, 130, 60, 30)],
  },
  {
    cizgiler: [ZEMIN, bardak(100, 130, 60, 70), fitil(100, 126, 70, true), fitilAlev(101, 66), ...makas(126, 72)],
    taramalar: [mumDolu(100, 130, 60, 54)],
  },
];

// ---------- 3. Bal Mumu Rulo Mum (4) ----------
export const BAL_MUMU_MUM_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...levha(40, 60), ...kurutma(166, 90)] },
  { cizgiler: [ZEMIN, ...levha(60, 60), fitil(66, 54, 136), yayOk(70, 96, 10, 3.2, 6)] },
  { cizgiler: [ZEMIN, ...levha(100, 60, 100), ...rulo(70, 130, 14, 70), ok(120, 50, 90, 50)] },
  { cizgiler: [ZEMIN, ...rulo(110, 130, 20, 80), ...parmak(134, 90), onay(190, 40, 1.2)] },
];

// ---------- 4. Silikon Kalıpta Mum (5) ----------
export const KALIP_MUM_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...silikonKalip(120, 130), fitil(120, 134, 50), { d: `M96 50 L144 50`, w: 2.4 }] },
  { cizgiler: [ZEMIN, ...benmari(100, 80), ...kokuDamla(170, 50), damla(170, 60)] },
  {
    cizgiler: [
      ZEMIN,
      ...silikonKalip(100, 130),
      fitil(100, 134, 50),
      { d: `M76 50 L124 50`, w: 2.4 },
      ...surahi(130, 50),
      ...termometre(200, 50, 50),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...silikonKalip(100, 130),
      fitil(100, 134, 50),
      { d: `M88 66 Q100 80 112 66`, w: 1.2 },
      ...saat(190, 50, 12),
      ok(150, 40, 112, 62),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: `M40 130 L40 60 L60 60 M100 60 L120 60 L120 130`, w: 1.6 },
      { d: `M150 128 Q140 90 166 64 Q192 90 182 128 Z`, w: 1.7, dolgu: true },
      fitil(166, 64, 54),
      ok(126, 90, 146, 90),
    ],
  },
];

// ---------- 5. Artık Mumlardan Yeni Mum (4) ----------
export const MUM_ERIT_YENILE_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      ...sutunMum(60, 130, 30, 30),
      ...sutunMum(110, 130, 24, 20),
      ...sutunMum(160, 130, 30, 24),
      carpi(200, 60, 8),
      { d: `M200 80 L210 70`, w: 1 },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...tencere(120, 80, 100, 40),
      { d: kutu(100, 50, 40, 60), w: 1.6, dolgu: true },
      alev(106, 136, 1),
      alev(134, 136, 1),
      { d: `M74 94 q10 -3 20 0 M146 94 q10 -3 20 0`, w: 1 },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...surahi(80, 50),
      { d: `M90 80 L150 80 L120 110 Z`, w: 1.2, kesik: true },
      kase(120, 112, 70, 22),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      bardak(110, 130, 60, 70),
      fitil(110, 126, 54),
      { d: `M100 54 L120 54`, w: 1.6 },
      ...surahi(140, 50),
    ],
    taramalar: [mumDolu(110, 130, 60, 36)],
  },
];

// ---------- 6. Soya Masaj Mumu (4) ----------
const KAP_A = (cx: number) => ({
  d: `M${cx - 30} 70 L${cx - 30} 130 L${cx + 30} 130 L${cx + 30} 70 L${cx + 40} 66`,
  w: 1.8,
  dolgu: true,
});
export const MASAJ_MUMU_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...benmari(120, 80)] },
  { cizgiler: [ZEMIN, kase(100, 70, 100, 44), ...sise(180, 130, 26, 60), ok(170, 70, 130, 80), ...kokuDamla(100, 40)] },
  { cizgiler: [ZEMIN, KAP_A(100), fitil(100, 126, 54), ...surahi(140, 50)], taramalar: [mumDolu(100, 130, 54, 40)] },
  {
    cizgiler: [
      ZEMIN,
      KAP_A(80),
      fitil(80, 126, 80),
      ...saat(160, 30, 10),
      { d: `M160 80 L230 100 L230 120 L160 110 Z`, w: 1.5, dolgu: true },
      damla(150, 84, 0.8),
      ok(124, 76, 146, 84),
    ],
  },
];

// ---------- 7. Sabun Parçalarından Sıvı Sabun (5) ----------
export const SIVI_SABUN_ADIM: Cizim[] = [
  {
    cizgiler: [ZEMIN, ...rende(80, 50), { d: kutu(150, 80, 40, 24), w: 1.5, dolgu: true }, ok(146, 90, 126, 90)],
    noktalar: [
      [90, 126, 1.2],
      [104, 128, 1.2],
      [96, 124, 1],
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...tencere(110, 80, 100, 40),
      alev(96, 136, 1),
      alev(124, 136, 1),
      { d: `M110 70 L110 40`, w: 2 },
      yayOk(110, 96, 20, 0, 5),
    ],
  },
  { cizgiler: [ZEMIN, ...tencere(110, 80, 100, 40), ...sise(180, 70, 22, 50), ok(170, 40, 140, 66)] },
  {
    cizgiler: [
      ZEMIN,
      ...tencere(110, 80, 100, 40),
      { d: `M60 70 Q110 54 160 70`, w: 1, kesik: true },
      { d: `M30 40 a12 12 0 1 0 10 -20 a10 10 0 1 1 -10 20 Z`, w: 1.3, dolgu: true },
    ],
  },
  { cizgiler: [ZEMIN, ...pompali(80, 130), ...pompali(150, 130), ...surahi(170, 40)] },
];

// ---------- 8. Kokulu Banyo Tuzu (4) ----------
const tuzlar: Nokta[] = [
  [96, 96, 1.4],
  [110, 100, 1.4],
  [124, 96, 1.4],
  [138, 100, 1.4],
  [104, 106, 1.4],
  [130, 106, 1.4],
];
export const TUZ_BANYOSU_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, kase(120, 80, 110, 44), yayOk(120, 96, 16, 0, 5)], noktalar: tuzlar },
  { cizgiler: [ZEMIN, kase(120, 80, 110, 44), ...kokuDamla(120, 40)], noktalar: tuzlar },
  { cizgiler: [ZEMIN, kase(120, 80, 110, 44), cicek(100, 90), cicek(140, 88), ok(180, 50, 150, 80)], noktalar: tuzlar },
  {
    cizgiler: [ZEMIN, ...kavanoz(90, 134, 60, 80), ...etiket(140, 90), { d: `M66 90 L114 90`, w: 0.8 }],
    noktalar: [
      [80, 110, 1.4],
      [96, 116, 1.4],
      [86, 124, 1.4],
    ],
  },
];

// ---------- 9. Banyo Bombası (5) ----------
export const BANYO_BOMBASI_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, kase(120, 80, 110, 44), ok(60, 30, 90, 70), ok(120, 24, 120, 66), ok(180, 30, 150, 70)] },
  { cizgiler: [ZEMIN, kase(120, 80, 110, 44), ...kokuDamla(120, 40), eldiven(190, 130)] },
  { cizgiler: [ZEMIN, kase(100, 80, 110, 44), ...sprey(200, 130), ...sis(198, 82, 30), ...parmak(100, 86)] },
  { cizgiler: [ZEMIN, yarimKure(90, 90), yarimKure(150, 90, 24, true), ok(118, 80, 126, 80, 0.8)] },
  {
    cizgiler: [
      ZEMIN,
      { d: daire(100, 106, 24), w: 1.8, dolgu: true },
      { d: daire(160, 112, 18), w: 1.8, dolgu: true },
      ...saat(200, 40, 12),
    ],
  },
];

// ---------- 10. Dudak Balsamı (4) ----------
export const DUDAK_BALSAMI_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...benmari(120, 80)] },
  { cizgiler: [ZEMIN, ...tup(90, 130), ...tup(120, 130), ...tup(150, 130), ...surahi(160, 60)] },
  { cizgiler: [ZEMIN, ...tup(90, 130), ...tup(120, 130), ...tup(150, 130), ...saat(200, 50, 12)] },
  { cizgiler: [ZEMIN, ...tup(90, 130, true), ...tup(130, 130, true), ...etiket(160, 100)] },
];

// ---------- 11. Hediyelik Sabun Seti (4) ----------
export const KALIPLI_SABUN_HEDIYE_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...benmari(120, 80), { d: kutu(100, 50, 40, 14), w: 1.2, dolgu: true }] },
  { cizgiler: [ZEMIN, kase(70, 90, 60, 30), kase(170, 90, 60, 30), ...kokuDamla(70, 56), ...kokuDamla(170, 56)] },
  {
    cizgiler: [
      ZEMIN,
      ...kalip(40, 90, 160, 40),
      { d: `M80 90 L80 130 M120 90 L120 130 M160 90 L160 130`, w: 1.2 },
      ...sprey(200, 70),
      ...sis(198, 22, 20),
    ],
    noktalar: [
      [60, 100, 1.4],
      [100, 104, 1.4],
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      sabunlar(60, 100, 3),
      { d: kutu(52, 90, 116, 44), w: 1, kesik: true },
      fiyonk(110, 90),
      ...etiket(176, 60),
    ],
  },
];

// ---------- 12. Keçeli Sabun (4) ----------
export const KECILI_SABUN_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(90, 80, 60, 40), w: 1.6, dolgu: true },
      yun(80, 90, 80),
      yun(90, 110, 60),
      { d: `M96 76 L146 124 M146 76 L96 124`, w: 1.1 },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: `M70 60 Q60 100 80 130 L160 130 Q180 100 170 60`, w: 1.3, dolgu: true },
      { d: kutu(96, 84, 50, 34), w: 1.4, dolgu: true },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(90, 80, 60, 34), w: 1.6, dolgu: true },
      eldiven(70, 130),
      eldiven(170, 130),
      yayOk(120, 96, 34, 3.6, 5.8),
      damla(120, 50),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      {
        d: `M80 90 Q80 76 96 76 L144 76 Q160 76 160 90 L160 110 Q160 124 144 124 L96 124 Q80 124 80 110 Z`,
        w: 1.8,
        dolgu: true,
      },
      { d: `M90 90 q8 -4 16 0 q8 4 16 0 q8 -4 16 0 M92 106 q8 -4 16 0 q8 4 16 0`, w: 0.7 },
      ...saat(200, 40, 12),
    ],
  },
];

// ---------- 13. Kahve Telveli Sabun (4) ----------
export const KAHVE_SABUNU_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...benmari(120, 80)] },
  {
    cizgiler: [
      ZEMIN,
      kase(110, 80, 110, 44),
      ...kokuDamla(150, 40),
      { d: `M60 50 L84 50 L80 70 L64 70 Z`, w: 1.4, dolgu: true },
      ok(80, 70, 96, 84),
    ],
    noktalar: [
      [96, 96, 1],
      [110, 100, 1],
      [124, 94, 1],
      [116, 106, 1],
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      kase(80, 70, 90, 40),
      ...termometre(140, 40, 50),
      ...kalip(160, 96, 60, 34),
      ok(120, 90, 156, 100),
    ],
  },
  {
    cizgiler: [ZEMIN, ...kalip(40, 96, 60, 34), sabunlar(130, 108, 2), ok(104, 110, 126, 116)],
    noktalar: [
      [142, 116, 1],
      [150, 122, 1],
      [178, 114, 1],
      [186, 122, 1],
    ],
  },
];

// ---------- 14. Kastil Sabunu (5) ----------
export const ZEYTINYAGLI_KASTIL_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...gozluk(30, 30), eldiven(140, 80), ...terazi(160, 100), ...sise(80, 130, 26, 60)] },
  {
    cizgiler: [
      ZEMIN,
      kase(90, 90, 70, 40),
      { d: kutu(100, 50, 20, 14), w: 1.4, dolgu: true },
      ok(110, 66, 96, 86),
      ...gozluk(150, 20),
      { d: `M170 80 L200 80 M176 90 L206 90`, w: 0.8, kesik: true },
    ],
  },
  { cizgiler: [ZEMIN, kase(110, 76, 110, 50), ...blender(110, 96), ...termometre(190, 40, 50), ...saat(30, 40, 10)] },
  { cizgiler: [ZEMIN, kase(70, 70, 90, 40), ...kalip(140, 96, 80, 34), ok(110, 84, 140, 100)] },
  { cizgiler: [ZEMIN, { d: `M20 100 L220 100`, w: 2.4 }, sabunlar(30, 78, 5), ...takvim(180, 30), ...takvim(140, 30)] },
];

// ---------- 15. Defne Yağlı Sabun (4) ----------
export const DEFNE_SABUNU_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      ...gozluk(30, 30),
      eldiven(140, 80),
      ...terazi(160, 100),
      { d: `M60 100 Q80 80 100 100 Q80 110 60 100 Z`, w: 1.3, dolgu: true },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      kase(90, 90, 70, 40),
      { d: kutu(100, 50, 20, 14), w: 1.4, dolgu: true },
      ok(110, 66, 96, 86),
      ...termometre(180, 40, 60),
    ],
  },
  { cizgiler: [ZEMIN, kase(110, 76, 110, 50), ...blender(110, 96), ...surahi(150, 64)] },
  { cizgiler: [ZEMIN, ...kalip(30, 96, 80, 34), sabunlar(130, 108, 2), ...takvim(190, 30)] },
];

// ---------- 16. Mum Süsleme (Peçete) (4) ----------
const DESEN: Cizgi = { d: `M100 70 Q110 60 120 70 Q130 60 140 70 L120 92 Z`, w: 1.2 };
export const MUM_BOYAMA_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, { d: kutu(60, 40, 120, 80), w: 1.4, dolgu: true }, DESEN, ...makas(150, 90)] },
  { cizgiler: [ZEMIN, ...sutunMum(120, 134, 70, 100), DESEN, { d: kutu(80, 50, 80, 60), w: 1, kesik: true }] },
  {
    cizgiler: [
      ZEMIN,
      ...sutunMum(100, 134, 70, 100),
      DESEN,
      { d: kutu(60, 50, 80, 60), w: 1, kesik: true },
      ...kurutma(170, 80),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...sutunMum(100, 134, 70, 100),
      DESEN,
      { d: `M136 50 Q170 60 190 40`, w: 1, kesik: true },
      onay(200, 90, 1.2),
    ],
  },
];

// ---------- 17. Çubuklu Oda Kokusu (4) ----------
export const ODA_KOKUSU_ADIM: Cizim[] = [
  {
    cizgiler: [ZEMIN, ...sise(110, 130, 44, 70), ...kokuDamla(110, 40), { d: `M90 100 q10 -3 20 0 q10 3 20 0`, w: 1 }],
  },
  { cizgiler: [ZEMIN, ...kokuSise(120, 134)] },
  { cizgiler: [ZEMIN, ...kokuSise(120, 134, 5, true), yayOk(120, 20, 16, 3.2, 6), ...saat(200, 40, 10)] },
  {
    cizgiler: [
      ZEMIN,
      ...kokuSise(120, 134),
      ...takvim(180, 60),
      { d: `M60 40 q6 -6 12 0 q6 6 12 0 M64 54 q6 -6 12 0`, w: 0.9 },
    ],
  },
];

// ---------- 18. Kuru Çiçekli Mum Feneri (4) ----------
export const MUM_VAZOSU_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      bardak(110, 130, 60, 80),
      { d: kutu(150, 70, 30, 20), w: 1.4, dolgu: true },
      { d: `M156 70 L160 52`, w: 1 },
    ],
  },
  { cizgiler: [ZEMIN, bardak(110, 130, 60, 80), ...firca(130, 90), cicek(96, 80)] },
  {
    cizgiler: [ZEMIN, bardak(110, 130, 60, 80), cicek(96, 80), cicek(118, 104), ...firca(140, 66)],
    taramalar: [{ id: "t", sinir: kutu(82, 54, 56, 70), kutu: [82, 54, 56, 70], aralik: 7, sonra: 0 }],
  },
  {
    cizgiler: [
      ZEMIN,
      bardak(110, 130, 60, 80),
      cicek(96, 80),
      cicek(118, 104),
      ...tealight(110, 128),
      ...saat(190, 40, 10),
    ],
  },
];
