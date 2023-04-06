import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Ionicons';

import Lab1 from "../screens/lab1";
import Lab2 from "../screens/lab2";
import Lab3 from "../screens/lab3";
import Counter from "../screens/lab4";
import Calculator from "../screens/calculator";


const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Lab1') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          } else if (route.name === 'Lab2') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          } else if (route.name === 'Lab3') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }
            else if (route.name === 'Calculator') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }
            else if (route.name === 'Lab4') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }


          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Lab1" component={Lab1} />
      <Tab.Screen name="Lab2" component={Lab2} />
      <Tab.Screen name="Lab3" component={Lab3} />
      <Tab.Screen name="Lab4" component={Counter} />
      <Tab.Screen name="Calculator" component={Calculator} />
    </Tab.Navigator>
  );
};

export default TabNavigation;