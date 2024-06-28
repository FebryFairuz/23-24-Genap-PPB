import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import * as Speech from "expo-speech";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { ColorPallete } from "../../../utils/Colors";

export function HeaderNavBar() {
  const navigation = useNavigation();

  const [isLove, setIsLove] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.nav_icon}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name={"chevron-down-circle-outline"}
            color={ColorPallete.white}
            size={34}
          />
        </TouchableOpacity>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={{ marginRight: 15 }}
            onPress={() => setIsLove(!isLove)}
          >
            <Ionicons
              name={"heart" + (isLove ? "" : "-outline")}
              color={ColorPallete.red}
              size={34}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              name={"share-social"}
              color={ColorPallete.white}
              size={34}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const HeaderReadBook = ({ book }) => {
  const navigation = useNavigation();

  const speak = () => {
    let storyteller = "Title book is " + book.title+".";
    storyteller += book.story;
    Speech.speak(storyteller, {
      language: "en",
      onDone: () => setIsSpeaking(false),
      onStopped: () => setIsSpeaking(false),
    });
    setIsSpeaking(true);
  };
  const stop = () => {
    Speech.stop();
    setIsSpeaking(false);
  };

  const [isLove, setIsLove] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  return (
    <View
      style={{
        ...styles.nav_icon,
        backgroundColor: ColorPallete.white,
        paddingHorizontal: 15,
        paddingVertical: 15,
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate("For You")}>
        <Ionicons
          name={"chevron-back-circle-outline"}
          color={ColorPallete.purple}
          size={34}
        />
      </TouchableOpacity>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={{ marginRight: 15 }} onPress={isSpeaking ? stop : speak}>
          <Ionicons name={isSpeaking ? "stop" : "play"} color={ColorPallete.purple} size={34} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsLove(!isLove)} >
          <Ionicons
            name={"heart" + (isLove ? "" : "-outline")}
            color={ColorPallete.red}
            size={34}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  nav_icon: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export { HeaderReadBook };
