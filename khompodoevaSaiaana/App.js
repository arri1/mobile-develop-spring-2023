import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { ApolloProvider } from '@apollo/client';
import { Image } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Lab1 from './screens/lab1'
import Lab2 from './screens/lab2'
import Lab3 from './screens/lab3'
import Lab5 from './screens/lab5';
import Lab6 from './screens/lab6';
import client from './youtubeAPI';


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
      <Tab.Screen name='redux' component={Lab5} options={{
        tabBarIcon: () => {
          return (<Image
            style={{ width: 25, height: 25 }}
            source={{ uri: `https://cdn-icons-png.flaticon.com/512/2659/2659360.png` }}/>);}
      }}
      />
      <Tab.Screen name='apollo' component={Lab6} options={{
        tabBarIcon: () => {
          return (<Image
            style={{ width: 25, height: 25 }}
            source={{ uri: `https://cdn-icons-png.flaticon.com/512/1383/1383260.png` }}/>);}
      }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <NavigationContainer>
          <MyTabs/>
          </NavigationContainer>
          </Provider>
    </ApolloProvider>
  );
}

export default App;