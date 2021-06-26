import React from "react";
import { StyleSheet, View, Text } from "react-native";
import AppLoading from "expo-app-loading";
import Header from "./components/Header";
import Ekran from "./components/Ekran";
import {
  useFonts,
  Nunito_300Light,
  Nunito_400Regular,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";

import { LuckiestGuy_400Regular } from "@expo-google-fonts/luckiest-guy";

function App() {
  let [fontsLoaded] = useFonts({
    Nunito_300Light,
    Nunito_400Regular,
    Nunito_700Bold,
    LuckiestGuy_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.container}>
      <Header />
      <Ekran />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});

export default App;
