import React from 'react';
import { View, Text, SafeAreaView, Image, StatusBar, StyleSheet } from 'react-native';
// import { UserList } from '../../../../utils/ConstData';
// import ConstData from '../../../../utils/ConstData';

const MyProfile = ({route}) => {
  // const user = UserList[0];

  // const {email, username, password } = user;

  return (
    <SafeAreaView >
      <StatusBar hidden={false} />
          <View style={styles.body}>
            <Image source={require('../../../../../../assets/icons/icon-girl-1.png')} style={styles.imageRad} />
          </View>
          <View >
            <Text style= {styles.section}>Username</Text>
            <Text style={styles.aboutValue}>{route.params.user.username}</Text>
            <Text style= {styles.section}>Email</Text>
            <Text style={styles.aboutValue}>{route.params.user.email}</Text>
            <Text style= {styles.section}>Password</Text>
            <Text style={styles.aboutValue}>{route.params.user.password}</Text>
          </View>
          {/* <View style={styles.section}>
            <Text style={styles.sectionTitle}>Account Settings</Text>
              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MyProfile')}>
                <Text style={styles.buttonText}>My Profile</Text>
              </TouchableOpacity>
          </View> */}
    </SafeAreaView>
  );
};

const Prints = ({ Data }) => {
  return <MyProfile user={Data} />;
};
const styles = StyleSheet.create({
  imageRad: {
      width: 200,
      height: 200,
      borderRadius: 100,
      margin: 20,
      borderColor: "#eaa831",
      borderWidth: 2,
      alignItems: "center",
      flex: 1

  },
  section: {
      color:"#000",
      borderBottomWidth: 1,
      borderBottomColor: "#000",
      paddingVertical: 10,
      marginTop: 5,
      marginLeft: 20,
      marginRight: 20
  },
  body: {
      backgroundColor: "#0b1f3f",
      alignItems: "center"
  },
  aboutValue:{
    flex:1,
    textAlign: "right",
    marginRight:20,
    marginTop: -27,
    color: "#A9A9A9",
},
})

export default MyProfile;