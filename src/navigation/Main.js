import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { Home } from '~/screens';
import { Colors } from '~/theme';
import { Icon } from '~/components';

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
    activeTintColor: Colors.brown,
    inactiveTintColor: Colors.lightPink,
    showLabel: false,
    tabStyle: {
      backgroundColor: Colors.black,
    },
  },
});

export default Main;
