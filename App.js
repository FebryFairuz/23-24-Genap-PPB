import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { OnBoardScreen, Signin } from './components/Chapter-2';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="OnBoardScreen" component={OnBoardScreen} options={{ headerShown:false }} />
        <Stack.Screen name="Signin" component={Signin} options={{ headerShown:false, gestureEnabled:false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
