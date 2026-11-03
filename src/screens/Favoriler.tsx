import { ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Bos, ProjeKart } from "../components";
import { PROJELER } from "../data/projeler";
import { useNav } from "../nav";
import { useStore } from "../store";
import { bosluk, renk, yazi } from "../theme";

export default function Favoriler() {
  const { favoriler } = useStore();
  const nav = useNav();
  const ust = useSafeAreaInsets().top;
  const projeler = PROJELER.filter((p) => favoriler.includes(p.id));

  return (
    <ScrollView
      style={{ backgroundColor: renk.arkaPlan }}
      contentContainerStyle={{ padding: bosluk.l, paddingTop: ust + bosluk.l, paddingBottom: bosluk.xxl }}
    >
      <Text style={yazi.dev}>Favoriler</Text>
      {projeler.length === 0 ? (
        <Bos ikon="heart-outline" baslik="Henüz favori yok" metin="Beğendiğin projelerde ♡ simgesine dokun." />
      ) : (
        <View style={{ gap: bosluk.m, marginTop: bosluk.l }}>
          {projeler.map((p) => (
            <ProjeKart key={p.id} p={p} onPress={() => nav.navigate("Proje", { id: p.id })} />
          ))}
        </View>
      )}
    </ScrollView>
  );
}
