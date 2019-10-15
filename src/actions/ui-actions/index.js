import {
  UI_CHANGE_THEME,
} from './types';

export const changeTheme = theme => ({
  type: UI_CHANGE_THEME,
  payload: theme,
});
