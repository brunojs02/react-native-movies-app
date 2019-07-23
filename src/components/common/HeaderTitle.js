import React from 'react';
import { View, Platform, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Text from './Text';
import { Colors } from '~/theme';

const propTypes = {
  title: PropTypes.string.isRequired,
};

const HeaderTitle = ({ title }) => (
  <View style={styles.headerContainer}>
    <Text
      bold
      large
      color={Colors.white}
    >
      {title}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  headerContainer: {
    ...Platform.select({
      android: {
        marginLeft: 16,
      },
    }),
  },
});

HeaderTitle.propTypes = propTypes;

export default HeaderTitle;
