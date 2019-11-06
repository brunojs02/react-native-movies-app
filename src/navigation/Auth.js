import { createStackNavigator } from 'react-navigation-stack';
import { Auth, Welcome, Register } from '~/screens';

const stack = createStackNavigator({
  auth: Auth,
  welcome: Welcome,
  register: Register,
}, {
  headerMode: 'none',
  initialRouteName: 'welcome',
});

export default stack;
