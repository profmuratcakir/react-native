import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Buton from "./Buton";
import GizliSayiKutusu from "./GizliSayiKutusu";
import Renkler from "../constants/renkler";
import globalStyles from "../constants/globalStyles";
const InputKontrol = (props) => {
  return (
    <View style={[styles.kart, globalStyles.golge]}>
      <Text style={styles.aciklama}>Tahmininizi Giriniz (1-99)</Text>
      <View style={styles.tahminRow}>
        <TextInput
          style={styles.input}
          onChangeText={props.guncelle}
          value={props.tahmin}
          maxLength={2}
          keyboardType="number-pad"
          placeholder="Tahmin"
        ></TextInput>
        <Buton style={styles.btnKontrol} onPress={props.kontrolEt}>
          Kontrol
        </Buton>
      </View>
      <Text style={styles.aciklama}>Gizli Sayı</Text>
      <View style={styles.gizliSayiRow}>
        <GizliSayiKutusu gizliSayi={props.gizliSayi} />
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
  },
  btnKontrol: {
    backgroundColor: Renkler.mavi4,
    width: 100,
    height: 80,
  },
  input: {
    borderWidth: 3,
    borderRadius: 20,
    borderColor: Renkler.mavi1,
    width: 120,
    height: "100%",
    fontSize: 30,
    textAlign: "center",
    backgroundColor: Renkler.acikKirmizi,
    color: "white",
  },
  tahminRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
  },
  gizliSayiRow: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  aciklama: {
    textAlign: "center",
    fontFamily: "Nunito_700Bold",
    fontSize: 17,
    marginVertical: 5,
  },
});
