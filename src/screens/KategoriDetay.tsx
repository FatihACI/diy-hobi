import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Cipler, Ikon, ProjeKart } from "../components";
import { kategoriBul } from "../data/kategoriler";
import { kategoriProjeleri } from "../data/projeler";
import { SURE_SINIFLARI, SureSinifi, sureCoz, sureSinifi } from "../data/sure";
import { Proje, Zorluk } from "../data/types";
import { useFiyat } from "../fiyat";
import { RootParams } from "../nav";
import { bosluk, kose, renk, stil } from "../theme";

type P = NativeStackScreenProps<RootParams, "Kategori">;
const ZORLUKLAR: (Zorluk | "Tümü")[] = ["Tümü", "Kolay", "Orta", "Zor"];
const BUTCELER = [0, 250, 500, 1000, 2500]; // 0 = tümü; TL üst sınır (sarf malzeme)
const BUTCE_ESIK = 3; // kategoride bu kadar tam fiyatlı proje yoksa bütçe filtresi gizlenir (boş liste göstermesin)
const SIRALAR = ["Önerilen", "Kolaydan zora", "Kısadan uzuna", "Ucuzdan pahalıya"] as const;
type Sira = (typeof SIRALAR)[number];
const ZORLUK_SIRA: Record<Zorluk, number> = { Kolay: 0, Orta: 1, Zor: 2 };

export default function KategoriDetay({ route, navigation }: P) {
  const k = kategoriBul(route.params.id);
  const ust = useSafeAreaInsets().top;
  const fy = useFiyat();
  const [zorluk, setZorluk] = useState<(typeof ZORLUKLAR)[number]>("Tümü");
  const [sure, setSure] = useState<SureSinifi>("Tümü");
  const [butce, setButce] = useState(0);
  const [sira, setSira] = useState<Sira>("Önerilen");

  // Bütçe ve "ucuzdan pahalıya" yalnızca fiyatı tam bilinen projelerde anlamlı
  const tamFiyat = (p: Proje) => {
    const m = fy.maliyet(p);
    return m.tumu > 0 && m.fiyatliSayi === m.tumu ? m.toplam : null;
  };

  const butceGoster = kategoriProjeleri(k.id).filter((p) => tamFiyat(p) !== null).length >= BUTCE_ESIK;
  const projeler = kategoriProjeleri(k.id)
    .filter((p) => zorluk === "Tümü" || p.zorluk === zorluk)
    .filter((p) => sure === "Tümü" || sureSinifi(p.sure) === sure)
    .filter((p) => !butce || ((t) => t !== null && t <= butce)(tamFiyat(p)))
    .sort((a, b) => {
      if (sira === "Kolaydan zora") return ZORLUK_SIRA[a.zorluk] - ZORLUK_SIRA[b.zorluk];
      if (sira === "Kısadan uzuna") return sureCoz(a.sure)[1] - sureCoz(b.sure)[1];
      if (sira === "Ucuzdan pahalıya") {
        // Fiyatı tam bilinenler önce, sonra kısmen bilinenler, en sonda hiç fiyatı olmayanlar
        const anahtar = (p: Proje) => {
          const m = fy.maliyet(p);
          return [m.fiyatliSayi === 0 ? 2 : m.fiyatliSayi < m.tumu ? 1 : 0, m.toplam];
        };
        const [ga, ta] = anahtar(a);
        const [gb, tb] = anahtar(b);
        return ga - gb || ta - tb;
      }
      return 0;
    });

  const ustBolum = (
    <>
      <LinearGradient
        colors={k.renkler}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[s.kapak, { paddingTop: ust + bosluk.s }]}
      >
        <Pressable
          accessibilityLabel="Geri"
          accessibilityRole="button"
          onPress={navigation.goBack}
          style={s.geri}
          hitSlop={10}
        >
          <Ikon name="arrow-left" size={22} color="#fff" />
        </Pressable>
        <Ikon name={k.ikon} size={48} color="#fff" />
        <Text style={s.baslik}>{k.ad}</Text>
        <Text style={s.alt}>{k.aciklama}</Text>
      </LinearGradient>
      <View style={{ paddingVertical: bosluk.m, gap: bosluk.s }}>
        <Cipler etiket="Zorluk" secenekler={ZORLUKLAR} deger={zorluk} sec={setZorluk} />
        <Cipler etiket="Süre" secenekler={SURE_SINIFLARI} deger={sure} sec={setSure} />
        {butceGoster && (
          <Cipler
            etiket="Bütçe (malzeme)"
            secenekler={BUTCELER}
            deger={butce}
            sec={setButce}
            yazi={(x) => (x ? `≤ ${x.toLocaleString("tr-TR")} TL` : "Tümü")}
          />
        )}
        <Cipler etiket="Sırala" secenekler={SIRALAR} deger={sira} sec={setSira} />
      </View>
      <Text style={[s.filtreBaslik, { marginBottom: bosluk.s }]}>{projeler.length} proje</Text>
    </>
  );

  return (
    <FlatList
      style={{ backgroundColor: renk.arkaPlan }}
      contentContainerStyle={{ paddingBottom: bosluk.xxl }}
      data={projeler}
      keyExtractor={(p) => p.id}
      ListHeaderComponent={ustBolum}
      ItemSeparatorComponent={() => <View style={{ height: bosluk.m }} />}
      initialNumToRender={6}
      windowSize={7}
      renderItem={({ item }) => (
        <View style={{ paddingHorizontal: bosluk.l }}>
          <ProjeKart p={item} onPress={() => navigation.navigate("Proje", { id: item.id })} />
        </View>
      )}
      ListEmptyComponent={
        <Text style={s.bos}>
          {butce
            ? "Bu bütçede fiyatı tam bilinen proje yok. Fiyatlar eklendikçe burada görünecek."
            : "Bu filtrelerle proje yok."}
        </Text>
      }
    />
  );
}

const s = stil(() => ({
  kapak: {
    paddingHorizontal: bosluk.l,
    paddingBottom: bosluk.xl,
    borderBottomLeftRadius: kose.xl,
    borderBottomRightRadius: kose.xl,
    gap: 6,
  },
  geri: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.2)",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: bosluk.m,
  },
  baslik: { color: "#fff", fontSize: 28, fontWeight: "800" },
  alt: { color: "rgba(255,255,255,0.9)", fontSize: 15 },
  filtreBaslik: {
    paddingHorizontal: bosluk.l,
    fontSize: 12,
    fontWeight: "700",
    color: renk.yaziIkincil,
    marginBottom: 4,
  },
  bos: { color: renk.yaziIkincil, textAlign: "center", marginTop: 20, paddingHorizontal: bosluk.xl },
}));
