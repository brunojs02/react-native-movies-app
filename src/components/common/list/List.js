import React from 'react';
import { FlatList, View } from 'react-native';
import Text from '../Text';
import { Colors } from '~/theme';
import { styles } from './styles';

function List({
  data = [], title, subtitle, renderItem, onViewAllPress,
}) {
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
          <Text small>View all</Text>
        </View>
      </View>
      <FlatList
        data={data}
        horizontal
        ItemSeparatorComponent={() => <View style={{ marginEnd: 14 }} />}
        keyExtractor={({ id }) => id.toString()}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        style={listContainer}
      />
    </View>
  );
}

export default List;
