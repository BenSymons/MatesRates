import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Restaurant from '../screens/RestaurantPage';
import ReviewForm from '../screens/ReviewFormPage';
import Home from '../screens/HomePage';
import { useQuery, gql } from '@apollo/client';
import LogoTitle from '../common/LogoTitle';
import { View, Text } from 'react-native';
import { iOSUIKit, iOSColors } from 'react-native-typography';

const Stack = createStackNavigator();

const HomeScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerLayoutPreset: 'center',
          headerStyle: {
            backgroundColor: '#5C374C'
          },

          headerTitle: (props) => (
            <View
              style={{ flexDirection: 'row', justifyContent: 'flex-start' }}
            >
              <LogoTitle {...props} />
              <Text
                style={[
                  iOSUIKit.largeTitleEmphasized,
                  { color: iOSColors.white }
                ]}
              >
                Mates Rates
              </Text>
            </View>
          )
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="Restaurant"
        component={Restaurant}
        options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
      ></Stack.Screen>
      <Stack.Screen
        name="ReviewForm"
        component={ReviewForm}
        options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default HomeScreenNavigator;
