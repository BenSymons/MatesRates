
import { useMutation } from "@apollo/client";
import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import {
  ListItem,
  Avatar,
  Button,
  CheckBox,
  Card,
} from "react-native-elements";
import { ADD_FRIEND } from "../../utils/queries";
export default ({ users, friends, navigation }) => {
  const [addFriend] = useMutation(ADD_FRIEND);
  const [friendList, setFriends] = useState([]);
  useEffect(() => {
    setFriends(friends);
  }, []);

  return (
    <ScrollView style={{ backgroundColor: "#4E2D3E", height: "100%" }}>
      <Card
        containerStyle={{
          borderRadius: 12,
          borderColor: "none",

        }}
      >
        {users.map((user) => (
          <ListItem key={user.id} bottomDivider>
            <Avatar source={{ uri: user.avatarURL }} />
            <ListItem.Content>
              <ListItem.Title>{user.name}</ListItem.Title>
            </ListItem.Content>
            <CheckBox
              iconType="feather"
              uncheckedIcon="user-plus"
              uncheckedColor="green"
              checkedIcon="user-minus"
              checkedColor="gray"
              checked={friendList.some((myFriend) => myFriend.id === user.id)}
              onPress={() => {
                addFriend({
                  variables: {
                    user_id: "5fad52e16b765b6024a6da5d",
                    friend_id: user.id,
                  },

                });
                setFriends([...friendList, user]);
              }}
            />
          </ListItem>
        ))}
      </Card>
    </ScrollView>
  );
};
