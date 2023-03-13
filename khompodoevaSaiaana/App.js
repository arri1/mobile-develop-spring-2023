import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Image } from 'react-native';
import React from 'react';
import Lab1 from './screens/lab1'
import Lab2 from './screens/lab2'
import Lab3 from './screens/lab3'

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='useState' component={Lab1} options={{
        tabBarIcon: () => {
          return (<Image
            style={{ width: 25, height: 25 }}
            source={{ uri: `https://cdn-icons-png.flaticon.com/512/287/287221.png` }}/>);}
      }}
      />
      <Tab.Screen name='useEffect' component={Lab2} options={{
        tabBarIcon: () => {
          return (<Image
            style={{ width: 25, height: 25 }}
            source={{ uri: `https://cdn-icons-png.flaticon.com/512/188/188987.png` }}/>);}
      }}
      />
      <Tab.Screen name='useMemo' component={Lab3} options={{
        tabBarIcon: () => {
          return (<Image
            style={{ width: 25, height: 25 }}
            source={{ uri: `https://cdn-icons-png.flaticon.com/512/188/188993.png` }}/>);}
      }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <MyTabs/>
    </NavigationContainer>
  );
}

export default App;