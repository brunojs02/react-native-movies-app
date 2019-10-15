import React from 'react';
import { useSelector } from 'react-redux';
import Colors from './Colors';

const withTheme = Component => (props) => {
  const { theme } = useSelector(({ uiReducer }) => uiReducer);

  return <Component {...props} theme={theme} />;
};

export {
  Colors,
  withTheme,
};
