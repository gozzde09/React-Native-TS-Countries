import React, { useState, useEffect } from "react";
import { SafeAreaView, View, StyleSheet, FlatList, Text } from "react-native";
import { Card } from "react-native-paper";
import { WebView } from "react-native-webview";

export default function Explore() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://countries-mongodb-atlas.onrender.com/countries")
      .then((response) => response.json())
      .then((result) => setCountries(result))
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  const renderItem = ({ item }: any) => (
    <Card mode='outlined' style={styles.card}>
      <View style={styles.inner}>
        <WebView
          source={{
            html: `<html><body style="margin:0;padding:0">
            <img src="${item.country_flag}" style="width:100%;height:100%;" />
            </body></html>`,
          }}
          style={styles.flag}
          scrollEnabled={false}
          scalesPageToFit={true}
        />
        <View style={styles.textContainer}>
          <Text style={[styles.title, styles.boldText]}>
            {item.country_name}
          </Text>
          <Text style={styles.text}>
            <Text style={styles.boldText}>Capital: </Text>
            {item.country_capital}
          </Text>
          <Text style={styles.text}>
            <Text style={styles.boldText}>Language: </Text>
            {item.country_language}
          </Text>
          <Text style={styles.description}>{item.country_description}</Text>
        </View>
      </View>
    </Card>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.headerTitle, styles.boldText]}>BucketList</Text>
      <FlatList
        data={countries}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.flatListContainer}
      />
    </SafeAreaView>
  );
}

const commonTextStyle = {
  fontFamily: "Merriweather",
  color: "#444",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginBottom: 24,
  },
  card: {
    marginHorizontal: 16,
    marginVertical: 10,
    backgroundColor: "#FAFAFA",
    borderRadius: 12,
  },
  inner: {
    flexDirection: "column",
    padding: 16,
    gap: 12,
  },
  flag: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    alignSelf: "center",
  },
  textContainer: {
    flex: 1,
    flexShrink: 1,
  },
  title: {
    ...commonTextStyle,
    color: "#1C2B63",
    fontSize: 22,
    alignSelf: "center",
    marginBottom: 4,
  },
  headerTitle: {
    ...commonTextStyle,
    color: "#1C2B63",
    fontSize: 26,
    alignSelf: "center",
    marginTop: 10,
  },
  text: {
    ...commonTextStyle,
    fontSize: 18,
    marginBottom: 2,
  },
  boldText: {
    fontWeight: "bold",
  },
  description: {
    ...commonTextStyle,
    color: "#555",
    marginTop: 4,
    marginBottom: 4,
    fontSize: 15,
  },
  flatListContainer: {
    paddingVertical: 10,
    flexGrow: 1,
    paddingBottom: 75,
  },
});
