import React from "react";
import { StyleSheet, SafeAreaView, View, ImageBackground } from "react-native";
import Scroll from "./Scroll";
import TodoFlatList from "./TodoFlatList";

//? Uygulamaya bir arkaplan resmi eklemek icin ImageBackground
//? komponenti kullanilir.

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={{
          uri: "https://images.pexels.com/photos/1939485/pexels-photo-1939485.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        }}
      >
        {/* <Scroll /> */}
        <TodoFlatList />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
});

export default App;
