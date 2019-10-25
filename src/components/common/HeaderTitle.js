import React from 'react';
import { View, Platform, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Text from './Text';
import { withTheme } from '~/theme';

const propTypes = {
  title: PropTypes.string.isRequired,
};

const HeaderTitle = ({ title, theme }) => (
  <View style={styles.headerContainer}>
    <Text
      bold
      large
      color={theme.primaryColor}
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

export default withTheme(HeaderTitle);
