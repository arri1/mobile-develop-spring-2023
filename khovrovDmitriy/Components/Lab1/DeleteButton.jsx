import { StyleSheet, Text, TouchableOpacity } from "react-native";

const DeleteButton = ({ setTodos }) => {
  return (
    <TouchableOpacity
      style={styles.deleteButton}
      onPress={() => {
        setTodos([]);
      }}
    >
      <Text style={{ fontSize: 15, color: "#FF6666" }}>Удалить все</Text>
    </TouchableOpacity>
  );
};

export default DeleteButton;

const styles = StyleSheet.create({
  deleteButton: {
    width: "90%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: 10,
  },
});
