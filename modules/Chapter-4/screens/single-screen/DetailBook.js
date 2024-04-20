import { Text, SafeAreaView, View } from "react-native";
import React, { useRef } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function DetailBook() {
  const bottomSheetRef = useRef(null);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{ flex:1 }}>
        <Text>DetailBook</Text>
        <BottomSheet
          ref={bottomSheetRef}
          snapPoints={["20%", "100%"]}
          backgroundStyle={{ backgroundColor: "white" }}
          handleIndicatorStyle={{ backgroundColor: "grey" }}
        >
          <View style={{ alignItems: "center" }}>
            <Text>Sample of bottom sheet</Text>
          </View>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
}
