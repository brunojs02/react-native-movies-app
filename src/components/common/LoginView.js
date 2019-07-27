import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import Icon from './Icon';
import Text from './Text';
import { Colors } from '~/theme';

const propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(
      PropTypes.node,
    ),
  ]).isRequired,
};

const LoginView = ({
  title,
  children,
  navigation,
}) => {
  const { container, titleContainer } = styles;
  const { pop } = navigation;

  return (
    <SafeAreaView style={container}>
      <View>
        <TouchableOpacity onPress={() => pop()}>
          <Icon
            name="arrow-left"
          />
        </TouchableOpacity>
      </View>
      <View style={titleContainer}>
        <Text
          bold
          extraLarge
          color={Colors.white}
        >
          {title}
        </Text>
      </View>
      {children}
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
    marginLeft: 6,
    paddingVertical: 8,
  },
});

LoginView.propTypes = propTypes;

export default withNavigation(LoginView);
