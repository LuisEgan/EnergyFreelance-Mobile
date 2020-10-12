import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import Colors from '../../constants/colors';
import LinearGradient from 'react-native-linear-gradient';
import { Button, Text, Icon } from 'react-native-elements';
import { Controller, useForm } from 'react-hook-form';
import SelectInput from 'react-native-select-input-ios';

import Input from '../Input';

const WorkInformation = ({ navigation }) => {
  const { control, handleSubmit, errors } = useForm<any>();
  const [newSkills, setNewSkills] = useState([]);
  const [newCertifications, setNewCertifications] = useState([]);

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
    { value: 0, label: 'Select skill' },
    { value: 1, label: 'Landman' },
  ];
  const options3 = [
    { value: 0, label: 'Select certification' },
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
                  Now tell us about your area of work. Please fill it and click
                  next.
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
                  Work Information
                </Text>
                <View>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: 'normal',
                      textAlign: 'left',
                      color: Colors.white,
                      marginBottom: 20,
                    }}>
                    Relevant Industry (Primary Industry)
                  </Text>
                  <Controller
                    name="industry"
                    defaultValue=""
                    control={control}
                    render={(props) => (
                      <SelectInput
                        {...props}
                        labelStyle={{ fontSize: 20 }}
                        style={{
                          flexDirection: 'row',
                          padding: 20,
                          backgroundColor: Colors.white,
                          marginBottom: 20,
                        }}
                        onValueChange={(value) => props.onChange(value)}
                        value={0}
                        options={options}
                      />
                    )}
                  />
                </View>
                <TouchableOpacity
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    marginVertical: 20,
                  }}>
                  <Icon
                    style={{
                      backgroundColor: Colors.darkGreen,
                      width: 40,
                      height: 40,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 40,
                      marginRight: 20,
                    }}
                    name="plus"
                    type="font-awesome"
                    color={Colors.white}
                    onPress={() => console.log('hello')}
                  />
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 'normal',
                      color: Colors.lightGreen,
                    }}>
                    Add new skill
                  </Text>
                </TouchableOpacity>

                {newSkills.length > 0 &&
                  newSkills.map((skill) => (
                    <View>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: 'normal',
                          textAlign: 'left',
                          color: Colors.white,
                          marginBottom: 20,
                        }}>
                        Industry skill 1
                      </Text>
                      <Controller
                        name="skill"
                        defaultValue=""
                        control={control}
                        render={(props) => (
                          <SelectInput
                            {...props}
                            labelStyle={{ fontSize: 20 }}
                            style={{
                              flexDirection: 'row',
                              padding: 20,
                              backgroundColor: Colors.white,
                              marginBottom: 20,
                            }}
                            onValueChange={(value) => props.onChange(value)}
                            value={0}
                            options={options2}
                          />
                        )}
                      />
                    </View>
                  ))}

                <TouchableOpacity
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    marginVertical: 20,
                  }}>
                  <Icon
                    style={{
                      backgroundColor: Colors.darkGreen,
                      width: 40,
                      height: 40,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 40,
                      marginRight: 20,
                    }}
                    name="plus"
                    type="font-awesome"
                    color={Colors.white}
                    onPress={() => console.log('hello')}
                  />
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 'normal',
                      color: Colors.lightGreen,
                    }}>
                    Add new certification
                  </Text>
                </TouchableOpacity>
                {newCertifications.length > 0 &&
                  newCertifications.map((cert) => (
                    <View>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: 'normal',
                          textAlign: 'left',
                          color: Colors.white,
                          marginBottom: 20,
                        }}>
                        Industry certification 1
                      </Text>
                      <Controller
                        name="certification"
                        defaultValue=""
                        control={control}
                        render={(props) => (
                          <SelectInput
                            {...props}
                            labelStyle={{ fontSize: 20 }}
                            style={{
                              flexDirection: 'row',
                              padding: 20,
                              backgroundColor: Colors.white,
                              marginBottom: 20,
                            }}
                            onValueChange={(value) => props.onChange(value)}
                            value={0}
                            options={options3}
                          />
                        )}
                      />
                      <Controller
                        name="membership-number"
                        defaultValue=""
                        control={control}
                        render={(props) => (
                          <Input
                            {...props}
                            onChangeText={(value) => props.onChange(value)}
                            placeholder="Membership #"
                          />
                        )}
                      />
                    </View>
                  ))}

                <View
                  style={{
                    width: '100%',
                    height: 2,
                    backgroundColor: Colors.white,
                    marginTop: 20,
                    marginBottom: 40,
                  }}
                />

                <TouchableOpacity
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    marginBottom: 80,
                  }}>
                  <Icon
                    style={{
                      backgroundColor: Colors.darkGreen,
                      width: 40,
                      height: 40,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 40,
                      marginRight: 20,
                    }}
                    name="plus"
                    type="font-awesome"
                    color={Colors.white}
                    onPress={() => console.log('hello')}
                  />
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 'normal',
                      color: Colors.lightGreen,
                    }}>
                    Add new industry
                  </Text>
                </TouchableOpacity>

                <Button
                  type="outline"
                  titleStyle={{ fontSize: 20, color: Colors.lightGreen }}
                  onPress={() => navigation.navigate('PersonalInformation')}
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
                  onPress={() => navigation.navigate('Experience')}
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

export default WorkInformation;
