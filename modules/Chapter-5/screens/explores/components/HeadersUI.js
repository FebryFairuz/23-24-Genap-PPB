import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Headers = ({navigation}) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
        navigation.navigate("Explorer");
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPressIn={handleMouseEnter}
                onPressOut={handleMouseLeave}
                style={styles.iconContainer}
            >
                <FontAwesome5
                    name={"arrow-left"}
                    size={19}
                    color={isHovered ? "#ffffff" : "#cccccc"}
                    style={styles.icon}
                />
            </TouchableOpacity>
            <Text style={styles.text}>Categories</Text>
            <View style={styles.iconContainer}>
                <FontAwesome5 name={"search"} size={19} color={"white"} style={styles.icon}/>
                <FontAwesome5 name={"ellipsis-v"} size={19} color={"white"} style={styles.icon} />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        marginRight: 15, // Menambahkan jarak antara kontainer dan teks
    },
    text: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 18,
        marginLeft: 10, // Menambahkan jarak antara teks dan ikon
    },
    iconContainer: {
        flexDirection: 'row', // Menjadikan ikon berada dalam satu baris
        alignItems: 'center',
    },
    icon: {
        marginLeft: 20, // Jarak antara ikon hati dan pesawat
    },
});

export default Headers;