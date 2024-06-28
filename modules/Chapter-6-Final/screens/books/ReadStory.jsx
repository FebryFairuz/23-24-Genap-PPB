import { View, Text, SafeAreaView, StyleSheet, ScrollView, Platform } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { HeaderReadBook } from "./components/HeaderNavBar";
import { ColorPallete } from "../../utils/Colors";

export function ReadStory() {
  const route = useRoute();
  const { book } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <HeaderReadBook book={book} />
      </View>
      <ScrollView style={{ paddingHorizontal: 15 }}>
        <Text style={styles.title}>{book.title}</Text>
        <Text>{book.story}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1, backgroundColor:ColorPallete.light
  },
  header: { marginTop: Platform.OS === "android" ? "10%" : 0, marginBottom: "5%" },
  title: {
    fontSize: 24,
    color: ColorPallete.purple,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
});
