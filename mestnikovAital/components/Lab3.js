import { useState, useMemo, useCallback } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
const bg_colors = ["#dbdbdb", "#151719"];
function createUser(name, surname) {
  const user = { name, surname };
  return user;
}
const Lab3 = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [count, setCount] = useState(0);
  const [backgroundColorIndex, setBackgroundColorIndex] = useState(0);
  const user = useMemo(() => {
    createUser(name, surname);
  }, [name, surname]);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setCount(count + 1);
          user;
          setBackgroundColorIndex(
            (backgroundColorIndex + 1) % bg_colors.length
          );
        }}
      >
        <Text style={styles.text}>Нажали {count} раз</Text>
      </TouchableOpacity>
      <View
        style={{
          backgroundColor: bg_colors[backgroundColorIndex],
          borderBottomColor: "#000000",
          borderBottomWidth: 1,
          alignItems: "center",
          justifyContent: "center",
          height: 50,
          width: 300,
        }}
      >
        <TextInput
          editable
          maxLength={40}
          onChangeText={(text) => setName(text)}
          value={name}
          style={{ padding: 10, color: "red" }}
        ></TextInput>
      </View>
      <View
        style={{
          backgroundColor: bg_colors[backgroundColorIndex],
          borderBottomColor: "#000000",
          borderBottomWidth: 1,
          height: 50,
          width: 300,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TextInput
          editable
          maxLength={40}
          onChangeText={(text) => setSurname(text)}
          value={surname}
          style={{ padding: 10, color: "red" }}
        ></TextInput>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Имя:{name}</Text>
        <Text style={styles.text}>Имя:{surname}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
  },
});
export default Lab3;
