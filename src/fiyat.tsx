// Fiyat servisi: fiyat toplayıcının ürettiği fiyatlar.json dosyasını internetten okur,
// telefonda önbelleğe alır (internet yokken de son fiyatlar görünür) ve ekranlara dağıtır.
//
// Adres .env dosyasındaki EXPO_PUBLIC_FIYAT_URL ile verilir. Örnek:
//   EXPO_PUBLIC_FIYAT_URL=https://raw.githubusercontent.com/KULLANICI/diy-hobi/main/fiyat-toplayici/cikti/fiyatlar.json
// Adres yoksa uygulama "Fiyat yakında" gösterir, çökmez.
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Linking } from "react-native";
import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from "react";
import { Fiyat, Malzeme, Proje } from "./data/types";

const ADRES = process.env.EXPO_PUBLIC_FIYAT_URL;
const ONBELLEK = "evde-hobi-fiyatlar-v1";
const TAZELIK_MS = 6 * 60 * 60 * 1000; // 6 saatten eskiyse yeniden indir
const ESKI_MS = 7 * 24 * 60 * 60 * 1000; // 7 günden eski fiyatlarda uyarı göster

type Dosya = { surum: number; guncelleme: string; fiyatlar: Record<string, Fiyat[]> };
type Kayit = { dosya: Dosya; indirilme: number; eski?: boolean };

// Fiyatın gerçek tarihi: dosyanın yazılma zamanı değil, tekliflerin kontrol edildiği en son gün.
// (Toplayıcı her gün çalışır; elle girilmiş eski fiyatlar "bugün güncellendi" görünmemeli.)
export function fiyatTarihi(d: Dosya): string {
  let son = "";
  for (const l of Object.values(d.fiyatlar)) for (const f of l) if (f.guncelleme > son) son = f.guncelleme;
  return son || d.guncelleme;
}

// Fiyat tarihi 7 günden eskiyse işaretle (saat okuması render dışında yapılır)
const eskiIsaretle = (k: Kayit): Kayit => ({
  ...k,
  eski: Date.now() - new Date(fiyatTarihi(k.dosya)).getTime() > ESKI_MS,
});
export type FiyatDurum = "kapali" | "yukleniyor" | "hazir" | "hata";

type Api = {
  durum: FiyatDurum;
  guncelleme: string | null;
  eskiMi: boolean;
  teklifler: (m: Malzeme) => Fiyat[];
  enUcuz: (m: Malzeme) => Fiyat | undefined;
  // toplam: yalnızca sarf malzemeler (aletler çoğu evde var; 3D yazıcı gibi kalemler maliyeti şişirmesin)
  maliyet: (p: Proje) => { toplam: number; fiyatliSayi: number; tumu: number; alet: number };
  yenile: () => Promise<void>;
};

const Ctx = createContext<Api | null>(null);

// Gelen dosyanın biçimini doğrula; bozuk veri uygulamayı bozmasın
function gecerliMi(x: any): x is Dosya {
  return (
    x &&
    typeof x.guncelleme === "string" &&
    x.fiyatlar &&
    typeof x.fiyatlar === "object" &&
    Object.values(x.fiyatlar).every(
      (l: any) =>
        Array.isArray(l) &&
        l.every(
          (f: any) =>
            typeof f.fiyat === "number" && f.fiyat > 0 && typeof f.url === "string" && /^https:\/\//.test(f.url),
        ),
    )
  );
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
      setKayit(eskiIsaretle(yeni));
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
        if (s) {
          k = JSON.parse(s);
          if (k && gecerliMi(k.dosya)) {
            setKayit(eskiIsaretle(k));
            setDurum("hazir");
          } else k = null;
        }
      } catch {}
      if (!k || Date.now() - k.indirilme > TAZELIK_MS) await indir();
    })();
  }, [indir]);

  // Önce katalog kimliği (surum 2), yoksa eski malzeme kimliği (surum 1 dosyası)
  const teklifler = (m: Malzeme) => (m.kid && kayit?.dosya.fiyatlar[m.kid]) || kayit?.dosya.fiyatlar[m.id] || [];
  const enUcuz = (m: Malzeme) => [...teklifler(m)].sort((a, b) => a.fiyat - b.fiyat)[0];
  const guncelleme = kayit ? fiyatTarihi(kayit.dosya) : null;

  const api: Api = {
    durum,
    guncelleme,
    eskiMi: !!kayit?.eski,
    teklifler,
    enUcuz,
    maliyet: (p) => {
      const sarf = p.malzemeler.filter((m) => !m.arac);
      const fiyatli = sarf.filter((m) => enUcuz(m));
      return {
        toplam: fiyatli.reduce((t, m) => t + enUcuz(m)!.fiyat, 0),
        fiyatliSayi: fiyatli.length,
        tumu: sarf.length,
        alet: p.malzemeler.filter((m) => m.arac).reduce((t, m) => t + (enUcuz(m)?.fiyat ?? 0), 0),
      };
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

// Bağlantı açılamazsa (tarayıcı yok, bozuk adres) uygulama yakalanmamış hata vermesin
export const linkAc = (url: string) => {
  Linking.openURL(url).catch(() => {});
};

export const tarihYaz = (iso: string) =>
  new Date(iso).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" });
