import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Colors } from '~/theme';
import { themoviedb } from '~/../env.json';
import Text from './Text';

const defaultProfilePic = require('~/assets/person.png');

const propTypes = {
  name: PropTypes.string.isRequired,
  character: PropTypes.string,
  profilePath: PropTypes.string,
};

const defaultProps = {
  character: null,
  profilePath: null,
};

const Person = ({ name, character, profilePath }) => {
  const source = profilePath ? { uri: `${themoviedb.resourceUrl}w185${profilePath}` } : defaultProfilePic;

  return (
    <View style={{ width: 80 }}>
      <Image
        style={styles.imageStyle}
        source={source}
        resizeMode="cover"
      />
      <View style={{ alignItems: 'center' }}>
        <Text
          small
          color={Colors.white}
          numberOfLines={1}
        >
          {name}
        </Text>
        {!!character && (
          <Text
            small
            numberOfLines={1}
          >
            {character}
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginBottom: 5,
  },
});

Person.propTypes = propTypes;
Person.defaultProps = defaultProps;

export default Person;
