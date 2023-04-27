import React, { useState, useMemo } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

const Lab3 = () => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const number = 0;
  const counter = () => {
    for (let i = 0; i <= 10000000; i++) {}
    return 1;
  };

  const memoFunc = useMemo(() => counter(number), [number]);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>Без useMemo</Text>
        <View>
          <Text style={styles.text}>{value1}</Text>
          <TouchableOpacity style={styles.button} onPress={() => setValue1(0)}>
            Очистить
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setValue1(value1 + counter())}
          >
            Нажать
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <Text style={styles.text}>С useMemo</Text>
        <View>
          <Text style={styles.text}>{value2}</Text>
          <TouchableOpacity style={styles.button} onPress={() => setValue2(0)}>
            Очистить
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setValue2(value2 + memoFunc)}
          >
            Нажать
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C3B7B7",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#000000",
    fontSize: 20,
    marginBottom: 20,
    alignSelf: "center",
  },
  button: {
    marginTop: 10,
    marginBottom: 20,
    padding: 10,
    backgroundColor: "yellow",
    borderRadius: 10,
    alignItems: "center",
  },
});
export default Lab3;
