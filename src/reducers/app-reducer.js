import * as AppTypes from '~/actions/app-actions/types';

const INITIAL_STATE = { initializing: true };

export default (state = INITIAL_STATE, { type }) => {
  switch (type) {
    case AppTypes.APP_INIT_FAILURE:
    case AppTypes.APP_INIT_SUCCESS:
      return { ...state, initializing: false };
    default:
      return state;
  }
};
