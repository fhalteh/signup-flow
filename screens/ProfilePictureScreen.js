import React, { useState } from "react";
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
import * as ImagePicker from "expo-image-picker";

export default function ProfilePictureScreen({ route, navigation }) {
  const { name, age } = route.params;
  const { showActionSheetWithOptions } = useActionSheet();
  const [avatar, setAvatar] = useState(null);

  const launchCameraRequested = async () => {
    const { status } = await ImagePicker.getCameraPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need camera permissions to make this work!");
      ImagePicker.requestCameraPermissionsAsync();
      return;
    }
    try {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4, 3],
      });
      if (!result.cancelled) {
        setAvatar(result.uri);
      }
    } catch (error) {
      console.log("Error occurred while launching the camera: ", error);
    }
  };

  const launchLibraryRequested = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setAvatar(result.assets[0].uri);
    }
  };

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
            launchCameraRequested();
            break;
          case 1:
            launchLibraryRequested();
            break;

          case cancelButtonIndex:
            // Canceled
            console.log("Cancel tapped");
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
          {avatar ? (
            <Image
              source={{ uri: avatar }}
              style={styles.avatar}
              resizeMode="contain"
            />
          ) : (
            <Image
              source={require("../assets/icon_camera.png")}
              style={styles.icon}
              resizeMode="contain"
            />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          title="Next"
          type="primary"
          onPress={() => {
            navigation.navigate("Location", {
              name: name,
              age: age,
              avatar: avatar,
            });
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
