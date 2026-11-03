import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootParams = {
  Sekmeler: undefined;
  Kategori: { id: string };
  Proje: { id: string };
};

export const useNav = () => useNavigation<NativeStackNavigationProp<RootParams>>();
