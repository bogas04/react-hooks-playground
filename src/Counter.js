import React from 'react';
import { useCount } from './Counter.hooks';

export default function Counter() {
  const [count, increment, decrement] = useCount(0);

  return (
    <div className="counter">
      <button onClick={decrement}>-</button>
      {count}
      <button onClick={increment}>+</button>
    </div>
  );
}
