import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { OnBoardScreen } from '../screens/OnBoardScreen';
import { SignIn, SignUp } from '../screens/authentications';
import { MainAppsScreen } from '../screens/MainAppsScreen';
import { DetailBook, ReadStory } from '../screens';
import ScannerQR from '../screens/scanner';

export default function RoutesApp() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="OnBoardScreen" component={OnBoardScreen} options={{ headerShown:false }} />
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown:false, animation:'slide_from_bottom' }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown:false, }} />
        <Stack.Screen name="MainApps" component={MainAppsScreen} options={{ headerShown:false, gestureEnabled:false }} />
        <Stack.Screen name="DetailBook" component={DetailBook} options={{ headerShown:false, gestureEnabled:false, animation:'slide_from_bottom' }} />
        <Stack.Screen name="ReadStory" component={ReadStory} options={{ headerShown:false, gestureEnabled:false, animation:'slide_from_bottom' }} />
        <Stack.Screen name="Scanner QR Code" component={ScannerQR} options={{ headerShown:true, gestureEnabled:false, animation:'slide_from_bottom' }} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
