import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreenNavigator from './Components/navigators/HomeScreenNavigator';
import ProfileNavigator from './Components/navigators/ProfileNavigator';
import SearchBarNavigator from './Components/navigators/SearchBarNavigator';
import MapView from './Components/screens/MapViewPage';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import LoginPage from './Components/screens/LoginPage';


const Tab = createBottomTabNavigator();

function App() {
  // maybe put this outside --> line 16
  const client = new ApolloClient({
    uri: 'https://matesrates.herokuapp.com/graphql',
    cache: new InMemoryCache(),
  });
  const [user, setUser] = useState(false);

      if (!user) {
        return (
          <LoginPage setUser={setUser}/>
        )
      } else {
        return (
          <>
          <ApolloProvider client={client}>
            <NavigationContainer>
              <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreenNavigator} />
                <Tab.Screen name="Search" component={SearchBarNavigator} />
                <Tab.Screen name="Map" component={MapView} />
                <Tab.Screen name="Profile" component={ProfileNavigator} />
              </Tab.Navigator>
            </NavigationContainer>
          </ApolloProvider>
          </>
        )
      }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Header: {
    color: 'red',
  },
});

export default App;
