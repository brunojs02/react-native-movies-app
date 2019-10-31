import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { Colors } from '~/theme';
import { Icon, Text, Toutchable } from '~/components';

const propTypes = {
  last: PropTypes.bool,
  right: PropTypes.node,
  onPress: PropTypes.func,
  icon: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const defaultProps = {
  last: false,
  right: null,
  onPress: null,
};

const MenuConfigItem = ({
  icon,
  last,
  right,
  onPress,
  description,
}) => (
  <>
    <View style={styles.container}>
      <Icon name={icon} />
      <Toutchable
        onPress={onPress}
        disabled={!onPress}
      >
        <Text style={styles.descriptionStyle}>{description}</Text>
      </Toutchable>
      {right}
    </View>
    <View style={[styles.separatorStyle, { marginLeft: !last ? 46 : 0 }]} />
  </>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    marginHorizontal: 16,
  },
  descriptionStyle: {
    flex: 1,
    marginLeft: 10,
  },
  separatorStyle: {
    borderBottomColor: Colors.white,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

MenuConfigItem.propTypes = propTypes;
MenuConfigItem.defaultProps = defaultProps;

export default MenuConfigItem;
