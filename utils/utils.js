export const averageRatings = (ratings) => {
  if (!ratings) return 0;
  const arrayOfRatings = ratings.map((rating) => rating.rating);
  const total = arrayOfRatings.reduce((a, b) => a + b);
  const average = total / arrayOfRatings.length;
  return average.toFixed(1);
};

export const idLookup = (username, array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i].username === username) {
      return array[i].id;
    }
  }
};

export const wishlistCount = (data, restaurant_id) => {
  let count = 0;
  let wished = false;
  data.users.forEach((user) => {
    if (user.wishlist.some((e) => e.id === restaurant_id)) {
      count++;
    }
  });

  if (data.users[0].wishlist.some((e) => e.id === restaurant_id)) {
    wished = true;
  }
  return { count, wished };
};
