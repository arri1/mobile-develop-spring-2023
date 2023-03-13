import React, { useState, useRef, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-gesture-handler';
import { View, StyleSheet, Dimensions, StatusBar } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

import StylesNavigation from '../style/navigation'
import StylesTexts from '../style/texts'

import Tasks from "./Tasks";
import Report from "./Report";

const SubjectScreen = ({ route, navigation }) => {
    const storage = route.params.subjectId
    const screens = {
        index: 0,
        routes: [
            { key: 'first', title: ' Report ' },
            { key: 'second', title: ' Tasks ' },
        ],
    };

    useEffect(
        () => {
            var promise = getItem(route.params.subjectId)
            promise.then(item => {
                navigation.setOptions({ headerTitle: item.title })
            })
        }, []
    )

    const getItem = async (key) => {
        try {
            const itemValues = await AsyncStorage.getItem(key)
            if (itemValues !== null) {
                return JSON.parse(itemValues)
            }
            return alert('ERROR: Item null');
        } catch (e) {
            return alert('ERROR: getItem');
        }
    }

    return (
        <TabView
            navigationState={screens}
            renderScene={SceneMap({
                first: () => <Report subjectId={storage}/>,
                second: () => <Tasks subjectId={storage}/>,
            })}
            initialLayout={{ width: Dimensions.get('window').width }}
            onIndexChange={ index => screens.index = index}
            renderTabBar={ props => <TabBar {...props}
                style={{
                    backgroundColor: StylesNavigation.colors.headerBackground,
                }}
                labelStyle={StylesTexts.header}
                activeColor={'#6E7AFF'}
                inactiveColor={StylesNavigation.colors.inactiveColor}
                pressColor={'#00000020'}
                indicatorStyle={{backgroundColor: '#6E7AFF'}}
            />}
        />
    );
};

export default SubjectScreen;