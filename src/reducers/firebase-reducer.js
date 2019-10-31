import { FIREBASE_SET_CONFIG } from '~/actions/firebase-actions/types';

const INITIAL_STATE = {
  remoteConfig: {},
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case FIREBASE_SET_CONFIG:
      return {
        ...state,
        remoteConfig: payload,
      };
    default:
      return state;
  }
};
