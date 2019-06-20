import React from 'react';
import PropTypes from 'prop-types';
import { default as Feather } from 'react-native-vector-icons/Feather';
import { Colors } from '~/theme';

const propTypes = {
  color: PropTypes.string,
  name: PropTypes.string.isRequired,
};

const defaultProps = {
  color: Colors.white,
};

function Icon({ name, color }) {
  return (
    <Feather
      name={name}
      size={24}
      color={color}
    />
  );
}

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;
