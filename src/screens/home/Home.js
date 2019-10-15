import React from 'react';
import { ScrollView } from 'react-native';
import { Container } from '~/components';
import { PopularTVList, PopularMovieList, PopularPersonList } from './components';

const Home = () => (
  <Container>
    <ScrollView>
      <PopularMovieList />
      <PopularPersonList />
      <PopularTVList />
    </ScrollView>
  </Container>
);

export default Home;
