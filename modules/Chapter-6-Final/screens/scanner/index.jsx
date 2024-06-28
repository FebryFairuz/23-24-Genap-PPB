import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { ColorPallete } from "../../utils/Colors";
import { useNavigation } from "@react-navigation/native";
import { ListBook } from "../../utils/ConstData";

export default function ScannerQR() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [scannedData, setScannedData] = useState("");
  const navigation = useNavigation();

  const SelectedBook = ListBook.find((item) => item.id === 1);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setScannedData(data);
    //alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    navigation.navigate("DetailBook", { book: SelectedBook });
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      {scanned ? (
        <TouchableOpacity onPress={() => setScanned(false)} style={styles.btn}>
          <Ionicons
            name={"qr-code-outline"}
            color={ColorPallete.white}
            size={34}
          />
          <Text style={styles.btn_label}>Tap to Scan Again</Text>
        </TouchableOpacity>
      ) : (
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: ColorPallete.light,
  },
  btn: {
    flexDirection: "row",
    backgroundColor: ColorPallete.purple,
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 30,
    alignItems:"center",
    justifyContent:"center"
  },
  btn_label: {
    fontSize: 20,
    color: ColorPallete.white,
    fontWeight: "bold",
    marginLeft:10
  },
});
