import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { Component, useEffect, useState } from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FlatListRecently from "./components/FlatListRecently";
import FlatListRecommended from "./components/FlatListRecommended";
import FlatListPopular from "./components/FlatListPopular";
import { ListBook } from "../../utils/ConstData";
import AsyncStorage  from "@react-native-async-storage/async-storage";

export default function Home() {
  const [myprofile, setMyProfile] = useState();
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('my_profile');
      if (value !== null) {
        let acc = JSON.parse(value);
        console.log("profile:",acc);
        setMyProfile(acc);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(()=>{
    getData();
  },[myprofile])


  return (
    <ScrollView>
        <StatusBar hidden={false} barStyle={"light-content"} />
        <SafeAreaView style={styles.container}>
          <StatusBar hidden={true} />
          <View style={styles.header}>
            <View style={styles.title}>
              <Text style={styles.Text}>{myprofile ? "Hi,"+myprofile.username : "Bedtime Stories"}</Text>
              <FontAwesome5 name={"bell"} size={25} color="orange" />
            </View>
            <TouchableOpacity style={styles.promote}></TouchableOpacity>
          </View>
          <View style={styles.body}>
            <View>
              <Text style={{ fontSize: 24, marginLeft: 20 }}>Recently</Text>
              <View>
                <FlatListRecently Data={ListBook} />
              </View>
            </View>
            <View>
              <Text style={{ fontSize: 24, marginLeft: 20 }}>Popular</Text>
              <View>
                <FlatListRecommended Data={ListBook} />
              </View>
            </View>
            <View>
              <Text style={{ fontSize: 24, marginLeft: 20 }}>New Story</Text>
              <View>
                <FlatListPopular Data={ListBook} />
              </View>
            </View>
          </View>
          <View style={[styles.footer]}></View>
        </SafeAreaView>
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b1f3f",
  },
  Text: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
  },

  header: {
    flex: 4,
    margin: 20,
  },
  title: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  promote: {
    height: 120,
    backgroundColor: "orange",
    marginTop: 25,
    borderRadius: 25,
  },
  body: {
    backgroundColor: "white",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingTop: 20,
  },
});
