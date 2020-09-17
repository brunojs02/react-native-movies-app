import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { Colors } from '~/theme';
import { Logo, Loading } from '~/components';
import { initFirebase } from '~/actions/firebase-actions';

const LoadingScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initFirebase());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.loadingContainer}>
        <Loading />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.black,
  },
  loadingContainer: {
    marginTop: 20,
  },
});

export default LoadingScreen;
