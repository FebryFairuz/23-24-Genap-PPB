import React from "react";
import { FlatList } from "react-native";
import BodyUI from "./BodyUI";

const BodyFlatList = ({ rate }) => {
  const filteredBooks = rate.filter(book => book.rating >= 1 && book.rating <= 5);

  return (
    <FlatList
      horizontal={true}
      data={filteredBooks}
      renderItem={({ item }) => <BodyUI book={item} />}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default BodyFlatList;
