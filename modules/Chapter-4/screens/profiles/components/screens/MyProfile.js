import React from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';
import { StatusBar, StyleSheet, TouchableOpacity } from 'react-native-web';

const MyProfile = ({route}) => {
  return (
    <SafeAreaView >
      <StatusBar hidden={false} />
          <View style={styles.body}>
            <Image source={require('../../../../../../assets/icons/icon-girl-1.png')} style={styles.imageRad} />
          </View>
          <View style={styles.button}>
            <Text style= {styles.section}>Username</Text>
            <Text style={styles.aboutValue}>{route.params.user.username}</Text>
          </View>
          <View style={styles.button}>
            <Text style= {styles.section}>Email</Text>
            <Text style={styles.aboutValue}>{route.params.user.email}</Text>
          </View>
          <View style={styles.button}>
            <Text style= {styles.section}>Password</Text>
            <Text style={styles.aboutValue}>{route.params.user.password}</Text>
          </View>
    </SafeAreaView>
  );
};

const Prints = ({ Data }) => {
  return <MyProfile user={Data} />;
};
const styles = StyleSheet.create({
  imageRad: {
      width: 150,
      height: 150,
      borderRadius: 100,
      margin: 20,
      borderColor: "#eaa831",
      borderWidth: 2,
      marginLeft: 120
  },
  section: {
      color:"#000",
      borderBottomWidth: 1,
      borderBottomColor: "#000",
      paddingVertical: 10,
      marginTop: 5,
    
  },
  body: {
      flexDirection: "row",
      backgroundColor: "#0b1f3f",
      alignItems: "center",
  },
  aboutValue:{
      textAlign: "right",
      marginTop: -18,
      color: "#A9A9A9",
  },
  button: {
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    paddingVertical: 10,
    marginLeft:20,
    marginRight:20,
  },
})

export default MyProfile;
