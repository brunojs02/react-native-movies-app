import React from 'react';
import { Image, View } from 'react-native';
import PropTypes from 'prop-types';
import { Text } from '~/components';
import { resourceBaseUrl } from '~/../env.json';

const propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
  }).isRequired,
};

function PopularMovieItem({ movie }) {
  const { title, poster_path: pic, release_date: date } = movie;

  return (
    <View style={{ width: 130 }}>
      <Image
        style={{ width: 120, height: 170 }}
        source={{ uri: `${resourceBaseUrl}w185${pic}` }}
        resizeMode="stretch"
      />
      <View style={{ paddingHorizontal: 5, alignItems: 'center', marginTop: 8 }}>
        <Text
          small
          numberOfLines={1}
        >
          {title}
        </Text>
        <Text small>{date}</Text>
      </View>
    </View>
  );
}

PopularMovieItem.propTypes = propTypes;

export default PopularMovieItem;
