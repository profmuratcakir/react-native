import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Merhaba() {
  return (
    <View>
      <Text style={stiller.selam}>Merhaba</Text>
    </View>
  );
}

const stiller = StyleSheet.create({
  selam: {
    color: "purple",
    fontSize: 14,
  },
});
