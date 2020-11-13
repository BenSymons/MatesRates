import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  Button,
} from 'react-native';
import { useQuery, gql } from '@apollo/client';
import RestaurantList from '../common/RestaurantList';
import { WISHLIST } from '../../utils/queries';
import { ScrollView } from 'react-native-gesture-handler';

export default function WishList(props) {
  const { loading, error, data } = useQuery(WISHLIST);

  if (loading) {
    return (
      <View>
        <Text>loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>Error...</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <Text>This is my WIshList</Text>
      <RestaurantList restaurants={data.user.wishlist} {...props} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {},
  name: {},
});
