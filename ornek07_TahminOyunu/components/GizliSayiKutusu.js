import React from "react";
import { StyleSheet, Text, View } from "react-native";
import globalStyles from "../constants/globalStyles";
import Renkler from "../constants/renkler";
const GizliSayiKutusu = (props) => {
  return (
    <View style={[styles.sayiKutusu, globalStyles.golge]}>
      <Text style={[styles.soru, globalStyles.fontLucky]}>
        {props.gizliSayi}
      </Text>
    </View>
  );
};

export default GizliSayiKutusu;

const styles = StyleSheet.create({
  sayiKutusu: {
    width: 120,
    height: 80,
    backgroundColor: Renkler.mavi9,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  soru: {
    fontSize: 40,
    color: Renkler.koyuKirmizi,
  },
});
