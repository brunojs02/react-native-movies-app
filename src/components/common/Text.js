import React from 'react';
import { Text as RNText } from 'react-native';
import PropTypes from 'prop-types';
import { Colors } from '~/theme';

const propTypes = {
  bold: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(
      PropTypes.node,
    ),
  ]).isRequired,
  color: PropTypes.string,
  large: PropTypes.bool,
  small: PropTypes.bool,
};

const defaultProps = {
  bold: false,
  color: Colors.lightGrey,
  large: false,
  small: false,
};

function Text({
  bold, children, color, large, small, ...props
}) {
  const style = [{ color, fontSize: 18 }];

  if (small) {
    style.push({ fontSize: 14 });
  } else if (large) {
    style.push({ fontSize: 26 });
  }
  if (bold) {
    style.push({ fontWeight: 'bold' });
  }

  return (
    <RNText
      style={style}
      {...props}
    >
      {children}
    </RNText>
  );
}

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;

export default Text;
