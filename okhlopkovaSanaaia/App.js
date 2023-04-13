import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./components/navigations/tabNavigation";
import { Provider } from "react-redux";
import store from "./store";
import { ApolloProvider } from "@apollo/client";
import { client } from "./apollo";

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
