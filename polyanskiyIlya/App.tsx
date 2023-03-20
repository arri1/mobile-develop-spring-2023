import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import store from './src/redux/store';

import NavBar from './src/components/NavBar';
import {Provider} from 'react-redux';

const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FFFFFF',
    background: '#1E2632',
    card: '#1E2632',
    text: '#FFFFFF',
  },
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer theme={AppTheme}>
        <NavBar />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
