// Uygulamanın renk, boşluk ve yazı ayarları tek yerde.
export const renk = {
  arkaPlan: "#F6F7F9",
  kart: "#FFFFFF",
  yazi: "#111827",
  yaziIkincil: "#6B7280",
  cizgi: "#E5E7EB",
  ana: "#E8590C",        // marka turuncusu
  anaAcik: "#FFF1E8",
  basari: "#16A34A",
  basariAcik: "#DCFCE7",
  uyari: "#D97706",
  uyariAcik: "#FEF3C7",
  tehlike: "#DC2626",
  tehlikeAcik: "#FEE2E2",
};

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

export const tl = (n: number) =>
  n.toLocaleString("tr-TR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " ₺";
