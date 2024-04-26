import React, { useRef, useState } from "react";
import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ListBook } from "../../utils/ConstData";
import FlatListRecommended from "../homes/components/FlatListRecommended";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar, faPlayCircle, faHeart } from '@fortawesome/free-solid-svg-icons';

export default function DetailBook({ route, navigation }) {
  const { bookId } = route.params;
  const selectedBook = ListBook.find(book => book.id === bookId);

  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const bottomSheetRef = useRef(null);

  const openBottomSheet = () => {
    bottomSheetRef.current.expand();
    setIsBottomSheetOpen(true);
  };

  const closeBottomSheet = () => {
    bottomSheetRef.current.collapse();
    setIsBottomSheetOpen(false);
  };

  const handleBottomSheetPress = () => {
    if (isBottomSheetOpen) {
      closeBottomSheet();
    } else {
      openBottomSheet();
    }
  };

  return (
    <GestureHandlerRootView>
      <View style={{ flex: 1 }}>
        <View style={{ position: 'relative', alignItems: 'center', justifyContent: 'center' }}>
          <Image source={selectedBook.img} style={{ width: '100%', height: 400 }} />
          <TouchableOpacity
            style={{ position: 'absolute', bottom: 10, right: 10 }}
            onPress={handleBottomSheetPress}
          >
            <FontAwesomeIcon icon={faPlayCircle} size={50} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ position: 'absolute', bottom: 10, right: 70 }}
            onPress={() => {/* */ }}
          >
            <FontAwesomeIcon icon={faHeart} size={50} color="red" />
          </TouchableOpacity>
        </View>
        <View style={{ backgroundColor: "#3B3F24", height: 500 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20 }}>
            <FontAwesomeIcon icon={faStar} size={20} color="yellow" style={{ marginRight: 5 }} />
            <Text style={{ fontSize: 24, color: 'white' }}>Recommendations Book</Text>
          </View>
          <FlatListRecommended Data={ListBook} navigation={navigation} />
        </View>
        <BottomSheet
          ref={bottomSheetRef}
          snapPoints={["10%", "80%"]}
          backgroundStyle={{ backgroundColor: "#777F4B" }}
          handleIndicatorStyle={{ backgroundColor: "grey" }}
        >
          <View style={{ alignItems: "center" }}>
            <Text style={{ paddingHorizontal: 20, marginTop: 10, textAlign: 'justify', color: '#ffffff' }}>
              {selectedBook.story}
            </Text>
          </View>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
}
