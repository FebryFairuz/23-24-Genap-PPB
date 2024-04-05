import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView, Text } from 'react-native';
import { OnBoardScreen } from '../screens/OnBoardScreen';
import { SignIn, SignUp } from '../screens/authentications';


export default function RoutesApp() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="OnBoardScreen" component={OnBoardScreen} options={{ headerShown:false }} />
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown:false, gestureEnabled:true }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown:false, gestureEnabled:true }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
