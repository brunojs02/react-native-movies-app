import React from 'react';
import { Text as RNText } from 'react-native';
import PropTypes from 'prop-types';
import { Colors } from '~/theme';

const propTypes = {
  bold: PropTypes.bool,
  large: PropTypes.bool,
  small: PropTypes.bool,
  color: PropTypes.string,
  extraLarge: PropTypes.bool,
  style: PropTypes.shape({}),
  children: PropTypes.string.isRequired,
};

const defaultProps = {
  bold: false,
  style: null,
  large: false,
  small: false,
  extraLarge: false,
  color: Colors.lightGrey,
};

const Text = ({
  bold,
  color,
  large,
  small,
  style,
  children,
  extraLarge,
  ...props
}) => {
  const textStyle = [{ color, fontSize: 18 }];

  if (small) {
    textStyle.push({ fontSize: 16 });
  } else if (large) {
    textStyle.push({ fontSize: 22 });
  } else if (extraLarge) {
    textStyle.push({ fontSize: 30 });
  }
  if (bold) {
    textStyle.push({ fontWeight: 'bold' });
  }

  return (
    <RNText
      {...props}
      style={[textStyle, style]}
    >
      {children}
    </RNText>
  );
};

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;

export default Text;
