import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import { FieldEmails, FieldPassword } from "./components/Forms";
import { ButtonPrimary } from "../../components/Buttons/ButtonUi";

export function SignIn({ navigation }) {
  const [isPasswordShown, setIsPasswordShown] = useState(true);
  const objSignIn = {
    email: "",
    password: "",
  };
  const [submit, setSubmit] = useState(objSignIn);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <StatusBar hidden={false} />
      <ScrollView contentContainerStyle={{ flex: 1 }} bounces={false}>
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <Image
              source={require("../../../../assets/_images/illustrations/sign-in-2.jpeg")}
              style={styles.logo}
            />
            <View style={{ marginVertical: 20, alignItems: "center" }}>
              <Text style={{ ...styles.title, fontSize: 30 }}>
                Bedtime Stories
              </Text>
              <Text style={styles.title}>Welcome back ! 🙌</Text>
            </View>
          </View>
        </SafeAreaView>
        <View style={styles.body}>
          <FieldEmails submit={submit} setSubmit={setSubmit} />
          <FieldPassword
            isPasswordShown={isPasswordShown}
            setIsPasswordShown={setIsPasswordShown}
            submit={submit}
            setSubmit={setSubmit}
          />

          <View style={{ marginVertical: 20 }}>
            <ButtonPrimary onPress={() => HandlerSignUp()}>
              <Text style={styles.buttonText}>Sign In</Text>
            </ButtonPrimary>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b1f3f",
  },
  header: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 20,
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  body: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 30,
    paddingTop: 50,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    marginTop: -50,
  },
  buttonText: {
    fontSize: 20,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
});
