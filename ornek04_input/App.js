import React, { useState } from "react";
import { StyleSheet, SafeAreaView, TextInput, View } from "react-native";
import { Button, Text } from "react-native-elements";

function App() {
  const [ad, setAd] = useState("");
  const [yas, setYas] = useState("");

  function handleSil() {
    setAd("");
    setYas("");
  }
  function handleGonder() {
    console.log("KAYDEDILEN BILGILER:" + ad, yas);
    handleSil();
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text h1>KAYIT FORMU</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Adinizi Giriniz"
        value={ad}
        onChangeText={(ad) => setAd(ad)}
      ></TextInput>

      <TextInput
        style={styles.textInput}
        placeholder="Yasinizi Giriniz"
        value={yas}
        onChangeText={(yas) => setYas(yas)}
      ></TextInput>

      <View style={styles.btnContainer}>
        <Button
          buttonStyle={{ backgroundColor: "green" }}
          title="Gönder"
          onPress={handleGonder}
        ></Button>
        <Button
          buttonStyle={{ backgroundColor: "red" }}
          title="Temizle"
          onPress={handleSil}
        ></Button>
      </View>

      {ad ? <Text>Benim adim {ad} </Text> : null}
      {yas ? <Text>Yasim {yas} </Text> : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    borderWidth: 1,
    width: 200,
    padding: 10,
    backgroundColor: "lightblue",
    borderRadius: 4,
    color: "red",
    marginVertical: 10,
  },
  btnContainer: {
    marginVertical: 20,
    flexDirection: "row",
    width: 300,
    justifyContent: "space-evenly",
  },
});

export default App;
