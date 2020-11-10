import { SearchBar, ListItem, Avatar} from 'react-native-elements';
import React, { useEffect, useState, useRef } from "react"
import {View} from "react-native"
import {useQuery} from "@apollo/client"
import {GET_USERS} from "../../utils/queries"

const  FriendsSearchPage = () => {
  const [search, setSearch] = useState("")
  const [users, setUsers] = useState([])
  const updateSearch = (search) => {
    setSearch(search);
  };
  //console.log(search)

  const {loading, error, data} = useQuery(GET_USERS)

  const prevRef = (value) => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    })
    return ref.current;
    }

const prevSearch = prevRef(search);

useEffect(()=> {
    if(search !== prevSearch) {
        const newUsers = {...data.users}
        console.log(newUsers);
        setUsers(newUsers)
    }
})

if (loading) {
    return (
      <View>
        <Text>loading...</Text>
      </View>
    );
  }



    return (
        <View>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={setSearch}
        value={search}
      />
    
      </View>
    );
  }


export default FriendsSearchPage

// useEffect(() => {
//   console.log(prevSearch);
//   if (search !== prevSearch) {
//     const copyRestaurants = [...restaurants];
//     const newRestaurants = copyRestaurants.map(restaurant => {
//       const copyRestaurant = {...restaurant};
//       return copyRestaurant;
//     });
//     const filterRestaurants = newRestaurants.filter(restaurant => {
//       return restaurant.name.toLowerCase().includes(search.toLowerCase())
//     });
//     console.log(filterRestaurants);
//     console.log(search);
//     setRestaurants(filterRestaurants);
//   }
// });