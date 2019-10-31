import React from 'react';
import { useFetch } from '~/hooks';
import { List, Loading } from '~/components';
import PopularMovieItem from './PopularMovieItem';

const PopularMovieList = () => {
  const { response, loading } = useFetch({ path: 'movie/popular' });
  const { results: data } = response || {};

  return (loading
    ? <Loading />
    : (
      <List
        data={data}
        title="Popular Movies"
        subtitle="Most popular movies in the world"
        onViewAllPress={() => {}}
        renderItem={({ item }) => <PopularMovieItem movie={item} />}
      />
    )
  );
};

export default PopularMovieList;
