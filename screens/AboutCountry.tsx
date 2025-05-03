// https://docs.expo.dev/versions/latest/sdk/webview/
// https://reactnative.dev/docs/safeareaview
import { Card } from "react-native-paper";
import { SafeAreaView, View, StyleSheet, ScrollView, Text } from "react-native";
import { WebView } from "react-native-webview";

export default function AboutCountry({ route }) {
  const item = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Card style={styles.card}>
          <View style={styles.inner}>
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
