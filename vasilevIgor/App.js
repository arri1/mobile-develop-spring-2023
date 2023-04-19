import TabNavigation from "./components/navigations/tabNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import * as React from 'react';

const client = new ApolloClient({
  uri: 'https://flyby-router-demo.herokuapp.com/',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;