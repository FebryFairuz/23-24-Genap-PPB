import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  StatusBar,
} from "react-native";
import React from "react";
import { ButtonPrimary } from "../components/Buttons/ButtonUi";

export function OnBoardScreen({navigation}) {
  return (
    <ImageBackground
      source={require("../../../assets/_images/bg-splash.jpeg")}
      resizeMode="cover"
      style={styles.image}
    >
      <SafeAreaView style={styles.container}>
        <StatusBar hidden={true} />
        <View style={{ flex:1, justifyContent:"flex-end" }}>
            <Text style={{ ...styles.text, fontSize:30 }}>Bedtime Stories</Text>
            <Text style={{ ...styles.text, fontSize:18 }}>is the happiness</Text>
        </View>
        <View style={styles.containerBtn}>
          <ButtonPrimary onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.text}>Get Started</Text>
          </ButtonPrimary>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "stretch",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  containerBtn: {
    paddingVertical: 40,
    paddingHorizontal: 50,
  },
});