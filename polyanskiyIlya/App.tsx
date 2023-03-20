import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

import NavBar from './src/components/NavBar';

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
    <NavigationContainer theme={AppTheme}>
      <NavBar />
    </NavigationContainer>
  );
};

export default App;
