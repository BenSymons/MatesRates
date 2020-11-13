import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Image, Card } from 'react-native-elements';
import { iOSUIKit, iOSColors } from 'react-native-typography';

export default function UserPage({ route }) {
  const { name, username, avatarURL } = route.params;
  console.log(route.params);

  return (
    <View style={styles.cardContainer}>
      <Card
        containerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#FFFFFF',
          borderColor: 'black',
          borderRadius: 12,
          width: '90%',
          height: '90%',
        }}
      >
        <Text
          style={[
            iOSUIKit.largeTitleEmphasized,
            { color: iOSColors.black, textAlign: 'center' },
          ]}
        >
          {name}
        </Text>
        <Image
          rounded
          style={{
            width: 250,
            height: 250,
            alignItems: 'center',
            marginTop,
          }}
          source={{
            uri: avatarURL,
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
            {username}
          </Text>
          <Text
            style={[iOSUIKit.largeTitleEmphasized, { color: iOSColors.black }]}
          >
            Reviews: 4
          </Text>
          <Text
            style={[iOSUIKit.largeTitleEmphasized, { color: iOSColors.black }]}
          ></Text>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#4E2D3E',
  },
});
