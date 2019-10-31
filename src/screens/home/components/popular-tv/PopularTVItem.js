import React from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Text } from '~/components';
import { useRemoteConfig } from '~/hooks';
import { THEMOVIEDB_RESOURCE_URL } from '~/constants/firebase-constants';

const propTypes = {
  tvshow: PropTypes.shape({
    name: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
  }).isRequired,
};

function PopularTVItem({ tvshow }) {
  const { name, poster_path: pic } = tvshow;
  const resourceUrl = useRemoteConfig({ key: THEMOVIEDB_RESOURCE_URL });

  return (
    <View style={{ width: 130 }}>
      <TouchableOpacity onPress={() => {}}>
        <Image
          style={{ width: 120, height: 170, borderRadius: 5 }}
          source={{ uri: `${resourceUrl}w342${pic}` }}
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
