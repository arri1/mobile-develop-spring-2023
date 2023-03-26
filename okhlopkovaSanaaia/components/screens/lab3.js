import { StyleSheet, SafeAreaView, View, Text, Button } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useState } from "react";
import DateTimeWithMemo from "../custom/dateTimeWithMemo";

const Lab3 = () => {
  const [selectedDate, setSelectedDate] = useState(
    new Date("2024-01-01T00:00:00")
  );
  const [datePickerVisible, setDatePickerVisible] = useState(false);

  const [isSelected, setSelected] = useState(true);

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleConfirm = (date) => {
    setSelectedDate(date);
    hideDatePicker();
  };

  const toggleSwitch = () => {
    setSelected(!isSelected);
  };

  return (
    <SafeAreaView style={styles.main}>
      <View>
        <DateTimeWithMemo selectedDate={selectedDate} />
      </View>
      <Text style={styles.text}>
        Left until {selectedDate.toLocaleString()}
      </Text>
      <View style={styles.text}>
        <Button title="Change the date" onPress={showDatePicker} />
      </View>
      <DateTimePickerModal
        date={selectedDate}
        isVisible={datePickerVisible}
        mode="datetime"
        display={Platform.OS === "ios" ? "inline" : "default"}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        minimumDate={new Date()}
        locale="ru-RU"
        pickerStyleIOS={styles.picker}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    marginBottom: 15,
  },
  picker: {
    marginHorizontal: 15,
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 30,
  },
  box: {
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 5,
    minWidth: "20%",
    backgroundColor: "white",
    alignSelf: "center",
    justifyContent: "space-evenly",
  },
  time: {
    textAlign: "center",
    fontSize: 16,
  },
});

export default Lab3;
