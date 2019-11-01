import auth from '@react-native-firebase/auth';
import {
  AUTH_SET_USER,
  AUTH_USER_LOGIN,
  AUTH_USER_LOGOUT,
  AUTH_USER_CHANGE_EMAIL,
  AUTH_USER_LOGIN_FAILURE,
  AUTH_USER_LOGIN_SUCCESS,
  AUTH_USER_CHANGE_PASSWORD,
} from './types';

export const setUser = user => ({ type: AUTH_SET_USER, payload: user });

export const changeEmail = email => ({ type: AUTH_USER_CHANGE_EMAIL, payload: email });

export const changePassword = password => ({ type: AUTH_USER_CHANGE_PASSWORD, payload: password });

export const login = ({ navigate }) => (dispatch, getState) => {
  const { authReducer } = getState();
  const { email, password } = authReducer;

  dispatch({ type: AUTH_USER_LOGIN });
  auth().signInWithEmailAndPassword(email, password).then(({ user }) => {
    const { displayName, uid } = user;

    dispatch({ type: AUTH_USER_LOGIN_SUCCESS, payload: { uid, email, name: displayName } });
    navigate('home');
  }).catch(() => {
    dispatch({ type: AUTH_USER_LOGIN_FAILURE });
  });
};

export const logout = ({ navigate }) => (dispatch) => {
  auth().signOut().then(() => {
    dispatch({ type: AUTH_USER_LOGOUT });
    navigate('auth');
  });
};
