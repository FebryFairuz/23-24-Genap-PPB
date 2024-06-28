import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar
} from "react-native";
import React, { useState } from "react";
import AsyncStorage  from "@react-native-async-storage/async-storage";
import { FieldEmails, FieldPassword } from "./components/Forms";
import { ButtonPrimary } from "../../components/Buttons/ButtonUi";
import { PlatformOSConfirm } from "../../services/GeneralHelper";
import { UserList } from "../../utils/ConstData";
import { ColorPallete } from "../../utils/Colors";
import Copyright from "../../components/footers/Copyright";
import { useNavigation } from "@react-navigation/native";


export function SignIn() {
  
  const [isPasswordShown, setIsPasswordShown] = useState(true);
  const objSignIn = {
    email: "mira@student.ibik.ac.id",
    password: "mira@123",
  };
  const [submit, setSubmit] = useState(objSignIn);
  
  return (
    <KeyboardAvoidingView
      style={{ flex: 1}}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <StatusBar hidden={false} />
      <ScrollView contentContainerStyle={{ flex: 1 }} bounces={false}>
        <SafeAreaView style={{ flex:1 }}>
          <View style={styles.container}>
            <LogoHeader />
            <FormSignIn submit={submit} setSubmit={setSubmit} isPasswordShown={isPasswordShown} setIsPasswordShown={setIsPasswordShown} />
            <Copyright />
          </View>
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const LogoHeader = () => {
  return (
    <View style={styles.header}>
      <Image
        source={require("../../../../assets/_images/illustrations/icon.png")}
        style={styles.logo}
      />
      <View style={{ marginVertical: 20, alignItems: "center" }}>
        <Text style={{ ...styles.title, fontSize: 30, color:ColorPallete.red }}>Bedtime Stories</Text>
        <Text style={{ ...styles.title, color:ColorPallete.orange }}>Welcome back ! 🙌</Text>
      </View>
    </View>
  );
};

const FormSignIn = (props) =>{
  const navigation = useNavigation();
  const {submit, setSubmit, isPasswordShown, setIsPasswordShown } = props;
  
  const HandlerSignIn = async () => {
    if(submit.email && submit.password){
      const FindUserAccount = UserList.find(item => item.email === submit.email && item.password === submit.password);
      if(FindUserAccount){
        PlatformOSConfirm("Hi, "+FindUserAccount.username+"! Welcome Back...");
        await AsyncStorage.setItem("my_profile",JSON.stringify(FindUserAccount));
        navigation.navigate("MainApps");
        
      }else{
        PlatformOSConfirm("Username or password is incorrect, try again later");
      }
    }else{
      PlatformOSConfirm("Please fill in all fields correctly");
    }
  };


  return (
    <View style={styles.body}>
      <Text style={{ ...styles.title, fontWeight:"300", marginBottom:10 }}>Logins to your Account</Text>
      <FieldEmails submit={submit} setSubmit={setSubmit} />
      <FieldPassword
        isPasswordShown={isPasswordShown}
        setIsPasswordShown={setIsPasswordShown}
        submit={submit}
        setSubmit={setSubmit}
      />
      <View style={{ marginVertical: 5 }}>
        <ButtonPrimary onPress={() => HandlerSignIn()}>
          <Text style={styles.buttonText}>Sign In</Text>
        </ButtonPrimary>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 20,
  },
  title: {
    color: ColorPallete.black,
    fontSize: 18,
    fontWeight: "bold",
  },
  body: {
    flex: 2,
    paddingHorizontal: 30,
    paddingTop: 50,
    marginTop: -50
  },
  buttonText: {
    fontSize: 20,
    textAlign: "center",
    color: ColorPallete.white,
    fontWeight: "bold",
  },
});
