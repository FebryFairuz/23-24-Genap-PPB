import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  SectionList,
} from "react-native";
import React, { Component, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import StoryItem from "./components/StoryItem";

export default class Histories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
      filteredStories: [],
      isNotFound: false,
    };
  }

  storiesTuesday = [
    {
      image: require("../../../../assets/_images/books/Putri_salju.jpg"),
      judul: "Putri Salju",
      author: "Paul",
      genre: "Fiction",
      lastViewed: "23 January 2024",
      rating: 4.5,
      viewCount: 480,
    },
    {
      image: require("../../../../assets/_images/books/Hantu_durian.png"),
      judul: "Hantu Durian Runtuh",
      author: "Muad'dib",
      genre: "Horror",
      lastViewed: "23 January 2024",
      rating: 4.2,
      viewCount: 220,
    },
    {
      image: require("../../../../assets/_images/books/Seorang_lelaki_dan_kucingnya.jpeg"),
      judul: "Seorang Lelaki Dan Kucingnya",
      author: "Insan",
      genre: "Comedy",
      lastViewed: "23 January 2024",
      rating: 4.8,
      viewCount: 500,
    },
    {
      image: require("../../../../assets/_images/books/Timun_mas.png"),
      judul: "Timun Mas",
      author: "Chandra",
      genre: "Fiction",
      lastViewed: "23 January 2024",
      rating: 4.0,
      viewCount: 400,
    },
    {
      image: require("../../../../assets/_images/books/Hikayat_hang_tuah.png"),
      judul: "Hikayat Hang Tuah",
      author: "Muhammad Haji salleh",
      genre: "Non Fiction",
      lastViewed: "23 January 2024",
      rating: 4.3,
      viewCount: 300,
    },
  ];

  storiesMonday = [
    {
      image: require("../../../../assets/_images/books/Halloween_candy.png"),
      judul: "Halloween : Candy",
      author: "Michael Myers",
      genre: "Horror",
      lastViewed: "22 January 2024",
      rating: 4.7,
      viewCount: 450,
    },
    {
      image: require("../../../../assets/_images/books/Lutung_kasarung.png"),
      judul: "Lutung Kasarung",
      author: "Usul",
      genre: "Fiction",
      lastViewed: "22 January 2024",
      rating: 4.6,
      viewCount: 420,
    },
    {
      image: require("../../../../assets/_images/books/Malin_kundang.png"),
      judul: "Malin kundang",
      author: "Moch Isnaeni",
      genre: "Fiction",
      lastViewed: "22 January 2024",
      rating: 4.9,
      viewCount: 550,
    },
    {
      image: require("../../../../assets/_images/books/Kancil_dan_buaya.png"),
      judul: "Kancil Dan Buaya",
      author: "Tok Dalang Ringgit",
      genre: "Fiction",
      lastViewed: "22 January 2024",
      rating: 4.4,
      viewCount: 370,
    },
    {
      image: require("../../../../assets/_images/books/Kisah_konyol.png"),
      judul: "Kisah Konyol Sampe Ngompol",
      author: "Jegung Wicaksono",
      genre: "Comedy",
      lastViewed: "22 January 2024",
      rating: 4.5,
      viewCount: 380,
    },
  ];

  data = [
    {
      title: "Tuesday",
      data: this.storiesTuesday,
    },
    {
      title: "Monday",
      data: this.storiesMonday,
    },
  ];

  allStories = [...this.storiesMonday, ...this.storiesTuesday];

  handleSearch = (text) => {
    this.setState({ searchInput: text });
    const filtered = this.allStories.filter((story) =>
      story.judul.toLowerCase().includes(text.toLowerCase())
    );
    this.setState({ filteredStories: filtered });
    this.setState({ isNotFound: filtered.length === 0 });
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Text style={styles.heading}>History</Text>
        <View style={styles.searchContainer}>
          <View style={styles.searchInputContainer}>
            <Ionicons
              name="search"
              size={20}
              color="black"
              style={styles.searchIcon}
            />
            <TextInput
              style={styles.searchInput}
              placeholder="Input Title"
              value={this.state.searchInput}
              onChangeText={(text) => this.handleSearch(text)}
            />
          </View>
        </View>

        <SectionList
          sections={this.data}
          renderItem={({ item }) => <StoryItem items={item} />}
          renderSectionHeader={({ section: { title } }) => (
            <Text
              style={{
                color: "orange",
                fontSize: 20,
                padding: 15,
                textAlign: "left",
                fontWeight: "bold",
                marginTop: 5,
              }}
            >
              {title}
            </Text>
          )}
        />

        <StatusBar style="auto" />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    color: "orange",
    padding: 15,
    textAlign: "left",
    fontWeight: "bold",
  },
  searchContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "lightgrey",
  },
  searchInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "black",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 25,
  },
  storyContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "lightgrey",
  },
  storyImage: {
    width: 90,
    height: 80,
    borderRadius: 10,
  },
  storyDetails: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  author: {
    fontStyle: "italic",
  },
  genre: {
    color: "grey",
  },
  lastViewed: {
    color: "grey",
  },
  metadataContainer: {
    position: "absolute",
    bottom: 5,
    right: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  viewContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    color: "grey",
    fontSize: 14,
    marginRight: 1,
  },
  viewCount: {
    color: "grey",
    fontSize: 14,
  },
  notFoundText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
    fontStyle: "italic",
    color: "grey",
  },
});
