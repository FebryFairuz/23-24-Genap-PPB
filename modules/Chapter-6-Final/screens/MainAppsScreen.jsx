import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";
import { View } from "react-native-animatable";
import { ColorPallete } from "../utils/Colors";
import { Home } from "./homes";
import { History } from "./history";
import { Explorers } from "./explorers";
import { Profile } from "./profiles";

export function MainAppsScreen() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator 
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarActiveTintColor: ColorPallete.orange,
      tabBarInactiveTintColor: ColorPallete.gray
    })}
    >
      <Tab.Screen
        name="For You"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <TabIcon
                focused={focused}
                color={color}
                size={size}
                icon={focused ? "heart" : "heart-outline"}
              />
            );
          }
        }}
      />
      <Tab.Screen
        name="Explorer"
        component={Explorers}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <TabIcon
                focused={focused}
                color={color}
                size={size}
                icon={focused ? "compass" : "compass-outline"}
              />
            );
          }
        }}
      />
      <Tab.Screen
        name="Activity"
        component={History}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <TabIcon
                focused={focused}
                color={color}
                size={size}
                icon={focused ? "library" : "library-outline"}
              />
            );
          }
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <TabIcon
                focused={focused}
                color={color}
                size={size}
                icon={focused ? "person-circle" : "person-circle-outline"}
              />
            );
          }
        }}
      />
    </Tab.Navigator>
  );
}

const TabIcon = ({ focused, color, size, icon }) => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Ionicons name={icon} size={size} color={color} />
    </View>
  );
};

const PageHello = () => {
  return <Text>Hello</Text>;
};
