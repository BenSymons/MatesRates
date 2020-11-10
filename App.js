import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreenNavigator from './Components/navigators/HomeScreenNavigator';
import ProfileNavigator from './Components/navigators/ProfileNavigator';
import SearchBarNavigator from './Components/navigators/SearchBarNavigator';
import FriendsNavigator from './Components/navigators/FriendsNavigator';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const Tab = createBottomTabNavigator();

function App() {
  // maybe put this outside --> line 16
  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache()
  });
  // <--

  return (
    <>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreenNavigator} />
            <Tab.Screen name="Search" component={SearchBarNavigator} />
            <Tab.Screen name="Find Friends" component={FriendsNavigator} />
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
