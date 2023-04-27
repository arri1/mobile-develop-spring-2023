import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Lab6 from "./components/Lab6";
import { Provider } from "react-redux";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import store from "./store";

const client = new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql/",
    cache: new InMemoryCache(),
});
const App = () => {
    return (
            <ApolloProvider client={client}>
                <Provider store={store}>
                    <NavigationContainer>
                        <Lab6 />
                    </NavigationContainer>
                </Provider>
            </ApolloProvider>
    );
};

export default App;
