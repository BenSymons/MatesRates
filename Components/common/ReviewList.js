import React from 'react';
import { View, List} from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import ReviewCard from './ReviewCard';

export default ({ reviews, navigation }) => {
  if (!reviews) return <Text>No reviews yet!</Text>
  return (
    <View>
      {reviews.map((review, i) => (
        <ListItem key={i} bottomDivider>
          <Avatar source={{ uri: review.user_id.avatarURL }} />
          <ListItem.Content>
            <ListItem.Title>{review.user_id.name}</ListItem.Title>
            <ListItem.Subtitle>{review.body}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      ))}
    </View>
    
  );
};
