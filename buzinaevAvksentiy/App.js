import React, { useState, styleSheet } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView } from "react-native";
import Navigate from "./Navigate";
import { Provider } from 'react-redux';
import { store } from './bll/store';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

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
  )
}; 


export default App;