import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { Colors } from '~/theme';

function Container({ children }) {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.black }}>
      <SafeAreaView style={{ flex: 1, marginHorizontal: 16, marginTop: 16 }}>
        {children}
      </SafeAreaView>
    </View>
  );
}

export default Container;
