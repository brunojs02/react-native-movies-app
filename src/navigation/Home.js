import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { Colors } from '~/theme';
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
    navigationOptions: ({ navigation }) => {
      const { state } = navigation;
      const { params = {} } = state;
      const {
        navOptions = {
          headerStyle: {
            backgroundColor: 'rgba(0, 0, 0, 0)',
          },
        },
      } = params;

      return {
        ...navOptions,
        headerTransparent: true,
      };
    },
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
    headerLeftContainerStyle: {
      ...Platform.select({
        ios: {
          marginLeft: 8,
        },
      }),
    },
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
