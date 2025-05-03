import React, { useState } from "react";
import {
  Alert,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function EditCountry({ route, navigation }: any) {
  const { country } = route.params;
  const [countryName, setCountryName] = useState(country.country_name);
  const [countryCapital, setCountryCapital] = useState(country.country_capital);
  const [countryLanguage, setCountryLanguage] = useState(
    country.country_language
  );
  const [countryDescription, setCountryDescription] = useState(
    country.country_description
  );

  const handleUpdateCountry = () => {
    const updatedCountry = {
      country_capital: countryCapital,
      country_description: countryDescription,
      country_language: countryLanguage,
      country_name: countryName,
    };

    fetch(
      `https://countries-mongodb-atlas.onrender.com/countries/${country._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedCountry),
      }
    )
      .then((response) => response.json())
      .then(() => {
        Alert.alert("Success", "Country updated successfully!");
        navigation.navigate("Bucket List");
      })
      .catch((error) => {
        console.error("Error updating country:", error);
      });
  };

  return (
    <ImageBackground
      source={require("../assets/images/world.jpg")}
      style={styles.backgroundImage}
      resizeMode='stretch'>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          <Text style={styles.title}>Edit Country</Text>
          <TextInput
            onChangeText={setCountryName}
            placeholder='Country Name'
            style={styles.input}
            value={countryName}
          />
          <TextInput
            onChangeText={setCountryCapital}
            placeholder='Capital'
            style={styles.input}
            value={countryCapital}
          />
          <TextInput
            onChangeText={setCountryLanguage}
            placeholder='Language'
            style={styles.input}
            value={countryLanguage}
          />
          <TextInput
            onChangeText={setCountryDescription}
            placeholder='Description'
            multiline={true}
            numberOfLines={6}
            style={[styles.input, { minHeight: 200 }]}
            value={countryDescription}
          />

          <TouchableOpacity style={styles.button} onPress={handleUpdateCountry}>
            <Text style={styles.buttonText}>Update</Text>
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
    ...commonTextStyle,
    backgroundColor: "#FAFAFA",
    borderColor: "#ccc",
    borderRadius: 12,
    borderWidth: 1,
    fontSize: 18,
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
    backgroundColor: "#FB8A21",
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
