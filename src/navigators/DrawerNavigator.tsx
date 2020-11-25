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
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
            height: 600,
            width: 200,
            backgroundColor: 'red',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>DICKS</Text>

          <TouchableOpacity
            onPress={() => setProjectsDrawerShow(false)}
            style={{ height: 50, width: 50, backgroundColor: 'blue' }}>
            <Text>Close!</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      // initialRouteName={screens.main.MyProfile}
    >
      <Drawer.Screen
        name={screens.main.MyProfile}
        component={MyProfileScreen}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
