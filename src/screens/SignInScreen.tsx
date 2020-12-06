import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  View,
  ActivityIndicator,
  Image as RNImage,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button, Image, Text, CheckBox } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { useForm, Controller } from 'react-hook-form';

import Colors from '../constants/colors';
import Input from '../components/Input';

// @ts-ignore
import exampleImage from '../assets/Energy_Freelance_vertical_white.png';
import { useNavigation } from '@react-navigation/native';
import screens from '../constants/screens';
import { useDispatch, useSelector } from 'react-redux';
import { authUser, startAsyncCall } from '../store/actions';
import {
  ASYNC_STORAGE_REMEMBER_ME,
  ASYNC_STORAGE_USER,
} from '../constants/asyncStorage';
import { clockRunning } from 'react-native-reanimated';
const exampleImageUri = RNImage.resolveAssetSource(exampleImage).uri;

type FormData = {
  email: string;
  password: string;
  rememberMe: boolean;
};

const SignInScreen = () => {
  const { control, handleSubmit, register, setValue } = useForm<FormData>();

  const dispatch = useDispatch();
  const { navigate } = useNavigation();

  const auth = useSelector((state) => state.root.authenticated);
  const user = useSelector((state) => state.root.user);
  const asyncCallInProgress = useSelector(
    (state) => state.root.asyncCallInProgress,
  );
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  // * Check if automatic sign in
  useEffect(() => {
    const check = async () => {
      try {
        const remembered = await AsyncStorage.getItem(
          ASYNC_STORAGE_REMEMBER_ME,
        );

        if (remembered === 'true') {
          // dispatch(authUser(data));
        }
      } catch (error) {
        console.error('error: ', error);
      }

      check();
    };
  }, []);

  // * Register fields
  useEffect(() => {
    register('rememberMe');
  }, []);

  // * Redirect on auth
  useEffect(() => {
    const doSignIn = async () => {
      try {
        await AsyncStorage.setItem(ASYNC_STORAGE_USER, JSON.stringify(user));
        await AsyncStorage.setItem(ASYNC_STORAGE_REMEMBER_ME, `${rememberMe}`);
        if(user.type===2){
          
          navigate(screens.main.MyWPProfile);
        }else{
          navigate(screens.main.MyProfile);
        }        
      } catch (error) {
        console.error('error: ', error);
      }
    };

    if (auth) {
      doSignIn();
    }
  }, [auth]);

  const onSubmit = async (data: FormData) => {
    dispatch(startAsyncCall());
    dispatch(authUser(data));
  };

  return (
    <LinearGradient
      start={{ x: 0.4, y: 0.3 }}
      end={{ x: 1, y: 1 }}
      locations={[0.2, 0.8]}
      colors={['#175d8a', '#3ed7f1']}
      style={styles.linearGradient}>
      <ScrollView style={styles.scrollView}>
        <KeyboardAwareScrollView style={{ flex: 1, flexGrow: 1 }}>
          <View style={styles.body}>
            <View
              style={{
                marginTop: 60,
                marginBottom: 30,
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={{ uri: exampleImageUri }}
                style={{
                  width: 300,
                  height: 100,
                  resizeMode: 'contain',
                }}
                PlaceholderContent={<ActivityIndicator />}
              />
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Log In and get to work</Text>
              <Controller
                name="email"
                defaultValue=""
                control={control}
                render={(props) => (
                  <Input
                    {...props}
                    onChangeText={(value) => props.onChange(value)}
                    placeholder="Email Address"
                    keyboardType={'email-address'}
                  />
                )}
              />
              <Controller
                name="password"
                defaultValue=""
                control={control}
                render={(props) => (
                  <Input
                    {...props}
                    onChangeText={(value) => props.onChange(value)}
                    placeholder="Password"
                    secureTextEntry={true}
                  />
                )}
              />
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 10,
                  marginBottom: 30,
                }}>
                <CheckBox
                  checked={rememberMe}
                  onPress={() => {
                    setRememberMe(!rememberMe);
                    setValue('rememberMe', !rememberMe);
                  }}
                  size={30}
                />

                <Text
                  style={{
                    fontSize: 20,
                    color: Colors.white,
                    marginLeft: 20,
                  }}>
                  Remember Me
                </Text>
              </View>

              <Button
                onPress={handleSubmit(onSubmit)}
                titleStyle={{ fontSize: 20, color: Colors.darkBlue }}
                buttonStyle={{
                  backgroundColor: Colors.lightGreen,
                  paddingVertical: 16,
                  marginBottom: 20,
                }}
                title={asyncCallInProgress ? 'Loading..' : 'Log In'}
              />
              <Button
                type="outline"
                onPress={handleSubmit(onSubmit)}
                titleStyle={{ fontSize: 20, color: Colors.lightGreen }}
                buttonStyle={{
                  borderColor: Colors.lightGreen,
                  borderWidth: 2,
                  paddingVertical: 16,
                }}
                title="or continue with Gmail"
              />
              <View style={{ flex: 1 }}>
                <View style={styles.newEnergyContainer}>
                  <Text style={styles.sectionBottom}>
                    New to Energy Freelance?
                  </Text>
                  <Button
                    titleStyle={{
                      color: Colors.lightGreen,
                      textDecorationLine: 'underline',
                    }}
                    type={'clear'}
                    onPress={() => navigate(screens.main.SignUp)}
                    title="Sign Up"
                  />
                </View>
                <Button
                  titleStyle={{
                    color: Colors.lightGreen,
                    textDecorationLine: 'underline',
                  }}
                  type={'clear'}
                  // onPress={() => navigate('PasswordForgot')}
                  title="Forgot your password?"
                />
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'transparent',
  },
  body: {
    backgroundColor: 'transparent',
  },

  linearGradient: { flex: 1 },

  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '400',
    color: Colors.white,
    textAlign: 'center',
    marginBottom: 30,
  },
  sectionBottom: {
    fontSize: 18,
    fontWeight: '400',
    color: Colors.white,
    textAlign: 'center',
  },
  link: {
    fontSize: 18,
    fontWeight: '400',
    color: Colors.lightGreen,
    textAlign: 'center',
    textDecorationLine: 'underline',
    marginHorizontal: 10,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    // color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },

  newEnergyContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
});

export default SignInScreen;
