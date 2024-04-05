//rnc => RClassComponent

import { SafeAreaView, ScrollView, Text, View } from "react-native";
import React, { Component } from "react";
import Header from "./widgets/Header";
import Body from "./widgets/Body";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.TextHello = this.TextHello.bind(this);
    this.state = {
        name : "Febri",
        dob: "2000-1-23"
    }
  }

  TextHello(){
    return (
        <Text>Hello World</Text>
    )
  }

  render() {
    return (
      <ScrollView>
        <SafeAreaView>
        {/* <Text> Name: {this.state.name} </Text>
        <Text> DOB: {this.state.dob} </Text>
        {this.TextHello()} */}
       <View>
            <Header />
            <Body />
        </View>
        </SafeAreaView>
      </ScrollView>
    );
  }
}
