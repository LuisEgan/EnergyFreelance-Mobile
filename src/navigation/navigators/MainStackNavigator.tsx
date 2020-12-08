import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import screens from '../../constants/screens';
import SignInScreen from '../../screens/Auth/SignInScreen';
import SignUpScreen from '../../screens/Auth/SignUpScreen';
import DrawerNavigator from './DrawerNavigator';
import StepPagesNavigator from './StepPagesNavigator';
import { LinearGradient } from 'react-native-linear-gradient';

const Stack = createStackNavigator();

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
      options={{ title: 'Sign Up' }}
    />
    <Stack.Screen
      name={screens.main.Steps}
      component={StepPagesNavigator}
      options={{ title: 'Steps' }}
    />
    <Stack.Screen name={screens.main.MyProfile} component={DrawerNavigator} />
    <Stack.Screen name={screens.main.MyWPProfile} component={DrawerNavigator} />
  </Stack.Navigator>
);

export default MainStackNavigator;
