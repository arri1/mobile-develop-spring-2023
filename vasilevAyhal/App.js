import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import MainTab from './components/MainTab'
import NavigationTheme from './components/style/navigation'

const App = () => {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar
                backgroundColor={NavigationTheme.colors.card}
                barStyle={'light-content'}
            />
            <MainTab/>
        </SafeAreaView>
    );
};

export default App;