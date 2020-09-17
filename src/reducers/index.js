import { combineReducers } from 'redux';
import uiReducer from './ui-reducer';
import appReducer from './app-reducer';
import authReducer from './auth-reducer';
import firebaseReducer from './firebase-reducer';
import registerReducer from './register-reducer';

export default combineReducers({
  uiReducer,
  appReducer,
  authReducer,
  firebaseReducer,
  registerReducer,
});
