import auth from '@react-native-firebase/auth';
import remoteConfig from '@react-native-firebase/remote-config';
import { setUser } from '~/actions/auth-actions';
import { FIREBASE_SET_CONFIG } from './types';

const getAthenticatedUser = () => auth().currentUser;

export const initFirebase = onFinish => async (dispatch) => {
  await setRemoteConfigValues(dispatch);
  const user = getAthenticatedUser();

  if (user) {
    dispatch(setUser(getAthenticatedUser()));
  }

  onFinish(!!user);
};

const setRemoteConfigValues = async (dispatch) => {
  await remoteConfig().fetchAndActivate();
  const firebaseConfigs = await remoteConfig().getAll();
  const configs = Object.entries(firebaseConfigs).map(([key, { _value: value }]) => ({ key, value }));

  dispatch({ type: FIREBASE_SET_CONFIG, payload: configs });
};
