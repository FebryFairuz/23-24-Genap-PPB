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
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { ButtonPrimary } from "../../components/Buttons/ButtonUi";

export function KASignIn({ navigation }) {
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
          <View style={{ marginBottom: 12 }}>
            <Text style={styles.label}>Email address</Text>

            <View style={styles.textInput}>
              <TextInput
                placeholder="Enter your email address"
                placeholderTextColor={"gray"}
                style={{
                  width: "100%",
                }}
              />
            </View>
          </View>

          <View style={{ marginBottom: 12 }}>
            <Text style={styles.label}>Password</Text>

            <View style={styles.textInput}>
              <TextInput
                placeholder="Enter your password"
                placeholderTextColor={"gray"}
                keyboardType="email-address"
                style={{
                  width: "100%",
                }}
              />
            </View>
          </View>

          <View style={{ marginVertical: 20 }}>
            <ButtonPrimary>
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
  textInput: {
    width: "100%",
    height: 48,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 22,
  },
  textGroup: {
    width: "100%",
    height: 48,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 22,
  },
  textAddOn: {
    width: "12%",
    borderRightWidth: 1,
    borderLeftColor: "black",
    height: "100%",
  },
  textRequired: {
    color: "red",
    marginVertical: 5,
  },
});
