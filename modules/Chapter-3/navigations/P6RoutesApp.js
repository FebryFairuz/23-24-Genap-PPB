import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { OnBoardScreen } from '../screens/OnBoardScreen';
import { PASignIn } from '../screens/_auth/PASignIn';
import { PBSignUp } from '../screens/_auth/PBSignUp';
import { PBSignIn } from '../screens/_auth/PBSignIn';


export default function P6RoutesApp() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="OnBoardScreen" component={OnBoardScreen} options={{ headerShown:false }} />
        <Stack.Screen name="SignIn" component={PBSignIn} options={{ headerShown:false, gestureEnabled:true, animation:'slide_from_bottom' }} />
        <Stack.Screen name="SignUp" component={PBSignUp} options={{ headerShown:false, gestureEnabled:true }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
