import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import Headers from "./components/HeadersUI";
import GenresFlatList from "./components/GenresFlatList";
import BodyFlatList from "./components/BodyFlatList";
import ExpScrollView from "./components/ExpScrollView";
import { ListBook } from "../../utils/ConstData";
import { useNavigation } from "@react-navigation/native";

export default function DetailGenre({route}) {
  const navigation = useNavigation();
  const { genre_id } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={false} />
      <View style={styles.header}>
        <Headers navigation={navigation} />
      </View>
      <View style={styles.genre}>
        <GenresFlatList genre_id={genre_id} />
      </View>
      <View style={styles.topTextContainer}>
        <Text style={styles.topText}>TOP 5</Text>
      </View>
      <View style={styles.body}>
        <BodyFlatList rate={ListBook} />
      </View>
      <View style={styles.fantasy}>
        <ExpScrollView  />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b1f3f",
  },
  header: {
    flex: 1,
    backgroundColor: "#0b1f3f",
  },
  topTextContainer: {
    alignItems: "baseline",
    backgroundColor: "#0b1f3f",
  },
  topText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    marginLeft: 30,
  },
  genre: {
    flex: 1.5,
    backgroundColor: "#0b1f3f",
  },
  body: {
    flex: 5,
    backgroundColor: "#0b1f3f",
    padding: 10,
  },
  fantasy: {
    borderTopStartRadius:15,
    borderTopEndRadius:15,
    borderColor: "white",
    flex: 10,
    backgroundColor: "white",
  },
});
