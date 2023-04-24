import TabNavigation from "./components/navigations/tabNavigation";
import { NavigationContainer } from '@react-navigation/native';

import { Provider } from 'react-redux';
import store from './components/store';


const ButtonApp = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
    </Provider>
  );
};


export default ButtonApp;
