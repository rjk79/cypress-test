import React, { useState } from 'react';
import { useRouter } from 'next/router';

const TAX = 0.0875;

function Home() {
  const [value, setValue] = useState<string>('');
  const [tip, setTip] = useState<number>(0.15);
  const numValue = Number(value);
  const router = useRouter();

  return (
    <div className="space-y-5 p-5">
      <div className="text-blue-500 text-2xl font-bold">Tip + Tax Calculator</div>
      <input
        placeholder="Enter Dollar Amount"
        data-cy="test-input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border border-gray-300"
      />
      <div className="flex items-center space-x-2">
        <input type="radio" checked={tip === 0.15} value={0.15} onChange={() => setTip(0.15)} />
        <div>Tip (15%): $ {(numValue * 0.15).toFixed(2)}</div>
      </div>
      <div className="flex items-center space-x-2">
        <input type="radio" checked={tip === 0.2} value={0.2} onChange={() => setTip(0.2)} />
        <div>Tip (20%): $ {(numValue * 0.2).toFixed(2)}</div>
      </div>
      <div>Tax: $ {(numValue * TAX).toFixed(2)}</div>
      <div>Total: $ {(numValue + numValue * TAX + numValue * tip).toFixed(2)}</div>
      <button onClick={() => router.push('/restaurants')}>Go to Restaurants</button>
    </div>
  );
}

export default Home;
