import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Colors } from '~/theme';
import { Icon, Container } from '~/components';
import Home from './Home';
import Profile from './Profile';

const screensWithTabBarHided = [];
const Main = createBottomTabNavigator({
  Home,
  A: Container,
  B: Container,
  C: Container,
  Profile,
},
{
  initialRouteName: 'Home',
  defaultNavigationOptions: ({ navigation: { state } }) => {
    const { routeName, routes = [] } = state;

    return {
      tabBarIcon: ({ tintColor }) => {
        let iconName;

        switch (routeName) {
          case 'Home':
            iconName = 'home';
            break;
          case 'A':
            iconName = 'search';
            break;
          case 'B':
            iconName = 'grid';
            break;
          case 'C':
            iconName = 'message-square';
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
      tabBarVisible: !routes.find(({ routeName }) => screensWithTabBarHided
        .find(screen => screen === routeName)),
    };
  },
  tabBarOptions: {
    activeTintColor: Colors.green,
    inactiveTintColor: Colors.lightGrey,
    showLabel: false,
    tabStyle: {
      backgroundColor: Colors.black,
      borderTopColor: Colors.green,
      borderTopWidth: StyleSheet.hairlineWidth,
    },
    style: {
      backgroundColor: Colors.black,
    },
    keyboardHidesTabBar: true,
  },
});

export default Main;
