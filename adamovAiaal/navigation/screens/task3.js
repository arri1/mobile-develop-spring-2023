import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useState, useMemo } from "react";

const Task3 = (navigation) => {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [count, setCount] = useState(-1);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const calc = (x, y) => {
    x = parseInt(x);
    y = parseInt(y);
    increment();
    return x + y;
  };

  const result = useMemo(() => calc(number1, number2), [number1, number2]);
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#DBDBDB",
        justifyContent: "center",
        flex: 1,
      }}
    >
      <View style={{ alignItems: "center" }}>
        <Text>{count}</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 32, fontWeight: "800", color: "#694D4B" }}>
          {result}
        </Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TextInput
          style={styles.inputs}
          onChangeText={setNum1}
          value={num1}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.inputs}
          onChangeText={setNum2}
          value={num2}
          keyboardType="numeric"
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          onPress={() => {
            setNumber1(num1);
            setNumber2(num2);
          }}
          style={styles.button}
        />
      </View>
    </SafeAreaView>
  );
};
export default Task3;

const styles = StyleSheet.create({
  inputs: {
    height: 40,
    margin: 12,
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
    minWidth: 170,
    color: "#694D4B",
    borderColor: "#694D4B",
    backgroundColor: "#E1B1AD",
  },
  button: {
    borderRadius: 10,
    minWidth: "40%",
    minHeight: 45,
    backgroundColor: "#694D4B",
    borderWidth: 3,
    borderColor: "#E1B1AD",
  },
});
