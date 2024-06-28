import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { ColorPallete } from "../../../utils/Colors";
import { useNavigation } from "@react-navigation/native";

export function HeaderNavBar() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.card_search}>
        <Ionicons name={"search-outline"} color={ColorPallete.gray} size={24} />
        <TextInput
          placeholder="Search"
          placeholderTextColor={"gray"}
          style={{ width: "90%", height: 40, marginLeft: 5 }}
        />
      </View>
      <View style={styles.card_scan}>
        <TouchableOpacity onPress={()=>navigation.navigate("Scanner QR Code")}>
          <Ionicons
            name={"scan-circle-outline"}
            color={ColorPallete.black}
            size={34}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: ColorPallete.white,
    marginTop: Platform.OS === "android" ? "10%" : 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical:5
  },
  card_search: {
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
  },
  card_scan: {},
});
