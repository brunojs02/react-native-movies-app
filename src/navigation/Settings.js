import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Colors } from '~/theme';
import { Icon, HeaderTitle } from '~/components';
import { Settings } from '~/screens';

const stack = createStackNavigator({
  settings: {
    screen: Settings,
    navigationOptions: () => ({
      headerTitle: <HeaderTitle title="Settings" />,
    }),
  },
}, {
  initialRouteName: 'settings',
  defaultNavigationOptions: () => ({
    headerStyle: {
      backgroundColor: Colors.lightGrey,
      ...Platform.select({
        android: {
          elevation: 0,
        },
      }),
    },
    headerTintColor: Colors.white,
    headerBackImage: <Icon name="arrow-left" />,
  }),
});

export default stack;
