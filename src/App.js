import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Navigation from './navigation';
import { StatusBar } from './components';

const App = () => (
  <Provider store={store}>
    <StatusBar />
    <Navigation />
  </Provider>
);

export default App;
