import React, { useState, useRef } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Colors } from '~/theme';
import { Icon } from '~/components';

const Search = () => {
  const filterRef = useRef();
  const [filter, setFilter] = useState('');
  const { searchContainer, searchInputStyle, searchContent } = styles;

  return (
    <View style={searchContainer}>
      <View style={searchContent}>
        <TextInput
          value={filter}
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Search..."
          onChangeText={setFilter}
          style={searchInputStyle}
          selectionColor={Colors.lightGrey}
          placeholderTextColor={Colors.lightGrey}
          ref={(ref) => { filterRef.current = ref; }}
        />
        <TouchableOpacity
          onPress={() => filterRef.current.blur()}
          style={{ marginRight: 10 }}
        >
          <Icon
            name="search"
            color={Colors.lightGrey}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    zIndex: 2,
    paddingVertical: 30,
    backgroundColor: Colors.black,
  },
  searchContent: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    marginHorizontal: 16,
    backgroundColor: Colors.darkGrey,
  },
  searchInputStyle: {
    flex: 1,
    color: Colors.lightGrey,
    padding: 10,
    fontSize: 16,
  },
});

export default Search;
