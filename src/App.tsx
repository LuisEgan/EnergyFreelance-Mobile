import React, { Dispatch } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { useStore } from './store/store';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { ThemeProvider } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerItem,
  DrawerItemList,
  DrawerContentScrollView,
} from '@react-navigation/drawer';

import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import PersonalInformation from './components/Steps/PersonalInformation';
import WorkInformation from './components/Steps/Workinformation';
import Experience from './components/Steps/Experience';
import ThankYou from './components/Steps/ThankYou';
import MyProfileScreen from './screens/MyProfileScreen';
import screens from './constants/screens';

import { logout, startAsyncCall, stopAsyncCall } from '../src/store/actions';
import {
  ASYNC_STORAGE_REMEMBER_ME,
  ASYNC_STORAGE_USER,
} from './constants/asyncStorage';
import { Alert, AsyncStorage } from 'react-native';

declare const global: { HermesInternal: null | {} };

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const stepPagesStack = createStackNavigator();
// const dispatch = useDispatch();
//const navigation= useNavigation();

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
    <React.Fragment>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        // initialRouteName={screens.main.MyProfile}
      >
        <Drawer.Screen
          name={screens.main.MyProfile}
          component={MyProfileScreen}
        />
      </Drawer.Navigator>
    </React.Fragment>
  );
};

const CustomDrawerContent = (props: any) => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      dispatch(logout());
      await AsyncStorage.removeItem(ASYNC_STORAGE_USER);
      await AsyncStorage.removeItem(ASYNC_STORAGE_REMEMBER_ME);
      navigate(screens.main.SignIn);
    } catch (error) {
      console.error('error: ', error);
    }
  };

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="LogOut" onPress={() => handleLogout()} />
    </DrawerContentScrollView>
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
