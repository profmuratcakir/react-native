import React from "react";
import { StyleSheet, SafeAreaView, ImageBackground } from "react-native";
import TodoFlatList from "./TodoFlatList";
function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={{
          uri: "https://images.pexels.com/photos/1939485/pexels-photo-1939485.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        }}
      >
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
