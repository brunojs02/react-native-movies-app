import React from 'react';
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';
import { Colors } from '~/theme';
import Text from './Text';

const propTypes = {
  loading: PropTypes.bool,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  tintColor: PropTypes.string,
  transparent: PropTypes.bool,
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

const defaultProps = {
  loading: false,
  disabled: false,
  transparent: false,
  color: Colors.green,
  tintColor: Colors.black,
};

const Button = ({
  text,
  color,
  loading,
  onPress,
  disabled,
  tintColor,
  transparent,
}) => {
  const { container } = styles;
  const buttonContainerStyle = [container];

  if (disabled || loading) {
    buttonContainerStyle.push({ backgroundColor: Colors.lightGrey });
  } else if (!transparent) {
    buttonContainerStyle.push({ backgroundColor: color });
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      style={buttonContainerStyle}
      disabled={disabled || loading}
    >
      {loading ? (
        <ActivityIndicator
          color={Colors.white}
          size={Platform.OS === 'ios' ? 'large' : 24}
          style={{ marginVertical: Platform.OS === 'ios' ? 10 : 0 }}
        />
      ) : (
        <Text bold color={tintColor} style={{ textAlign: 'center' }}>
          {text}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 8,
    marginVertical: 2,
    borderRadius: 6,
  },
});

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
