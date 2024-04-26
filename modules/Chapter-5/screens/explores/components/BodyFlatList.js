import React from "react";
import { FlatList, View, Text } from "react-native";
import BodyUI from "./BodyUI";

const BodyFlatList = ({ rate }) => { 
    return (
      
    <FlatList
        horizontal={true}
        data={rate} 
        renderItem={({ item }) => <BodyUI book={item} />} // Perbaikan di sini
      
      />
    );
};
  
export default BodyFlatList;