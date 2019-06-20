import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Home } from '~/screens';
import { Colors } from '~/theme';
import { Icon } from '~/components';

const stack = createStackNavigator({
  home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: 'OMDB',
      headerRight: (
        <Icon
          name="search"
        />
      ),
    }),
  },
}, {
  initialRouteName: 'home',
  defaultNavigationOptions: () => ({
    headerStyle: {
      backgroundColor: Colors.black,
      elevation: 0,
    },
    headerTintColor: Colors.white,
  }),
});

export default stack;
