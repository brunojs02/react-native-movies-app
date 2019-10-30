import React from 'react';
import { View } from 'react-native';
import { Container } from '~/components';
import {
  Search,
  PopularTVList,
  PopularMovieList,
  PopularPersonList,
} from './components';

const Home = () => (
  <>
    <Search />
    <Container>
      <View style={{ paddingVertical: 10 }} />
      <PopularMovieList />
      <PopularPersonList />
      <PopularTVList />
    </Container>
  </>
);

export default Home;
