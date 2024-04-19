import { SafeAreaView, Text, View } from "react-native";
import React, { Component } from "react";
import TestButtons from "./TestButtons";

export default class Homes extends Component {
  render() {
    return (
      <SafeAreaView>
        <Text>Homes</Text>
        <TestButtons navigation={this.props.navigation} />
      </SafeAreaView>
    );
  }
}
