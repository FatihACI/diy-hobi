import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Ikon } from "./src/components";
import { IkonAdi } from "./src/data/types";
import { RootParams } from "./src/nav";
import Favoriler from "./src/screens/Favoriler";
import KategoriDetay from "./src/screens/KategoriDetay";
import Kategoriler from "./src/screens/Kategoriler";
import Kesfet from "./src/screens/Kesfet";
import Liste from "./src/screens/Liste";
import ProjeDetay from "./src/screens/ProjeDetay";
import { FiyatProvider } from "./src/fiyat";
import { StoreProvider, useStore } from "./src/store";
import { renk } from "./src/theme";

const Stack = createNativeStackNavigator<RootParams>();
const Tab = createBottomTabNavigator();

const IKONLAR: Record<string, [IkonAdi, IkonAdi]> = {
  Keşfet: ["compass", "compass-outline"],
  Kategoriler: ["view-grid", "view-grid-outline"],
  Liste: ["cart", "cart-outline"],
  Favoriler: ["heart", "heart-outline"],
};

function Sekmeler() {
  const { liste } = useStore();
  const bekleyen = Object.values(liste).filter((x) => !x.alindi).length;
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: renk.ana,
        tabBarInactiveTintColor: renk.yaziIkincil,
        tabBarStyle: { height: 64, paddingTop: 6, borderTopColor: renk.cizgi },
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
    </Tab.Navigator>
  );
}

const tema = { ...DefaultTheme, colors: { ...DefaultTheme.colors, background: renk.arkaPlan, primary: renk.ana } };

export default function App() {
  return (
    <SafeAreaProvider>
      <StoreProvider>
        <FiyatProvider>
          <NavigationContainer theme={tema}>
            <StatusBar style="dark" />
            <Stack.Navigator screenOptions={{ headerShown: false, animation: "slide_from_right" }}>
              <Stack.Screen name="Sekmeler" component={Sekmeler} />
              <Stack.Screen name="Kategori" component={KategoriDetay} />
              <Stack.Screen name="Proje" component={ProjeDetay} />
            </Stack.Navigator>
          </NavigationContainer>
        </FiyatProvider>
      </StoreProvider>
    </SafeAreaProvider>
  );
}
