import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './components/Home';
import Details from './components/Details';
import { View, SafeAreaView } from 'react-native';

import Like from './assets/like';

const Tab = createBottomTabNavigator();

const App = () => {
    const [count, setCount] = useState(0)

    const addBarBadge = () => {
        setCount(count+1)
    }
    const removeBarBadge = () => {
        if(count != 0) setCount(count-1)
    }


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={{
                        tabBarStyle: { height: '8%' },
                        tabBarItemStyle: { flexDirection: 'column', justifyContent: 'center' },
                        tabBarIcon: Like,
                        tabBarIconStyle: { maxHeight: '50%'},
                        tabBarBadgeStyle: { maxWidth: 40, height: 'auto', alignItems: 'center', minWidth: 'auto', top: 0 },
                        tabBarLabelStyle: { margin: 0, fontSize: 20, width: '50%' },
                    }}
                >
                    <Tab.Screen name="Home" children={() => <Home addBarBadge={addBarBadge}/>} options={count != 0 ? { tabBarBadge: count } : ''}/>
                    <Tab.Screen name="Settings" children={() => <Details removeBarBadge={removeBarBadge}/>} />
                </Tab.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
};

export default App