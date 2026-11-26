// Terraryum kategorisi (Altın 40 dışı 18 proje): adım sahneleri (viewBox 0 0 240 150).
// Adım sayısı ve sırası src/data/ek/terraryum.ts içeriğiyle birebir eşleşir.
import { Cizgi, Cizim, Tarama, daire, kutu, yuvarla as r } from "../arac";
import {
  bez,
  carpi,
  cimbiz,
  damla,
  fide,
  kablo,
  kalem,
  kavanoz,
  makas,
  ok,
  parmak,
  saat,
  saksi,
  sis,
  sprey,
  sukulent,
  yayOk,
  ZEMIN,
} from "./parca";

type Nokta = [number, number, number];

// ---------- Ortak parçalar ----------
// Kavanoz (standart): taban 134, x 65..175
const KAV = kavanoz(120, 134, 110, 110, false);
const KAV_K = kavanoz(120, 134, 110, 110, true);
// Çakıl noktaları: x1..x2, y1..y2
const cakil = (x1: number, x2: number, y1: number, y2: number, a = 7): Nokta[] => {
  const n: Nokta[] = [];
  for (let y = y1 + 3; y < y2; y += a)
    for (let x = x1 + 4 + ((y / a) % 2) * 3; x < x2 - 2; x += a) n.push([r(x), r(y), 1.6]);
  return n;
};
// Toprak taraması (kutu)
const toprakT = (id: string, x: number, y: number, en: number, boy: number, sonra = -1): Tarama => ({
  id,
  sinir: kutu(x, y, en, boy),
  kutu: [x, y, en, boy],
  aralik: 4,
  sonra,
});
// Katman çizgisi
const cizgi = (x1: number, x2: number, y: number, kesik = false): Cizgi => ({
  d: `M${x1} ${y} L${x2} ${y}`,
  w: 1,
  kesik,
});
// Yosun öbeği: sol alt (x,y)
const yosun = (x: number, y: number, en = 30): Cizgi => {
  let d = `M${x} ${y}`;
  for (let i = 0; i + 8 <= en; i += 8) d += ` q4 -9 8 0`;
  return { d: d + " Z", w: 0.9, dolgu: true };
};
// Hava bitkisi (tillandsia): taban (x,y)
const havaBitkisi = (x: number, y: number, s = 1): Cizgi => ({
  d: [-60, -30, 0, 30, 60, -45, 45]
    .map((a) => {
      const t = ((a - 90) * Math.PI) / 180,
        L = (a % 30 === 0 ? 24 : 18) * s;
      return `M${x} ${y} Q${r(x + Math.cos(t) * L * 0.5 + 3)} ${r(y + Math.sin(t) * L * 0.5)} ${r(x + Math.cos(t) * L)} ${r(y + Math.sin(t) * L)}`;
    })
    .join(" "),
  w: 1.2,
});
// Cam küre (asılı): merkez (x,y), yarıçap R, ağız sağ üstte
const kure = (x: number, y: number, R = 40): Cizgi[] => [
  { d: `M${x + R * 0.5} ${r(y - R * 0.87)} A${R} ${R} 0 1 0 ${r(x + R * 0.95)} ${r(y - R * 0.3)}`, w: 1.7 },
  { d: daire(x, y - R - 4, 4), w: 1.2 },
];
// Huni: ağız üst (x,y)
const huni = (x: number, y: number): Cizgi => ({
  d: `M${x - 16} ${y} L${x + 16} ${y} L${x + 3} ${y + 18} L${x + 3} ${y + 34} L${x - 3} ${y + 34} L${x - 3} ${y + 18} Z`,
  w: 1.5,
  dolgu: true,
});
// Dar ağızlı şişe (balon): taban orta (x,y)
const balonSise = (x: number, y: number): Cizgi => ({
  d: `M${x - 8} ${y - 110} L${x - 8} ${y - 90} Q${x - 60} ${y - 80} ${x - 60} ${y - 40} Q${x - 60} ${y} ${x} ${y} Q${x + 60} ${y} ${x + 60} ${y - 40} Q${x + 60} ${y - 80} ${x + 8} ${y - 90} L${x + 8} ${y - 110}`,
  w: 1.8,
});
// Uzun çubuk/kaşık: alt uç (x,y), üst uç (x2,y2)
const cubuk = (x: number, y: number, x2: number, y2: number, uc: "kasik" | "mantar" | "yok" = "yok"): Cizgi[] => [
  { d: `M${x} ${y} L${x2} ${y2}`, w: 1.8 },
  ...(uc === "kasik"
    ? [{ d: daire(x, y + 3, 4, 3), w: 1.3, dolgu: true }]
    : uc === "mantar"
      ? [{ d: kutu(x - 5, y - 2, 10, 7), w: 1.3, dolgu: true }]
      : []),
];
// Fanus (çan): alt orta (x,y)
const fanus = (x: number, y: number): Cizgi[] => [
  {
    d: `M${x - 60} ${y} L${x - 60} ${y - 60} Q${x - 60} ${y - 100} ${x} ${y - 100} Q${x + 60} ${y - 100} ${x + 60} ${y - 60} L${x + 60} ${y}`,
    w: 1.7,
  },
  { d: daire(x, y - 106, 6, 5), w: 1.4, dolgu: true },
];
const tabak = (x: number, y: number, en = 140): Cizgi => ({
  d: `M${x - en / 2} ${y - 10} L${x + en / 2} ${y - 10} L${x + en / 2 - 8} ${y} L${x - en / 2 + 8} ${y} Z`,
  w: 1.6,
  dolgu: true,
});
// Eğrelti: taban (x,y)
const egrelti = (x: number, y: number, s = 1): Cizgi[] => [
  {
    d: `M${x} ${y} Q${r(x - 20 * s)} ${r(y - 30 * s)} ${r(x - 34 * s)} ${r(y - 40 * s)} M${x} ${y} Q${x} ${r(y - 30 * s)} ${r(x + 4 * s)} ${r(y - 50 * s)} M${x} ${y} Q${r(x + 20 * s)} ${r(y - 30 * s)} ${r(x + 34 * s)} ${r(y - 38 * s)}`,
    w: 1.2,
  },
  {
    d: [0.3, 0.5, 0.7]
      .map(
        (t) =>
          `M${r(x - 34 * s * t)} ${r(y - 40 * s * t)} l-5 -4 M${r(x + 2 * s * t)} ${r(y - 50 * s * t)} l-6 -2 M${r(x + 34 * s * t)} ${r(y - 38 * s * t)} l5 -5`,
      )
      .join(" "),
    w: 0.9,
  },
];
// Taş: alt orta (x,y)
const tas = (x: number, y: number, s = 1): Cizgi => ({
  d: `M${r(x - 10 * s)} ${y} Q${r(x - 10 * s)} ${r(y - 10 * s)} ${x} ${r(y - 10 * s)} Q${r(x + 12 * s)} ${r(y - 9 * s)} ${r(x + 12 * s)} ${y} Z`,
  w: 1.4,
  dolgu: true,
});
// Geometrik terraryum (önden): alt orta (x,y)
const GEO: Cizgi[] = [
  { d: `M60 130 L180 130 L200 80 L120 30 L40 80 Z M40 80 L200 80 M60 130 L120 30 L180 130`, w: 1.6 },
];
// Kaktüs: taban (x,y)
const kaktus = (x: number, y: number, s = 1): Cizgi[] => [
  {
    d: `M${r(x - 6 * s)} ${y} L${r(x - 6 * s)} ${r(y - 30 * s)} Q${x} ${r(y - 38 * s)} ${r(x + 6 * s)} ${r(y - 30 * s)} L${r(x + 6 * s)} ${y} Z`,
    w: 1.4,
    dolgu: true,
  },
  {
    d: `M${r(x + 6 * s)} ${r(y - 14 * s)} L${r(x + 14 * s)} ${r(y - 14 * s)} L${r(x + 14 * s)} ${r(y - 24 * s)}`,
    w: 1.3,
  },
  { d: `M${x} ${r(y - 6 * s)} L${x} ${r(y - 30 * s)}`, w: 0.5 },
];
// Venüs sinekkapan: taban (x,y)
const sinekkapan = (x: number, y: number): Cizgi[] => [
  { d: `M${x} ${y} L${x - 12} ${y - 24} M${x} ${y} L${x + 14} ${y - 22}`, w: 1.2 },
  {
    d: `M${x - 12} ${y - 24} Q${x - 26} ${y - 30} ${x - 22} ${y - 40} Q${x - 10} ${y - 36} ${x - 12} ${y - 24} M${x + 14} ${y - 22} Q${x + 28} ${y - 26} ${x + 26} ${y - 38} Q${x + 14} ${y - 34} ${x + 14} ${y - 22}`,
    w: 1.2,
    dolgu: true,
  },
  {
    d: `M${x - 22} ${y - 40} l-2 -3 M${x - 18} ${y - 38} l0 -4 M${x + 26} ${y - 38} l2 -3 M${x + 22} ${y - 36} l0 -4`,
    w: 0.7,
  },
];
// LED tel (noktalı ışık zinciri): x1..x2, y
const ledTel = (x1: number, x2: number, y: number): Cizgi => ({
  d: `M${x1} ${y} Q${(x1 + x2) / 2} ${y + 12} ${x2} ${y}`,
  w: 1,
});
const ledNokta = (x1: number, x2: number, y: number): Nokta[] =>
  [0.15, 0.35, 0.5, 0.65, 0.85].map(
    (t) => [r(x1 + (x2 - x1) * t), r(y + 12 * 4 * t * (1 - t) * 0.5 * 2 * 0.5), 2] as Nokta,
  );
// Yarım küre (duvar): merkez üst (x,y)
const yarimKure = (x: number, y: number, R = 30): Cizgi => ({
  d: `M${x - R} ${y} A${R} ${R} 0 0 0 ${x + R} ${y} Z`,
  w: 1.6,
});
// Wardian kutu
const WARDIAN: Cizgi[] = [
  { d: `M50 130 L190 130 L190 80 L50 80 Z M50 80 L120 36 L190 80`, w: 2.2 },
  { d: `M96 80 L96 130 M144 80 L144 130 M120 36 L120 80`, w: 1.2 },
];
// Akvaryum (eski): sol üst (x,y)
const tank = (x = 30, y = 30, en = 180, boy = 100): Cizgi[] => [
  { d: kutu(x, y, en, boy), w: 1.8 },
  { d: `M${x - 3} ${y} L${x + en + 3} ${y} M${x - 3} ${y + boy} L${x + en + 3} ${y + boy}`, w: 2.4 },
];
// Yosun topu (kokedama): merkez (x,y)
const top = (x: number, y: number, R = 30, ip = false): Cizgi[] => [
  { d: daire(x, y, R), w: 1.7, dolgu: true },
  ...(ip
    ? [
        {
          d: `M${x - R} ${y} Q${x} ${y + 16} ${x + R} ${y} M${x - R * 0.7} ${y - R * 0.7} Q${x + 6} ${y} ${x + R * 0.7} ${y + R * 0.7} M${x + R * 0.7} ${y - R * 0.7} Q${x - 6} ${y} ${x - R * 0.7} ${y + R * 0.7}`,
          w: 1,
        },
      ]
    : []),
];
// İzopod: (x,y)
const izopod = (x: number, y: number): Cizgi => ({
  d:
    daire(x, y, 7, 4) +
    ` M${x - 4} ${y - 3} L${x - 4} ${y + 3} M${x} ${y - 4} L${x} ${y + 4} M${x + 4} ${y - 3} L${x + 4} ${y + 3}`,
  w: 1,
});
// Kuru yaprak: (x,y)
const kuruYaprak = (x: number, y: number): Cizgi => ({
  d: `M${x - 10} ${y} Q${x} ${y - 7} ${x + 10} ${y} Q${x} ${y + 5} ${x - 10} ${y} Z M${x - 10} ${y} L${x + 10} ${y}`,
  w: 1,
  dolgu: true,
});
// Zen tepsisi
const TEPSI: Cizgi = { d: kutu(30, 40, 180, 90), w: 2, dolgu: true };
const TEPSI_IC: Cizgi = { d: kutu(36, 46, 168, 78), w: 0.8 };
// Tırmık: dişler (x,y), sap sağ üste
const tirmik = (x: number, y: number): Cizgi[] => [
  {
    d: `M${x} ${y} L${x + 30} ${y} M${x + 2} ${y} L${x + 2} ${y + 6} M${x + 10} ${y} L${x + 10} ${y + 6} M${x + 18} ${y} L${x + 18} ${y + 6} M${x + 26} ${y} L${x + 26} ${y + 6}`,
    w: 1.4,
  },
  { d: `M${x + 15} ${y} L${x + 50} ${y - 40}`, w: 2 },
];
// Minyatür figür: taban (x,y)
const mini = (x: number, y: number): Cizgi[] => [
  { d: daire(x, y - 16, 3), w: 1.1, dolgu: true },
  {
    d: `M${x} ${y - 13} L${x} ${y - 5} M${x} ${y - 5} L${x - 3} ${y} M${x} ${y - 5} L${x + 3} ${y} M${x - 4} ${y - 10} L${x + 4} ${y - 10}`,
    w: 1,
  },
];
// Çadır: taban sol (x,y)
const cadir = (x: number, y: number): Cizgi => ({
  d: `M${x} ${y} L${x + 12} ${y - 16} L${x + 24} ${y} Z M${x + 12} ${y - 16} L${x + 12} ${y}`,
  w: 1.2,
  dolgu: true,
});
// Hediye kurdele (kapak üstü): (x,y)
const kurdele = (x: number, y: number): Cizgi => ({
  d: `M${x} ${y} Q${x - 16} ${y - 12} ${x - 14} ${y + 2} Z M${x} ${y} Q${x + 16} ${y - 12} ${x + 14} ${y + 2} Z M${x} ${y} L${x - 8} ${y + 14} M${x} ${y} L${x + 8} ${y + 14}`,
  w: 1.2,
  dolgu: true,
});
// Kart: sol üst (x,y)
const etiket = (x: number, y: number): Cizgi[] => [
  { d: kutu(x, y, 40, 26), w: 1.4, dolgu: true },
  {
    d: `M${x + 6} ${y + 8} L${x + 34} ${y + 8} M${x + 6} ${y + 14} L${x + 30} ${y + 14} M${x + 6} ${y + 20} L${x + 26} ${y + 20}`,
    w: 0.7,
  },
];
// Izgara (duvar): sol üst (x,y)
const izgara = (x: number, y: number, en: number, boy: number, a = 14): Cizgi[] => {
  let d = "";
  for (let i = a; i < en; i += a) d += `M${x + i} ${y} L${x + i} ${y + boy} `;
  for (let j = a; j < boy; j += a) d += `M${x} ${y + j} L${x + en} ${y + j} `;
  return [
    { d: kutu(x, y, en, boy), w: 1.6 },
    { d: d.trim(), w: 0.7 },
  ];
};
const DUVAR: Cizgi = {
  d: `M0 40 L240 40 M0 80 L240 80 M0 120 L240 120 M60 0 L60 40 M180 0 L180 40 M120 40 L120 80 M30 80 L30 120 M210 80 L210 120`,
  w: 0.4,
};

// Katmanlı kavanoz tabanı (drenaj + toprak)
const KATMAN = { cakil: cakil(66, 174, 118, 133), toprak: toprakT("t", 66, 98, 108, 20) };

// ---------- 1. Asılı Hava Bitkisi Terraryumu (4) ----------
export const ASILI_TERRARYUM_ADIM: Cizim[] = [
  { cizgiler: [...kure(110, 80), { d: `M80 104 Q110 116 140 104`, w: 1 }], noktalar: cakil(84, 136, 104, 116, 6) },
  {
    cizgiler: [...kure(110, 80), { d: `M80 104 Q110 116 140 104`, w: 1 }, havaBitkisi(110, 104), ok(170, 50, 130, 80)],
  },
  {
    cizgiler: [
      ...kure(110, 90),
      havaBitkisi(110, 114),
      { d: `M110 46 L110 0`, w: 1 },
      { d: kutu(160, 10, 50, 40), w: 1.3 },
      { d: `M185 10 L185 50 M160 30 L210 30`, w: 0.6 },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      kase0(120, 80, 120, 50),
      havaBitkisi(120, 100, 1.2),
      ...saat(200, 40, 12),
      { d: `M70 92 q10 -4 20 0 q10 4 20 0 q10 -4 20 0 q10 4 20 0`, w: 1 },
    ],
  },
];
function kase0(cx: number, y: number, en: number, boy: number): Cizgi {
  return {
    d: `M${cx - en / 2} ${y} Q${cx - en / 2} ${y + boy} ${cx} ${y + boy} Q${cx + en / 2} ${y + boy} ${cx + en / 2} ${y}`,
    w: 1.8,
    dolgu: true,
  };
}

// ---------- 2. Şişe Bahçesi (5) ----------
const SISE = balonSise(120, 134);
export const SISE_BAHCESI_ADIM: Cizim[] = [
  { cizgiler: [SISE, huni(120, 6), cizgi(66, 174, 118)], noktalar: cakil(72, 168, 118, 130) },
  {
    cizgiler: [SISE, cizgi(64, 176, 112), ...cubuk(110, 108, 130, 0, "kasik")],
    taramalar: [
      {
        id: "t",
        sinir: `M63 112 L177 112 Q170 132 120 132 Q70 132 63 112 Z`,
        kutu: [62, 112, 116, 22],
        aralik: 4,
        sonra: 0,
      },
    ],
  },
  {
    cizgiler: [SISE, cizgi(64, 176, 112), ...fide(118, 100, 1.2), ...cubuk(126, 96, 140, 0)],
    taramalar: [
      {
        id: "t",
        sinir: `M63 112 L177 112 Q170 132 120 132 Q70 132 63 112 Z`,
        kutu: [62, 112, 116, 22],
        aralik: 4,
        sonra: 0,
      },
    ],
  },
  {
    cizgiler: [SISE, cizgi(64, 176, 112), ...fide(118, 112, 1.2), ...cubuk(132, 108, 124, 0, "mantar")],
    taramalar: [
      {
        id: "t",
        sinir: `M63 112 L177 112 Q170 132 120 132 Q70 132 63 112 Z`,
        kutu: [62, 112, 116, 22],
        aralik: 4,
        sonra: 0,
      },
    ],
  },
  {
    cizgiler: [
      SISE,
      cizgi(64, 176, 112),
      ...fide(118, 112, 1.2),
      kablo(120, 0, 160, 80, 20),
      damla(162, 90, 0.7),
      { d: kutu(110, 14, 20, 10), w: 1.4, dolgu: true },
    ],
    taramalar: [
      {
        id: "t",
        sinir: `M63 112 L177 112 Q170 132 120 132 Q70 132 63 112 Z`,
        kutu: [62, 112, 116, 22],
        aralik: 4,
        sonra: 0,
      },
    ],
  },
];

// ---------- 3. Cam Fanus Yosun Bahçesi (4) ----------
export const CAM_FANUS_ADIM: Cizim[] = [
  {
    cizgiler: [ZEMIN, tabak(120, 130), cizgi(60, 180, 112)],
    noktalar: cakil(56, 184, 112, 120),
    taramalar: [toprakT("t", 56, 104, 128, 8, 1)],
  },
  { cizgiler: [ZEMIN, tabak(120, 130), cizgi(56, 184, 104), ...egrelti(90, 104), tas(150, 104), tas(168, 104, 0.7)] },
  {
    cizgiler: [
      ZEMIN,
      tabak(120, 130),
      ...egrelti(90, 104),
      tas(150, 104),
      yosun(100, 104, 40),
      yosun(60, 104, 24),
      ...parmak(116, 96),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      tabak(120, 130),
      ...egrelti(90, 104),
      tas(150, 104),
      yosun(100, 104, 40),
      ...fanus(120, 120),
      ...sprey(196, 100),
      ...sis(194, 54, 14),
    ],
  },
];

// ---------- 4. Geometrik Terraryum (4) ----------
export const GEOMETRIK_TERRARYUM_ADIM: Cizim[] = [
  { cizgiler: [...GEO, cizgi(64, 176, 120)], noktalar: cakil(62, 178, 120, 130) },
  { cizgiler: [...GEO, cizgi(64, 176, 120), cizgi(70, 170, 106)], taramalar: [toprakT("t", 66, 106, 108, 14, 0)] },
  { cizgiler: [...GEO, cizgi(70, 170, 106), ...sukulent(96, 106), ...sukulent(140, 106, 0.8), ...cimbiz(140, 104)] },
  {
    cizgiler: [
      ...GEO,
      cizgi(70, 170, 106),
      ...sukulent(96, 106),
      ...sukulent(140, 106, 0.8),
      { d: `M74 112 q8 -3 16 0 q8 3 16 0 q8 -3 16 0 q8 3 16 0 q8 -3 16 0`, w: 1 },
      { d: `M210 60 L190 80 M206 56 L214 64`, w: 1.8 },
    ],
  },
];

// ---------- 5. Etçil Bitki Terraryumu (4) ----------
export const ETCIL_TERRARYUM_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      kase0(120, 80, 120, 46),
      carpi(40, 40, 8),
      { d: `M50 40 L70 40`, w: 1 },
      yayOk(120, 96, 16, 0, 5),
    ],
    noktalar: [
      [100, 92, 1.4],
      [134, 98, 1.4],
      [120, 104, 1.4],
      [146, 90, 1.4],
    ],
  },
  { cizgiler: [...KAV, cizgi(66, 174, 104), ...sinekkapan(110, 104), ...sinekkapan(146, 104), ...parmak(130, 102)] },
  {
    cizgiler: [
      ...KAV,
      cizgi(66, 174, 104),
      ...sinekkapan(110, 104),
      damla(150, 60),
      { d: kutu(190, 70, 26, 50), w: 1.5, dolgu: true },
      carpi(30, 60, 10),
      { d: `M20 30 L40 30 L40 40`, w: 2 },
    ],
  },
  {
    cizgiler: [
      ...KAV,
      cizgi(66, 174, 104),
      ...sinekkapan(110, 104),
      ...sinekkapan(146, 104),
      { d: daire(206, 30, 9), w: 1.3, dolgu: true },
      { d: `M194 42 L180 56 M206 44 L206 60 M218 42 L226 54`, w: 1 },
    ],
  },
];

// ---------- 6. Katmanlı Çöl Terraryumu (4) ----------
const KUM: Cizgi = {
  d: `M66 124 Q90 116 120 124 T174 120 M66 112 Q96 102 124 112 T174 108 M66 100 Q90 94 120 100 T174 96`,
  w: 1.1,
};
export const COL_TERRARYUM_ADIM: Cizim[] = [
  { cizgiler: [...KAV, KUM, huni(150, 30)] },
  {
    cizgiler: [...KAV, KUM, { d: `M96 98 Q120 84 148 98`, w: 1.2 }],
    taramalar: [{ id: "t", sinir: `M96 98 Q120 84 148 98 Z`, kutu: [96, 84, 52, 14], aralik: 3, sonra: 1 }],
  },
  { cizgiler: [...KAV, KUM, ...kaktus(118, 96, 1.2), { d: `M100 74 L140 60 L144 72 L104 86 Z`, w: 1.2, dolgu: true }] },
  { cizgiler: [...KAV, KUM, ...kaktus(118, 96, 1.2), damla(124, 74, 0.7), ...takvim(190, 40)] },
];
function takvim(x: number, y: number): Cizgi[] {
  return [
    { d: kutu(x, y, 30, 28), w: 1.4, dolgu: true },
    {
      d: `M${x} ${y + 8} L${x + 30} ${y + 8} M${x + 8} ${y - 3} L${x + 8} ${y + 3} M${x + 22} ${y - 3} L${x + 22} ${y + 3}`,
      w: 1.2,
    },
  ];
}

// ---------- 7. LED Işıklı Terraryum (4) ----------
export const LED_TERRARYUM_ADIM: Cizim[] = [
  {
    cizgiler: [...KAV_K, cizgi(66, 174, 118), cizgi(66, 174, 104), ...fide(110, 104, 1.6), yosun(130, 104, 30)],
    noktalar: KATMAN.cakil,
  },
  {
    cizgiler: [...KAV_K, ledTel(72, 168, 30), ...fide(110, 104, 1.6), { d: kutu(100, 4, 40, 14), w: 1.4, dolgu: true }],
    noktalar: ledNokta(72, 168, 30),
  },
  {
    cizgiler: [
      ...KAV_K,
      ledTel(72, 168, 30),
      { d: `M120 18 L120 28`, w: 1.2 },
      { d: kutu(100, 4, 40, 14), w: 1.4, dolgu: true },
      { d: daire(120, 22, 2.4), w: 1.4, dolgu: true },
      ok(170, 10, 126, 20),
    ],
  },
  {
    cizgiler: [
      ...KAV_K,
      ledTel(72, 168, 30),
      ...fide(110, 104, 1.6),
      { d: `M200 40 a12 12 0 1 0 10 -20 a10 10 0 1 1 -10 20 Z`, w: 1.3, dolgu: true },
      ...saat(30, 40, 10),
    ],
    noktalar: ledNokta(72, 168, 30),
  },
];

// ---------- 8. Duvara Asılı Yarım Küre (4) ----------
export const DUVAR_TERRARYUMU_ADIM: Cizim[] = [
  {
    cizgiler: [
      DUVAR,
      { d: daire(70, 50, 3) + " " + daire(160, 36, 3) + " " + daire(120, 100, 3), w: 1.4 },
      { d: `M70 50 L160 36 L120 100 Z`, w: 0.8, kesik: true },
      ...kalem(120, 100),
    ],
  },
  { cizgiler: [DUVAR, yarimKure(70, 54), yarimKure(160, 40), yarimKure(120, 104)] },
  {
    cizgiler: [
      DUVAR,
      yarimKure(70, 54),
      yarimKure(160, 40),
      yarimKure(120, 104),
      yosun(54, 70, 32),
      yosun(144, 56, 32),
      yosun(104, 120, 32),
    ],
  },
  {
    cizgiler: [
      DUVAR,
      yarimKure(70, 54),
      yarimKure(160, 40),
      yarimKure(120, 104),
      ...sukulent(70, 64),
      havaBitkisi(160, 52, 0.8),
      ...fide(120, 118),
    ],
  },
];

// ---------- 9. Wardian Kutusu (4) ----------
export const WARDIAN_KUTUSU_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...WARDIAN, damla(60, 76, 0.6), damla(184, 76, 0.6)] },
  { cizgiler: [ZEMIN, ...WARDIAN, { d: `M150 50 l4 -6 l26 -20 l4 4 l-26 20 Z`, w: 1.4, dolgu: true }] },
  {
    cizgiler: [
      ZEMIN,
      ...WARDIAN,
      { d: `M120 36 L190 80 L200 60 L136 26 Z`, w: 1.3, kesik: true },
      yayOk(120, 40, 20, 5.2, 5.9),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...WARDIAN,
      { d: kutu(54, 116, 132, 12), w: 1.4, dolgu: true },
      ...egrelti(90, 116, 0.8),
      ...sukulent(150, 116, 0.9),
    ],
  },
];

// ---------- 10. Akvaryumdan Terraryum (4) ----------
export const AKVARYUMDAN_TERRARYUM_ADIM: Cizim[] = [
  { cizgiler: [...tank(), ...bez0(120, 80), damla(200, 20), { d: kutu(196, 26, 16, 30), w: 1.4, dolgu: true }] },
  {
    cizgiler: [
      ...tank(),
      cizgi(32, 208, 116),
      { d: `M32 116 l6 -3 l6 3 l6 -3 l6 3`, w: 0.6 },
      cizgi(32, 208, 112, true),
    ],
    noktalar: cakil(32, 208, 116, 130),
  },
  {
    cizgiler: [
      ...tank(),
      { d: `M32 112 L208 112 L208 76 Q120 70 32 104 Z`, w: 1.2 },
      { d: `M150 82 Q160 60 176 50 M160 76 L184 70`, w: 1.8 },
    ],
    taramalar: [
      { id: "t", sinir: `M32 112 L208 112 L208 76 Q120 70 32 104 Z`, kutu: [32, 70, 176, 42], aralik: 5, sonra: 2 },
    ],
  },
  {
    cizgiler: [
      ...tank(),
      { d: `M32 112 L208 112 L208 76 Q120 70 32 104 Z`, w: 1.2 },
      ...egrelti(170, 80),
      ...fide(80, 100, 1.3),
      { d: `M30 26 L120 20 M120 26 L210 26`, w: 1.8 },
    ],
  },
];
function bez0(x: number, y: number): Cizgi[] {
  return bez(x, y);
}

// ---------- 11. Kokedama (5) ----------
export const KOKEDAMA_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...top(120, 84, 30), ...parmak(84, 70), ...parmak(156, 70), damla(200, 40)] },
  {
    cizgiler: [
      ZEMIN,
      {
        d: `M80 90 A30 30 0 0 0 110 120 L110 60 A30 30 0 0 0 80 90 Z M160 90 A30 30 0 0 1 130 120 L130 60 A30 30 0 0 1 160 90 Z`,
        w: 1.6,
        dolgu: true,
      },
      ...fide(120, 90, 1.6),
      { d: `M116 92 L110 104 M120 92 L120 106 M124 92 L130 104`, w: 0.8 },
    ],
  },
  { cizgiler: [ZEMIN, ...top(120, 90, 30), ...fide(120, 62, 1.6), yosun(90, 92, 60), yayOk(120, 90, 38, 0.2, 1.4)] },
  { cizgiler: [ZEMIN, ...top(120, 90, 30, true), ...fide(120, 62, 1.6), { d: `M120 60 L120 6`, w: 1, kesik: true }] },
  {
    cizgiler: [
      ZEMIN,
      kase0(120, 70, 120, 56),
      ...top(120, 90, 24),
      ...fide(120, 68, 1.4),
      { d: `M70 80 q10 -4 20 0 M150 80 q10 -4 20 0`, w: 1 },
      ...saat(206, 40, 10),
    ],
  },
];

// ---------- 12. Biyoaktif Terraryum (5) ----------
export const BIYOAKTIF_TERRARYUM_ADIM: Cizim[] = [
  {
    cizgiler: [...KAV, cizgi(66, 174, 118), cizgi(66, 174, 116, true), cizgi(66, 174, 96)],
    noktalar: KATMAN.cakil,
    taramalar: [toprakT("t", 66, 96, 108, 20, 3)],
  },
  {
    cizgiler: [
      ...KAV,
      cizgi(66, 174, 96),
      kuruYaprak(90, 94),
      kuruYaprak(130, 92),
      kuruYaprak(156, 95),
      { d: kutu(100, 90, 20, 5), w: 1.2, dolgu: true },
    ],
  },
  { cizgiler: [...KAV, cizgi(66, 174, 96), kuruYaprak(150, 95), ...egrelti(100, 96, 0.8), yosun(120, 96, 24)] },
  {
    cizgiler: [
      ...KAV,
      cizgi(66, 174, 96),
      kuruYaprak(150, 95),
      ...egrelti(100, 96, 0.8),
      izopod(130, 92),
      izopod(80, 94),
    ],
    noktalar: [
      [110, 90, 0.8],
      [116, 88, 0.8],
      [140, 86, 0.8],
    ],
  },
  {
    cizgiler: [
      ...KAV_K,
      cizgi(66, 174, 96),
      ...egrelti(100, 96, 0.8),
      yosun(120, 96, 24),
      ...takvim(190, 40),
      kuruYaprak(205, 90),
    ],
  },
];

// ---------- 13. Masa Üstü Zen Bahçesi (4) ----------
const ZEN_TAS = [tas(80, 80, 1.6), tas(150, 100, 1.2), tas(170, 70, 0.8)];
export const ZEN_BAHCESI_ADIM: Cizim[] = [
  {
    cizgiler: [ZEMIN, TEPSI, TEPSI_IC, { d: kutu(60, 60, 80, 6), w: 1.3, dolgu: true }, ok(150, 63, 190, 63)],
    noktalar: cakil(40, 200, 80, 120, 10).map(([x, y]) => [x, y, 0.6] as Nokta),
  },
  { cizgiler: [ZEMIN, TEPSI, TEPSI_IC, ...ZEN_TAS] },
  {
    cizgiler: [
      ZEMIN,
      TEPSI,
      TEPSI_IC,
      ...ZEN_TAS,
      { d: daire(80, 76, 22, 14) + " " + daire(80, 76, 30, 20), w: 0.8 },
      { d: `M40 112 L120 112 M40 118 L120 118 M180 52 L200 52 M180 58 L200 58`, w: 0.8 },
      ...tirmik(120, 120),
    ],
  },
  { cizgiler: [ZEMIN, TEPSI, TEPSI_IC, ...ZEN_TAS, ...sukulent(194, 120)] },
];

// ---------- 14. Minyatür Sahne (4) ----------
const SAHNE_TABAN = [...KAV, cizgi(66, 174, 104)];
const YOL: Cizgi = { d: `M70 120 Q100 110 110 104 M90 128 Q120 116 140 104`, w: 0.8 };
export const MINYATUR_SAHNE_ADIM: Cizim[] = [
  {
    cizgiler: [
      ...SAHNE_TABAN,
      cadir(130, 100),
      ...mini(100, 102),
      { d: daire(200, 30, 12), w: 1.2 },
      ...kalem(178, 62),
    ],
  },
  {
    cizgiler: [...SAHNE_TABAN, YOL],
    noktalar: [
      [80, 120, 1.4],
      [94, 116, 1.4],
      [108, 110, 1.4],
      [120, 108, 1.4],
    ],
  },
  {
    cizgiler: [
      ...SAHNE_TABAN,
      YOL,
      {
        d: `M120 104 Q140 94 160 104 M120 100 Q140 90 160 100 M126 98 L126 104 M140 94 L140 100 M154 98 L154 104`,
        w: 1.4,
      },
    ],
  },
  { cizgiler: [...SAHNE_TABAN, YOL, cadir(140, 100), ...mini(100, 104), ...cimbiz(102, 86)] },
];

// ---------- 15. Terraryum Bakımı (4) ----------
export const TERRARYUM_BAKIMI_ADIM: Cizim[] = [
  {
    cizgiler: [
      ...KAV_K,
      cizgi(66, 174, 104),
      ...egrelti(110, 104),
      { d: daire(60, 60, 18), w: 1.6 },
      { d: `M72 72 L90 90`, w: 3 },
      ...takvim(190, 30),
    ],
  },
  { cizgiler: [...KAV, cizgi(66, 174, 104), ...egrelti(110, 104, 1.4), ...makas(150, 50)] },
  {
    cizgiler: [
      ...KAV,
      cizgi(66, 174, 104),
      ...egrelti(110, 104),
      { d: daire(144, 100, 6, 3), w: 1, kesik: true },
      ...cimbiz(146, 98),
      ...saat(30, 40, 10),
    ],
  },
  { cizgiler: [...KAV, cizgi(66, 174, 104), ...egrelti(110, 104), ...bez(150, 60)] },
];

// ---------- 16. Yapraktan Sukulent Çoğaltma (5) ----------
const YAP = (x: number, y: number, a = 0): Cizgi => ({
  d: `M${x} ${y} Q${x + 8} ${y - 6 - a} ${x + 22} ${y - a} Q${x + 8} ${y + 6 - a} ${x} ${y} Z`,
  w: 1.3,
  dolgu: true,
});
export const SUKULENT_COGALTMA_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      ...saksi(100, 90, 70, 44),
      ...sukulent(100, 90, 2),
      YAP(130, 100, 4),
      yayOk(130, 100, 14, 4.4, 5.6),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(40, 100, 160, 10), w: 1.4, dolgu: true },
      YAP(60, 96),
      YAP(100, 96),
      YAP(140, 96),
      ...takvim(190, 30),
    ],
  },
  {
    cizgiler: [ZEMIN, { d: kutu(30, 100, 180, 34), w: 1.6, dolgu: true }, YAP(60, 98), YAP(110, 98), YAP(160, 98)],
    taramalar: [toprakT("t", 30, 100, 180, 34, 0)],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(30, 100, 180, 34), w: 1.6, dolgu: true },
      YAP(60, 98),
      YAP(110, 98),
      { d: `M60 98 l-4 8 M62 98 l0 9 M64 98 l3 8`, w: 0.8 },
      ...sprey(190, 90),
      ...sis(188, 42, 30),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(20, 110, 100, 24), w: 1.6, dolgu: true },
      { d: `M40 108 Q50 104 60 108`, w: 1 },
      ...sukulent(56, 108, 0.8),
      ok(110, 90, 140, 90),
      ...saksi(180, 80, 50, 50),
      ...sukulent(180, 88, 0.8),
    ],
  },
];

// ---------- 17. Hava Bitkisi Duvar Izgarası (4) ----------
export const HAVA_BITKISI_DUVARI_ADIM: Cizim[] = [
  {
    cizgiler: [
      DUVAR,
      ...izgara(60, 20, 120, 110),
      { d: daire(60, 20, 3) + " " + daire(180, 20, 3), w: 1.3, dolgu: true },
    ],
  },
  {
    cizgiler: [
      DUVAR,
      ...izgara(60, 20, 120, 110),
      havaBitkisi(100, 60),
      { d: `M96 62 L104 62 L104 70 L96 70`, w: 1.2 },
      havaBitkisi(150, 90),
    ],
  },
  {
    cizgiler: [
      DUVAR,
      ...izgara(60, 20, 120, 110),
      havaBitkisi(90, 50, 0.7),
      havaBitkisi(150, 46, 0.7),
      havaBitkisi(100, 110, 1.3),
      havaBitkisi(156, 108, 1.2),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      kase0(100, 80, 110, 50),
      havaBitkisi(100, 100),
      { d: `M60 92 q10 -4 20 0 q10 4 20 0 q10 -4 20 0`, w: 1 },
      ok(160, 90, 190, 90),
      { d: `M206 70 Q200 90 206 110`, w: 1 },
      havaBitkisi(214, 76, 0.7),
    ],
  },
];

// ---------- 18. Hediyelik Mini Kavanoz (4) ----------
const MINI = (x: number) => kavanoz(x, 134, 50, 70, false);
const MINI_K = (x: number) => kavanoz(x, 134, 50, 70, true);
export const TERARYUM_HEDIYE_ADIM: Cizim[] = [
  {
    cizgiler: [
      ...MINI(70),
      ...MINI(170),
      cizgi(47, 93, 124),
      cizgi(47, 93, 120),
      cizgi(147, 193, 124),
      cizgi(147, 193, 120),
    ],
    noktalar: [...cakil(46, 94, 124, 133, 6), ...cakil(146, 194, 124, 133, 6)],
    taramalar: [toprakT("a", 46, 110, 48, 10, 1), toprakT("b", 146, 110, 48, 10, 4)],
  },
  { cizgiler: [...MINI(120), cizgi(97, 143, 110), ...fide(114, 110, 1.2), yosun(124, 110, 16)] },
  { cizgiler: [...MINI_K(120), cizgi(97, 143, 110), ...fide(114, 110, 1.2), ...sprey(190, 100), ...sis(188, 52, 30)] },
  {
    cizgiler: [
      ...MINI_K(100),
      cizgi(77, 123, 110),
      ...fide(94, 110, 1.2),
      kurdele(100, 58),
      ...etiket(160, 80),
      kablo(120, 62, 160, 84, 10),
    ],
  },
];
