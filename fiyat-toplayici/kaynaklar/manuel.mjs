// Kaynak 1: Elle girilen fiyatlar (veri/manuel.csv)
// Biçim: malzemeId;magaza;fiyat;url;tarih
// Örnek: aa1;Örnek Hırdavat;84,90;https://...;2026-11-03
// Fiyatı sen veya bir editör mağaza sitesinde görüp girer. Her zaman çalışır, API gerekmez.
import { existsSync, readFileSync } from "node:fs";

export const ad = "manuel";

export async function topla({ malzemeler, kok }) {
  const yol = new URL("veri/manuel.csv", kok);
  if (!existsSync(yol)) return [];
  const ids = new Set(malzemeler.map((m) => m.id));
  return readFileSync(yol, "utf8")
    .split(/\r?\n/)
    .filter((s) => s.trim() && !s.startsWith("#") && !s.startsWith("malzemeId"))
    .map((s) => {
      const [malzemeId, magaza, fiyat, url, tarih] = s.split(";").map((x) => x.trim());
      return {
        malzemeId,
        magaza,
        fiyat: Number(fiyat.replace(/\./g, "").replace(",", ".")),
        url,
        guncelleme: tarih || null,
      };
    })
    .filter((t) => ids.has(t.malzemeId) && t.fiyat > 0 && t.url?.startsWith("http"));
}
