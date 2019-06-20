import React from 'react';
import { Text as RNText } from 'react-native';
import { Colors } from '~/theme';

function Text({
  bold, children, color, large, small, ...props
}) {
  const style = [{ color: Colors.lightGrey, fontSize: 18 }];

  if (small) {
    style.push({ fontSize: 14 });
  } else if (large) {
    style.push({ fontSize: 26 });
  }
  if (color) {
    style.push({ color });
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

export default Text;
