import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Books from './Books';
import { ListCateg } from '../../../utils/ConstData';


const FlatListRecently = ({Data, navigation}) => {
    const filteredBooks = ListCateg.find(category => category.name === 'Recently').books;
    const recentlyBooks = filteredBooks.map(bookId => Data.find(book => book.id === bookId));
    return (
        <FlatList data = {recentlyBooks} horizontal = {true} renderItem={({item}) => <Books item = {item} navigation={navigation} />}/>
    );
}
export default FlatListRecently;