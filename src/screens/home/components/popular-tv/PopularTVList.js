import React from 'react';
import { useFetch } from '~/hooks';
import { List, Loading } from '~/components';
import PopularTVItem from './PopularTVItem';

const PopularTVList = () => {
  const { response, loading } = useFetch({ path: 'tv/popular' });
  const { results: data } = response || {};

  return (loading
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
};

export default PopularTVList;
