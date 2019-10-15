import React, { createContext, useContext } from 'react';
import theme from './theme.json';

const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => (
  <ThemeContext.Provider value={{ theme: theme['dark'] }}>
    {children}
  </ThemeContext.Provider>
);

const withTheme = Component => (props) => {
  const { theme } = useContext(ThemeContext);

  return <Component {...props} theme={theme} />;
};

export {
  ThemeContextProvider as default,
  withTheme,
};
