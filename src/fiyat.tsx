// Fiyat servisi: fiyat toplayıcının ürettiği fiyatlar.json dosyasını internetten okur,
// telefonda önbelleğe alır (internet yokken de son fiyatlar görünür) ve ekranlara dağıtır.
//
// Adres .env dosyasındaki EXPO_PUBLIC_FIYAT_URL ile verilir. Örnek:
//   EXPO_PUBLIC_FIYAT_URL=https://raw.githubusercontent.com/KULLANICI/diy-hobi/main/fiyat-toplayici/cikti/fiyatlar.json
// Adres yoksa uygulama "Fiyat yakında" gösterir, çökmez.
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from "react";
import { Fiyat, Malzeme, Proje } from "./data/types";

const ADRES = process.env.EXPO_PUBLIC_FIYAT_URL;
const ONBELLEK = "evde-hobi-fiyatlar-v1";
const TAZELIK_MS = 6 * 60 * 60 * 1000;   // 6 saatten eskiyse yeniden indir
const ESKI_MS = 7 * 24 * 60 * 60 * 1000; // 7 günden eski fiyatlarda uyarı göster

type Dosya = { surum: number; guncelleme: string; fiyatlar: Record<string, Fiyat[]> };
type Kayit = { dosya: Dosya; indirilme: number };
export type FiyatDurum = "kapali" | "yukleniyor" | "hazir" | "hata";

type Api = {
  durum: FiyatDurum;
  guncelleme: string | null;
  eskiMi: boolean;
  teklifler: (m: Malzeme) => Fiyat[];
  enUcuz: (m: Malzeme) => Fiyat | undefined;
  maliyet: (p: Proje) => { toplam: number; fiyatliSayi: number; tumu: number };
  yenile: () => Promise<void>;
};

const Ctx = createContext<Api | null>(null);

// Gelen dosyanın biçimini doğrula; bozuk veri uygulamayı bozmasın
function gecerliMi(x: any): x is Dosya {
  return x && typeof x.guncelleme === "string" && x.fiyatlar && typeof x.fiyatlar === "object" &&
    Object.values(x.fiyatlar).every((l: any) => Array.isArray(l) &&
      l.every((f: any) => typeof f.fiyat === "number" && f.fiyat > 0 && typeof f.url === "string" && /^https:\/\//.test(f.url)));
}

export function FiyatProvider({ children }: { children: ReactNode }) {
  const [kayit, setKayit] = useState<Kayit | null>(null);
  const [durum, setDurum] = useState<FiyatDurum>(ADRES ? "yukleniyor" : "kapali");

  const indir = useCallback(async () => {
    if (!ADRES) return;
    setDurum("yukleniyor");
    const iptal = new AbortController();
    const zaman = setTimeout(() => iptal.abort(), 10000);
    try {
      const r = await fetch(ADRES, { signal: iptal.signal, headers: { "Cache-Control": "no-cache" } });
      const j = await r.json();
      if (!gecerliMi(j)) throw new Error("geçersiz fiyat dosyası");
      const yeni = { dosya: j, indirilme: Date.now() };
      setKayit(yeni);
      setDurum("hazir");
      AsyncStorage.setItem(ONBELLEK, JSON.stringify(yeni)).catch(() => {});
    } catch {
      setDurum((d) => (d === "hazir" ? d : "hata")); // önbellek varsa onu göstermeye devam et
    } finally {
      clearTimeout(zaman);
    }
  }, []);

  useEffect(() => {
    (async () => {
      let k: Kayit | null = null;
      try {
        const s = await AsyncStorage.getItem(ONBELLEK);
        if (s) { k = JSON.parse(s); if (k && gecerliMi(k.dosya)) { setKayit(k); setDurum("hazir"); } else k = null; }
      } catch {}
      if (!k || Date.now() - k.indirilme > TAZELIK_MS) await indir();
    })();
  }, [indir]);

  const teklifler = (m: Malzeme) => kayit?.dosya.fiyatlar[m.id] ?? [];
  const enUcuz = (m: Malzeme) => [...teklifler(m)].sort((a, b) => a.fiyat - b.fiyat)[0];
  const guncelleme = kayit?.dosya.guncelleme ?? null;

  const api: Api = {
    durum,
    guncelleme,
    eskiMi: !!guncelleme && Date.now() - new Date(guncelleme).getTime() > ESKI_MS,
    teklifler,
    enUcuz,
    maliyet: (p) => {
      const fiyatli = p.malzemeler.filter((m) => enUcuz(m));
      return { toplam: fiyatli.reduce((t, m) => t + enUcuz(m)!.fiyat, 0), fiyatliSayi: fiyatli.length, tumu: p.malzemeler.length };
    },
    yenile: indir,
  };

  return <Ctx.Provider value={api}>{children}</Ctx.Provider>;
}

export const useFiyat = () => {
  const c = useContext(Ctx);
  if (!c) throw new Error("FiyatProvider eksik");
  return c;
};

export const tarihYaz = (iso: string) =>
  new Date(iso).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" });
