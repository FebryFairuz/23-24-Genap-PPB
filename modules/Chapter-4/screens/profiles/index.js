import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import { UserList } from '../../utils/ConstData';
import { Print, Profile } from './components/Profile';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UpdateEmailScreen from './components/screens/UpdateEmailScreen';
import UpdatePasswordScreen from './components/screens/UpdatePasswordScreen';
import MyProfile from './components/screens/MyProfile';
import AboutApk from './components/screens/AboutApk';
import { SignIn } from '../authentications/SignIn';


const Stack = createNativeStackNavigator();

export default class Profiles extends Component {
  render() {
    return (
      // <SafeAreaView>
      //   <Print Data={UserList[0]} />
      // </SafeAreaView>
      <NavigationContainer independent={true}>
        <Stack.Navigator >
          <Stack.Screen options ={{headerShown:false}} name="Profile" component={Profile} initialParams={{user: UserList[0]}}/>
          <Stack.Screen options ={{title:"Update Email"}} name="UpdateEmailScreen" component={UpdateEmailScreen}/>
          <Stack.Screen options ={{title:"Update Password"}} name="UpdatePasswordScreen" component={UpdatePasswordScreen}/>
          <Stack.Screen options ={{title:"My Profile"}} name="MyProfile" component={MyProfile} initialParams={{user: UserList[0]}}/>
          <Stack.Screen options ={{title:"About Apps"}} name="AboutApk" component={AboutApk}/>
          <Stack.Screen name="LogOut" component={SignIn}/>
        </Stack.Navigator>
      </NavigationContainer>
      
    )
  }
}

const styles = StyleSheet.create({
imageRad: {
  width: 100,
  height: 100,
  borderRadius: 75,
  margin: 20,
  borderColor: "#eaa831",
  borderWidth: 1,
},
text: {
  color: "#000",
  margin: 20,
  fontWeight: "bold",
  fontSize: 24,
  textAlign: "justify",
}
});