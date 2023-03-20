/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Lab1 from '../../views/lab1';
import Lab2 from '../../views/lab2';
import Lab3 from '../../views/lab3';
import scalePixels from '../../helper/pixel-scale.helper';
import {Text} from 'react-native';
import Lab5 from '../../views/lab5';
import ApolloExample from '../../views/apolloExample';

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
          headerTitleStyle: {
            fontSize: scalePixels(20),
          },
          tabBarStyle: {
            borderTopColor: '#2A3443',
          },
          tabBarLabel: ({focused, children}) => {
            return (
              <Text
                style={{
                  color: focused
                    ? navBarItemColorActive
                    : navBarItemColorDefault,
                  fontSize: scalePixels(6),
                }}>
                {children}
              </Text>
            );
          },
        }}>
        <Tab.Screen name="Apollo" component={ApolloExample} />
        <Tab.Screen
          name="First lab"
          component={Lab1}

        />
        <Tab.Screen
          name="Second lab"
          component={Lab2}

        />
        <Tab.Screen
          name="Third lab"
          component={Lab3}

        />
        <Tab.Screen
          name="Fifth lab"
          component={Lab5}

        />
      </Tab.Navigator>
    </>
  );
};

export default NavBar;
