import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Merhaba(props) {
  const { name, renk, size } = props;
  //! Destructuring islemi ile props'u ayristir
  return (
    <View>
      <Text style={[stiller.selam, { color: renk, fontSize: Number(size) }]}>
        Merhaba {name}
      </Text>
    </View>
  );
}

const stiller = StyleSheet.create({
  selam: {
    fontWeight: "bold",
    // fontFamily: "Fantasy",
  },
});
