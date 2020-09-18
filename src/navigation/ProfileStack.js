import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Profile } from '~/screens';

const Stack = createStackNavigator();

const ProfileStack = () => (
  <Stack.Navigator initialRouteName="profile" headerMode="none">
    <Stack.Screen name="profile" component={Profile} />
  </Stack.Navigator>
);

export default ProfileStack;
