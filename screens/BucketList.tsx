// https://docs.expo.dev/versions/latest/sdk/webview/
// https://reactnative.dev/docs/safeareaview
import { useState, useEffect } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { WebView } from "react-native-webview";
import type { Country } from "../types";

export default function BucketList({ navigation }: any) {
  const [countries, setCountries] = useState<Country[]>([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      fetchCountries();
    }
  }, [isFocused]);

  const fetchCountries = () => {
    fetch("https://countries-mongodb-atlas.onrender.com/countries")
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error("Error fetching countries:", error));
  };

  const renderItem = ({ item, index }: { item: Country; index: number }) => (
    <View style={styles.rowItem}>
      <Text style={styles.index}>{index + 1}.</Text>
      <WebView
        source={{
          html: `
      <html>
        <body style="margin:0;padding:0">
          <img src="${item.country_flag}" style="width:200px;height:100px;object-fit:contain" />
        </body>
      </html> `,
        }}
        style={styles.flagContainer}
      />
      <Text style={styles.text}>{item.country_name}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("AboutCountry", item)}>
        <Text style={styles.buttonText}>Details</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>Bucket List</Text>
      <FlatList
        contentContainerStyle={{ paddingBottom: 100 }}
        data={countries}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}
const commonTextStyle = {
  color: "#333",
  fontFamily: "Merriweather",
  fontSize: 18,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fcf6f1",
    flex: 1,
  },
  headerTitle: {
    ...commonTextStyle,
    color: "#1C2B63",
    fontSize: 26,
    fontWeight: "bold",
    marginVertical: 15,
    textAlign: "center",
  },
  rowItem: {
    alignItems: "center",
    backgroundColor: "#FAFAFA",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  index: {
    ...commonTextStyle,
    width: 30,
  },
  flagContainer: {
    backgroundColor: "#FAFAFA",
    height: 30,
    marginRight: 15,
    width: 50,
  },
  text: {
    ...commonTextStyle,
    flex: 1,
    marginRight: 15,
  },
  button: {
    backgroundColor: "#219ebc",
    borderRadius: 12,
    paddingVertical: 6,
    paddingHorizontal: 14,
  },
  buttonText: {
    ...commonTextStyle,
    color: "#FAFAFA",
    fontSize: 16,
  },
});
