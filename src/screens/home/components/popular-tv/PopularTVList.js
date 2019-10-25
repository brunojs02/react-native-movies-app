import React from 'react';
import PropTypes from 'prop-types';
import { withData } from '~/hocs';
import { List, Loading } from '~/components';
import PopularTVItem from './PopularTVItem';

const propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const PopularTVList = ({ data, isLoading }) => (isLoading
  ? <Loading />
  : (
    <List
      data={data}
      title="Popular TV Show"
      subtitle="Most popular tv show in the world"
      onViewAllPress={() => {}}
      renderItem={({ item }) => <PopularTVItem tvshow={item} />}
    />
  )
);

PopularTVList.propTypes = propTypes;

export default withData(PopularTVList, 'tv/popular');
