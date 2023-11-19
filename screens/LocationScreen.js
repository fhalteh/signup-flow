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
import * as Location from "expo-location";

export default function LocationScreen({ navigation }) {
  const [city, setCity] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      Location.reverseGeocodeAsync(location.coords).then((result) => {
        setCity(result[0].city);
      });
    })();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.title}>Whats your location?</Text>
        <Text style={styles.subtitle}>
          You must enable sharing your location to use this app..
        </Text>
        <Text style={styles.subtitle}>
          {city ? `Your city is ${city}` : "Fetching location..."}
        </Text>
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
