import React, { PureComponent } from 'react';
import { Alert, ActivityIndicator } from 'react-native';
import { List } from '~/components';
import { api } from '~/services';
import PopularMovieItem from './PopularMovieItem';
import { Colors } from '~/theme';

class PopularMovieList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      movies: [],
    };
  }

  componentDidMount() {
    api.get('movie/popular')
      .then(({ data: { results } }) => this.setState({ loading: false, movies: results }))
      .catch(({ message }) => {
        this.setState({ loading: false });
        Alert.alert(
          'Ocorreu um erro :(',
          message,
          [
            { text: 'Ok', onPress: () => { } },
          ],
        );
      });
  }

  render() {
    const { loading, movies } = this.state;

    if (loading) {
      return (
        <ActivityIndicator
          color={Colors.gold}
          size={30}
        />
      );
    }

    return (
      <List
        data={movies}
        title="Popular Movies"
        subtitle="Most popular movies in the world"
        renderItem={({ item }) => <PopularMovieItem movie={item} />}
      />
    );
  }
}

export default PopularMovieList;
