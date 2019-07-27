import React from 'react';
import { Image } from 'react-native';
import tmdbLogo from '~/assets/tmdb-logo.png';

const Logo = () => (
  <Image
    source={tmdbLogo}
    resizeMode="stretch"
    style={{ width: 100, height: 100 }}
  />
);

export default Logo;
