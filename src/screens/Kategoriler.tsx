import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { KAGIT_RENGI, KategoriCizim } from "../cizimler";
import { Ikon } from "../components";
import { KATEGORILER } from "../data/kategoriler";
import { kategoriProjeleri } from "../data/projeler";
import { useNav } from "../nav";
import { bosluk, golge, kose, renk, yazi } from "../theme";

export default function Kategoriler() {
  const nav = useNav();
  const ust = useSafeAreaInsets().top;
  return (
    <ScrollView style={{ backgroundColor: renk.arkaPlan }}
      contentContainerStyle={{ padding: bosluk.l, paddingTop: ust + bosluk.l, gap: bosluk.m, paddingBottom: bosluk.xxl }}>
      <Text style={yazi.dev}>Kategoriler</Text>
      <Text style={[yazi.kucuk, { fontSize: 15, marginBottom: bosluk.s }]}>Bir alan seç, projeleri keşfet.</Text>

      {KATEGORILER.map((k) => {
        const sayi = kategoriProjeleri(k.id).length;
        return (
          <Pressable key={k.id} onPress={() => nav.navigate("Kategori", { id: k.id })}
            style={({ pressed }) => [s.kart, { opacity: pressed ? 0.9 : 1 }]}>
            <View style={[s.serit, { backgroundColor: k.renkler[0] }]} />
            <View style={s.metin}>
              <View style={[s.ikon, { backgroundColor: k.renkler[0] + "1A" }]}>
                <Ikon name={k.ikon} size={18} color={k.renkler[0]} />
              </View>
              <Text style={s.ad}>{k.ad}</Text>
              <Text style={s.aciklama} numberOfLines={2}>{k.aciklama}</Text>
              <View style={s.alt}>
                <Text style={[s.sayi, { color: k.renkler[0] }]}>{sayi} proje</Text>
                <Ikon name="arrow-right" size={16} color={k.renkler[0]} />
              </View>
            </View>
            <View style={s.cizim}>
              <KategoriCizim id={k.id} boyut={132} />
            </View>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const s = StyleSheet.create({
  kart: { flexDirection: "row", backgroundColor: KAGIT_RENGI, borderRadius: kose.l, overflow: "hidden", minHeight: 150, borderWidth: 1, borderColor: "#EDE7DA", ...golge },
  serit: { width: 5 },
  metin: { flex: 1, padding: bosluk.l, paddingRight: 0, gap: 4 },
  ikon: { width: 32, height: 32, borderRadius: 10, alignItems: "center", justifyContent: "center", marginBottom: 4 },
  ad: { fontSize: 19, fontWeight: "800", color: renk.yazi },
  aciklama: { fontSize: 13, color: renk.yaziIkincil, lineHeight: 18 },
  alt: { flexDirection: "row", alignItems: "center", gap: 4, marginTop: "auto", paddingTop: 6 },
  sayi: { fontWeight: "700", fontSize: 13 },
  cizim: { justifyContent: "center", alignItems: "center", paddingRight: 6 },
});
