// Dil altyapısı (bağımlılıksız; veri dosyaları da güvenle içe aktarabilir).
// Arayüz metinleri Türkçe kaynak metnin kendisiyle anahtarlanır: t("Atölyem") → "My Workshop".
// Sözlükte olmayan metin Türkçe kalır (__tests__/i18n.test.ts kaynak koddaki her t("...") için çeviri arar).
// Proje içeriği (adımlar, malzemeler…) ayrı katmanda: src/data/ceviri.ts.
import { EN } from "./i18n/en";

export type Dil = "tr" | "en";
export const DILLER: Dil[] = ["tr", "en"];

let aktif: Dil = "tr";
export const aktifDil = () => aktif;
export const dilAyarla = (d: Dil) => {
  aktif = d;
};

// Sayı/tarih biçimi ve sıralama için yerel ayar
export const yerel = () => (aktif === "en" ? "en-US" : "tr-TR");

type Param = Record<string, string | number>;

// "{n} proje tamamlandı" + { n: 3 } → "3 projects completed"
export function t(tr: string, p?: Param): string {
  const sablon = aktif === "en" ? (EN[tr] ?? tr) : tr;
  return p ? sablon.replace(/\{(\w+)\}/g, (_, k: string) => (k in p ? String(p[k]) : `{${k}}`)) : sablon;
}

// Tekil/çoğul: tc(n, "{n} proje", "{n} projects") gibi EN'de çoğulu ayrı yazmak için
// Türkçe anahtar tek, İngilizce karşılığı "tekil|çoğul" biçiminde: "{n} project|{n} projects"
export function tn(tr: string, n: number, p?: Param): string {
  const metin = t(tr, { n, ...p });
  if (aktif !== "en" || !metin.includes("|")) return metin;
  const [tek, cok] = metin.split("|");
  return n === 1 ? tek : cok;
}

// Ondalık ayırıcı dahil sayı yazımı
export const sayiDil = (n: number, ond = 0) =>
  n.toLocaleString(yerel(), { minimumFractionDigits: ond, maximumFractionDigits: ond });

export const tarihDil = (iso: string | number | Date, uzun = false) =>
  new Date(iso).toLocaleDateString(yerel(), uzun ? { day: "numeric", month: "long", year: "numeric" } : undefined);

// Metin içindeki Türkçe süre birimlerini çevirir: "2–3 saat" → "2–3 hours", "45 dk" → "45 min"
const SURE_EN: [RegExp, string][] = [
  [/(\d)\s*dk\b/g, "$1 min"],
  [/(\d)\s*dakika\b/g, "$1 min"],
  [/(\d)\s*saat\b/g, "$1 h"],
  [/(\d)\s*gün/g, "$1 days"],
  [/(\d)\s*hafta\b/g, "$1 weeks"],
  [/(\d)\s*ay\b/g, "$1 months"],
  [/(\d)\s*sn\b/g, "$1 s"],
  [/(\d) gece\b/g, "$1 night"],
  [/\(kuruma dahil\)/g, "(incl. drying)"],
  [/\(baskı dahil\)/g, "(incl. printing)"],
  [/Adım başına/g, "Per step"],
  [/tam kürlenme/g, "full cure"],
  [/kurulum/g, "setup"],
  [/pratik/g, "practice"],
  [/döngü/g, "cycle"],
  [/yağ/g, "oiling"],
  [/takip/g, "follow-up"],
  [/soğuma/g, "cooling"],
  [/donma/g, "setting"],
  [/fırın/g, "baking"],
  [/baskı/g, "printing"],
  [/pişirim/g, "firing"],
  [/epoksi/g, "epoxy"],
  [/kuruma/g, "drying"],
  [/kür/g, "curing"],
  [/büyüme/g, "growing"],
];
export function sureDil(s: string | undefined): string {
  if (!s || aktif !== "en") return s ?? "";
  let r = s.replace(/(\d),(\d)/g, "$1.$2");
  for (const [a, b] of SURE_EN) r = r.replace(a, b);
  return r
    .replace(/\b1 days\b/g, "1 day")
    .replace(/\b1 weeks\b/g, "1 week")
    .replace(/\b1 months\b/g, "1 month");
}

// Yaş etiketi: "8+ yaş (gözetimle)" → "Ages 8+ (supervised)", "10+ yaş (yetişkinle)" → "Ages 10+ (with an adult)"
export function yasDil(s: string | undefined): string {
  if (!s || aktif !== "en") return s ?? "";
  return s
    .replace(/(\d+)\+\s*yaş/, "Ages $1+")
    .replace("(gözetimle)", "(supervised)")
    .replace("(yetişkinle)", "(with an adult)")
    .replace("yetişkin", "adult");
}
