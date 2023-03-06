import {
  Alert,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";

const Todo = ({ todo, TouchTodo }) => {
  const TouchEvent = () => {
    TouchTodo(todo);
  };

  return (
    <TouchableHighlight
      underlayColor="#f5f5f5"
      onPress={TouchEvent}
      style={styles.todo}
    >
      <Text style={{ color: "#575757", fontSize: 25 }}>{todo.text}</Text>
    </TouchableHighlight>
  );
};

export default Todo;

const styles = StyleSheet.create({
  todo: {
    backgroundColor: "white",
    width: "90%",
    height: 80,
    marginTop: 10,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    borderWidth: 1,
  },
});
