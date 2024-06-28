import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Text, Vibration } from "react-native";
import { View } from "react-native-animatable";
import { ColorPallete } from "../utils/Colors";
import { Home } from "./homes";
import { History } from "./history";
import { Explorers } from "./explorers";
import { Profile } from "./profiles";
import Toast from "react-native-toast-message";
import { useNavigation } from "@react-navigation/native";
import moment from "moment";
import { ListBook } from "../utils/ConstData";

export function MainAppsScreen() {
  const navigation = useNavigation();
  const today = moment().format("YYYY-MM-DD");
  const SelectedBook = ListBook.find((item) => item.id === 1);

  const triggerVibration = () => {
    Vibration.vibrate(2000);
  };
  
  const showToast = () => {
    Toast.show({
      type: "info",
      text1: "Hi Nerds 🙌",
      text2: "Sebentar lagi rilis buku baru berjudul Mabok Kodingan..!!",
    });
  }; 

  useEffect(() => {
    const currentTime = moment();
    const futureTime = moment().add(1, 'minutes');

    if (currentTime.isAfter(futureTime)) {
      triggerVibration();
      navigation.navigate('DetailBook', {book: SelectedBook});
    }
    showToast();
  }, [today]);

  const Tab = createBottomTabNavigator();
  return (
    <>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: ColorPallete.orange,
          tabBarInactiveTintColor: ColorPallete.gray,
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
            },
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
            },
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
            },
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
            },
          }}
        />
      </Tab.Navigator>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </>
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
