import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { Colors } from '~/theme';
import Text from './Text';

const propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  tintColor: PropTypes.string,
  transparent: PropTypes.bool,
};

const defaultProps = {
  color: Colors.green,
  tintColor: Colors.white,
  transparent: false,
};

const Button = ({
  text,
  color,
  onPress,
  tintColor,
  transparent,
}) => {
  const { container } = styles;
  const buttonContainerStyle = [container];

  if (!transparent) {
    buttonContainerStyle.push({ backgroundColor: color });
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      style={buttonContainerStyle}
    >
      <View>
        <Text
          bold
          color={tintColor}
          style={{ textAlign: 'center' }}
        >
          {text}
        </Text>
      </View>
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
