import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import Restaurant from '../screens/RestaurantPage';
// import SearchPage from '../screens/SearchPage';
import UserPage from "../screens/UserPage"
import FriendsSearchPage from "../screens/FriendsSearchPage"

const Stack = createStackNavigator();

const SearchNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FriendSearch"
        component={FriendsSearchPage}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen name="UserPage" component={UserPage}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default SearchNavigator;
