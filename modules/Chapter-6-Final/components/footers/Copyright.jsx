import { View, Text } from "react-native";
import React from "react";
import moment from "moment";

export default function Copyright() {
  const today = moment().format("");
  return (
    <View style={{ padding: 10 }}>
      <Text style={{ textAlign: "center", fontSize: 11 }}>
        Copyright © {moment(today).format("Y")} IBI Kesatuan Bogor
      </Text>
    </View>
  );
}
