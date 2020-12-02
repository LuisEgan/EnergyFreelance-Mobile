import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Experience from '../components/Steps/Experience';
import PersonalInformation from '../components/Steps/PersonalInformation';
import ThankYou from '../components/Steps/ThankYou';
import WorkInformation from '../components/Steps/Workinformation';
import screens from '../constants/screens';

const StepPagesStack = createStackNavigator();

const StepPagesNavigator = () => (
  <StepPagesStack.Navigator
    initialRouteName={screens.steps.PersonalInformation}
    headerMode={'none'}>
    <StepPagesStack.Screen
      name={screens.steps.PersonalInformation}
      component={PersonalInformation}
      options={{ title: 'Personal Information' }}
    />
    <StepPagesStack.Screen
      name={screens.steps.WorkInformation}
      component={WorkInformation}
      options={{ title: 'Work Information' }}
    />
    <StepPagesStack.Screen
      name={screens.steps.Experience}
      component={Experience}
      options={{ title: 'Experience' }}
    />
    <StepPagesStack.Screen
      name={screens.steps.ThankYou}
      component={ThankYou}
      options={{ title: 'Thank You' }}
    />
  </StepPagesStack.Navigator>
);

export default StepPagesNavigator;
