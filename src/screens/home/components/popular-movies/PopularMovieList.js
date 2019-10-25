import React from 'react';
import PropTypes from 'prop-types';
import { withData } from '~/hocs';
import { List, Loading } from '~/components';
import PopularMovieItem from './PopularMovieItem';

const propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const PopularMovieList = ({ data, isLoading }) => (isLoading
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

PopularMovieList.propTypes = propTypes;

export default withData(PopularMovieList, 'movie/popular');
