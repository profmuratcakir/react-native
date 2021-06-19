import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import Flexbox01 from "./Flexbox01";
import Flexbox02 from "./Flexbox02";
function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Flexbox01 komponenti Ekranin 1/4 nü kaplasin  */}
      <Flexbox01 />

      {/* Flexbox02 komponenti Ekranin 3/4 nü kaplasin  */}
      <Flexbox02 />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
