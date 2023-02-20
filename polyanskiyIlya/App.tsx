/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Lab1 from './src/views/lab1/Lab1';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import Lab2 from './src/views/lab2/Lab2';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="FirstLab"
          component={Lab1}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="profile" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="SecondLab"
          component={Lab2}
          options={{
            tabBarIcon: ({color}) => (
              <EvilIcon name="sc-github" color={color} size={42} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
