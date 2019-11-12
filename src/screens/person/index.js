import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Colors } from '~/theme';
import { Container, Loading, HeaderBack } from '~/components';
import { useFetch, useRemoteConfig } from '~/hooks';
import { THEMOVIEDB_RESOURCE_URL } from '~/constants/firebase-constants';

const Person = ({ navigation: { getParam } }) => {
  const resourceUrl = useRemoteConfig({ key: THEMOVIEDB_RESOURCE_URL });
  const personId = getParam('id', null);
  const { response, loading } = useFetch({ path: `/person/${personId}` });
  const { profile_path: pic } = response || {};

  return (loading
    ? (
      <View style={styles.loadingContainer}>
        <Loading />
      </View>
    )
    : (
      <ImageBackground
        source={{ uri: `${resourceUrl}original${pic}` }}
        style={styles.backgroundContainer}
      >
        <Container transparency>
          <HeaderBack />
          <View />
        </Container>
      </ImageBackground>
    )
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    backgroundColor: Colors.black,
    width: '100%',
    height: '100%',
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.black,
  },
});

export default Person;
