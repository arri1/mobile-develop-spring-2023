import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { DARK_MODE } from "../Lab5/DarkModeConstStates";

const AddButton = ({ todos, setTodos, text, setText }) => {
  const darkModeState = useSelector((state) => state.darkMode.value);

  return (
    <TouchableOpacity
      style={
        darkModeState == DARK_MODE ? styles.addButtonDarkMode : styles.addButton
      }
      onPress={() => {
        if (text.length != 0)
          setTodos([...todos, { id: Date.now(), text: text, priority: 2 }]);
        setText("");
      }}
    >
      <Text style={{ fontSize: 20, color: "white" }}>Добавить</Text>
    </TouchableOpacity>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  addButton: {
    backgroundColor: "#838FFF",
    width: "90%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  addButtonDarkMode: {
    backgroundColor: "#959FFF",
    width: "90%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
});
