// Atölyem: seviye, kısayollar (Elimdekilerle yap, Proje Bulucu, Malzemelerim, Araçlar), rozetler, görünüm.
import { Pressable, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Cubuk, Ikon } from "../components";
import { rozetDurumlari, seviye } from "../data/rozet";
import type { IkonAdi } from "../data/types";
import { yapabilecekler } from "../data/yapabilir";
import { ARACLAR } from "../data/araclar";
import { useNav } from "../nav";
import { ilerlemeAl, useStore } from "../store";
import { useTema } from "../tema";
import { bosluk, golge, kose, renk, stil, TemaTercihi, yazi } from "../theme";

const GORUNUM: { deger: TemaTercihi; etiket: string; ikon: IkonAdi }[] = [
  { deger: "sistem", etiket: "Sistem", ikon: "cellphone-cog" },
  { deger: "acik", etiket: "Açık", ikon: "white-balance-sunny" },
  { deger: "koyu", etiket: "Koyu", ikon: "weather-night" },
];

export default function Atolye() {
  const st = useStore();
  const nav = useNav();
  const tema = useTema();
  const ust = useSafeAreaInsets().top;
  const x = ilerlemeAl(st);
  const sv = seviye(x.tamamlanan.length);
  const rozetler = rozetDurumlari(x);
  const kazanilan = rozetler.filter((d) => d.kazanildi);
  const hazir = yapabilecekler(st.bende).filter((y) => y.eksik.length === 0).length;

  return (
    <ScrollView
      style={{ backgroundColor: renk.arkaPlan }}
      contentContainerStyle={{ padding: bosluk.l, paddingTop: ust + bosluk.l, paddingBottom: bosluk.xxl }}
    >
      <Text style={yazi.dev}>Atölyem</Text>

      {/* Seviye kartı */}
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={`Seviye ${sv.simdiki.ad}, rozetleri gör`}
        onPress={() => nav.navigate("Rozetler")}
        style={({ pressed }) => [s.seviye, { opacity: pressed ? 0.9 : 1 }]}
      >
        <View style={[s.seviyeIkon, { borderColor: sv.simdiki.renk }]}>
          <Ikon name={sv.simdiki.ikon} size={30} color={sv.simdiki.renk} />
        </View>
        <View style={{ flex: 1, gap: 6 }}>
          <Text style={yazi.baslik}>{sv.simdiki.ad}</Text>
          <Text style={yazi.kucuk}>
            {x.tamamlanan.length} proje tamamlandı
            {sv.sonraki
              ? ` · ${sv.sonraki.ad} için ${sv.sonraki.esik - x.tamamlanan.length} proje`
              : " · en üst seviye!"}
          </Text>
          <Cubuk oran={sv.oran} renkDolu={sv.sonraki?.renk ?? sv.simdiki.renk} />
        </View>
        <Ikon name="chevron-right" size={22} color={renk.yaziIkincil} />
      </Pressable>

      {/* Kısayollar */}
      <View style={s.izgara}>
        <Kisayol
          ikon="hammer-screwdriver"
          baslik="Elimdekilerle yap"
          alt={st.bende.length ? `${hazir} proje hazır` : "Önce malzeme ekle"}
          bas={() => nav.navigate("Yapabilir")}
        />
        <Kisayol
          ikon="head-question-outline"
          baslik="Proje Bulucu"
          alt="4 soruda öneri"
          bas={() => nav.navigate("Bulucu")}
        />
        <Kisayol
          ikon="toolbox-outline"
          baslik="Malzemelerim"
          alt={`${st.bende.length} kalem`}
          bas={() => nav.navigate("Malzemelerim")}
        />
        <Kisayol
          ikon="calculator-variant-outline"
          baslik="Araçlar"
          alt={`${ARACLAR.length} hesaplayıcı`}
          bas={() => nav.navigate("Araclar")}
        />
      </View>

      {/* Rozet önizleme */}
      <View style={s.bolumSatir}>
        <Text style={yazi.baslik}>Rozetler</Text>
        <Pressable accessibilityRole="button" onPress={() => nav.navigate("Rozetler")} hitSlop={8}>
          <Text style={{ color: renk.ana, fontWeight: "700" }}>
            {kazanilan.length} / {rozetler.length} · Tümü ›
          </Text>
        </Pressable>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: bosluk.s }}>
        {[...kazanilan, ...rozetler.filter((d) => !d.kazanildi)].map((d) => (
          <View key={d.r.id} style={[s.rozet, !d.kazanildi && { opacity: 0.4 }]}>
            <Ikon name={d.r.ikon} size={24} color={d.kazanildi ? renk.uyari : renk.yaziIkincil} />
            <Text style={s.rozetYazi} numberOfLines={2}>
              {d.r.ad}
            </Text>
          </View>
        ))}
      </ScrollView>

      {/* Görünüm */}
      <Text style={[yazi.baslik, { marginTop: bosluk.xl, marginBottom: bosluk.m }]}>Görünüm</Text>
      <View style={s.segment} accessibilityRole="radiogroup">
        {GORUNUM.map((g) => {
          const secili = tema.tercih === g.deger;
          return (
            <Pressable
              key={g.deger}
              accessibilityRole="radio"
              accessibilityState={{ checked: secili }}
              accessibilityLabel={`Görünüm: ${g.etiket}`}
              onPress={() => tema.tercihDegistir(g.deger)}
              style={[s.segmentOge, secili && s.segmentSecili]}
            >
              <Ikon name={g.ikon} size={18} color={secili ? renk.ana : renk.yaziIkincil} />
              <Text style={[s.segmentYazi, secili && { color: renk.yazi }]}>{g.etiket}</Text>
            </Pressable>
          );
        })}
      </View>
    </ScrollView>
  );
}

function Kisayol({ ikon, baslik, alt, bas }: { ikon: IkonAdi; baslik: string; alt: string; bas: () => void }) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={bas}
      style={({ pressed }) => [s.kisayol, { opacity: pressed ? 0.85 : 1 }]}
    >
      <View style={s.kisayolIkon}>
        <Ikon name={ikon} size={24} color={renk.ana} />
      </View>
      <Text style={yazi.altBaslik}>{baslik}</Text>
      <Text style={yazi.kucuk}>{alt}</Text>
    </Pressable>
  );
}

const s = stil(() => ({
  seviye: {
    flexDirection: "row",
    alignItems: "center",
    gap: bosluk.m,
    backgroundColor: renk.kart,
    borderRadius: kose.l,
    padding: bosluk.l,
    marginTop: bosluk.l,
    ...golge,
  },
  seviyeIkon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  izgara: { flexDirection: "row", flexWrap: "wrap", gap: bosluk.m, marginTop: bosluk.l },
  kisayol: {
    width: "47%",
    flexGrow: 1,
    backgroundColor: renk.kart,
    borderRadius: kose.l,
    padding: bosluk.l,
    gap: 4,
    ...golge,
  },
  kisayolIkon: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: renk.anaAcik,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 6,
  },
  bolumSatir: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: bosluk.xl,
    marginBottom: bosluk.m,
  },
  rozet: {
    width: 88,
    alignItems: "center",
    gap: 6,
    padding: bosluk.s,
    backgroundColor: renk.kart,
    borderRadius: kose.m,
    ...golge,
  },
  rozetYazi: { fontSize: 11, fontWeight: "600", color: renk.yazi, textAlign: "center" },
  segment: { flexDirection: "row", backgroundColor: renk.yuzey2, borderRadius: kose.m, padding: 4 },
  segmentOge: {
    flex: 1,
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    borderRadius: kose.s,
  },
  segmentSecili: { backgroundColor: renk.kart, ...golge },
  segmentYazi: { fontWeight: "600", color: renk.yaziIkincil },
}));
