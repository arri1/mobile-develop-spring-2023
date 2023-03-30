import React, { useState, useMemo } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { format, isSameDay } from 'date-fns';

const Lab3 = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [newTask, setNewTask] = useState('');

  const filteredTasks = useMemo(() => {
    return tasks.filter(task => isSameDay(task.date, selectedDate));
  }, [tasks, selectedDate]);

  const handleAddTask = () => {
    setTasks([
      ...tasks,
      { date: selectedDate, task: newTask },
    ]);
    setNewTask('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{format(selectedDate, 'MMMM do, yyyy')}</Text>
      <TextInput
        style={styles.input}
        value={newTask}
        onChangeText={setNewTask}
        placeholder="Add task"
      />
      <TouchableOpacity style={styles.button} onPress={handleAddTask}>
        <Text style={styles.buttonText}>Add Task</Text>
      </TouchableOpacity>
      <View style={styles.tasks}>
        {filteredTasks.map(task => (
          <View key={task.task} style={styles.task}>
            <Text>{task.task}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  tasks: {
    flex: 1,
  },
  task: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default Lab3;