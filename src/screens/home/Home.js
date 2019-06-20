import React from 'react';
import { ScrollView } from 'react-native';
import { Container } from '~/components';
import { PopularMovieList, PopularPersonList } from './components';

function Home() {
  return (
    <Container>
      <ScrollView>
        <PopularMovieList />
        <PopularPersonList />
      </ScrollView>
    </Container>
  );
}

export default Home;
