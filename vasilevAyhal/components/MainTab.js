import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Animated, Easing, View, Dimensions } from 'react-native';

import NavigationTheme from './style/navigation';
import StylesContainers from './style/containers';
import StylesTexts from './style/texts';

import HomeStack from './HomeStack';
import Notification from './Notification';
import Setting from './Setting';

import IconInbox from '../assets/svg/inbox';
import IconHome from '../assets/svg/home';
import IconWrench from '../assets/svg/wrench';

const Tab = createBottomTabNavigator();

const windowHeight = Dimensions.get('window').height;

const App = () => {
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
                                        <IconHome size={size} color={color}/>
                                        // : (route.name == 'Notification') ?
                                        // <IconInbox size={size} color={color}/>
                                        : (route.name == 'Setting') ?
                                        <IconWrench size={size} color={color}/>
                                        : "null"
                                    }
                                </View>
                            </View>
                        )
                    },
                })}
            >

                <Tab.Screen name='Home'
                    children={() => <HomeStack />}
                />

                {/* <Tab.Screen name='Notification'
                    children={() => <Notification removeBarBadge={removeBarBadge}/>}
                    options={{ tabBarBadge: likeCount > 0 ? likeCount : null, }}
                /> */}
                
                <Tab.Screen name='Setting'
                    children={() => <Setting />}
                />

            </Tab.Navigator> 
        </NavigationContainer>
    );
};

export default App;