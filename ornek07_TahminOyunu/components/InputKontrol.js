import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Buton from "./Buton";
import GizliSayiKutusu from "./GizliSayiKutusu";
import Renkler from "../constants/renkler";
const InputKontrol = (props) => {
  return (
    <View style={styles.kart}>
      <View style={styles.tahminRow}>
        <TextInput
          style={styles.input}
          onChangeText={props.guncelle}
          value={props.tahmin}
        ></TextInput>
        <Buton style={styles.btnKontrol} onPress={props.kontrolEt}>
          Kontrol
        </Buton>
      </View>

      <View style={styles.gizliSayiRow}>
        <GizliSayiKutusu />
      </View>
    </View>
  );
};

export default InputKontrol;

const styles = StyleSheet.create({
  kart: {
    width: 300,
    backgroundColor: Renkler.mavi11,
    padding: 10,
    borderRadius: 20,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    elevation: 9,
  },
  btnKontrol: {
    backgroundColor: Renkler.mavi4,
    width: 100,
    height: 50,
  },
  input: {
    borderWidth: 2,
    borderRadius: 20,
    borderColor: Renkler.mavi1,
    width: 120,
    height: 50,
    fontSize: 30,
    textAlign: "center",
  },
  tahminRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
  },
});
