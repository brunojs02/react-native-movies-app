import {
  AUTH_USER_LOGIN,
  AUTH_USER_LOGOUT,
  AUTH_USER_CHANGE_EMAIL,
  AUTH_USER_LOGIN_FAILURE,
  AUTH_USER_LOGIN_SUCCESS,
  AUTH_USER_CHANGE_PASSWORD,
} from '~/actions/auth-actions/types';

const INITIAL_STATE = {
  email: '',
  user: null,
  password: '',
  loading: false,
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case AUTH_USER_LOGIN:
      return {
        ...state,
        loading: true,
      };
    case AUTH_USER_LOGIN_SUCCESS:
      return {
        ...INITIAL_STATE,
        user: payload,
        loading: false,
      };
    case AUTH_USER_LOGIN_FAILURE:
      return {
        ...state,
        password: '',
        loading: false,
      };
    case AUTH_USER_LOGOUT:
      return {
        ...INITIAL_STATE,
      };
    case AUTH_USER_CHANGE_EMAIL:
      return {
        ...state,
        email: payload,
      };
    case AUTH_USER_CHANGE_PASSWORD:
      return {
        ...state,
        password: payload,
      };
    default:
      return state;
  }
};
