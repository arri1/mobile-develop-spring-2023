import MainContainer from "./navigation/maincontainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ApolloProvider } from "@apollo/client";

import client from "./apollo/client";
const App = () => {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <MainContainer />
      </ApolloProvider>
    </Provider>
  );
};
export default App;
