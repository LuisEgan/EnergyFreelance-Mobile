import React, { useState } from 'react';
import { View } from 'react-native';

import Colors from '../../constants/colors';

const Step = ({ children }) => {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.midLightGray }}>
      {children && children}
    </View>
  );
};

export default Step;
