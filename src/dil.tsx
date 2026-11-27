// Dil tercihi (Sistem / Türkçe / English): telefonda saklanır.
// "Sistem" telefonun diline uyar (Türkçe değilse İngilizce). Dil değişince proje içeriği çevrilir
// ve alt ağaç yeniden kurulur (key) — tema ile aynı yöntem.
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getLocales } from "expo-localization";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { icerikDiliUygula } from "./data/ceviri";
import { aktifDil, Dil, dilAyarla } from "./i18n";

const ANAHTAR = "protyp-dil-v1";
export type DilTercihi = "sistem" | Dil;
const TERCIHLER: DilTercihi[] = ["sistem", "tr", "en"];

export function sistemDili(): Dil {
  try {
    return getLocales()[0]?.languageCode === "tr" ? "tr" : "en";
  } catch {
    return "tr";
  }
}

// Uygulama genelinde dili değiştiren tek yer (testler de bunu kullanır)
export function diliUygula(d: Dil) {
  if (d === aktifDil()) return;
  dilAyarla(d);
  icerikDiliUygula(d);
}

type Api = { tercih: DilTercihi; tercihDegistir: (t: DilTercihi) => void; dil: Dil };
const Ctx = createContext<Api | null>(null);

export function DilProvider({ children }: { children: ReactNode }) {
  const [tercih, setTercih] = useState<DilTercihi>("sistem");
  const [yuklendi, setYuklendi] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem(ANAHTAR)
      .then((s) => {
        if (s && TERCIHLER.includes(s as DilTercihi)) setTercih(s as DilTercihi);
      })
      .catch(() => {})
      .finally(() => setYuklendi(true));
  }, []);

  const dil: Dil = tercih === "sistem" ? sistemDili() : tercih;
  // Paylaşılan veriyi çocuklar çizilmeden önce güncelle (render sırasında, idempotent)
  diliUygula(dil);

  const tercihDegistir = (t: DilTercihi) => {
    setTercih(t);
    AsyncStorage.setItem(ANAHTAR, t).catch(() => {});
  };

  if (!yuklendi) return null;
  return (
    <Ctx.Provider value={{ tercih, tercihDegistir, dil }}>
      <DilKok key={dil}>{children}</DilKok>
    </Ctx.Provider>
  );
}

const DilKok = ({ children }: { children: ReactNode }) => <>{children}</>;

export const useDil = () => {
  const c = useContext(Ctx);
  if (!c) throw new Error("DilProvider eksik");
  return c;
};
