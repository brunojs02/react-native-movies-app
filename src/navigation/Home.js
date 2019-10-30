import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Colors } from '~/theme';
import { Icon } from '~/components';
import { Home, Movie, Person } from '~/screens';

export default createStackNavigator({
  home: {
    screen: Home,
    navigationOptions: () => ({
      header: null,
    }),
  },
  movie: {
    screen: Movie,
    navigationOptions: () => ({
      headerTransparent: true,
      headerStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
      },
    }),
  },
  person: {
    screen: Person,
    navigationOptions: () => ({
      headerTransparent: true,
      headerStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
      },
    }),
  },
}, {
  initialRouteName: 'home',
  defaultNavigationOptions: () => ({
    headerBackTitle: null,
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
    headerBackImage: <Icon name="arrow-left" color={Colors.white} />,
  }),
});
