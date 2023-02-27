import { StyleSheet, Text, TouchableOpacity } from "react-native";

const SortButton = ({ todos, setTodos }) => {
  const compareSortByPriority = (a, b) => {
    return b.priority - a.priority;
  };

  const sortTodoByPriority = () => {
    setTodos([...todos].sort(compareSortByPriority));
  };

  return (
    <TouchableOpacity style={styles.addButton} onPress={sortTodoByPriority}>
      <Text style={{ fontSize: 20, color: "white" }}>Сорировать</Text>
    </TouchableOpacity>
  );
};

export default SortButton;

const styles = StyleSheet.create({
  addButton: {
    backgroundColor: "#ffd666",
    width: "90%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: 10,
  },
});
