import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Renkler from "../constants/renkler";
const GizliSayiKutusu = (props) => {
  return (
    <View style={styles.sayiKutusu}>
      <Text style={styles.soru}>{props.gizliSayi}</Text>
    </View>
  );
};

export default GizliSayiKutusu;

const styles = StyleSheet.create({
  sayiKutusu: {
    width: 150,
    height: 80,
    backgroundColor: Renkler.mavi6,
    borderRadius: 20,
  },
  soru: {},
});
