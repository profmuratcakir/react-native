import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import InputKontrol from "./InputKontrol";

const Ekran = () => {
  const [tahmin, setTahmin] = useState("");
  console.log(tahmin);
  function guncelle(girilen) {
    setTahmin(girilen);
  }
  function kontrolEt() {
    console.log(tahmin);
  }
  return (
    <View style={styles.ekran}>
      <InputKontrol tahmin={tahmin} guncelle={guncelle} kontrolEt={kontrolEt} />
    </View>
  );
};

export default Ekran;

const styles = StyleSheet.create({
  ekran: {
    flex: 1,
  },
});
