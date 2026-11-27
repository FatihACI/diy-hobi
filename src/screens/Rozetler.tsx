// Rozetler ve tamamlanan projeler
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Cubuk, Ikon, ProjeKart, UstBaslik } from "../components";
import { PROJELER } from "../data/projeler";
import { rozetDurumlari, seviye, SEVIYELER } from "../data/rozet";
import { RootParams } from "../nav";
import { ilerlemeAl, useStore } from "../store";
import { bosluk, golge, kose, renk, stil, yazi } from "../theme";
import { t, tn } from "../i18n";

export default function Rozetler({ navigation }: NativeStackScreenProps<RootParams, "Rozetler">) {
  const st = useStore();
  const ins = useSafeAreaInsets();
  const x = ilerlemeAl(st);
  const durumlar = rozetDurumlari(x);
  const sv = seviye(x.tamamlanan.length);
  const biten = Object.entries(st.tamamlanan)
    .sort((a, b) => b[1].localeCompare(a[1]))
    .map(([id]) => PROJELER.find((p) => p.id === id))
    .filter((p) => !!p);

  return (
    <ScrollView
      style={{ backgroundColor: renk.arkaPlan }}
      contentContainerStyle={{
        padding: bosluk.l,
        paddingTop: ins.top + bosluk.l,
        paddingBottom: bosluk.xxl + ins.bottom,
      }}
    >
      <UstBaslik
        baslik={t("Rozetler")}
        alt={t("{a} / {b} kazanıldı", { a: durumlar.filter((d) => d.kazanildi).length, b: durumlar.length })}
        geri={navigation.goBack}
      />

      <Text style={s.baslik}>Seviyeler</Text>
      <View style={s.seviyeler}>
        {SEVIYELER.map((l) => {
          const ulasti = x.tamamlanan.length >= l.esik;
          return (
            <View key={l.ad} style={[s.seviye, !ulasti && { opacity: 0.35 }]}>
              <Ikon name={l.ikon} size={26} color={l.renk} />
              <Text style={[yazi.kucuk, { color: renk.yazi, fontWeight: "700" }]}>{t(l.ad)}</Text>
              <Text style={[yazi.kucuk, { fontSize: 11 }]}>{tn("{n} proje", l.esik)}</Text>
            </View>
          );
        })}
      </View>
      {sv.sonraki && (
        <Text style={[yazi.kucuk, { marginTop: bosluk.s }]}>
          {tn("{seviye} seviyesine {n} proje kaldı.", sv.sonraki.esik - x.tamamlanan.length, {
            seviye: t(sv.sonraki.ad),
          })}
        </Text>
      )}

      <Text style={s.baslik}>{t("Rozetler")}</Text>
      <View style={{ gap: bosluk.s }}>
        {durumlar.map((d) => (
          <View
            key={d.r.id}
            style={s.rozet}
            accessibilityLabel={`${t(d.r.ad)}: ${d.kazanildi ? t("kazanıldı") : t("kilitli")}`}
          >
            <View style={[s.rozetIkon, d.kazanildi && { backgroundColor: renk.uyariAcik }]}>
              <Ikon name={d.r.ikon} size={24} color={d.kazanildi ? renk.uyari : renk.yaziIkincil} />
            </View>
            <View style={{ flex: 1, gap: 4 }}>
              <Text style={[yazi.altBaslik, !d.kazanildi && { color: renk.yaziIkincil }]}>{t(d.r.ad)}</Text>
              <Text style={yazi.kucuk}>{t(d.r.aciklama)}</Text>
              {!d.kazanildi && d.hedef > 1 && (
                <View style={{ flexDirection: "row", alignItems: "center", gap: bosluk.s }}>
                  <View style={{ flex: 1 }}>
                    <Cubuk oran={d.ilerleme / d.hedef} renkDolu={renk.uyari} />
                  </View>
                  <Text style={[yazi.kucuk, { fontSize: 11 }]}>
                    {d.ilerleme}/{d.hedef}
                  </Text>
                </View>
              )}
            </View>
            {d.kazanildi && <Ikon name="check-decagram" size={22} color={renk.basari} />}
          </View>
        ))}
      </View>

      <Text style={s.baslik}>{t("Tamamlanan projeler ({n})", { n: biten.length })}</Text>
      {biten.length === 0 ? (
        <Text style={yazi.kucuk}>
          {t('Bir projenin Adımlar sekmesinde "Projeyi tamamladım" düğmesine dokunduğunda burada görünür.')}
        </Text>
      ) : (
        <View style={{ gap: bosluk.m }}>
          {biten.map((p) => (
            <ProjeKart key={p!.id} p={p!} onPress={() => navigation.navigate("Proje", { id: p!.id })} />
          ))}
        </View>
      )}
    </ScrollView>
  );
}

const s = stil(() => ({
  baslik: { ...yazi.baslik, marginTop: bosluk.xl, marginBottom: bosluk.m },
  seviyeler: { flexDirection: "row", flexWrap: "wrap", gap: bosluk.s },
  seviye: {
    width: "31%",
    alignItems: "center",
    gap: 2,
    paddingVertical: bosluk.m,
    backgroundColor: renk.kart,
    borderRadius: kose.m,
    ...golge,
  },
  rozet: {
    flexDirection: "row",
    alignItems: "center",
    gap: bosluk.m,
    backgroundColor: renk.kart,
    borderRadius: kose.m,
    padding: bosluk.m,
    ...golge,
  },
  rozetIkon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: renk.yuzey2,
    alignItems: "center",
    justifyContent: "center",
  },
}));
