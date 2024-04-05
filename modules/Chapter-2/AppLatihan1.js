import { Image, SafeAreaView, Text, View } from "react-native";

export default function AppLatihan1() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          borderWidth: "1 solid black",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text>Agnes</Text>
          <Text>222310060</Text>
        </View>
        <Image
          source={require("./assets/icons/icon-girl-1.png")}
          style={{ width: 75, height: 75 }}
        />
      </View>
    </SafeAreaView>
  );
}
