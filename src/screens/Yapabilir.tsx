// "Elimdekilerle yap": bende var listesine göre hemen yapılabilecek ve 1–2 eksikli projeler.
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { memo, useCallback, useLayoutEffect, useMemo, useRef } from "react";
import { Pressable, SectionList, Text, View } from "react-native";
import type { SectionListRenderItem } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Bos, Ikon, ProjeKart, UstBaslik } from "../components";
import { yapabilecekler, type Yapabilir as Y } from "../data/yapabilir";
import { RootParams } from "../nav";
import { useStore } from "../store";
import { bosluk, kose, renk, stil, yazi } from "../theme";
import { t, tn } from "../i18n";

type P = NativeStackScreenProps<RootParams, "Yapabilir">;

const BASLIK = ["Hemen başlayabilirsin", "Tek eksik", "İki eksik"];

export default function Yapabilir({ navigation }: P) {
  const st = useStore();
  const ins = useSafeAreaInsets();
  const liste = useMemo(() => yapabilecekler(st.bende), [st.bende]);
  // "Listede ✓" bilgisi burada hesaplanır; satırlar store'a abone olmaz, yalnız değişen satır yeniden çizilir
  const bolumler = useMemo(
    () =>
      [0, 1, 2]
        .map((e) => ({
          baslik: t(BASLIK[e]),
          data: liste
            .filter((x) => x.eksik.length === e)
            .map((x) => ({ x, eksikListede: x.eksik.every((m) => st.liste[m.kid!]) })),
        }))
        .filter((b) => b.data.length),
    [liste, st.liste],
  );

  // Store fonksiyonları her render'da yeniden oluşuyor; satırlara sabit callback için en güncelini ref'te tut
  const stRef = useRef(st);
  useLayoutEffect(() => {
    stRef.current = st;
  });
  const ekle = useCallback(
    (x: Y) =>
      stRef.current.listeyeEkle(
        x.p.id,
        x.eksik.map((m) => m.kid!),
      ),
    [],
  );
  const ac = useCallback((id: string) => navigation.navigate("Proje", { id }), [navigation]);

  type Bolum = (typeof bolumler)[number];
  const renderItem: SectionListRenderItem<Bolum["data"][number], Bolum> = useCallback(
    ({ item }) => <Oge x={item.x} eksikListede={item.eksikListede} ac={ac} ekle={ekle} />,
    [ac, ekle],
  );
  const renderSectionHeader = useCallback(
    ({ section }: { section: Bolum }) => (
      <Text style={s.bolum}>
        {section.baslik} ({section.data.length})
      </Text>
    ),
    [],
  );

  const ust = (
    <View>
      <UstBaslik
        baslik={t("Elimdekilerle yap")}
        alt={`${tn("{n} alet ve malzeme sende", st.bende.length)} · ${tn("{n} proje", liste.length)}`}
        geri={navigation.goBack}
      />
      <Pressable accessibilityRole="button" onPress={() => navigation.navigate("Malzemelerim")} style={s.duzenle}>
        <Ikon name="toolbox-outline" size={18} color={renk.ana} />
        <Text style={{ flex: 1, color: renk.ana, fontWeight: "700" }}>{t("Malzemelerimi düzenle")}</Text>
        <Ikon name="chevron-right" size={18} color={renk.ana} />
      </Pressable>
      <Text style={[yazi.kucuk, { marginTop: bosluk.s }]}>
        {t("Evde bulunanlar (su, kâğıt, pet şişe…) eksik sayılmaz.")}
      </Text>
    </View>
  );

  return (
    <SectionList
      style={{ backgroundColor: renk.arkaPlan }}
      contentContainerStyle={{
        padding: bosluk.l,
        paddingTop: ins.top + bosluk.l,
        paddingBottom: bosluk.xxl + ins.bottom,
      }}
      sections={bolumler}
      keyExtractor={anahtar}
      ListHeaderComponent={ust}
      stickySectionHeadersEnabled={false}
      initialNumToRender={5}
      renderSectionHeader={renderSectionHeader}
      ItemSeparatorComponent={Ayrac}
      renderItem={renderItem}
      ListEmptyComponent={
        st.bende.length === 0 ? (
          <Bos
            ikon="toolbox-outline"
            baslik={t("Önce elindekileri ekle")}
            metin={t("Malzemelerim'e aletlerini ve malzemelerini ekle; hangi projeleri yapabileceğini gösterelim.")}
          />
        ) : (
          <Bos
            ikon="package-variant"
            baslik={t("Henüz uygun proje yok")}
            metin={t("Elindekilerle en fazla 2 eksikle yapılabilecek proje bulunamadı. Birkaç alet daha ekle.")}
          />
        )
      }
    />
  );
}

const anahtar = (item: { x: Y }) => item.x.p.id;

// Satır içinde tanımlanırsa her render'da yeni bileşen tipi olur ve ayraçlar baştan kurulur
const Ayrac = () => <View style={{ height: bosluk.l }} />;

type OgeProps = { x: Y; eksikListede: boolean; ac: (id: string) => void; ekle: (x: Y) => void };

const Oge = memo(function Oge({ x, eksikListede, ac, ekle }: OgeProps) {
  return (
    <View>
      <ProjeKart p={x.p} onPress={() => ac(x.p.id)} />
      <View style={s.eksikKutu}>
        <Ikon
          name={x.eksik.length ? "cart-outline" : "check-circle"}
          size={18}
          color={x.eksik.length ? renk.uyari : renk.basari}
        />
        <Text style={[yazi.kucuk, { flex: 1, color: renk.yazi }]}>
          {x.eksik.length ? (
            <>
              <Text style={{ fontWeight: "700" }}>{t("Eksik:")} </Text>
              {x.eksik.map((m) => m.ad).join(", ")}
            </>
          ) : (
            tn("Gereken {n} kalemin hepsi sende", x.gerekli)
          )}
        </Text>
        {x.eksik.length > 0 && (
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={t("{ad}: eksikleri listeye ekle", { ad: x.p.ad })}
            disabled={eksikListede}
            onPress={() => ekle(x)}
            hitSlop={8}
          >
            <Text style={{ color: eksikListede ? renk.basari : renk.ana, fontWeight: "700", fontSize: 13 }}>
              {eksikListede ? t("Listede ✓") : t("Listeye ekle")}
            </Text>
          </Pressable>
        )}
      </View>
    </View>
  );
});

const s = stil(() => ({
  duzenle: {
    flexDirection: "row",
    alignItems: "center",
    gap: bosluk.s,
    backgroundColor: renk.anaAcik,
    borderRadius: kose.m,
    padding: bosluk.m,
  },
  bolum: { ...yazi.baslik, marginTop: bosluk.xl, marginBottom: bosluk.m },
  eksikKutu: {
    flexDirection: "row",
    alignItems: "center",
    gap: bosluk.s,
    backgroundColor: renk.kart,
    borderRadius: kose.m,
    padding: bosluk.m,
    marginTop: 6,
    borderWidth: 1,
    borderColor: renk.cizgi,
  },
}));
