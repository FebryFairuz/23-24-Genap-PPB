import React, { Component } from "react";
import {
    View,
    Text,
    SafeAreaView,
    ImageBackground,
    StyleSheet,
    StatusBar,
} from "react-native";
import { ButtonPrimary } from "../components/Buttons/ButtonUi";

//julius taslim
class OnboardScreen extends Component {
  render() {
    return (
      <ImageBackground
        source={require("../../../assets/_images/bg-splash-1.jpeg")}
        resizeMode="cover"
        style={styles.image}
      >
        <SafeAreaView style={styles.container}>
          <StatusBar hidden={false} />
          <View style={{ flex: 1, justifyContent: "flex-start", paddingTop:80 }}>
            <Text style={{ ...styles.text, fontSize: 30 }}>Bedtime Stories</Text>
            <Text style={{ ...styles.text, fontSize: 18 }}>
              is the happiness
            </Text>
          </View>
          <View style={styles.containerBtn}>
            <ButtonPrimary>
              <Text style={styles.text}>Get Started</Text>
            </ButtonPrimary>
          </View>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}

export default OnboardScreen;

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
