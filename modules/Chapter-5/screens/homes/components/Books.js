import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

const Books = ({ item, navigation }) => {
    return (
        <TouchableOpacity style={styles.content} onPress={() => navigation.navigate('DetailBook', { bookId: item.id })}>
            <Image source={item.img} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    content: {
        justifyContent: 'center',
        height: 200,
        width: 100,
        margin: 15,
    },
    image: {
        height: 180,
        width: 100,
        borderRadius: 10,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    title: {
        textAlign: 'center',
        fontSize: 14,
        color: 'white',
    }
});

export default Books;
