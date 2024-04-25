import React, { Component } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View, Text } from 'react-native';
import Headers from './widgets/HeaderUI';
import {Book, Genres, ListBook} from "./utils/ConstData";
import GenresFlatList from './modules/FlatListUI';
import BodyFlatList from './modules/BodyFlatListUI';
import ExpScrollView from './modules/ExpScrollView';

class CategoriesUI extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar hidden={false}/>
                <View style={styles.header}>
                    <Headers/>
                </View>
                <View style={styles.genre}>
                    <GenresFlatList Data={Genres} />
                </View>
                <View style={styles.topTextContainer}>
                    <Text style={styles.topText}>TOP 5</Text>
                </View>
                <View style={styles.body}>
                    <BodyFlatList rate={ListBook} />
                </View>
                <View style={styles.fantasy}>
                    <ExpScrollView Card={Book} /> 
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
    },
    header: {
        flex: 1,
        backgroundColor: "#0b1f3f",
    },
    topTextContainer: {
        alignItems: 'baseline',
        backgroundColor: "#0b1f3f",
    },
    topText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
        marginLeft: 30,
        fontFamily: 'Courier',
    },
    genre: {
        flex: 1.5,
        backgroundColor: "#0b1f3f",
    },
    body: {
        flex: 5,
        backgroundColor: "#0b1f3f",
        padding: 10,
    },
    fantasy:{
        borderRadius: 15,
        borderColor: 'white',
        flex: 10,
        backgroundColor: "white",
    },
});

export default CategoriesUI;