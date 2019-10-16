import React from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { uniqBy } from 'lodash';
import PropTypes from 'prop-types';
import { withTheme } from '~/theme';
import Text from '../Text';
import { styles } from './styles';

const propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({}),
  ),
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  renderItem: PropTypes.func.isRequired,
  onViewAllPress: PropTypes.func,
};

const defaultProps = {
  data: [],
  subtitle: null,
  onViewAllPress: null,
};

const List = ({
  data,
  title,
  theme,
  subtitle,
  renderItem,
  onViewAllPress,
}) => {
  const { container, textContainer, listContainer } = styles;

  return (
    <View style={container}>
      <View style={textContainer}>
        <View style={{ flex: 1 }}>
          <Text
            color={theme.primaryColor}
            large
          >
            {title}
          </Text>
          {subtitle && (
            <Text small>{subtitle}</Text>
          )}
        </View>
        {onViewAllPress && (
          <View>
            <TouchableOpacity
              onPress={onViewAllPress}
              style={{ paddingVertical: 5 }}
            >
              <Text small>View all</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      <FlatList
        data={uniqBy(data, 'id')}
        horizontal
        ItemSeparatorComponent={() => <View style={{ marginEnd: 20 }} />}
        keyExtractor={({ id }) => String(id)}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        style={listContainer}
      />
    </View>
  );
};

List.propTypes = propTypes;
List.defaultProps = defaultProps;

export default withTheme(List);
