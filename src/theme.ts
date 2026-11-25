// Uygulamanın renk, boşluk ve yazı ayarları tek yerde.
// Açık/koyu tema: renk, yazi, golge ve zorlukRenk nesneleri YERİNDE güncellenir (temaUygula);
// ekran stilleri stil(() => ({...})) ile yazılır ve tema değişince kendiliğinden yeniden üretilir.
import { StyleSheet } from "react-native";

const ACIK = {
  arkaPlan: "#F6F7F9",
  kart: "#FFFFFF",
  yuzey2: "#E9EBEF", // sekme zemini, nötr rozet zemini
  yazi: "#111827",
  yaziIkincil: "#6B7280",
  cizgi: "#E5E7EB",
  ana: "#6D28D9", // marka moru (logo)
  anaAcik: "#F1EBFE",
  vurgu: "#047857", // logo zümrüdü: yalnız küçük vurgular (Seçkin rozeti)
  vurguAcik: "#D1FAE5",
  basari: "#16A34A",
  basariAcik: "#DCFCE7",
  uyari: "#D97706",
  uyariAcik: "#FEF3C7",
  tehlike: "#DC2626",
  tehlikeAcik: "#FEE2E2",
  bilgi: "#2563EB", // mağaza bağlantısı
  kagitCizgi: "#EDE7DA", // karakalem kapak kenarı
};

const KOYU: typeof ACIK = {
  arkaPlan: "#0F1115",
  kart: "#1A1D23",
  yuzey2: "#262A32",
  yazi: "#F3F4F6",
  yaziIkincil: "#9CA3AF",
  cizgi: "#2E333C",
  ana: "#8B5CF6", // beyaz yazı okunur kalsın diye orta ton
  anaAcik: "#2A2145",
  vurgu: "#34D399",
  vurguAcik: "#0E3326",
  basari: "#22C55E",
  basariAcik: "#10301F",
  uyari: "#FBBF24",
  uyariAcik: "#3A2C0E",
  tehlike: "#F87171",
  tehlikeAcik: "#3B1717",
  bilgi: "#60A5FA",
  kagitCizgi: "#3A352C",
};

export const renk = { ...ACIK };

export const bosluk = { xs: 4, s: 8, m: 12, l: 16, xl: 24, xxl: 32 };
export const kose = { s: 8, m: 12, l: 16, xl: 24 };

export const yazi = {
  dev: { fontSize: 28, fontWeight: "800" as const, color: renk.yazi, letterSpacing: -0.5 },
  baslik: { fontSize: 20, fontWeight: "700" as const, color: renk.yazi },
  altBaslik: { fontSize: 16, fontWeight: "600" as const, color: renk.yazi },
  govde: { fontSize: 15, color: renk.yazi, lineHeight: 22 },
  kucuk: { fontSize: 13, color: renk.yaziIkincil },
};

export const golge = {
  shadowColor: "#000",
  shadowOpacity: 0.06,
  shadowRadius: 10,
  shadowOffset: { width: 0, height: 4 },
  elevation: 2,
};

export const zorlukRenk = {
  Kolay: { fg: renk.basari, bg: renk.basariAcik },
  Orta: { fg: renk.uyari, bg: renk.uyariAcik },
  Zor: { fg: renk.tehlike, bg: renk.tehlikeAcik },
};

export type TemaTercihi = "sistem" | "acik" | "koyu";
let koyuMu = false;
let surum = 0;
export const temaKoyuMu = () => koyuMu;
export const temaSurumu = () => surum;

// Temayı değiştir: paylaşılan nesneleri yerinde günceller, stil önbelleklerini geçersiz kılar.
export function temaUygula(koyu: boolean) {
  if (koyu === koyuMu) return;
  koyuMu = koyu;
  surum++;
  Object.assign(renk, koyu ? KOYU : ACIK);
  yazi.dev.color = renk.yazi;
  yazi.baslik.color = renk.yazi;
  yazi.altBaslik.color = renk.yazi;
  yazi.govde.color = renk.yazi;
  yazi.kucuk.color = renk.yaziIkincil;
  golge.shadowOpacity = koyu ? 0.35 : 0.06;
  zorlukRenk.Kolay = { fg: renk.basari, bg: renk.basariAcik };
  zorlukRenk.Orta = { fg: renk.uyari, bg: renk.uyariAcik };
  zorlukRenk.Zor = { fg: renk.tehlike, bg: renk.tehlikeAcik };
}

// Temaya duyarlı StyleSheet: fabrika her tema değişiminde bir kez yeniden çalışır.
type Stiller = Parameters<typeof StyleSheet.create>[0];
export function stil<T extends Stiller>(fabrika: () => T & Stiller): Readonly<T> {
  let onbellek: Readonly<T> | null = null;
  let s = -1;
  return new Proxy({} as Readonly<T>, {
    get(_, anahtar) {
      if (s !== surum || !onbellek) {
        onbellek = StyleSheet.create(fabrika());
        s = surum;
      }
      return (onbellek as any)[anahtar];
    },
  });
}

export const tl = (n: number) =>
  n.toLocaleString("tr-TR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " ₺";
