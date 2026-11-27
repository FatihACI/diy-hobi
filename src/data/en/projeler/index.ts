// Proje çevirileri (İngilizce), kategori başına bir dosya. Proje id → çeviri.
import type { ProjeCeviri } from "../../ceviri";
import { EN_AHSAP } from "./ahsap";
import { EN_AKVARYUM } from "./akvaryum";
import { EN_BAHCE } from "./bahce";
import { EN_BALIKCILIK } from "./balikcilik";
import { EN_BASKI3D } from "./baski3d";
import { EN_BISIKLET } from "./bisiklet";
import { EN_DERI } from "./deri";
import { EN_ELEKTRONIK } from "./elektronik";
import { EN_EPOKSI } from "./epoksi";
import { EN_EV_TAMIR } from "./ev-tamir";
import { EN_KIL } from "./kil";
import { EN_KUS_EVI } from "./kus-evi";
import { EN_MAKET } from "./maket";
import { EN_MAKROME } from "./makrome";
import { EN_MUM_SABUN } from "./mum-sabun";
import { EN_OYUNCAK } from "./oyuncak";
import { EN_PIROGRAFI } from "./pirografi";
import { EN_RC } from "./rc";
import { EN_TAKI } from "./taki";
import { EN_TERRARYUM } from "./terraryum";

export const EN_PROJELER: Record<string, ProjeCeviri> = {
  ...EN_AHSAP,
  ...EN_AKVARYUM,
  ...EN_BAHCE,
  ...EN_BALIKCILIK,
  ...EN_BASKI3D,
  ...EN_BISIKLET,
  ...EN_DERI,
  ...EN_ELEKTRONIK,
  ...EN_EPOKSI,
  ...EN_EV_TAMIR,
  ...EN_KIL,
  ...EN_KUS_EVI,
  ...EN_MAKET,
  ...EN_MAKROME,
  ...EN_MUM_SABUN,
  ...EN_OYUNCAK,
  ...EN_PIROGRAFI,
  ...EN_RC,
  ...EN_TAKI,
  ...EN_TERRARYUM,
};
