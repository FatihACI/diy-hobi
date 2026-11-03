// Ürün başlığı ↔ malzeme eşleştirme kuralları.
// Yanlış ürünün "en ucuz" görünmesini önlemek için katı davranır:
// aranan kelimelerin HEPSİ başlıkta geçmeli, hariç kelimelerin HİÇBİRİ geçmemeli,
// fiyat (varsa) min–max aralığında olmalı.

export const normal = (s) =>
  s.toLocaleLowerCase("tr-TR")
    .replace(/[ıİ]/g, "i").replace(/ş/g, "s").replace(/ğ/g, "g")
    .replace(/ü/g, "u").replace(/ö/g, "o").replace(/ç/g, "c")
    .replace(/[^a-z0-9ø×,.]+/g, " ").trim();

// Malzeme adından varsayılan arama kelimeleri: parantez ve ölçüleri at
export function varsayilanArama(ad) {
  return ad.replace(/\(.*?\)/g, "").replace(/\d+([.,]\d+)?\s*(×\s*\d+([.,]\d+)?)*\s*(mm|cm|m|g|kg|ml|l|w|v|ω|kω)?\b/gi, "").trim();
}

export function kuralOlustur(malzeme, ozel = {}) {
  const arama = ozel.arama ?? varsayilanArama(malzeme.ad);
  return {
    arama,
    zorunlu: (ozel.zorunlu ?? normal(arama).split(" ")).filter((k) => k.length > 1).map(normal),
    haric: (ozel.haric ?? []).map(normal),
    min: ozel.min ?? 0,
    max: ozel.max ?? Infinity,
  };
}

export function eslesiyorMu(baslik, fiyat, kural) {
  const b = normal(baslik);
  if (!kural.zorunlu.every((k) => b.includes(k))) return false;
  if (kural.haric.some((k) => b.includes(k))) return false;
  if (!(fiyat >= kural.min && fiyat <= kural.max)) return false;
  return true;
}
