import React from 'react';
import { default as Feather } from 'react-native-vector-icons/Feather';
import { Colors } from '~/theme';

function Icon({ name, color = Colors.white }) {
  return (
    <Feather
      name={name}
      size={24}
      color={color}
    />
  );
}

export default Icon;
