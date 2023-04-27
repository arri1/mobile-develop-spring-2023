import React, {useState} from 'react';
import { Node } from 'react';
import {SafeAreaView, StyleSheet, Text, View, Button, Alert, FlatList, TouchableHighlight} from 'react-native';
import Lab1 from './components/Lab1';
import Navigate from './Navigate';
import {Provider} from 'react-redux';
import {store} from './redux/store';

const App = () => {
  
  return (
    <Provider store={store}>
      <Navigate/>
    </Provider>
  );
};


const styles = StyleSheet.create({
  
});

export default App;