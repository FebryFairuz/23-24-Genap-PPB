import { Alert, Platform } from "react-native";

const PlatformOSConfirm = (message) => {
  if (Platform.OS === "android") {
    ToastAndroid.show(message, ToastAndroid.SHORT, ToastAndroid.CENTER);
  } else if (Platform.OS === "ios") {
    Alert.alert(message);
  }
};

export {PlatformOSConfirm}