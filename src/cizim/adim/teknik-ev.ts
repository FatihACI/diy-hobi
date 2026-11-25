// Altın 40 / Teknik & Ev: adım sahneleri (viewBox 0 0 240 150).
// Adım sayısı ve sırası src/data/altin.ts içeriğiyle birebir eşleşir.
import { Cizgi, Cizim, daire, kutu, yuvarla as r } from "../arac";
import {
  bez,
  carpi,
  cimbiz,
  damla,
  direnc,
  firca,
  kabarcik,
  kablo,
  kart,
  kase,
  kalem,
  makas,
  ok,
  onay,
  parmak,
  saat,
  sprey,
  telefon,
  termometre,
  tornavida,
  vida,
  yayOk,
  ZEMIN,
  zimpara,
} from "./parca";

type Nokta = [number, number, number];

// ---------- Elektronik parçalar ----------
// Dizüstü bilgisayar: ekran sol üst (x,y)
const laptop = (x: number, y: number, kod = false): Cizgi[] => [
  { d: kutu(x, y, 60, 38), w: 1.7, dolgu: true },
  { d: kutu(x + 4, y + 4, 52, 30), w: 0.8 },
  { d: `M${x - 6} ${y + 38} L${x + 66} ${y + 38} L${x + 72} ${y + 46} L${x - 12} ${y + 46} Z`, w: 1.6, dolgu: true },
  ...(kod
    ? [
        {
          d: `M${x + 9} ${y + 11} L${x + 34} ${y + 11} M${x + 13} ${y + 17} L${x + 44} ${y + 17} M${x + 13} ${y + 23} L${x + 38} ${y + 23} M${x + 9} ${y + 29} L${x + 22} ${y + 29}`,
          w: 0.9,
        },
      ]
    : []),
];
// Arduino Uno: sol üst (x,y), USB yuvası solda
const UNO = (x: number, y: number): Cizgi[] => [
  ...kart(x, y, 54, 38, 10),
  { d: kutu(x - 4, y + 6, 8, 10), w: 1.2, dolgu: true },
];
// Breadboard (üstten): sol üst (x,y), boy 56 varsayılır
const bb = (x: number, y: number, en: number, boy = 56): Cizgi[] => [
  { d: kutu(x, y, en, boy), w: 1.6, dolgu: true },
  { d: `M${x + 4} ${y + 5} L${x + en - 4} ${y + 5} M${x + 4} ${y + boy - 5} L${x + en - 4} ${y + boy - 5}`, w: 0.6 },
  { d: `M${x + 4} ${y + boy / 2} L${x + en - 4} ${y + boy / 2}`, w: 1.4 },
];
// Breadboard delikleri (noktalar)
const bbDelik = (x: number, y: number, en: number, boy = 56): Nokta[] => {
  const n: Nokta[] = [];
  for (let xx = x + 8; xx < x + en - 4; xx += 8) {
    for (const yy of [y + 10, y + boy - 10]) n.push([xx, yy, 0.6]);
    for (let k = 0; k < 2; k++) {
      n.push([xx, y + 16 + k * 6, 0.6]);
      n.push([xx, y + boy / 2 + 6 + k * 6, 0.6]);
    }
  }
  return n;
};
// LED (üstten): merkez (x,y); yanik: ışın çizgileri
const led = (x: number, y: number, yanik = false): Cizgi[] => [
  { d: daire(x, y, 5), w: 1.4, dolgu: true },
  { d: `M${x - 5} ${y + 2} L${x - 5} ${y - 2}`, w: 1.4 },
  ...(yanik
    ? [
        {
          d: `M${x} ${y - 9} L${x} ${y - 14} M${x + 7} ${y - 7} L${x + 11} ${y - 11} M${x - 7} ${y - 7} L${x - 11} ${y - 11}`,
          w: 0.9,
        },
      ]
    : []),
];
// HC-SR04 (önden): sol üst (x,y); bacaklar altta
const sensor = (x: number, y: number): Cizgi[] => [
  { d: kutu(x, y, 48, 22), w: 1.6, dolgu: true },
  { d: daire(x + 12, y + 11, 8.5) + " " + daire(x + 36, y + 11, 8.5), w: 1.6, dolgu: true },
  { d: daire(x + 12, y + 11, 4) + " " + daire(x + 36, y + 11, 4), w: 0.7 },
  {
    d: `M${x + 18} ${y + 22} L${x + 18} ${y + 30} M${x + 22} ${y + 22} L${x + 22} ${y + 30} M${x + 26} ${y + 22} L${x + 26} ${y + 30} M${x + 30} ${y + 22} L${x + 30} ${y + 30}`,
    w: 1.1,
  },
];
// Buzzer (üstten): merkez (x,y)
const buzzer = (x: number, y: number): Cizgi[] => [
  { d: daire(x, y, 9), w: 1.6, dolgu: true },
  { d: daire(x, y, 2), w: 1 },
];
// Ses dalgası yayları: kaynak (x,y), sağa
const sesDalga = (x: number, y: number, n = 3, yon = 1): Cizgi => ({
  d: Array.from({ length: n }, (_, i) => {
    const k = 6 + i * 6;
    return `M${x + yon * k * 0.6} ${y - k} Q${x + yon * k * 1.2} ${y} ${x + yon * k * 0.6} ${y + k}`;
  }).join(" "),
  w: 0.9,
});
// USB fişi ve kablo: fiş ucu (x,y), kablo (x2,y2)'ye
const usb = (x: number, y: number, x2: number, y2: number): Cizgi[] => [
  { d: kutu(x - 10, y - 4, 10, 8), w: 1.3, dolgu: true },
  kablo(x - 10, y, x2, y2, 18),
];
// Basmalı buton: merkez (x,y)
const buton = (x: number, y: number): Cizgi[] => [
  { d: kutu(x - 7, y - 7, 14, 14), w: 1.4, dolgu: true },
  { d: daire(x, y, 4), w: 1.2, dolgu: true },
];

// ---------- 3D baskı parçaları ----------
// Yazıcı (önden, tabla kayan): sol üst (x,y), 96×78
const yazici = (x: number, y: number, kafaX = 40): Cizgi[] => [
  { d: kutu(x, y + 70, 96, 8), w: 1.7, dolgu: true },
  { d: kutu(x + 6, y, 6, 70) + " " + kutu(x + 84, y, 6, 70), w: 1.5, dolgu: true },
  { d: kutu(x + 6, y, 84, 6), w: 1.5, dolgu: true },
  { d: `M${x + 12} ${y + 30} L${x + 84} ${y + 30}`, w: 2.2 },
  { d: kutu(x + kafaX, y + 22, 16, 18), w: 1.6, dolgu: true },
  { d: `M${x + kafaX + 5} ${y + 40} L${x + kafaX + 8} ${y + 46} L${x + kafaX + 11} ${y + 40} Z`, w: 1.2, dolgu: true },
  { d: kutu(x + 16, y + 62, 64, 5), w: 1.5, dolgu: true },
];
// Filament makarası (yandan): merkez (cx,cy)
const makara = (cx: number, cy: number, R = 18): Cizgi[] => [
  { d: daire(cx, cy, R), w: 1.8, dolgu: true },
  { d: daire(cx, cy, R * 0.7), w: 0.6 },
  { d: daire(cx, cy, R * 0.3), w: 1.2, dolgu: true },
];
// Küp (izometrik): ön sol alt (x,y), kenar s
const kup = (x: number, y: number, s = 22): Cizgi[] => [
  { d: kutu(x, y - s, s, s), w: 1.6, dolgu: true },
  {
    d: `M${x} ${y - s} L${x + s * 0.4} ${y - s * 1.35} L${x + s * 1.4} ${y - s * 1.35} L${x + s} ${y - s} Z`,
    w: 1.4,
    dolgu: true,
  },
  {
    d: `M${x + s} ${y - s} L${x + s * 1.4} ${y - s * 1.35} L${x + s * 1.4} ${y - s * 0.35} L${x + s} ${y} Z`,
    w: 1.4,
    dolgu: true,
  },
];
// Spatula: bıçak ucu (x,y), sap sağa
const spatula = (x: number, y: number): Cizgi[] => [
  { d: `M${x} ${y - 4} L${x + 26} ${y - 6} L${x + 26} ${y + 6} L${x} ${y + 4} Z`, w: 1.4, dolgu: true },
  { d: kutu(x + 26, y - 4, 32, 8), w: 1.6, dolgu: true },
];
// Kumpas: ana cetvel sol üst (x,y)
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
// Göz (izle): merkez (x,y)
const goz = (x: number, y: number): Cizgi[] => [
  { d: `M${x - 14} ${y} Q${x} ${y - 11} ${x + 14} ${y} Q${x} ${y + 11} ${x - 14} ${y} Z`, w: 1.3, dolgu: true },
  { d: daire(x, y, 4), w: 1.2, dolgu: true },
];
// Telefon standı (yandan): taban sol alt (x,y)
const stand = (x: number, y: number, s = 1): string =>
  `M${x} ${y} L${r(x + 64 * s)} ${y} L${r(x + 64 * s)} ${r(y - 6 * s)} L${r(x + 26 * s)} ${r(y - 6 * s)} L${r(x + 46 * s)} ${r(y - 52 * s)} L${r(x + 39 * s)} ${r(y - 54 * s)} L${r(x + 16 * s)} ${r(y - 6 * s)} L${r(x + 8 * s)} ${r(y - 6 * s)} L${r(x + 8 * s)} ${r(y - 14 * s)} L${x} ${r(y - 14 * s)} Z`;

// ---------- Bisiklet parçaları ----------
// Tekerlek (yandan): merkez (cx,cy), yarıçap R
const teker = (cx: number, cy: number, R = 44): Cizgi[] => [
  { d: daire(cx, cy, R), w: 3 },
  { d: daire(cx, cy, R - 6), w: 1.1 },
  {
    d: Array.from({ length: 12 }, (_, i) => {
      const t = (i / 12) * Math.PI * 2;
      return `M${r(cx + Math.cos(t) * 4)} ${r(cy + Math.sin(t) * 4)} L${r(cx + Math.cos(t + 0.3) * (R - 6))} ${r(cy + Math.sin(t + 0.3) * (R - 6))}`;
    }).join(" "),
    w: 0.5,
  },
  { d: daire(cx, cy, 5), w: 1.5, dolgu: true },
];
// Lastik levyesi: kanca ucu (x,y), sap sağ üste
const levye = (x: number, y: number): Cizgi => ({
  d: `M${x} ${y} Q${x - 3} ${y - 6} ${x + 3} ${y - 8} L${x + 34} ${y - 28} L${x + 38} ${y - 22} L${x + 7} ${y - 2} Z`,
  w: 1.4,
  dolgu: true,
});
// Zincir (yatay): x1→x2, orta y
const zincir = (x1: number, x2: number, y: number): Cizgi[] => {
  let d = "",
    p = "";
  for (let x = x1; x < x2; x += 10) {
    d += `M${x + 2} ${y - 4} L${x + 10} ${y - 4} Q${x + 13} ${y} ${x + 10} ${y + 4} L${x + 2} ${y + 4} Q${x - 1} ${y} ${x + 2} ${y - 4} Z `;
    p += daire(x + 2, y, 1.4) + " ";
  }
  return [
    { d: d.trim(), w: 1.1, dolgu: true },
    { d: p.trim(), w: 0.8 },
  ];
};
// Dişli: merkez (cx,cy), yarıçap R, n diş
const disli = (cx: number, cy: number, R: number, n: number): Cizgi[] => {
  let d = "";
  for (let i = 0; i < n * 2; i++) {
    const t = (i / (n * 2)) * Math.PI * 2;
    const rr = i % 2 ? R : R - 4;
    d += `${i ? "L" : "M"}${r(cx + Math.cos(t) * rr)} ${r(cy + Math.sin(t) * rr)} `;
  }
  return [
    { d: d + "Z", w: 1.4, dolgu: true },
    { d: daire(cx, cy, R * 0.35), w: 1.1 },
  ];
};
// El pompası: hortum ucu (x,y), gövde sağda dik
const pompa = (x: number, y: number): Cizgi[] => [
  { d: kutu(x + 30, y - 60, 12, 56), w: 1.6, dolgu: true },
  { d: `M${x + 36} ${y - 60} L${x + 36} ${y - 74} M${x + 26} ${y - 74} L${x + 46} ${y - 74}`, w: 2.4 },
  { d: kutu(x + 24, y - 4, 24, 4), w: 1.4, dolgu: true },
  kablo(x, y, x + 30, y - 14, -14, 1.6),
];

// ---------- Tesisat ve duvar parçaları ----------
// Lavabo bataryası (yandan): taban orta (x,y)
const batarya = (x: number, y: number, kolAcik = false): Cizgi[] => [
  { d: kutu(x - 8, y - 34, 16, 34), w: 1.8, dolgu: true },
  {
    d: `M${x + 8} ${y - 26} Q${x + 34} ${y - 30} ${x + 36} ${y - 14} L${x + 30} ${y - 14} Q${x + 28} ${y - 22} ${x + 8} ${y - 20}`,
    w: 1.6,
    dolgu: true,
  },
  { d: kolAcik ? `M${x - 4} ${y - 34} L${x + 18} ${y - 50}` : `M${x - 4} ${y - 34} L${x + 22} ${y - 40}`, w: 4 },
  { d: daire(x, y - 34, 4), w: 1.2, dolgu: true },
];
// Lavabo (kesit): üst kenar orta (cx,y)
const lavabo = (cx: number, y: number, en = 120): Cizgi[] => [
  {
    d: `M${cx - en / 2} ${y} L${cx + en / 2} ${y} M${cx - en / 2 + 8} ${y} Q${cx - en / 2 + 12} ${y + 30} ${cx} ${y + 30} Q${cx + en / 2 - 12} ${y + 30} ${cx + en / 2 - 8} ${y}`,
    w: 1.7,
  },
  { d: `M${cx - 4} ${y + 30} L${cx - 4} ${y + 52} M${cx + 4} ${y + 30} L${cx + 4} ${y + 52}`, w: 1.4 },
];
// Ara vana: merkez (x,y), kol yukarı/yana
const vana = (x: number, y: number, acik = false): Cizgi[] => [
  { d: `M${x - 18} ${y} L${x + 18} ${y}`, w: 3.5 },
  { d: kutu(x - 6, y - 6, 12, 12), w: 1.5, dolgu: true },
  { d: acik ? `M${x} ${y - 6} L${x + 14} ${y - 6}` : `M${x} ${y - 6} L${x} ${y - 20}`, w: 3 },
];
// İngiliz anahtarı: ağız (x,y), sap sağa
const anahtar = (x: number, y: number): Cizgi[] => [
  {
    d: `M${x - 10} ${y - 12} L${x + 4} ${y - 12} L${x + 4} ${y - 4} L${x - 4} ${y - 4} L${x - 4} ${y + 4} L${x + 4} ${y + 4} L${x + 4} ${y + 12} L${x - 10} ${y + 12} Q${x - 18} ${y} ${x - 10} ${y - 12} Z`,
    w: 1.5,
    dolgu: true,
  },
  { d: kutu(x + 4, y - 4, 56, 8), w: 1.6, dolgu: true },
];
// Musluk mekanizması (yandan): altıgen somun orta (x,y), dişli gövde aşağı
const mekanizma = (x: number, y: number, conta = true): Cizgi[] => [
  { d: `M${x} ${y - 14} L${x} ${y - 24} M${x - 3} ${y - 14} L${x + 3} ${y - 14}`, w: 2 },
  { d: kutu(x - 10, y - 8, 20, 16), w: 1.6, dolgu: true },
  { d: `M${x - 4} ${y - 8} L${x - 4} ${y + 8} M${x + 4} ${y - 8} L${x + 4} ${y + 8}`, w: 0.6 },
  { d: kutu(x - 7, y + 8, 14, 18), w: 1.4, dolgu: true },
  {
    d: `M${x - 7} ${y + 12} L${x + 7} ${y + 14} M${x - 7} ${y + 17} L${x + 7} ${y + 19} M${x - 7} ${y + 22} L${x + 7} ${y + 24}`,
    w: 0.6,
  },
  ...(conta ? [{ d: kutu(x - 6, y + 26, 12, 4), w: 1.3, dolgu: true }] : []),
];
// Conta (üstten): merkez (x,y)
const conta = (x: number, y: number, rr = 6): Cizgi => ({
  d: daire(x, y, rr) + " " + daire(x, y, rr * 0.45),
  w: 1.3,
  dolgu: true,
});
// Duvar parçası: sol üst (x,y)
const duvar = (x: number, y: number, en: number, boy: number): Cizgi => ({ d: kutu(x, y, en, boy), w: 1.4 });
// Macun spatulası: ağız alt orta (x,y), sap yukarı sağa
const macunSpatula = (x: number, y: number): Cizgi[] => [
  { d: `M${x - 16} ${y} L${x + 16} ${y} L${x + 8} ${y - 18} L${x - 8} ${y - 18} Z`, w: 1.5, dolgu: true },
  { d: `M${x - 3} ${y - 18} L${x + 14} ${y - 46} L${x + 20} ${y - 42} L${x + 3} ${y - 18}`, w: 1.6, dolgu: true },
];
// Boya rulosu: silindir sol üst (x,y)
const boyaRulo = (x: number, y: number): Cizgi[] => [
  { d: kutu(x, y, 16, 40), w: 1.7, dolgu: true },
  { d: `M${x + 16} ${y + 20} L${x + 26} ${y + 20} L${x + 26} ${y + 50} L${x + 44} ${y + 70}`, w: 1.8 },
  { d: `M${x + 40} ${y + 66} L${x + 54} ${y + 82} L${x + 60} ${y + 76} L${x + 46} ${y + 60}`, w: 1.6, dolgu: true },
];
// Toz maskesi: merkez (x,y)
const maske = (x: number, y: number): Cizgi[] => [
  {
    d: `M${x - 14} ${y - 6} Q${x} ${y - 16} ${x + 14} ${y - 6} Q${x + 12} ${y + 10} ${x} ${y + 12} Q${x - 12} ${y + 10} ${x - 14} ${y - 6} Z`,
    w: 1.5,
    dolgu: true,
  },
  { d: `M${x - 14} ${y - 4} L${x - 26} ${y - 8} M${x + 14} ${y - 4} L${x + 26} ${y - 8}`, w: 1 },
];
// Sigorta (otomat): sol üst (x,y), mandal aşağı = kapalı
const sigorta = (x: number, y: number): Cizgi[] => [
  { d: kutu(x, y, 18, 30), w: 1.5, dolgu: true },
  { d: kutu(x + 6, y + 14, 6, 10), w: 1.3, dolgu: true },
];

// ---------- Arduino trafik lambası ----------
const BB_X = 16,
  BB_Y = 70,
  BB_EN = 130;
const BB = bb(BB_X, BB_Y, BB_EN);
const DELIK = bbDelik(BB_X, BB_Y, BB_EN);
const LEDLER = (yanan = -1) => [...led(48, 86, yanan === 0), ...led(72, 86, yanan === 1), ...led(96, 86, yanan === 2)];
export const TRAFIK_LAMBASI_ADIM: Cizim[] = [
  // 1) Arduino IDE'yi kur ve kartı dene
  {
    cizgiler: [
      ZEMIN,
      ...laptop(20, 60, true),
      ...usb(150, 96, 92, 100),
      ...UNO(154, 84),
      ...led(196, 100, true),
      onay(208, 54, 1),
    ],
  },
  // 2) Breadboard'ı tanı ve USB'yi çıkar
  {
    cizgiler: [
      ZEMIN,
      ...BB,
      { d: `M${BB_X + 4} ${BB_Y + 10} L${BB_X + BB_EN - 4} ${BB_Y + 10}`, w: 2.2 },
      { d: kutu(54, BB_Y + 12, 8, 16), w: 1.2, kesik: true },
      ...UNO(176, 60),
      { d: kutu(156, 60 + 7, 10, 8), w: 1.3, dolgu: true },
      kablo(156, 71, 150, 118, 14),
      ok(168, 50, 148, 50),
      carpi(158, 92, 5),
    ],
    noktalar: DELIK,
  },
  // 3) LED'leri yerleştir
  {
    cizgiler: [ZEMIN, ...BB, ...LEDLER(), { d: "M45 76 L51 76 M48 73 L48 79", w: 0.9 }, ok(150, 40, 104, 74)],
    noktalar: DELIK,
  },
  // 4) Dirençleri ve kabloları bağla
  {
    cizgiler: [
      ZEMIN,
      ...BB,
      ...LEDLER(),
      direnc(48, 108, 14),
      direnc(72, 108, 14),
      direnc(96, 108, 14),
      { d: "M48 92 L48 108 M72 92 L72 108 M96 92 L96 108", w: 1 },
      ...UNO(172, 64),
      kablo(62, 108, 180, 60, -40, 1.2),
      kablo(86, 108, 190, 60, -34, 1.2),
      kablo(110, 108, 200, 60, -28, 1.2),
    ],
    noktalar: DELIK,
  },
  // 5) GND hattını bağla
  {
    cizgiler: [
      ZEMIN,
      ...BB,
      ...LEDLER(),
      { d: `M43 86 L43 ${BB_Y + 51} M67 86 L67 ${BB_Y + 51} M91 86 L91 ${BB_Y + 51}`, w: 1.2 },
      { d: `M${BB_X + 4} ${BB_Y + 51} L${BB_X + BB_EN - 4} ${BB_Y + 51}`, w: 2.2 },
      ...UNO(172, 64),
      kablo(140, BB_Y + 51, 222, 106, 20, 1.6),
      { d: "M216 106 L228 106 M218 110 L226 110 M220 114 L224 114", w: 1 },
    ],
    noktalar: DELIK,
  },
  // 6) Kodu yükle
  {
    cizgiler: [
      ZEMIN,
      ...laptop(14, 60, true),
      ok(44, 54, 44, 40),
      ...usb(132, 96, 86, 100),
      ...UNO(136, 84),
      ...led(206, 72, true),
      ...led(206, 92),
      ...led(206, 112),
    ],
  },
  // 7) Geliştir
  {
    cizgiler: [
      ZEMIN,
      ...BB,
      ...LEDLER(0),
      ...buton(126, 112),
      kablo(126, 105, 180, 60, -30, 1.2),
      ...UNO(172, 64),
      ...saat(200, 30, 12),
      yayOk(200, 30, 18, -0.6, 1.4),
    ],
    noktalar: DELIK,
  },
];

// ---------- Ultrasonik park sensörü ----------
export const PARK_SENSORU_ADIM: Cizim[] = [
  // 1) Sensörü yerleştir
  {
    cizgiler: [
      ZEMIN,
      ...BB,
      ...sensor(40, 50),
      ok(64, 32, 64, 46),
      { d: kutu(176, 70, 10, 8), w: 1.3, dolgu: true },
      kablo(186, 74, 226, 112, 12),
      carpi(176, 96, 5),
    ],
    noktalar: DELIK,
  },
  // 2) Sensörü bağla
  {
    cizgiler: [
      ZEMIN,
      ...BB,
      ...sensor(40, 50),
      ...UNO(172, 64),
      kablo(58, 86, 178, 60, -40, 1.1),
      kablo(62, 86, 190, 60, -36, 1.1),
      kablo(66, 86, 202, 60, -32, 1.1),
      kablo(70, 86, 214, 60, -28, 1.1),
    ],
    noktalar: DELIK,
  },
  // 3) Buzzer'ı bağla
  {
    cizgiler: [
      ZEMIN,
      ...BB,
      ...sensor(26, 50),
      ...buzzer(104, 110),
      ...UNO(172, 64),
      kablo(100, 110, 196, 60, -50, 1.2),
      kablo(108, 110, 208, 60, -44, 1.2),
      sesDalga(114, 110, 2),
    ],
    noktalar: DELIK,
  },
  // 4) Kodu yükle
  {
    cizgiler: [
      ZEMIN,
      ...laptop(14, 60, true),
      ok(44, 54, 44, 40),
      ...usb(132, 96, 86, 100),
      ...UNO(136, 84),
      onay(208, 54, 1),
    ],
  },
  // 5) Test et
  {
    cizgiler: [
      ZEMIN,
      ...sensor(20, 76),
      sesDalga(70, 87, 3),
      { d: kutu(150, 50, 14, 80), w: 1.8, dolgu: true },
      ok(190, 90, 172, 90),
      ...buzzer(40, 124),
      sesDalga(52, 124, 2),
    ],
  },
  // 6) Kutula ve yerleştir
  {
    cizgiler: [
      ZEMIN,
      { d: "M14 20 L14 134", w: 2.4 },
      { d: kutu(14, 70, 40, 30), w: 1.7, dolgu: true },
      { d: kutu(50, 74, 6, 22), w: 1.2 },
      { d: daire(53, 79, 4) + " " + daire(53, 91, 4), w: 1.3, dolgu: true },
      sesDalga(60, 85, 2),
      { d: "M236 92 L150 92 Q132 92 130 104 L128 118 Q128 124 136 124 L236 124", w: 1.8, dolgu: true },
      { d: kutu(24, 30, 14, 18), w: 1.4, dolgu: true },
      kablo(31, 48, 30, 70, 8),
    ],
  },
];

// ---------- İlk 3D baskı ----------
const Y_X = 30,
  Y_Y = 40;
export const ILK_BASKI_ADIM: Cizim[] = [
  // 1) Kur ve kontrol et
  {
    cizgiler: [
      ZEMIN,
      ...yazici(Y_X, Y_Y),
      ...parmak(84, 70),
      { d: "M44 72 L118 72", w: 0.8, kesik: true },
      ...tornavida(150, 112),
      onay(196, 50, 1),
    ],
  },
  // 2) Filamenti yükle
  {
    cizgiler: [
      ZEMIN,
      ...yazici(Y_X, Y_Y),
      ...makara(170, 54),
      kablo(170, 54, 78, 62, -10, 1),
      ...termometre(206, 64, 46),
      { d: "M134 112 L160 112 M160 112 L166 104", w: 1.6 },
      ...makas(174, 122),
    ],
  },
  // 3) Tablayı temizle
  {
    cizgiler: [
      ZEMIN,
      { d: "M30 112 L170 112 L190 92 L50 92 Z", w: 1.8, dolgu: true },
      ...bez(108, 98),
      ...sprey(196, 112),
      ...parmak(52, 70),
      carpi(52, 58, 6),
    ],
  },
  // 4) Seviyele
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(40, 96, 140, 8), w: 1.8, dolgu: true },
      { d: "M86 92 L132 90 L134 96 L88 98 Z", w: 1, dolgu: true },
      { d: kutu(100, 60, 22, 20), w: 1.6, dolgu: true },
      { d: "M106 80 L111 90 L116 80 Z", w: 1.2, dolgu: true },
      { d: daire(56, 112, 7, 3) + " M56 104 L56 110", w: 1.5, dolgu: true },
      yayOk(56, 112, 14, 0.3, 2.8),
      ...termometre(206, 50, 46),
    ],
  },
  // 5) Dilimle
  {
    cizgiler: [
      ZEMIN,
      ...laptop(20, 50),
      ...kup(40, 82, 16),
      { d: "M40 76 L56 76 M40 72 L56 72 M40 68 L56 68", w: 0.5 },
      { d: kutu(110, 108, 10, 14), w: 1.3, dolgu: true },
      ok(124, 114, 140, 114),
      ...yazici(136, 48),
    ],
  },
  // 6) İlk katmanı izle
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(30, 104, 150, 8), w: 1.8, dolgu: true },
      { d: "M60 104 L150 104 M60 101 L150 101 M60 98 L120 98", w: 1.4 },
      { d: kutu(112, 70, 22, 20), w: 1.6, dolgu: true },
      { d: "M118 90 L123 96 L128 90 Z", w: 1.2, dolgu: true },
      ...goz(200, 60),
      { d: "M200 74 L176 92", w: 0.8, kesik: true },
    ],
  },
  // 7) Bitir ve ölç
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(20, 116, 110, 8), w: 1.7, dolgu: true },
      ...kup(60, 116, 22),
      ...spatula(96, 110),
      ok(156, 110, 176, 110),
      ...kumpas(110, 42),
    ],
  },
];

// ---------- 3D baskı telefon standı ----------
export const TELEFON_STANDI_ADIM: Cizim[] = [
  // 1) Model bul
  {
    cizgiler: [
      ZEMIN,
      ...laptop(40, 50),
      { d: stand(66, 80, 0.4), w: 1.2, dolgu: true },
      ok(160, 60, 160, 94),
      { d: "M150 100 L170 100", w: 1.6 },
    ],
  },
  // 2) Dilimleyicide yerleştir
  {
    cizgiler: [
      ZEMIN,
      { d: "M20 118 L180 118 L210 92 L50 92 Z", w: 1.6, dolgu: true },
      { d: stand(70, 112, 0.9), w: 1.5, dolgu: true },
      yayOk(100, 70, 26, 3.6, 5.6),
      onay(198, 50, 1),
    ],
  },
  // 3) Dilimle
  {
    taramalar: [{ id: "ts3", sinir: stand(110, 106, 1.1), kutu: [108, 44, 74, 64], aralik: 3, ters: true, sonra: 4 }],
    cizgiler: [ZEMIN, ...laptop(16, 50), { d: stand(110, 106, 1.1), w: 1.4, dolgu: true }],
  },
  // 4) Bas ve ilk katmanı izle
  {
    cizgiler: [
      ZEMIN,
      ...yazici(Y_X, Y_Y, 30),
      { d: "M50 102 L104 102 L104 98 L50 98 Z", w: 1.2, dolgu: true },
      ...goz(186, 56),
      ...saat(196, 96, 12),
    ],
  },
  // 5) Çıkar
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(20, 116, 140, 8), w: 1.7, dolgu: true },
      { d: stand(50, 116), w: 1.5, dolgu: true },
      ...spatula(120, 110),
      ok(186, 110, 206, 110),
      ...termometre(206, 40, 40),
    ],
  },
  // 6) Bitir ve dene
  {
    cizgiler: [
      ZEMIN,
      { d: stand(30, 128, 1.2), w: 1.6, dolgu: true },
      ...telefon(64, 60, 30, 56),
      { d: daire(36, 130, 3, 2) + " " + daire(100, 130, 3, 2), w: 1.2, dolgu: true },
      ...zimpara(150, 96, 40, 14),
      onay(196, 50, 1),
    ],
  },
];

// ---------- Bisiklet iç lastiği değiştirme ----------
export const IC_LASTIK_ADIM: Cizim[] = [
  // 1) Tekerleği sök
  {
    cizgiler: [
      ZEMIN,
      ...teker(90, 82),
      { d: "M90 82 L118 66", w: 2.6 },
      yayOk(90, 82, 20, -1.6, -0.4),
      ok(150, 82, 190, 82),
    ],
  },
  // 2) Lastiği çıkar
  {
    cizgiler: [ZEMIN, ...teker(100, 82), levye(70, 46), levye(94, 40), { d: "M100 126 L100 134", w: 2.4 }],
  },
  // 3) Deliği bul
  {
    cizgiler: [
      ZEMIN,
      kase(110, 92, 150, 40),
      { d: "M40 100 Q110 96 180 100", w: 0.9 },
      { d: daire(110, 94, 50, 14), w: 3 },
      kabarcik(118, 94),
      ...kalem(160, 60),
    ],
    noktalar: [
      [122, 88, 1.5],
      [126, 82, 1.2],
    ],
  },
  // 4) Dış lastiği kontrol et
  {
    cizgiler: [
      ZEMIN,
      { d: "M20 110 Q120 40 220 110", w: 4 },
      { d: "M30 116 Q120 54 210 116", w: 1.2 },
      ...bez(110, 70),
      { d: "M156 70 L162 62 L166 70 Z", w: 1.1, dolgu: true },
      ...cimbiz(170, 70),
    ],
  },
  // 5) Yamala
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(14, 96, 210, 20), w: 2.2, dolgu: true },
      ...zimpara(30, 70, 34, 12),
      { d: daire(110, 106, 14, 6), w: 1.4, dolgu: true },
      ...parmak(110, 100),
      ...saat(172, 54, 13),
      { d: kutu(186, 74, 30, 12) + " M216 80 L224 80", w: 1.4, dolgu: true },
    ],
  },
  // 6) İç lastiği tak
  {
    cizgiler: [
      ZEMIN,
      ...teker(100, 78),
      { d: "M100 122 L100 134", w: 2.4 },
      ok(100, 146, 100, 128),
      ...parmak(70, 44),
      ...parmak(130, 44),
      levye(170, 120),
      carpi(196, 96, 7),
    ],
  },
  // 7) Şişir, tekerleği tak ve frenleri dene
  {
    cizgiler: [
      ZEMIN,
      ...teker(60, 80),
      { d: "M60 124 L60 132", w: 2.4 },
      ...pompa(64, 132),
      yayOk(60, 80, 54, 3.6, 5.2),
      onay(196, 50, 1.2),
    ],
  },
];

// ---------- Bisiklet zincir bakımı ----------
export const ZINCIR_BAKIM_ADIM: Cizim[] = [
  // 1) Aşınmayı ölç
  {
    cizgiler: [
      ZEMIN,
      ...zincir(20, 220, 100),
      { d: "M70 92 L70 84 L170 84 L170 92 M70 84 L70 104 M170 84 L170 104", w: 2 },
      { d: kutu(108, 66, 24, 18), w: 1.5, dolgu: true },
      onay(196, 46, 1),
    ],
  },
  // 2) Hazırlan
  {
    cizgiler: [
      ZEMIN,
      { d: "M16 128 L224 128 L216 120 L24 120 Z", w: 1, kesik: true },
      ...teker(150, 76, 42),
      { d: daire(150, 76, 16), w: 1.6, dolgu: true },
      ...bez(150, 76),
      ...disli(150, 76, 10, 10),
      ...zincir(40, 140, 66),
    ],
  },
  // 3) Temizle
  {
    cizgiler: [
      ZEMIN,
      ...disli(160, 90, 30, 18),
      ...zincir(30, 150, 62),
      ...zincir(30, 150, 118),
      ...sprey(40, 104),
      ...firca(94, 58),
      yayOk(160, 90, 42, 0.4, -0.8),
    ],
  },
  // 4) Durula ve kurula
  {
    cizgiler: [
      ZEMIN,
      ...zincir(20, 220, 96),
      ...bez(120, 96),
      damla(70, 76, 0.8),
      damla(160, 76, 0.8),
      ...saat(200, 40, 13),
    ],
  },
  // 5) Yağla
  {
    cizgiler: [
      ZEMIN,
      ...disli(170, 80, 30, 18),
      ...zincir(30, 170, 110),
      { d: kutu(80, 30, 16, 32), w: 1.6, dolgu: true },
      { d: "M82 62 L88 80 L94 62 Z", w: 1.3, dolgu: true },
      damla(88, 92, 0.7),
      yayOk(170, 80, 42, -0.6, -2.4),
    ],
  },
  // 6) Fazlasını sil ve dene
  {
    cizgiler: [
      ZEMIN,
      ...zincir(20, 220, 96),
      ...bez(90, 96),
      ok(110, 76, 150, 76),
      ...saat(36, 40, 12),
      onay(196, 46, 1),
    ],
  },
];

// ---------- Musluk contası değiştirme ----------
export const MUSLUK_CONTA_ADIM: Cizim[] = [
  // 1) Suyu kapat ve hazırlan
  {
    cizgiler: [
      ZEMIN,
      ...lavabo(90, 60),
      ...batarya(124, 60),
      ...bez(90, 82),
      { d: "M86 112 L86 122 L150 122", w: 3.5 },
      ...vana(150, 122),
      yayOk(150, 114, 14, -0.2, -1.6),
    ],
  },
  // 2) Kolu sök
  {
    cizgiler: [
      ZEMIN,
      ...batarya(80, 120),
      { d: kutu(70, 66, 20, 8), w: 1.4, dolgu: true },
      ...tornavida(84, 64),
      vida(80, 44, 3.5),
      ok(80, 38, 80, 22),
    ],
  },
  // 3) Mekanizmayı çıkar
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(84, 96, 32, 38), w: 1.8, dolgu: true },
      ...mekanizma(100, 82, false),
      { d: daire(100, 82, 15, 9), w: 1, kesik: true },
      ...anahtar(100, 82),
      yayOk(100, 82, 30, -0.6, -2.4),
    ],
  },
  // 4) Contayı değiştir
  {
    cizgiler: [
      ZEMIN,
      ...mekanizma(60, 70),
      conta(60, 116, 7),
      carpi(60, 116, 9),
      { d: kutu(130, 90, 90, 34), w: 1.6, dolgu: true },
      conta(146, 107, 5),
      conta(166, 107, 6),
      conta(188, 107, 7),
      conta(208, 107, 4),
      ok(178, 84, 82, 96),
    ],
  },
  // 5) Geri tak
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(84, 96, 32, 38), w: 1.8, dolgu: true },
      ...mekanizma(100, 66),
      ok(132, 60, 132, 90),
      ...anahtar(170, 50),
      yayOk(100, 66, 26, -1.2, -0.4),
    ],
  },
  // 6) Test et
  {
    cizgiler: [
      ZEMIN,
      ...lavabo(90, 70),
      ...batarya(124, 70),
      damla(156, 72, 0.8),
      carpi(156, 90, 6),
      ...vana(194, 118, true),
      yayOk(194, 110, 14, -1.6, -0.2),
      ...saat(200, 40, 12),
    ],
  },
];

// ---------- Duvar deliği tamiri ----------
const DELIK_K = daire(120, 70, 6);
const DELIK_B = "M98 52 L136 48 L144 74 L128 92 L102 88 L94 70 Z";
export const DUVAR_TAMIR_ADIM: Cizim[] = [
  // 1) Temizle ve hazırlan
  {
    cizgiler: [
      ZEMIN,
      duvar(30, 14, 180, 112),
      { d: DELIK_K, w: 1.6, dolgu: true },
      { d: "M132 60 L150 52 L152 58 L134 66 Z", w: 1.2, dolgu: true },
      ok(140, 74, 160, 84),
      ...sigorta(176, 30),
      { d: "M16 132 L224 132 L214 124 L26 124 Z", w: 1, kesik: true },
    ],
  },
  // 2) Küçük delikleri doldur
  {
    cizgiler: [
      ZEMIN,
      duvar(30, 14, 180, 112),
      { d: DELIK_K, w: 1, dolgu: true },
      { d: daire(120, 70, 9, 7), w: 0.8 },
      ...macunSpatula(150, 82),
      ok(150, 100, 184, 100),
    ],
  },
  // 3) Büyük deliklere fileli bant
  {
    taramalar: [{ id: "d3", sinir: kutu(86, 40, 68, 62), kutu: [86, 40, 68, 62], aralik: 5, sonra: 2 }],
    cizgiler: [
      ZEMIN,
      duvar(30, 14, 180, 112),
      { d: DELIK_B, w: 1.6, dolgu: true },
      { d: kutu(86, 40, 68, 62), w: 1.2 },
      ...macunSpatula(180, 112),
    ],
  },
  // 4) Kurut ve zımparala
  {
    cizgiler: [
      ZEMIN,
      duvar(30, 14, 180, 112),
      { d: daire(120, 70, 30, 24), w: 1, dolgu: true },
      ...zimpara(100, 62, 40, 16),
      yayOk(120, 70, 36, 0.5, 2.6),
      ...saat(56, 36, 12),
      ...maske(186, 40),
    ],
  },
  // 5) İkinci kat ve son zımpara
  {
    cizgiler: [
      ZEMIN,
      duvar(30, 14, 180, 112),
      { d: daire(120, 70, 42, 32), w: 0.8, kesik: true },
      { d: daire(120, 70, 30, 24), w: 1 },
      ...macunSpatula(150, 100),
      ...zimpara(40, 96, 30, 12),
    ],
  },
  // 6) Astar sür
  {
    taramalar: [{ id: "d6", sinir: daire(120, 70, 42, 32), kutu: [76, 36, 88, 68], aralik: 4, sonra: 1 }],
    cizgiler: [
      ZEMIN,
      duvar(30, 14, 180, 112),
      { d: daire(120, 70, 42, 32), w: 1 },
      ...firca(152, 86),
      ...saat(188, 36, 12),
    ],
  },
  // 7) Boya
  {
    cizgiler: [
      ZEMIN,
      duvar(30, 14, 180, 112),
      { d: daire(110, 70, 42, 32), w: 0.6, kesik: true },
      { d: "M60 30 L60 110 M76 26 L76 114 M92 24 L92 116", w: 0.6 },
      ...boyaRulo(132, 30),
      onay(196, 30, 1),
    ],
  },
];
