import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Nav from './navigation';
import { StatusBar } from './components';

const App = () => (
  <Provider store={store}>
    <StatusBar />
    <Nav />
  </Provider>
);

export default App;
