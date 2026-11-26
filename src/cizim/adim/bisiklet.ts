// Bisiklet Bakımı kategorisi (Altın 40 dışı 18 proje): adım sahneleri (viewBox 0 0 240 150).
// Adım sayısı ve sırası src/data/ek/bisiklet.ts içeriğiyle birebir eşleşir.
import { Cizgi, Cizim, daire, kutu, yuvarla as r } from "../arac";
import {
  bant,
  bez,
  carpi,
  damla,
  firca,
  kablo,
  kabarcik,
  makas,
  ok,
  onay,
  parmak,
  saat,
  sprey,
  tornavida,
  yagSisesi,
  yayOk,
  ZEMIN,
} from "./parca";

// ---------- Ortak parçalar ----------
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
// Bisiklet (yandan): arka göbek (ox,oy)
const bisiklet = (ox: number, oy: number, R = 28): Cizgi[] => {
  const bb = [ox + 44, oy],
    st = [ox + 36, oy - 44],
    hu = [ox + 84, oy - 42],
    ha = [ox + 88, oy - 30];
  return [
    ...teker(ox, oy, R),
    ...teker(ox + 96, oy, R),
    {
      d: `M${ox} ${oy} L${bb[0]} ${bb[1]} L${st[0]} ${st[1]} L${ox} ${oy} M${st[0]} ${st[1]} L${hu[0]} ${hu[1]} M${bb[0]} ${bb[1]} L${ha[0]} ${ha[1]} M${hu[0]} ${hu[1]} L${ha[0]} ${ha[1]} L${ox + 96} ${oy}`,
      w: 2.4,
    },
    { d: `M${st[0]} ${st[1]} L${ox + 34} ${oy - 52}`, w: 2 },
    {
      d: `M${ox + 22} ${oy - 54} L${ox + 44} ${oy - 54} Q${ox + 46} ${oy - 50} ${ox + 40} ${oy - 50} L${ox + 28} ${oy - 50} Z`,
      w: 1.4,
      dolgu: true,
    },
    {
      d: `M${hu[0]} ${hu[1]} L${ox + 86} ${oy - 50} L${ox + 96} ${oy - 50} Q${ox + 102} ${oy - 50} ${ox + 100} ${oy - 44}`,
      w: 2,
    },
    { d: daire(bb[0], bb[1], 6), w: 1.4, dolgu: true },
    { d: `M${bb[0]} ${bb[1]} L${ox + 52} ${oy + 14}`, w: 2.2 },
    { d: kutu(ox + 46, oy + 14, 12, 4), w: 1.2, dolgu: true },
  ];
};
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
// İngiliz/pedal anahtarı: ağız (x,y), sap sağa
const anahtar = (x: number, y: number): Cizgi[] => [
  {
    d: `M${x - 10} ${y - 12} L${x + 4} ${y - 12} L${x + 4} ${y - 4} L${x - 4} ${y - 4} L${x - 4} ${y + 4} L${x + 4} ${y + 4} L${x + 4} ${y + 12} L${x - 10} ${y + 12} Q${x - 18} ${y} ${x - 10} ${y - 12} Z`,
    w: 1.5,
    dolgu: true,
  },
  { d: kutu(x + 4, y - 4, 56, 8), w: 1.6, dolgu: true },
];
// Alyan: kısa uç (x,y) aşağıda, uzun kol sağa
const alyan = (x: number, y: number): Cizgi => ({
  d: `M${x} ${y} L${x} ${y - 12} Q${x} ${y - 16} ${x + 4} ${y - 16} L${x + 42} ${y - 16}`,
  w: 3,
});
// V-fren (önden): jant ortası cx, üst y; bosluk = balata-jant arası
const vFren = (cx: number, y: number, bosluk = 6, kabloVar = true): Cizgi[] => [
  { d: kutu(cx - 6, y + 24, 12, 70), w: 1.6, dolgu: true },
  {
    d: `M${cx - 24} ${y + 92} L${cx - 24} ${y + 10} L${cx - 16} ${y} M${cx + 24} ${y + 92} L${cx + 24} ${y + 10} L${cx + 16} ${y}`,
    w: 2.4,
  },
  { d: kutu(cx - 6 - bosluk - 10, y + 40, 10, 18), w: 1.4, dolgu: true },
  { d: kutu(cx + 6 + bosluk, y + 40, 10, 18), w: 1.4, dolgu: true },
  {
    d: `M${cx - 24} ${y + 49} L${cx - 16 - bosluk} ${y + 49} M${cx + 24} ${y + 49} L${cx + 16 + bosluk} ${y + 49}`,
    w: 1.6,
  },
  ...(kabloVar
    ? [
        { d: `M${cx - 16} ${y} L${cx + 16} ${y}`, w: 1.2 },
        { d: `M${cx - 16} ${y} Q${cx - 26} ${y - 8} ${cx - 18} ${y - 22}`, w: 2.4 },
      ]
    : []),
];
// Düz gidon + fren levyesi: sol uç (x,y); sikili → levye gidona yakın
const gidon = (x: number, y: number, sikili = false): Cizgi[] => [
  { d: `M${x} ${y} L${x + 170} ${y}`, w: 4 },
  { d: kutu(x + 136, y - 5, 34, 10), w: 1.4, dolgu: true },
  { d: kutu(x + 106, y - 8, 14, 12), w: 1.4, dolgu: true },
  {
    d: sikili
      ? `M${x + 116} ${y + 4} Q${x + 140} ${y + 12} ${x + 164} ${y + 9}`
      : `M${x + 116} ${y + 4} Q${x + 138} ${y + 26} ${x + 164} ${y + 26}`,
    w: 2.6,
  },
];
// Manometre: merkez (cx,cy), yarıçap R, ibre açısı (radyan)
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
// Kaset (yandan): sol x, orta cy
const kaset = (x: number, cy: number): Cizgi[] => [
  {
    d: Array.from({ length: 8 }, (_, i) => {
      const h = 70 - i * 7;
      return kutu(x + i * 6, cy - h / 2, 3, h);
    }).join(" "),
    w: 1.3,
    dolgu: true,
  },
  { d: `M${x - 6} ${cy} L${x + 52} ${cy}`, w: 2.4 },
];
// Arka aktarıcı: gövde sol üst (x,y)
const aktarici = (x: number, y: number): Cizgi[] => [
  { d: `M${x} ${y} L${x + 30} ${y - 6} L${x + 36} ${y + 10} L${x + 6} ${y + 16} Z`, w: 1.6, dolgu: true },
  { d: `M${x + 4} ${y + 22} L${x + 28} ${y + 20} L${x + 30} ${y + 72} L${x + 8} ${y + 74} Z`, w: 1.4, dolgu: true },
  { d: daire(x + 16, y + 32, 7) + " " + daire(x + 19, y + 62, 7), w: 1.3 },
  { d: daire(x + 22, y + 2, 2.4) + " " + daire(x + 28, y + 4, 2.4), w: 1 },
];
// Disk rotor: merkez (cx,cy)
const disk = (cx: number, cy: number, R = 30): Cizgi[] => [
  { d: daire(cx, cy, R), w: 2, dolgu: true },
  { d: daire(cx, cy, R - 9), w: 1 },
  {
    d: Array.from({ length: 10 }, (_, i) => {
      const t = (i / 10) * Math.PI * 2;
      return daire(r(cx + Math.cos(t) * (R - 4.5)), r(cy + Math.sin(t) * (R - 4.5)), 1.4);
    }).join(" "),
    w: 0.7,
  },
  { d: daire(cx, cy, 7), w: 1.4, dolgu: true },
];
// Kaliper: sol üst (x,y)
const kaliper = (x: number, y: number): Cizgi[] => [
  { d: kutu(x + 6, y - 8, 10, 8) + " " + kutu(x + 44, y - 8, 10, 8), w: 1.2, dolgu: true },
  { d: kutu(x, y, 60, 34), w: 1.8, dolgu: true },
  { d: `M${x + 4} ${y + 17} L${x + 56} ${y + 17}`, w: 0.7, kesik: true },
];
// Disk balata (yandan): sol alt (x,y), kalınlık k
const balata = (x: number, y: number, k = 8): Cizgi[] => [
  { d: kutu(x, y - 6, 50, 6), w: 1.5, dolgu: true },
  { d: kutu(x + 4, y - 6 - k, 42, k), w: 1.2, dolgu: true },
];
// Sele borusu + kelepçe: boru orta x, kelepçe üst y
const seleBorusu = (x: number, y: number, cik = 40): Cizgi[] => [
  { d: kutu(x - 10, y, 20, 134 - y), w: 1.8, dolgu: true },
  { d: kutu(x - 7, y - cik, 14, cik + 14), w: 1.5, dolgu: true },
  { d: kutu(x - 14, y, 28, 10), w: 1.6, dolgu: true },
  { d: kutu(x + 14, y + 2, 8, 6), w: 1.2, dolgu: true },
];
// Drop gidon (yol): sabit
const DROP = { d: "M16 44 L128 44 Q174 44 174 84 Q174 118 140 118 L128 118", w: 5 };
// Bant sargısı: yol boyunca kısa çapraz çizgiler
const sargi = (noktalar: [number, number][]): Cizgi => ({
  d: noktalar.map(([x, y]) => `M${x - 5} ${y + 8} L${x + 5} ${y - 8}`).join(" "),
  w: 1.4,
});
// Pedal (yandan): mil ucu (x,y), gövde sağda
const pedal = (x: number, y: number): Cizgi[] => [
  { d: kutu(x, y - 3, 24, 6), w: 1.4, dolgu: true },
  { d: kutu(x + 24, y - 12, 44, 24), w: 1.7, dolgu: true },
  { d: `M${x + 30} ${y - 12} L${x + 30} ${y + 12} M${x + 62} ${y - 12} L${x + 62} ${y + 12}`, w: 0.8 },
];
// Harfler (12 px)
const harfL = (x: number, y: number): Cizgi => ({ d: `M${x} ${y} L${x} ${y + 12} L${x + 8} ${y + 12}`, w: 1.8 });
const harfR = (x: number, y: number): Cizgi => ({
  d: `M${x} ${y + 12} L${x} ${y} L${x + 5} ${y} Q${x + 9} ${y + 3} ${x + 5} ${y + 6} L${x} ${y + 6} M${x + 4} ${y + 6} L${x + 8} ${y + 12}`,
  w: 1.8,
});
// Lastik yanağı yakın görünüm + ölçü etiketi
const YANAK: Cizgi[] = [
  { d: "M10 122 Q120 22 230 122", w: 4 },
  { d: "M34 128 Q120 52 206 128", w: 1.4 },
  { d: kutu(90, 66, 60, 14), w: 1.2, dolgu: true },
  { d: "M95 73 L104 73 M108 73 L114 73 M118 73 L130 73 M134 73 L145 73", w: 1.2 },
];
// Hortum ucu (x,y) ve su püskürtmesi sola
const hortum = (x: number, y: number, guclu = false): Cizgi[] => [
  { d: `M${x + 50} ${y + 60} Q${x + 30} ${y + 10} ${x + 6} ${y}`, w: 2.4 },
  { d: kutu(x - 4, y - 3, 10, 6), w: 1.3, dolgu: true },
  {
    d: guclu
      ? `M${x - 6} ${y} L${x - 40} ${y - 10} M${x - 6} ${y} L${x - 42} ${y} M${x - 6} ${y} L${x - 40} ${y + 10}`
      : `M${x - 6} ${y} Q${x - 24} ${y - 4} ${x - 34} ${y + 14} M${x - 6} ${y + 1} Q${x - 20} ${y + 2} ${x - 26} ${y + 18}`,
    w: 0.8,
    kesik: true,
  },
];
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
// Şırınga: uç (x,y), gövde sağa
const siringa = (x: number, y: number): Cizgi[] => [
  { d: `M${x} ${y} L${x + 8} ${y}`, w: 1.6 },
  { d: kutu(x + 8, y - 6, 40, 12), w: 1.6, dolgu: true },
  { d: `M${x + 48} ${y} L${x + 66} ${y} M${x + 66} ${y - 8} L${x + 66} ${y + 8}`, w: 2 },
  {
    d: `M${x + 18} ${y - 6} L${x + 18} ${y - 2} M${x + 28} ${y - 6} L${x + 28} ${y - 2} M${x + 38} ${y - 6} L${x + 38} ${y - 2}`,
    w: 0.7,
  },
];
// Işık: gövde sol üst (x,y), ışın yönü sağ (yon=1) / sol (yon=-1); egim = aşağı eğim
const isik = (x: number, y: number, yon = 1, egim = 0, kesik = false): Cizgi[] => {
  const bx = yon > 0 ? x + 24 : x;
  return [
    { d: kutu(x, y, 24, 14), w: 1.6, dolgu: true },
    {
      d: [-6, 0, 6].map((k) => `M${bx + yon * 4} ${y + 7 + k / 2} L${bx + yon * 40} ${y + 7 + k * 2 + egim}`).join(" "),
      w: 0.9,
      kesik,
    },
  ];
};
const gunes = (x: number, y: number): Cizgi => ({
  d:
    daire(x, y, 6) +
    " " +
    Array.from({ length: 8 }, (_, i) => {
      const t = (i / 8) * Math.PI * 2;
      return `M${r(x + Math.cos(t) * 9)} ${r(y + Math.sin(t) * 9)} L${r(x + Math.cos(t) * 13)} ${r(y + Math.sin(t) * 13)}`;
    }).join(" "),
  w: 1.1,
});
const ay = (x: number, y: number): Cizgi => ({
  d: `M${x + 4} ${y - 10} A10 10 0 1 0 ${x + 4} ${y + 10} A7 8 0 1 1 ${x + 4} ${y - 10} Z`,
  w: 1.2,
  dolgu: true,
});
// Jant + dış lastik kesiti: orta (cx,y alt)
const jantKesit = (cx: number, y: number): Cizgi[] => [
  {
    d: `M${cx - 22} ${y - 30} L${cx - 22} ${y - 6} Q${cx - 22} ${y} ${cx - 14} ${y} L${cx + 14} ${y} Q${cx + 22} ${y} ${cx + 22} ${y - 6} L${cx + 22} ${y - 30} L${cx + 16} ${y - 30} L${cx + 16} ${y - 18} L${cx - 16} ${y - 18} L${cx - 16} ${y - 30} Z`,
    w: 1.6,
    dolgu: true,
  },
  { d: `M${cx - 18} ${y - 30} Q${cx - 40} ${y - 76} ${cx} ${y - 80} Q${cx + 40} ${y - 76} ${cx + 18} ${y - 30}`, w: 3 },
];
// Hızlı bağlantı göbeği: (x,y)
const hizliBaglanti = (x: number, y: number): Cizgi[] => [
  { d: `M${x - 30} ${y} L${x + 30} ${y}`, w: 1.6 },
  { d: daire(x, y, 10), w: 1.6, dolgu: true },
  { d: `M${x - 30} ${y} Q${x - 42} ${y - 20} ${x - 34} ${y - 44}`, w: 4 },
];

// ---------- 1) V-Fren Balata Değişimi ----------
export const FREN_AYARI_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(30, 60, 80, 26), w: 1.8, dolgu: true },
      { d: "M44 60 L44 86 M58 60 L58 86 M72 60 L72 86 M86 60 L86 86 M100 60 L100 86", w: 1.2 },
      { d: kutu(130, 68, 80, 18), w: 1.8, dolgu: true },
      onay(60, 40, 1.2),
      carpi(170, 46, 7),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...vFren(80, 30, 6, false),
      { d: "M64 30 L96 30", w: 1.2 },
      { d: "M96 18 Q110 6 126 14", w: 2.4 },
      ok(110, 24, 134, 30),
      alyan(150, 80),
      yayOk(150, 80, 12, 0.3, 2.6),
      ok(122, 109, 102, 109),
      { d: kutu(150, 100, 18, 18), w: 1.4, dolgu: true },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...vFren(90, 30),
      { d: "M40 70 L60 70 M120 70 L140 70", w: 0.8, kesik: true },
      ok(160, 79, 120, 79),
      { d: kutu(166, 70, 40, 18), w: 1.4, dolgu: true },
      onay(186, 44, 1),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: "M124 22 L124 128", w: 6 },
      { d: "M118 44 L102 46 L98 100 L114 102 Z", w: 1.6, dolgu: true },
      { d: "M114 108 L118 108 M114 104 L114 112 M118 104 L118 112", w: 1 },
      { d: "M98 72 L70 72", w: 1.8 },
      ok(170, 110, 170, 40),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...vFren(100, 34, 3),
      { d: kutu(76, 8, 14, 14), w: 1.4, dolgu: true },
      yayOk(83, 15, 13, 0.5, 2.8),
      { d: "M81 108 L81 112 M84 108 L84 112 M116 108 L116 112 M119 108 L119 112", w: 0.9 },
      { d: kutu(168, 60, 40, 14), w: 1.2 },
      { d: "M178 67 L198 67", w: 1, kesik: true },
    ],
  },
  {
    cizgiler: [ZEMIN, ...gidon(20, 60, true), ...parmak(170, 50), { d: "M136 72 L136 66", w: 1 }, onay(200, 26, 1.2)],
  },
];

// ---------- 2) Sürüş öncesi kontrol ----------
export const SURUS_ONCESI_KONTROL_ADIM: Cizim[] = [
  {
    cizgiler: [ZEMIN, ...teker(80, 82, 46), ...manometre(180, 62, 22, -0.6), kablo(80, 40, 172, 82, 30, 1.6)],
  },
  {
    cizgiler: [ZEMIN, ...bisiklet(50, 104), ok(176, 60, 210, 60), carpi(200, 90, 6), onay(196, 30, 1)],
  },
  {
    cizgiler: [ZEMIN, ...zincir(20, 210, 84), damla(60, 50), damla(110, 46), damla(160, 52), onay(196, 30, 1.2)],
  },
  {
    cizgiler: [
      ZEMIN,
      ...hizliBaglanti(70, 90),
      yayOk(40, 90, 26, -2.4, -1.4),
      { d: "M130 60 L218 60", w: 4 },
      { d: "M174 60 L174 90", w: 2.4 },
      ok(150, 76, 136, 76),
      ok(198, 76, 212, 76),
      onay(196, 26, 1),
    ],
  },
];

// ---------- 3) Lastik basıncı ----------
export const LASTIK_BASINCI_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...YANAK, ok(100, 98, 140, 98), ok(140, 98, 100, 98)] },
  {
    cizgiler: [
      ZEMIN,
      ...manometre(90, 74, 40, -Math.PI / 2),
      { d: "M62 40 A44 44 0 0 1 118 40", w: 3 },
      ...teker(176, 104, 22),
      ok(176, 70, 176, 54),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(112, 90, 16, 44), w: 1.8, dolgu: true },
      { d: kutu(117, 54, 6, 36), w: 1.4, dolgu: true },
      { d: kutu(114, 48, 12, 6), w: 1.4, dolgu: true },
      yayOk(120, 51, 16, -0.4, -2.6),
      ...parmak(120, 44),
      ...pompa(150, 120),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...manometre(90, 74, 36, -1.2),
      ok(160, 96, 160, 50),
      ok(196, 50, 196, 96),
      { d: "M146 74 L210 74", w: 0.8, kesik: true },
    ],
  },
];

// ---------- 4) Vites ayarı ----------
export const VITES_AYARI_ADIM: Cizim[] = [
  {
    cizgiler: [ZEMIN, ...kaset(40, 70), ...aktarici(110, 44), ...tornavida(144, 50), yayOk(136, 47, 12, 1.4, 3.6)],
  },
  {
    cizgiler: [
      ZEMIN,
      ...kaset(40, 70),
      ...aktarici(110, 44),
      { d: "M140 44 L190 20 L226 20", w: 1.4 },
      ok(196, 30, 222, 30),
      ...zincir(84, 124, 40),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: "M20 72 L100 72 M140 72 L220 72", w: 1.4 },
      { d: kutu(100, 60, 40, 24), w: 1.8, dolgu: true },
      { d: "M108 60 L108 84 M116 60 L116 84 M124 60 L124 84 M132 60 L132 84", w: 0.8 },
      yayOk(120, 72, 26, -2.6, -0.5),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...kaset(30, 70),
      ...aktarici(96, 44),
      ...disli(182, 84, 26, 16),
      yayOk(182, 84, 34, -2.4, -0.6),
      onay(206, 30, 1),
    ],
  },
];

// ---------- 5) Zincir aşınma ve değişim ----------
export const ZINCIR_ASINMA_DEGISIM_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      ...zincir(20, 220, 100),
      { d: "M70 92 L70 84 L170 84 L170 92 M70 84 L70 104 M170 84 L170 104", w: 2 },
      { d: kutu(108, 66, 24, 18), w: 1.5, dolgu: true },
      onay(196, 46, 1),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...zincir(20, 190, 60),
      ...zincir(20, 220, 100),
      { d: "M180 40 L180 120", w: 1.2, kesik: true },
      ...makas(180, 116),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...disli(60, 84, 30, 16),
      ...zincir(60, 160, 54),
      ...zincir(60, 160, 114),
      ...aktarici(164, 44),
      ok(90, 40, 140, 40),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...zincir(20, 100, 90),
      ...zincir(140, 220, 90),
      { d: kutu(102, 84, 36, 12), w: 2, dolgu: true },
      ...pedal(150, 36),
      ok(184, 52, 184, 70),
    ],
  },
];

// ---------- 6) Disk balata ----------
export const DISK_BALATA_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      ...balata(30, 100, 10),
      ...balata(140, 100, 2),
      { d: "M196 92 L196 98 M192 92 L200 92 M192 98 L200 98", w: 0.9 },
      onay(48, 56, 1.2),
      carpi(165, 64, 7),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...kaliper(70, 40),
      ...balata(75, 108, 6),
      ok(100, 80, 100, 92),
      { d: "M100 50 L170 50", w: 1.6 },
      ok(150, 40, 190, 40),
      ...teker(200, 104, 24),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(50, 40, 140, 70), w: 1.8, dolgu: true },
      { d: daire(90, 75, 18) + " " + daire(150, 75, 18), w: 1.6 },
      levye(110, 90),
      ok(80, 75, 60, 75),
      ok(160, 75, 180, 75),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...kaliper(60, 40),
      ...balata(65, 70, 6),
      { d: "M70 60 L76 54 L82 60 L88 54 L94 60 L100 54 L106 60 L112 54", w: 1 },
      { d: "M60 50 L130 50", w: 1.6 },
      ...disk(180, 84, 30),
      ok(150, 30, 130, 44),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...bisiklet(36, 104),
      ok(166, 60, 214, 60),
      ok(166, 74, 200, 74),
      ...disk(196, 108, 16),
      yayOk(196, 108, 22, -2.6, -0.3),
    ],
  },
];

// ---------- 7) Hidrolik fren hava alma ----------
export const HIDROLIK_FREN_HAVA_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      ...yagSisesi(70, 120, 26, 60),
      ...yagSisesi(170, 120, 26, 60),
      { d: kutu(60, 84, 20, 14), w: 1 },
      { d: daire(170, 91, 6), w: 1 },
      carpi(120, 84, 9),
      ok(96, 50, 144, 50),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...gidon(20, 40),
      { d: "M10 52 L230 52", w: 0.8, kesik: true },
      ...kaliper(70, 90),
      { d: kutu(92, 92, 16, 30), w: 1.4, dolgu: true },
      ...balata(150, 128, 4),
      ok(140, 110, 160, 110),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(150, 20, 30, 24), w: 1.6, dolgu: true },
      kabarcik(166, 40),
      ...kaliper(40, 96),
      ...siringa(100, 120),
      kablo(100, 120, 165, 44, -50, 1.4),
      ok(160, 110, 140, 110),
    ],
  },
  {
    cizgiler: [ZEMIN, ...kaliper(50, 60), alyan(90, 62), yayOk(90, 62, 12, -0.4, -2.6), ...bez(170, 100)],
  },
  {
    cizgiler: [ZEMIN, ...gidon(20, 60, true), ...parmak(170, 50), onay(200, 26, 1.2), yayOk(60, 96, 18, -2.8, 0.2)],
  },
];

// ---------- 8) Sele yüksekliği ----------
export const SELE_YUKSEKLIK_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      ...bisiklet(50, 104),
      { d: "M84 50 L102 118", w: 2.4, kesik: true },
      { d: "M78 118 L104 118", w: 1.6 },
      onay(190, 30, 1.2),
    ],
  },
  {
    cizgiler: [ZEMIN, ...seleBorusu(110, 70), alyan(140, 76), ok(110, 26, 110, 14), ok(150, 32, 150, 46)],
  },
  {
    cizgiler: [
      ZEMIN,
      ...seleBorusu(110, 60, 50),
      { d: "M104 76 L116 76 M104 80 L116 80 M104 84 L116 84", w: 1 },
      { d: "M70 60 L150 60", w: 0.8, kesik: true },
      onay(170, 40, 1.2),
    ],
  },
  {
    cizgiler: [ZEMIN, ...seleBorusu(110, 70), alyan(140, 76), yayOk(140, 76, 12, 0.4, 2.6), bant(110, 62)],
  },
];

// ---------- 9) Gidon bandı ----------
export const GIDON_BANDI_ADIM: Cizim[] = [
  {
    cizgiler: [ZEMIN, DROP, { d: "M150 54 Q170 66 196 60 Q210 56 222 64", w: 1.4 }, ...bez(60, 90)],
  },
  {
    cizgiler: [
      ZEMIN,
      DROP,
      sargi([
        [134, 118],
        [146, 117],
        [158, 112],
        [167, 103],
      ]),
      yayOk(140, 118, 16, 0.4, 2.2),
      ok(200, 120, 190, 96),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      DROP,
      { d: kutu(150, 44, 22, 26), w: 1.6, dolgu: true },
      { d: "M148 36 C130 50 190 64 174 78 C160 92 124 70 148 36 Z", w: 1, kesik: true },
      sargi([
        [174, 86],
        [172, 98],
        [166, 108],
      ]),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      DROP,
      sargi([
        [60, 44],
        [72, 44],
        [84, 44],
        [96, 44],
        [108, 44],
      ]),
      { d: "M50 34 L44 54", w: 1.6 },
      bant(36, 44),
      { d: daire(128, 118, 5), w: 1.6, dolgu: true },
      onay(196, 26, 1),
    ],
  },
];

// ---------- 10) Jant ayarı ----------
export const JANT_AYARI_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      ...teker(100, 80, 50),
      { d: daire(103, 80, 50), w: 0.8, kesik: true },
      { d: "M172 44 L160 50 M168 38 L176 50", w: 2.4 },
      ok(190, 80, 160, 80),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(96, 18, 48, 14), w: 1.8, dolgu: true },
      { d: kutu(110, 116, 20, 14), w: 1.6, dolgu: true },
      { d: "M110 120 L108 32 M114 120 L128 32 M130 120 L132 32 M126 120 L112 32", w: 1.1 },
      yayOk(108, 40, 9, 0.4, 2.8),
      yayOk(132, 40, 9, 2.8, 0.4),
      ok(150, 25, 180, 25),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...teker(100, 80, 50),
      { d: "M160 60 L160 64 M164 60 L164 64", w: 1 },
      yayOk(100, 80, 20, -2.6, 1.6),
      onay(192, 30, 1),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: "M60 130 L180 20 M80 130 L160 20 M160 130 L80 20 M180 130 L60 20", w: 1.2 },
      ...parmak(120, 82),
      onay(196, 40, 1.2),
    ],
  },
];

// ---------- 11) Pedal değişimi ----------
export const PEDAL_DEGISIMI_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      { d: daire(60, 80, 8) + " " + daire(180, 80, 8), w: 1.6, dolgu: true },
      yayOk(60, 80, 22, -2.4, 0.6),
      yayOk(180, 80, 22, 0.6, -2.4),
      harfL(56, 36),
      harfR(176, 36),
      { d: "M120 20 L120 130", w: 0.8, kesik: true },
    ],
  },
  {
    cizgiler: [ZEMIN, ...bisiklet(36, 104), ...anahtar(176, 60), ok(216, 30, 180, 30)],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(40, 70, 70, 14), w: 1.6, dolgu: true },
      { d: "M48 70 L52 84 M56 70 L60 84 M64 70 L68 84 M72 70 L76 84 M80 70 L84 84 M88 70 L92 84", w: 0.8 },
      { d: kutu(110, 60, 70, 34), w: 1.8, dolgu: true },
      ...firca(56, 60),
      damla(70, 94),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...pedal(40, 80),
      harfR(60, 46),
      yayOk(40, 80, 20, -2.6, -0.6),
      ok(150, 120, 110, 120),
      onay(196, 40, 1.2),
    ],
  },
];

// ---------- 12) Fren teli değişimi ----------
export const FREN_KABLOSU_DEGISIMI_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      ...vFren(70, 30, 6, false),
      alyan(96, 60),
      { d: "M60 30 Q140 30 180 70", w: 1.2 },
      ok(160, 44, 186, 58),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(30, 56, 140, 8), w: 1.6, dolgu: true },
      { d: kutu(30, 84, 150, 8), w: 1.6, dolgu: true },
      { d: "M170 44 L170 104", w: 1, kesik: true },
      ...makas(172, 88),
    ],
  },
  {
    cizgiler: [ZEMIN, ...gidon(20, 40), kablo(136, 46, 190, 120, 40, 1.4), ok(170, 70, 186, 96)],
  },
  {
    cizgiler: [
      ZEMIN,
      ...vFren(80, 30, 2),
      alyan(106, 60),
      { d: "M64 30 L50 30", w: 1.2 },
      { d: kutu(42, 27, 8, 6), w: 1.2, dolgu: true },
      ok(30, 79, 52, 79),
      ok(130, 79, 108, 79),
    ],
  },
];

// ---------- 13) Tubeless dönüşüm ----------
export const TUBELESS_DONUSUM_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...jantKesit(120, 120), onay(176, 40, 1.2)] },
  {
    cizgiler: [
      ZEMIN,
      ...teker(100, 80, 48),
      { d: "M60 52 A48 48 0 0 1 140 52", w: 4 },
      { d: daire(170, 40, 14) + " " + daire(170, 40, 6), w: 1.6, dolgu: true },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: "M30 120 Q120 20 210 120", w: 4 },
      { d: "M120 70 L120 50", w: 2.4 },
      ...yagSisesi(150, 46, 18, 34),
      damla(140, 54),
      damla(136, 66),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...teker(90, 80, 46),
      ...pompa(124, 126),
      { d: "M38 40 L30 32 M34 60 L24 58 M60 30 L56 20", w: 1.4 },
    ],
  },
  { cizgiler: [ZEMIN, ...teker(90, 80, 46), yayOk(90, 80, 54, -2.6, -0.6), ...saat(190, 50, 16)] },
];

// ---------- 14) Kaset ve aktarıcı temizliği ----------
export const KASET_TEMIZLIGI_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...teker(80, 82, 46), ...kaset(60, 82), ok(140, 82, 190, 82)] },
  {
    cizgiler: [
      ZEMIN,
      ...kaset(50, 80),
      ...sprey(160, 110),
      { d: "M156 60 L110 54 M156 60 L112 70", w: 0.8, kesik: true },
      ...saat(200, 40, 12),
    ],
  },
  { cizgiler: [ZEMIN, ...kaset(30, 80), ...firca(70, 90), ...aktarici(150, 40), ...bez(196, 120)] },
  {
    cizgiler: [
      ZEMIN,
      ...kaset(30, 74),
      damla(50, 24),
      damla(66, 30),
      ...bez(140, 50),
      ...zincir(120, 210, 110),
      ...yagSisesi(200, 88, 16, 32),
    ],
  },
];

// ---------- 15) Işık ve reflektör montajı ----------
export const BISIKLET_ISIK_MONTAJI_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, { d: "M20 60 L160 60", w: 4 }, ...isik(150, 66, 1, 10), { d: "M162 60 L162 66", w: 1.6 }] },
  { cizgiler: [ZEMIN, ...seleBorusu(150, 70), ...isik(126, 90, -1)] },
  {
    cizgiler: [
      ZEMIN,
      ...teker(80, 80, 46),
      { d: kutu(92, 54, 8, 16), w: 1.4, dolgu: true },
      ...pedal(150, 100),
      { d: kutu(178, 94, 12, 12), w: 1.2 },
      onay(196, 40, 1.2),
    ],
  },
  { cizgiler: [ZEMIN, gunes(50, 40), ...isik(40, 70, 1, 0, true), ay(160, 40), ...isik(150, 70, 1)] },
];

// ---------- 16) Bisiklet yıkama ----------
export const BISIKLET_YIKAMA_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...bisiklet(40, 104), ...hortum(180, 50), sunger(190, 112)] },
  {
    cizgiler: [
      ZEMIN,
      ...bisiklet(40, 104),
      sunger(170, 40),
      kabarcik(178, 36),
      kabarcik(196, 34),
      ok(200, 70, 200, 100),
    ],
  },
  { cizgiler: [ZEMIN, ...bisiklet(40, 104), ...hortum(180, 50, true)] },
  {
    cizgiler: [
      ZEMIN,
      ...zincir(20, 160, 96),
      ...bez(70, 60),
      ...yagSisesi(196, 80, 18, 40),
      damla(190, 90),
      damla(186, 104),
    ],
  },
];

// ---------- 17) Kış depolama ----------
export const KIS_DEPOLAMA_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...bisiklet(40, 104), ...bez(196, 110), onay(196, 30, 1)] },
  {
    cizgiler: [
      ZEMIN,
      ...zincir(20, 160, 96),
      ...disli(70, 96, 22, 14),
      ...yagSisesi(190, 70, 18, 40),
      damla(184, 80),
      damla(180, 94),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...teker(70, 82, 46),
      ...pompa(110, 128),
      { d: "M180 20 L180 34 Q180 42 172 42", w: 2.4 },
      onay(196, 70, 1),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...bisiklet(40, 104),
      { d: "M6 132 L6 70 Q20 32 90 38 Q160 36 172 70 L172 132", w: 1.2, kesik: true },
      ...isik(170, 40),
      ok(182, 64, 182, 90),
    ],
  },
];

// ---------- 18) Dış lastik değişimi ----------
export const DIS_LASTIK_DEGISIMI_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...YANAK, { d: daire(120, 73, 26), w: 1.6 }, { d: "M140 92 L162 116", w: 4 }] },
  {
    cizgiler: [
      ZEMIN,
      ...teker(100, 82),
      levye(70, 46),
      levye(94, 40),
      { d: "M100 126 L100 134", w: 2.4 },
      ok(110, 130, 130, 130),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: "M10 122 Q120 22 230 122", w: 4 },
      { d: "M34 128 Q120 52 206 128", w: 1.4 },
      ok(90, 76, 150, 76),
      yayOk(120, 120, 80, -2.4, -0.7),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...teker(100, 82),
      { d: daire(100, 82, 36), w: 1.6, kesik: true },
      ...parmak(60, 52),
      ...parmak(140, 52),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...teker(90, 80, 46),
      { d: daire(90, 80, 42), w: 0.8, kesik: true },
      ...pompa(124, 126),
      onay(196, 40, 1.2),
    ],
  },
];
