import React from 'react';
import { View } from 'react-native';
import ImageSelector from '../components/imageSelector';

const Lab5 = () => {
  return (
      <View
      style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff'}}>
        <ImageSelector />
      </View>
  );
};

export default Lab5;