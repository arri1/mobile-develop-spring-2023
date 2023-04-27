import TabNavigation from "./components/navigations/tabNavigation";
import { NavigationContainer } from '@react-navigation/native';
import { ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';
import store from './components/store';
import BookList from './components/screens/lab5';
import client from './components/screens/client';

const ButtonApp = () => {
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


export default ButtonApp;
