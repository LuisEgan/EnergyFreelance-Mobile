import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  ActivityIndicator,
  Image as RNImage,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Button, Image, Text } from 'react-native-elements';
import CheckBox from '@react-native-community/checkbox';
import LinearGradient from 'react-native-linear-gradient';
import { useForm, Controller } from 'react-hook-form';

import Colors from '../constants/colors';
import Input from '../components/Input';

// @ts-ignore
import exampleImage from '../assets/Energy_Freelance_vertical_white.png';
const exampleImageUri = RNImage.resolveAssetSource(exampleImage).uri;

type FormData = {
  email: string;
  password: string;
  rememberMe: boolean;
};

const MyProfileScreen = ({ navigation }) => {
  const { control, handleSubmit, errors } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    Alert.alert('Form Data ', JSON.stringify(data));
  };

  return (
    <KeyboardAvoidingView
      style={{ flexGrow: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={{ flex: 1, backgroundColor: Colors.midLightGray }}>
        <LinearGradient
          start={{ x: 0.4, y: 0.3 }}
          end={{ x: 1, y: 1 }}
          locations={[0.2, 0.8]}
          colors={['#175d8a', '#3ed7f1']}
          style={styles.linearGradient}>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView>
            <ScrollView
              contentInsetAdjustmentBehavior="automatic"
              style={styles.scrollView}>
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
                  <Text style={styles.sectionTitle}>
                    Log In and get to work
                  </Text>
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
                      disabled={false}
                      boxType={'square'}
                      onCheckColor={Colors.lightGreen}
                      tintColor={Colors.white}
                      onTintColor={Colors.lightGreen}
                      value={false}
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
                    title="Log In"
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
                      }}>
                      <Text style={styles.sectionBottom}>
                        New to Energy Freelance?
                      </Text>
                      <Button
                        titleStyle={{
                          color: Colors.lightGreen,
                          textDecorationLine: 'underline',
                        }}
                        type={'clear'}
                        onPress={() => navigation.navigate('SignUp')}
                        title="Sign Up"
                      />
                    </View>
                    <Button
                      titleStyle={{
                        color: Colors.lightGreen,
                        textDecorationLine: 'underline',
                      }}
                      type={'clear'}
                      onPress={() => navigation.navigate('PasswordForgot')}
                      title="Forgot your password?"
                    />
                  </View>
                </View>
              </View>
            </ScrollView>
          </SafeAreaView>
        </LinearGradient>
      </View>
    </KeyboardAvoidingView>
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

export default MyProfileScreen;
