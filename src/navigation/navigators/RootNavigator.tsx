import React, { useState, useEffect, useMemo } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStackNavigator } from '@react-navigation/stack';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
import { ASYNC_STORAGE_USER } from '../../constants/asyncStorage';
import { AuthContext } from '../../context/AuthContext';

export type TUserToken = string | null;

const RootStack = createStackNavigator();
const RootNavigator = () => {
  const [initialized, setInitialized] = useState<boolean>(false);
  const [userToken, setUserToken] = useState<TUserToken>(null);

  // * Set user token from cached data
  useEffect(() => {
    const setInitialUserToken = async () => {
      let newUserToken: TUserToken = null;
      try {
        newUserToken = await AsyncStorage.getItem(ASYNC_STORAGE_USER);
      } catch (error) {
        console.error('error: ', error);
      } finally {
        setUserToken(newUserToken);
        setInitialized(true);
      }
    };

    setInitialUserToken();
  }, []);

  // * Set contexts values
  const authContext = useMemo(
    () => ({
      signIn: (ASYNC_STORAGE_USER: string) => setUserToken(ASYNC_STORAGE_USER),
      signOut: () => setUserToken(null),
    }),
    [],
  );

  if (!initialized) return null;

  return (
    <AuthContext.Provider value={authContext}>
      <RootStack.Navigator headerMode={'none'}>
        {userToken ? (
          <RootStack.Screen name="AppNavigator" component={AppNavigator} />
        ) : (
          <RootStack.Screen name="AuthNavigator" component={AuthNavigator} />
        )}
      </RootStack.Navigator>
    </AuthContext.Provider>
  );
};

export default RootNavigator;
