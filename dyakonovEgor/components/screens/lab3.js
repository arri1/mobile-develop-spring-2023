import React, { useState, useMemo } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const calc = (a, b) => {
  for (let i = 0; i < 10000000; i++) {}
  return a + b;
};

const Lab3 = () => {
  const [numberOne, setNumberOne] = useState(0);
  const [numberTwo, setNumberTwo] = useState(0);

  const resultWithoutMemo = calc(numberOne, numberTwo);

  const resultWithMemo = useMemo(
    () => calc(numberOne, numberTwo),
    [numberOne, numberTwo]
  );

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Number one: {numberOne}</Text>
      <Text style={styles.label}>Number two: {numberTwo}</Text>
      <Text style={styles.result}>
        Result without useMemo: {resultWithoutMemo}
      </Text>
      <Text style={styles.result}>Result with useMemo: {resultWithMemo}</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Increment number one"
          onPress={() => setNumberOne(numberOne + 1)}
        />
        <Button
          title="Increment number two"
          onPress={() => setNumberTwo(numberTwo + 1)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  label: {
    fontSize: 20,
    marginVertical: 10,
  },
  result: {
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    marginVertical: 20,
  },
});

export default Lab3;
