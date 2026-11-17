// Türkçe metin yardımcıları (bağımlılıksız; veri dosyaları da güvenle içe aktarabilir)

// Türkçe harfleri katlar: "Kuş evi" → "kus evi", "ÇİÇEK" → "cicek".
const HARF: Record<string, string> = { ç: "c", ğ: "g", ı: "i", ö: "o", ş: "s", ü: "u", â: "a", î: "i", û: "u" };
export const katla = (s: string) =>
  s
    .toLocaleLowerCase("tr-TR")
    .replace(/[çğıöşüâîû]/g, (h) => HARF[h])
    .replace(/\s+/g, " ")
    .trim();

// URL/anahtar dostu kısa ad: "Ahşap tutkalı (D3)" → "ahsap-tutkali-d3"
export const slug = (s: string) =>
  katla(s)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
