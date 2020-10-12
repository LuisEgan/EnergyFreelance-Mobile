import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  Image as RNImage,
  ScrollView,
  StyleSheet,
  View,
  ActivityIndicator,
} from 'react-native';
import Colors from '../../constants/colors';
import LinearGradient from 'react-native-linear-gradient';
import { Button, Image, Text } from 'react-native-elements';
import { Controller, useForm } from 'react-hook-form';
import SelectInput from 'react-native-select-input-ios';

import Input from '../Input';
// import Step from '../step';

// @ts-ignore
import userAvatarPlaceholder from '../../assets/User.png';
const userAvatarPlaceholderURI = RNImage.resolveAssetSource(
  userAvatarPlaceholder,
).uri;

type FormData = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  businessName: string;
  industry: string;
};

const Experience = ({
  navigation,
  // state,
  // stepActions,
  // step,
  // industries,
  // usersPosition,
  // yearsOfExperience,
  // totalSteps,
  // type,
}) => {
  const { control, handleSubmit, errors } = useForm<FormData>();
  // const [updateWorkInformation, setUpdateWorkInformation] = useState(false);
  // const [personalInfo, setPersonalInfo] = useState(state.personalInfo || {});
  // const [workInformation, setWorkInformation] = useState(
  //   state.workInformation || { workInformation: [] },
  // );
  //
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   if (user.type === WORK_PROVIDER) {
  //     if (name === 'industryId') {
  //       let ind = industries.filter((item) => item.value === value);
  //       setPersonalInfo({
  //         ...personalInfo,
  //         industryName: ind[0].title,
  //         industryId: ind[0].value,
  //       });
  //       return;
  //     }
  //   }
  //   setPersonalInfo({ ...personalInfo, [name]: value });
  // };
  //
  // useEffect(() => {
  //   if (user.type === FREELANCER) {
  //     if (updateWorkInformation) {
  //       dispatch(updateWorkinformation(workInformation));
  //       return;
  //     }
  //   }
  //
  //   return () => {
  //     setUpdateWorkInformation(false);
  //   };
  // }, [workInformation]);
  const options = [
    { value: 0, label: 'Primary Industry' },
    { value: 1, label: 'Banana' },
  ];
  const options2 = [
    { value: 0, label: 'Which best describes you?' },
    { value: 1, label: 'Landman' },
  ];
  const options3 = [
    { value: 0, label: 'Years of experience' },
    { value: 1, label: '1 to 3' },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: Colors.midLightGray }}>
      <LinearGradient
        start={{ x: 0.4, y: 0.3 }}
        end={{ x: 1, y: 1 }}
        locations={[0.2, 0.8]}
        colors={['#175d8a', '#3ed7f1']}
        style={styles.linearGradient}>
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={styles.body}>
              <View style={{ marginTop: 60 }}>
                <Text style={styles.sectionTitle}>
                  Tell us about some of your work history, your education and
                  your general rate.
                </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    textAlign: 'left',
                    color: Colors.white,
                    marginBottom: 20,
                  }}>
                  Experience & General rate
                </Text>
                <View style={{ marginTop: 20 }}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: 'normal',
                      textAlign: 'left',
                      color: Colors.white,
                      marginBottom: 20,
                    }}>
                    Work history
                  </Text>
                  <Button
                    type="outline"
                    titleStyle={{ fontSize: 20, color: Colors.lightGreen }}
                    // onPress={() => navigation.navigate('WorkInformation')}
                    buttonStyle={{
                      borderColor: Colors.lightGreen,
                      borderWidth: 2,
                      paddingVertical: 16,
                      marginBottom: 20,
                    }}
                    title="Connect to Linkedin profile"
                  />
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: 'normal',
                      textAlign: 'center',
                      color: Colors.white,
                      marginBottom: 20,
                    }}>
                    Or click here to enter manually.
                  </Text>
                </View>
                <View
                  style={{
                    width: '100%',
                    height: 2,
                    backgroundColor: Colors.white,
                    marginTop: 20,
                    marginBottom: 40,
                  }}
                />
                <View style={{ marginBottom: 40 }}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: 'bold',
                      textAlign: 'left',
                      color: Colors.white,
                      marginBottom: 20,
                    }}>
                    General rate
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: 'normal',
                      textAlign: 'left',
                      color: Colors.white,
                      marginTop: 20,
                      marginBottom: 20,
                    }}>
                    General hourly rate
                  </Text>
                  <Controller
                    name="generalRate"
                    defaultValue=""
                    control={control}
                    render={(props) => (
                      <Input
                        {...props}
                        onChangeText={(value) => props.onChange(value)}
                        placeholder="Rate"
                      />
                    )}
                  />
                </View>

                <Button
                  type="outline"
                  titleStyle={{ fontSize: 20, color: Colors.lightGreen }}
                  onPress={() => navigation.navigate('WorkInformation')}
                  buttonStyle={{
                    borderColor: Colors.lightGreen,
                    borderWidth: 2,
                    paddingVertical: 16,
                    marginBottom: 20,
                  }}
                  title="Prev"
                />
                <Button
                  type="outline"
                  // onPress={() => navigation.navigate('WorkInformation')}
                  titleStyle={{ fontSize: 20, color: Colors.lightGreen }}
                  buttonStyle={{
                    borderColor: Colors.lightGreen,
                    borderWidth: 2,
                    paddingVertical: 16,
                    marginBottom: 20,
                  }}
                  title="Skip"
                />
                <Button
                  onPress={() => navigation.navigate('ThankYou')}
                  titleStyle={{ fontSize: 20, color: Colors.darkBlue }}
                  buttonStyle={{
                    backgroundColor: Colors.lightGreen,
                    paddingVertical: 16,
                    marginBottom: 20,
                  }}
                  title="Next"
                />
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </LinearGradient>
    </View>
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

export default Experience;
