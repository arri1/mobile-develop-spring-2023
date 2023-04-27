import Ionicons from "react-native-vector-icons/Ionicons";

import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { useSelector } from "react-redux";
import { DARK_MODE } from "../Lab5/DarkModeConstStates";

const Todo = ({ todo, TouchTodo }) => {
  const TouchEvent = () => {
    TouchTodo(todo);
  };

  const darkModeState = useSelector((state) => state.darkMode.value);
  return (
    <View
      style={darkModeState == DARK_MODE ? styles.todoDarkMode : styles.todo}
    >
      <TouchableHighlight
        style={styles.touchable}
        underlayColor="#f5f5f5"
        onPress={TouchEvent}
      >
        <Text
          style={darkModeState == DARK_MODE ? styles.textDarkMode : styles.text}
        >
          {todo.text}
        </Text>
      </TouchableHighlight>
      <Ionicons
        name="square-outline"
        size={40}
        style={styles.checkbox}
        color={darkModeState==DARK_MODE?"white":"black"}
      />
    </View>
  );
};

export default Todo;

const styles = StyleSheet.create({
  todo: {
    flexDirection: "row",
    width: "90%",
    height: 80,
    marginTop: 10,
    paddingTop: 10,
    borderBottomWidth: 1,
    marginLeft: 40,
    color: "black",
    borderBottomColor: "#777777",
  },
  todoDarkMode: {
    flexDirection: "row",
    width: "90%",
    height: 80,
    marginTop: 10,
    paddingTop: 10,
    borderBottomWidth: 1,
    marginLeft: 40,
    color: "white",
    borderBottomColor: "white",
  },
  touchable: {
    width: "100%",
    height: "100%",
  },
  checkbox: {
    marginLeft: -60,
  },
  text: {
    fontSize: 25,
  },
  textDarkMode: {
    fontSize: 25,
    color: "white",
  },
});
