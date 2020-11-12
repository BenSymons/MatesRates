import { View } from 'react-native';
import React from 'react';
import { Image } from 'react-native';
import pizza from '../../assets/pizza.png';
export default function Loader() {
  return (
    <View
      style={{
        backgroundColor: '#5C374C',
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Image
        style={{
          width: 400,
          height: 400,
          marginRight: 25,
          marginLeft: 15
        }}
        source={pizza}
      />
    </View>
  );
}
