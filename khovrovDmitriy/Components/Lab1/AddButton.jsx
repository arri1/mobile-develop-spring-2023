import { StyleSheet, Text, TouchableOpacity } from "react-native";

const AddButton = ({ todos, setTodos, text, setText }) => {
  return (
    <TouchableOpacity
      style={styles.addButton}
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
});
