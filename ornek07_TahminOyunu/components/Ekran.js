import React, { useState } from "react";
import { StyleSheet, Text, View, Alert, Keyboard } from "react-native";
import InputKontrol from "./InputKontrol";
import Skorlar from "./Skorlar";
import Mesaj from "./Mesaj";
import Buton from "./Buton";
import Renkler from "../constants/renkler";
import { TouchableWithoutFeedback } from "react-native";

const Ekran = () => {
  const [tahmin, setTahmin] = useState("");
  const [skor, setSkor] = useState(10);
  const [yuksekSkor, setYuksekSkor] = useState(0);
  const [mesaj, setMesaj] = useState("OYUNA BAŞLA");
  const [oyunBitti, setOyunBitti] = useState(false);
  const [rasgeleSayi, setRasgeleSayi] = useState(
    Math.floor(Math.random() * 100)
  );
  const [gizliSayi, setGizliSayi] = useState("?");

  console.log(rasgeleSayi);
  console.log(tahmin);

  function guncelle(girilen) {
    setTahmin(girilen);
  }
  function kontrolEt() {
    if (!oyunBitti) {
      if (!tahmin) {
        Alert.alert("tahmin boş bırakılmaz");
      } else if (tahmin == rasgeleSayi) {
        setMesaj(" 🎉 tebrikler bildiniz.");
        setYuksekSkor(Math.max(skor, yuksekSkor));
        setGizliSayi(tahmin);
        setOyunBitti(true);
        Keyboard.dismiss();
      } else {
        if (skor > 1) {
          setSkor(skor - 1);
          tahmin < rasgeleSayi ? setMesaj("📈  Arttır") : setMesaj("📉 Azalt");
        } else {
          setMesaj(" Kaybettiniz 😔 ");
          setOyunBitti(true);
          setSkor(0);
          Keyboard.dismiss();
        }
      }
      setTahmin("");
    } else {
      Alert.alert("Yeniden Oynamak için Tekrar Butonuna basiniz.");
    }
  }

  function oyunuTekrarla() {
    setSkor(10);
    setRasgeleSayi(Math.floor(Math.random() * 100));
    setMesaj("OYUNA BAŞLA");
    setGizliSayi("?");
    setTahmin("");
    setOyunBitti(false);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.ekran}>
        <Skorlar skor={skor} yuksekSkor={yuksekSkor} />
        <Mesaj mesaj={mesaj} />
        <InputKontrol
          tahmin={tahmin}
          guncelle={guncelle}
          kontrolEt={kontrolEt}
          gizliSayi={gizliSayi}
        />

        <View style={styles.btnContainer}>
          <Buton style={styles.btnTekrar} onPress={oyunuTekrarla}>
            Tekrar
          </Buton>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Ekran;

const styles = StyleSheet.create({
  ekran: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  btnContainer: {
    width: 300,
  },
  btnTekrar: {
    backgroundColor: Renkler.koyuKirmizi,
    width: "100%",
    padding: 10,
  },
});
