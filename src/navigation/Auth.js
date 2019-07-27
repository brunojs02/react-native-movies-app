import { createStackNavigator } from 'react-navigation';
import { Auth, Welcome } from '~/screens';

const stack = createStackNavigator({
  auth: Auth,
  welcome: Welcome,
}, {
  headerMode: 'none',
  initialRouteName: 'welcome',
});

export default stack;
