import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Lab1 from "../screens/lab1";
import Lab2 from "../screens/lab2";
import Lab3 from "../screens/lab3";
import Counter from "../screens/lab4";
import BookList from "../screens/lab5";
import Calculator from "../screens/calculator";


const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Lab1') {
            iconName = focused ? 'numeric-1-circle' : 'numeric-1-circle-outline';
          } else if (route.name === 'Lab2') {
            iconName = focused ? 'numeric-2-circle' : 'numeric-2-circle-outline';
          } else if (route.name === 'Lab3') {
            iconName = focused ? 'numeric-3-circle' : 'numeric-3-circle-outline';
          } else if (route.name === 'Lab4') {
            iconName = focused ? 'numeric-4-circle' : 'numeric-4-circle-outline';
          } else if (route.name === 'Lab5') {
            iconName = focused ? 'numeric-5-circle' : 'numeric-5-circle-outline';
          } else if (route.name === "Calculator"){
            iconName = focused ? 'calculator-variant' : 'calculator-variant-outline';
          }
          
          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Lab1" component={Lab1} />
      <Tab.Screen name="Lab2" component={Lab2} />
      <Tab.Screen name="Lab3" component={Lab3} />
      <Tab.Screen name="Lab4" component={Counter} />
      <Tab.Screen name="Lab5" component={BookList} />
      <Tab.Screen name="Calculator" component={Calculator} />
    </Tab.Navigator>
  );
};

export default TabNavigation;