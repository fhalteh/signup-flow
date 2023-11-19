import React from "react";
import { View, Text, Image, StyleSheet, SafeAreaView } from "react-native";
import CustomButton, { ButtonType } from "../components/CustomButton";

export default function WelcomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topContainer}>
                <Image
                    style={styles.image}
                    source={{ uri: "https://i.ibb.co/BNwMmVn/img.png" }}
                    resizeMode="contain"
                />
                <Text style={styles.text}>DIS STUDENTS</Text>
            </View>
            <View style={styles.buttonContainer}>
                <CustomButton title="Create a free account" type={ButtonType.PRIMARY} />
                <CustomButton title="Login" type={ButtonType.SECONDARY} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  topContainer: {
    alignItems: "center",
  },
  container: {
    backgroundColor: "white",
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
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#191259",
  },
  buttonContainer: {
    width: "100%",
    height: 126,
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
});
