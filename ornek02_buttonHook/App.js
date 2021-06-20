import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Sayac from "./Sayac";
import ButtonRNE from "./ButtonRNE";
import Kart from "./Kart";
export default function App() {
  return (
    <View style={styles.container}>
      {/* <Sayac /> */}
      <ButtonRNE />
      <Kart />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lavenderblush",
    justifyContent: "center",
    alignItems: "center",
  },
});
