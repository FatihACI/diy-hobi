// Ev Tamiri kategorisi (Altın 40 dışı 18 proje): adım sahneleri (viewBox 0 0 240 150).
// Adım sayısı ve sırası src/data/ek/ev-tamir.ts içeriğiyle birebir eşleşir.
import { Cizgi, Cizim, daire, kutu, yuvarla as r } from "../arac";
import {
  alev,
  bez,
  bicak,
  carpi,
  damla,
  firca,
  kabarcik,
  kalem,
  kase,
  makas,
  matkap,
  ok,
  onay,
  parmak,
  saat,
  silikon,
  sise,
  sprey,
  tornavida,
  vida,
  yagSisesi,
  yayOk,
  ZEMIN,
  zimpara,
} from "./parca";

// ---------- Ortak parçalar ----------
const terazi = (x: number, y: number, en = 70): Cizgi[] => [
  { d: kutu(x, y, en, 10), w: 1.5, dolgu: true },
  { d: kutu(x + en / 2 - 9, y + 2, 18, 6), w: 1 },
  { d: daire(x + en / 2, y + 5, 2), w: 0.8, dolgu: true },
];
// Çekiç: baş merkez (x,y), sap sağ alta
const cekic = (x: number, y: number): Cizgi[] => [
  { d: kutu(x - 14, y - 6, 28, 12), w: 1.6, dolgu: true },
  { d: `M${x + 4} ${y + 6} L${x + 34} ${y + 40} L${x + 40} ${y + 35} L${x + 10} ${y + 2}`, w: 1.5, dolgu: true },
];
// Menteşe (açık, önden): merkez (x,y), s ölçek
const mentese = (x: number, y: number, s = 1): Cizgi[] => [
  {
    d: kutu(x - 14 * s, y - 8 * s, 12 * s, 16 * s) + " " + kutu(x + 2 * s, y - 8 * s, 12 * s, 16 * s),
    w: 1.4,
    dolgu: true,
  },
  { d: kutu(x - 2 * s, y - 10 * s, 4 * s, 20 * s), w: 1.4, dolgu: true },
  {
    d: [
      daire(x - 8 * s, y - 3 * s, 1.4 * s),
      daire(x - 8 * s, y + 3 * s, 1.4 * s),
      daire(x + 8 * s, y - 3 * s, 1.4 * s),
      daire(x + 8 * s, y + 3 * s, 1.4 * s),
    ].join(" "),
    w: 0.9,
  },
];
// Dedektör: sol üst (x,y)
const dedektor = (x: number, y: number): Cizgi[] => [
  {
    d: `M${x} ${y + 10} Q${x} ${y} ${x + 12} ${y} L${x + 30} ${y} Q${x + 42} ${y} ${x + 42} ${y + 10} L${x + 36} ${y + 50} L${x + 6} ${y + 50} Z`,
    w: 1.6,
    dolgu: true,
  },
  { d: kutu(x + 10, y + 8, 22, 12), w: 1 },
  { d: daire(x + 21, y + 32, 5), w: 1 },
];
const kova = (cx: number, y: number, en = 50, boy = 44): Cizgi[] => [
  {
    d: `M${cx - en / 2} ${y - boy} L${cx - en / 2 + 6} ${y} L${cx + en / 2 - 6} ${y} L${cx + en / 2} ${y - boy} Z`,
    w: 1.7,
    dolgu: true,
  },
  { d: `M${cx - en / 2} ${y - boy} Q${cx} ${y - boy - 24} ${cx + en / 2} ${y - boy}`, w: 1.1 },
  { d: `M${cx - en / 2 + 3} ${y - boy + 10} L${cx + en / 2 - 3} ${y - boy + 10}`, w: 0.6, kesik: true },
];
// Macun spatulası: ağız alt orta (x,y), sap yukarı sağa
const spatula = (x: number, y: number): Cizgi[] => [
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
// Ara vana: merkez (x,y)
const vana = (x: number, y: number, acik = false): Cizgi[] => [
  { d: `M${x - 18} ${y} L${x + 18} ${y}`, w: 3.5 },
  { d: kutu(x - 6, y - 6, 12, 12), w: 1.5, dolgu: true },
  { d: acik ? `M${x} ${y - 6} L${x + 14} ${y - 6}` : `M${x} ${y - 6} L${x} ${y - 20}`, w: 3 },
];
// Conta (üstten): merkez (x,y)
const conta = (x: number, y: number, rr = 6): Cizgi => ({
  d: daire(x, y, rr) + " " + daire(x, y, rr * 0.45),
  w: 1.3,
  dolgu: true,
});
// Alyan: kısa uç (x,y) aşağıda, uzun kol sağa
const alyan = (x: number, y: number): Cizgi => ({
  d: `M${x} ${y} L${x} ${y - 12} Q${x} ${y - 16} ${x + 4} ${y - 16} L${x + 42} ${y - 16}`,
  w: 3,
});
// Sünger: sol üst (x,y)
const sunger = (x: number, y: number): Cizgi => ({
  d:
    kutu(x, y, 30, 18) +
    " " +
    [daire(x + 7, y + 6, 1.5), daire(x + 18, y + 5, 1.2), daire(x + 24, y + 12, 1.6), daire(x + 11, y + 13, 1.2)].join(
      " ",
    ),
  w: 1.4,
  dolgu: true,
});
// Manometre: merkez (cx,cy), yarıçap R, ibre açısı
const manometre = (cx: number, cy: number, R: number, aci = -Math.PI / 2): Cizgi[] => [
  { d: daire(cx, cy, R), w: 1.8, dolgu: true },
  {
    d: Array.from({ length: 9 }, (_, i) => {
      const t = Math.PI * 0.75 + (i / 8) * Math.PI * 1.5;
      return `M${r(cx + Math.cos(t) * (R - 3))} ${r(cy + Math.sin(t) * (R - 3))} L${r(cx + Math.cos(t) * (R - 7))} ${r(cy + Math.sin(t) * (R - 7))}`;
    }).join(" "),
    w: 0.8,
  },
  { d: `M${cx} ${cy} L${r(cx + Math.cos(aci) * (R - 6))} ${r(cy + Math.sin(aci) * (R - 6))}`, w: 1.8 },
  { d: daire(cx, cy, 2), w: 1, dolgu: true },
];
// Fayans ızgarası: sol üst (x,y), sütun, satır, kare boyu s
const fayans = (x: number, y: number, sut: number, sat: number, s = 22): Cizgi => {
  let d = "";
  for (let i = 0; i < sut; i++) for (let j = 0; j < sat; j++) d += kutu(x + i * s, y + j * s, s - 3, s - 3) + " ";
  return { d: d.trim(), w: 1 };
};
// Banyo köşesi: duvar fayansı + küvet kenarı (derz y=90)
const BANYO: Cizgi[] = [fayans(20, 2, 9, 4, 22), { d: kutu(12, 90, 216, 40), w: 1.8, dolgu: true }];
// Kapı paneli: sol üst (x,y)
const kapi = (x: number, y: number, en = 80, boy = 114): Cizgi[] => [
  { d: kutu(x, y, en, boy), w: 1.8, dolgu: true },
  { d: kutu(x + 10, y + 10, en - 20, boy * 0.4) + " " + kutu(x + 10, y + boy * 0.52, en - 20, boy * 0.4), w: 0.8 },
  { d: `M${x + en - 12} ${y + boy * 0.5} L${x + en - 26} ${y + boy * 0.5}`, w: 3 },
];
// Dübel: uç (x,y), sağa doğru
const dubel = (x: number, y: number): Cizgi => ({
  d: `M${x} ${y - 2} L${x + 24} ${y - 4} L${x + 26} ${y - 6} L${x + 26} ${y + 6} L${x + 24} ${y + 4} L${x} ${y + 2} Z M${x + 4} ${y - 2} L${x + 4} ${y + 2} M${x + 10} ${y - 3} L${x + 10} ${y + 3} M${x + 16} ${y - 3} L${x + 16} ${y + 3}`,
  w: 1.2,
  dolgu: true,
});
// L konsol: duvar yüzü x, üst y
const konsol = (x: number, y: number, en = 40): Cizgi => ({
  d: `M${x} ${y} L${x + en} ${y} L${x + en} ${y + 6} L${x + 6} ${y + 6} L${x + 6} ${y + en} L${x} ${y + en} Z M${x + 6} ${y + en - 8} L${x + en - 8} ${y + 6}`,
  w: 1.5,
  dolgu: true,
});
// Pencere (önden): sol üst (x,y)
const pencere = (x: number, y: number, en = 90, boy = 80, acik = false): Cizgi[] => [
  { d: kutu(x, y, en, boy), w: 2, dolgu: true },
  { d: kutu(x + 6, y + 6, en - 12, boy - 12), w: 1.2 },
  acik
    ? {
        d: `M${x + 6} ${y + 6} L${x + en * 0.7} ${y + 16} L${x + en * 0.7} ${y + boy - 16} L${x + 6} ${y + boy - 6}`,
        w: 1.4,
        dolgu: true,
      }
    : { d: `M${x + en - 14} ${y + boy / 2} L${x + en - 14} ${y + boy / 2 + 14}`, w: 2.4 },
];
// Lavabo (kesit): üst kenar orta (cx,y)
const lavabo = (cx: number, y: number, en = 120): Cizgi[] => [
  {
    d: `M${cx - en / 2} ${y} L${cx + en / 2} ${y} M${cx - en / 2 + 8} ${y} Q${cx - en / 2 + 12} ${y + 30} ${cx} ${y + 30} Q${cx + en / 2 - 12} ${y + 30} ${cx + en / 2 - 8} ${y}`,
    w: 1.7,
  },
  { d: `M${cx - 4} ${y + 30} L${cx - 4} ${y + 50} M${cx + 4} ${y + 30} L${cx + 4} ${y + 50}`, w: 1.4 },
  { d: daire(cx + en / 2 - 22, y + 8, 2.5), w: 1 },
];
// Sifon (U): giriş üst (x,y)
const sifon = (x: number, y: number): Cizgi[] => [
  {
    d: `M${x} ${y} L${x} ${y + 16} Q${x} ${y + 30} ${x + 14} ${y + 30} Q${x + 28} ${y + 30} ${x + 28} ${y + 16} L${x + 28} ${y + 6} L${x + 110} ${y + 6}`,
    w: 5,
  },
  { d: kutu(x - 6, y - 2, 12, 6) + " " + kutu(x + 22, y + 4, 12, 6), w: 1.3, dolgu: true },
];
// Vantuz: kauçuk ağız orta (x,y)
const vantuz = (x: number, y: number): Cizgi[] => [
  {
    d: `M${x - 16} ${y} Q${x - 14} ${y - 16} ${x} ${y - 16} Q${x + 14} ${y - 16} ${x + 16} ${y} Z`,
    w: 1.6,
    dolgu: true,
  },
  { d: `M${x} ${y - 16} L${x} ${y - 52}`, w: 3 },
];
// Rezervuar (kesit): su seviyesi suY
const rezervuar = (suY: number): Cizgi[] => [
  { d: kutu(60, 20, 120, 90), w: 1.8, dolgu: true },
  { d: `M62 ${suY} L178 ${suY}`, w: 0.9, kesik: true },
  { d: kutu(80, 40, 8, 64), w: 1.3, dolgu: true },
  { d: kutu(152, 34, 8, 72), w: 1.3, dolgu: true },
  { d: kutu(146, suY - 6, 20, 12), w: 1.3, dolgu: true },
  { d: kutu(100, 100, 30, 8), w: 1.4, dolgu: true },
  { d: `M115 100 L115 60 M108 60 L122 60`, w: 1.2 },
  { d: "M70 110 L70 118 Q120 140 170 118 L170 110", w: 1.6 },
];
// Dolap menteşesi (üstten): kap merkezi (x,y)
const dolapMentese = (x: number, y: number): Cizgi[] => [
  { d: daire(x, y, 14), w: 1.6, dolgu: true },
  { d: kutu(x + 10, y - 8, 70, 16), w: 1.6, dolgu: true },
  { d: kutu(x + 80, y - 14, 34, 28), w: 1.6, dolgu: true },
  vida(x + 46, y, 3.5),
  vida(x + 66, y, 3.5),
  vida(x + 90, y - 7, 3),
  vida(x + 104, y + 7, 3),
];
// Kapı kolu (önden): rozet merkez (x,y)
const kapiKolu = (x: number, y: number, asagi = false): Cizgi[] => [
  { d: kutu(x - 9, y - 26, 18, 52), w: 1.6, dolgu: true },
  { d: asagi ? `M${x} ${y} L${x + 48} ${y + 28}` : `M${x} ${y} L${x + 56} ${y}`, w: 6 },
  { d: daire(x, y, 6), w: 1.4, dolgu: true },
  { d: daire(x, y + 18, 2.4), w: 1 },
];
// Parke sırası
const PARKE: Cizgi = {
  d: [
    kutu(14, 70, 100, 18),
    kutu(114, 70, 112, 18),
    kutu(14, 88, 60, 18),
    kutu(74, 88, 152, 18),
    kutu(14, 106, 130, 18),
    kutu(144, 106, 82, 18),
  ].join(" "),
  w: 1.2,
};
const CIZIK: Cizgi = { d: "M90 94 Q120 98 150 95", w: 1.6 };
// Duş başlığı: boru üst (x,y), başlık aşağıda
const dusBasligi = (x: number, y: number): Cizgi[] => [
  { d: `M${x} ${y} L${x} ${y + 30} L${x + 20} ${y + 40}`, w: 3 },
  { d: `M${x + 6} ${y + 40} L${x + 46} ${y + 40} L${x + 42} ${y + 52} L${x + 10} ${y + 52} Z`, w: 1.6, dolgu: true },
];
const DELIK_D = (x: number, y: number) =>
  [daire(x + 16, y + 56, 1.3), daire(x + 26, y + 56, 1.3), daire(x + 36, y + 56, 1.3)].join(" ");
// Poşet: ağız sol üst (x,y)
const poset = (x: number, y: number, en = 60, boy = 60): Cizgi => ({
  d: `M${x} ${y} L${x + en} ${y} Q${x + en + 6} ${y + boy * 0.6} ${x + en - 4} ${y + boy} L${x + 4} ${y + boy} Q${x - 6} ${y + boy * 0.6} ${x} ${y} Z`,
  w: 1.3,
});
// TV (arkadan): sol üst (x,y)
const tvArka = (x: number, y: number, en = 120, boy = 70): Cizgi[] => [
  { d: kutu(x, y, en, boy), w: 2, dolgu: true },
  { d: kutu(x + en / 2 - 24, y + boy / 2 - 18, 48, 36), w: 0.8, kesik: true },
  {
    d: [
      daire(x + en / 2 - 20, y + boy / 2 - 14, 2.4),
      daire(x + en / 2 + 20, y + boy / 2 - 14, 2.4),
      daire(x + en / 2 - 20, y + boy / 2 + 14, 2.4),
      daire(x + en / 2 + 20, y + boy / 2 + 14, 2.4),
    ].join(" "),
    w: 1.2,
  },
];
// Korniş braketi: duvar noktası (x,y)
const braket = (x: number, y: number): Cizgi => ({
  d: `M${x - 4} ${y - 6} L${x + 4} ${y - 6} L${x + 4} ${y + 6} L${x - 4} ${y + 6} Z M${x} ${y} L${x} ${y + 10} Q${x} ${y + 14} ${x + 6} ${y + 14}`,
  w: 1.4,
  dolgu: true,
});
// Çekül: asma noktası (x,y), boy
const cekul = (x: number, y: number, boy: number): Cizgi[] => [
  { d: `M${x} ${y} L${x} ${y + boy}`, w: 0.9 },
  { d: `M${x - 5} ${y + boy} L${x + 5} ${y + boy} L${x} ${y + boy + 12} Z`, w: 1.3, dolgu: true },
];
// Desenli duvar kağıdı şeridi: sol üst (x,y)
const seritDesen = (x: number, y: number, en = 50, boy = 110, kayma = 0): Cizgi[] => [
  { d: kutu(x, y, en, boy), w: 1.5, dolgu: true },
  {
    d: Array.from({ length: 5 }, (_, i) => {
      const cy = y + 12 + kayma + i * 22;
      return `M${x + en / 2} ${cy - 6} L${x + en / 2 + 6} ${cy} L${x + en / 2} ${cy + 6} L${x + en / 2 - 6} ${cy} Z`;
    }).join(" "),
    w: 1,
  },
];
// Radyatör: sol üst (x,y), dilim sayısı n
const radyator = (x: number, y: number, n = 8): Cizgi[] => [
  { d: Array.from({ length: n }, (_, i) => kutu(x + i * 14, y, 11, 70)).join(" "), w: 1.4, dolgu: true },
  { d: `M${x - 4} ${y + 8} L${x + n * 14} ${y + 8} M${x - 4} ${y + 62} L${x + n * 14} ${y + 62}`, w: 2.2 },
  { d: kutu(x + n * 14, y + 2, 8, 10), w: 1.3, dolgu: true },
];
// Küf lekeleri (noktalar)
const kuf = (x: number, y: number, n = 1): [number, number, number][] =>
  Array.from(
    { length: 10 * n },
    (_, i) => [x + ((i * 37) % 60), y + ((i * 23) % 40), 1 + (i % 3) * 0.6] as [number, number, number],
  );
// Aspiratör: merkez (x,y)
const aspirator = (x: number, y: number): Cizgi[] => [
  { d: kutu(x - 22, y - 22, 44, 44), w: 1.6, dolgu: true },
  { d: daire(x, y, 16), w: 1.1 },
  {
    d: `M${x} ${y} Q${x + 10} ${y - 12} ${x} ${y - 14} M${x} ${y} Q${x + 12} ${y + 10} ${x + 14} ${y} M${x} ${y} Q${x - 10} ${y + 12} ${x} ${y + 14} M${x} ${y} Q${x - 12} ${y - 10} ${x - 14} ${y}`,
    w: 1,
  },
];
const sesDalga = (x: number, y: number): Cizgi => ({
  d: `M${x} ${y - 6} Q${x + 4} ${y} ${x} ${y + 6} M${x + 6} ${y - 10} Q${x + 12} ${y} ${x + 6} ${y + 10} M${x + 12} ${y - 14} Q${x + 20} ${y} ${x + 12} ${y + 14}`,
  w: 1,
});

// ---------- 1) Silikon yenileme ----------
const BANT_UST: Cizgi = { d: kutu(20, 80, 200, 6), w: 1.1, dolgu: true };
const BANT_ALT: Cizgi = { d: kutu(20, 95, 200, 6), w: 1.1, dolgu: true };
export const SILIKON_YENILEME_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      ...BANYO,
      { d: "M20 90 L110 90", w: 4 },
      { d: "M110 90 Q126 86 132 66", w: 4 },
      ...bicak(150, 90),
    ],
  },
  {
    cizgiler: [ZEMIN, ...BANYO, ...bez(90, 92), ...sise(176, 84, 22, 50), ...saat(210, 24, 10)],
  },
  {
    cizgiler: [ZEMIN, ...BANYO, BANT_UST, BANT_ALT, { d: "M226 86 L226 95 M222 86 L230 86 M222 95 L230 95", w: 0.9 }],
  },
  {
    cizgiler: [
      ZEMIN,
      ...BANYO,
      BANT_UST,
      BANT_ALT,
      { d: "M20 90 L98 90", w: 4.5 },
      ...silikon(100, 88),
      ok(40, 112, 80, 112),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...BANYO,
      BANT_UST,
      BANT_ALT,
      { d: "M20 90 L220 90", w: 4.5 },
      ...parmak(130, 88),
      kase(196, 104, 40, 20),
      kabarcik(196, 100),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...BANYO,
      { d: "M20 90 L220 90", w: 4.5 },
      { d: "M120 80 Q150 70 170 46", w: 3 },
      { d: "M120 101 Q150 112 170 128", w: 3 },
      ok(176, 40, 190, 26),
      ...saat(206, 116, 10),
    ],
  },
];

// ---------- 2) Kapı gıcırtısı ----------
export const KAPI_GICIRTISI_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      ...kapi(60, 18),
      { d: "M142 134 L176 134 L176 124 Z", w: 1.6, dolgu: true },
      ok(200, 129, 180, 129),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(86, 24, 30, 76) + " " + kutu(126, 24, 30, 76), w: 1.4, dolgu: true },
      { d: kutu(116, 22, 10, 80), w: 1.6, dolgu: true },
      { d: kutu(118, 8, 6, 14), w: 1.4, dolgu: true },
      { d: "M121 104 L121 118 M117 104 L125 104", w: 1.6 },
      ok(146, 106, 146, 14),
      ...cekic(184, 74),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(40, 70, 110, 8), w: 1.6, dolgu: true },
      { d: kutu(30, 66, 10, 16), w: 1.6, dolgu: true },
      ...bez(90, 104),
      ...yagSisesi(190, 70, 18, 40),
      damla(180, 76),
      damla(176, 90),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: "M20 110 L100 110 M180 110 L220 110", w: 3 },
      { d: "M100 110 L156 62", w: 4 },
      { d: "M180 110 A80 80 0 0 0 156 62", w: 0.9, kesik: true },
      yayOk(100, 110, 50, -0.2, -0.8),
      ...bez(60, 76),
      onay(196, 36, 1.2),
    ],
  },
];

// ---------- 3) Kapı ayarı ----------
export const KAPI_AYARI_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(60, 12, 100, 122), w: 2 },
      { d: "M64 16 L156 20 L156 134 L64 130 Z", w: 1.8, dolgu: true },
      { d: "M140 130 L160 132", w: 1.4, kesik: true },
      { d: kutu(186, 104, 22, 8), w: 1.3, dolgu: true },
      ok(182, 112, 164, 128),
    ],
  },
  {
    cizgiler: [ZEMIN, ...mentese(100, 74, 3), ...tornavida(76, 65), yayOk(76, 65, 12, -2.6, -0.4)],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: "M30 50 L60 50 M40 46 L40 54", w: 1.6 },
      { d: kutu(24, 44, 6, 12), w: 1.4, dolgu: true },
      {
        d: "M30 90 L130 90 M42 86 L46 94 M54 86 L58 94 M66 86 L70 94 M78 86 L82 94 M90 86 L94 94 M102 86 L106 94 M114 86 L118 94",
        w: 1.4,
      },
      { d: kutu(24, 84, 6, 12), w: 1.4, dolgu: true },
      carpi(80, 50, 6),
      onay(140, 84, 1),
      ok(196, 110, 196, 40),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...mentese(90, 74, 3),
      alyan(150, 80),
      ok(150, 28, 150, 10),
      ok(170, 10, 170, 28),
      ok(176, 100, 206, 100),
      ok(206, 112, 176, 112),
    ],
  },
];

// ---------- 4) Lavabo sifonu ----------
const LAV = lavabo(110, 30, 150);
export const LAVABO_SIFON_TEMIZLIGI_ADIM: Cizim[] = [
  {
    cizgiler: [ZEMIN, ...LAV, ...sifon(110, 80), ...vantuz(110, 58), ...bez(163, 40)],
  },
  { cizgiler: [ZEMIN, ...LAV, ...sifon(110, 80), ...kova(124, 134, 54, 26)] },
  {
    cizgiler: [
      ZEMIN,
      ...LAV,
      { d: "M110 96 L110 110 Q110 124 124 124 Q138 124 138 110 L138 100", w: 5 },
      { d: "M138 86 L220 86", w: 5 },
      yayOk(110, 84, 12, 0.2, 2.6),
      yayOk(138, 92, 12, 0.2, 2.6),
      ok(160, 104, 160, 122),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: "M50 70 L50 96 Q50 120 76 120 Q102 120 102 96 L102 70", w: 6 },
      { d: "M50 70 Q42 56 60 50 Q70 46 64 34 M52 74 Q34 66 40 48", w: 0.9 },
      conta(150, 60, 10),
      conta(186, 60, 10),
      ...firca(130, 120),
    ],
  },
  {
    cizgiler: [ZEMIN, ...LAV, ...sifon(110, 80), conta(110, 80, 4), carpi(196, 120, 6), onay(196, 30, 1.2)],
  },
];

// ---------- 5) Rezervuar iç takımı ----------
export const REZERVUAR_IC_TAKIM_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      ...rezervuar(48),
      ...yagSisesi(200, 120, 16, 30),
      damla(116, 26),
      ok(115, 112, 115, 126),
      ...saat(206, 40, 12),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...rezervuar(36),
      { d: "M84 30 L84 40", w: 0.9, kesik: true },
      ok(156, 18, 156, 4),
      ok(196, 30, 196, 56),
    ],
  },
  { cizgiler: [ZEMIN, ...rezervuar(100), ...vana(210, 70), sunger(190, 108)] },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(40, 30, 10, 80), w: 1.6, dolgu: true },
      { d: kutu(32, 70, 26, 14), w: 1.4, dolgu: true },
      carpi(45, 18, 7),
      { d: kutu(170, 30, 10, 80), w: 1.6, dolgu: true },
      { d: kutu(162, 50, 26, 14), w: 1.4, dolgu: true },
      onay(168, 18, 1),
      ok(80, 70, 140, 70),
    ],
  },
  { cizgiler: [ZEMIN, ...rezervuar(48), ...vana(210, 70, true), onay(200, 30, 1.2)] },
];

// ---------- 6) Dolap menteşe ayarı ----------
export const DOLAP_MENTESE_AYARI_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(36, 16, 80, 110), w: 1.8, dolgu: true },
      { d: "M124 22 L204 16 L204 126 L124 130 Z", w: 1.8, dolgu: true },
      { d: daire(104, 70, 3) + " " + daire(136, 72, 3), w: 1.2 },
      { d: "M116 20 L124 22 M116 126 L124 130", w: 0.8, kesik: true },
    ],
  },
  { cizgiler: [ZEMIN, ...dolapMentese(50, 80), ...tornavida(96, 80), ok(30, 116, 70, 116), ok(70, 116, 30, 116)] },
  { cizgiler: [ZEMIN, ...dolapMentese(50, 80), ...tornavida(116, 80), ok(30, 50, 30, 30), ok(30, 100, 30, 120)] },
  {
    cizgiler: [
      ZEMIN,
      ...dolapMentese(50, 80),
      ...tornavida(140, 73),
      yayOk(154, 87, 10, -2.6, -0.4),
      ok(210, 90, 210, 66),
      ok(220, 66, 220, 90),
    ],
  },
];

// ---------- 7) Raf montajı ----------
export const RAF_MONTAJI_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(20, 20, 80, 100), w: 1.6, dolgu: true },
      {
        d: "M20 45 L100 45 M20 70 L100 70 M20 95 L100 95 M60 20 L60 45 M40 45 L40 70 M80 45 L80 70 M60 70 L60 95 M40 95 L40 120 M80 95 L80 120",
        w: 0.8,
      },
      dubel(60, 58),
      { d: kutu(140, 20, 12, 100), w: 1.6, dolgu: true },
      { d: "M152 70 L170 70 M160 62 L170 70 L160 78", w: 1.6 },
      { d: "M140 70 L120 70", w: 1.6 },
      { d: kutu(112, 64, 8, 12), w: 1.3, dolgu: true },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(20, 14, 200, 120), w: 1.4 },
      { d: "M70 14 L70 134 M170 14 L170 134", w: 1.2, kesik: true },
      ...dedektor(100, 50),
      carpi(70, 30, 6),
      carpi(170, 30, 6),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(20, 14, 200, 120), w: 1.4 },
      ...terazi(60, 60, 110),
      { d: "M66 46 L74 54 M74 46 L66 54 M156 46 L164 54 M164 46 L156 54", w: 1.4 },
      ...kalem(164, 52),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: "M30 14 L30 134", w: 3 },
      ...matkap(170, 72),
      dubel(36, 90),
      konsol(70, 60, 50),
      vida(80, 80, 3.5),
      ok(150, 100, 104, 100),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: "M20 14 L20 134", w: 3 },
      { d: kutu(20, 60, 190, 8), w: 1.6, dolgu: true },
      konsol(20, 68, 40),
      { d: kutu(40, 36, 30, 24) + " " + kutu(76, 44, 24, 16), w: 1.4, dolgu: true },
      ok(140, 20, 140, 54),
      onay(176, 36, 1.2),
    ],
  },
];

// ---------- 8) Duvar boyama ----------
export const DUVAR_BOYAMA_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(30, 80, 90, 54), w: 1.6, dolgu: true },
      { d: "M24 134 L24 78 Q75 60 126 78 L126 134", w: 1.2, kesik: true },
      { d: kutu(170, 50, 26, 34), w: 1.5, dolgu: true },
      { d: daire(183, 62, 2.5) + " " + daire(183, 72, 2.5), w: 1 },
      ok(200, 67, 224, 67),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(20, 14, 200, 120), w: 1.4 },
      { d: "M60 30 L70 46 L62 58 L76 78 L68 96", w: 1.4 },
      ...spatula(110, 90),
      ...zimpara(160, 100, 36, 14),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(20, 14, 200, 120), w: 1.4 },
      { d: kutu(50, 30, 30, 40) + " " + kutu(150, 60, 24, 30), w: 0.9, kesik: true },
      ...boyaRulo(96, 30),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: "M20 30 L220 30 M120 30 L120 134", w: 1.8 },
      { d: kutu(20, 31, 200, 10) + " " + kutu(110, 41, 10, 93), w: 0.6, dolgu: true },
      ...firca(126, 44),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(20, 14, 200, 120), w: 1.4 },
      { d: "M40 110 L60 40 L80 110 L100 40 L120 110", w: 1, kesik: true },
      ...boyaRulo(130, 30),
      ...saat(206, 34, 12),
    ],
  },
];

// ---------- 9) Fayans derzi ----------
export const FAYANS_DERZ_YENILEME_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, fayans(20, 14, 5, 5, 24), ...bicak(70, 63), ...maske(196, 40)] },
  {
    cizgiler: [
      ZEMIN,
      ...kova(90, 130, 70, 50),
      { d: "M100 98 L136 30", w: 2.4 },
      { d: kutu(160, 70, 40, 60), w: 1.6, dolgu: true },
      { d: "M160 82 L200 82", w: 0.8 },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      fayans(20, 14, 5, 5, 24),
      { d: kutu(110, 60, 60, 24), w: 1.8, dolgu: true },
      { d: "M130 60 L136 46 L144 46 L150 60", w: 1.6 },
      ok(160, 100, 200, 120),
      ok(200, 50, 180, 70),
    ],
  },
  { cizgiler: [ZEMIN, fayans(20, 14, 5, 5, 24), sunger(60, 60), ...saat(180, 50, 16)] },
  {
    cizgiler: [
      ZEMIN,
      fayans(20, 14, 5, 5, 24),
      ...saat(160, 40, 16),
      damla(196, 70),
      carpi(196, 74, 9),
      ...firca(60, 90),
    ],
  },
];

// ---------- 10) Pencere fitili ----------
export const PENCERE_FITILI_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      ...pencere(40, 30),
      { d: kutu(126, 60, 40, 12), w: 1.2, dolgu: true },
      ok(170, 66, 200, 66),
      carpi(196, 40, 6),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(20, 40, 200, 30), w: 1.8, dolgu: true },
      { d: "M30 70 L110 70 Q130 72 140 96", w: 2.4 },
      ...bez(170, 110),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(20, 40, 200, 30), w: 1.8, dolgu: true },
      { d: "M30 70 L150 70", w: 3 },
      { d: daire(176, 100, 18) + " " + daire(176, 100, 8), w: 1.6, dolgu: true },
      ...makas(30, 90),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...pencere(40, 30),
      { d: kutu(126, 60, 40, 12), w: 1.2, dolgu: true },
      ok(170, 66, 196, 66),
      { d: "M200 58 L200 74", w: 2 },
      onay(196, 30, 1.2),
    ],
  },
];

// ---------- 11) Kapı kolu ----------
export const KAPI_KOLU_DEGISIMI_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(90, 50, 40, 40), w: 2, dolgu: true },
      ok(90, 104, 130, 104),
      ok(130, 104, 90, 104),
      ok(144, 50, 144, 90),
      ok(144, 90, 144, 50),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...kapiKolu(70, 76),
      { d: kutu(150, 50, 20, 52), w: 1.4, dolgu: true },
      ok(110, 40, 146, 40),
      ...tornavida(62, 100),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(108, 20, 24, 110), w: 1.8, dolgu: true },
      { d: "M70 70 L170 70", w: 2.4 },
      { d: kutu(96, 54, 12, 32) + " " + kutu(132, 54, 12, 32), w: 1.4, dolgu: true },
      { d: "M96 70 L50 70 M144 70 L190 70", w: 6 },
      vida(102, 60, 2),
      vida(138, 80, 2),
    ],
  },
  { cizgiler: [ZEMIN, ...kapiKolu(80, 76, true), yayOk(80, 76, 40, 0.6, 0.05), onay(190, 40, 1.2)] },
];

// ---------- 12) Laminat çizik tamiri ----------
export const LAMINAT_CIZIK_TAMIRI_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      PARKE,
      CIZIK,
      { d: kutu(40, 20, 14, 36) + " " + kutu(70, 20, 14, 36) + " " + kutu(100, 20, 14, 36), w: 1.4, dolgu: true },
      onay(68, 14, 1),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      PARKE,
      { d: "M90 94 Q120 98 150 95", w: 3 },
      { d: kutu(150, 50, 12, 36), w: 1.4, dolgu: true },
      alev(184, 76, 1.4),
    ],
  },
  { cizgiler: [ZEMIN, PARKE, { d: "M90 94 Q120 98 150 95", w: 3 }, ...spatula(120, 94), ok(150, 60, 190, 60)] },
  {
    cizgiler: [
      ZEMIN,
      PARKE,
      { d: "M30 79 Q60 76 90 80 M90 97 Q120 99 150 96 M150 115 Q180 112 210 116", w: 0.8 },
      ...kalem(120, 96),
      ...bez(60, 50),
    ],
  },
];

// ---------- 13) Duş başlığı kireç ----------
export const DUS_BASLIGI_KIREC_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, poset(50, 60, 70, 70), ...sise(170, 120, 24, 60), ok(150, 56, 120, 70), damla(140, 70)] },
  {
    cizgiler: [
      ZEMIN,
      ...dusBasligi(100, 4),
      poset(98, 34, 64, 60),
      { d: "M96 38 L164 38", w: 2.6 },
      { d: "M100 70 L160 70", w: 0.8, kesik: true },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...dusBasligi(80, 4),
      poset(78, 34, 64, 60),
      { d: "M76 38 L144 38", w: 2.6 },
      ...saat(190, 60, 18),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...dusBasligi(70, 4),
      { d: DELIK_D(70, 4), w: 1 },
      ...firca(130, 70),
      damla(90, 74),
      damla(100, 86),
      damla(110, 76),
    ],
  },
];

// ---------- 14) TV duvar montajı ----------
export const TV_DUVAR_MONTAJI_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      ...tvArka(30, 30),
      ok(90, 112, 130, 112),
      ok(130, 112, 90, 112),
      { d: kutu(176, 46, 40, 40), w: 1.6, dolgu: true },
      onay(186, 26, 1),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(120, 20, 100, 58), w: 2, dolgu: true },
      { d: "M20 134 L20 104 L80 104 L80 134 M20 116 L80 116", w: 1.6 },
      { d: daire(50, 90, 8), w: 1.4, dolgu: true },
      { d: "M58 90 L170 49", w: 0.9, kesik: true },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(20, 14, 200, 120), w: 1.4 },
      ...dedektor(40, 50),
      { d: kutu(120, 60, 50, 40), w: 1.6, dolgu: true },
      ...terazi(115, 46, 60),
      ...matkap(196, 90),
    ],
  },
  {
    cizgiler: [ZEMIN, ...tvArka(60, 40), ...parmak(60, 60), ...parmak(180, 60), ok(120, 30, 120, 12), onay(206, 30, 1)],
  },
];

// ---------- 15) Korniş montajı ----------
export const KORNIS_MONTAJI_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      ...pencere(70, 50, 100, 80),
      ok(120, 48, 120, 30),
      ok(68, 24, 44, 24),
      ok(172, 24, 196, 24),
      { d: "M40 20 L44 28 M196 20 L200 28", w: 1.4 },
    ],
  },
  { cizgiler: [ZEMIN, ...pencere(70, 50, 100, 80), ...terazi(40, 26, 160)] },
  {
    cizgiler: [ZEMIN, ...pencere(70, 50, 100, 80), braket(44, 30), braket(196, 30), ...matkap(120, 48), dubel(20, 30)],
  },
  {
    cizgiler: [
      ZEMIN,
      ...pencere(70, 50, 100, 80),
      braket(44, 30),
      braket(196, 30),
      { d: "M34 44 L206 44", w: 3 },
      { d: "M50 44 Q56 90 50 134 M70 44 Q76 90 70 134 M190 44 Q184 90 190 134 M170 44 Q164 90 170 134", w: 1 },
    ],
  },
];

// ---------- 16) Duvar kağıdı ----------
export const DUVAR_KAGIDI_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, { d: kutu(20, 14, 200, 120), w: 1.4 }, sunger(50, 70), ...boyaRulo(120, 30)] },
  {
    cizgiler: [
      ZEMIN,
      { d: "M20 10 L20 134", w: 2.4 },
      ...cekul(80, 14, 90),
      { d: "M80 14 L80 134", w: 0.8, kesik: true },
      ok(22, 120, 78, 120),
      ok(78, 120, 22, 120),
      ...kalem(84, 60),
    ],
  },
  { cizgiler: [ZEMIN, { d: kutu(30, 60, 120, 40), w: 1.6, dolgu: true }, ...firca(80, 82), ...kova(190, 130, 50, 40)] },
  {
    cizgiler: [
      ZEMIN,
      { d: "M80 14 L80 134", w: 0.8, kesik: true },
      ...seritDesen(80, 14, 60, 118),
      ...spatula(110, 80),
      ok(116, 56, 136, 56),
      ok(104, 56, 84, 56),
      kabarcik(128, 110),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...seritDesen(60, 14, 60, 118),
      ...seritDesen(120, 14, 60, 118),
      { d: "M54 130 L186 130", w: 0.8, kesik: true },
      ...bicak(150, 128),
    ],
  },
];

// ---------- 17) Küf temizliği ----------
export const KUF_TEMIZLIGI_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...pencere(40, 30, 90, 80, true), ok(70, 70, 30, 70), ...maske(180, 60)] },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(20, 14, 200, 120), w: 1.4 },
      ...sprey(170, 110),
      { d: "M168 60 L120 50 M168 60 L122 74", w: 0.8, kesik: true },
      ...saat(200, 36, 12),
    ],
    noktalar: kuf(50, 40),
  },
  {
    cizgiler: [ZEMIN, { d: kutu(20, 14, 200, 120), w: 1.4 }, ...firca(60, 90), ...bez(170, 100)],
    noktalar: kuf(110, 40).slice(0, 4),
  },
  { cizgiler: [ZEMIN, ...pencere(30, 30, 80, 80, true), ...aspirator(170, 60), onay(196, 112, 1)] },
];

// ---------- 18) Radyatör hava alma ----------
export const RADYATOR_HAVA_ALMA_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      ...radyator(40, 40),
      { d: "M40 40 L152 40 L152 62 L40 62 Z", w: 0.8, kesik: true },
      kabarcik(100, 58),
      ok(196, 100, 196, 60),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(60, 20, 70, 100), w: 1.8, dolgu: true },
      { d: daire(95, 50, 12), w: 1.4 },
      carpi(95, 50, 6),
      ...saat(180, 60, 18),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(60, 40, 90, 70), w: 1.8, dolgu: true },
      { d: kutu(150, 50, 16, 14), w: 1.6, dolgu: true },
      { d: kutu(166, 54, 20, 6), w: 1.6, dolgu: true },
      yayOk(176, 57, 14, -2.6, -1.0),
      ...bez(158, 92),
      sesDalga(196, 50),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(60, 40, 90, 70), w: 1.8, dolgu: true },
      { d: kutu(150, 50, 16, 14), w: 1.6, dolgu: true },
      { d: kutu(166, 54, 20, 6), w: 1.6, dolgu: true },
      damla(158, 70),
      yayOk(176, 57, 14, -1.0, -2.6),
      onay(200, 30, 1.2),
    ],
  },
  {
    cizgiler: [ZEMIN, ...manometre(110, 72, 44, -2.2), { d: "M78 34 A50 50 0 0 1 94 26", w: 3 }, ...vana(196, 100)],
  },
];
