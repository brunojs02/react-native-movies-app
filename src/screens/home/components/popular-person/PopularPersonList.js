import React from 'react';
import { useFetch } from '~/hooks';
import { List, Loading, Person } from '~/components';

const PopularPersonList = () => {
  const { response, loading } = useFetch({ path: 'person/popular' });
  const { results: data } = response || {};

  return (loading
    ? <Loading />
    : (
      <List
        data={data}
        title="Popular Persons"
        onViewAllPress={() => {}}
        subtitle="Most popular persons"
        keyExtractor={({ id }) => String(id)}
        renderItem={({ item: { id, name, profile_path: profilePath } }) => (
          <Person
            id={id}
            name={name}
            profilePath={profilePath}
          />
        )}
      />
    )
  );
};

export default PopularPersonList;
