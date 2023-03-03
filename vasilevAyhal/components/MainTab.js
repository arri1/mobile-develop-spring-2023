import React, { useState, useEffect, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Animated, Easing, View, Dimensions } from 'react-native';

import NavigationTheme from './style/navigation';
import StylesTexts from './style/texts';
import StylesContainers from './style/containers';

import HomeStack from './HomeStack';
import Notification from './Notification';

import IconInbox from '../assets/svg/inbox';
import IconHome from '../assets/svg/home';
import IconWrench from '../assets/svg/wrench';

const Tab = createBottomTabNavigator();

const windowHeight = Dimensions.get('window').height;

const App = () => {
    const [likeCount, setCount] = useState(0)
    const size = windowHeight / 100 * 5
    const activeTintColor = NavigationTheme.colors.activeColor
    const inactiveTintColor = NavigationTheme.colors.inactiveColor

    const tabBarIconBackgroundAnim = new Animated.Value(1.1)

    const tabBarIconPressed = () => {
        tabBarIconBackgroundAnim.setValue(0)
        Animated.timing(tabBarIconBackgroundAnim, {
            toValue: 1.1,
            duration: 300,
            easing: Easing.elastic(1),
            useNativeDriver: true,
        }).start();
    };

    const addBarBadge = () => { setCount(likeCount + 1) }
    const removeBarBadge = () => { if(likeCount != 0) setCount(likeCount - 1) }

    return (
        <NavigationContainer theme={NavigationTheme}>
            <Tab.Navigator initialRouteName='Main'
                screenListeners={{tabPress: tabBarIconPressed}}
                screenOptions={({route}) => ({
                    tabBarHideOnKeyboard: true,
                    headerShown: route.name != 'Home' ? true : false,
                    headerStyle: { backgroundColor: NavigationTheme.colors.headerBackground },
                    tabBarActiveTintColor: activeTintColor,
                    tabBarInactiveTintColor: inactiveTintColor,
                    tabBarShowLabel: false,
                    tabBarStyle: { height: '8%', overflow: 'hidden' },
                    tabBarBadgeStyle: { maxWidth: 40, minWidth: 'auto', height: 'auto' },
                    tabBarItemStyle: { flexDirection: 'column', justifyContent: 'center' },
                    tabBarIconStyle: { width: '100%', margin: 0 },
                    tabBarIcon: ({focused, color}) => {
                        return (
                            <View style={[StylesContainers.default, StylesContainers.fill]}>
                                {
                                    focused ?
                                        <Animated.View style={[
                                            StylesContainers.default,
                                            NavigationTheme.tabBarIconBackground,
                                            { width: size, height: size, transform: [{ scale: tabBarIconBackgroundAnim }] }
                                        ]}/>
                                        : null
                                }
                                <View style={[StylesContainers.default, StylesContainers.fill]}>
                                    {
                                        route.name == 'Home' ?
                                        <IconHome size={size} color={color} focused={focused ? true : false}/>
                                        : (route.name == 'Notification') ?
                                        <IconInbox size={size} color={color} focused={focused ? true : false}/>
                                        : "null"
                                    }
                                </View>
                            </View>
                        )
                    },
                })}
            >

                <Tab.Screen name='Home'
                    children={() => <HomeStack addBarBadge={addBarBadge}/>}
                />

                <Tab.Screen name='Notification'
                    children={() => <Notification removeBarBadge={removeBarBadge}/>}
                    options={{ tabBarBadge: likeCount > 0 ? likeCount : null, }}
                />

            </Tab.Navigator> 
        </NavigationContainer>
    );
};

export default App;