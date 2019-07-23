import React from 'react';
import { View, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Colors } from '~/theme';
import { Icon, HeaderTitle } from '~/components';
import { Home, Movie } from '~/screens';

const stack = createStackNavigator({
  home: {
    screen: Home,
    navigationOptions: () => ({
      headerTitle: <HeaderTitle title="TMDB" />,
      headerRight: (
        <View style={{ paddingRight: 16 }}>
          <Icon
            name="search"
          />
        </View>
      ),
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
}, {
  initialRouteName: 'home',
  defaultNavigationOptions: () => ({
    headerStyle: {
      backgroundColor: Colors.black,
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
