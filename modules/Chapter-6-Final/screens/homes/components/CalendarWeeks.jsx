import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import moment from "moment";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { ColorPallete } from "../../../utils/Colors";

export function CalendarWeeks({ chooseDate, setChooseDate }) {
  const [selectedDate, setSelectedDate] = useState(chooseDate);
  const cWeek = LoopWeekDay(selectedDate);
  const [myweek, setMyWeek] = useState(cWeek);

  const scrollViewRef = useRef(null);

  useEffect(() => {
    const selectedIndex = myweek.findIndex((v) =>
      moment(v.date).isSame(selectedDate, "day")
    );
    if (selectedIndex !== -1 && scrollViewRef.current) {
      const offsetX = selectedIndex * 50;
      scrollViewRef.current.scrollTo({ x: offsetX, animated: true });
    }
    setChooseDate(selectedDate);
  }, [selectedDate, myweek]);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const ChangeDateBySelected = (date) => {
    setSelectedDate(date);
    setChooseDate(date);
    const cWeek = LoopWeekDay(date);
    setMyWeek(cWeek);
  };

  const handleConfirm = (date) => {
    ChangeDateBySelected(date);
    hideDatePicker();
  };

  const handleChooseDay = (date) => {
    ChangeDateBySelected(date);
  };

  return (
    <View style={{ flexDirection: "row" }}>
      <ScrollView
        horizontal={true}
        style={styles.container}
        showsHorizontalScrollIndicator={false}
        ref={scrollViewRef}
      >
        {myweek.map((v, index) => (
          <View
            key={index}
            style={
              moment(selectedDate).format("YYYY-MM-DD") === v.date
                ? styles.dayContainerActive
                : styles.dayContainer
            }
          >
            <TouchableOpacity onPress={() => handleChooseDay(v.date)}>
              <Text style={styles.dayName}>{v.name.charAt(0)}</Text>
              <Text style={{ ...styles.dayDate, fontSize: 11 }}>
                {moment(v.date).format("DD")} {moment(v.date).format("MMM")}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <View style={styles.calendar_picker}>
        <TouchableOpacity onPress={showDatePicker}>
          <Ionicons name={"calendar"} color={ColorPallete.purple} size={34} />
        </TouchableOpacity>
      </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
}

const LoopWeekDay = (now) => {
  var weekdays = [];
  for (let i = 0; i <= 6; i++) {
    const day = moment(now).clone().weekday(i);
    weekdays.push({
      name: day.format("dd"),
      date: day.format("YYYY-MM-DD"),
    });
  }

  return weekdays;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: ColorPallete.white,
  },
  calendar_picker: {
    paddingHorizontal: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:ColorPallete.white
  },
  dayContainer: {
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  dayContainerActive: {
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: ColorPallete.light,
    color: ColorPallete.white,
  },
  dayName: {
    fontSize: 16,
    fontWeight: "bold",
    color: ColorPallete.purple,
    textAlign: "center",
  },
  dayDate: {
    fontSize: 14,
    color: ColorPallete.purple,
    textAlign: "center",
  },
});
