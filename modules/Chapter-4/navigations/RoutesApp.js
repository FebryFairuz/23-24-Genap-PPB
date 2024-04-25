import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { OnBoardScreen } from '../screens/OnBoardScreen';
import { SignIn, SignUp } from '../screens/authentications';
import { MainAppsScreen } from '../screens/MainAppsScreen';
import DetailBook from '../screens/single-screen/DetailBook';
import { KASignIn } from '../screens/authentications/KASignIn';


export default function RoutesApp() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="OnBoardScreen" component={OnBoardScreen} options={{ headerShown:false }}  />
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown:false, animation:'slide_from_bottom' }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown:false }} /> 
        <Stack.Screen name="MainApps" component={MainAppsScreen} options={{ headerShown:false, gestureEnabled:false }} />
        <Stack.Screen name="DetailBook" component={DetailBook} options={{ headerShown:true, headerBackTitle:"Back", headerTitle:"Kurcacil & Friends" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
