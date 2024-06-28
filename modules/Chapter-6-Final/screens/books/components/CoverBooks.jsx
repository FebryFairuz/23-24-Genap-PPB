import { View, Text, StyleSheet, Image, TouchableOpacity, Linking, TouchableHighlight } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { ColorPallete } from "../../../utils/Colors";

export function CoverBooks({ book }) {
  return (
    <View style={styles.container_book_info}>
      <Image source={book.img} style={styles.cover_book} />
      <View style={{ width: "80%", alignItems: "center", marginVertical: 15 }}>
        <Text style={styles.title}>{book.title}</Text>
        <View>
          <Text
            style={{
              ...styles.title,
              fontSize: 16,
              marginBottom: 0,
              color: ColorPallete.red,
            }}
          >
            Author:
          </Text>
          <Text style={{ ...styles.title, fontSize: 16 }}>{book.author}</Text>
        </View>
      </View>
      <RatingStart rating={book.rating} />
      <View style={{ marginVertical: 20 }}>
        <ButtonLocation latitude={book.latitude} longitude={book.longitude} />
      </View>
    </View>
  );
}

const ButtonLocation = ({ latitude, longitude }) => {
  const handlePress = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    Linking.openURL(url);
  };
  return (
    <TouchableHighlight onPress={handlePress}>
      <View style={styles.btn_location}>
        <Ionicons
          name="map"
          size={24}
          color={ColorPallete.white}
          style={{ marginRight: 5 }}
        />
        <Text
          style={{
            color: ColorPallete.white,
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          View Store
        </Text>
      </View>
    </TouchableHighlight>
  );
};

const RatingStart = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(
      <Ionicons
        key={i}
        name="star"
        size={24}
        color={ColorPallete.orange}
        style={{ marginRight: 5 }}
      />
    );
  }

  return <View style={{ flexDirection: "row" }}>{stars}</View>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: ColorPallete.white,
    textAlign: "center",
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
  },
  container_book_info: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  cover_book: { width: 200, height: 200, borderRadius: 10 },
  btn_location: {
    flexDirection: "row",
    backgroundColor: ColorPallete.purple,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
});
