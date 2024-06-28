import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import * as Speech from "expo-speech";
import { ColorPallete } from "../../../utils/Colors";
import { useNavigation } from "@react-navigation/native";

const BotoomSheetRead = ({ book}) => {
    const navigation = useNavigation();
  return (
    <ScrollView
      style={{
        backgroundColor: ColorPallete.white,
        flex: 1,
        paddingHorizontal: 25,
      }}
    >
      <Text style={styles.txt_sinopsis}>Sinopsis:</Text>
      <Text style={{ flexWrap: "wrap" }}>{book.sinopsis}</Text>
      <View style={{ marginTop: 30 }}>
        <TouchableOpacity onPress={()=>navigation.navigate("ReadStory", { book })} style={styles.btn}>
          <Ionicons
            name={"book-outline"}
            color={ColorPallete.white}
            size={34}
          />
          <Text style={styles.btn_label}>Read the Story</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const BotoomSheetActions = ({ data, openBottomSheet }) => {
  const speak = () => {
    Speech.speak(data, { language: "en" });
    openBottomSheet();
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => openBottomSheet()} style={styles.btn}>
        <Text style={styles.btn_label}>Read now</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => speak()} style={styles.btn}>
        <Text style={styles.btn_label}>Play story</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    justifyContent: "space-between",
  },
  btn: {
    flexDirection: "row",
    backgroundColor: ColorPallete.purple,
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 30,
    alignItems:"center",
    justifyContent:"center"
  },
  btn_label: {
    fontSize: 20,
    color: ColorPallete.white,
    fontWeight: "bold",
    marginLeft:10
  },
  txt_sinopsis: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 10,
    color: ColorPallete.purple,
  },
});

export { BotoomSheetRead, BotoomSheetActions };
