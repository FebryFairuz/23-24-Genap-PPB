import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Animated,
  Easing,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useRef } from "react";
import { ButtonPrimary } from "../../../components/Buttons/ButtonUi";
import { ColorPallete } from "../../../utils/Colors";

export function Banners() {
  const spinValue = useRef(new Animated.Value(0)).current;

  const spin = () => {
    spinValue.setValue(0);
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  const spinInterpolation = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../../../assets/_images/books/Kancil_dan_buaya.png")}
        style={styles.fullscreenImage}
      >
        <View style={styles.btn_group}>
          <ButtonPrimary>
            <View>
              <Text style={styles.buttonText}>Read Book</Text>
            </View>
          </ButtonPrimary>
          <TouchableOpacity style={{ marginLeft: 15 }} onPress={spin}>
            <Animated.View
              style={{ transform: [{ rotate: spinInterpolation }] }}
            >
              <Ionicons name={"heart"} color={ColorPallete.red} size={34} />
            </Animated.View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
  fullscreenImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  buttonText: {
    fontSize: 20,
    textAlign: "center",
    color: ColorPallete.white,
    fontWeight: "bold",
  },
  btn_group: {
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
