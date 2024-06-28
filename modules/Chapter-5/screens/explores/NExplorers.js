import {
    View,
    Text,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
  } from "react-native";
  import React from "react";
  import { Genres } from "../../utils/ConstData";
  import { useNavigation } from "@react-navigation/native";
  
  const windowWidth = Dimensions.get("window").width;
  
  export default function NExplorers() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" hidden={false} />
        <Text style={{ color:"white" }}>Explorer</Text>
        <View style={styles.boxGroup}>
          {Genres.map((v, index) => (
            <BoxGenre key={index} data={v} />
          ))}
        </View>
      </SafeAreaView>
    );
  }
  
  const BoxGenre = ({ data }) => {
    const navigation = useNavigation();
    const handlerClick = (genre_id) => {
      navigation.navigate("DetailGenre", { genre_id: genre_id });
    };
    return (
      <TouchableOpacity onPress={() => handlerClick(data.id)}>
        <View style={styles.boxItem}>
          <Text>{data.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#0b1f3f",
    },
    boxGroup: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      paddingHorizontal: 5,
    },
    boxItem: {
      backgroundColor: "white",
      borderRadius: 15,
      width: windowWidth / 2 - 15,
      height: 100,
      padding: 10,
      marginVertical: 10,
      marginHorizontal: 5,
    },
  });
  