import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Nav from './navigation';
import { StatusBar } from './components';
import ThemeContextProvider from './theme/provider';

const App = () => (
  <Provider store={store}>
    <StatusBar />
    <ThemeContextProvider>
      <Nav />
    </ThemeContextProvider>
  </Provider>
);

export default App;
