import React from 'react';
import { Image } from 'react-native';
import pizza from '../../assets/pizza.png';

export default function LogoTitle() {
  return (
    <Image
      style={{
        width: 40,
        height: 40,
        marginRight: 25,
        marginLeft: 15
      }}
      source={pizza}
    />
  );
}
