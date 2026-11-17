import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { KALEMLER, MALZEME_KID } from "./data/katalog-dizin";
import { PROJELER } from "./data/projeler";

// Telefonda kalıcı tutulan kullanıcı verisi
// liste ve bende KATALOG kimliğiyle tutulur: aynı malzeme 3 projede geçse de listede tek satır.
type Durum = {
  favoriler: string[]; // proje id'leri
  liste: { [kid: string]: { projeler: string[]; alindi: boolean } };
  bende: string[]; // "bende var" işaretli katalog kalemleri (alet/malzeme zaten evde)
  bitenAdimlar: { [projeId: string]: number[] };
};

const BOS: Durum = { favoriler: [], liste: {}, bende: [], bitenAdimlar: {} };
const ANAHTAR = "evde-hobi-durum-v2";
const ESKI_ANAHTAR = "evde-hobi-durum-v1"; // malzeme kimliğiyle tutulan eski liste

type Api = Durum & {
  favoriMi: (pid: string) => boolean;
  favoriDegistir: (pid: string) => void;
  listeyeEkle: (pid: string, kidler: string[]) => void;
  listedenCikar: (kid: string) => void;
  alindiDegistir: (kid: string) => void;
  listeyiTemizle: () => void;
  bendeMi: (kid: string) => boolean;
  bendeDegistir: (kid: string) => void;
  adimDegistir: (pid: string, i: number) => void;
};

const Ctx = createContext<Api | null>(null);

// v1 kaydını (liste: malzemeId → {projeId, alindi}) katalog kimliğine taşı
export function v1Tasi(x: any): Durum {
  const liste: Durum["liste"] = {};
  for (const [mid, v] of Object.entries<any>(x?.liste ?? {})) {
    const kid = MALZEME_KID.get(mid);
    if (!kid) continue;
    const mevcut = liste[kid] ?? { projeler: [], alindi: true };
    if (v?.projeId && !mevcut.projeler.includes(v.projeId)) mevcut.projeler.push(v.projeId);
    mevcut.alindi = mevcut.alindi && !!v?.alindi; // biri alınmadıysa kalem alınmadı
    liste[kid] = mevcut;
  }
  return { ...BOS, favoriler: x?.favoriler ?? [], bitenAdimlar: x?.bitenAdimlar ?? {}, liste };
}

// Uygulama güncellenince silinen/yeniden adlandırılan proje veya malzemeler telefondaki kayıtta
// "hayalet" olarak kalmasın (ör. sekme rozetinde sayılıp listede görünmeyen kalemler).
export function temizle(x: Partial<Durum>): Durum {
  const projeler = new Map(PROJELER.map((p) => [p.id, p]));
  const bitenAdimlar: Durum["bitenAdimlar"] = {};
  for (const [pid, adimlar] of Object.entries(x.bitenAdimlar ?? {})) {
    const p = projeler.get(pid);
    if (p && Array.isArray(adimlar)) bitenAdimlar[pid] = adimlar.filter((i) => i >= 0 && i < p.adimlar.length);
  }
  const liste: Durum["liste"] = {};
  for (const [kid, v] of Object.entries(x.liste ?? {}))
    if (KALEMLER.has(kid) && v)
      liste[kid] = { projeler: (v.projeler ?? []).filter((p) => projeler.has(p)), alindi: !!v.alindi };
  return {
    favoriler: (Array.isArray(x.favoriler) ? x.favoriler : []).filter((id) => projeler.has(id)),
    liste,
    bende: (Array.isArray(x.bende) ? x.bende : []).filter((kid) => KALEMLER.has(kid)),
    bitenAdimlar,
  };
}

export function StoreProvider({ children }: { children: ReactNode }) {
  const [d, setD] = useState<Durum>(BOS);
  const [yuklendi, setYuklendi] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const s = await AsyncStorage.getItem(ANAHTAR);
        if (s) setD(temizle(JSON.parse(s)));
        else {
          const eski = await AsyncStorage.getItem(ESKI_ANAHTAR);
          if (eski) setD(temizle(v1Tasi(JSON.parse(eski))));
        }
      } catch {}
      setYuklendi(true);
    })();
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
    // "Bende var" işaretli kalemler listeye eklenmez
    listeyeEkle: (pid, kidler) =>
      setD((x) => {
        const liste = { ...x.liste };
        for (const kid of kidler) {
          if (x.bende.includes(kid)) continue;
          const m = liste[kid];
          liste[kid] = m
            ? { ...m, projeler: m.projeler.includes(pid) ? m.projeler : [...m.projeler, pid] }
            : { projeler: [pid], alindi: false };
        }
        return { ...x, liste };
      }),
    listedenCikar: (kid) =>
      setD((x) => {
        const liste = { ...x.liste };
        delete liste[kid];
        return { ...x, liste };
      }),
    alindiDegistir: (kid) =>
      setD((x) =>
        x.liste[kid] ? { ...x, liste: { ...x.liste, [kid]: { ...x.liste[kid], alindi: !x.liste[kid].alindi } } } : x,
      ),
    listeyiTemizle: () => setD((x) => ({ ...x, liste: {} })),
    bendeMi: (kid) => d.bende.includes(kid),
    // Bende var → listeden de düşer (alınmasına gerek yok)
    bendeDegistir: (kid) =>
      setD((x) => {
        if (x.bende.includes(kid)) return { ...x, bende: x.bende.filter((k) => k !== kid) };
        const liste = { ...x.liste };
        delete liste[kid];
        return { ...x, bende: [...x.bende, kid], liste };
      }),
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
