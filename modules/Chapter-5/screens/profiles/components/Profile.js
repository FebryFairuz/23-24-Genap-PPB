import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ButtonPrimary } from '../../../components/Buttons/ButtonUi';

const Profile = ({route, navigation}) => {
    return (
        
        <SafeAreaView>
            <StatusBar hidden={false} />
            <View style={styles.body}>
                <Image source={require('../../../../../assets/icons/icon-girl-1.png')} style={styles.imageRad} />
                <Text style={styles.username}>{route.params.user.username}</Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Account Settings</Text>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MyProfile')}>
                    <Text style={styles.buttonText}>My Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('UpdateEmailScreen')}>
                    <Text style={styles.buttonText}>Update Email</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('UpdatePasswordScreen')}>
                    <Text style={styles.buttonText}>Update Password</Text>
                </TouchableOpacity>
                <View>
                <Text style={styles.sectionTitle}>About</Text>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AboutApk')}>
                    <Text style={styles.buttonText}>About Apps</Text>
                </TouchableOpacity>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Call Center</Text>
                    <Text style={styles.aboutValue}>02154762475</Text>
                </View>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Update Versions</Text>
                    <Text style={styles.aboutValues}>v.0.2</Text>
                </View>
                </View>
            </View>
            <View style={{ marginVertical: 20, margin: 20}}>
            <ButtonPrimary onPress={() => navigation.navigate('LogOut')}>
              <Text style={styles.buttonTexts}>Log Out</Text>
            </ButtonPrimary>
          </View>
        </SafeAreaView>
        
    );
};

const Print = ({ Data }) => {
    return <Profile user={Data} />;
};

const styles = StyleSheet.create({
    imageRad: {
        width: 100,
        height: 100,
        borderRadius: 75,
        margin: 20,
        borderColor: "#eaa831",
        borderWidth: 2,
    },
    body: {
        flexDirection: "row",
        backgroundColor: "#0b1f3f",
        alignItems: "center",
    },
    username: {
        color: "white",
        margin: 20,
        fontWeight: "bold",
        fontSize: 24,
        textAlign: "justify",
    },
    section: {
        margin: 20,
    },
    sectionTitle: {
        color: "#A9A9A9",
        marginBottom: 10,
        marginTop: 10
    },
    button: {
        borderBottomWidth: 1,
        borderBottomColor: "#000",
        paddingVertical: 10,
        marginBottom: 5
    },
    buttonText: {
        color: "#000",
        textAlign: "left",
      },
    buttonTexts: {
        fontSize: 20,
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
    },
    aboutValue:{
        flex:1,
        textAlign: "right",
        marginTop: -20,
        color: "#A9A9A9",
    },
    aboutValues:{
        flex:1,
        textAlign: "right",
        marginTop: -20,
        color: "#A9A9A9",
    }
});

export { Profile, Print};