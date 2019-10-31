import React from 'react';
import { View } from 'react-native';
import { Container } from '~/components';
import {
  PopularTVList,
  PopularMovieList,
  PopularPersonList,
} from './components';

const Home = () => (
  <Container>
    <View style={{ marginTop: 20 }} />
    <PopularMovieList />
    <PopularPersonList />
    <PopularTVList />
  </Container>
);

export default Home;
