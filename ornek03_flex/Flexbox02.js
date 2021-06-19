import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Flexbox02 = () => {
  return (
    <View style={styles.body}>
      <View style={styles.row}>
        <View style={styles.img1}>
          <Image
            style={styles.images}
            source={{
              uri: "https://images.pexels.com/photos/92933/pexels-photo-92933.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            }}
          ></Image>
        </View>
        <View style={styles.img2}>
          <Image
            style={styles.images}
            source={{
              uri: "https://picsum.photos/id/237/200/300",
            }}
          ></Image>
        </View>
        <View style={styles.img3}>
          <Image
            style={styles.images}
            source={{
              uri: "https://picsum.photos/id/248/200/300",
            }}
          ></Image>
        </View>
      </View>
      <View style={styles.bigRow}>
        <View style={styles.img4}>
          <Image
            style={styles.images}
            source={{
              uri: "https://picsum.photos/id/239/200/300",
            }}
          ></Image>
        </View>
        <View style={styles.img5}>
          <Image
            style={styles.images}
            source={{
              uri: "https://picsum.photos/id/139/200/300",
            }}
          ></Image>
        </View>
      </View>
    </View>
  );
};

export default Flexbox02;

const styles = StyleSheet.create({
  body: {
    flex: 3,
  },
  row: {
    flex: 2,
    flexDirection: "row",
  },
  bigRow: {
    flex: 5,
    flexDirection: "row",
  },
  //Kücük satirdaki resimler
  img1: {
    flex: 1,
  },
  img2: {
    flex: 2,
  },
  img3: {
    flex: 3,
  },

  // Büyük satir
  img4: {
    flex: 1,
  },
  img5: {
    flex: 2,
  },
  images: {
    width: "100%",
    height: "100%",
  },
});
