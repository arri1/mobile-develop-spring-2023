import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./components/navigations/tabNavigation";
import { Provider } from "react-redux";
import { store } from "./components/redux/store";
import { client } from "./components/screens/client";
import { ApolloProvider } from "@apollo/client";

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
