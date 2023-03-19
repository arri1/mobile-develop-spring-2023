/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import Lab1 from '../../views/lab1';
import Lab2 from '../../views/lab2';
import Lab3 from '../../views/lab3';

const Tab = createBottomTabNavigator();

const NavBar = () => {
  const navBarItemColorDefault = '#8E8E8E';
  const navBarItemColorActive = '#007AFF';

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
          },
          tabBarStyle: {
            borderTopColor: '#2A3443',
          },
        }}>
        <Tab.Screen
          name="First lab"
          component={Lab1}
          options={{
            tabBarIcon: ({focused, size}) => (
              <Icon
                name="profile"
                color={focused ? navBarItemColorActive : navBarItemColorDefault}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Second lab"
          component={Lab2}
          options={{
            tabBarIcon: ({focused, size}) => (
              <Icon
                name="profile"
                color={focused ? navBarItemColorActive : navBarItemColorDefault}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Third lab"
          component={Lab3}
          options={{
            tabBarIcon: ({focused, size}) => (
              <Icon
                name="profile"
                color={focused ? navBarItemColorActive : navBarItemColorDefault}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default NavBar;
