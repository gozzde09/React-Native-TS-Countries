// https://docs.expo.dev/versions/latest/sdk/webview/
// https://reactnative.dev/docs/safeareaview
import { Card } from "react-native-paper";
import {
  Alert,
  SafeAreaView,
  View,
  StyleSheet,
  ScrollView,
  Text,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import { WebView } from "react-native-webview";

export default function AboutCountry({ navigation, route }: any) {
  const item = route.params;

  const handleDelete = (id: string) => {
    fetch(`https://countries-mongodb-atlas.onrender.com/countries/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        navigation.navigate("Bucket List");
        Alert.alert("Success", "Country deleted successfully!");
      })
      .catch((error) => {
        console.error("Error deleting country:", error);
        Alert.alert("Error", "Something went wrong!");
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Card style={styles.card}>
          <View style={styles.inner}>
            <View style={styles.iconContainer}>
              <Icon
                name='trash'
                color='red'
                size={30}
                onPress={() => handleDelete(item._id)}
              />
              <Icon name='edit' color='#fb8500' size={35} />
            </View>
            <Text style={[styles.title, styles.boldText]}>
              About {item.country_name}
            </Text>
            <WebView
              source={{
                html: `
                <html>
                 <body style="margin:0;padding:0">
                  <img src="${item.country_flag}" style="width:100%;height:100%;" />
                 </body>
                </html>`,
              }}
              style={styles.flagContainer}
            />
            <Card.Content>
              <Text style={styles.text}>
                <Text style={styles.boldText}>Capital: </Text>
                {item.country_capital}
              </Text>
              <Text style={styles.text}>
                <Text style={styles.boldText}>Language: </Text>
                {item.country_language}
              </Text>
              <Text style={styles.description}>{item.country_description}</Text>
            </Card.Content>
          </View>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

const commonTextStyle = {
  color: "#333",
  fontFamily: "Merriweather",
  fontSize: 20,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fcf6f1",
    flex: 1,
  },
  card: {
    backgroundColor: "#FAFAFA",
    borderRadius: 12,
    marginHorizontal: 16,
    marginVertical: 30,
    marginBottom: 100,
  },
  inner: {
    flexDirection: "column",
    padding: 16,
    gap: 10,
  },
  iconContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    position: "absolute",
    right: 10,
    top: 10,
  },
  flagContainer: {
    backgroundColor: "#FAFAFA",
    width: "100%",
    height: 200,
    alignSelf: "center",
  },
  title: {
    ...commonTextStyle,
    textAlign: "center",
    color: "#1C2B63",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 4,
  },
  text: {
    ...commonTextStyle,
    fontSize: 20,
    marginBottom: 4,
  },
  boldText: {
    fontWeight: "bold",
  },
  description: {
    ...commonTextStyle,
    color: "#555",
    marginTop: 4,
    marginBottom: 4,
    fontSize: 18,
  },
});
