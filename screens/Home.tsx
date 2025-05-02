import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
} from "react-native";
import WorldImage from "../assets/images/world.jpg";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={WorldImage}
            style={styles.image}
            resizeMode='contain'
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Discover the Fascinating World!</Text>
          <Text style={styles.description}>
            Embark on an exciting journey around the globe and learn about the
            unique countries that shape our world. From the snowy mountains of
            Switzerland to the tropical islands of Indonesia, each country has
            its own rich history, culture, language, and traditions. Dive into
            fascinating facts about capitals, flags, national languages, and
            local customs. Whether you're a curious traveler, a student, or a
            geography enthusiast, this app will help you explore and understand
            the diversity of our planet — one country at a time. Start your
            adventure and expand your global knowledge today!
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const commonTextStyle = {
  fontFamily: "Merriweather",
  color: "#333",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    margin: 0,
  },
  imageContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  textContainer: {
    flex: 1,
    margin: 10,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    ...commonTextStyle,
    fontSize: 28,
    color: "#1C2B63",
    textAlign: "center",
    marginBottom: 10,
  },
  description: {
    ...commonTextStyle,
    fontSize: 18,
  },
});
