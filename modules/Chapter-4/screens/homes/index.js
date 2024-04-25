import { Image, ImageBackground, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import React, { Component } from "react";
// import TestButtons from "./TestButtons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { UserList, ListBook, ListCateg, History, Genres, MyFavorite } from "../../utils/ConstData";
import FlatListRecently from "./homeComponents/FlatListRecently";
import FlatListRecommended from "./homeComponents/FlatListRecommended";
import FlatListPopular from "./homeComponents/FlatListPopular";


export default class Homes extends Component {
  render() {
    return (
    <ScrollView >
      <SafeAreaView style={styles.container}>
          <StatusBar hidden={true} />
          <View style={styles.header}>
            <View style={styles.title}>
              <Text style={styles.Text}>Bedtime Stories</Text>
              <FontAwesome5 name={"bell"} size={25} color="orange" />
            </View>
            <View style={styles.promote}>
            </View>
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
          <View style={[styles.footer]}>
          </View>

        {/* <Text>Homes</Text>
        <TestButtons navigation={this.props.navigation} /> */}
      </SafeAreaView >        
      </ScrollView> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b1f3f',
  },
  Text: {
    fontSize: 24,
    color: "white",
    fontWeight: 'bold'
  },

  header: {
    flex: 4,
    margin: 20,
  },
  title: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  promote: {
    height:120,
    backgroundColor: 'orange',
    marginTop:25,
    borderRadius: 25,
  },
  body: {
    backgroundColor: 'white',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingTop:20,
  },
});