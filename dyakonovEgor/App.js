import TabNavigator from "./components/navigation/tabNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./components/screens/store";
import { ApolloClient,ApolloProvider, InMemoryCache, gql, useQuery } from "@apollo/client";
import client from "./components/screens/client"

const App = () => {
  return (
    
    <ApolloProvider client={client}>
      <Provider store={store}>
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
      </Provider>
    </ApolloProvider>
  );
};

export default App;
