import React from 'react';
import { StyleSheet, View,Text, TouchableOpacity } from 'react-native';

const Books = ({item, navigation}) => {
    return (
        <TouchableOpacity style = {styles.content}  onPress={() => navigation.navigate('DetailBook')}>
            <View style={styles.image}></View>
            <Text>{item.title}</Text>
        </TouchableOpacity> 
    );
}

const styles = StyleSheet.create({
    content:{
        justifyContent:'flex-start',
        height:200,
        width:100,
        margin:'auto',
    },
    image:{
        backgroundColor:'orange',
        height:150,
        width:100,
        resizeMode:'cover'
    }
})

export default Books;