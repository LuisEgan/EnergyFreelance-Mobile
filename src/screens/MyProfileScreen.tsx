import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  ActivityIndicator,
  Image as RNImage,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {
  Card,
  Image,
  Text,
  Icon,
  ButtonGroup,
  Button,
} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

import Colors from '../constants/colors';

// @ts-ignore
import exampleImage from '../assets/Energy_Freelance_vertical_white.png';
const exampleImageUri = RNImage.resolveAssetSource(exampleImage).uri;

type FormData = {
  email: string;
  password: string;
  rememberMe: boolean;
};

const MyProfileScreen = ({ navigation }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const updateIndex = (index: number) => {
    setSelectedIndex(index);
  };

  const component1 = () => (
    <Text style={{ fontSize: 16, textAlign: 'center', color: Colors.darkBlue }}>
      Available to hire
    </Text>
  );
  const component2 = () => (
    <Text style={{ fontSize: 16, textAlign: 'center', color: Colors.darkBlue }}>
      Unavailable to hire
    </Text>
  );
  const buttons = [{ element: component1 }, { element: component2 }];

  return (
    <KeyboardAvoidingView
      style={{ flexGrow: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={{ flex: 1, backgroundColor: Colors.midLightGray }}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <LinearGradient
            start={{ x: 0.4, y: 0.3 }}
            end={{ x: 1, y: 1 }}
            locations={[0.2, 0.8]}
            colors={['#175d8a', '#3ed7f1']}
            style={styles.linearGradient}>
            <View>
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: 'bold',
                  textAlign: 'left',
                  color: Colors.white,
                  paddingLeft: 24,
                  marginVertical: 20,
                }}>
                My account
              </Text>
              <ScrollView
                horizontal
                style={{
                  paddingVertical: 24,
                }}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    marginHorizontal: 24,
                  }}>
                  <TouchableOpacity>
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: 'bold',
                        textAlign: 'left',
                        color: Colors.white,
                        marginRight: 20,
                      }}>
                      My Profile
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: 'bold',
                        textAlign: 'left',
                        color: Colors.white,
                        marginRight: 20,
                      }}>
                      General Settings
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: 'bold',
                        textAlign: 'left',
                        color: Colors.white,
                        marginRight: 20,
                      }}>
                      Manage Payments
                    </Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: 'bold',
                  textAlign: 'left',
                  color: Colors.white,
                  paddingLeft: 24,
                  marginVertical: 20,
                }}>
                Profile progress 45%
              </Text>
              <View
                style={{
                  marginHorizontal: 24,
                  flex: 1,
                  justifyContent: 'center',
                  height: 8,
                  backgroundColor: Colors.darkBlue,
                  borderRadius: 6,
                }}>
                <View
                  style={{
                    width: '50%',
                    height: 6,
                    backgroundColor: Colors.lightGreen,
                    borderRadius: 6,
                  }}
                />
              </View>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: 'bold',
                  textAlign: 'left',
                  color: Colors.lightGreen,
                  paddingLeft: 24,
                  marginVertical: 20,
                }}>
                You can't search projects until you have at least 50% of your
                information
              </Text>
            </View>
          </LinearGradient>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: 'bold',
                  textAlign: 'left',
                  color: Colors.darkBlue,
                  marginBottom: 20,
                }}>
                Personal Information
              </Text>
              <Card containerStyle={{ borderRadius: 6, paddingVertical: 40 }}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Icon
                    style={{
                      width: 140,
                      height: 140,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginBottom: 20,
                    }}
                    size={140}
                    name="user-circle"
                    type="font-awesome"
                    color={Colors.midGray}
                    onPress={() => console.log('hello')}
                  />
                </View>
                <Card.Title style={{ fontSize: 20, color: Colors.midBlue }}>
                  D Pastor
                </Card.Title>
                <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 16,
                  }}>
                  <Text style={{ fontSize: 18, marginVertical: 5 }}>
                    someemail@email.com
                  </Text>
                  <Text style={{ fontSize: 18, marginVertical: 5 }}>
                    2111-1111
                  </Text>
                </View>
                <Card.Divider
                  style={{ height: 2, backgroundColor: Colors.lightGray }}
                />
                <View style={{ flex: 1, flexDirection: 'column' }}>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginVertical: 5,
                    }}>
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: 'bold',
                        color: Colors.midBlue,
                      }}>
                      Experience
                    </Text>
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: 'normal',
                      }}>
                      2 years
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginVertical: 5,
                    }}>
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: 'bold',
                        color: Colors.midBlue,
                      }}>
                      Description
                    </Text>
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: 'normal',
                      }}>
                      2 years
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginVertical: 5,
                    }}>
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: 'bold',
                        color: Colors.midBlue,
                      }}>
                      0 Reviews
                    </Text>
                  </View>
                  <View style={{ flex: 1, marginBottom: 20 }}>
                    <ButtonGroup
                      onPress={updateIndex}
                      selectedIndex={selectedIndex}
                      buttons={buttons}
                      containerStyle={{
                        height: 60,
                        borderWidth: 1,
                        borderColor: Colors.midBlue,
                        width: '100%',
                        marginLeft: -1,
                        marginTop: 20,
                      }}
                      selectedButtonStyle={{
                        backgroundColor: Colors.lightBlue,
                      }}
                      innerBorderStyle={{ color: Colors.lightBlue }}
                    />
                    <Button
                      type="outline"
                      // onPress={handleSubmit(onSubmit)}
                      titleStyle={{
                        fontSize: 20,
                        color: Colors.midBlue,
                      }}
                      buttonStyle={{
                        borderColor: Colors.darkBlue,
                        borderWidth: 1,
                        paddingVertical: 16,
                        marginTop: 10,
                      }}
                      title="View profile"
                    />
                  </View>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignItems: 'flex-end',
                    marginTop: 10,
                  }}>
                  <TouchableOpacity>
                    <Icon
                      style={{
                        width: 40,
                        height: 40,
                        borderWidth: 1,
                        borderColor: Colors.lightGreen,
                        borderRadius: 30,
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                      size={30}
                      name="pencil"
                      type="evilicon"
                      color={Colors.lightGreen}
                      onPress={() => console.log('hello')}
                    />
                  </TouchableOpacity>
                </View>
              </Card>

              <View
                style={{
                  marginTop: 40,
                  marginBottom: 10,
                  paddingHorizontal: 20,
                }}>
                <Text
                  style={{
                    fontSize: 22,
                    fontWeight: 'bold',
                    color: Colors.midBlue,
                  }}>
                  Oil & Gas industry
                </Text>
              </View>

              <Card containerStyle={{ borderRadius: 6, paddingVertical: 40 }}>
                <View style={{ flex: 1, flexDirection: 'column' }}>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      marginBottom: 10,
                    }}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: 'bold',
                        color: Colors.midBlue,
                      }}>
                      Skills
                    </Text>
                  </View>
                </View>
                <Card.Divider
                  style={{ height: 2, backgroundColor: Colors.lightGray }}
                />

                <View style={{ flex: 1, flexDirection: 'column' }}>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      marginBottom: 10,
                    }}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: 'bold',
                        color: Colors.midBlue,
                      }}>
                      Certifications
                    </Text>
                  </View>
                </View>
                <Card.Divider
                  style={{ height: 2, backgroundColor: Colors.lightGray }}
                />

                <View style={{ flex: 1, flexDirection: 'column' }}>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      marginBottom: 10,
                    }}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: 'bold',
                        color: Colors.midBlue,
                        marginBottom: 20,
                      }}>
                      Locations
                    </Text>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginVertical: 15,
                      }}>
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: 'bold',
                          color: Colors.midBlue,
                        }}>
                        Basins
                      </Text>
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: 'normal',
                        }}>
                        Delaware
                      </Text>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginVertical: 15,
                      }}>
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: 'bold',
                          color: Colors.midBlue,
                        }}>
                        State
                      </Text>
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: 'normal',
                        }}>
                        Texas
                      </Text>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginVertical: 15,
                      }}>
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: 'bold',
                          color: Colors.midBlue,
                        }}>
                        Counties
                      </Text>
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: 'normal',
                        }}>
                        Pecos (TX)
                      </Text>
                    </View>
                  </View>
                </View>

                <View
                  style={{
                    flex: 1,
                    alignItems: 'flex-end',
                    marginTop: 10,
                  }}>
                  <TouchableOpacity>
                    <Icon
                      style={{
                        width: 40,
                        height: 40,
                        borderWidth: 1,
                        borderColor: Colors.lightGreen,
                        borderRadius: 30,
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                      size={30}
                      name="pencil"
                      type="evilicon"
                      color={Colors.lightGreen}
                      onPress={() => console.log('hello')}
                    />
                  </TouchableOpacity>
                </View>
              </Card>

              <View
                style={{
                  marginTop: 40,
                  marginBottom: 10,
                  paddingHorizontal: 20,
                }}>
                <Text
                  style={{
                    fontSize: 22,
                    fontWeight: 'bold',
                    color: Colors.midBlue,
                  }}>
                  Work history & Education
                </Text>
              </View>

              <Card containerStyle={{ borderRadius: 6, paddingVertical: 40 }}>
                <Button
                  type="outline"
                  // onPress={handleSubmit(onSubmit)}
                  titleStyle={{
                    fontSize: 20,
                    color: Colors.midBlue,
                  }}
                  buttonStyle={{
                    borderColor: Colors.darkBlue,
                    borderWidth: 1,
                    paddingVertical: 16,
                    marginTop: 10,
                    marginBottom: 20,
                  }}
                  title="Connect to Linkedin profile"
                />
                <Button
                  type="clear"
                  // onPress={handleSubmit(onSubmit)}
                  titleStyle={{
                    fontSize: 20,
                    color: Colors.midBlue,
                  }}
                  title="or click here to enter manually"
                />
              </Card>

              <View
                style={{
                  marginTop: 40,
                  marginBottom: 10,
                  paddingHorizontal: 20,
                }}>
                <Text
                  style={{
                    fontSize: 22,
                    fontWeight: 'bold',
                    color: Colors.midBlue,
                  }}>
                  Hourly rate
                </Text>
              </View>

              <Card containerStyle={{ borderRadius: 6, paddingVertical: 40 }}>
                <View style={{ flex: 1, flexDirection: 'column' }}>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      marginBottom: 10,
                    }}>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginVertical: 15,
                      }}>
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: 'bold',
                          color: Colors.midBlue,
                        }}>
                        General rate
                      </Text>
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: 'normal',
                        }}>
                        $22
                      </Text>
                    </View>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: 'bold',
                        color: Colors.midBlue,
                        marginBottom: 20,
                      }}>
                      Hourly rate by skill
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    flex: 1,
                    alignItems: 'flex-end',
                    marginTop: 10,
                  }}>
                  <TouchableOpacity>
                    <Icon
                      style={{
                        width: 40,
                        height: 40,
                        borderWidth: 1,
                        borderColor: Colors.lightGreen,
                        borderRadius: 30,
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                      size={30}
                      name="pencil"
                      type="evilicon"
                      color={Colors.lightGreen}
                      onPress={() => console.log('hello')}
                    />
                  </TouchableOpacity>
                </View>
              </Card>
            </View>
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lightGray,
  },
  body: {
    backgroundColor: 'transparent',
  },
  linearGradient: { flex: 1 },
  sectionContainer: {
    flex: 1,
    backgroundColor: Colors.lightGray,
    marginVertical: 32,
    paddingVertical: 20,
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
