async function request(path, options = {}) {
  const url = `${process.env.REACT_APP_API_ORIGIN}${path}`;
  const response = await fetch(url, options);
  return response.json();
}

// /restaurants、/restaurants/:restaurantId 、
// /restaurants/:restaurantId/reviewsに対してGETリクエストを行う関数

export async function getRestaurants(arg = {}) {
  // パラメータを探す
  const params = new URLSearchParams(arg);
  console.log(params);
  console.log(params.toString());
  return request(`/restaurants?${params.toString()}`);
}

export async function getRestaurant(restaurantId) {
  return request(`/restaurants/${restaurantId}`);
}

export async function getRestaurantReviews(restaurantId, arg = {}) {
  const params = new URLSearchParams(arg);
  return request(`/restaurants/${restaurantId}/reviews?${params.toString()}`);
}
