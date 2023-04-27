import { StatusBar } from "expo-status-bar";
import React from "react";
import { Navigator } from "./src/navigation/Navigator";
import { Provider } from "react-redux";
import { ApolloProvider } from "@apollo/client";
import store from "./src/app/store.js";
import { client } from "./apollo";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Navigator />
      </Provider>
    </ApolloProvider>
  );
};

export default App;
