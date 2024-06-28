import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  Platform,
} from "react-native";
import React, { useEffect, useMemo, useRef, useState } from "react";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";
import BottomSheet from "@gorhom/bottom-sheet";
import { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { ColorPallete } from "../../utils/Colors";
import { HeaderNavBar } from "./components";
import { ListBook } from "../../utils/ConstData";
import { Bookshelf } from "../books/components";

export function Explorers() {
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ["35%", "40%", "95%"], []);
  const [sheetIndex, setSheetIndex] = useState(0);
  const handleSheetChange = (index) => {
    if (index === -1) {
      bottomSheetRef.current.snapToIndex(0);
    } else {
      setSheetIndex(index);
    }
  };

  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);

      let address = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
      setAddress(address[0]);
    })();
  }, []);

  if (errorMsg) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{errorMsg}</Text>
      </View>
    );
  }
  if (!location) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        style="dark"
        backgroundColor="rgba(0, 0, 0, 0.2)"
        translucent={true}
      />
      <GestureHandlerRootView>
        <View style={styles.container}>
          <HeaderNavBar />
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Marker
              coordinate={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
              }}
              title="You are here"
            />
          </MapView>

          <BottomSheet
            ref={bottomSheetRef}
            index={0}
            enablePanDownToClose
            onChange={handleSheetChange}
            snapPoints={snapPoints}
            backdropComponent={(props) => (
              <BottomSheetBackdrop {...props} visible={sheetIndex !== 0} />
            )}
            backgroundComponent={({ style }) => (
              <View style={[style, styles.bottomSheetRadius]} />
            )}
          >
            {address ? (
              <LocationCard address={address} />
            ) : (
              <View>
                <Text>Lokasi - </Text>
              </View>
            )}
          </BottomSheet>
        </View>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}

const LocationCard = ({ address }) => {
  return (
    <View style={{ paddingHorizontal: 20, flex: 1 }}>
      <View style={{ flexDirection:"row", alignItems:"center", marginBottom:15 }}>
        <View>
          <Ionicons name={"locate-outline"} color={ColorPallete.red} size={34} />
        </View>
        <View style={{ marginLeft:10 }}>
          <Text style={{ fontWeight:"bold" }}>{address.city}</Text>
          <Text>{address.region}, {address.country}</Text>
        </View>
      </View>
      <Bookshelf data={ListBook} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorPallete.light,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  errorText: {
    color: "red",
    fontSize: 18,
    textAlign: "center",
  },
  bottomSheetRadius: {
    backgroundColor: ColorPallete.light,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});
