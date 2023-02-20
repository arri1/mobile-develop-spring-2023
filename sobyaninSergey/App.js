import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Lab1 from './components/screens/lab1.js'
import Lab2 from './components/screens/lab2.js'

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="LAB 1" component={Lab1} />
        <Tab.Screen name="LAB 2" component={Lab2} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
