import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import Colors from '../../constants/colors';

const Input = (props: TextInputProps) => (
  <TextInput
    {...props}
    style={{
      backgroundColor: Colors.white,
      padding: 20,
      fontSize: 20,
      marginBottom: 20,
    }}
  />
);

export default Input;
