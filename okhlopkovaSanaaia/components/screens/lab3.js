import { StyleSheet, SafeAreaView, View, Text, Button } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useState } from "react";

const Lab3 = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [datePickerVisible, setDatePickerVisible] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleConfirm = (date) => {
    setSelectedDate(date);
    setOver(false);
    hideDatePicker();
  };

  return (
    <SafeAreaView style={styles.main}>
      <Text style={styles.text}>{selectedDate.toLocaleString()}</Text>
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
    marginBottom: 20,
  },
  picker: {
    marginHorizontal: 15,
  },
});

export default Lab3;
