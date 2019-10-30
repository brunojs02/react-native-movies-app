import React from 'react';
import { useFetch } from '~/hooks';
import { List, Loading } from '~/components';
import PopularTVItem from './PopularTVItem';

const PopularTVList = () => {
  const { result, loading } = useFetch({ path: 'tv/popular' });

  return (loading
    ? <Loading />
    : (
      <List
        data={result}
        title="Popular TV Show"
        subtitle="Most popular tv show in the world"
        onViewAllPress={() => {}}
        renderItem={({ item }) => <PopularTVItem tvshow={item} />}
      />
    )
  );
};

export default PopularTVList;
