import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Lab1 from './src/views/lab1/Lab1';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstLab">
        <Stack.Screen name="FirstLab" component={Lab1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;