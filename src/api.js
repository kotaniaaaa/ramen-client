// /restaurants、/restaurants/:restaurantId 、
// /restaurants/:restaurantId/reviewsに対してGETリクエストを行う処理

/**
 * 指定されたパスにGETリクエスト送信
 * @param {パス} path
 * @param {オプション(現在使用なし)} options
 * @returns
 */
async function request(path, options = {}) {
  const url = `${process.env.REACT_APP_API_ORIGIN}${path}`;
  const response = await fetch(url, options);
  return response.json();
}

/**
 * getリクエスト
 * @param {クエリ文字列} arg
 * @returns
 */
export async function getRestaurants(arg = {}) {
  // パラメータを探す
  const params = new URLSearchParams(arg);
  return request(`/restaurants?${params.toString()}`);
}

/**
 * 指定されたお店のIDでGETする
 * @param {お店のID} restaurantId
 * @returns
 */
export async function getRestaurant(restaurantId) {
  return request(`/restaurants/${restaurantId}`);
}

export async function getRestaurantReviews(restaurantId, arg = {}) {
  const params = new URLSearchParams(arg);
  return request(`/restaurants/${restaurantId}/reviews?${params.toString()}`);
}
