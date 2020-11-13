import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import { wishlistCount } from '../../utils/utils';
import { iOSUIKit, iOSColors } from 'react-native-typography';
import { TouchableOpacity } from 'react-native';

import WishlistButton from './WishlistButton';

export default ({ restaurant, wishlist, navigation }) => {
  const { name, city, logo, id, address } = restaurant;
  // const count = wishlistCount(wishlist, id);
  console.log(wishlist);
  return (
    <Card
      containerStyle={{
        borderRadius: 12,
        borderColor: 'none',
      }}
    >
      <TouchableOpacity
        key={id}
        onPress={() =>
          navigation.navigate('Restaurant', {
            restaurant,
          })
        }
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text style={[iOSUIKit.title3Emphasized, { color: iOSColors.black }]}>
            {name}
          </Text>

          <WishlistButton
            restaurant_id={id}
            myWishlist={wishlist.users[0].wishlist}
          />
        </View>
        <Card.Divider />
        <Card.Image
          source={{
            uri: logo,
          }}
        />
        <Card.Divider />
        <Text
          style={[
            iOSUIKit.subhead,
            { color: iOSColors.grey, textAlign: 'center', marginBottom: 10 },
          ]}
        >
          {address}
        </Text>
      </TouchableOpacity>

      <Button
        onPress={() =>
          navigation.navigate('ReviewForm', {
            restaurant_id: id,
            restaurant_name: name,
          })
        }
        // onPress={() => {
        //   navigation.navigate('Restaurant', {
        //     restaurant
        //   });
        // }}
        // icon={<Icon name="code" color="#ffffff" />}
        buttonStyle={{
          borderRadius: 20,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 0,
          backgroundColor: '#FF8C61',
        }}
        title="RECOMMEND"
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
          marginBottom: 2,
        }}
      >
        {wishlist ? (
          <Text>WISHED BY: {wishlistCount(wishlist, id)} FRIENDS</Text>
        ) : (
          <Text></Text>
        )}
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#5C374C',
  },
  name: {},
  image: {},
});
