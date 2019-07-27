import React from 'react';
import { Platform, View, ActivityIndicator } from 'react-native';
import { Colors } from '~/theme';

const Loading = () => (
  <View style={{ marginVertical: 5 }}>
    <ActivityIndicator
      color={Colors.green}
      size={Platform.OS === 'ios' ? 1 : 30}
    />
  </View>
);

export default Loading;
