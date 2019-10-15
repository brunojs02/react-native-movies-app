import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Switch } from 'react-native';
import { changeTheme } from '~/actions/ui-actions';

const Settings = () => {
  const themeKey = useSelector(({ uiReducer }) => uiReducer.theme.key);
  const dispatch = useDispatch();

  return (
    <View style={{ padding: 10, flex: 1 }}>
      <Switch
        value={themeKey === 'dark'}
        onValueChange={() => dispatch(changeTheme(themeKey === 'dark' ? 'light' : 'dark'))}
      />
    </View>
  );
};

export default Settings;
