import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { Colors } from '~/theme';
import { Icon } from '~/components';
import Home from './Home';

const Main = createBottomTabNavigator({
  Home,
  Grid: Home,
  Search: Home,
  Messages: Home,
  Profile: Home,
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;

      switch (routeName) {
        case 'Home':
          iconName = 'home';
          break;
        case 'Grid':
          iconName = 'grid';
          break;
        case 'Search':
          iconName = 'compass';
          break;
        case 'Messages':
          iconName = 'message-circle';
          break;
        case 'Profile':
          iconName = 'user';
          break;
        default:
      }

      return (
        <Icon
          name={iconName}
          color={tintColor}
        />
      );
    },
  }),
  tabBarOptions: {
    activeTintColor: Colors.gold,
    inactiveTintColor: Colors.lightGrey,
    showLabel: false,
    tabStyle: {
      backgroundColor: Colors.black,
      borderTopColor: Colors.gold,
      borderTopWidth: StyleSheet.hairlineWidth,
    },
    keyboardHidesTabBar: true,
  },
});

export default Main;
