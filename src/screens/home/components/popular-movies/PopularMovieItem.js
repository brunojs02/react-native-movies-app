import React from 'react';
import { Image, View } from 'react-native';
import { Text } from '~/components';

function PopularMovieItem({ movie }) {
  const { title, poster_path, release_date } = movie;

  return (
    <View style={{ width: 130 }}>
      <Image
        style={{ width: 120, height: 170 }}
        source={{ uri: `http://image.tmdb.org/t/p/w185${poster_path}` }}
        resizeMode="stretch"
      />
      <View style={{ paddingHorizontal: 5, alignItems: 'center', marginTop: 8 }}>
        <Text
          small
          numberOfLines={1}
        >
          {title}
        </Text>
        <Text small>{release_date}</Text>
      </View>
    </View>
  );
}

export default PopularMovieItem;
