import React from 'react';
import { StyleSheet, View,Text } from 'react-native';

const Books = ({item}) => {
    return (
        <View style = {styles.content}>
            <View style={styles.image}></View>
            <Text>{item.title}</Text>
        </View> 
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
