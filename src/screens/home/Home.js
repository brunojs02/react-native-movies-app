import React from 'react';
import { Container } from '~/components';
import {
  Search,
  PopularTVList,
  PopularMovieList,
  PopularPersonList,
} from './components';

const Home = () => (
  <Container>
    <Search />
    <PopularMovieList />
    <PopularPersonList />
    <PopularTVList />
  </Container>
);

export default Home;
