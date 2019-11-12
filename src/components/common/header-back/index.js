import React from 'react';
import { withNavigation } from 'react-navigation';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from '../Icon';

const HeaderBack = ({ navigation: { pop } }) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={() => setTimeout(pop, 0)}>
      <Icon
        large
        name="arrow-left"
      />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 4,
    marginLeft: 16,
  },
});

export default withNavigation(HeaderBack);
