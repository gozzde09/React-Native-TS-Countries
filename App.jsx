// BOTTOM NAVBAR https://reactnavigation.org/docs/bottom-tab-navigator/
// ICONS https://github.com/oblador/react-native-vector-icons?tab=readme-ov-file#installation
// NAV https://reactnavigation.org/docs/nesting-navigators/#nesting-multiple-navigators
// SPLASH SCREEN : https://docs.expo.dev/versions/latest/sdk/splash-screen/
// TABBAR https://reactnavigation.org/docs/customizing-tabbar/

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import * as Font from "expo-font";

import AboutCountry from "./screens/AboutCountry";
import BucketList from "./screens/BucketList";
import Home from "./screens/Home";
import Nyheter from "./screens/Add";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const BucketStack = createNativeStackNavigator();

export default function App() {
  Font.useFonts({
    Merriweather: require("./assets/fonts/Merriweather.ttf"),
  });

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='COUNTRIFY' component={TabNav} />
      </Stack.Navigator>
      <StatusBar style='auto' />
    </NavigationContainer>
  );
}
function BucketListStack() {
  return (
    <BucketStack.Navigator>
      <BucketStack.Screen
        name='BucketList'
        component={BucketList}
        options={{ headerShown: false }}
      />
      <BucketStack.Screen
        name='AboutCountry'
        component={AboutCountry}
        options={{ headerShown: false }}
      />
    </BucketStack.Navigator>
  );
}
function TabNav() {
  return (
    <>
      <Tab.Navigator
        initialRouteName='Home'
        screenOptions={({ route }) => ({
          tabBarStyle: {
            backgroundColor: "#FAFAFA",
            height: 85,
            position: "absolute",
          },
          tabBarIcon: ({ size, color }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Bucket List") {
              iconName = "globe";
              size = 40;
            } else if (route.name === "Nyheter") {
              iconName = "book";
            }
            return (
              <View
                style={[
                  styles.iconContainer,
                  route.name === "Bucket List" && styles.exploreIconContainer,
                ]}>
                {/* Annan stil för ikonen */}
                <Icon name={iconName} size={size} color={color} />
              </View>
            );
          },
          tabBarLabelStyle: {
            fontFamily: "Merriweather",
            fontSize: 18,
          },
          tabBarActiveTintColor: "#fb8500",
          tabBarInactiveTintColor: "#219ebc",
        })}>
        <Tab.Screen
          name='Home'
          component={Home}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name='Bucket List'
          component={BucketListStack}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name='Nyheter'
          component={Nyheter}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </>
  );
}
const styles = StyleSheet.create({
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  exploreIconContainer: {
    backgroundColor: "#FAFAFA",
    borderRadius: 30,
    bottom: 2,
    height: 60,
    position: "absolute",
    width: 60,
  },
});
