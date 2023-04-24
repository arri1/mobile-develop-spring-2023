import React from 'react';
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
import { Easing } from 'react-native';

import NavigationTheme from './style/navigation';
import StylesTexts from './style/texts';

import HomeScreen from './HomeScreen';
import Screen1 from './Screen1';
import Screen2 from './Screen2';

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
        <Stack.Navigator screenOptions={({route}) => ({
            headerShown: route.name != 'SubjectsStack' ? true : false,
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            
            transitionSpec: {
                open: transitionSpecConfig,
                close: transitionSpecConfig,
            },
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,

            headerStyle: { backgroundColor: NavigationTheme.colors.headerBackground },
        })}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{title: 'Home'}} />
            <Stack.Screen name="Screen1" component={Screen1} options={{title: 'Screen 1'}}  />
            <Stack.Screen name="Screen2" component={Screen2} options={{title: 'Screen 2'}}  />
        </Stack.Navigator>
    );
};

export default HomeStack;