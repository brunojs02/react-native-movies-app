import auth from '@react-native-firebase/auth';
import remoteConfig from '@react-native-firebase/remote-config';
import { FIREBASE_SET_CONFIG } from './types';

export const initFirebase = onFinish => async (dispatch) => {
  await setRemoteConfigValues(dispatch);
  onFinish(isAuthenticated());
};

const isAuthenticated = () => !!auth().currentUser;

const setRemoteConfigValues = async (dispatch) => {
  await remoteConfig().fetchAndActivate();
  const values = await remoteConfig().getAll();
  const config = Object.keys(values).map(key => ({ key, value: values[key].value }));

  dispatch({ type: FIREBASE_SET_CONFIG, payload: config });
};
