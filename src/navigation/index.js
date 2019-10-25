import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Auth from './Auth';
import Main from './Main';

const nav = createSwitchNavigator({
  auth: Auth,
  main: Main,
}, {
  initialRouteName: 'auth',
});

export default createAppContainer(nav);
