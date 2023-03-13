import Ionicons from "react-native-vector-icons/Ionicons";

import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

const Todo = ({ todo, TouchTodo }) => {
  const TouchEvent = () => {
    TouchTodo(todo);
  };

  return (
    <View style={styles.todo}>
      <TouchableHighlight
        style={styles.touchable}
        underlayColor="#f5f5f5"
        onPress={TouchEvent}
      >
        <Text style={{ fontSize: 25 }}>{todo.text}</Text>
      </TouchableHighlight>
      <Ionicons name="square-outline" size={40} style={styles.checkbox} />
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
  touchable: {
    width: "100%",
    height: "100%",
  },
  checkbox: {
    marginLeft: -60,
  },
});
