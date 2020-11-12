import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_FRIEND, GET_USERS } from '../../utils/queries';
import { idLookup } from '../../utils/utils';

const FriendForm = () => {
  const { loading, data } = useQuery(GET_USERS);
  const [username, setUsername] = useState('');
  const [friend_id, setFriend_id] = useState('');
  const [addFriend, { error }] = useMutation(ADD_FRIEND);
  // const [user_id] = useState("5fa28b052c117a5240501f6e")
  //console.dir(error);
  if (loading) {
    return (
      <View>
        <Text>loading...</Text>
      </View>
    );
  }
  return (
    <View>
      <Text>Add friend here</Text>
      <Input
        value={username}
        placeholder="add friends here"
        onChangeText={(value) => setUsername(value)}
      />
      <Button
        title="Add"
        onPress={() => {
          const friend = idLookup(username, data.users);
          addFriend({
            variables: {
              user_id: '5fad52e16b765b6024a6da5d',
              friend_id: friend
            }
          })
            .then((res) => {
              setUsername('');
            })
            .catch((e) => alert('user not found'));
        }}
      />
    </View>
  );
};
export default FriendForm;
