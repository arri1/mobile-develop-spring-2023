import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Lab1 from './Labs/Lab1';
import Lab2 from './Labs/Lab2';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color}) => {
            if (route.name == 'Lab1') {
            }
            if (route.name == 'Lab2') {
            }
            return null;
          }
        })}>
        <Tab.Screen name="Lab1" component={Lab1} />
        <Tab.Screen name="Lab2" component={Lab2} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;