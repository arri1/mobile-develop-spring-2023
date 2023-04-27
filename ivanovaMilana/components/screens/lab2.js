import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';

export default function Lab2() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  
  const toggle = () => {
    setIsActive(!isActive);
  }

  const reset = () => {
    setSeconds(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <View style={styles.container}>
      <Text style={styles.taskText}>{seconds}s</Text>
      <TouchableOpacity style={styles.button} onPress={toggle}>
        <Text style={styles.buttonText}>{isActive ? 'Pause' : 'Start'}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={reset}>
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>
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