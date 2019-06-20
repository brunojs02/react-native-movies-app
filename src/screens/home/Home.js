import React, { PureComponent } from 'react';
import { ScrollView } from 'react-native';
import { Container } from '~/components';
import { PopularMovieList } from './components';

class Home extends PureComponent {
  render() {
    return (
      <Container>
        <ScrollView>
          <PopularMovieList />
        </ScrollView>
      </Container>
    );
  }
}

export default Home;
