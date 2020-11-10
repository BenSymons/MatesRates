import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { LogBox, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreenNavigator from './Components/navigators/HomeScreenNavigator';
import ProfileNavigator from './Components/navigators/ProfileNavigator';
import SearchBarNavigator from './Components/navigators/SearchBarNavigator';
import MapView from './Components/screens/MapViewPage';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { useEffect } from 'react';
const Tab = createBottomTabNavigator();
import Ionicons from 'react-native-vector-icons/Ionicons';

function App() {
  // maybe put this outside --> line 16
  const client = new ApolloClient({
    uri: 'https://matesrates.herokuapp.com/graphql',
    cache: new InMemoryCache()
  });
  // <--

  useEffect(() => {
    LogBox && LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }, []);

  return (
    <>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                  iconName = focused ? 'ios-home' : 'ios-home';
                } else if (route.name === 'Search') {
                  iconName = focused ? 'ios-search' : 'ios-search';
                } else if (route.name === 'Friends') {
                  iconName = focused ? 'ios-person-add' : 'ios-person-add';
                } else if (route.name === 'Profile') {
                  iconName = focused ? 'ios-person' : 'ios-person';
                }

                // You can return any component that you like here!
                console.log(color);
                return <Ionicons name={iconName} size={size} color={color} />;
              }
            })}
            tabBarOptions={{
              activeTintColor: 'tomato',
              inactiveTintColor: 'gray'
            }}
          >
            <Tab.Screen name="Home" component={HomeScreenNavigator} />
            <Tab.Screen name="Search" component={SearchBarNavigator} />
            <Tab.Screen name="Friends" component={MapView} />
            <Tab.Screen name="Profile" component={ProfileNavigator} />
          </Tab.Navigator>
        </NavigationContainer>
      </ApolloProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  Header: {
    color: 'red'
  }
});

export default App;
