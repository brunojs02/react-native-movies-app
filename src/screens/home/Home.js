import React, { PureComponent } from 'react';
import { Alert, ScrollView } from 'react-native';
import { Container, List } from '~/components';
import { PopularMovieItem, Search } from './components';
import { api } from '~/services';

class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    api.get('movie/popular')
      .then(({ data: { results } }) => this.setState({ movies: results }))
      .catch(({ message }) => {
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
    const { movies } = this.state;

    return (
      <Container>
        <ScrollView>
          <Search />
          <List
            data={movies}
            title="Popular Movies"
            subtitle="Most popular movies in the world"
            renderItem={({ item }) => <PopularMovieItem movie={item} />}
          />
        </ScrollView>
      </Container>
    );
  }
}

export default Home;
