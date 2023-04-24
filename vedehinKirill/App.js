import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { StyleSheet } from 'react-native';

import Lab1 from './screens/lab1';
import Lab2 from './screens/lab2';

const Tab = createMaterialBottomTabNavigator();

function App() {
  return (
    <NavigationContainer style={style.nav}>
      <Tab.Navigator style={style.navNav}>
        <Tab.Screen name="Laboratory 1" component={Lab1} style={style.navNav} />
        <Tab.Screen name="Laboratory 2" component={Lab2} style={style.navNav} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const style = StyleSheet.create({
  r: {
    backgroundColor: '#f00',
  },
  g: {
    backgroundColor: '#0f0',
  },
  b: {
    backgroundColor: '#00f',
  },
});

export default App;
