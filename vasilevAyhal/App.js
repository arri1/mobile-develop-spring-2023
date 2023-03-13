import React from 'react';
import 'react-native-gesture-handler';
import { SafeAreaView, StatusBar } from 'react-native';

import MainTab from './components/MainTab'
import NavigationTheme from './components/style/navigation'

const App = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: NavigationTheme.colors.card }}>
            <StatusBar
                backgroundColor={NavigationTheme.colors.card}
                barStyle={NavigationTheme.dark ? 'light-content' : 'dark-content'}
            />
            <MainTab/>
        </SafeAreaView>
    );
};

export default App;