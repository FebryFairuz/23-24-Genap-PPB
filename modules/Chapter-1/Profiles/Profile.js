import { SafeAreaView, ScrollView, StatusBar, Text, View } from "react-native";
import React, { Component } from "react";
import Header from "./widgets/Header";
import Body from "./widgets/Body";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.TextHello = this.TextHello.bind(this);
    this.state = {
        name : "Febry",
        place_dob : "Jakarta",
        weight : 80.0    
    };
  }

  TextHello(){
    return (
        <Text>Halo, udah ngantuk</Text>
    )
  }

  render() {
    const kelas = "PPB-TI-22PB"
    return (
      <ScrollView>
        <StatusBar hidden={false} />
        <SafeAreaView>
        {/* <Text>Kelas: {kelas} </Text>
        <Text>Name: { this.state.name}</Text>
        <View>
            <Text>Place DOB: { this.state.place_dob}</Text>
            <Text>Weight: { this.state.weight}</Text>
        </View>
        { this.TextHello() } */}
        {/* <Header /> */}
        <Header />
        </SafeAreaView>
      </ScrollView>
    );
  }
}
