import React from 'react';
import { Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { useForm } from 'react-hook-form';

import PersonalInformation from '../components/Steps/PersonalInformation';

type FormData = {
  email: string;
  password: string;
  confirmPassword: string;
};

const StepsScreen = ({ navigation }) => {
  const { control, handleSubmit, errors } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    Alert.alert('Form Data ', JSON.stringify(data));
  };

  return (
    <KeyboardAvoidingView
      style={{ flexGrow: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <PersonalInformation />
    </KeyboardAvoidingView>
  );
};

export default StepsScreen;
