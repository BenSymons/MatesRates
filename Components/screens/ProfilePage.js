import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import FriendForm from '../common/FriendAdder';
import WishlistCarousel from '../common/WishlistCarousel';
import FriendsCarousel from '../common/FriendsCarousel';
import { ScrollView } from 'react-native-gesture-handler';
import { Divider } from 'react-native-elements';

const ProfileScreen = ({ navigation, route }) => {
  return (
    <ScrollView>
      <Text>Profile Screen</Text>
      <Text>Image of user</Text>
      <Text>Number of reviews</Text>
      <FriendForm />
      <Button
        style={styles.name}
        title="FriendList"
        onPress={() => {
          navigation.navigate('FriendList');
        }}
      >
        FriendList with preview BUTTON
      </Button>
      <Button
        style={styles.name}
        title="Wishlist"
        onPress={() => {
          navigation.navigate('WishList');
        }}
      >
        Wishlist with preview BUTTON
      </Button>
      <Divider />
      <WishlistCarousel />
      <Divider />
      <FriendsCarousel />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  // card: {
  //   fontSize: '20px',
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   border: '1px solid darkblue',
  //   marginTop: '15px',
  //   borderLeft: '0.25',
  //   borderRight: '0.25'
  // },
  name: {
    // fontSize: 30
  }
});

export default ProfileScreen;
