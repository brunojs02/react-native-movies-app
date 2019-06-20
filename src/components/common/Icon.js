import React from 'react';
import { default as Feather } from 'react-native-vector-icons/Feather';

function Icon({ name, color }) {
  return (
    <Feather
      name={name}
      size={24}
      color={color}
    />
  );
}

export default Icon;
