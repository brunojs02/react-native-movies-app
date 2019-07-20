import React from 'react';
import { StatusBar as RNStatusBar } from 'react-native';
import { Colors } from '~/theme';

const StatusBar = () => (
  <RNStatusBar
    barStyle="light-content"
    backgroundColor={Colors.black}
  />
);

export default StatusBar;
