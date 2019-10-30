import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { Colors } from '~/theme';

const Search = () => {
  const [filter, setFilter] = useState('');
  const { searchContainer, searchInputStyle } = styles;

  return (
    <View style={searchContainer}>
      <SafeAreaView style={{ marginBottom: 4 }}>
        <TextInput
          value={filter}
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Search..."
          onChangeText={setFilter}
          style={searchInputStyle}
          selectionColor={Colors.lightGrey}
          placeholderTextColor={Colors.lightGrey}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    zIndex: 2,
    paddingTop: 70,
    backgroundColor: Colors.black,
  },
  searchInputStyle: {
    color: Colors.lightGrey,
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 16,
    backgroundColor: Colors.darkGrey,
  },
});

export default Search;
