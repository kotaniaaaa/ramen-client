import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getRestaurants } from '../api.js';
import { Loading, Restaurant } from '../components';

export function RootPage() {
  const [restaurants, setRestaurants] = useState(null);

  useEffect(() => {
    // レンダーされた後に動作する
    getRestaurants({ limit: 3 }).then((data) => {
      setRestaurants(data);
    });
  }, []);

  // useEffectに投げる関数はレンダーされた後に動作する
  // 第二引数に空配列を指定することでuseEffectを"マウント時に1回だけ"実行することができる

  return (
    <>
      <h2 className='title is-3'>人気のラーメン店</h2>
      <div className='block'>
        {restaurants == null ? (
          <Loading />
        ) : (
          restaurants.rows.map((restaurant) => {
            return <Restaurant key={restaurant.id} restaurant={restaurant} />;
          })
        )}
      </div>
      <div className='has-text-right'>
        <Link className='button is-warning' to='/restaurants'>
          全てのラーメン店を見る
        </Link>
      </div>
    </>
  );
}
