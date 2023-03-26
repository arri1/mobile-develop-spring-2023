import TabNavigation from "./components/navigations/tabNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { ApolloProvider } from "@apollo/client";
import { client } from "./apollo";
import store from "./store";

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
