import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Titles = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <Text style={{ fontSize: 16 }}>Connect with your friend today!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 20
    },
    title:{
      fontSize: 22,
      fontWeight: "bold",
      marginVertical: 12,
    }
  });
  

export default Titles;
