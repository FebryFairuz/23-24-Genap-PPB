import React from "react";
import { FlatList } from "react-native";
import GenresUI from "./GenresUI";
import { Genres } from "../../../utils/ConstData";

const GenresFlatList = ({ genre_id }) => { 
  return (
    <FlatList
      horizontal={true}
      data={Genres} 
      renderItem={({ item }) => <GenresUI genre_id={genre_id} items={item} />}
    />
  );
};


export  default GenresFlatList;