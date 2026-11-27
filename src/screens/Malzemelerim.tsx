// Malzemelerim: kullanıcının elindeki aletler/malzemeler ("bende var"). Arama ile katalogdan eklenir.
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useMemo, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Arama, Bos, Ikon, UstBaslik } from "../components";
import { KALEMLER, type Kalem } from "../data/katalog-dizin";
import { kalemAra, sikKalemler, yapabilecekler } from "../data/yapabilir";
import { RootParams } from "../nav";
import { useStore } from "../store";
import { bosluk, golge, kose, renk, stil, yazi } from "../theme";
import { t, tn, yerel } from "../i18n";

type P = NativeStackScreenProps<RootParams, "Malzemelerim">;

export default function Malzemelerim({ navigation }: P) {
  const st = useStore();
  const ins = useSafeAreaInsets();
  const [q, setQ] = useState("");
  const sonuc = useMemo(() => kalemAra(q), [q]);
  const benim = st.bende
    .map((kid) => KALEMLER.get(kid))
    .filter((k): k is Kalem => !!k)
    .sort((a, b) => a.ad.localeCompare(b.ad, yerel()));
  const oneriler = sikKalemler(st.bende, 10);
  const yapilabilir = yapabilecekler(st.bende).length;

  return (
    <View style={{ flex: 1, backgroundColor: renk.arkaPlan }}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ padding: bosluk.l, paddingTop: ins.top + bosluk.l, paddingBottom: 120 }}
      >
        <UstBaslik
          baslik={t("Malzemelerim")}
          alt={t("Elindekileri ekle; sana uygun projeleri bulalım.")}
          geri={navigation.goBack}
        />
        <Arama deger={q} degis={setQ} ipucu={t("Alet veya malzeme ara (ör. tutkal)")} />

        {q.trim() ? (
          <View style={[s.kart, { marginTop: bosluk.m }]}>
            {sonuc.length === 0 && (
              <Text style={[yazi.kucuk, { padding: bosluk.m }]}>{t("Katalogda bulunamadı.")}</Text>
            )}
            {sonuc.map((k, i) => (
              <Satir key={k.kid} k={k} ilk={i === 0} />
            ))}
          </View>
        ) : (
          <>
            {oneriler.length > 0 && (
              <>
                <Text style={s.baslik}>{t("Sık kullanılanlar: dokun, ekle")}</Text>
                <View style={s.cipler}>
                  {oneriler.map((k) => (
                    <Pressable
                      key={k.kid}
                      accessibilityRole="button"
                      accessibilityLabel={t("{ad}: ekle", { ad: k.ad })}
                      onPress={() => st.bendeEkle(k.kid)}
                      style={s.cip}
                    >
                      <Ikon name="plus" size={14} color={renk.ana} />
                      <Text style={s.cipYazi} numberOfLines={1}>
                        {k.ad}
                      </Text>
                    </Pressable>
                  ))}
                </View>
              </>
            )}
            <Text style={s.baslik}>{t("Sende olanlar ({n})", { n: benim.length })}</Text>
            {benim.length === 0 ? (
              <Bos
                ikon="toolbox-outline"
                baslik={t("Henüz bir şey eklemedin")}
                metin={t("Yukarıdan ara ya da proje sayfalarında 'Bende var?' düğmesine dokun.")}
              />
            ) : (
              <View style={s.kart}>
                {benim.map((k, i) => (
                  <Satir key={k.kid} k={k} ilk={i === 0} />
                ))}
              </View>
            )}
          </>
        )}
      </ScrollView>

      <View style={[s.altBar, { paddingBottom: ins.bottom + bosluk.m }]}>
        <Pressable
          accessibilityRole="button"
          onPress={() => navigation.navigate("Yapabilir")}
          style={({ pressed }) => [s.anaBtn, { opacity: pressed ? 0.9 : 1 }]}
        >
          <Ikon name="hammer-screwdriver" size={20} color="#fff" />
          <Text style={s.anaBtnYazi}>Yapabileceklerim ({yapilabilir})</Text>
        </Pressable>
      </View>
    </View>
  );
}

function Satir({ k, ilk }: { k: Kalem; ilk: boolean }) {
  const st = useStore();
  const bende = st.bendeMi(k.kid);
  return (
    <View style={[s.satir, !ilk && s.ayrac]}>
      <Ikon name={k.arac ? "hammer-wrench" : "package-variant-closed"} size={18} color={renk.yaziIkincil} />
      <View style={{ flex: 1 }}>
        <Text style={[yazi.govde, { fontWeight: "600" }]}>{k.ad}</Text>
        <Text style={yazi.kucuk}>
          {k.arac ? t("Alet") : t("Malzeme (tekil)")} · {tn("{n} projede", k.projeler.length)}
        </Text>
      </View>
      <Pressable
        accessibilityRole="checkbox"
        accessibilityState={{ checked: bende }}
        accessibilityLabel={bende ? t("{ad}: bende yok, çıkar", { ad: k.ad }) : t("{ad}: bende var", { ad: k.ad })}
        onPress={() => st.bendeDegistir(k.kid)}
        hitSlop={8}
        style={[s.btn, bende && { backgroundColor: renk.anaAcik, borderColor: renk.ana }]}
      >
        <Ikon name={bende ? "check" : "plus"} size={16} color={bende ? renk.ana : renk.yaziIkincil} />
        <Text style={[s.btnYazi, bende && { color: renk.ana }]}>{bende ? t("Bende") : t("Ekle")}</Text>
      </Pressable>
    </View>
  );
}

const s = stil(() => ({
  baslik: { ...yazi.altBaslik, marginTop: bosluk.xl, marginBottom: bosluk.s },
  kart: { backgroundColor: renk.kart, borderRadius: kose.m, ...golge },
  satir: { flexDirection: "row", alignItems: "center", gap: bosluk.m, padding: bosluk.m },
  ayrac: { borderTopWidth: 1, borderColor: renk.cizgi },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: renk.cizgi,
  },
  btnYazi: { fontSize: 12, fontWeight: "700", color: renk.yaziIkincil },
  cipler: { flexDirection: "row", flexWrap: "wrap", gap: bosluk.s },
  cip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    maxWidth: "100%",
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 999,
    backgroundColor: renk.kart,
    borderWidth: 1,
    borderColor: renk.cizgi,
  },
  cipYazi: { fontWeight: "600", color: renk.yazi, flexShrink: 1 },
  altBar: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: renk.kart,
    paddingHorizontal: bosluk.l,
    paddingTop: bosluk.m,
    borderTopWidth: 1,
    borderColor: renk.cizgi,
  },
  anaBtn: {
    height: 52,
    borderRadius: kose.m,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: renk.ana,
  },
  anaBtnYazi: { color: "#fff", fontWeight: "700", fontSize: 16 },
}));
