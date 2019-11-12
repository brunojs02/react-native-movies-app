import { createStackNavigator } from 'react-navigation-stack';
import { Home, Movie, Person } from '~/screens';

export default createStackNavigator({
  home: Home,
  movie: Movie,
  person: Person,
}, {
  initialRouteName: 'home',
  defaultNavigationOptions: () => ({
    header: null,
  }),
});
