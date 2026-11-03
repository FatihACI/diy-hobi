import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ikon, ProjeKart } from "../components";
import { kategoriBul } from "../data/kategoriler";
import { kategoriProjeleri } from "../data/projeler";
import { Zorluk } from "../data/types";
import { RootParams } from "../nav";
import { bosluk, kose, renk } from "../theme";

type P = NativeStackScreenProps<RootParams, "Kategori">;
const FILTRELER: (Zorluk | "Tümü")[] = ["Tümü", "Kolay", "Orta", "Zor"];

export default function KategoriDetay({ route, navigation }: P) {
  const k = kategoriBul(route.params.id);
  const ust = useSafeAreaInsets().top;
  const [f, setF] = useState<(typeof FILTRELER)[number]>("Tümü");
  const projeler = kategoriProjeleri(k.id).filter((p) => f === "Tümü" || p.zorluk === f);

  return (
    <ScrollView style={{ backgroundColor: renk.arkaPlan }} contentContainerStyle={{ paddingBottom: bosluk.xxl }}>
      <LinearGradient colors={k.renkler} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
        style={[s.kapak, { paddingTop: ust + bosluk.s }]}>
        <Pressable accessibilityLabel="Geri" accessibilityRole="button" onPress={navigation.goBack} style={s.geri} hitSlop={10}>
          <Ikon name="arrow-left" size={22} color="#fff" />
        </Pressable>
        <Ikon name={k.ikon} size={48} color="#fff" />
        <Text style={s.baslik}>{k.ad}</Text>
        <Text style={s.alt}>{k.aciklama}</Text>
      </LinearGradient>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ padding: bosluk.l, gap: bosluk.s }}>
        {FILTRELER.map((x) => (
          <Pressable key={x} onPress={() => setF(x)} style={[s.cip, f === x && s.cipAktif]}>
            <Text style={[s.cipYazi, f === x && { color: "#fff" }]}>{x}</Text>
          </Pressable>
        ))}
      </ScrollView>

      <View style={{ paddingHorizontal: bosluk.l, gap: bosluk.m }}>
        {projeler.map((p) => <ProjeKart key={p.id} p={p} onPress={() => navigation.navigate("Proje", { id: p.id })} />)}
        {projeler.length === 0 && <Text style={{ color: renk.yaziIkincil, textAlign: "center", marginTop: 20 }}>Bu zorlukta proje yok.</Text>}
      </View>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  kapak: { paddingHorizontal: bosluk.l, paddingBottom: bosluk.xl, borderBottomLeftRadius: kose.xl, borderBottomRightRadius: kose.xl, gap: 6 },
  geri: { width: 40, height: 40, borderRadius: 20, backgroundColor: "rgba(255,255,255,0.2)", alignItems: "center", justifyContent: "center", marginBottom: bosluk.m },
  baslik: { color: "#fff", fontSize: 28, fontWeight: "800" },
  alt: { color: "rgba(255,255,255,0.9)", fontSize: 15 },
  cip: { paddingHorizontal: 16, paddingVertical: 8, borderRadius: 999, backgroundColor: renk.kart, borderWidth: 1, borderColor: renk.cizgi },
  cipAktif: { backgroundColor: renk.yazi, borderColor: renk.yazi },
  cipYazi: { fontWeight: "600", color: renk.yazi },
});
