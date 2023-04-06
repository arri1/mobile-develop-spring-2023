import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { SafeAreaView, StatusBar } from 'react-native';

import MainTab from './components/MainTab'
import NavigationTheme from './components/style/navigation'

import { Provider } from 'react-redux';
import store from './components/Redux'

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/graphql',
  cache: new InMemoryCache()
});


const App = () => {
    
    return (
        <ApolloProvider client={client}>
            <Provider store={store}>
                <SafeAreaView style={{ flex: 1, backgroundColor: NavigationTheme.colors.card }}>
                    <StatusBar
                        backgroundColor={NavigationTheme.colors.card}
                        barStyle={NavigationTheme.dark ? 'light-content' : 'dark-content'}
                        />
                    <MainTab/>
                </SafeAreaView>
            </Provider>
        </ApolloProvider>
    );
};

export default App;