import React from 'react';
import { StyleSheet, View,Text, TouchableOpacity, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

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
        width:(width-40)/3,
        marginRight:15,
    },
    image:{
        backgroundColor:'orange',
        height:180,
        width:(width-40)/3-15
    }
})

export default Books;