import React, { useState } from 'react';
import { useRouter } from 'next/router';

function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-2">
      <div>Home</div>
      <button className="capitalize" onClick={() => router.push('/calculator')}>
        calculator
      </button>
      <button className="capitalize" onClick={() => router.push('/restaurants')}>
        restaurants
      </button>
    </div>
  );
}

export default Home;
