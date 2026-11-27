// Dil altyapısı: kaynak koddaki her t("…")/tn("…") ve veri dosyalarındaki arayüz metinlerinin İngilizcesi var
import { afterAll, describe, expect, test } from "@jest/globals";
import { ARACLAR } from "../src/data/araclar";
import { GRUPLAR } from "../src/data/kategoriler";
import { ROZETLER, SEVIYELER } from "../src/data/rozet";
import { SURE_SINIFLARI } from "../src/data/sure";
import { dilAyarla, sureDil, t, tn, yasDil } from "../src/i18n";
import { EN } from "../src/i18n/en";

declare const require: (m: string) => any;
const fs = require("fs");
const yol = require("path");

function dosyalar(kok: string): string[] {
  return fs.readdirSync(kok, { withFileTypes: true }).flatMap((d: any) => {
    const p = yol.join(kok, d.name);
    if (d.isDirectory()) return d.name === "cizim" || d.name === "en" ? [] : dosyalar(p);
    return /\.tsx?$/.test(d.name) ? [p] : [];
  });
}
const KAYNAK = [...dosyalar(`${process.cwd()}/src`), `${process.cwd()}/App.tsx`].map((p) => [
  p,
  fs.readFileSync(p, "utf8"),
]);

// uyari.tsx AsyncStorage içe aktarıyor; maddeler kaynaktan okunur
const UYARI_MADDELERI = [
  ...fs
    .readFileSync(`${process.cwd()}/src/uyari.tsx`, "utf8")
    .split("UYARI_MADDELERI = [")[1]
    .split("];")[0]
    .matchAll(/"([^"]+)"/g),
].map((m) => m[1] as string);

const eksik = (liste: string[]) => [...new Set(liste)].filter((s) => /\p{L}/u.test(s) && !(s in EN));

describe("arayüz çevirisi", () => {
  test("kaynak koddaki her t()/tn() anahtarının İngilizcesi var", () => {
    const anahtarlar: string[] = [];
    for (const [, s] of KAYNAK)
      for (const m of s.matchAll(/\btn?\(\s*"((?:[^"\\]|\\.)*)"/g)) anahtarlar.push(JSON.parse(`"${m[1]}"`));
    expect(anahtarlar.length).toBeGreaterThan(150);
    expect(eksik(anahtarlar)).toEqual([]);
  });

  test("ekran sabitlerindeki etiketlerin İngilizcesi var", () => {
    const anahtarlar: string[] = [];
    for (const [p, s] of KAYNAK) {
      if (!/screens|App/.test(p)) continue;
      for (const m of s.matchAll(/\b(?:etiket|alt): "([^"]+)"/g)) anahtarlar.push(m[1]);
      for (const m of s.matchAll(/const (?:SORULAR|BASLIK|SIRALAR|ZORLUKLAR) = \[([^\]]+)\]/g))
        for (const x of m[1].matchAll(/"([^"]+)"/g)) anahtarlar.push(x[1]);
    }
    expect(eksik(anahtarlar)).toEqual([]);
  });

  test("veri dosyalarındaki arayüz metinlerinin İngilizcesi var", () => {
    const a: string[] = [...GRUPLAR, ...SURE_SINIFLARI, ...UYARI_MADDELERI, "süre", "ilgi alanı", "deneyim"];
    for (const r of ROZETLER) a.push(r.ad, r.aciklama);
    for (const l of SEVIYELER) a.push(l.ad);
    for (const x of ARACLAR) {
      a.push(x.ad, x.ozet, x.not);
      for (const f of x.alanlar) {
        a.push(f.etiket);
        if (f.tip === "sayi" && f.birim && /[a-zçğıöşü]{3,}/i.test(f.birim)) a.push(f.birim);
        if (f.tip === "secim") a.push(...f.secenekler.map((o) => o.etiket).filter((e) => /[a-z]/i.test(e)));
      }
    }
    const kaynak = fs.readFileSync(`${process.cwd()}/src/data/araclar.ts`, "utf8");
    for (const m of kaynak.matchAll(/(?:etiket|uyari):\s*"([^"]+)"/g)) a.push(m[1]);
    for (const m of kaynak.matchAll(/\?\s*"([^"]+)"\s*:\s*undefined/g)) a.push(m[1]);
    expect(eksik(a)).toEqual([]);
  });

  test("şablon parametreleri İngilizcede de var", () => {
    const hatali = Object.entries(EN).filter(([tr, en]) => {
      const p = (s: string) =>
        [...s.matchAll(/\{(\w+)\}/g)]
          .map((m) => m[1])
          .sort()
          .join();
      return en.split("|").some((parca) => p(parca) !== p(tr));
    });
    expect(hatali).toEqual([]);
  });
});

describe("dil yardımcıları", () => {
  afterAll(() => dilAyarla("tr"));
  test("Türkçede metin aynen döner", () => {
    dilAyarla("tr");
    expect(t("Atölyem")).toBe("Atölyem");
    expect(tn("{n} proje", 3)).toBe("3 proje");
    expect(sureDil("2–3 saat")).toBe("2–3 saat");
  });
  test("İngilizcede çeviri, çoğul ve birimler", () => {
    dilAyarla("en");
    expect(t("Atölyem")).toBe("My Workshop");
    expect(tn("{n} proje", 1)).toBe("1 project");
    expect(tn("{n} proje", 3)).toBe("3 projects");
    expect(sureDil("2–3 saat")).toBe("2–3 h");
    expect(sureDil("1 gün + 4–6 hafta döngü")).toBe("1 day + 4–6 weeks cycle");
    expect(sureDil("1,5 saat + fırın")).toBe("1.5 h + baking");
    expect(yasDil("8+ yaş (gözetimle)")).toBe("Ages 8+ (supervised)");
    expect(t("Olmayan metin")).toBe("Olmayan metin");
  });
});
