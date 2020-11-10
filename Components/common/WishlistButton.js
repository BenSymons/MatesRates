import { useMutation } from '@apollo/client';
import React from 'react';
import { Button, View } from 'react-native';
import { ADD_TO_WISHLIST } from '../../utils/queries';
import Ionicons from 'react-native-vector-icons';
import { CheckBox } from 'react-native-elements';

export default ({ restaurant_id, wished }) => {
  const [addWishlist, data] = useMutation(ADD_TO_WISHLIST);

  return (
    <CheckBox
      iconType="ionicon"
      checkedIcon="ios-star"
      uncheckedIcon="ios-star-outline"
      checked={wished}
      onPress={() =>
        addWishlist({
          variables: { restaurant_id, user_id: '5fa91e3486083c1f16e6ffa4' }
        })
      }
    />
  );
};
