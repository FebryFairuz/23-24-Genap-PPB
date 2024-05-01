import React, { Component } from 'react'
import { UserList } from '../../utils/ConstData';
import { Profile } from './components/Profile';
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
