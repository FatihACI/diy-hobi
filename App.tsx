import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DarkTheme, DefaultTheme, NavigationContainer, NavigationState } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { useRef } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Ikon } from "./src/components";
import { IkonAdi } from "./src/data/types";
import { RootParams } from "./src/nav";
import Araclar, { AracDetay } from "./src/screens/Araclar";
import Atolye from "./src/screens/Atolye";
import Bulucu from "./src/screens/Bulucu";
import Favoriler from "./src/screens/Favoriler";
import KategoriDetay from "./src/screens/KategoriDetay";
import Kategoriler from "./src/screens/Kategoriler";
import Kesfet from "./src/screens/Kesfet";
import Liste from "./src/screens/Liste";
import Malzemelerim from "./src/screens/Malzemelerim";
import ProjeDetay from "./src/screens/ProjeDetay";
import Rozetler from "./src/screens/Rozetler";
import Yapabilir from "./src/screens/Yapabilir";
import { FiyatProvider } from "./src/fiyat";
import { HataSiniri } from "./src/hata";
import { sentrySar } from "./src/sentry";
import { IlkAcilisUyarisi } from "./src/uyari";
import { StoreProvider, useStore } from "./src/store";
import { TemaProvider, useTema } from "./src/tema";
import { renk } from "./src/theme";

const Stack = createNativeStackNavigator<RootParams>();
const Tab = createBottomTabNavigator();

const IKONLAR: Record<string, [IkonAdi, IkonAdi]> = {
  Keşfet: ["compass", "compass-outline"],
  Kategoriler: ["view-grid", "view-grid-outline"],
  Liste: ["cart", "cart-outline"],
  Favoriler: ["heart", "heart-outline"],
  Atölyem: ["toolbox", "toolbox-outline"],
};

function Sekmeler() {
  const { liste } = useStore();
  const bekleyen = Object.values(liste).filter((x) => !x.alindi).length;
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        // Görünmeyen sekmeler dondurulur: listede/favoride değişiklik olunca arkadaki sekmeler boşuna çizilmez
        freezeOnBlur: true,
        tabBarActiveTintColor: renk.ana,
        tabBarInactiveTintColor: renk.yaziIkincil,
        tabBarStyle: { height: 64, paddingTop: 6, borderTopColor: renk.cizgi, backgroundColor: renk.kart },
        tabBarLabelStyle: { fontSize: 12, fontWeight: "600", marginBottom: 6 },
        tabBarIcon: ({ focused, color }) => (
          <Ikon name={IKONLAR[route.name][focused ? 0 : 1]} size={24} color={color} />
        ),
      })}
    >
      <Tab.Screen name="Keşfet" component={Kesfet} />
      <Tab.Screen name="Kategoriler" component={Kategoriler} />
      <Tab.Screen
        name="Liste"
        component={Liste}
        options={{ tabBarBadge: bekleyen || undefined, tabBarBadgeStyle: { backgroundColor: renk.ana } }}
      />
      <Tab.Screen name="Favoriler" component={Favoriler} />
      <Tab.Screen name="Atölyem" component={Atolye} />
    </Tab.Navigator>
  );
}

// Tema değişince gezinme ağacı yeniden kurulur; kullanıcı bulunduğu ekranda kalsın diye durum saklanır
function Gezinme({ durumRef }: { durumRef: { current?: NavigationState } }) {
  const { koyu } = useTema();
  const taban = koyu ? DarkTheme : DefaultTheme;
  const tema = {
    ...taban,
    colors: {
      ...taban.colors,
      background: renk.arkaPlan,
      card: renk.kart,
      text: renk.yazi,
      border: renk.cizgi,
      primary: renk.ana,
    },
  };
  // initialState yalnızca kurulumda okunur (tema değişimi sonrası aynı ekrana dönmek için)
  // eslint-disable-next-line react-hooks/refs
  const ilkDurum = durumRef.current;
  return (
    <NavigationContainer theme={tema} initialState={ilkDurum} onStateChange={(s) => (durumRef.current = s)}>
      <StatusBar style={koyu ? "light" : "dark"} />
      {/* freezeOnBlur: üstte açık ekran varken alttaki ekranlar yeniden çizilmez (ör. adım işaretlerken) */}
      <Stack.Navigator screenOptions={{ headerShown: false, animation: "slide_from_right", freezeOnBlur: true }}>
        <Stack.Screen name="Sekmeler" component={Sekmeler} />
        <Stack.Screen name="Kategori" component={KategoriDetay} />
        <Stack.Screen name="Proje" component={ProjeDetay} />
        <Stack.Screen name="Yapabilir" component={Yapabilir} />
        <Stack.Screen name="Malzemelerim" component={Malzemelerim} />
        <Stack.Screen name="Bulucu" component={Bulucu} />
        <Stack.Screen name="Araclar" component={Araclar} />
        <Stack.Screen name="Arac" component={AracDetay} />
        <Stack.Screen name="Rozetler" component={Rozetler} />
      </Stack.Navigator>
      <IlkAcilisUyarisi />
    </NavigationContainer>
  );
}
function App() {
  const gezinmeDurumu = useRef<NavigationState | undefined>(undefined);
  return (
    <SafeAreaProvider>
      <HataSiniri>
        <StoreProvider>
          <FiyatProvider>
            <TemaProvider>
              <Gezinme durumRef={gezinmeDurumu} />
            </TemaProvider>
          </FiyatProvider>
        </StoreProvider>
      </HataSiniri>
    </SafeAreaProvider>
  );
}

export default sentrySar(App);
