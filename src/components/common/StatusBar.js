import React from 'react';
import { StatusBar as RNStatusBar } from 'react-native';
import { Colors } from '~/theme';

function StatusBar() {
  return (
    <RNStatusBar
      barStyle="light-content"
      backgroundColor={Colors.black}
    />
  );
}

export default StatusBar;
