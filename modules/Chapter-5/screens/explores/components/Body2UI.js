import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity  } from "react-native";

const Body2UI = ({ books }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: books.img}} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{books.title}</Text>
        <Text style={styles.sinopsis}>{books.sinopsis}</Text>
      </View>
      <View style = {styles.button}>
         <TouchableOpacity >
            <Text style = {styles.text}>
               Read
            </Text>
         </TouchableOpacity >
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: 150, // Diganti menjadi nilai absolut untuk tinggi
    backgroundColor: "#0b1f3f",
    borderRadius: 10,
    flexDirection: "row", // Diganti menjadi "row" agar sesuai dengan layout yang diinginkan
    alignItems: "center",
    marginBottom: 16,
    marginTop: 15,
    marginHorizontal: 15,
  },
  
  image: {
    width: 100,
    height: '90%',
    borderRadius: 10,
    marginLeft: 20, // Diganti menjadi marginLeft agar gambar berada di sisi kiri
  },
  details: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
    marginBottom: 5,
    marginRight: '20',
    // marginTop: 1,
    alignItems: "flex-start",
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 15,
    marginTop: 10,
    marginBottom: 10,
    color: "white",
  },
  sinopsis: {
    fontSize: 12,
    color: "white",
    marginLeft: 4,
    marginRight: 15,
    marginBottom: 10,
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