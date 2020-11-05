import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../SharedComponents/Header';
import RestaurantListPage from '../SharedComponents/RestaurantListPage';
import { NavigationContainer } from '@react-navigation/native';
import RestaurantPage from '../SharedComponents/RestaurantPage';
import SearchBar from '../SearchBarComponents/SearchBar';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SearchBar"
        component={SearchBar}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="RestaurantPage"
        component={RestaurantPage}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default HomeScreen;
