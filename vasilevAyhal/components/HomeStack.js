import React from 'react';
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
import { Easing } from 'react-native';

import NavigationTheme from './style/navigation';

import HomeScreen from './HomeScreen';
import Todo from './Todo/Todo';

const Stack = createStackNavigator();

const HomeStack = () => {
    
    const transitionSpecConfig = {
        animation: 'timing',
        config: {
            duration: 150,
            easing: Easing.ease,
        },
    };

    return (
        <Stack.Navigator screenOptions={{
            gestureEnabled: true,
            gestureDirection: 'horizontal',

            transitionSpec: {
                open: transitionSpecConfig,
                close: transitionSpecConfig,
            },
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,

            headerStyle: { backgroundColor: NavigationTheme.colors.headerBackground },
        }}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{title: 'Home'}} />
            <Stack.Screen name="Todo" component={Todo} options={{title: 'Todo'}}  />
        </Stack.Navigator>
    );
};

export default HomeStack;