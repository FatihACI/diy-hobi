import { useMemo, useState } from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Arama, Bolum, Bos, KategoriKart, ProjeKart } from "../components";
import { KATEGORILER } from "../data/kategoriler";
import { kategoriProjeleri, PROJELER } from "../data/projeler";
import { useNav } from "../nav";
import { bosluk, renk, yazi } from "../theme";

// Türkçe karakter duyarsız arama
const normal = (s: string) => s.toLocaleLowerCase("tr-TR");

export default function Kesfet() {
  const nav = useNav();
  const ust = useSafeAreaInsets().top;
  const [q, setQ] = useState("");

  const sonuc = useMemo(() => {
    const t = normal(q.trim());
    if (!t) return [];
    return PROJELER.filter((p) =>
      [p.ad, p.ozet, KATEGORILER.find((k) => k.id === p.kategoriId)!.ad, ...p.malzemeler.map((m) => m.ad)].some((s) =>
        normal(s).includes(t),
      ),
    );
  }, [q]);

  const onecikan = PROJELER.filter((p) => p.zorluk === "Kolay").slice(0, 5);
  const yeni = [...PROJELER].reverse().slice(0, 6);

  return (
    <ScrollView
      style={{ backgroundColor: renk.arkaPlan }}
      contentContainerStyle={{ paddingTop: ust + bosluk.l, paddingBottom: bosluk.xxl }}
    >
      <View style={s.yatayPad}>
        <Text style={s.selam}>Bugün ne yapıyoruz?</Text>
        <Text style={yazi.dev}>Evde Hobi</Text>
        <View style={{ height: bosluk.l }} />
        <Arama deger={q} degis={setQ} />
      </View>

      {q.trim() ? (
        <View style={[s.yatayPad, { gap: bosluk.m, marginTop: bosluk.l }]}>
          <Text style={yazi.kucuk}>{sonuc.length} sonuç</Text>
          {sonuc.length === 0 && <Bos ikon="magnify-close" baslik="Sonuç yok" metin="Farklı bir kelime dene." />}
          {sonuc.map((p) => (
            <ProjeKart key={p.id} p={p} onPress={() => nav.navigate("Proje", { id: p.id })} />
          ))}
        </View>
      ) : (
        <>
          <View style={s.yatayPad}>
            <Bolum baslik="Kategoriler" />
          </View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={KATEGORILER}
            keyExtractor={(k) => k.id}
            contentContainerStyle={{ paddingHorizontal: bosluk.l, gap: bosluk.m }}
            renderItem={({ item }) => (
              <KategoriKart
                k={item}
                sayi={kategoriProjeleri(item.id).length}
                onPress={() => nav.navigate("Kategori", { id: item.id })}
              />
            )}
          />

          <View style={s.yatayPad}>
            <Bolum baslik="Yeni başlayanlar için" />
          </View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={onecikan}
            keyExtractor={(p) => p.id}
            contentContainerStyle={{ paddingHorizontal: bosluk.l, gap: bosluk.m, paddingBottom: 6 }}
            renderItem={({ item }) => (
              <ProjeKart yatay p={item} onPress={() => nav.navigate("Proje", { id: item.id })} />
            )}
          />

          <View style={s.yatayPad}>
            <Bolum baslik="Son eklenenler" />
          </View>
          <View style={[s.yatayPad, { gap: bosluk.m }]}>
            {yeni.map((p) => (
              <ProjeKart key={p.id} p={p} onPress={() => nav.navigate("Proje", { id: p.id })} />
            ))}
          </View>
        </>
      )}
    </ScrollView>
  );
}

const s = StyleSheet.create({
  yatayPad: { paddingHorizontal: bosluk.l },
  selam: { ...yazi.kucuk, fontSize: 14, marginBottom: 2 },
});
