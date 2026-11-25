// Elektronik kategorisi (Altın 40 dışı 18 proje): adım sahneleri (viewBox 0 0 240 150).
// Adım sayısı ve sırası src/data/ek/elektronik.ts içeriğiyle birebir eşleşir.
import { Cizgi, Cizim, daire, kutu, yuvarla as r } from "../arac";
import {
  carpi,
  damla,
  direnc,
  kablo,
  kart,
  kavanoz,
  ok,
  onay,
  parmak,
  saat,
  saksi,
  sise,
  termometre,
  tornavida,
  yayOk,
  ZEMIN,
} from "./parca";

type Nokta = [number, number, number];

// ---------- Ortak parçalar ----------
// Arduino Uno: sol üst (x,y), USB yuvası solda; pinler üst kenarda
const UNO = (x = 24, y = 70): Cizgi[] => [
  ...kart(x, y, 64, 44, 12),
  { d: kutu(x - 5, y + 8, 9, 12), w: 1.2, dolgu: true },
];
// Uno pin konumu (üst kenar), i = 0..7
const pin = (i: number, x = 24, y = 70): [number, number] => [x + 8 + i * 7, y];
// Tel: pinden parçaya
const tel = (i: number, x2: number, y2: number, egri = -24): Cizgi => {
  const [x, y] = pin(i);
  return kablo(x, y, x2, y2, egri, 1.2);
};
// Dizüstü: ekran sol üst (x,y)
const laptop = (x: number, y: number, kod = true): Cizgi[] => [
  { d: kutu(x, y, 70, 44), w: 1.7, dolgu: true },
  { d: kutu(x + 4, y + 4, 62, 36), w: 0.8 },
  { d: `M${x - 6} ${y + 44} L${x + 76} ${y + 44} L${x + 82} ${y + 52} L${x - 12} ${y + 52} Z`, w: 1.6, dolgu: true },
  ...(kod
    ? [
        {
          d: `M${x + 9} ${y + 12} L${x + 36} ${y + 12} M${x + 13} ${y + 19} L${x + 50} ${y + 19} M${x + 13} ${y + 26} L${x + 44} ${y + 26} M${x + 9} ${y + 33} L${x + 24} ${y + 33}`,
          w: 0.9,
        },
      ]
    : []),
];
// Laptop ekranında grafik (Seri Monitör)
const grafik = (x: number, y: number): Cizgi => ({
  d: `M${x + 8} ${y + 32} L${x + 20} ${y + 24} L${x + 30} ${y + 28} L${x + 42} ${y + 14} L${x + 52} ${y + 18} L${x + 62} ${y + 10}`,
  w: 1.1,
});
// Laptop + USB → Uno (yükleme sahnesi)
const YUKLE = (ek: Cizgi[] = []): Cizim => ({
  cizgiler: [
    ZEMIN,
    ...laptop(20, 40),
    ...UNO(150, 80),
    kablo(100, 88, 145, 94, 12),
    { d: kutu(140, 90, 8, 8), w: 1.2, dolgu: true },
    ok(110, 60, 140, 70),
    ...ek,
  ],
});
// Seri monitör sahnesi
const MONITOR = (ek: Cizgi[] = []): Cizim => ({
  cizgiler: [ZEMIN, ...laptop(60, 30, false), grafik(60, 30), ...ek],
});
// LED (yandan): gövde üst (x,y); bacaklar aşağı; uzun bacak sağda
const led = (x: number, y: number, yanik = false): Cizgi[] => [
  {
    d: `M${x - 6} ${y + 14} L${x - 6} ${y + 4} Q${x - 6} ${y - 4} ${x} ${y - 4} Q${x + 6} ${y - 4} ${x + 6} ${y + 4} L${x + 6} ${y + 14} Z`,
    w: 1.4,
    dolgu: true,
  },
  { d: `M${x - 3} ${y + 14} L${x - 3} ${y + 26} M${x + 3} ${y + 14} L${x + 3} ${y + 32}`, w: 1.1 },
  ...(yanik
    ? [
        {
          d: `M${x} ${y - 9} L${x} ${y - 15} M${x + 9} ${y - 6} L${x + 13} ${y - 10} M${x - 9} ${y - 6} L${x - 13} ${y - 10}`,
          w: 0.9,
        },
      ]
    : []),
];
// Buton (üstten): merkez (x,y)
const buton = (x: number, y: number): Cizgi[] => [
  { d: kutu(x - 8, y - 8, 16, 16), w: 1.4, dolgu: true },
  { d: daire(x, y, 4.5), w: 1.2, dolgu: true },
];
// Potansiyometre: merkez (x,y), üç bacak aşağı
const pot = (x: number, y: number): Cizgi[] => [
  { d: daire(x, y, 12), w: 1.6, dolgu: true },
  { d: daire(x, y, 5), w: 1.3, dolgu: true },
  { d: `M${x} ${y - 5} L${x} ${y - 1}`, w: 1 },
  {
    d: `M${x - 8} ${y + 9} L${x - 8} ${y + 20} M${x} ${y + 12} L${x} ${y + 20} M${x + 8} ${y + 9} L${x + 8} ${y + 20}`,
    w: 1.1,
  },
];
// Buzzer: merkez (x,y)
const buzzer = (x: number, y: number): Cizgi[] => [
  { d: daire(x, y, 10), w: 1.6, dolgu: true },
  { d: daire(x, y, 2.5), w: 1 },
];
const ses = (x: number, y: number): Cizgi => ({
  d: [6, 12, 18].map((k) => `M${r(x + k * 0.6)} ${y - k} Q${r(x + k * 1.2)} ${y} ${r(x + k * 0.6)} ${y + k}`).join(" "),
  w: 0.9,
});
// Nem sensörü (çatal): üst (x,y)
const nemSensor = (x: number, y: number): Cizgi[] => [
  { d: kutu(x - 10, y, 20, 12), w: 1.4, dolgu: true },
  {
    d: `M${x - 7} ${y + 12} L${x - 7} ${y + 46} L${x - 3} ${y + 50} L${x - 3} ${y + 12} M${x + 3} ${y + 12} L${x + 3} ${y + 50} L${x + 7} ${y + 46} L${x + 7} ${y + 12}`,
    w: 1.2,
  },
];
// Küçük modül kartı: sol üst (x,y)
const modul = (x: number, y: number, en = 30, boy = 20): Cizgi[] => kart(x, y, en, boy, 3);
// Servo: sol üst (x,y)
const servo = (x: number, y: number, aci = 0): Cizgi[] => {
  const cx = x + 12,
    cy = y - 2;
  const a = (aci * Math.PI) / 180;
  return [
    { d: kutu(x, y, 40, 22), w: 1.6, dolgu: true },
    { d: kutu(x - 6, y + 4, 52, 4), w: 1.2, dolgu: true },
    { d: daire(cx, cy, 4), w: 1.2, dolgu: true },
    { d: `M${cx} ${cy} L${r(cx + 22 * Math.cos(a))} ${r(cy - 22 * Math.sin(a))}`, w: 3 },
  ];
};
// LDR: merkez (x,y)
const ldr = (x: number, y: number): Cizgi[] => [
  { d: daire(x, y, 8), w: 1.4, dolgu: true },
  {
    d: `M${x - 5} ${y - 3} L${x - 2} ${y - 3} L${x - 2} ${y + 1} L${x + 2} ${y + 1} L${x + 2} ${y - 3} L${x + 5} ${y - 3}`,
    w: 0.8,
  },
  { d: `M${x - 3} ${y + 8} L${x - 3} ${y + 26} M${x + 3} ${y + 8} L${x + 3} ${y + 26}`, w: 1.1 },
];
// PIR (kubbe): alt orta (x,y)
const pir = (x: number, y: number): Cizgi[] => [
  { d: kutu(x - 16, y, 32, 8), w: 1.4, dolgu: true },
  {
    d: `M${x - 13} ${y} Q${x - 13} ${y - 22} ${x} ${y - 22} Q${x + 13} ${y - 22} ${x + 13} ${y} Z`,
    w: 1.5,
    dolgu: true,
  },
  { d: `M${x - 8} ${y - 6} L${x + 8} ${y - 6} M${x - 10} ${y - 12} L${x + 10} ${y - 12}`, w: 0.6 },
];
// LCD 16x2: sol üst (x,y)
const lcd = (x: number, y: number, yazi = true): Cizgi[] => [
  { d: kutu(x, y, 80, 36), w: 1.7, dolgu: true },
  { d: kutu(x + 6, y + 6, 68, 22), w: 1 },
  ...(yazi
    ? [{ d: `M${x + 10} ${y + 13} L${x + 46} ${y + 13} M${x + 10} ${y + 21} L${x + 38} ${y + 21}`, w: 1.4 }]
    : []),
];
// DHT11 (mavi kutu): sol üst (x,y)
const dht = (x: number, y: number): Cizgi[] => [
  { d: kutu(x, y, 20, 26), w: 1.5, dolgu: true },
  {
    d: `M${x + 4} ${y + 6} L${x + 16} ${y + 6} M${x + 4} ${y + 11} L${x + 16} ${y + 11} M${x + 4} ${y + 16} L${x + 16} ${y + 16}`,
    w: 0.7,
  },
  {
    d: `M${x + 5} ${y + 26} L${x + 5} ${y + 36} M${x + 10} ${y + 26} L${x + 10} ${y + 36} M${x + 15} ${y + 26} L${x + 15} ${y + 36}`,
    w: 1.1,
  },
];
// Su seviye sensörü (şerit): üst (x,y)
const suSensor = (x: number, y: number): Cizgi[] => [
  { d: kutu(x - 10, y, 20, 50), w: 1.4, dolgu: true },
  {
    d: Array.from({ length: 5 }, (_, i) => `M${x - 6} ${y + 16 + i * 6} L${x + 6} ${y + 16 + i * 6}`).join(" "),
    w: 0.8,
  },
];
// Mini pompa: merkez (x,y)
const pompa = (x: number, y: number): Cizgi[] => [
  { d: kutu(x - 12, y - 10, 24, 20), w: 1.5, dolgu: true },
  { d: `M${x} ${y - 10} L${x} ${y - 20}`, w: 3 },
];
// Fan: merkez (x,y)
const fan = (x: number, y: number, done = false): Cizgi[] => [
  { d: kutu(x - 20, y - 20, 40, 40), w: 1.6, dolgu: true },
  { d: daire(x, y, 16), w: 1 },
  {
    d: `M${x} ${y} Q${x - 4} ${y - 12} ${x + 6} ${y - 14} M${x} ${y} Q${x + 12} ${y - 2} ${x + 12} ${y + 8} M${x} ${y} Q${x - 4} ${y + 12} ${x - 12} ${y + 6}`,
    w: 1.2,
  },
  ...(done ? [yayOk(x, y, 24, 5.4, 6.4)] : []),
];
// TMP36 (yarım ay): üst orta (x,y)
const tmp = (x: number, y: number): Cizgi[] => [
  {
    d: `M${x - 9} ${y + 12} L${x - 9} ${y + 4} Q${x - 9} ${y - 4} ${x} ${y - 4} Q${x + 9} ${y - 4} ${x + 9} ${y + 4} L${x + 9} ${y + 12} Z`,
    w: 1.4,
    dolgu: true,
  },
  {
    d: `M${x - 5} ${y + 12} L${x - 5} ${y + 28} M${x} ${y + 12} L${x} ${y + 28} M${x + 5} ${y + 12} L${x + 5} ${y + 28}`,
    w: 1.1,
  },
];
// Diyot (yatay): sol (x,y)
const diyot = (x: number, y: number): Cizgi[] => [
  { d: `M${x} ${y} L${x + 12} ${y} M${x + 32} ${y} L${x + 44} ${y}`, w: 1.1 },
  { d: kutu(x + 12, y - 5, 20, 10), w: 1.4, dolgu: true },
  { d: `M${x + 27} ${y - 5} L${x + 27} ${y + 5}`, w: 2.4 },
];
// Reed + mıknatıs
const reed = (x: number, y: number): Cizgi => ({ d: kutu(x, y, 34, 10), w: 1.5, dolgu: true });
const miknatis = (x: number, y: number): Cizgi[] => [
  { d: kutu(x, y, 34, 10), w: 1.5, dolgu: true },
  { d: `M${x + 17} ${y} L${x + 17} ${y + 10}`, w: 0.8 },
];
// Havya: uç (x,y), sap sağ üste
const havya = (x: number, y: number): Cizgi[] => [
  { d: `M${x} ${y} L${x + 20} ${y - 14}`, w: 2 },
  { d: `M${x + 20} ${y - 17} L${x + 34} ${y - 27} L${x + 38} ${y - 21} L${x + 24} ${y - 11} Z`, w: 1.3, dolgu: true },
  { d: `M${x + 34} ${y - 30} L${x + 66} ${y - 52} L${x + 72} ${y - 44} L${x + 38} ${y - 21}`, w: 1.6, dolgu: true },
  kablo(x + 70, y - 48, x + 100, y - 30, 10),
];
// Yan keski: uç (x,y), sap sağa
const keski = (x: number, y: number): Cizgi[] => [
  { d: `M${x} ${y - 2} L${x + 14} ${y - 6} L${x + 14} ${y + 6} L${x} ${y + 2} Z`, w: 1.3, dolgu: true },
  {
    d: `M${x + 14} ${y - 6} Q${x + 34} ${y - 10} ${x + 54} ${y - 18} M${x + 14} ${y + 6} Q${x + 34} ${y + 10} ${x + 54} ${y + 18}`,
    w: 3,
  },
];
// RGB LED: gövde üst (x,y); dört bacak
const rgb = (x: number, y: number): Cizgi[] => [
  {
    d: `M${x - 7} ${y + 14} L${x - 7} ${y + 4} Q${x - 7} ${y - 5} ${x} ${y - 5} Q${x + 7} ${y - 5} ${x + 7} ${y + 4} L${x + 7} ${y + 14} Z`,
    w: 1.4,
    dolgu: true,
  },
  {
    d: `M${x - 5} ${y + 14} L${x - 5} ${y + 26} M${x - 2} ${y + 14} L${x - 2} ${y + 34} M${x + 2} ${y + 14} L${x + 2} ${y + 26} M${x + 5} ${y + 14} L${x + 5} ${y + 26}`,
    w: 1,
  },
];
// Nota (müzik): (x,y)
const nota = (x: number, y: number): Cizgi => ({
  d: daire(x, y, 3, 2.4) + ` M${x + 3} ${y} L${x + 3} ${y - 14} L${x + 9} ${y - 10}`,
  w: 1.2,
});
// Zar LED düzeni: merkez (x,y), değer n
const zar = (x: number, y: number, n = 5): Nokta[] => {
  const p: Record<number, [number, number][]> = {
    1: [[0, 0]],
    5: [
      [-1, -1],
      [1, -1],
      [0, 0],
      [-1, 1],
      [1, 1],
    ],
    6: [
      [-1, -1],
      [1, -1],
      [-1, 0],
      [1, 0],
      [-1, 1],
      [1, 1],
    ],
  };
  return (p[n] ?? p[5]).map(([a, b]) => [x + a * 14, y + b * 14, 4] as Nokta);
};
// Kapı (önden): sol üst (x,y)
const kapi = (x: number, y: number, acik = false): Cizgi[] => [
  { d: kutu(x, y, 70, 110), w: 1.8 },
  acik
    ? { d: `M${x + 70} ${y} L${x + 100} ${y + 10} L${x + 100} ${y + 100} L${x + 70} ${y + 110}`, w: 1.6, dolgu: true }
    : { d: kutu(x + 4, y + 4, 62, 102), w: 1.4, dolgu: true },
];

// ---------- 1. Toprak Nem Uyarıcısı (5) ----------
export const NEM_SENSORU_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...UNO(), ...nemSensor(180, 40), tel(1, 176, 40), tel(2, 180, 40, -30), tel(5, 184, 40, -40)] },
  {
    cizgiler: [
      ZEMIN,
      ...UNO(),
      ...buzzer(150, 50),
      ...led(196, 36),
      direnc(176, 76, 20),
      tel(3, 150, 60),
      tel(7, 176, 76, -10),
      ses(160, 50),
    ],
  },
  MONITOR([...nemSensor(200, 20), carpi(210, 40, 6), damla(200, 110)]),
  YUKLE([{ d: `M40 60 L80 60`, w: 1.8 }]),
  {
    cizgiler: [
      ZEMIN,
      ...saksi(120, 70, 90, 60),
      { d: `M80 84 Q120 80 160 84`, w: 0.8 },
      ...nemSensor(120, 40),
      { d: `M100 76 L140 76`, w: 0.9, kesik: true },
      carpi(160, 40, 6),
      damla(160, 30, 0.7),
    ],
  },
];

// ---------- 2. Akvaryum Termometresi (5) ----------
export const AKVARYUM_TERMOMETRE_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...laptop(80, 40), { d: kutu(92, 50, 46, 26), w: 1 }, ok(120, 20, 120, 40), onay(180, 40, 1.2)] },
  {
    cizgiler: [
      ZEMIN,
      ...UNO(),
      kablo(220, 40, 170, 60, 0, 2),
      { d: kutu(214, 30, 8, 20), w: 1.4, dolgu: true },
      tel(1, 170, 56),
      tel(2, 170, 60, -30),
      tel(4, 170, 64, -40),
      direnc(130, 40, 24),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...UNO(),
      ...lcd(140, 30, false),
      tel(1, 150, 66),
      tel(2, 160, 66, -30),
      tel(6, 170, 66, -20),
      tel(7, 180, 66, -14),
    ],
  },
  YUKLE([...tornavida(170, 50)]),
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(20, 50, 100, 80), w: 1.8 },
      { d: `M22 60 q8 -3 16 0 q8 3 16 0 q8 -3 16 0 q8 3 16 0 q8 -3 16 0`, w: 1 },
      kablo(150, 70, 60, 110, -40),
      ...lcd(150, 50),
      ...UNO(150, 96).slice(0, 2),
    ],
  },
];

// ---------- 3. Yanıp Sönen LED (4) ----------
export const LED_YANIP_SONME_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...laptop(30, 40), ...UNO(160, 80), kablo(110, 88, 150, 94, 12)] },
  {
    cizgiler: [
      ZEMIN,
      ...UNO(),
      ...led(170, 50),
      direnc(120, 50, 30),
      tel(4, 120, 50, -10),
      { d: `M150 50 L173 50 L173 82`, w: 1.1 },
      tel(0, 167, 76, -60),
    ],
  },
  YUKLE(),
  { cizgiler: [ZEMIN, ...led(80, 60, true), ...led(150, 60), ...saat(200, 50, 12), yayOk(115, 60, 20, 3.6, 5.8)] },
];

// ---------- 4. Butonla LED (4) ----------
export const BUTONLU_LED_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...UNO(), ...buton(170, 50), tel(1, 162, 50), tel(0, 178, 50, -50)] },
  {
    cizgiler: [
      ZEMIN,
      ...UNO(),
      ...buton(150, 30),
      ...led(190, 50),
      direnc(150, 70, 30),
      tel(4, 150, 70, -10),
      { d: `M180 70 L193 70 L193 82`, w: 1.1 },
    ],
  },
  YUKLE(),
  { cizgiler: [ZEMIN, ...buton(90, 90), ...parmak(90, 84), ...led(170, 70, true), ok(110, 80, 150, 80)] },
];

// ---------- 5. Pot ile LED Parlaklığı (4) ----------
export const POT_LED_PARLAKLIK_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...UNO(), ...pot(180, 40), tel(1, 172, 60), tel(4, 180, 60, -30), tel(7, 188, 60, -20)] },
  {
    cizgiler: [
      ZEMIN,
      ...UNO(),
      ...pot(140, 30),
      ...led(196, 50),
      direnc(150, 74, 30),
      tel(4, 150, 74, -10),
      { d: `M180 74 L199 74 L199 82`, w: 1.1 },
    ],
  },
  YUKLE(),
  MONITOR([...pot(200, 100), yayOk(200, 100, 18, 3.6, 5.4)]),
];

// ---------- 6. LDR Gece Lambası (4) ----------
export const LDR_GECE_LAMBASI_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      ...UNO(),
      ...ldr(170, 40),
      direnc(184, 74, 30),
      tel(1, 167, 66),
      tel(2, 173, 66, -30),
      tel(0, 214, 74, -50),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...UNO(),
      ...led(150, 40),
      ...led(180, 40),
      ...led(210, 40),
      tel(4, 153, 72, -10),
      { d: `M153 74 L213 74`, w: 1.1 },
    ],
  },
  MONITOR([
    { d: daire(30, 40, 8), w: 1.3, dolgu: true },
    { d: `M30 90 a10 10 0 1 0 8 -16 a8 8 0 1 1 -8 16 Z`, w: 1.3, dolgu: true },
  ]),
  {
    cizgiler: [
      ZEMIN,
      ...kavanoz(120, 134, 70, 80),
      ...led(110, 80, true),
      ...led(130, 90, true),
      { d: `M200 40 a12 12 0 1 0 10 -20 a10 10 0 1 1 -10 20 Z`, w: 1.3, dolgu: true },
    ],
  },
];

// ---------- 7. Pot ile Servo (4) ----------
export const SERVO_KONTROL_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...UNO(), ...servo(160, 50), tel(1, 170, 72), tel(2, 176, 72, -30), tel(4, 182, 72, -20)] },
  { cizgiler: [ZEMIN, ...UNO(), ...pot(180, 40), tel(1, 172, 60), tel(4, 180, 60, -30), tel(7, 188, 60, -20)] },
  YUKLE(),
  {
    cizgiler: [
      ZEMIN,
      ...pot(70, 80),
      yayOk(70, 80, 18, 3.6, 5.4),
      ...servo(140, 80, 60),
      yayOk(152, 78, 30, 3.2, 6.2),
      ok(96, 80, 126, 80),
    ],
  },
];

// ---------- 8. RGB LED Renk Geçişi (4) ----------
const PINPON = { d: daire(120, 70, 30), w: 1.6, dolgu: true };
export const RGB_LED_RENK_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      ...UNO(),
      ...rgb(190, 40),
      direnc(140, 40, 20),
      direnc(140, 54, 20),
      direnc(140, 68, 20),
      tel(3, 140, 40, -8),
      tel(4, 140, 54, -8),
      tel(5, 140, 68, -8),
    ],
  },
  YUKLE(),
  {
    cizgiler: [ZEMIN, ...rgb(70, 60), ...rgb(120, 60), ...rgb(170, 60), ok(84, 70, 104, 70), ok(134, 70, 154, 70)],
    noktalar: [
      [120, 58, 2],
      [170, 58, 1],
    ],
  },
  { cizgiler: [ZEMIN, PINPON, ...rgb(120, 92), { d: `M120 26 L120 18 M152 40 L160 34 M88 40 L80 34`, w: 1 }] },
];

// ---------- 9. Buzzer Melodi (4) ----------
export const BUZZER_MELODI_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...UNO(), ...buzzer(180, 46), tel(3, 174, 50), tel(0, 186, 50, -40)] },
  { cizgiler: [ZEMIN, ...UNO(), ...buzzer(150, 40), ...buton(200, 50), tel(1, 192, 50), tel(0, 208, 50, -50)] },
  {
    cizgiler: [
      ZEMIN,
      ...buzzer(110, 80),
      ses(122, 80),
      nota(170, 60),
      nota(196, 76),
      ...buton(60, 90),
      ...parmak(60, 84),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...laptop(20, 40),
      { d: `M120 40 L220 40 M120 50 L220 50 M120 60 L220 60 M120 70 L220 70 M120 80 L220 80`, w: 0.7 },
      nota(140, 66),
      nota(166, 56),
      nota(192, 72),
    ],
  },
];

// ---------- 10. Refleks Oyunu (4) ----------
export const REAKSIYON_OYUNU_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      ...UNO(),
      ...led(150, 40),
      ...buton(200, 50),
      tel(4, 153, 72, -10),
      tel(1, 192, 50),
      tel(0, 208, 50, -50),
    ],
  },
  MONITOR([{ d: `M100 46 L130 46`, w: 1.4 }]),
  {
    cizgiler: [
      ZEMIN,
      ...led(70, 50, true),
      ...buton(150, 90),
      ...parmak(150, 84),
      ...saat(200, 40, 12),
      ok(90, 70, 130, 86),
    ],
  },
  { cizgiler: [ZEMIN, ...led(70, 50), ...buton(150, 90), ...parmak(150, 84), carpi(200, 50, 10)] },
];

// ---------- 11. PIR Hareket Alarmı (4) ----------
export const HAREKET_ALARMI_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...UNO(), ...pir(180, 50), tel(1, 172, 58), tel(2, 180, 58, -30), tel(4, 188, 58, -20)] },
  { cizgiler: [ZEMIN, ...UNO(), ...buzzer(150, 44), ...led(196, 36), tel(3, 150, 54), tel(4, 193, 68, -10)] },
  {
    cizgiler: [
      ZEMIN,
      ...pir(110, 100),
      { d: `M80 60 Q110 40 140 60 M70 48 Q110 22 150 48`, w: 0.9, kesik: true },
      ...saat(190, 50, 14),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(70, 60, 100, 50), w: 1.6, dolgu: true },
      { d: daire(100, 85, 8) + " " + daire(140, 85, 8), w: 1.4, dolgu: true },
      ...tornavida(104, 82),
      yayOk(140, 85, 14, 3.6, 5.6),
    ],
  },
];

// ---------- 12. LCD Sıcaklık-Nem (4) ----------
export const LCD_SICAKLIK_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...laptop(80, 40), { d: kutu(92, 50, 46, 26), w: 1 }, ok(120, 20, 120, 40), onay(180, 40, 1.2)] },
  {
    cizgiler: [
      ZEMIN,
      ...UNO(),
      ...lcd(140, 30, false),
      tel(1, 150, 66),
      tel(2, 160, 66, -30),
      tel(6, 170, 66, -20),
      tel(7, 180, 66, -14),
    ],
  },
  { cizgiler: [ZEMIN, ...UNO(), ...dht(180, 30), tel(2, 190, 66, -30)] },
  { cizgiler: [ZEMIN, ...lcd(60, 50, false), ...tornavida(150, 60), carpi(100, 30, 6), ok(170, 100, 200, 100)] },
];

// ---------- 13. Su Taşma Alarmı (4) ----------
export const SU_SEVIYE_ALARMI_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...UNO(), ...suSensor(180, 30), tel(6, 174, 30), tel(0, 180, 30, -40), tel(2, 186, 30, -30)] },
  { cizgiler: [ZEMIN, ...UNO(), ...buzzer(180, 46), tel(7, 174, 50)] },
  MONITOR([...suSensor(30, 40), damla(30, 30)]),
  {
    cizgiler: [
      ZEMIN,
      ...suSensor(60, 84),
      { d: `M20 130 q8 -3 16 0 q8 3 16 0 q8 -3 16 0 q8 3 16 0`, w: 1 },
      { d: kutu(140, 20, 80, 10), w: 1.4, dolgu: true },
      ...UNO(150, 32).slice(0, 1),
      kablo(60, 84, 150, 40, -30),
    ],
  },
];

// ---------- 14. Otomatik Bitki Sulama (4) ----------
export const AKILLI_SAKSI_POMPA_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...UNO(), ...saksi(190, 70, 60, 50), ...nemSensor(190, 40), tel(2, 190, 40, -30)] },
  { cizgiler: [ZEMIN, ...UNO(), ...modul(140, 30), ...pompa(200, 110), tel(6, 150, 50), kablo(170, 40, 200, 100, 20)] },
  MONITOR([...saksi(30, 80, 40, 36), damla(30, 60)]),
  {
    cizgiler: [
      ZEMIN,
      ...sise(50, 134, 40, 80),
      ...saksi(170, 80, 60, 54),
      kablo(60, 110, 170, 70, -60),
      damla(170, 74),
      ...saat(210, 30, 10),
    ],
  },
];

// ---------- 15. Elektronik Zar (4) ----------
export const ELEKTRONIK_ZAR_ADIM: Cizim[] = [
  {
    cizgiler: [ZEMIN, ...UNO(), { d: kutu(150, 30, 60, 60), w: 1.6 }, kablo(60, 70, 150, 60, -20)],
    noktalar: zar(180, 60, 6),
  },
  { cizgiler: [ZEMIN, ...UNO(), ...buton(180, 50), tel(1, 172, 50), tel(0, 188, 50, -50)] },
  YUKLE(),
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(120, 40, 60, 60), w: 1.6, dolgu: true },
      ...buton(60, 90),
      ...parmak(60, 84),
      yayOk(150, 70, 40, 3.6, 5.6),
    ],
    noktalar: zar(150, 70, 5),
  },
];

// ---------- 16. Sıcaklığa Göre Fan (4) ----------
export const SICAKLIK_FAN_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...UNO(), ...tmp(180, 40), tel(1, 175, 68), tel(2, 180, 68, -30), tel(4, 185, 68, -20)] },
  { cizgiler: [ZEMIN, ...UNO(), ...modul(130, 30), ...fan(200, 50), tel(2, 140, 50), kablo(160, 40, 180, 50, 0)] },
  {
    cizgiler: [
      ZEMIN,
      ...fan(80, 70),
      ...diyot(130, 60),
      { d: `M100 60 L130 60 M100 80 L190 80 L190 60 L174 60`, w: 1.1 },
    ],
  },
  { cizgiler: [ZEMIN, ...termometre(60, 30, 70), ...fan(160, 70, true), ok(80, 70, 130, 70)] },
];

// ---------- 17. Manyetik Kapı Alarmı (4) ----------
export const KAPI_ALARMI_ADIM: Cizim[] = [
  { cizgiler: [ZEMIN, ...UNO(), reed(160, 50), tel(1, 160, 55), tel(0, 194, 55, -40)] },
  { cizgiler: [ZEMIN, ...UNO(), ...buzzer(180, 46), tel(7, 174, 50)] },
  {
    cizgiler: [
      ZEMIN,
      ...kapi(60, 20),
      reed(130, 60),
      ...miknatis(96, 60),
      { d: `M130 76 L130 84 M126 80 L134 80`, w: 0.9 },
    ],
  },
  { cizgiler: [ZEMIN, ...kapi(40, 20, true), reed(110, 60), ...buzzer(190, 60), ses(202, 60)] },
];

// ---------- 18. İlk Lehim (5) ----------
const PCB: Cizgi[] = [
  { d: kutu(40, 80, 160, 40), w: 1.7, dolgu: true },
  { d: daire(46, 114, 1.6) + " " + daire(194, 114, 1.6), w: 0.9 },
];
export const LEHIM_BASLANGIC_ADIM: Cizim[] = [
  {
    cizgiler: [
      ZEMIN,
      { d: kutu(30, 100, 60, 30), w: 1.6, dolgu: true },
      { d: daire(60, 115, 8), w: 1.3 },
      ...havya(120, 110),
      ...termometre(200, 40, 50),
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...PCB,
      direnc(70, 92, 30),
      direnc(120, 92, 30),
      ...led(170, 66),
      { d: `M70 120 L64 126 M100 120 L106 126`, w: 1 },
    ],
  },
  {
    cizgiler: [
      ZEMIN,
      ...PCB,
      direnc(70, 92, 30),
      ...havya(104, 92),
      { d: `M90 60 Q96 76 98 90`, w: 1.4 },
      ...saat(200, 40, 10),
    ],
  },
  {
    cizgiler: [ZEMIN, ...PCB, direnc(70, 92, 30), { d: `M80 120 L80 132 M96 120 L96 132`, w: 1.1 }, ...keski(100, 126)],
  },
  {
    cizgiler: [
      ZEMIN,
      ...PCB,
      direnc(70, 92, 30),
      ...led(170, 66, true),
      { d: kutu(110, 30, 40, 20), w: 1.4, dolgu: true },
      onay(210, 40, 1.2),
    ],
  },
];
