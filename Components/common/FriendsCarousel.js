import React from 'react';
import Carousel from 'react-native-banner-carousel';
import { StyleSheet, Image, View, Dimensions, Text } from 'react-native';
import { GET_USER } from '../../utils/queries';
import { useQuery } from '@apollo/client';

const BannerWidth = Dimensions.get('window').width;
const ImageWidth = Dimensions.get('window').width - 20;
const BannerHeight = 210;

export default () => {
  const { loading, error, data } = useQuery(GET_USER);

  if (loading) {
    return (
      <View>
        <Text>loading...</Text>
      </View>
    );
  }
  console.log(data);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Friends 👇</Text>
      <Carousel
        autoplay
        autoplayTimeout={5000}
        loop
        index={0}
        pageSize={BannerWidth}
      >
        {data.user.friends.map(({ avatarURL, name }, index) => (
          <View key={index}>
            <Text>{name}</Text>
            <Image
              style={{ width: BannerWidth, height: BannerHeight }}
              source={{ uri: avatarURL }}
            />
          </View>
        ))}
      </Carousel>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  title: {
    fontSize: 35,
    textAlign: 'center'
  }
});
