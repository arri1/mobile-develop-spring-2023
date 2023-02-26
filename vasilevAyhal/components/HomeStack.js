import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import HomeScreen from './HomeScreen';
import Todo from './Todo/Todo';
import TodoAdd from './Todo/TodoAdd';

const HomeStack = () => {
    
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{title: 'Home'}} />
            <Stack.Screen name="Todo" component={Todo} options={{title: 'Todo'}}  />
            <Stack.Screen name="TodoAdd" component={TodoAdd} options={{title: 'Todo Add'}}  />
        </Stack.Navigator>
    );
};

export default HomeStack;