/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Lab1 from './src/views/lab1';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import Lab2 from './src/views/lab2';
import Lab3 from './src/views/lab3';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <NavBar />
    </NavigationContainer>
  );
};

export default App;
