import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { CounterState, DECREMENT, INCREMENT } from '../store/types';
import { Provider } from 'react-redux';
import store from '../store';



const Counter: React.FC = () => {
  const count = useSelector<CounterState, number>((state) => state.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({ type: INCREMENT });
  };

  const handleDecrement = () => {
    dispatch({ type: DECREMENT });
  };

  return (
    <Provider store={store}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 30 }}>Counter: {count}</Text>
        <Button title="+" onPress={handleIncrement} />
        <Button title="-" onPress={handleDecrement} />
      </View>
    </Provider>
  );
};

export default Counter;