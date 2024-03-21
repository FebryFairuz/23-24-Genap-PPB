//rnf = > RFunction Component

import { View, Text, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, StatusBar, Button, StyleSheet } from "react-native";
import React, { useState } from "react";

export default function Header() {
  const name = "Febry";
  //name = "Isnan";
  let dob = "1980-01-11";
  var place_dob = "Jakarta";

  //object
  const person = {
    id: 1,
    name: name,
    dob: dob,
    place_dob: place_dob,
    isactive: true,
  };

  //array object
  const arrayPerson = [
    { nama: "budi", lahir: "2000-11-11" }, // v
    { nama: "rudi", lahir: "2001-03-12" }, // v
  ];

  const TextName = ({ data, place }) => {
    return (
      <View>
        <Text>Name: {data.name}</Text>
        <Text>Dob: {data.dob}</Text>
        <Text>Place: {place}</Text>
      </View>
    );
  };
  const TextName2 = (props) => {
    return (
      <View>
        <Text>Name: {props.data.name}</Text>
        <Text>Dob: {props.data.dob}</Text>
        <Text>Place: {props.place}</Text>
      </View>
    );
  };


  return (
    <View style={{ marginTop: 30, padding:10 }}>
      <Button title="Button form OS" onPress={() => alert("Button")} />

      <TouchableOpacity
        activeOpacity={0.6}
      >
        {buttonAct("Touchable ")}
      </TouchableOpacity>

      <TouchableHighlight
        activeOpacity={0.6}
      >
        {buttonAct("Touchable Highlight")}
      </TouchableHighlight>

      <TouchableWithoutFeedback 
        activeOpacity={0.6}
      >
        {buttonAct("Touchable Without Feedback")}
      </TouchableWithoutFeedback>
    </View>
  );
}

const buttonAct = (title) => {
    return (
      <View
        style={{
          backgroundColor: "purple",
          borderRadius: 10,
          padding: 10,
          alignItems: "center",
          marginVertical: 5,
        }}
      >
        <Text style={{ color: "white" }}>{title}</Text>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      padding: 20,
    },
    avatar: {
      width: 100,
      height: 100,
      borderWidth: 1,
      borderRadius: 5,
    },
    inputText: {
      borderWidth: 1,
      padding: 10,
    },
  });
  