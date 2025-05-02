import React from "react";
import { Text, StyleSheet, ScrollView, View } from "react-native";

export default function Add() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.textContainer}>
        <Text style={[styles.commonText, styles.title, styles.orange]}>
          Coming Soon!
        </Text>
        <Text style={[styles.commonText, styles.title, styles.blue]}>
          Add, Update and Delete Your Own BucketList
        </Text>
        <Text style={[styles.commonText, styles.description]}>
          We're excited to announce that a new feature is on the way! Soon, you
          will be able to add, update and remove countries from the list. This
          will allow you to manage and customize the countries you want to
          explore, learn about, or track. Stay tuned for updates, and get ready
          to make your own bucket list!
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fcf6f1",
    flexGrow: 1,
    margin: 0,
  },
  textContainer: {
    flex: 1,
    margin: 10,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  commonText: {
    fontFamily: "Merriweather",
    textAlign: "center",
  },
  title: {
    fontSize: 28,
    marginVertical: 20,
    fontWeight: "bold",
  },
  orange: {
    color: "#fb8500",
  },
  blue: {
    color: "#1C2B63",
  },
  description: {
    fontSize: 18,
    color: "#333",
    fontWeight: "normal",
    marginTop: 10,
    textAlign: "left",
  },
});
