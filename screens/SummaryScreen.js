import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import CustomButton from "../components/CustomButton";

export default function SummaryScreen({ route, navigation }) {
  const { name, age, avatar, city } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.title}>Review Information</Text>
        <View style={styles.userSummary}>
          <Image source={{uri: avatar}} style={styles.image}></Image>
          <View style={styles.textStack}>
            <Text style={styles.userTitle}>{name}</Text>
            <Text style={styles.userSubtitle}>{age} years old</Text>
          </View>
        </View>
        <Text style={styles.subtitle}>Located in {city}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          title="Complete Signup"
          type="primary"
          onPress={() => {
            navigation.navigate("Welcome");
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    padding: 16,
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "white",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 16,
  },
  subtitle: {
    fontSize: 20,
    color: "#656565",
    paddingBottom: 16,
  },
  buttonContainer: {
    width: "100%",
    paddingHorizontal: 16,
  },
  avatar: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },
  userSummary: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 24,
    padding: 10,
    marginBottom: 16,
  },
  userTitle: {
    fontSize: 20,
    color: 656565,
    fontWeight: "bold",
  },
  userSubtitle: {
    fontSize: 20,
    color: 656565,
  },
  image: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
  },
  textStack: {
    paddingLeft: 16
  }
});
