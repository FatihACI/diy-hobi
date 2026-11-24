import { useMemo, useState } from "react";
import { FlatList, Pressable, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Arama, Bolum, Bos, Ikon, KategoriKart, ProjeKart } from "../components";
import { KATEGORILER } from "../data/kategoriler";
import { projeAra } from "../data/ara";
import { kategoriProjeleri, PROJELER } from "../data/projeler";
import { linkAc } from "../fiyat";
import { useNav } from "../nav";
import { GIZLILIK_URL } from "../sabitler";
import { bosluk, renk, yazi, stil } from "../theme";

const SAYFA = 30;

// "Yeni başlayanlar için": her gün farklı 5 kolay proje (hep aynı 5 proje görünmesin)
const KOLAYLAR = PROJELER.filter((p) => p.zorluk === "Kolay");
// Derin içeriği hazır olan seçkin projeler önce
const SECKINLER = PROJELER.filter((p) => p.altin).sort((a, b) => Number(!!b.sikHatalar) - Number(!!a.sikHatalar));
function gununKolaylari() {
  const gun = Math.floor(Date.now() / 86400000);
  const bas = (gun * 5) % KOLAYLAR.length;
  return [...KOLAYLAR, ...KOLAYLAR].slice(bas, bas + 5);
}

export default function Kesfet() {
  const nav = useNav();
  const ust = useSafeAreaInsets().top;
  const [q, setQ] = useState("");

  const sonuc = useMemo(() => projeAra(q), [q]);
  // Tek harfte ~400 kart (her biri SVG çizim) birden çizilmesin: 30'ar 30'ar göster
  const [limit, setLimit] = useState(SAYFA);
  const ara = (t: string) => {
    setQ(t);
    setLimit(SAYFA);
  };

  const [onecikan] = useState(gununKolaylari);
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
        <Arama deger={q} degis={ara} />
      </View>

      {q.trim() ? (
        <View style={[s.yatayPad, { gap: bosluk.m, marginTop: bosluk.l }]}>
          <Text style={yazi.kucuk}>{sonuc.length} sonuç</Text>
          {sonuc.length === 0 && <Bos ikon="magnify-close" baslik="Sonuç yok" metin="Farklı bir kelime dene." />}
          {sonuc.slice(0, limit).map((p) => (
            <ProjeKart key={p.id} p={p} onPress={() => nav.navigate("Proje", { id: p.id })} />
          ))}
          {sonuc.length > limit && (
            <Pressable accessibilityRole="button" onPress={() => setLimit((l) => l + SAYFA)} style={s.dahaFazla}>
              <Text style={{ color: renk.ana, fontWeight: "700" }}>Daha fazla göster ({sonuc.length - limit})</Text>
            </Pressable>
          )}
        </View>
      ) : (
        <>
          <View style={s.yatayPad}>
            <Pressable
              accessibilityRole="button"
              onPress={() => nav.navigate("Bulucu")}
              style={({ pressed }) => [s.bulucu, { opacity: pressed ? 0.9 : 1 }]}
            >
              <View style={s.bulucuIkon}>
                <Ikon name="head-question-outline" size={26} color="#fff" />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={[yazi.altBaslik, { color: "#fff" }]}>Ne yapsam?</Text>
                <Text style={{ color: "rgba(255,255,255,0.9)", fontSize: 13 }}>
                  4 soruyu cevapla, sana uygun projeyi bulalım
                </Text>
              </View>
              <Ikon name="chevron-right" size={24} color="#fff" />
            </Pressable>
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
            <Bolum baslik="Seçkin projeler: adım adım" />
          </View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={SECKINLER}
            keyExtractor={(p) => p.id}
            contentContainerStyle={{ paddingHorizontal: bosluk.l, gap: bosluk.m, paddingBottom: 6 }}
            renderItem={({ item }) => (
              <ProjeKart yatay p={item} onPress={() => nav.navigate("Proje", { id: item.id })} />
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
      <Pressable accessibilityRole="link" onPress={() => linkAc(GIZLILIK_URL)} style={s.altBilgi} hitSlop={8}>
        <Text style={s.altBilgiYazi}>Gizlilik politikası</Text>
      </Pressable>
    </ScrollView>
  );
}

const s = stil(() => ({
  yatayPad: { paddingHorizontal: bosluk.l },
  altBilgi: { alignSelf: "center", marginTop: bosluk.xl, padding: bosluk.s },
  altBilgiYazi: { color: renk.yaziIkincil, fontSize: 13, textDecorationLine: "underline" },
  dahaFazla: { alignItems: "center", paddingVertical: bosluk.m },
  bulucu: {
    flexDirection: "row",
    alignItems: "center",
    gap: bosluk.m,
    backgroundColor: renk.ana,
    borderRadius: 16,
    padding: bosluk.l,
    marginTop: bosluk.l,
  },
  bulucuIkon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "rgba(255,255,255,0.2)",
    alignItems: "center",
    justifyContent: "center",
  },
  selam: { ...yazi.kucuk, fontSize: 14, marginBottom: 2 },
}));
