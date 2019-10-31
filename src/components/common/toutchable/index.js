import React from 'react';
import PropTypes from 'prop-types';
import { Platform, TouchableOpacity, TouchableNativeFeedback } from 'react-native';

const propTypes = {
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

const defaultProps = {
  disabled: false,
  onPress: () => {},
};

const Toutchable = ({ children, onPress, disabled }) => (Platform.OS === 'android' && Platform.Version > 20
  ? (
    <TouchableNativeFeedback
      onPress={() => setTimeout(onPress, 0)}
      disabled={disabled}
    >
      {children}
    </TouchableNativeFeedback>
  )
  : (
    <TouchableOpacity
      onPress={() => setTimeout(onPress, 0)}
      disabled={disabled}
    >
      {children}
    </TouchableOpacity>
  )
);

Toutchable.propTypes = propTypes;
Toutchable.defaultProps = defaultProps;

export default Toutchable;
