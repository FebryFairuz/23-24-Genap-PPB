import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";

const BodyUI = ({ book }) => {
  const renderStarRating = (rating) => {
    const stars = [];
    for (let i = 5; i >= 1; i--) {
      if (i >= rating) {
        stars.push(<FontAwesome5Icon key={i} name="star" size={16} color="#FFD700" />);
      } else {
        stars.push(<FontAwesome5Icon key={i} name="star" size={16} color="#D3D3D3" />);
      }
    }
    return stars;
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerimg}>
        <Text style={styles.rate}>{book.rating}</Text>
        <Image source={book.img} style={styles.image}/>
        <View style={styles.details}>
          <View style={styles.star}>{renderStarRating(book.rating)}</View>
          <Text style={styles.title}>{book.title}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "50%",
    height: "100%",
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    marginHorizontal: 10,
  },
  containerimg: {
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
    marginTop: 5,
    marginBottom: 5,
    width: 150,
  },
  image: {
    width: 100, 
    height: 120, 
    borderRadius: 10,
    marginBottom: 5,
  },
  rate: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2E4A6A",
    marginBottom: 3,

  },
  details: {
    marginBottom: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#2E4A6A",
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  star: {
    flexDirection: "row",
    marginBottom: 4,
  },
});

export default BodyUI;