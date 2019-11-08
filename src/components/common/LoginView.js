import React from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { Colors } from '~/theme';
import Text from './Text';

const propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(
      PropTypes.node,
    ),
  ]).isRequired,
};

const LoginView = ({ title, children }) => {
  const { container, content, titleContainer } = styles;

  return (
    <SafeAreaView style={container}>
      <View style={titleContainer}>
        <Text
          bold
          extraLarge
          color={Colors.white}
        >
          {title}
        </Text>
      </View>
      <View style={content}>
        {children}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: Colors.black,
  },
  titleContainer: {
    marginTop: 20,
    marginLeft: 16,
    paddingVertical: 8,
  },
  content: {
    flex: 1,
    marginHorizontal: 8,
  },
});

LoginView.propTypes = propTypes;

export default withNavigation(LoginView);
