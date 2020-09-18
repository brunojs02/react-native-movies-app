import { UI_CHANGE_THEME } from '~/actions/ui-actions/types';

const theme = require('../theme/theme.json');

const INITIAL_STATE = {
  theme: theme.dark,
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case UI_CHANGE_THEME:
      return {
        ...state,
        theme: theme[payload],
      };
    default:
      return state;
  }
};
