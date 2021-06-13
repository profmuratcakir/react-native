import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

//* ======================== RESIM EKLEME =====================
//?- Resim eklemek icin <Image> kmponenti kullanilir.
//?- Genellikle resimler bir View elamani icerisinde gosterilir.
//?- Harici resimlerin yolu source dogrudan gosterilir.
//?- Lokal resimler icin require metodu ile yol gosterilir.
//?  Ornegin::: require("./assets/techpro.png")
//* ===========================================================

export default function Images() {
  return (
    <View style={styles.container}>
      <Text>Resim Ekleme</Text>
      <Image
        style={styles.logo}
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
      ></Image>
      <Image
        style={styles.techpro}
        source={require("./assets/logo.png")}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 300,
    alignItems: "center",
  },
  logo: {
    marginTop: 10,
    width: "50%",
    height: "50%",
  },
  techpro: {
    width: "100%",
    resizeMode: "contain",
  },
});
