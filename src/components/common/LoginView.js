import React from 'react';
import {
  View,
  Platform,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
} from 'react-native';
import PropTypes from 'prop-types';
import { Header } from 'react-navigation-stack';
import { withNavigation } from 'react-navigation';
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
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        {...Platform.select({
          ios: {
            enabled: true,
            behavior: 'padding',
            keyboardVerticalOffset: Header.HEIGHT + 20,
          },
        })}
      >
        <View style={titleContainer}>
          <Text
            bold
            extraLarge
            color={Colors.white}
          >
            {title}
          </Text>
        </View>
        <ScrollView
          style={{ marginHorizontal: 8 }}
          contentContainerStyle={content}
          keyboardShouldPersistTaps="handled"
        >
          {children}
        </ScrollView>
      </KeyboardAvoidingView>
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
    flexGrow: 1,
    justifyContent: 'center',
  },
});

LoginView.propTypes = propTypes;

export default withNavigation(LoginView);
