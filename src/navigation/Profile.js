import { createStackNavigator } from 'react-navigation-stack';
import { Profile } from '~/screens';

const stack = createStackNavigator({
  profile: Profile,
}, {
  initialRouteName: 'profile',
  defaultNavigationOptions: () => ({
    header: null,
  }),
});

export default stack;
