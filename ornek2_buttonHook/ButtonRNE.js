import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";

//?- REACT NATIVE ELEMENT UI Tasarimi icin guzel bir kütüphane
//?- Detayli bilgi icin  https://reactnativeelements.com/
//!- Projeye eklemek icin: "npm install react-native-elements"
//!- Kullanilacak komponenterin import edilmesi gerekir.

import FaIcon from "react-native-vector-icons/FontAwesome";
import MatIcon from "react-native-vector-icons/MaterialIcons";

//? Projemize ikon eklemek icin react-native-vector-icons kullanilabilir.
//! Bunun icin "npm install react-native-vector-icons" komutu yazilir.

//? İstenilen icon kutuphaneleri import edilir.
//? hangi kutuphanede hangi isimle ikon var bulmak icin asadaki link kullanilabilir.
//! "oblador.github.io/react-native-vector-icons/

import renkler from "./color";

const ButtonRNE = () => {
  const [kisi, setKisi] = useState({ ad: "Ahmet", yas: 30 });
  const [renk, setRenk] = useState("black");
  const [toggle, setToogle] = useState(false);

  function guncelle() {
    setToogle(!toggle);
    !toggle
      ? setKisi({ ad: "Mehmet", yas: 45 })
      : setKisi({ ad: "Can", yas: 30 });
  }

  function degistir() {
    const rastgele = Math.floor(Math.random() * renkler.length);
    setRenk(renkler[rastgele]);
  }

  function sil() {
    setKisi("");
  }
  return (
    <View style={styles.container}>
      {kisi.ad && (
        <Text style={[styles.yazi, { color: renk }]}>
          Benim adim {kisi.ad} yasim {kisi.yas}
        </Text>
      )}

      <View style={styles.btnContainer}>
        <Button
          icon={<MatIcon name="update" size={25} color="white" />}
          buttonStyle={{ backgroundColor: "green" }}
          type="solid"
          title="GUNCELLE"
          color="white"
          titleStyle={{ fontSize: 20 }}
          onPress={guncelle}
        ></Button>
        <View style={styles.bosluk}></View>
        <Button
          icon={<MatIcon name="color-lens" size={25} color="white" />}
          buttonStyle={{ backgroundColor: "red" }}
          type="solid"
          title="DEGISTIR"
          color="white"
          titleStyle={{ fontSize: 20 }}
          onPress={degistir}
        ></Button>
        <View style={styles.bosluk}></View>
        <Button
          type="outline"
          title="SIL"
          color="white"
          titleStyle={{ fontSize: 20 }}
          icon={<MatIcon name="delete-forever" size={25} color="blue" />}
          iconRight
          onPress={sil}
        ></Button>
      </View>
    </View>
  );
};

export default ButtonRNE;

const styles = StyleSheet.create({
  container: {
    width: 300,
    alignItems: "center",
  },

  yazi: {
    marginBottom: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  bosluk: {
    margin: 10,
  },
  btnContainer: {
    width: "90%",
  },
});
