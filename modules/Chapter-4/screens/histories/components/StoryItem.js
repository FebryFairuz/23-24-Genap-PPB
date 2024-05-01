import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const StoryItem = ({ items }) => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <View style={styles.storyContainer}>
        <Image
          source={items.image} 
          style={styles.storyImage}
        />
        <View style={styles.storyDetails}>
          <Text style={styles.title}>{items.judul}</Text>
          <Text style={styles.author}>By {items.author}</Text>
          <Text style={styles.genre}>{items.genre}</Text>
          <Text style={styles.lastViewed}>Last viewed: {items.lastViewed}</Text>
          
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
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
    fontWeight: '600',
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
    bottom: -3,
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
});

export default StoryItem;