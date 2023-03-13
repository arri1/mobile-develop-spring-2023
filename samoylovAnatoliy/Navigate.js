import React, {useState} from 'react';
import { Node } from 'react';
import {SafeAreaView, StyleSheet, Text, View, Button, Alert, FlatList, TouchableHighlight, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Lab1 from './components/Lab1';
import Lab2 from './components/Lab2';

import spisok from './assets/spisok.png'
import effect from './assets/effect.png'

const Tab = createBottomTabNavigator();

const Navigate = () => {
    return (
        <NavigationContainer>

            <Tab.Navigator initialRouteName="Feed" backBehavior='history' screenOptions={{
                tabBarActiveTintColor: '#e91e63', 
                tabBarActiveBackgroundColor: '#F8EDE5',
                color: 'black', 
                fontSize: 12,
                tabBarLabelStyle: {fontSize: 12},
            }}>

                <Tab.Screen
                    name="To do list"
                    component={Lab1}
                    options={{
                        tabBarLabel: 'Lab1',
                        tabBarIcon: ({ color, size }) => (
                            <Image style={styles.tinyLogo} source={spisok}/>
                            
                        ) 
                    }}
                />

                <Tab.Screen
                    name="UseEffect"
                    component={Lab2}
                    options={{
                        tabBarLabel: 'Lab2',
                        tabBarIcon: ({ color, size }) => (
                            <Image style={styles.tinyLogo} source={effect}/>
                            
                        ) 
                    }}
                />

            </Tab.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
  
});

export default Navigate;