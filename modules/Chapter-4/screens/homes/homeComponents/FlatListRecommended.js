import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Books from './Books';
import { ListCateg } from '../../../utils/ConstData';


const FlatListRecommended = ({Data}) => {
    const filteredBooks = ListCateg.find(category => category.name === 'Recomendations').books;
    const recentlyBooks = filteredBooks.map(bookId => Data.find(book => book.id === bookId));
    return (
        <FlatList data = {recentlyBooks} horizontal = {true} renderItem={({item}) => <Books item = {item}/>}/>
    );
}
export default FlatListRecommended;
