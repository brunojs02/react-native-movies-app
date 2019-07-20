import React from 'react';
import { Image, View } from 'react-native';
import PropTypes from 'prop-types';
import { resourceBaseUrl } from '~/../env.json';

const propTypes = {
  person: PropTypes.shape({
    profile_path: PropTypes.string.isRequired,
  }).isRequired,
};

function PopularMovieItem({ person }) {
  const { profile_path: pic } = person;

  return (
    <View style={{ width: 80 }}>
      <Image
        style={{ width: 80, height: 80, borderRadius: 50 }}
        source={{ uri: `${resourceBaseUrl}w185${pic}` }}
        resizeMode="cover"
      />
    </View>
  );
}

PopularMovieItem.propTypes = propTypes;

export default PopularMovieItem;
