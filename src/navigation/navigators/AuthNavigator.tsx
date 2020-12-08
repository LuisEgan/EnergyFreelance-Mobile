import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import {
  ASYNC_STORAGE_USER,
  ASYNC_STORAGE_REMEMBER_ME,
} from '../../constants/asyncStorage';
import screens from '../../constants/screens';
import MyProfileScreen from '../../screens/App/MyProfileScreen';
import { logout } from '../../store/actions';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CustomDrawerList from '../../components/CustomDrawerList'; 
import Colors from '../../constants/colors';
import { createStackNavigator } from "@react-navigation/stack"; 
import SignInScreen from '../../screens/Auth/SignInScreen';
  
const Drawer = createDrawerNavigator();

const AuthNavigator = () => {  
  return (    
    <Drawer.Navigator
    drawerStyle={{
      backgroundColor: Colors.white, 
    }}
    > 
    <Drawer.Screen      
        name={screens.main.SignIn}
        component={SignInScreen}
      />      
    </Drawer.Navigator>
  );
}; 

export default AuthNavigator;

