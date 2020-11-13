import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Profile from '../screens/ProfilePage';
import WishList from '../screens/WishListPage';
import FriendList from '../screens/FriendListPage';
import User from '../screens//UserPage';
import Restaurant from '../screens/RestaurantPage';
import LogoTitle from '../common/LogoTitle';
import { iOSUIKit, iOSColors } from 'react-native-typography';

const Stack = createStackNavigator();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          cardStyle: { backgroundColor: '#5C374C' },
          headerLayoutPreset: 'center',
          headerStyle: {
            backgroundColor: '#944D6F',
          },

          headerTitle: (props) => (
            <View
              style={{ flexDirection: 'row', justifyContent: 'flex-start' }}
            >
              <LogoTitle {...props} />
              <Text
                style={[
                  iOSUIKit.largeTitleEmphasized,
                  { color: iOSColors.white },
                ]}
              >
                Profile
              </Text>
            </View>
          ),
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="Restaurant"
        component={Restaurant}
        options={{
          headerLayoutPreset: 'center',
          headerStyle: {
            backgroundColor: '#944D6F',
          },

          headerTitle: (props) => (
            <View
              style={{ flexDirection: 'row', justifyContent: 'flex-start' }}
            >
              <LogoTitle {...props} />
              <Text
                style={[
                  iOSUIKit.largeTitleEmphasized,
                  { color: iOSColors.white },
                ]}
              >
                Restaurant
              </Text>
            </View>
          ),
        }}
      ></Stack.Screen>
      <Stack.Screen name="WishList" component={WishList}></Stack.Screen>
      <Stack.Screen name="FriendList" component={FriendList}></Stack.Screen>
      <Stack.Screen
        name="User"
        component={User}
        options={{
          headerLayoutPreset: 'center',
          headerStyle: {
            backgroundColor: '#944D6F',
          },

          headerTitle: (props) => (
            <View
              style={{ flexDirection: 'row', justifyContent: 'flex-start' }}
            >
              <LogoTitle {...props} />
              <Text
                style={[
                  iOSUIKit.largeTitleEmphasized,
                  { color: iOSColors.white },
                ]}
              >
                Friend
              </Text>
            </View>
          ),
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default ProfileNavigator;

// screenOptions={{
//   headerLayoutPreset: 'center',
//   headerStyle: {
//     backgroundColor: '#944D6F',
//   },

//   headerTitle: (props) => (
//     <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
//       <LogoTitle {...props} />
//       <Text
//         style={[
//           iOSUIKit.largeTitleEmphasized,
//           { color: iOSColors.white },
//         ]}
//       >
//         Restaurant
//       </Text>
//     </View>
//   ),
// }}
