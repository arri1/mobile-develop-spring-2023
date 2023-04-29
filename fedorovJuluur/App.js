import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./components/TabNavigator";
import { Provider } from "react-redux";
import store from "./store";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import apollo from "./components/apollo";
const client = new ApolloClient({
  uri: "https://flyby-router-demo.herokuapp.com/",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <NavigationContainer>
          <TabNavigation />
        </NavigationContainer>
      </Provider>
    </ApolloProvider>
  );
};

export default App;