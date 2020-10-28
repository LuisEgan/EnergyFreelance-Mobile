import React from 'react';
import { Provider } from 'react-redux';
import { useStore } from './store/store';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import PersonalInformation from './components/Steps/PersonalInformation';
import WorkInformation from './components/Steps/Workinformation';
import Experience from './components/Steps/Experience';
import ThankYou from './components/Steps/ThankYou';
import MyProfileScreen from './screens/MyProfileScreen';
import screens from './constants/screens';

declare const global: { HermesInternal: null | {} };

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const stepPagesStack = createStackNavigator();

const stepPages = () => (
  <stepPagesStack.Navigator
    initialRouteName={screens.steps.PersonalInformation}
    headerMode={'none'}>
    <stepPagesStack.Screen
      name={screens.steps.PersonalInformation}
      component={PersonalInformation}
      options={{ title: 'Personal Information' }}
    />
    <stepPagesStack.Screen
      name={screens.steps.WorkInformation}
      component={WorkInformation}
      options={{ title: 'Work Information' }}
    />
    <stepPagesStack.Screen
      name={screens.steps.Experience}
      component={Experience}
      options={{ title: 'Experience' }}
    />
    <stepPagesStack.Screen
      name={screens.steps.ThankYou}
      component={ThankYou}
      options={{ title: 'Thank You' }}
    />
  </stepPagesStack.Navigator>
);

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName={screens.main.MyProfile}>
      <Drawer.Screen
        name={screens.main.MyProfile}
        component={MyProfileScreen}
      />
    </Drawer.Navigator>
  );
};

const MainStackNavigator = () => (
  <Stack.Navigator initialRouteName={screens.main.SignIn} headerMode={'none'}>
    <Stack.Screen
      name={screens.main.SignIn}
      component={SignInScreen}
      options={{ title: 'Sign In' }}
    />
    <Stack.Screen
      name={screens.main.SignUp}
      component={SignUpScreen}
      options={{ title: 'Sign In' }}
    />
    <Stack.Screen
      name={screens.main.Steps}
      component={stepPages}
      options={{ title: 'Steps' }}
    />
    <Stack.Screen name={screens.main.MyProfile} component={DrawerNavigator} />
  </Stack.Navigator>
);

const App = () => {
  const store = useStore({});

  return (
    <Provider store={store}>
      <NavigationContainer>
        <ThemeProvider>
          <MainStackNavigator />
        </ThemeProvider>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
