import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./screens/WelcomeScreen";
import NameScreen from "./screens/NameScreen";
import DateOfBirthScreen from "./screens/DateOfBirthScreen";
import ProfilePictureScreen from "./screens/ProfilePictureScreen";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";

const Stack = createStackNavigator();

export default function App() {
  return (
    <ActionSheetProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen
            name="Name"
            component={NameScreen}
            options={{ headerTitle: "" }}
          />
          <Stack.Screen
            name="DateOfBirth"
            component={DateOfBirthScreen}
            options={{ headerTitle: "" }}
          />
          <Stack.Screen
            name="ProfilePicture"
            component={ProfilePictureScreen}
            options={{ headerTitle: "" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ActionSheetProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
