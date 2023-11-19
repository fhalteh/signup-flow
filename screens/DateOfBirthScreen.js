import React, { useState } from "react";
import { SafeAreaView, Text, StyleSheet, View, Platform } from "react-native";
import CustomButton from "../components/CustomButton";
import RNDateTimePicker from "@react-native-community/datetimepicker";

export default function NameScreen({ navigation }) {
  const [date, setDate] = useState(new Date());

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.title}>What's your date of birth?</Text>
        <RNDateTimePicker value={date} onChange={onChangeDate}/>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          title="Next"
          type="primary"
          onPress={() => {
            navigation.navigate("ProfilePicture");
          }}
        />
      </View>
    </SafeAreaView>
  );
}

// ...

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
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
  input: {
    height: 66,
    fontSize: 20,
    borderColor: "#BBBBBB",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
  },
  buttonContainer: {
    width: "100%",
    paddingHorizontal: 16,
  },
});
