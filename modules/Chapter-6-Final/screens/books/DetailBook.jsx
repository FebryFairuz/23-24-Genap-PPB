import {
  View,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  Platform,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useLayoutEffect, useMemo, useRef, useState } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { CoverBooks, HeaderNavBar } from "./components";
import { ColorPallete } from "../../utils/Colors";
import { BotoomSheetRead } from "./components/BotoomSheetRead";

export function DetailBook() {
  const route = useRoute();
  const navigation = useNavigation();
  const { book } = route.params;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: book.title,
    });
  }, [navigation, book.title]);

  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ["25%", "40%", "95%"], []);

  const [sheetIndex, setSheetIndex] = useState(0);
  const handleSheetChange = (index) => {
    if (index === -1) {
      bottomSheetRef.current.snapToIndex(0);
    } else {
      setSheetIndex(index);
    }
  };

  return (
    <ImageBackground source={book.img} style={styles.container}>
      <GestureHandlerRootView>
        <SafeAreaView style={styles.overlay}>
          <StatusBar
            style="light"
            backgroundColor="rgba(0, 0, 0, 0.2)"
            translucent={true}
          />
          <View style={{ flex:1, }}>
            <View style={styles.header_nav}>
              <HeaderNavBar />
            </View>

            <CoverBooks book={book} />
          </View>

          <BottomSheet
            ref={bottomSheetRef}
            index={0}
            enablePanDownToClose
            onChange={handleSheetChange}
            snapPoints={snapPoints}
            backdropComponent={(props) => (
              <BottomSheetBackdrop
                {...props}
                visible={sheetIndex !== 0}
              />
            )}
            backgroundComponent={({ style }) => (
              <View style={[style, styles.bottomSheetRadius]} />
            )}
          >
            <BotoomSheetRead book={book} />
          </BottomSheet>
        </SafeAreaView>
      </GestureHandlerRootView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
    header_nav:{
        marginTop: Platform.OS === "android" ? "10%" : 0,
    },
  container: {
    flex: 1,
    resizeMode: "cover",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    flex: 1,
  },
  bottomSheetRadius: {
    backgroundColor: ColorPallete.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});
