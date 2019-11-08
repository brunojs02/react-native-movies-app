import { createStackNavigator } from 'react-navigation-stack';
import { Colors } from '~/theme';
import { Auth, Welcome, Register } from '~/screens';

const stack = createStackNavigator({
  auth: Auth,
  welcome: {
    screen: Welcome,
    navigationOptions: {
      header: null,
    },
  },
  register: Register,
}, {
  initialRouteName: 'welcome',
  defaultNavigationOptions: {
    headerBackTitle: null,
    headerStyle: {
      borderBottomWidth: 0,
      backgroundColor: Colors.black,
    },
    headerTintColor: Colors.white,
  },
});

export default stack;
