import React from "react";
import { Text, View } from "react-native";

//sample ES6 RFC
const Body = () =>{
    return (
        <View>
            <Text>Ini sample ES6 untuk RFC</Text>
            <TextHeader />
        </View>
    )
}

const TextHeader = () =>{
    return (
        <Text>Ini Header text</Text>
    )
}

export default Body;