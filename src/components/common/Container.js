import React from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import PropTypes from 'prop-types';
import { Colors } from '~/theme';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(
      PropTypes.node,
    ),
  ]).isRequired,
  transparency: PropTypes.bool,
};

const defaultProps = {
  transparency: false,
};

const Container = ({ children, transparency }) => (
  <ScrollView style={{ flex: 1, backgroundColor: !transparency ? Colors.black : 'rgba(0, 0, 0, 0.7)' }}>
    <SafeAreaView>
      <View style={{ marginHorizontal: 16, marginBottom: 20 }}>
        {children}
      </View>
    </SafeAreaView>
  </ScrollView>
);

Container.propTypes = propTypes;
Container.defaultProps = defaultProps;

export default Container;
