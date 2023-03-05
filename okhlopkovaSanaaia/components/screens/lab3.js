import { StyleSheet, SafeAreaView, View, Text, Button } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useState, useEffect, useMemo } from "react";

const Lab3 = () => {
  const [selectedDate, setSelectedDate] = useState(
    new Date("2024-01-01T00:00:00")
  );
  const [datePickerVisible, setDatePickerVisible] = useState(false);

  const parsedDate = useMemo(() => {
    return Date.parse(selectedDate);
  }, [selectedDate]);

  const [time, setTime] = useState(parsedDate - Date.now());
  const [over, setOver] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const difference = parsedDate - Date.now();
      if (difference > 0) {
        setTime(difference);
      } else {
        setOver(true);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [parsedDate]);

  const timeData = {
    Days: Math.floor(time / (1000 * 60 * 60 * 24)),
    Hours: Math.floor((time / (1000 * 60 * 60)) % 24),
    Minutes: Math.floor((time / 1000 / 60) % 60),
    Seconds: Math.floor((time / 1000) % 60),
  };

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
      <View style={styles.container}>
        {Object.entries(timeData).map(([label, value]) => (
          <View key={label} style={styles.box}>
            <Text style={styles.time}>{`${Math.floor(value)}`}</Text>
            <Text style={styles.time}>{label}</Text>
          </View>
        ))}
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
      <Text style={[styles.text, { color: "red" }]}>
        {over ? "Time's up!" : ""}
      </Text>
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
