import React from "react";
import { View, Text, Image, StyleSheet, SafeAreaView } from "react-native";
import { Button } from "react-native-elements";

export default function WelcomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Image
          style={styles.image}
          source={{ uri: "https://i.ibb.co/BNwMmVn/img.png" }}
          resizeMode="contain"
        />
        <Text style={styles.text}>DIS students</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Create a free account" />
        <Button title="Login" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    alignItems: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  image: {
    width: 200,
    height: 200,
  },
  text: {
    fontSize: 20,
    margin: 10,
  },
  buttonContainer: {
    width: "100%",
  },
});
