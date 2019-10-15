import React from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Text } from '~/components';
import { themoviedb } from '~/../env.json';

const propTypes = {
  tvshow: PropTypes.shape({
    name: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
  }).isRequired,
};

function PopularTVItem({ tvshow }) {
  const { name, poster_path: pic } = tvshow;

  return (
    <View style={{ width: 130 }}>
      <TouchableOpacity onPress={() => {}}>
        <Image
          style={{ width: 120, height: 170, borderRadius: 5 }}
          source={{ uri: `${themoviedb.resourceUrl}w342${pic}` }}
          resizeMode="stretch"
        />
        <View style={{ paddingHorizontal: 5, alignItems: 'center', marginTop: 8 }}>
          <Text
            small
            bold
            numberOfLines={1}
          >
            {name}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

PopularTVItem.propTypes = propTypes;

export default PopularTVItem;
