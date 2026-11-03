import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

// Telefonda kalıcı tutulan kullanıcı verisi
type Durum = {
  favoriler: string[]; // proje id'leri
  liste: { [malzemeId: string]: { projeId: string; alindi: boolean } };
  bitenAdimlar: { [projeId: string]: number[] };
};

const BOS: Durum = { favoriler: [], liste: {}, bitenAdimlar: {} };
const ANAHTAR = "evde-hobi-durum-v1";

type Api = Durum & {
  favoriMi: (pid: string) => boolean;
  favoriDegistir: (pid: string) => void;
  listeyeEkle: (pid: string, malzemeIdler: string[]) => void;
  listedenCikar: (mid: string) => void;
  alindiDegistir: (mid: string) => void;
  listeyiTemizle: () => void;
  adimDegistir: (pid: string, i: number) => void;
};

const Ctx = createContext<Api | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [d, setD] = useState<Durum>(BOS);
  const [yuklendi, setYuklendi] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem(ANAHTAR)
      .then((s) => s && setD({ ...BOS, ...JSON.parse(s) }))
      .catch(() => {})
      .finally(() => setYuklendi(true));
  }, []);

  useEffect(() => {
    if (yuklendi) AsyncStorage.setItem(ANAHTAR, JSON.stringify(d)).catch(() => {});
  }, [d, yuklendi]);

  const api: Api = {
    ...d,
    favoriMi: (pid) => d.favoriler.includes(pid),
    favoriDegistir: (pid) =>
      setD((x) => ({
        ...x,
        favoriler: x.favoriler.includes(pid) ? x.favoriler.filter((f) => f !== pid) : [...x.favoriler, pid],
      })),
    listeyeEkle: (pid, ids) =>
      setD((x) => {
        const liste = { ...x.liste };
        ids.forEach((id) => {
          if (!liste[id]) liste[id] = { projeId: pid, alindi: false };
        });
        return { ...x, liste };
      }),
    listedenCikar: (mid) =>
      setD((x) => {
        const liste = { ...x.liste };
        delete liste[mid];
        return { ...x, liste };
      }),
    alindiDegistir: (mid) =>
      setD((x) => ({
        ...x,
        liste: { ...x.liste, [mid]: { ...x.liste[mid], alindi: !x.liste[mid].alindi } },
      })),
    listeyiTemizle: () => setD((x) => ({ ...x, liste: {} })),
    adimDegistir: (pid, i) =>
      setD((x) => {
        const mevcut = x.bitenAdimlar[pid] ?? [];
        const yeni = mevcut.includes(i) ? mevcut.filter((n) => n !== i) : [...mevcut, i];
        return { ...x, bitenAdimlar: { ...x.bitenAdimlar, [pid]: yeni } };
      }),
  };

  return <Ctx.Provider value={api}>{children}</Ctx.Provider>;
}

export const useStore = () => {
  const c = useContext(Ctx);
  if (!c) throw new Error("StoreProvider eksik");
  return c;
};
