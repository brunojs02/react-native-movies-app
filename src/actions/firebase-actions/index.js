import auth from '@react-native-firebase/auth';
import remoteConfig from '@react-native-firebase/remote-config';
import { setUser } from '~/actions/auth-actions';
import * as AppTypes from '~/actions/app-actions/types';
import { FIREBASE_SET_CONFIG } from './types';

const getAthenticatedUser = () => auth().currentUser;

export const initFirebase = () => async (dispatch) => {
  dispatch({ type: AppTypes.APP_INIT });
  setRemoteConfigValues(dispatch)
    .then(() => {
      const user = getAthenticatedUser();

      if (user) {
        dispatch(setUser(getAthenticatedUser()));
      }

      dispatch({ type: AppTypes.APP_INIT_SUCCESS });
    })
    .catch(() => dispatch({ type: AppTypes.APP_INIT_FAILURE }));
};

const setRemoteConfigValues = async (dispatch) => {
  await remoteConfig().fetchAndActivate();
  const firebaseConfigs = await remoteConfig().getAll();
  const configs = Object.entries(
    firebaseConfigs,
  ).map(([key, { _value: value }]) => ({ key, value }));

  dispatch({ type: FIREBASE_SET_CONFIG, payload: configs });
};
