import React from "react";
import { Text, StyleSheet, ScrollView } from "react-native";

export default function Add() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={[styles.title, styles.commonText]}>Coming Soon:</Text>
      <Text style={[styles.title, styles.commonText]}>
        Add and Delete Countries
      </Text>
      <Text style={[styles.description, styles.commonText]}>
        We're excited to announce that a new feature is on the way! Soon, you
        will be able to add and remove countries from the list. This will allow
        you to manage and customize the countries you want to explore, learn
        about, or track. Stay tuned for updates, and get ready to make your own
        country list!
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    margin: 10,
    paddingHorizontal: 10,
  },
  commonText: {
    fontFamily: "Merriweather",
  },
  title: {
    fontSize: 28,
    color: "#1C2B63",
    marginVertical: 20,
  },
  description: {
    fontSize: 18,
    color: "#333",
  },
});
