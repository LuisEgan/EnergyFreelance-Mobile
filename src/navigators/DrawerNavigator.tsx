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
} from '../constants/asyncStorage';
import screens from '../constants/screens';
import MyProfileScreen from '../screens/MyProfileScreen';
import { logout } from '../store/actions';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CustomDrawerList from '../components/CustomDrawerList'; 
import Colors from '../constants/colors';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props: any) => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();

  const [projectsDrawerShow, setProjectsDrawerShow] = useState<boolean>(false);

  const handleLogout = async () => {
    try {
      dispatch(logout());
      await AsyncStorage.removeItem(ASYNC_STORAGE_USER);
      await AsyncStorage.removeItem(ASYNC_STORAGE_REMEMBER_ME);
      navigate(screens.main.SignIn);
    } catch (error) {}
  };

  return (
    <>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Projects"
          //@ts-ignore
          onPress={() => setProjectsDrawerShow(true)}
        />
        <DrawerItem
          label={screens.main.LogOut}
          onPress={() => handleLogout()}
        />
      </DrawerContentScrollView>

      {projectsDrawerShow && (
        <View
          style={{
            position: 'absolute',
            left: projectsDrawerShow ? 0 : -200,
            top: 0,
            zIndex: 1,
            elevation: 1,
            height: "100%",
            width: 280,
            backgroundColor: 'white',
            justifyContent: 'space-evenly',
          }}>  
          
          <Text style={{  
                    left: 30,
                    top: 80,   
                }}
                onPress={() => setProjectsDrawerShow(false)}>
                Main Menu
            <TouchableOpacity
              onPress={() => setProjectsDrawerShow(false)}>
                  <Image style={{  
                      left: -200, 
                      width: 700,
                      height: 15, 
                      resizeMode: 'contain',
                  }}source={require('../assets/backArrow.png')} />            
            </TouchableOpacity> 
          </Text>          
          <CustomDrawerList/>          
        </View>
      )}
    </>
  );
};

const DrawerNavigator = () => {
  
  return (    
    <Drawer.Navigator
    drawerStyle={{
      backgroundColor: Colors.white, 
    }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      
    > 
    
    <Drawer.Screen      
        name={screens.main.MyProfile}
        component={MyProfileScreen}
      />      
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
