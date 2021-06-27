import React from "react";
import { StyleSheet, Text, View } from "react-native";
import globalStyles from "../constants/globalStyles";
import Renkler from "../constants/renkler";
const Mesaj = (props) => {
  return (
    <View style={[styles.mesajContainer, globalStyles.golge]}>
      <Text style={[styles.mesaj, globalStyles.fontLucky]}>{props.mesaj}</Text>
    </View>
  );
};

export default Mesaj;

const styles = StyleSheet.create({
  mesajContainer: {
    width: 300,
    height: 50,
    backgroundColor: Renkler.mavi11,
    justifyContent: "center",
    borderRadius: 20,
  },
  mesaj: {
    textAlign: "center",
    fontSize: 26,
    color: Renkler.koyuKirmizi,
  },
});
