import React from "react";
import { StyleSheet, Text, View } from "react-native";
import globalStyles from "../constants/globalStyles";
import Renkler from "../constants/renkler";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={[styles.text, globalStyles.fontLucky]}>
        SAYIYI TAHMIN ET
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 100,
    padding: 10,
    backgroundColor: Renkler.mavi4,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 25,
    color: "white",
  },
});
