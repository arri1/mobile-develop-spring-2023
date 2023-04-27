import React, {useState} from 'react';
import { Node } from 'react';
import {SafeAreaView, StyleSheet,} from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Lab1 from './components/Lab1';
import Navigate from './Navigate';
import {Provider} from 'react-redux';
import {store} from './redux/store';

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/graphql',
  cache: new InMemoryCache()
});

const App = () => {
  
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Navigate/>
      </Provider>
    </ApolloProvider>
  );
};


const styles = StyleSheet.create({
  
});

export default App;