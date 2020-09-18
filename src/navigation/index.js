import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import MainTab from './MainTab';
import AuthStack from './AuthStack';
import { Loading } from '~/screens';

const Navigation = () => {
  const { user } = useSelector(({ authReducer }) => authReducer);
  const { initializing } = useSelector(({ appReducer }) => appReducer);

  if (initializing) return <Loading />;

  return (
    <NavigationContainer>
      {user ? <MainTab /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Navigation;
