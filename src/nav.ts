import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootParams = {
  Sekmeler: undefined;
  Kategori: { id: string };
  Proje: { id: string };
  Yapabilir: undefined;
  Malzemelerim: undefined;
  Bulucu: undefined;
  Araclar: undefined;
  Arac: { id: string };
  Rozetler: undefined;
};

export const useNav = () => useNavigation<NativeStackNavigationProp<RootParams>>();
