import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  StatusBar,
  Pressable,
} from "react-native";
import React from "react";
import { ButtonPrimary } from "../components/Buttons/ButtonUi";

export function OnBoardScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../../../assets/_images/bg-splash.jpeg")}
      resizeMode="cover"
      style={styles.image}
    >
      <SafeAreaView style={styles.container}>
        <StatusBar hidden={true} />
        <View style={styles.containerHeader}>
          <View>
            <Text style={{ ...styles.text, fontSize: 45 }}>
              Bedtime Stories
            </Text>
            <Text style={{ ...styles.text, fontSize: 18 }}>
              is the happiness
            </Text>
          </View>
        </View>
        <View style={styles.containerBtn}>
          <ButtonPrimary onPress={() => navigation.navigate("SignUp")}>
            <Text style={{ ...styles.text, fontSize: 20 }}>Join Now</Text>
          </ButtonPrimary>
        </View>

        <View style={styles.containerSignIn}>
          <Text style={styles.signInLabel}>
            Already have an account ?
          </Text>
          <Pressable onPress={()=>navigation.navigate('SignIn')} >
            <Text style={{ ...styles.signInLabel, fontWeight:"bold", marginLeft:4 }}>Sign In</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "stretch",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  containerHeader: {
    flex: 1,
    justifyContent: "center",
  },
  containerBtn: {
    paddingHorizontal: 50,
  },
  containerSignIn:{
    flexDirection:"row",
    marginTop:20,
    marginBottom:30,
    justifyContent:"center"
  },
  signInLabel:{
    fontSize:16,
    color:"white"
  }
});
