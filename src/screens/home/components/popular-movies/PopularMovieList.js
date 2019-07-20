import React, { PureComponent } from 'react';
import { withNavigation } from 'react-navigation';
import { api } from '~/services';
import { List, Loading } from '~/components';
import PopularMovieItem from './PopularMovieItem';

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
      .catch(() => {
        this.setState({ loading: false });
      });
  }

  render() {
    const { loading, movies } = this.state;

    if (loading) {
      return (
        <Loading />
      );
    }

    return (
      <List
        data={movies}
        title="Popular Movies"
        subtitle="Most popular movies in the world"
        onViewAllPress={() => {}}
        renderItem={({ item }) => <PopularMovieItem movie={item} />}
      />
    );
  }
}

export default withNavigation(PopularMovieList);
