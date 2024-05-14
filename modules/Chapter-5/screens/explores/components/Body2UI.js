import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView } from "react-native";

const Body2UI = ({ books }) => {
  const getShortSynopsis = (synopsis) => {
    const words = synopsis.split(" ");
    if (words.length > 5) {
      return words.slice(0, 5).join(" ") + " ";
    }
    return synopsis;
  };

  const shortSynopsis = getShortSynopsis(books.sinopsis);

  return (
    <View style={styles.container}>
      <Image source={books.img} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{books.title}</Text>
        <ScrollView contentContainerStyle={styles.scroll}>
          <Text style={styles.sinopsis}>
            {shortSynopsis}
            <Text style={styles.ellipsis}>...</Text>
          </Text>
        </ScrollView>
      </View>
      <View style={styles.button}>
        <TouchableOpacity>
          <Text style={styles.text}>
            Read
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: 150,
    backgroundColor: "#0b1f3f",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    marginTop: 15,
    marginHorizontal: 15,
  },
  image: {
    width: 100,
    height: '90%',
    borderRadius: 10,
    marginLeft: 20,
  },
  details: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10,
    color: "white",
  },
  sinopsis: {
    fontSize: 12,
    color: "white",
  },
  ellipsis: {
    color: "gray",
  },
  scroll: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    paddingBottom: 20,
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginTop: 'auto',
    borderWidth: 1,
    backgroundColor: '#eaa831',
    borderRadius: 18,
    borderColor: '#eaa831',
    width: 70,
    height: 40,
    marginBottom: 10,
    marginRight: 10,
  },
  text: {
    color: 'white',
    alignContent: 'center'
  }
});

export default Body2UI;
