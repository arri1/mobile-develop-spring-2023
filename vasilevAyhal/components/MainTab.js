import React, { useState, useEffect, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AnimateHeight from 'react-animate-height';
import { ImageBackground, View, SafeAreaView, Text, StyleSheet, Alert } from 'react-native';

import NavigationTheme from './style/navigation';
import StylesTexts from './style/texts';
import HomeStack from './HomeStack';
import Notification from './Notification';

import IconInbox from '../assets/svg/inbox';
import IconHome from '../assets/svg/home';
import IconWrench from '../assets/svg/wrench';

const Tab = createBottomTabNavigator();

const App = () => {
    const [likeCount, setCount] = useState(0)
    const iconWidth = "100%"
    const iconHeight = "100%"
    const tintColor = '#fff'

    const addBarBadge = () => { setCount(likeCount + 1) }
    const removeBarBadge = () => { if(likeCount != 0) setCount(likeCount - 1) }

    return (
        <NavigationContainer theme={NavigationTheme}>
            <Tab.Navigator initialRouteName='Main'
                screenOptions={({route}) => ({
                    headerShown: route.name != 'Home' ? true : false,
                    tabBarStyle: { height: '8%' },
                    tabBarItemStyle: { flexDirection: 'column', justifyContent: 'center' },
                    tabBarBadgeStyle: { maxWidth: 40, minWidth: 'auto', height: 'auto' },
                    tabBarActiveTintColor: tintColor,
                    tabBarInactiveTintColor: "#8A8A8A",
                    tabBarShowLabel: false,
                    tabBarIconStyle: { flex: 0.5 },
                    tabBarIcon: ({focused, color}) => {
                        if (route.name == 'Home')
                            return <IconHome width={iconWidth} height={iconHeight} color={color} focused={focused ? true : false}/>
                        else if (route.name == 'Notification')
                            return <IconInbox width={iconWidth} height={iconHeight} color={color} focused={focused ? true : false}/>
                        else if (route.name == 'Setting')
                            return <IconWrench width={iconWidth} height={iconHeight} color={color} focused={focused ? true : false}/>
                        return null
                    },
                })}
            >

                <Tab.Screen name="Home"
                    children={() => <HomeStack addBarBadge={addBarBadge}/>}
                />

                <Tab.Screen name="Notification"
                    children={() => <Notification removeBarBadge={removeBarBadge}/>}
                    options={{ tabBarBadge: likeCount > 0 ? likeCount : null, }}
                />

            </Tab.Navigator> 
        </NavigationContainer>
    );
};

export default App;