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
import Titles from "./components/Titles";
import { FieldEmails, FieldMobileNum, FieldPassword } from "./components/Forms";
import Checkbox from "expo-checkbox";
import { ButtonPrimary, ButtonTersier } from "../../components/Buttons/ButtonUi";

export function SignUp({ navigation }) {
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
        PlatformOSConfirm("Please signin using the same username and password as your created");
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
        <Titles />
        <FieldEmails submit={submit} setSubmit={setSubmit} />
        <FieldPassword
          isPasswordShown={isPasswordShown}
          setIsPasswordShown={setIsPasswordShown}
          submit={submit}
          setSubmit={setSubmit}
        />
        <FieldMobileNum submit={submit} setSubmit={setSubmit} />
        <View
          style={{
            flexDirection: "row",
            marginVertical: 6,
          }}
        >
          <Checkbox
            style={{ marginRight: 8 }}
            value={isChecked}
            onValueChange={setIsChecked}
            color={isChecked ? "#eaa831" : undefined}
          />

          <Text>I aggree to the terms and conditions</Text>
        </View>

        <View style={styles.containerBtn}>
          <ButtonPrimary onPress={() => HandlerSignUp()}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </ButtonPrimary>
          <ButtonTersier onPress={() => navigation.navigate("OnBoardScreen")}>
            <Text style={{ ...styles.buttonText, color:"black" }}>Cancel</Text>
          </ButtonTersier>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});
