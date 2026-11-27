// İlk açılışta bir kez gösterilen sorumluluk ve güvenlik uyarısı.
// Kullanıcı "Okudum" deyince telefonda saklanır; uygulama sürümü ilerleyip metin değişirse ANAHTAR artırılır.
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Modal, Pressable, ScrollView, Text, View } from "react-native";
import { Ikon } from "./components";
import { bosluk, kose, renk, yazi, stil } from "./theme";
import { t } from "./i18n";

const ANAHTAR = "evde-hobi-uyari-v1";

export const UYARI_MADDELERI = [
  "Projeler bilgilendirme amaçlıdır. Uygulamaya başlamadan önce her projenin güvenlik notlarını oku.",
  "Kesici aletler, sıcak tutkal, havya, kostik soda, reçine, elektrik ve şarjlı piller gibi riskli işlerde koruyucu ekipman kullan; emin değilsen bir uzmana danış.",
  "Çocuklar projeleri yalnızca yetişkin gözetiminde yapmalı; yaş önerilerine uy.",
  "Fiyatlar mağazalardan toplanır, değişebilir ve kargo hariçtir. Satın almadan önce mağazada kontrol et.",
  "Uygulamadaki bilgileri kendi sorumluluğunda uygularsın.",
];

export function IlkAcilisUyarisi() {
  const [goster, setGoster] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem(ANAHTAR)
      .then((v) => !v && setGoster(true))
      .catch(() => setGoster(true));
  }, []);

  const tamam = () => {
    setGoster(false);
    AsyncStorage.setItem(ANAHTAR, new Date().toISOString()).catch(() => {});
  };

  return (
    <Modal visible={goster} transparent animationType="fade" onRequestClose={() => {}}>
      <View style={s.perde}>
        <View style={s.kart}>
          <View style={s.baslikSatir}>
            <Ikon name="shield-check-outline" size={26} color={renk.ana} />
            <Text style={yazi.baslik}>{t("Hoş geldin!")}</Text>
          </View>
          <ScrollView style={{ maxHeight: 360 }} contentContainerStyle={{ gap: bosluk.m }}>
            {UYARI_MADDELERI.map((m) => (
              <View key={m} style={s.madde}>
                <Text style={s.nokta}>•</Text>
                <Text style={[yazi.govde, { flex: 1 }]}>{t(m)}</Text>
              </View>
            ))}
          </ScrollView>
          <Pressable accessibilityRole="button" onPress={tamam} style={s.btn}>
            <Text style={s.btnYazi}>{t("Okudum, anladım")}</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const s = stil(() => ({
  perde: { flex: 1, backgroundColor: "rgba(0,0,0,0.45)", justifyContent: "center", padding: bosluk.l },
  kart: { backgroundColor: renk.kart, borderRadius: kose.l, padding: bosluk.l, gap: bosluk.l },
  baslikSatir: { flexDirection: "row", alignItems: "center", gap: bosluk.s },
  madde: { flexDirection: "row", gap: bosluk.s },
  nokta: { color: renk.ana, fontWeight: "800", fontSize: 16 },
  btn: { backgroundColor: renk.ana, paddingVertical: bosluk.m, borderRadius: kose.m, alignItems: "center" },
  btnYazi: { color: "#fff", fontWeight: "700", fontSize: 16 },
}));
