import 'react-native-gesture-handler';
import React, { Component, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  Button,
} from 'react-native';

import { GET_USER } from '../../utils/queries';
import { useQuery } from '@apollo/client';

export default function FriendList(props) {
  const [user, setUser] = useState({});

  const { loading, error, data } = useQuery(GET_USER);
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
        <Text>error...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView>
      <Text>This is my FriendList</Text>
      <FlatList
        data={data.user.friends}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Button
              style={styles.name}
              title={item.name}
              onPress={() => {
                props.navigation.navigate('User', {
                  ...item,
                });
              }}
            />
            <Text>{user.username}</Text>
            <Text>{item.avatarURL}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: {},
  name: {},
});
