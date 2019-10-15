import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { Colors } from '~/theme';
import { Icon } from '~/components';
import Home from './Home';
import Settings from './Settings';

const screensWithTabBarHided = [];

const Main = createBottomTabNavigator({
  Home,
  Settings,
},
{
  defaultNavigationOptions: ({ navigation: { state } }) => ({
    tabBarIcon: ({ tintColor }) => {
      const { routeName } = state;
      let iconName;

      switch (routeName) {
        case 'Home':
          iconName = 'home';
          break;
        case 'Settings':
          iconName = 'menu';
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
    tabBarVisible: !state.routes.find(({ routeName }) => screensWithTabBarHided
      .find(screen => screen === routeName)),
  }),
  tabBarOptions: {
    activeTintColor: Colors.green,
    inactiveTintColor: Colors.lightGrey,
    showLabel: false,
    tabStyle: {
      backgroundColor: Colors.black,
      borderTopColor: Colors.green,
      borderTopWidth: StyleSheet.hairlineWidth,
    },
    keyboardHidesTabBar: true,
  },
});

export default Main;
