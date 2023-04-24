import TabNavigation from "./Components/Navigation/TabNavigation";
import store from "./app/store";
import { Provider } from "react-redux";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql/",
  cache: new InMemoryCache(),
});
export default function App() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <TabNavigation />
      </Provider>
    </ApolloProvider>
  );
}
