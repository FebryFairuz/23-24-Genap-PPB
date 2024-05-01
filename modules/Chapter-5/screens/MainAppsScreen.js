import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Homes from "./homes";
import Histories from "./histories";
import Profiles from "./profiles";
import ExplorerNav from "./explores";

export function MainAppsScreen() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (rn === "Explorer") {
            iconName = focused ? "compass" : "compass-outline";
          } else if (rn === "History") {
            iconName = focused ? "book" : "book-outline";
          } else if (rn === "Profile") {
            iconName = focused ? "person-circle" : "person-circle-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarStyle: [{ display: "flex", paddingVertical: 10 }],
        tabBarActiveTintColor: "orange",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={Homes} />
      <Tab.Screen name="Explorer" component={ExplorerNav} />
      <Tab.Screen name="History" component={Histories} />
      <Tab.Screen name="Profile" component={Profiles} options={{ headerShown:false }} />
    </Tab.Navigator>
  );
}

