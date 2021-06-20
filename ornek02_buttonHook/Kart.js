import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Card } from "react-native-elements";

import FaIcon from "react-native-vector-icons/FontAwesome";
import { Linking } from "react-native";

const Kart = () => {
  return (
    <View style={styles.container}>
      <Card>
        <Card.Title>KONYAYA HOSGELDINIZ</Card.Title>
        <Card.Divider />
        <Card.Image
          source={{
            uri: "https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          }}
        ></Card.Image>
        <Text style={{ marginBottom: 10 }}>
          The idea with React Native Elements is more about component structure
          than actual design.
        </Text>
        <Button
          icon={<FaIcon name="code" size={20} color="#ffffff" />}
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          titleStyle={{ marginLeft: 10 }}
          title="DETAYLAR"
          onPress={() => Linking.openURL("http://google.com")}
        />
      </Card>
    </View>
  );
};

export default Kart;

const styles = StyleSheet.create({
  container: {
    width: 300,
    alignItems: "center",
  },
});
