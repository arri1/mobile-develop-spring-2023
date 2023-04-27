import React from "react";
import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { addition, subtraction } from "./store/action";

const Counter = () => {
  const data = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity onPress={() => dispatch(addition())}>
        <Text style={styles.listtext}>Добавить</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => dispatch(subtraction())}>
        <Text style={styles.listtext}>Отнять</Text>
      </TouchableOpacity>
      <Text style={styles.text}>{data}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    padding: 30,
    fontSize: 50,
    color: "red",
    textAlign: "center",
  },
  listtext: {
    padding: 20,
    fontSize: 18,
    textAlign: "center",
    borderRadius: 5,
    backgroundColor: "#fafafa",
    borderWidth: 1,
    marginTop: 20,
    width: "80%",
    marginLeft: "10%",
  },
});

export default Counter;
