import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';

export default function Lab1() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);
  const handleAddTask = () => {
    if (task.trim()) {
      setTaskList([...taskList, { id: Date.now().toString(), task }]);
      setTask('');
    }
  };

  const handleDeleteTask = (taskId) => {
    setTaskList(taskList.filter((task) => task.id !== taskId));
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleDeleteTask(item.id)}>
      <View style={styles.task}>
        <Text style={styles.taskText}>{item.task}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={task}
        onChangeText={(text) => setTask(text)}
        placeholder="Add task"
      />
      <TouchableOpacity style={styles.button} onPress={handleAddTask}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
      <FlatList
        data={taskList}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    fontSize: 18,
    borderRadius: 5,
    width: '80%',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007aff',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  list: {
    width: '100%',
    marginTop: 20,
  },
  task: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  taskText: {
    fontSize: 18,
  },
});