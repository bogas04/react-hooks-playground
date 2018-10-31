import { useState, useEffect } from 'react';

export function useCarousel({
  startWithIndex,
  autoPlay,
  autoPlayMS,
  totalItems,
  wrapAround,
}) {
  const [currentIndex, setIndex] = useState(startWithIndex);

  const nextIndex = () => {
    const newIndex = wrapAround
      ? (currentIndex + 1) % totalItems
      : Math.min(currentIndex + 1, totalItems - 1);

    setIndex(newIndex);
  };

  const previousIndex = () => {
    const newIndex = wrapAround
      ? currentIndex - 1 === -1
        ? totalItems - 1
        : Math.max(currentIndex - 1, 0)
      : Math.max(currentIndex - 1, 0);

    setIndex(newIndex);
  };

  useEffect(
    // after dom update
    () => {
      if (autoPlay) {
        if (currentIndex === totalItems - 1 && wrapAround === false) {
          return () => clearInterval(timer);
        }

        const timer = setInterval(nextIndex, autoPlayMS);
        // before updating dom
        return () => clearInterval(timer);
      }
    },
    // We need to set our interval whenever `autoPlay` or `autoPlayMS` changes
    // I'm still not clear why we need to give `currentIndex` as well.
    [currentIndex, autoPlay, autoPlayMS, wrapAround]
  );

  return [currentIndex, setIndex, nextIndex, previousIndex];
}
