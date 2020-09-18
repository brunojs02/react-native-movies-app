import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Text } from '~/components';
import { useRemoteConfig } from '~/hooks';
import { THEMOVIEDB_RESOURCE_URL } from '~/constants/firebase-constants';

const propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
  }).isRequired,
};

function PopularMovieItem({ movie }) {
  const { navigate } = useNavigation();
  const { id, title, poster_path: pic, release_date: date } = movie;
  const resourceUrl = useRemoteConfig({ key: THEMOVIEDB_RESOURCE_URL });

  return (
    <View style={{ width: 130 }}>
      <TouchableOpacity onPress={() => navigate('movie', { id })}>
        <Image
          style={{ width: 120, height: 170, borderRadius: 5 }}
          source={{ uri: `${resourceUrl}w342${pic}` }}
          resizeMode="stretch"
        />
        <View
          style={{ paddingHorizontal: 5, alignItems: 'center', marginTop: 8 }}
        >
          <Text small bold numberOfLines={1}>
            {title}
          </Text>
          <Text small>{date.split('-')[0]}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

PopularMovieItem.propTypes = propTypes;

export default PopularMovieItem;
