// Keyboard Avoiding :https://reactnative.dev/docs/keyboardavoidingview

import { useState } from "react";
import {
  Alert,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

export default function AddCountry({ navigation }: any) {
  const [capital, setCapital] = useState("");
  const [countryName, setCountryName] = useState("");
  const [description, setDescription] = useState("");
  const [flagCode, setFlagCode] = useState("");
  const [language, setLanguage] = useState("");

  const handleAddCountry = () => {
    const flag = `https://flagcdn.com/${flagCode.trim().toLowerCase()}.svg`;
    const newCountry = {
      country_capital: capital,
      country_description: description,
      country_flag: flag,
      country_language: language,
      country_name: countryName,
    };

    fetch("https://countries-mongodb-atlas.onrender.com/countries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCountry),
    })
      .then((response) => response.json())
      .then((data) => {
        Alert.alert("Success", "Country added successfully!");
        setTimeout(() => {
          navigation.navigate("Bucket List");
        }, 1000);
      })
      .catch((error) => {
        console.error("Error adding country:", error);
        Alert.alert("Error", "Something went wrong!");
      });
  };

  return (
    <ImageBackground
      source={require("../assets/images/world.jpg")}
      style={styles.backgroundImage}
      resizeMode='stretch'>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          <Text style={styles.title}>Add a country</Text>
          <TextInput
            style={styles.input}
            placeholder='Country name'
            value={countryName}
            onChangeText={setCountryName}
          />
          <TextInput
            style={styles.input}
            placeholder='Capital'
            value={capital}
            onChangeText={setCapital}
          />
          <TextInput
            style={styles.input}
            placeholder='Language'
            value={language}
            onChangeText={setLanguage}
          />
          <TextInput
            style={styles.input}
            placeholder='Description'
            value={description}
            onChangeText={setDescription}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter the 2-letter country code (e.g., 'se' for Sweden)"
            value={flagCode}
            onChangeText={setFlagCode}
          />
          <TouchableOpacity style={styles.button} onPress={handleAddCountry}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}
const commonTextStyle = {
  fontFamily: "Merriweather",
  color: "#333",
};
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  title: {
    ...commonTextStyle,
    color: "#1C2B63",
    fontSize: 28,
    fontWeight: "bold",
    marginVertical: 15,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#FAFAFA",
    borderColor: "#ccc",
    borderRadius: 12,
    borderWidth: 1,
    color: "#333",
    fontFamily: "Merriweather",
    fontSize: 20,
    height: 50,
    margin: 20,
    marginBottom: 15,
    marginTop: 0,
    padding: 10,
    paddingLeft: 10,
    textAlignVertical: "top",
    width: "90%",
  },
  button: {
    alignSelf: "center",
    backgroundColor: "#219ebc",
    borderRadius: 12,
    margin: 20,
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  buttonText: {
    ...commonTextStyle,
    color: "#FAFAFA",
    fontSize: 20,
  },
});
