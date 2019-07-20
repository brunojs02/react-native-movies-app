import React from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import Text from '../Text';
import { Colors } from '~/theme';
import { styles } from './styles';

const propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({}),
  ),
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  renderItem: PropTypes.func.isRequired,
  onViewAllPress: PropTypes.func.isRequired,
};

const defaultProps = {
  data: [],
};

const List = ({
  data, title, subtitle, renderItem, onViewAllPress,
}) => {
  const { container, textContainer, listContainer } = styles;

  return (
    <View style={container}>
      <View style={textContainer}>
        <View style={{ flex: 1 }}>
          <Text
            bold
            color={Colors.white}
            large
          >
            {title}
          </Text>
          <Text small>{subtitle}</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={onViewAllPress}
            style={{ paddingVertical: 5 }}
          >
            <Text small>View all</Text>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={data}
        horizontal
        ItemSeparatorComponent={() => <View style={{ marginEnd: 20 }} />}
        keyExtractor={({ id }) => id.toString()}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        style={listContainer}
      />
    </View>
  );
}

List.propTypes = propTypes;
List.defaultProps = defaultProps;

export default List;
