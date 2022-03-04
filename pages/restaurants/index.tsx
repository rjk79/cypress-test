import React from 'react';
import { useRouter } from 'next/router';

function Restaurants() {
  const router = useRouter();

  return (
    <div className="space-y-5 p-5">
      List of Restaurants (WIP)
      <button onClick={() => router.push('/')}>Home</button>
    </div>
  );
}

export default Restaurants;
