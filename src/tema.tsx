// Görünüm tercihi (Sistem / Açık / Koyu): telefonda saklanır, temayı uygular.
// Tema değişince alt ağaç yeniden kurulur (key) — stil önbellekleri yeni renklerle üretilir.
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useColorScheme } from "react-native";
import { TemaTercihi, temaKoyuMu, temaSurumu, temaUygula } from "./theme";

const ANAHTAR = "evde-hobi-tema-v1";
const TERCIHLER: TemaTercihi[] = ["sistem", "acik", "koyu"];

type Api = { tercih: TemaTercihi; tercihDegistir: (t: TemaTercihi) => void; koyu: boolean };
const Ctx = createContext<Api | null>(null);

export function TemaProvider({ children }: { children: ReactNode }) {
  const sistem = useColorScheme();
  const [tercih, setTercih] = useState<TemaTercihi>("sistem");
  const [yuklendi, setYuklendi] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem(ANAHTAR)
      .then((s) => {
        if (s && TERCIHLER.includes(s as TemaTercihi)) setTercih(s as TemaTercihi);
      })
      .catch(() => {})
      .finally(() => setYuklendi(true));
  }, []);

  const koyu = tercih === "koyu" || (tercih === "sistem" && sistem === "dark");
  // Paylaşılan renk nesnelerini çocuklar çizilmeden önce güncelle (render sırasında, yan etkisiz ve idempotent)
  if (koyu !== temaKoyuMu()) temaUygula(koyu);

  const tercihDegistir = (t: TemaTercihi) => {
    setTercih(t);
    AsyncStorage.setItem(ANAHTAR, t).catch(() => {});
  };

  if (!yuklendi) return null;
  return (
    <Ctx.Provider value={{ tercih, tercihDegistir, koyu }}>
      <TemaKok key={temaSurumu()}>{children}</TemaKok>
    </Ctx.Provider>
  );
}

const TemaKok = ({ children }: { children: ReactNode }) => <>{children}</>;

export const useTema = () => {
  const c = useContext(Ctx);
  if (!c) throw new Error("TemaProvider eksik");
  return c;
};
