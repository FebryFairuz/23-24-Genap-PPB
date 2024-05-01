import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const FieldEmails = ({ submit, setSubmit }) => {
  return (
    <View style={{ marginBottom: 12 }}>
      <Text style={styles.label}>Email address</Text>

      <View style={styles.textInput}>
        <TextInput
          placeholder="Enter your email address"
          placeholderTextColor={"gray"}
          keyboardType="email-address"
          defaultValue={submit.email}
          onChangeText={(text) => setSubmit({ ...submit, email: text })}
          style={{
            width: "100%",
          }}
        />
      </View>
      {!submit.email && <Text style={styles.textRequired}>Required field</Text>}
    </View>
  );
};

const FieldPassword = (props) => {
  const { isPasswordShown, setIsPasswordShown, submit, setSubmit } = props;
  return (
    <View style={{ marginBottom: 12 }}>
      <Text style={styles.label}>Password</Text>

      <View style={styles.textGroup}>
        <TextInput
          placeholder="Enter your password"
          secureTextEntry={isPasswordShown}
          placeholderTextColor={"gray"}
          defaultValue={submit.password}
          onChangeText={(text) => setSubmit({ ...submit, password: text })}
          style={{
            width: "100%",
          }}
        />

        <TouchableOpacity
          onPress={() => setIsPasswordShown(!isPasswordShown)}
          style={{
            position: "absolute",
            right: 12,
          }}
        >
          <Ionicons name={(isPasswordShown == true) ? "eye" : "eye-off"} size={24} color={"black"} />
        </TouchableOpacity>
      </View>
      {!submit.password && <Text style={styles.textRequired}>Required field</Text>}
    </View>
  );
};

const FieldMobileNum = (props) => {
  return (
    <View style={{ marginBottom: 12 }}>
      <Text style={styles.label}>Mobile Number</Text>

      <View style={styles.textGroup}>
        <TextInput
          placeholder="+62"
          placeholderTextColor={"black"}
          keyboardType="numeric"
          style={styles.textAddOn}
        />

        <TextInput
          placeholder="Enter your phone number"
          placeholderTextColor={"grey"}
          keyboardType="numeric"
          defaultValue={props.submit.mobile}
          onChangeText={(text) =>
            props.setSubmit({ ...props.submit, mobile: text })
          }
          style={{
            width: "80%",
          }}
        />
      </View>
      {!props.submit.mobile && <Text style={styles.textRequired}>Required field</Text>}
    </View>
  );
};

const isValidEmail = (val) => {
  let result = "";
  if (val.length > 3) {
    let regEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regEmail.test(val)) {
      result = "Invalid Email Address";
    } else {
      result = "";
    }
  }

  return result;
};

const isValidPassword = (value) => {
  let result = "";
  if (value.length > 3) {
    result = value;
  } else {
    result = "This field is required";
  }
  return result;
};

const styles = StyleSheet.create({
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

export { FieldEmails, FieldPassword, FieldMobileNum };
