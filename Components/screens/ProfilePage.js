import Loader from '../common/Loader';
import "react-native-gesture-handler";
// import * as React from 'react';
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import FriendForm from "../common/FriendAdder";
import { GET_USER } from "../../utils/queries";
import { useQuery } from "@apollo/client";
import { Avatar, Card, Button } from "react-native-elements";
import styles from "../../Styling/global-style";
import SearchFriendList from "../common/SearchFriendList";
import WishList from "../screens/WishListPage";
import {iOSUIKit, iOSColors} from 'react-native-typography'


const ProfileScreen = ({ navigation, route }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [secondModalOpen, setSecondModalOpen] = useState(false);
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

        <View style={{
          alignItems: "center"
        }}>
        <Text style={[
                  iOSUIKit.largeTitleEmphasized,
                  { color: iOSColors.black }
                ]}>{data.user.username}</Text>

        <Text style={[
                  iOSUIKit.largeTitleEmphasized,
                  { color: iOSColors.black },
                ]}>
          Friends({data.user.friends.length})
        </Text>
      </Card>

      <Modal visible={modalOpen} animationType="slide">
        <View>
          <TouchableOpacity
            title="Hide Friends"
            color="#F8A677"
            style={avatar.modalToggle}
            onPress={() => setModalOpen(false)}
          >
            <Text style={{ color: "white" }}>Hide Friends</Text>
          </TouchableOpacity>
          <SearchFriendList
            users={data.user.friends}
            friends={data.user.friends}
          ></SearchFriendList>
        </View>
      </Modal>

      <TouchableOpacity
        backgroundColor="#F8A677"
        title="FriendList"
        color="#F8A677"
        style={avatar.modalToggle}
        onPress={() => setModalOpen(true)}
      >
        <Text style={{ color: "white" }}>Friends List</Text>
      </TouchableOpacity>

      <Modal visible={secondModalOpen} animationType="slide">
        <View>
          <TouchableOpacity
            title="Hide Wishlist"
            color="#F8A677"
            style={avatar.modalToggle}
            onPress={() => setSecondModalOpen(false)}
          >
            <Text style={{ color: "white" }}>Hide Wishlist</Text>
          </TouchableOpacity>
          <WishList></WishList>

        </View>
      </Modal>

      <TouchableOpacity
        backgroundColor="#F8A677"
        title="Wishlist"
        color="#F8A677"
        style={avatar.modalToggle}
        onPress={() => setSecondModalOpen(true)}
      >
        <Text style={{ color: "white" }}>Wishlist</Text>
      </TouchableOpacity>
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
  modalToggle: {
    backgroundColor: "#F8A677",
    marginTop: 30,
    marginBottom: 10,
    padding: 10,
    borderRadius: 40,
    alignSelf: "center",
  },
});

export default ProfileScreen;
