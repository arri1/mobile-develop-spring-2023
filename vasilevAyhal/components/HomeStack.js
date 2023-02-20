import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, Button } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import HomeRoute from './HomeRoute';
import Todo from './Todo/Todo';
import TodoAdd from './Todo/TodoAdd';

const HomeStack = () => {
    
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeRoute" component={HomeRoute} options={{title: 'Home'}} />
            <Stack.Screen name="Todo" component={Todo} options={{title: 'Todo'}}  />
            <Stack.Screen name="TodoAdd" component={TodoAdd} options={{title: 'Todo Add'}}  />
        </Stack.Navigator>
    );
};

export default HomeStack;