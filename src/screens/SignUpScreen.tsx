import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  ScrollView,
  View,
  ActivityIndicator,
  Image as RNImage,
  StyleSheet,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button, ButtonGroup, Image, Text } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { useForm, Controller } from 'react-hook-form';

import { startAsyncCall, fetchUser } from '../store/actions';
import Colors from '../constants/colors';
import Input from '../components/Input';

// @ts-ignore
import exampleImage from '../assets/Energy_Freelance_vertical_white.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ASYNC_STORAGE_USER } from '../constants/asyncStorage';
import screens from '../constants/screens';
import { useNavigation } from '@react-navigation/native';
const exampleImageUri = RNImage.resolveAssetSource(exampleImage).uri;

type FormData = {
  type: number;
  email: string;
  password: string;
  confirmPassword: string;
};

type UserData = {
  type: number;
  email: string;
  password: string;
  status: string;
  isgoogle: string;
};

const SignUpScreen = ({ navigation }) => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.root.authenticated);
  const user = useSelector((state) => state.root.user);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const { control, handleSubmit, errors } = useForm<FormData>();

  // * Redirect on auth
  useEffect(() => {
    const doSignIn = async () => {
      try {
        await AsyncStorage.setItem(ASYNC_STORAGE_USER, JSON.stringify(user));

        setTimeout(() => {
          navigate(screens.main.MyProfile);
        }, 2000);
      } catch (error) {
        console.error('error: ', error);
      }
    };

    if (auth) {
      doSignIn();
    }
  }, [auth]);

  const onSubmit = (data: FormData) => {
    let userType = selectedIndex + 1;
    let newUser: UserData = {
      email: data.email,
      type: userType,
      password: data.password,
      status: '0',
      isgoogle: 'False',
    };
    dispatch(startAsyncCall());
    dispatch(fetchUser(newUser));
  };

  const updateIndex = (index: number) => {
    setSelectedIndex(index);
  };

  const component1 = () => (
    <Text style={{ fontSize: 20, color: Colors.darkBlue }}>Get Hired</Text>
  );
  const component2 = () => (
    <Text style={{ fontSize: 20, color: Colors.darkBlue }}>Hire</Text>
  );
  const buttons = [{ element: component1 }, { element: component2 }];

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
              <Text
                style={{
                  color: Colors.white,
                  fontWeight: 'bold',
                  fontSize: 24,
                  textAlign: 'center',
                  marginBottom: 10,
                }}>
                Join EnergyFreelance
              </Text>
              <Text style={styles.sectionTitle}>
                Tell us, how you want to work?
              </Text>
              <View style={{ flex: 1, marginBottom: 20 }}>
                <ButtonGroup
                  onPress={updateIndex}
                  selectedIndex={selectedIndex}
                  buttons={buttons}
                  containerStyle={{
                    height: 60,
                    borderWidth: 0,
                    width: '100%',
                    marginLeft: -1,
                  }}
                  selectedButtonStyle={{
                    backgroundColor: Colors.lightBlue,
                  }}
                  innerBorderStyle={{ color: Colors.lightBlue }}
                />
              </View>
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
              <Controller
                name="confirmPassword"
                defaultValue=""
                control={control}
                render={(props) => (
                  <Input
                    {...props}
                    onChangeText={(value) => props.onChange(value)}
                    placeholder="Confirm Password"
                    secureTextEntry={true}
                  />
                )}
              />

              <Button
                onPress={handleSubmit(onSubmit)}
                titleStyle={{ fontSize: 20, color: Colors.darkBlue }}
                buttonStyle={{
                  backgroundColor: Colors.lightGreen,
                  paddingVertical: 16,
                  marginBottom: 20,
                }}
                title="Sign Up"
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
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 30,
                    marginBottom: 20,
                  }}>
                  <Text style={styles.sectionBottom}>Already a member?</Text>
                  <Button
                    titleStyle={{
                      color: Colors.lightGreen,
                      textDecorationLine: 'underline',
                    }}
                    type={'clear'}
                    onPress={() => navigate(screens.main.SignIn)}
                    title="Log In"
                  />
                  <Button
                    titleStyle={{
                      color: Colors.lightGreen,
                      textDecorationLine: 'underline',
                    }}
                    type={'clear'}
                    onPress={() => navigate(screens.main.Steps)}
                    title="Steps"
                  />
                </View>
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
});

export default SignUpScreen;
