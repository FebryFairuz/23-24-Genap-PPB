import React from 'react';
import { View, Text, SafeAreaView, ImageBackground, StyleSheet} from 'react-native';
import { Profile } from '../Profile';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AboutApk = ({navigation, route}) => {
  return (
    <ImageBackground style={styles.images}  source={require('../../../../../../assets/_images/bg-splash-1.jpeg')}>
   <SafeAreaView style={styles.container}>
    <View style={{margin:20}}> 
        <Text style={{fontSize:22, color:"white", justifyContent:"center"}}>"Bedtime Stories" is an app with little audiobooks and moral fairy tales for children and babies. Calm stories help kids to reduce anxiety and sleep soundly. Listen to bed time story books every night to fall asleep. And baby lullabies for infants will help them to relax. Storytelling is a great nighttime ritual. Our professional storyteller will help all moshi families relax and fall asleep. Your calm kids will see good dreams. Nighty night! 🌙</Text>
 
        <Text style={{fontSize:22, color:"white", marginTop:15, justifyContent:"center"}}>With the help of child psychologists and sleep consultants, we have developed our unique method. You only turn on our audio fairy tales for your child before bed. The female speaker’s fascinating voice will read the story. Monotonous relaxing background lullaby music and easy-to-understand texts will do their work. We assure you that your child will go into a deep sleep! We love what we do, so we create exclusively unique and quality content.</Text>
    </View>
   </SafeAreaView>
   </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"stretch"
  },
  images :{
    flex: 1,
    justifyContent: "center",
  }
});

export default AboutApk;

