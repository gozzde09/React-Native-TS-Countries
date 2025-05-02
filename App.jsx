// BOTTOM NAVBAR https://reactnavigation.org/docs/bottom-tab-navigator/
// ICONS https://github.com/oblador/react-native-vector-icons?tab=readme-ov-file#installation
// NAV https://reactnavigation.org/docs/nesting-navigators/#nesting-multiple-navigators
// TABBAR https://reactnavigation.org/docs/customizing-tabbar/
// SPLASH SCREEN : https://docs.expo.dev/versions/latest/sdk/splash-screen/

import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

import Home from "./screens/Home";
import Explore from "./screens/Explore";
import Add from "./screens/Add";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = Font.useFonts({
    Merriweather: require("./assets/fonts/Merriweather.ttf"),
  });
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (fontsLoaded) {
      setIsReady(true);
      SplashScreen.hideAsync(); // Hide splash screen after fonts are loaded
    }
  }, [fontsLoaded]);

  if (!isReady) {
    return;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='COUNTRIFY' component={TabNav} />
      </Stack.Navigator>
      <StatusBar style='auto' />
    </NavigationContainer>
  );
}

function TabNav() {
  return (
    <>
      <Tab.Navigator
        initialRouteName='Home'
        screenOptions={({ route }) => ({
          tabBarStyle: {
            position: "absolute",
            backgroundColor: "#ededed",
            height: 85,
          },
          tabBarIcon: ({ size, color }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Explore") {
              iconName = "globe";
              size = 40;
            } else if (route.name === "Add") {
              iconName = "book";
            }
            return (
              <View
                style={[
                  styles.iconContainer,
                  route.name === "Explore" && styles.exploreIconContainer,
                ]}>
                {/* Annan stil för explore */}
                <Icon name={iconName} size={size} color={color} />
              </View>
            );
          },
          tabBarLabelStyle: {
            fontSize: 18,
            fontFamily: "Merriweather",
          },
          tabBarActiveTintColor: "#FB8A21",
          tabBarInactiveTintColor: "#2378db",
        })}>
        <Tab.Screen
          name='Home'
          component={Home}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name='Explore'
          component={Explore}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name='Add'
          component={Add}
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
    backgroundColor: "#ededed",
    borderRadius: 30,
    bottom: 2,
    height: 60,
    position: "absolute",
    width: 60,
  },
});
