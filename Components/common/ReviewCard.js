import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Card, Button, Icon, ListItem, Avatar } from 'react-native-elements';

// {
//     user: {
//       name: 'Hay',
//       avatar_url:
//         'https://znze11wt5g3330m4e3it6h2a73-wpengine.netdna-ssl.com/wp-content/uploads/2017/03/Sam-Blackburn-Absolute-IT-e1531098391127.jpg'
//     },

//     body:
//       'Awful customer service Booked a table for 4. 3 from same household and 1 from a support bubble. Had a confirmation that was ok. When we arrived they said they were not accepting bubbles,even though the sign outside said bubbles were ok. Tried to seat...',
//     timestamp: 3764982764982,
//     rating: 1,
//     images: [
//       'https://znze11wt5g3330m4e3it6h2a73-wpengine.netdna-ssl.com/wp-content/uploads/2017/03/Sam-Blackburn-Absolute-IT-e1531098391127.jpg'
//     ]
//   }

export default ({ review, navigation }) => {
  const { user, body, rating, images } = review;
  return (
    <Card style={styles.card}>
      <Card.Title>{name}</Card.Title>
      <Card.Divider />

      <Text style={{ marginBottom: 10, textAlign: 'center' }}>{city.name}</Text>
      <Button
        onPress={() => {
          navigation.navigate('Restaurant', {
            restaurant,
          });
        }}
        icon={<Icon name="code" color="#ffffff" />}
        buttonStyle={{
          borderRadius: 0,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 0,
        }}
        title="LIKE REVIEW"
      />
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {},
  name: {},
  image: {},
  users: {},
});
