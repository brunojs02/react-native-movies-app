import React from 'react';
import { StatusBar as RNStatusBar } from 'react-native';
import { withTheme } from '~/theme';

const StatusBar = ({ theme }) => (
  <RNStatusBar
    backgroundColor={theme.background}
    barStyle={theme.key === 'dark' ? 'light-content' : 'dark-content'}
  />
);

export default withTheme(StatusBar);
