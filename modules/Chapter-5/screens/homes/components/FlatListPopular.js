import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Books from './Books';
import { ListCateg } from '../../../utils/ConstData';


const FlatListPopular = ({Data}) => {
    const filteredBooks = ListCateg.find(category => category.name === 'Populer').books;
    const popularBooks = filteredBooks.map(bookId => Data.find(book => book.id === bookId));
    return (
        <FlatList data = {popularBooks} horizontal = {true} renderItem={({item}) => <Books item = {item}/>}/>
    );
}
export default FlatListPopular;