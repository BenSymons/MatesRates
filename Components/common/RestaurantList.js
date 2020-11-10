import React from 'react';
import { View } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import RestaurantCard from './RestaurantCard';

export default ({ restaurants, wishlist, navigation }) => {
  return (
    <ScrollView>
      {restaurants.map((restaurant) => (
        <RestaurantCard
          key={restaurant.id}
          wishlist={wishlist}
          restaurant={restaurant}
          navigation={navigation}
        />
      ))}
    </ScrollView>
  );
};
