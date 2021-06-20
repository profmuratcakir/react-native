import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Colors from "./constants/color";
const MyButton = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={styles.text}>{props.children} </Text>
      </View>
    </TouchableOpacity>
  );
};
export default MyButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.anaRenk,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: 90,
    height: 40,
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
  },
});
