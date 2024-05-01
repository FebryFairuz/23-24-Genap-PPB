import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const GenresUI = ({ items, genre_id }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {}}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={[
          styles.genre,
          { 
            borderColor: (genre_id === items.id) ? "#eaa831" : "",
            backgroundColor: (genre_id === items.id) ? "#eaa831" : ""
          }
        ]}
      >
        <Text style={isPressed ? styles.text : styles.text1}>{items.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  text: {
    color: '#eaa831',
    fontSize: 16,
  },
  text1: {
    color: 'white',
    fontSize: 16,
  },
  genre: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
});

export default GenresUI;