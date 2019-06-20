import { createStackNavigator } from 'react-navigation';
import { Home } from '~/screens';

const main = createStackNavigator({
  home: {
    screen: Home,
    navigationOptions: () => ({
      title: 'Home',
    }),
  },
});

export default main;
