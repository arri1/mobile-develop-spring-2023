import React from "react";
import { Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import squareMath from "./assets/squareMath.png";
import sqrtMath from "./assets/sqrtMath.png";
import cube from "./assets/cube.png";

import Lab1 from './components/lab1';
import Lab2 from './components/Lab2';
import Lab3 from './components/Lab3';
import { Lab6 } from './components/Lab6';
import { Header } from "react-native/Libraries/NewAppScreen";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Apollo from './apollo';


const Tab = createBottomTabNavigator();

const Navigate = () => {
    return <NavigationContainer>
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveBackgroundColor: '#FFAD40',
            tabBarInactiveBackgroundColor: '#FFC373'
            }}>
            <Tab.Screen
                name = "lab1"
                component={Lab1}
                options={{
                    tabBarLabel: 'lab1',
                    tabBarIcon: ({ color, size }) => (
                        <Image style = {styles.logo} source={squareMath}/>
                    )
                }}
                />
            <Tab.Screen
                name = "lab2"
                component={Lab2}
                options={{
                    tabBarLabel: 'lab2',
                    tabBarIcon: ({ color, size }) => (
                        <Image style = {styles.logo} source={sqrtMath}/>
                    )
                }}
                />
            <Tab.Screen
                name = "lab3"
                component={Lab3}
                options={{
                    tabBarLabel: 'lab3',
                    tabBarIcon: ({ color, size }) => (
                        <Image style = {styles.logo} source={cube}/>
                    )
                }}
                />
            <Tab.Screen
                name = "lab6"
                component={Lab6}
                options={{
                    tabBarLabel: 'lab6',
                    tabBarIcon: ({ color, size }) => (
                        <Image style = {styles.logo} source={cube}/>
                    )
                }}
                />
            <Tab.Screen
                name = "lab7"
                component={Apollo}
                options={{
                    tabBarLabel: 'Lab7',
                    tabBarIcon: ({ color, size }) => (
                        <Image style = {styles.logo} source={sqrtMath}/>
                    )
                }}
                />
        </Tab.Navigator>
    </NavigationContainer>;
}

const styles = StyleSheet.create({
    logo: {
        width: 40,
        height: 40
    }
})

export default Navigate;