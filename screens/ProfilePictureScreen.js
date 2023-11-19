import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import CustomButton from "../components/CustomButton";
import { useActionSheet } from "@expo/react-native-action-sheet";

export default function ProfilePictureScreen({ navigation }) {
  const { showActionSheetWithOptions } = useActionSheet();

  const onPress = () => {
    const options = ["Camera", "Library", "Cancel"];
    const cancelButtonIndex = 2;
    const destructiveButtonIndex = -1;

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
      },
      (selectedIndex) => {
        switch (selectedIndex) {
          case 0:
            // Camera
            console.log("Camera tapped")
            break;

          case 1:
            // Library
            console.log("Library tapped")
            break;

          case cancelButtonIndex:
          // Canceled
          console.log("Cancel tapped")
        }
      }
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.title}>Add a profile picture</Text>
        <Text style={styles.subtitle}>
          Lets add a profile picture so your friends can easily recognize you.
          Your picture will be visible to everyone.
        </Text>
        <TouchableOpacity
          style={styles.avatarContainer}
          onPress={() => onPress()}
        >
          <Image
            source={require("../assets/icon_camera.png")}
            style={styles.icon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          title="Next"
          type="primary"
          onPress={() => {
            navigation.navigate("Location");
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
  avatarContainer: {
    backgroundColor: "#D9D9D9",
    borderRadius: 100,
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  avatar: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },
  icon: {
    width: 50,
    height: 50,
  },
});
