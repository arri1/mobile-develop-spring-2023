import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Button,
  Switch,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useState } from "react";
import DateTimeWithMemo from "../custom/dateTimeWithMemo";
import DateTimeNoMemo from "../custom/dateTimeNoMemo";

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
        {isSelected ? (
          <DateTimeWithMemo selectedDate={selectedDate} />
        ) : (
          <DateTimeNoMemo selectedDate={selectedDate} />
        )}
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
      <Switch
        trackColor={{ true: "#1785e5" }}
        onValueChange={toggleSwitch}
        value={isSelected}
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
});

export default Lab3;
