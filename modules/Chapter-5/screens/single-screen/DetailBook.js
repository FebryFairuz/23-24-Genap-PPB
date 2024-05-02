import { Text, SafeAreaView, View, StyleSheet, Platform, Image, TouchableOpacity } from "react-native";
import React, { useRef } from "react";
import { Ionicons } from "@expo/vector-icons";
import BottomSheet from "@gorhom/bottom-sheet";
import { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ListBook } from "../../utils/ConstData";

export default function DetailBook() {
  var indexBuku = 4;
 
  const bottomSheetRef = React.useRef(null);
  const bottomSheetRef2 = React.useRef(null);
  const snapPoints = React.useMemo(() => ['10%', '15%'], []);
  const snapPoints2 = React.useMemo(() => ['1%','30%', '90%'], []);

  const openBottomSheet = () => {
    bottomSheetRef2.current?.expand();
  };

  const [sheetIndex, setSheetIndex] = React.useState(0);
  
  return (
    <GestureHandlerRootView style={styles.container}>
    <SafeAreaView style={styles.AndroidSafeArea}>
      <View style={styles.navbar}>
        <View style={styles.navbarSection}>
          <Ionicons name="arrow-back" size={25} color="#fff" onPress={() => {}} />
        </View>
        <View style={styles.navbarSection}>
          <Text style={styles.navbarText}>Book Detail</Text>
        </View>
        <View style={[styles.navbarSection, styles.rightSection]}>
          <Ionicons name="ellipsis-vertical" size={25} color="#fff" onPress={() => {}} />
        </View>
      </View>
      <View style={{ alignItems:'center', justifyContent:'center', marginTop:10, height: 350}}>
        <Image source={ListBook[indexBuku]['img']} resizeMode="contain" style={{transform: [{scale: 1.4}]}}/>
      </View>
      <View style={{ marginTop: 10 }}>
        <Text style={{ fontSize: 28, fontWeight: 'bold', textAlign: 'center' }}>
          {ListBook[indexBuku]['title']}
        </Text>
        <Text style={{ fontSize: 16, textAlign: 'center' }}>
          a Book by {ListBook[indexBuku]['author']}
        </Text>
        <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'center' }}>
          {ListBook[indexBuku]['genre'].map((genre, index) => (
            <View key={index} style={{ paddingHorizontal: 10, paddingVertical: 5, borderRadius: 64, backgroundColor: "#0b203f", marginHorizontal: 2 }}>
              <Text style={{ color: 'white' }}>
                {genre}
              </Text>
            </View>
          ))}
        </View>
        <View style={{ flexDirection: 'row', marginTop: 30, justifyContent: 'center' }}>
          <Ionicons name="ellipsis-horizontal" size={20} color="#0b203f" />
        </View>
        <View style={{ marginTop: 12, justifyContent: 'center', paddingHorizontal: 28 }}>
          <Text style={{ textAlign: 'justify' }}>
            {ListBook[indexBuku]['sinopsis']}
          </Text>
        </View>
      </View>

      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        backgroundComponent={({ style }) => (
          <View style={[style, { backgroundColor: '#eaa830', borderTopLeftRadius: 30, borderTopRightRadius: 30 }]} />
        )}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#eaa830', paddingHorizontal: 30 , justifyContent: "space-evenly"}}>
          <TouchableOpacity onPress={() => openBottomSheet()} style={{ flexDirection: 'row', backgroundColor: '#0b203f', paddingHorizontal: 30, paddingVertical: 10, borderRadius: 30 }}>
            <Ionicons name="book" size={20} color="white" />
            <Text style={{ color: "white", marginLeft: 10 }}>
              Read
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={{ flexDirection: 'row', backgroundColor: '#0b203f', paddingHorizontal: 30, paddingVertical: 10, borderRadius: 30 }}>
            <Ionicons name="heart" size={20} color="white" />
            <Text style={{ color: "white", marginLeft: 10 }}>
              Add to Favorite
            </Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>

      <BottomSheet
        ref={bottomSheetRef2}
        index={0}
        enablePanDownToClose
        onChange={setSheetIndex}
        snapPoints={snapPoints2}
        backdropComponent={props => (
          <BottomSheetBackdrop {...props} visible={sheetIndex !== 0} style={{ backgroundColor: 'rgba(0,0,0,0.5)' }} />
        )}
        backgroundComponent={({ style }) => (
          <View style={[style, { backgroundColor: '#eaa830', borderTopLeftRadius: 30, borderTopRightRadius: 30 }]} />
        )}
      >
        <View style={{ flexDirection: 'column', alignItems: 'center', backgroundColor: '#eaa830', paddingHorizontal: 30 , justifyContent: "space-evenly"}}>
        <Text style={{ fontSize: 18 }}>
          Story of the Book <Text style={{fontWeight: 'bold'}}>{ListBook[indexBuku]['title']}</Text>
        </Text>
        <Text style={{ marginTop:10, textAlign:'justify' }}>
          {ListBook[indexBuku]['story']}
        </Text>
        </View>
      </BottomSheet>

    </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  navbar: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#eaa830',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  navbarSection: {
    flex: 1,
  },
  navbarText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
  },
  rightSection: {
    alignItems: 'flex-end',
  },
});