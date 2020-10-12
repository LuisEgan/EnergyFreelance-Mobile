import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';

import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import PersonalInformation from './components/Steps/PersonalInformation';
import WorkInformation from './components/Steps/Workinformation';
import Experience from './components/Steps/Experience';
import ThankYou from './components/Steps/ThankYou';
import MyProfileScreen from './screens/MyProfileScreen';

declare const global: { HermesInternal: null | {} };

const Stack = createStackNavigator();
const stepPagesStack = createStackNavigator();

const stepPages = () => (
  <stepPagesStack.Navigator
    initialRouteName="PersonalInformation"
    headerMode={'none'}>
    <stepPagesStack.Screen
      name="PersonalInformation"
      component={PersonalInformation}
      options={{ title: 'Personal Information' }}
    />
    <stepPagesStack.Screen
      name="WorkInformation"
      component={WorkInformation}
      options={{ title: 'Work Information' }}
    />
    <stepPagesStack.Screen
      name="Experience"
      component={Experience}
      options={{ title: 'Experience' }}
    />
    <stepPagesStack.Screen
      name="ThankYou"
      component={ThankYou}
      options={{ title: 'Thank You' }}
    />
  </stepPagesStack.Navigator>
);

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
            component={stepPages}
            options={{ title: 'Steps' }}
          />
          <Stack.Screen
            name="MyProfile"
            component={MyProfileScreen}
            options={{ title: 'My Profile' }}
          />
        </Stack.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
