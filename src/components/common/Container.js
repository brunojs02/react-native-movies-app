import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { Colors } from '~/theme';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(
      PropTypes.node,
    ),
  ]).isRequired,
};

function Container({ children }) {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.black }}>
      <View style={{ marginHorizontal: 16 }}>
        {children}
      </View>
    </View>
  );
}

Container.propTypes = propTypes;

export default Container;
