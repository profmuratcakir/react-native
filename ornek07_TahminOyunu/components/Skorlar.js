import React from "react";
import { StyleSheet, Text, View } from "react-native";
import globalStyles from "../constants/globalStyles";

const Skorlar = (props) => {
  return (
    <View style={styles.skorlar}>
      <View style={[styles.skorKutu, globalStyles.golge]}>
        <Text style={styles.skorYazi}> 💯 Skor</Text>
        <Text style={styles.skorYazi}> {props.skor}</Text>
      </View>
      <View style={[styles.skorKutu, globalStyles.golge]}>
        <Text style={styles.skorYazi}>🥇 Top Skor</Text>
        <Text style={styles.skorYazi}>{props.yuksekSkor}</Text>
      </View>
    </View>
  );
};

export default Skorlar;

const styles = StyleSheet.create({
  skorlar: {
    flexDirection: "row",
    justifyContent: "center",
  },
  skorKutu: {
    width: 140,
    backgroundColor: "lightgrey",
    margin: 10,
    borderRadius: 5,
  },
  skorYazi: {
    fontSize: 20,
    fontFamily: "Nunito_700Bold",
    textAlign: "center",
  },
});
