import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Input, AirbnbRating, Button, Card } from 'react-native-elements';
import { gql, useMutation } from '@apollo/client';
import { ADD_REVIEW } from '../../utils/queries';
import { iOSUIKit } from 'react-native-typography';

const ReviewForm = ({ navigation, route }) => {
  const { restaurant_id, restaurant_name } = route.params;
  const [rating, setRating] = useState(3);
  const [body, setBody] = useState('');
  const [addReview] = useMutation(ADD_REVIEW);

  return (
    <View style={styles.background}>
      <Card containerStyle={{ borderRadius: 12 }}>
        <Text
          style={[
            iOSUIKit.largeTitleEmphasized,
            {
              textAlign: 'center',
              fontSize: 30,
              color: '#FF8C61',
              paddingBottom: 50,
              paddingTop: 20,
              paddingLeft: 10,
              paddingRight: 20,
            },
          ]}
        >
          How was your experience at {restaurant_name}?
        </Text>
        <AirbnbRating
          count={5}
          reviews={['Bad', 'Poor', 'Average', 'Good', 'Excellent']}
          defaultRating={3}
          size={20}
          onFinishRating={(rating) => {
            setRating(rating);
          }}
        />

        <Input
          containerStyle={{ width: '80%', marginTop: 20 }}
          placeholder="Write a review..."
          onChangeText={(value) => setBody(value)}
          inputStyle={{ alignItems: 'center' }}
        />
        <Button
          buttonStyle={{
            borderRadius: 20,
            marginTop: 20,
            width: 90,
            padding: 20,
            backgroundColor: '#FF8C61',
          }}
          title="Submit"
          onPress={() => {
            const finalState = {
              rating,
              body,
              user_id: '5fabb8bbc919d40cd354493d',
              restaurant_id,
            };
            addReview({ variables: { ...finalState } });
            navigation.goBack();
          }}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 30,
  },
  button: {
    width: 170,
    marginTop: 10,
    borderRadius: 50,
    paddingTop: 120,
    alignItems: 'center',
  },
  background: {
    backgroundColor: '#5C374C',
    flex: 1,
    alignItems: 'center',
  },
});

export default ReviewForm;
