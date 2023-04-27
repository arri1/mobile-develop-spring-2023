import { StyleSheet, Text, View } from "react-native";
import AppNavigator from "./components/appNavigator";
import React from "react";
import { Provider } from "react-redux";
import store from "./components/redux/store";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </ApolloProvider>
  );
};

export default App;
