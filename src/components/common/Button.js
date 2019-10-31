import React from 'react';
import {
  View,
  Platform,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  TouchableWithoutFeedback,
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
  let buttonContent;

  if (loading) {
    buttonContent = (
      <ActivityIndicator
        color={Colors.white}
        style={{ marginVertical: Platform.OS === 'ios' ? 10 : 0 }}
        size={Platform.OS === 'ios' ? 1 : 24}
      />
    );
  } else {
    buttonContent = (
      <Text
        bold
        color={tintColor}
        style={{ textAlign: 'center' }}
      >
        {text}
      </Text>
    );
  }

  if (disabled || loading) {
    buttonContainerStyle.push({ backgroundColor: Colors.lightGrey });

    return (
      <TouchableWithoutFeedback>
        <View style={buttonContainerStyle}>
          {buttonContent}
        </View>
      </TouchableWithoutFeedback>
    );
  }

  if (!transparent) {
    buttonContainerStyle.push({ backgroundColor: color });
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      style={buttonContainerStyle}
    >
      <View>
        {buttonContent}
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
