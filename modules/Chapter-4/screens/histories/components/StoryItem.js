import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View, Image, TouchableOpacity, SectionList } from 'react-native';

const StoryItem = ({ items }) => {
  // Generate unique IDs for user and book
  const userId = generateUniqueId();
  const bookId = generateUniqueId();

  return (
    <TouchableOpacity onPress={() => {}}>
      <View style={styles.storyContainer}>
        <Image
          source={items.image} 
          style={styles.storyImage}
        />
        <View style={styles.storyDetails}>
          <Text style={styles.judul}>{items.judul}</Text>
          <Text style={styles.author}>By {items.author}</Text>
          <Text style={styles.genre}>{items.genre}</Text>
          <Text style={styles.lastViewed}>Last viewed: {items.lastViewed}</Text>
        </View>
        <View style={styles.metadataContainer}>
          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={16} color="orange" style={{ marginRight: 5 }} />
            <Text style={styles.rating}>{items.rating.toFixed(1)}</Text>
          </View>
          <View style={styles.viewContainer}>
            <Ionicons name="eye" size={16} color="grey" style={{ marginRight: 5 }} />
            <Text style={styles.viewCount}>{items.viewCount}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const generateUniqueId = () => {
  // Generate a unique ID here
  return 'uniqueID'; // Implement your logic to generate unique IDs
}

const styles = StyleSheet.create({
    heading: {
      fontSize: 30,
      color: "orange",
      padding: 15,
      textAlign: 'left',
      fontWeight:"bold",
    },
    searchContainer: {
      padding: 10,
      borderBottomWidth: 1,
      borderColor: 'lightgrey',
    },
    searchInputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderRadius: 20,
      borderColor: 'black',
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
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      borderBottomWidth: 1,
      borderColor: 'lightgrey',
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
      fontWeight: 'bold',
    },
    author: {
      fontStyle: 'italic',
    },
    genre: {
      color: 'grey',
    },
    lastViewed: {
      color: 'grey',
    },
    metadataContainer: {
      position: 'absolute',
      bottom: 5,
      right: 10,
      flexDirection: 'row',
      alignItems: 'center',
    },
    ratingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 10,
    },
    viewContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    rating: {
      color: 'grey',
      fontSize: 14,
      marginRight: 1,
    },
    viewCount: {
      color: 'grey',
      fontSize: 14,
    },
    notFoundText: {
      textAlign: 'center',
      marginTop: 20,
      fontSize: 16,
      fontStyle: 'italic',
      color: 'grey',
    },
});

export default StoryItem;