import React, { useState, styleSheet } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView } from "react-native";
import Navigate from "./Navigate";
import { Provider } from 'react-redux';
import { store } from './bll/store';

const App = () => {
  return (
  <Provider store={store}>
    <Navigate/>
  </Provider>
  )
}; 


export default App;