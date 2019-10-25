import React from 'react';
import PropTypes from 'prop-types';
import { withData } from '~/hocs';
import { List, Loading, Person } from '~/components';

const propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const PopularPersonList = ({ data, isLoading }) => (isLoading
  ? <Loading />
  : (
    <List
      data={data}
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

PopularPersonList.propTypes = propTypes;

export default withData(PopularPersonList, 'person/popular');
