import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Switch } from 'react-native';
import { Text, Icon } from '~/components';
import { changeTheme } from '~/actions/ui-actions';
import { Colors } from '~/theme';

const Settings = () => {
  const theme = useSelector(({ uiReducer }) => uiReducer.theme);
  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 16 }}>
        <View style={{ width: 60, height: 60, backgroundColor: theme.background, borderRadius: 30 }} />
        <View style={{ flex: 1, marginLeft: 16 }}>
          <Text color={Colors.black} large>Bruno Santos</Text>
        </View>
      </View>
      <View style={{ borderTopWidth: 1 }}>
        <View>
          <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 14 }}>
            <View style={{ flex: 1, marginLeft: 16 }}>
              <Text
                bold
                color={Colors.black}
              >
                Theme
              </Text>
            </View>
            <View style={{ marginRight: 16 }}>
              <Switch
                thumbColor={Colors.black}
                value={theme.key === 'dark'}
                onValueChange={() => dispatch(changeTheme(theme.key === 'dark' ? 'light' : 'dark'))}
              />
            </View>
          </View>
          <View style={{ borderBottomWidth: 1, marginLeft: 16 }} />
        </View>
        <View>
          <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 14 }}>
            <View style={{ flex: 1, marginLeft: 16 }}>
              <Text
                bold
                color={Colors.black}
              >
                Logout
              </Text>
            </View>
            <View style={{ marginRight: 16 }}>
              <Icon name="log-out" color={Colors.black} />
            </View>
          </View>
          <View style={{ borderBottomWidth: 1 }} />
        </View>
      </View>
    </View>
  );
};

export default Settings;
