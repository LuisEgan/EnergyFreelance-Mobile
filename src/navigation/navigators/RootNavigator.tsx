import React, { useState, useEffect, useMemo } from "react";
import { AsyncStorage, Keyboard } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import AppNavigator from "./AppNavigator";
import AuthNavigator from "./AuthNavigator";
import screens from '../../constants/screens'; 
import SignInScreen from "../../screens/Auth/SignInScreen";
import StepPagesNavigator from "./StepPagesNavigator";

const RootStack = createStackNavigator(); 
const RootNavigator = () => {
  return (
    <RootStack.Navigator initialRouteName={screens.main.SignIn} headerMode={'none'}> 
    <RootStack.Screen name="AppNavigator" component={AppNavigator} />
    {/* {userToken ? (
        <RootStack.Screen name="AppNavigator" component={AppNavigator} />
      ) : (
        <RootStack.Screen name="AuthNavigator" component={AuthNavigator} />
      )} */}
    </RootStack.Navigator>
    );
};

export default RootNavigator;
