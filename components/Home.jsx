import React, { Component } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import ContactsList from "./ContactList";
import BrightnessScreen from "./Brightness";

const Tab = createBottomTabNavigator();

export default class Home extends Component {
  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerTitle: "Revan Fauzi Algifari - 120140049",
              headerTitleStyle: {
                fontSize: 18,
                color: "white",
              },
              headerStyle: {
                backgroundColor: "#2596be",
              },
              tabBarActiveTintColor: "#2596be",
              headerTitleAlign: "center",
              tabBarStyle: {
                height: 62,
                paddingBottom: 8,
                backgroundColor: "#282828",
              },
            }}
          >
            <Tab.Screen
              name="Home"
              component={ContactsList}
              options={{
                tabBarLabel: "Kontak",
                tabBarIcon: ({ color, size }) => (
                  <View>
                    <AntDesign name="contacts" color={color} size={22} />
                  </View>
                ),
              }}
            />
            <Tab.Screen
              name="Kalender"
              component={BrightnessScreen}
              options={{
                tabBarLabel: "Brightness",
                tabBarIcon: ({ color, size }) => (
                  <View>
                    <MaterialIcons
                      name="brightness-6"
                      color={color}
                      size={22}
                    />
                  </View>
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 5,
  },
  text: {
    fontSize: 30,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});
