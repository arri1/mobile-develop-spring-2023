import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import store from '../store';
import ImageSelector from '../components/imageSelector';

const Lab5 = () => {
  return (
    <Provider store={store}>
      <View
      style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff'}}>
        <ImageSelector />
      </View>
    </Provider>
  );
};

export default Lab5;