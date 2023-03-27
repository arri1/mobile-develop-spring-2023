import React, { useState, useMemo, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const ThirdTask = () => {
  const [check, setcheck] = useState(1);
  const [number, setnumber] = useState(3);
  const factorial = useMemo(() => factorialOf(number), [check]);
  return (
    <View>
      <Text style={styles.number}>{number}</Text>
      <Text style={styles.number}>{factorial}</Text>
      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={styles.commonButton}
          onPress={() => {
            setcheck(check + 1);
          }}
        >
          <Text style={styles.commonText}>Получить факториал</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.commonButton}
          onPress={() => {
            if (number != 100) {
                setnumber(number + 1);
            }
          }}
        >
          <Text style={styles.commonText}>+1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.commonButton}
          onPress={() => {
            setnumber(0);
          }}
        >
          <Text style={styles.commonText}>Очистить</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.commonButton}
          onPress={() => {
            if (number != 0) {
                setnumber(number - 1);
            }
          }}
        >
          <Text style={styles.commonText}>-1</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  buttonGroup: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },

  number: {
    fontSize: 50,
    textAlign: "center",
    width: "100%",
    padding: 10,
    marginBottom: 5,
  },

  text: {
    fontSize: 25,
    textAlign: "center",
    width: "100%",
    padding: 10,
    marginBottom: 10,
  },

  commonButton: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 2,
    borderRadius: 4,
    backgroundColor: "black",
    width: 150,
    height: 50,
  },
  commonText: {
    fontSize: 15,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
function factorialOf(n) {
  return n <= 0 ? 1 : n * factorialOf(n - 1);
}
export default ThirdTask;
