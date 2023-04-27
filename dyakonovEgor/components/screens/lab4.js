import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addTask, removeTask } from "./actions";


const Lab4 = () => {
  const [task, setTask] = useState("");
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    dispatch(addTask({ id: Date.now(), title: task }));
    setTask("");
  };

  const handleRemoveTask = (id) => {
    dispatch(removeTask(id));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={task}
        onChangeText={setTask}
        placeholder="Enter task"
      />
      <Button style={styles.button} title="Add" onPress={handleAddTask} />
      {tasks.map((task) => (
        <View key={task.id} style={styles.task}>
          <Text style={styles.taskTitle}>{task.title}</Text>
          <TouchableOpacity
            style={styles.removeButton}
            onPress={() => handleRemoveTask(task.id)}
          >
            <Text style={{ color: "#fff" }}>Remove</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#4CAF50",
    color: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 4,
  },
  task: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  removeButton: {
    backgroundColor: "#f44336",
    color: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 4,
  },
});

export default Lab4;
