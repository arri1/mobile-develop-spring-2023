import React, { useState, useMemo } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Lab3() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);
  
  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  }

  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  }

  const reset = () => {
    setCounterOne(0);
    setCounterTwo(0);
  }
  
  const isEven = useMemo(() => {
    let i = 0;
    while(i < 200000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne])

  return (
    <View style={styles.container}>
      <Text style={styles.taskText}>{counterOne} red cars</Text>
      <Text style={styles.taskText}>{isEven?'Even':'Odd'}</Text>
      <TouchableOpacity style={styles.button} onPress={incrementOne}>
        <Text style={styles.buttonText}>Add red cars</Text>
      </TouchableOpacity>
      <Text style={styles.taskText}>{counterTwo} blue cars</Text>
      <TouchableOpacity style={styles.button} onPress={incrementTwo}>
        <Text style={styles.buttonText}>Add blue cars</Text>
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