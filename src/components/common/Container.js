import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { Colors } from '~/theme';

function Container({ children }) {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.black }}>
      <SafeAreaView>
        {children}
      </SafeAreaView>
    </View>
  );
}

export default Container;
