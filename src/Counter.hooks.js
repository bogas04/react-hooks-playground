import { useState } from 'react';

export function useCount(initialValue) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return [count, increment, decrement, reset];
}
