import React from 'react';
import { Image } from 'react-native';
import tmdbLogo from '~/assets/tmdb-logo.png';

const Logo = () => (
  <Image
    source={tmdbLogo}
    resizeMode="stretch"
    style={{ width: 140, height: 140 }}
  />
);

export default Logo;
