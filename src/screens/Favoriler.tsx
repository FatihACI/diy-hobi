import { FlatList, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Bos, ProjeKart } from "../components";
import { PROJELER } from "../data/projeler";
import { useNav } from "../nav";
import { useStore } from "../store";
import { bosluk, renk, yazi } from "../theme";
import { t } from "../i18n";

export default function Favoriler() {
  const { favoriler } = useStore();
  const nav = useNav();
  const ust = useSafeAreaInsets().top;
  const projeler = PROJELER.filter((p) => favoriler.includes(p.id));

  return (
    <FlatList
      style={{ backgroundColor: renk.arkaPlan }}
      contentContainerStyle={{ padding: bosluk.l, paddingTop: ust + bosluk.l, paddingBottom: bosluk.xxl }}
      data={projeler}
      keyExtractor={(p) => p.id}
      ListHeaderComponent={<Text style={[yazi.dev, { marginBottom: bosluk.l }]}>{t("Favoriler")}</Text>}
      ItemSeparatorComponent={() => <View style={{ height: bosluk.m }} />}
      initialNumToRender={6}
      renderItem={({ item }) => <ProjeKart p={item} onPress={() => nav.navigate("Proje", { id: item.id })} />}
      ListEmptyComponent={
        <Bos
          ikon="heart-outline"
          baslik={t("Henüz favori yok")}
          metin={t("Beğendiğin projelerde ♡ simgesine dokun.")}
        />
      }
    />
  );
}
