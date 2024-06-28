import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { ColorPallete } from "../../../utils/Colors";

export function CardProfiles({ profile }) {
  return (
    <View style={styles.container}>
      <Image
        source={
          profile.gender === "F"
            ? require("../../../../../assets/icons/icon-girl-1.png")
            : require("../../../../../assets/icons/icon-boy-1.png")
        }
        style={styles.img_profile}
      />
      <View style={{ marginLeft: 15, alignItems: "center" }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.title}>{profile.fullname}</Text>
          <Ionicons
            name={"shield-checkmark"}
            color={ColorPallete.purple}
            size={28}
            style={{ marginLeft: 5 }}
          />
        </View>
        <Text>{profile.email}</Text>
      </View>
    </View>
  );
}

const CardCalculate = ({ label, value }) => {
  return (
    <View style={styles.card_calculate}>
      <Text style={styles.card_calculate_label}>{value}</Text>
      <Text>{label}</Text>
    </View>
  );
};

const CardNavigation = ({ icon, label }) => {
  return (
    <TouchableOpacity>
      <View style={styles.card_nav}>
        <View style={{ flexDirection:"row" }}>
          <Ionicons
            name={icon}
            color={ColorPallete.black}
            size={28}
            style={{ marginRight: 5 }}
          />
          <Text style={{ fontSize: 18 }}>{label}</Text>
        </View>
        <Ionicons
            name={"chevron-forward"}
            color={ColorPallete.black}
            size={28}
            style={{ marginRight: 5 }}
          />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: "column", alignItems: "center" },
  img_profile: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: ColorPallete.light,
    borderColor: ColorPallete.purple,
    borderWidth: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: ColorPallete.black,
  },
  card_calculate: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  card_calculate_label: {
    fontSize: 28,
    fontWeight: "bold",
  },
  card_nav: {
    flexDirection: "row",
    backgroundColor: ColorPallete.white,
    padding: 20,
    alignItems: "center",
    justifyContent:"space-between"
  },
});

export { CardCalculate, CardNavigation };
