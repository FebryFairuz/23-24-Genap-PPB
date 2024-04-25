import React from "react";
import { FlatList } from "react-native";
import GenresUI from "../widgets/GenresUI";

const GenresFlatList = ({ Data }) => { 
  return (
    <FlatList
      horizontal={true}
      data={Data} 
      renderItem={({ item }) => <GenresUI items={item} />}
    />
  );
};


export  default GenresFlatList;