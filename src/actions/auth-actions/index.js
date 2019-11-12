import auth from '@react-native-firebase/auth';
import {
  AUTH_SET_USER,
  AUTH_USER_LOGIN,
  AUTH_USER_LOGOUT,
  AUTH_RESET_FIELDS,
  AUTH_USER_CHANGE_EMAIL,
  AUTH_USER_LOGIN_FAILURE,
  AUTH_USER_LOGIN_SUCCESS,
  AUTH_USER_CHANGE_PASSWORD,
} from './types';

export const resetFields = () => ({ type: AUTH_RESET_FIELDS });

export const setUser = user => ({ type: AUTH_SET_USER, payload: getUserMinified(user) });

export const changeEmail = email => ({ type: AUTH_USER_CHANGE_EMAIL, payload: email });

export const changePassword = password => ({ type: AUTH_USER_CHANGE_PASSWORD, payload: password });

export const login = ({ navigate }) => (dispatch, getState) => {
  const { authReducer } = getState();
  const { email, password } = authReducer;

  dispatch({ type: AUTH_USER_LOGIN });
  auth().signInWithEmailAndPassword(email, password).then(({ user }) => {
    const userMinified = getUserMinified(user);

    if (!userMinified.activated) {
      const error = { code: 'auth/account-not-activated' };

      throw error;
    }

    dispatch({ type: AUTH_USER_LOGIN_SUCCESS, payload: userMinified });
    navigate('home');
  }).catch(({ code }) => {
    let errorMessage = '';

    switch (code) {
      case 'auth/user-not-found':
        errorMessage = 'User not found.';
        break;
      case 'auth/wrong-password':
        errorMessage = 'Email and/or password are wrong.';
        break;
      case 'auth/invalid-email':
        errorMessage = 'Invalid Email.';
        break;
      case 'auth/account-not-activated':
        errorMessage = 'Verify your email to activate your account.';
        break;
      default:
        errorMessage = 'An error occurred, try again.';
    }

    dispatch({ type: AUTH_USER_LOGIN_FAILURE, payload: errorMessage });
  });
};

export const logout = ({ navigate }) => (dispatch) => {
  auth().signOut().then(() => {
    dispatch({ type: AUTH_USER_LOGOUT });
    navigate('auth');
  });
};

const getUserMinified = (user) => {
  const {
    uid,
    email,
    displayName: name,
    emailVerified: activated,
  } = user;

  return {
    uid,
    name,
    email,
    activated,
  };
};
