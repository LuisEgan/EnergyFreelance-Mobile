import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'react-native-elements';

import HomeScreen from './screens/HomeScreen';

declare const global: { HermesInternal: null | {} };

const App = () => {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <HomeScreen />
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
