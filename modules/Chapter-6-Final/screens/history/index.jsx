import { View, StyleSheet, SafeAreaView } from "react-native";
import React, { useMemo, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { ColorPallete } from "../../utils/Colors";
import { HeaderNavBar } from "./components";
import { ListBook } from "../../utils/ConstData";
import { Bookshelf } from "../books/components";

export function History() {
  const listData = ListBook;
  const [search, setSearch] = useState("");
  const ResultData = useMemo(() => {
    let computedData = listData;

    computedData.sort((a, b) => (a.created_at > b.created_at ? 1 : -1));

    if (search) {
      computedData = computedData.filter((listData) => {
        return Object.keys(listData).some((key) =>
          listData[key].toString().toLowerCase().includes(search)
        );
      });
    }

    return computedData;
  }, [listData, search]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        style="dark"
        backgroundColor="rgba(0, 0, 0, 0.2)"
        translucent={true}
      />
      <HeaderNavBar setSearch={setSearch} />
      <View style={{ flex: 1, paddingHorizontal: 15, paddingTop: 10 }}>
        <Bookshelf data={ResultData} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: ColorPallete.light },
  title: { fontSize: 22, fontWeight: "bold", color: ColorPallete.purple },
});
