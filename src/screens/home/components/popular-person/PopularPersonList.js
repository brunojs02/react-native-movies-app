import React from 'react';
import { useFetch } from '~/hooks';
import { List, Loading, Person } from '~/components';

const PopularPersonList = () => {
  const { result, loading } = useFetch({ path: 'person/popular' });

  return (loading
    ? <Loading />
    : (
      <List
        data={result}
        title="Popular Persons"
        subtitle="Most popular persons"
        onViewAllPress={() => {}}
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
