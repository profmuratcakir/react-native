import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Flexbox01 = () => {
  return (
    <View style={styles.body}>
      <View>
        <View style={styles.view1}>
          <Text style={styles.yazi}>1</Text>
        </View>
        <View style={styles.view2}>
          <Text style={styles.yazi}>2</Text>
        </View>
        <View style={styles.view3}>
          <Text style={styles.yazi}>3</Text>
        </View>
      </View>

      <View>
        <View style={styles.view2}>
          <Text style={styles.yazi}>2</Text>
        </View>
        <View style={styles.view3}>
          <Text style={styles.yazi}>3</Text>
        </View>
      </View>
    </View>
  );
};

export default Flexbox01;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    //! column (default), row, row-reverse, column-reverse
    flexDirection: "row",
    //!Bir den fazla satira veya sutuna geçmesine izin verir.
    flexWrap: "wrap",

    //! flex-start, flex-end, center, stretch, baseline (Dikey Hizlama)
    alignItems: "center",

    //!flex-start, flex-end, center, space-between, space-around, space-evenly (Yatay Hizlama)
    justifyContent: "space-evenly",
  },
  view1: {
    flex: 1,
    backgroundColor: "cyan",
  },
  view2: {
    flex: 2,
    backgroundColor: "pink",
  },
  view3: {
    flex: 3,
    backgroundColor: "red",
  },
  yazi: {
    fontSize: 50,
    color: "blue",
    textAlign: "center",
  },
});
