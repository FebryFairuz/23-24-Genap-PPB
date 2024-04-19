import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ToastAndroid,
  Platform,
  Alert,
} from "react-native";
import Checkbox from "expo-checkbox";
import {
  ButtonPrimary,
  ButtonTersier,
} from "../../../Chapter-4/components/Buttons/ButtonUi";

export function PBSignUp({ navigation }) {
  const [isPasswordShown, setIsPasswordShown] = useState(true);
  const [isChecked, setIsChecked] = useState(false);

  const objSignUp = {
    email: "",
    password: "",
    mobile: "",
  };
  const [submit, setSubmit] = useState(objSignUp);

  const HandlerSignUp = () => {
    if (submit.email && submit.password && submit.mobile) {
      if (isChecked) {
        PlatformOSConfirm(
          "Please signin using the same username and password as your created"
        );
        navigation.navigate("SignIn");
      } else {
        PlatformOSConfirm("Please tick the terms and conditions");
      }
    } else {
      PlatformOSConfirm("Please fill in all fields correctly");
    }
  };

  const PlatformOSConfirm = (message) => {
    if (Platform.OS === "android") {
      ToastAndroid.show(message, ToastAndroid.SHORT, ToastAndroid.CENTER);
    } else if (Platform.OS === "ios") {
      Alert.alert(message);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={false} />
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        <View style={{ marginVertical: 20 }}>
          <Text style={styles.title}>Create Account</Text>
          <Text style={{ fontSize: 16 }}>Connect with your friend today!</Text>
        </View>
        <View style={{ marginBottom: 12 }}>
          <Text style={styles.label}>Email address</Text>

          <View style={styles.textInput}>
            <TextInput
              placeholder="Enter your email address"
              placeholderTextColor={"gray"}
              keyboardType="email-address"
              style={{
                width: "100%",
              }}
            />
          </View>
        </View>

        <View style={styles.containerBtn}>
          <ButtonPrimary onPress={() => HandlerSignUp()}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </ButtonPrimary>
          <ButtonTersier onPress={() => navigation.navigate("OnBoardScreen")}>
            <Text style={{ ...styles.buttonText, color: "black" }}>Cancel</Text>
          </ButtonTersier>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 12,
  },
  containerBtn: {
    marginVertical: 20,
  },
  buttonText: {
    fontSize: 20,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
  label: {
    fontSize: 16,
    fontWeight: 400,
    marginVertical: 8,
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
  textRequired:{
    color:"red",
    marginVertical:5
  }
});
