import { View } from "react-native";
import moment from "moment";
import React, { useState } from "react";
import { Banners, CalendarWeeks } from "./components";
import { StatusBar } from "expo-status-bar";
import { ListBook } from "../../utils/ConstData";
import { Bookshelf } from "../books/components";
import { ColorPallete } from "../../utils/Colors";

export function Home() {
  const today = moment();
  const [chooseDate, setChooseDate] = useState(today);
  const dateChoosen = moment(chooseDate).format("YYYY-MM-DD");
  const findBookByCreatedAt = ListBook.filter(
    (item) => moment(item.created_at).format("YYYY-MM-DD") === dateChoosen
  );
  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden={false} />
      <View style={{ flexGrow: 1 }}>
        <Banners />
        <View style={{ flex: 3, backgroundColor: ColorPallete.light }}>
          <CalendarWeeks
            chooseDate={chooseDate}
            setChooseDate={setChooseDate}
          />
          <View style={{ flex:1, padding:15 }}>
            <Bookshelf data={findBookByCreatedAt} />
          </View>
        </View>
      </View>
    </View>
  );
}
