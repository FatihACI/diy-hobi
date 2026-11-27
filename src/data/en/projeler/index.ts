// Proje çevirileri (İngilizce), kategori başına bir dosya. Proje id → çeviri.
import type { ProjeCeviri } from "../../ceviri";
import { EN_AHSAP } from "./ahsap";
import { EN_AKVARYUM } from "./akvaryum";
import { EN_BALIKCILIK } from "./balikcilik";
import { EN_ELEKTRONIK } from "./elektronik";
import { EN_MAKET } from "./maket";
import { EN_OYUNCAK } from "./oyuncak";
import { EN_RC } from "./rc";

export const EN_PROJELER: Record<string, ProjeCeviri> = {
  ...EN_AHSAP,
  ...EN_AKVARYUM,
  ...EN_BALIKCILIK,
  ...EN_ELEKTRONIK,
  ...EN_MAKET,
  ...EN_OYUNCAK,
  ...EN_RC,
};
