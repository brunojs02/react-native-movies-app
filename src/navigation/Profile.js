import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Colors } from '~/theme';
import { HeaderTitle } from '~/components';
import { Profile } from '~/screens';

const stack = createStackNavigator({
  settings: {
    screen: Profile,
    navigationOptions: () => ({
      headerTitle: <HeaderTitle title="Profile" />,
    }),
  },
}, {
  initialRouteName: 'settings',
  defaultNavigationOptions: () => ({
    headerStyle: {
      backgroundColor: Colors.black,
      ...Platform.select({
        ios: {
          borderBottomColor: 'transparent',
        },
        android: {
          elevation: 0,
        },
      }),
    },
    headerTintColor: Colors.white,
  }),
});

export default stack;
