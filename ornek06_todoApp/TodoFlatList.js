import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TouchableHighlight,
  Platform,
  ToastAndroid,
  Alert,
} from "react-native";
import { Button, Text } from "react-native-elements";
import MyButton from "./MyButton";

export default function TodoFlatList() {
  const [is, setIs] = useState("");
  const [isler, setIsler] = useState([]);

  const girilenIsiOku = function (girisText) {
    setIs(girisText);
  };

  const ekle = function () {
    if (!is) {
      //! Platforma gore uyari mesaji vermek icin Platform.OS kullanilabilir.
      if (Platform.OS === "android") {
        ToastAndroid.showWithGravity(
          "Yapilacaklar bos birakilamaz",
          ToastAndroid.LONG,
          ToastAndroid.CENTER
        );
      } else if (Platform.OS === "ios") {
        Alert.alert("Yapilacaklar bos birakilamaz");
      }
    } else {
      setIsler((mevcutIsler) => [
        ...mevcutIsler,
        { id: Math.random().toString(), deger: is },
      ]);
      setIs("");
    }
  };

  function isSil(id) {
    setIsler((suankiIsler) => suankiIsler.filter((is) => is.id !== id));
  }

  return (
    <View style={styles.body}>
      <Text h2 style={styles.baslik}>
        YAPILACAKLAR
      </Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Yapilacaklari giriniz"
          value={is}
          onChangeText={girilenIsiOku}
        ></TextInput>
        <MyButton onPress={ekle}> EKLE</MyButton>
      </View>
      <FlatList
        keyExtrator={(item) => item.id}
        data={isler}
        renderItem={(is) => (
          <TouchableOpacity
            activeOpacity={0.5}
            // underlayColor="grey"
            onPress={() => isSil(is.item.id)}
          >
            <View style={styles.isKutu}>
              <Text style={styles.isYazi}>{is.item.deger}</Text>
            </View>
          </TouchableOpacity>
        )}
      ></FlatList>
    </View>
  );
}
const styles = StyleSheet.create({
  body: {
    padding: 50,
  },
  baslik: {
    textAlign: "center",
    color: "darkgreen",
    fontWeight: "700",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  input: {
    width: "80%",
    borderWidth: 1,
    height: 40,
    marginRight: 10,
  },
  isKutu: {
    padding: 10,
    backgroundColor: "yellowgreen",
    marginVertical: 15,
    borderRadius: 5,
    shadowColor: "black",
    shadowOpacity: 0.5,
    elevation: 5,
  },
  isYazi: {
    fontSize: 20,
    fontWeight: "700",
  },
});
