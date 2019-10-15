import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { withNavigation } from 'react-navigation';
import { api } from '~/services';
import { List, Loading } from '~/components';
import PopularTVItem from './PopularTVItem';

class PopularTVList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      movies: [],
    };
  }

  componentDidMount() {
    api.get('tv/popular')
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
      <View style={{ marginVertical: 20 }}>
        <List
          data={movies}
          title="Popular Tv Show"
          subtitle="Most popular tv show in the world"
          onViewAllPress={() => {}}
          renderItem={({ item }) => <PopularTVItem tvshow={item} />}
        />
      </View>
    );
  }
}

export default withNavigation(PopularTVList);
