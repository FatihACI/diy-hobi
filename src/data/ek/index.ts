// Kategorileri 20 projeye tamamlayan ek projeler (kategori başına bir dosya)
import { Proje } from "../types";
import { MAKET_EK } from "./maket";
import { OYUNCAK_EK } from "./oyuncak";
import { RC_EK } from "./rc";

export const EK_PROJELER: Proje[] = [...OYUNCAK_EK, ...MAKET_EK, ...RC_EK];
