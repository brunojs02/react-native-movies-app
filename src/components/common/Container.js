import React from 'react';
import { View } from 'react-native';
import { Colors } from '~/theme';

function Container({ children }) {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.black }}>
      <View style={{ marginHorizontal: 16 }}>
        {children}
      </View>
    </View>
  );
}

export default Container;
