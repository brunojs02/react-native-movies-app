import React, { PureComponent } from 'react';
import { TextInput, View } from 'react-native';
import { Colors } from '~/theme';
import { Icon } from '~/components';
import { styles } from './styles';

class Search extends PureComponent {
  render() {
    const { container, input } = styles;

    return (
      <View style={container}>
        <TextInput
          placeholder="Search"
          placeholderTextColor={Colors.lightGrey}
          style={input}
        />
        <Icon
          name="search"
          color={Colors.lightGrey}
        />
      </View>
    );
  }
}

export default Search;
