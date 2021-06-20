import React, { useState } from "react";
import { View, TextInput, StyleSheet, FlatList } from "react-native";
import { Button, Text } from "react-native-elements";

//! Stilleri harici bir stil dosyasi olarak ekle
import { globalStyles } from "./styles/globalStyles";

export default function TodoFlatList() {
  //! input'a girilen bir isin, durum degiskenine
  //! kaydedilmesi gerekiyor.
  const [is, setIs] = useState("");

  //! Ekle butonuna basildiginda ise girilen isin
  //! bir diziye kaydedilmesi gerekiyor. Islerin ekranda
  //! degiskenlik arz etmesinden dolayı state olması gerekir.
  const [isler, setIsler] = useState([]);

  //? Input'a girilen isin state'ni guncelle
  const girilenIsiOku = function (girisText) {
    setIs(girisText);
  };

  //? Ekle butonuna basilinca is state'ini isler ismindeki state'e ekle
  const ekle = function () {
    //! Girili olan isi, isler dizisine kaydet.
    setIsler((mevcutIsler) => [
      ...mevcutIsler,

      //! yeni isi kaydederken rasgele bir id atamasi da yap
      { id: Math.random().toString(), deger: is },
    ]);

    //!yeni is eklendikten sonra input'ta kalan yaziyi sil
    setIs("");
  };

  return (
    <View style={styles.body}>
      <Text h2 style={globalStyles.baslik}>
        YAPILACAKLAR
      </Text>
      <View style={globalStyles.inputContainer}>
        <TextInput
          style={globalStyles.input}
          placeholder="Yapilacaklari giriniz"
          value={is}
          onChangeText={girilenIsiOku}
        ></TextInput>
        <Button
          title="EKLE"
          buttonStyle={{ backgroundColor: "green", width: 80, height: 40 }}
          onPress={ekle}
        ></Button>
      </View>
      <FlatList
        keyExtrator={(item) => item.id}
        data={isler}
        renderItem={(is) => (
          <View style={globalStyles.isKutu}>
            <Text style={globalStyles.isYazi}>{is.item.deger}</Text>
          </View>
        )}
      ></FlatList>
    </View>
  );
}
const styles = StyleSheet.create({
  body: {
    padding: 50,
  },
});
