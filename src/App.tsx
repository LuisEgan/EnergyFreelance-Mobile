import React from 'react';
import { Provider } from 'react-redux';
import { useStore } from './store/store';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'react-native-elements';
import MainStackNavigator from './navigation/navigators/MainStackNavigator';
import Router from './navigation/Types/Router';

const App = () => {
  const store = useStore({});

  return (
    <Provider store={store}>
      {/* <NavigationContainer> */}
        <ThemeProvider>
          <Router />
          {/* <MainStackNavigator /> */}
        </ThemeProvider>
      {/* </NavigationContainer> */}
    </Provider>
  );
};

export default App;
