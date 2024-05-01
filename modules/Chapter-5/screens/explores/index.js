import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Explorers from "./Explorers";
import DetailGenre from "./DetailGenre";


export default function ExplorerNav() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Explorer"
          component={Explorers}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="DetailGenre"
          component={DetailGenre}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
