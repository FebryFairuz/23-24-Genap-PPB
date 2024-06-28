import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import Copyright from "../../components/footers/Copyright";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import { CardProfiles } from "./components";
import { CardCalculate, CardNavigation } from "./components/CardProfiles";
import { ColorPallete } from "../../utils/Colors";

export function Profile() {
  const [myprofile, setMyProfile] = useState();
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("my_profile");
      if (value !== null) {
        let acc = JSON.parse(value);
        setMyProfile(acc);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, [myprofile]);
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        style="dark"
        backgroundColor={ColorPallete.white}
        translucent={true}
      />
      <View style={styles.container}>
        {myprofile ? (
          <ScrollView style={styles.container_scroll}>
            <View style={{ backgroundColor: ColorPallete.white, paddingTop:"15%" }}>
              <View style={styles.card_content}>
                <CardProfiles profile={myprofile} />
              </View>
              <View style={styles.card_content}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <CardCalculate label={"Followers"} value={9256} />
                  <CardCalculate label={"Read"} value={320} />
                  <CardCalculate label={"Favorite"} value={10} />
                </View>
              </View>
            </View>

            <View style={styles.flatlistContainer}>
                <CardNavigation icon={"create-outline"} label={"Update Profile"} />
                <CardNavigation icon={"heart-outline"} label={"My Favorite"} />
                <CardNavigation icon={"settings-outline"} label={"Privacy Control"} />
                <CardNavigation icon={"cube-outline"} label={"Kids Chanel"} />
                <CardNavigation icon={"scan-circle-outline"} label={"Scan Qr Code"} />
                <CardNavigation icon={"help-buoy-outline"} label={"Help"} />
                <CardNavigation icon={"log-out-outline"} label={"Sign Out"} />
                <Copyright />
            </View>
          </ScrollView>
        ) : (
          ""
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: ColorPallete.light,
  },
  card_content: {
    marginBottom: 15,
  },
  container_scroll: { flex: 1, width: "100%" },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: StatusBar.currentHeight,
  },
  flatlistContainer: {
    flex: 1,
    paddingTop: 10,
  },
});
