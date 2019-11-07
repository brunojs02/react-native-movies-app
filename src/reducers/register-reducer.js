import {
  REGISTER_USER_CHANGE_NAME,
  REGISTER_USER_CHANGE_EMAIL,
  REGISTER_USER_CREATE_ACCOUNT,
  REGISTER_USER_CHANGE_PASSWORD,
  REGISTER_USER_CREATE_ACCOUNT_FAILURE,
  REGISTER_USER_CREATE_ACCOUNT_SUCCESS,
} from '~/actions/register-actions/types';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
  loading: false,
  errorMessage: '',
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case REGISTER_USER_CHANGE_NAME:
      return {
        ...state,
        name: payload,
        errorMessage: '',
      };
    case REGISTER_USER_CHANGE_EMAIL:
      return {
        ...state,
        email: payload,
        errorMessage: '',
      };
    case REGISTER_USER_CHANGE_PASSWORD:
      return {
        ...state,
        errorMessage: '',
        password: payload,
      };
    case REGISTER_USER_CREATE_ACCOUNT:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_USER_CREATE_ACCOUNT_SUCCESS:
      return {
        ...INITIAL_STATE,
      };
    case REGISTER_USER_CREATE_ACCOUNT_FAILURE:
      return {
        ...state,
        password: '',
        loading: false,
        errorMessage: payload,
      };
    default:
      return state;
  }
};
