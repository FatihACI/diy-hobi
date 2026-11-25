import { memo, useCallback, useLayoutEffect, useMemo, useRef } from "react";
import { Alert, Pressable, SectionList, Share, Text, View } from "react-native";
import type { SectionListRenderItem } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Bos, Ikon, tl } from "../components";
import { useFiyat } from "../fiyat";
import { kategoriBul } from "../data/kategoriler";
import { KALEMLER } from "../data/katalog-dizin";
import { PROJELER } from "../data/projeler";
import { useNav } from "../nav";
import { useStore } from "../store";
import { bosluk, golge, kose, renk, yazi, stil } from "../theme";

const projeAd = (id: string) => PROJELER.find((p) => p.id === id)?.ad ?? id;
const miktar = (x: { projeler: string[]; kalem: { projeler: { projeId: string; miktar?: string }[] } }) =>
  x.projeler.length > 1
    ? `${x.projeler.length} projede`
    : (x.kalem.projeler.find((p) => p.projeId === x.projeler[0])?.miktar ?? "");

export default function Liste() {
  const st = useStore();
  const { enUcuz } = useFiyat();
  const nav = useNav();
  const ust = useSafeAreaInsets().top;

  // Store fonksiyonları her render'da yeniden oluşuyor; satırlara sabit callback vermek için en güncelini ref'te tut
  const stRef = useRef(st);
  useLayoutEffect(() => {
    stRef.current = st;
  });
  const alindiDegistir = useCallback((kid: string) => stRef.current.alindiDegistir(kid), []);
  const bendeDegistir = useCallback((kid: string) => stRef.current.bendeDegistir(kid), []);
  const listedenCikar = useCallback((kid: string) => stRef.current.listedenCikar(kid), []);

  // Listedeki kalemler: katalog kimliğiyle tek satır (aynı malzeme 3 projede olsa da bir kez).
  // En ucuz fiyat (sıralama yapıyor) kalem başına bir kez hesaplanır.
  const kalemler = useMemo(
    () =>
      Object.entries(st.liste)
        .map(([kid, v]) => ({ kalem: KALEMLER.get(kid)!, ...v }))
        .filter((x) => x.kalem)
        .map((x) => ({ ...x, f: enUcuz(x.kalem.ornek) }))
        .sort((a, b) => Number(a.alindi) - Number(b.alindi) || a.kalem.ad.localeCompare(b.kalem.ad, "tr")),
    [st.liste, enUcuz],
  );
  const bolumler = useMemo(
    () =>
      [
        { baslik: "Malzemeler", data: kalemler.filter((x) => !x.kalem.arac) },
        { baslik: "Aletler", data: kalemler.filter((x) => x.kalem.arac) },
      ].filter((b) => b.data.length),
    [kalemler],
  );
  const projeIdler = [...new Set(kalemler.flatMap((x) => x.projeler))];
  const alinan = kalemler.filter((x) => x.alindi).length;
  const kalan = kalemler.filter((x) => !x.alindi).reduce((t, x) => t + (x.f?.fiyat ?? 0), 0);
  const fiyatsiz = kalemler.filter((x) => !x.alindi && !x.kalem.ornek.evde && !x.f).length;

  // Listeyi düz metne çevirip telefonun paylaşım menüsünü aç (WhatsApp, SMS, not...)
  const paylas = () => {
    const satirlar = ["🛒 Protyp – Alışveriş Listesi", `Projeler: ${projeIdler.map(projeAd).join(", ")}`, ""];
    for (const b of bolumler) {
      satirlar.push(`▸ ${b.baslik}`);
      for (const x of b.data) {
        const f = x.f;
        satirlar.push(
          `${x.alindi ? "✅" : "⬜"} ${x.kalem.ad} (${miktar(x)})${f ? ` – ${tl(f.fiyat)}, ${f.magaza}` : ""}`,
        );
        if (f && !x.alindi) satirlar.push(`   ${f.url}`);
      }
      satirlar.push("");
    }
    if (kalan > 0) satirlar.push(`Kalan tahmini tutar: ${tl(kalan)}`);
    Share.share({ message: satirlar.join("\n") }).catch(() => {});
  };

  // Üst bölüm: başlık + butonlar, boşsa uyarı, doluysa özet ve proje çipleri
  const ustBolum = (
    <>
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <Text style={yazi.dev}>Alışveriş Listesi</Text>
        {kalemler.length > 0 && (
          <View style={{ flexDirection: "row", gap: bosluk.m }}>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Listeyi paylaş"
              onPress={paylas}
              hitSlop={10}
              style={s.ustBtn}
            >
              <Ikon name="share-variant" size={20} color={renk.ana} />
            </Pressable>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Listeyi temizle"
              hitSlop={10}
              style={s.ustBtn}
              onPress={() =>
                Alert.alert("Listeyi temizle", "Tüm malzemeler listeden silinsin mi?", [
                  { text: "Vazgeç", style: "cancel" },
                  { text: "Temizle", style: "destructive", onPress: st.listeyiTemizle },
                ])
              }
            >
              <Ikon name="trash-can-outline" size={20} color={renk.tehlike} />
            </Pressable>
          </View>
        )}
      </View>

      {kalemler.length === 0 ? (
        <Bos ikon="cart-outline" baslik="Listen boş" metin="Bir projeyi açıp 'Malzemeleri listeye ekle'ye dokun." />
      ) : (
        <>
          <View style={s.ozet}>
            <View>
              <Text style={yazi.kucuk}>Alınan</Text>
              <Text style={s.ozetDeger}>
                {alinan} / {kalemler.length}
              </Text>
            </View>
            <View style={{ alignItems: "flex-end" }}>
              <Text style={yazi.kucuk}>Kalan tahmini tutar</Text>
              <Text style={s.ozetDeger}>{kalan > 0 ? (fiyatsiz ? "≥ " : "") + tl(kalan) : "—"}</Text>
            </View>
          </View>

          {/* Listedeki projeler: dokununca projeye git */}
          <View style={s.cipler}>
            {projeIdler.map((pid) => {
              const p = PROJELER.find((x) => x.id === pid);
              if (!p) return null;
              return (
                <Pressable
                  key={pid}
                  accessibilityRole="button"
                  onPress={() => nav.navigate("Proje", { id: pid })}
                  style={[s.cip, { borderColor: kategoriBul(p.kategoriId).renkler[0] }]}
                >
                  <Ikon name={p.ikon} size={14} color={kategoriBul(p.kategoriId).renkler[0]} />
                  <Text style={s.cipYazi}>{p.ad}</Text>
                </Pressable>
              );
            })}
          </View>
        </>
      )}
    </>
  );

  // Malzemeler / Aletler bölümleri SectionList ile: yalnızca ekranda görünen satırlar çizilir.
  // Satıra yalnız ilkel değerler + sabit callback'ler gider; memo sayesinde sadece değişen satır yeniden çizilir.
  type Kalem = (typeof kalemler)[number];
  type Bolum = (typeof bolumler)[number];
  const renderItem: SectionListRenderItem<Kalem, Bolum> = useCallback(
    ({ item: x, index, section }) => (
      <ListeSatiri
        kid={x.kalem.kid}
        ad={x.kalem.ad}
        alindi={x.alindi}
        altYazi={miktar(x) + (x.f ? ` · ${x.f.magaza}` : "")}
        fiyatYazi={x.f ? tl(x.f.fiyat) : ""}
        ilk={index === 0}
        son={index === section.data.length - 1}
        onAlindi={alindiDegistir}
        onBende={bendeDegistir}
        onCikar={listedenCikar}
      />
    ),
    [alindiDegistir, bendeDegistir, listedenCikar],
  );
  const renderSectionHeader = useCallback(
    ({ section }: { section: Bolum }) => (
      <Text style={[yazi.altBaslik, { marginTop: bosluk.l, marginBottom: bosluk.s }]}>
        {section.baslik} ({section.data.length})
      </Text>
    ),
    [],
  );

  return (
    <SectionList
      style={{ backgroundColor: renk.arkaPlan }}
      contentContainerStyle={{ padding: bosluk.l, paddingTop: ust + bosluk.l, paddingBottom: bosluk.xxl }}
      sections={bolumler}
      keyExtractor={anahtar}
      stickySectionHeadersEnabled={false}
      initialNumToRender={20}
      ListHeaderComponent={ustBolum}
      renderSectionHeader={renderSectionHeader}
      renderItem={renderItem}
      ListFooterComponent={
        kalemler.length > 0 ? (
          <Text style={[yazi.kucuk, { marginTop: bosluk.l }]}>
            Evde olan bir şeyi ⌂ ile işaretle: listeden düşer ve sonraki projelerde de listeye eklenmez.
          </Text>
        ) : undefined
      }
    />
  );
}

const anahtar = (x: { kalem: { kid: string } }) => x.kalem.kid;

type SatirProps = {
  kid: string;
  ad: string;
  alindi: boolean;
  altYazi: string;
  fiyatYazi: string;
  ilk: boolean;
  son: boolean;
  onAlindi: (kid: string) => void;
  onBende: (kid: string) => void;
  onCikar: (kid: string) => void;
};

const ListeSatiri = memo(function ListeSatiri({
  kid,
  ad,
  alindi,
  altYazi,
  fiyatYazi,
  ilk,
  son,
  onAlindi,
  onBende,
  onCikar,
}: SatirProps) {
  return (
    <View style={[s.satir, s.satirKart, ilk && s.ilkSatir, son && s.sonSatir, !ilk && s.ayrac]}>
      <Pressable
        accessibilityRole="checkbox"
        accessibilityState={{ checked: alindi }}
        accessibilityLabel={`${ad} alındı`}
        onPress={() => onAlindi(kid)}
        hitSlop={8}
      >
        <Ikon
          name={alindi ? "checkbox-marked-circle" : "checkbox-blank-circle-outline"}
          size={24}
          color={alindi ? renk.basari : renk.yaziIkincil}
        />
      </Pressable>
      <View style={{ flex: 1 }}>
        <Text style={[yazi.govde, alindi && s.ustuCizili]}>{ad}</Text>
        <Text style={yazi.kucuk}>{altYazi}</Text>
      </View>
      <Text style={{ fontWeight: "700", color: renk.yazi }}>{fiyatYazi}</Text>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={`${ad}: bende var, listeden çıkar`}
        onPress={() => onBende(kid)}
        hitSlop={8}
      >
        <Ikon name="home-plus-outline" size={20} color={renk.yaziIkincil} />
      </Pressable>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={`${ad}: listeden çıkar`}
        onPress={() => onCikar(kid)}
        hitSlop={8}
      >
        <Ikon name="close" size={18} color={renk.yaziIkincil} />
      </Pressable>
    </View>
  );
});

const s = stil(() => ({
  ustBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: renk.kart,
    borderWidth: 1,
    borderColor: renk.cizgi,
    alignItems: "center",
    justifyContent: "center",
  },
  ozet: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: renk.kart,
    borderRadius: kose.l,
    padding: bosluk.l,
    marginTop: bosluk.l,
    ...golge,
  },
  ozetDeger: { fontSize: 22, fontWeight: "800", color: renk.yazi, marginTop: 2 },
  grupBaslik: { flexDirection: "row", alignItems: "center", gap: bosluk.s, marginBottom: bosluk.s },
  grupIkon: { width: 28, height: 28, borderRadius: 8, alignItems: "center", justifyContent: "center" },
  // Satırlar ayrı çizildiği için kart görünümü satır bazında: ilk satır üst köşe, son satır alt köşe yuvarlak
  satirKart: { backgroundColor: renk.kart },
  ilkSatir: { borderTopLeftRadius: kose.m, borderTopRightRadius: kose.m },
  sonSatir: { borderBottomLeftRadius: kose.m, borderBottomRightRadius: kose.m },
  satir: { flexDirection: "row", alignItems: "center", gap: bosluk.m, padding: bosluk.m },
  ayrac: { borderTopWidth: 1, borderColor: renk.cizgi },
  cipler: { flexDirection: "row", flexWrap: "wrap", gap: bosluk.s, marginTop: bosluk.l },
  cip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 16,
    borderWidth: 1,
    backgroundColor: renk.kart,
  },
  cipYazi: { fontSize: 12, fontWeight: "600", color: renk.yazi },
  ustuCizili: { textDecorationLine: "line-through", color: renk.yaziIkincil },
}));
