import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Platform, StatusBar, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import BottomSheet from '@gorhom/bottom-sheet';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import ConstData from "./modules/Chapter-4/screens/utils";

export default function App() {
  var indexBuku = 1;
 
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
    <Text>Test</Text>
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
