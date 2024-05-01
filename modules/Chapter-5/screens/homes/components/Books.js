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
        justifyContent:'center',
        height:200,
        width:100,
        margin:15,
    },
    image:{
        backgroundColor:'orange',
        height:180,
        width:100
    }
})

export default Books;