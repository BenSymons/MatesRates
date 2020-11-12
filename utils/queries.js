import { gql } from '@apollo/client';

export const RESTAURANTS = gql`
  {
    restaurants {
      id
      name
      cuisine
      logo
      reviews {
        body
        rating
        user_id {
          id
          name
          avatarURL
        }
      }
      address
      city {
        name
      }
    }
  }
`;

export const WISHLIST = gql`
  {
    user(id: "5fad52e16b765b6024a6da5d") {
      wishlist {
        id
        name
        cuisine
        logo
        city {
          name
        }
      }
    }
  }
`;

export const ADD_TO_WISHLIST = gql`
  mutation AddWishlist($restaurant_id: String!, $user_id: ID!) {
    addWishlist(restaurant_id: $restaurant_id, user_id: $user_id) {
      name
    }
  }
`;

export const ADD_REVIEW = gql`
  mutation AddReview(
    $rating: Int!
    $body: String!
    $user_id: String!
    $restaurant_id: String!
  ) {
    addReview(
      rating: $rating
      body: $body
      user_id: $user_id
      restaurant_id: $restaurant_id
    ) {
      rating
      body
    }
  }
`;

export const ADD_FRIEND = gql`
  mutation AddFriend($user_id: ID!, $friend_id: String!) {
    addFriend(user_id: $user_id, friend_id: $friend_id) {
      name
    }
  }
`;

export const GET_USERS = gql`
  {
    users {
      id
      name
      username
      avatarURL
      friends {
        id
        name
        avatarURL
      }
    }
  }
`;

export const GET_USER = gql`
  {
    user(id: "5fad52e16b765b6024a6da5d") {
      friends {
        username
        name
        avatarURL
      }
    }
  }
`;

export const ALL_RESTAURANTS_IN_WISHLIST = gql`
  {
    users {
      wishlist {
        id
      }
    }
  }
`;
