import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Renkler from "../constants/renkler";
import globalStyles from "../constants/globalStyles";
const Buton = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={props.kontrolEt}>
      <View style={{ ...styles.button, ...props.style }}>
        <Text style={[styles.text, globalStyles.fontNunitoBold]}>
          {props.children}{" "}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default Buton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
});
