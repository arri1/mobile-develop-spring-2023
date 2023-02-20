import React, { useState, useEffect, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Animated, Easing, View, SafeAreaView, Text, StyleSheet, Alert } from 'react-native';

import HomeStack from './components/HomeStack';
import Details from './components/Details';

import IconLike from './assets/svg/like';
import IconHome from './assets/svg/home';

const Tab = createBottomTabNavigator();

const App = () => {
    const [likeCount, setCount] = useState(0)
    const [tabIndex, setTabIndex] = useState(false)
    const iconWidth = "100%"
    const iconHeight = "100%"

    const anim_state = {
        start: 0,
        end: 1
    }
    const anim_value = useRef(new Animated.Value(anim_state.start)).current

    const startAnimate = () => {
        anim_value.setValue(0)
        Animated.timing(anim_value, { toValue: tabIndex ? anim_state.start : anim_state.end, useNativeDriver: true, duration: 100, easing: Easing.ease }).start()
    }

    useEffect(() => {
        startAnimate()
    }, [likeCount])

    const addBarBadge = () => {
        setCount(likeCount + 1)
    }
    const removeBarBadge = () => {
        if(likeCount != 0) setCount(likeCount - 1)
    }

    return (
        <SafeAreaView style={ styles.container }>
            <NavigationContainer>
                <Tab.Navigator initialRouteName='Main'
                    screenOptions={({route}) => ({
                        headerShown: false,
                        tabBarStyle: { height: '8%' },
                        tabBarItemStyle: { flexDirection: 'column', justifyContent: 'center' },
                        tabBarBadgeStyle: { maxWidth: 40, minWidth: 'auto', height: 'auto' },
                        tabBarActiveTintColor: "#000000",
                        tabBarInactiveTintColor: "#8A8A8A",
                        tabBarLabel: ({focused}) => {
                            if (focused) {
                                return (
                                    <Animated.View style={[ styles.animation, { transform: [{ scale: anim_value }] }]}>
                                        <Text style={ styles.text }> {route.name} </Text>
                                    </Animated.View>
                                )
                            }
                            return null
                            
                        },
                        tabBarIconStyle: { flex: 0.5 },
                        tabBarIcon: ({focused, color}) => {
                            if (route.name == 'Home') return <IconHome width={iconWidth} height={iconHeight} color={color}/>
                            else if (route.name == 'Like') return <IconLike width={iconWidth} height={iconHeight} color={color}/>
                            return null
                        },
                    })}
                >
                    <Tab.Screen
                        name="Home"
                        listeners={{
                            tabPress: () => {
                                startAnimate()
                            },
                        }}
                        children={() => <HomeStack addBarBadge={addBarBadge}/>}
                    />
                    <Tab.Screen
                        name="Like"
                        options={{
                            tabBarBadge: likeCount > 0 ? likeCount : null,
                        }}
                        listeners={{
                            tabPress: () => {
                                startAnimate()
                            },
                        }}
                        children={() => <Details removeBarBadge={removeBarBadge}/>}
                    />
                </Tab.Navigator> 
            </NavigationContainer>
        </SafeAreaView>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    animation: {
        height: 'auto'
    },
    text: {
        fontSize: 20,
        fontWeight: "600"
    }
})