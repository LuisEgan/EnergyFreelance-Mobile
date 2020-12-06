import React, { useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform } from 'react-native';

import PersonalInformation from '../components/Steps/PersonalInformation';
import WorkInformation from '../components/Steps/Workinformation';

type FormData = {
  email: string;
  password: string;
  confirmPassword: string;
};

const StepsScreen = ({ navigation }) => {
  const [step, setStep] = useState(1);
  // const { control, handleSubmit, errors } = useForm<FormData>();

  // const onSubmit = (data: FormData) => {
  //   Alert.alert('Form Data ', JSON.stringify(data));
  // };

  const stepToRender = () => {
    switch (step) {
      case 1:
        return <PersonalInformation />;

      case 2:
        return <WorkInformation />;
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flexGrow: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      {stepToRender()}
    </KeyboardAvoidingView>
  );
};

export default StepsScreen;
