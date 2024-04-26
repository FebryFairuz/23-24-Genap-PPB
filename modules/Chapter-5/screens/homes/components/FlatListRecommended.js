import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Books from './Books';
import { ListCateg } from '../../../utils/ConstData';


const FlatListRecommended = ({ Data, navigation }) => {
    const filteredBooks = ListCateg.find(category => category.name === 'Recomendations').books;
    const recommendBooks = filteredBooks.map(bookId => Data.find(book => book.id === bookId));
    return (
        <FlatList data={recommendBooks} horizontal={true} renderItem={({ item }) => <Books item={item} navigation={navigation} />} />
    );
}
export default FlatListRecommended;
