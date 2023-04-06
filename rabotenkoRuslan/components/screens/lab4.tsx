import React from 'react';
import { View, Text, Button } from 'react-native';
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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 30 }}>Counter: {count}</Text>
      <Button title="+" onPress={handleIncrement} />
      <Button title="-" onPress={handleDecrement} />
    </View>
  );
};

export default Counter;