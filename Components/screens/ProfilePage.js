import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { GET_USER } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import { Avatar, Card, Button } from 'react-native-elements';
import styles from '../../Styling/global-style';
import { iOSUIKit, iOSColors } from 'react-native-typography';
import Loader from '../common/Loader';

const Separator = () => <View style={styles.separator} />;

const ProfileScreen = ({ navigation, route }) => {
  const { data, loading, error } = useQuery(GET_USER);
  console.log(data);
  if (loading) {
    return (
      <View>
        <Loader />
      </View>
    );
  }
  if (error) {
    return (
      <View>
        <Text>error</Text>
      </View>
    );
  }
  return (
    <View style={styles.cardContainer}>
      <Card
        containerStyle={{
          backgroundColor: '#FFFFFF',
          borderColor: 'black',
          borderRadius: 12,
          width: '90%',
          height: '60%',
          alignItems: 'center',
        }}
      >
        <Card.Title
          style={[iOSUIKit.largeTitleEmphasized, { color: iOSColors.black }]}
        >
          {data.user.name}'s Profile
        </Card.Title>

        <Image
          rounded
          style={{
            width: 250,
            height: 250,
            alignItems: 'center',
          }}
          source={{
            uri: data.user.avatarURL,
          }}
        />
        <View
          style={{
            alignItems: 'center',
          }}
        >
          <Text
            style={[iOSUIKit.largeTitleEmphasized, { color: iOSColors.black }]}
          >
            {data.user.username}
          </Text>

          <Text
            style={[iOSUIKit.largeTitleEmphasized, { color: iOSColors.black }]}
          >
            Friends({data.user.friends.length})
          </Text>
        </View>
        <View
          style={{
            marginTop: 20,
            width: '90%',
            margin: 'auto',
          }}
        >
          <Button
            color="#F8A677"
            title="FriendList"
            onPress={() => {
              navigation.navigate('FriendList');
            }}
            buttonStyle={{
              flex: 0.5,
              justifyContent: 'space-evenly',
              width: '95%',
              padding: 10,
              borderRadius: 20,
              marginTop: 10,
              backgroundColor: '#FF8C61',
            }}
          >
            FriendList with preview BUTTON
          </Button>
          <Button
            color="#F8A677"
            title="Wishlist"
            onPress={() => {
              navigation.navigate('WishList');
            }}
            buttonStyle={{
              flex: 0.5,
              justifyContent: 'space-evenly',
              width: '95%',
              padding: 10,
              borderRadius: 20,
              marginTop: 5,
              backgroundColor: '#FF8C61',
            }}
          >
            Wishlist with preview BUTTON
          </Button>
        </View>
      </Card>
    </View>
  );
};

const avatar = StyleSheet.create({
  logo: {
    width: 50,
    height: 100,
  },
  // borderButton: {
  //   alignItems: 'center',
  //   width: '100%',
  //   borderWidth: 2,
  //   borderColor: 'white',
  // },
  card: {
    backgroundColor: '#4E2D3E',
  },
});

export default ProfileScreen;
