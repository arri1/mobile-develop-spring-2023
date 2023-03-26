import { StyleSheet, View, Text } from "react-native";
import { useState, useEffect } from "react";

const DateTimeNoMemo = ({ selectedDate }) => {
  const parsedDate = () => {
    for (let i = 0; i < 1_500_000_000; i++) {}
    return Date.parse(selectedDate);
  };

  const [time, setTime] = useState(parsedDate() - Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      const difference = parsedDate() - Date.now();
      if (difference > 0) {
        setTime(difference);
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

  return (
    <View style={styles.container}>
      {Object.entries(timeData).map(([label, value]) => (
        <View key={label} style={styles.box}>
          <Text style={styles.time}>{value}</Text>
          <Text style={styles.time}>{label}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: "red",
    alignSelf: "center",
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

export default DateTimeNoMemo;
