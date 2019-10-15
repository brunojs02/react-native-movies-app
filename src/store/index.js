import { createStore, applyMiddleware } from 'redux';
import reducers from '~/reducers';
import { loggerMiddleware } from '~/middlewares';

const store = createStore(reducers, applyMiddleware(loggerMiddleware));

export default store;
