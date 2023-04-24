import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { CounterState, DECREMENT_COUNTER, INCREMENT_COUNTER } from '../store/types';



const Counter: React.FC = () => {
  const count = useSelector<CounterState, number>((state) => state.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({ type: INCREMENT_COUNTER });
  };

  const handleDecrement = () => {
    dispatch({ type: DECREMENT_COUNTER });
  };

return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Counter: {count}</Text>
      <View style={styles.buttonsContainer}>
        <Button title="+" onPress={handleIncrement} />
        <Button title="-" onPress={handleDecrement} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  counterText: {
    fontSize: 30
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 20
  }
});

export default Counter;