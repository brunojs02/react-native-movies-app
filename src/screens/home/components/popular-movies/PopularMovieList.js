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
        onViewAllPress={() => {}}
        keyExtractor={({ id }) => String(id)}
        subtitle="Most popular movies in the world"
        renderItem={({ item }) => <PopularMovieItem movie={item} />}
      />
    )
  );
};

export default PopularMovieList;
