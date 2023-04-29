import React, { useState, useMemo } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { counterSlice } from "../store";


const lab4 = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);
  
  const dispatch = useDispatch();

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
    dispatch(counterSlice.actions.increment());
  };

  const incrementTwo = () => {
    setCounterTwo(counterTwo - 1);
    dispatch(counterSlice.actions.decrement());
  };

  const reset = () => {
    setCounterOne(0);
    setCounterTwo(0);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 200000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <View style={styles.container}>
      <Text style={styles.taskText}>{counterOne}</Text>

      <TouchableOpacity style={styles.button} onPress={incrementOne}>
        <Text style={styles.buttonText}>Plus</Text>
      </TouchableOpacity>
      <Text style={styles.taskText}>{counterTwo}</Text>
      <TouchableOpacity style={styles.button} onPress={incrementTwo}>
        <Text style={styles.buttonText}>Minus</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={reset}>
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    fontSize: 18,
    borderRadius: 5,
    width: "80%",
    marginBottom: 5,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
    borderRadius: 1,
    backgroundColor: "#87cefa",
    width: 100,
    height: 80,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  list: {
    width: "100%",
    marginTop: 1,
  },
  task: {
    backgroundColor: "#87cefa",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  taskText: {
    color: "black",
    padding: 10,
    fontSize: 50,
    fontWeight: "bold",
  },
});

export default lab4;