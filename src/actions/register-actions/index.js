import auth from '@react-native-firebase/auth';

import {
  REGISTER_RESET_FIELDS,
  REGISTER_USER_CHANGE_NAME,
  REGISTER_USER_CHANGE_EMAIL,
  REGISTER_USER_CREATE_ACCOUNT,
  REGISTER_USER_CHANGE_PASSWORD,
  REGISTER_USER_CREATE_ACCOUNT_FAILURE,
  REGISTER_USER_CREATE_ACCOUNT_SUCCESS,
} from './types';

export const resetFields = () => ({ type: REGISTER_RESET_FIELDS });

export const changeName = name => ({ type: REGISTER_USER_CHANGE_NAME, payload: name });

export const changeEmail = email => ({ type: REGISTER_USER_CHANGE_EMAIL, payload: email });

export const changePassword = password => ({
  type: REGISTER_USER_CHANGE_PASSWORD,
  payload: password,
});

export const register = ({ navigate }) => (dispatch, getState) => {
  const { registerReducer } = getState();
  const { name, email, password } = registerReducer;

  dispatch({ type: REGISTER_USER_CREATE_ACCOUNT });
  auth().createUserWithEmailAndPassword(email, password)
    .then(async ({ user }) => {
      await user.updateProfile({ displayName: name });
      await user.sendEmailVerification();
      await auth().signOut();
      dispatch({ type: REGISTER_USER_CREATE_ACCOUNT_SUCCESS });
      navigate('auth');
    })
    .catch(({ userInfo = {} }) => {
      const { message } = userInfo;

      dispatch({ type: REGISTER_USER_CREATE_ACCOUNT_FAILURE, payload: message });
    });
};
