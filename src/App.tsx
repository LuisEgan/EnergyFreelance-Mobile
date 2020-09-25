import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';

import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import StepsScreen from './screens/StepsScreen';

declare const global: { HermesInternal: null | {} };

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <Stack.Navigator initialRouteName="SignIn" headerMode={'none'}>
          <Stack.Screen
            name="SignIn"
            component={SignInScreen}
            options={{ title: 'Sign In' }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUpScreen}
            options={{ title: 'Sign In' }}
          />
          <Stack.Screen
            name="Steps"
            component={StepsScreen}
            options={{ title: 'Steps' }}
          />
        </Stack.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
