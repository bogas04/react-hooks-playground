import React, { useEffect } from 'react';
import { useCarousel } from './Carousel.hooks';

export default function Carousel({
  items,
  autoPlay = false,
  autoPlayMS = 1000,
  wrapAround = false,
}) {
  const [currentIndex, setIndex, nextIndex, previousIndex] = useCarousel({
    startWithIndex: 0,
    wrapAround,
    autoPlay,
    autoPlayMS,
    totalItems: items.length,
  });

  return (
    <>
      <div className="carousel-header">
        <button onClick={previousIndex}>⬅️</button>
        {currentIndex + 1}
        <button onClick={nextIndex}>➡️</button>
      </div>
      <div className="carousel">
        {items.map((item, index) => (
          <div
            onClick={() => setIndex(index)}
            className={`carousel-item ${
              index === currentIndex ? 'carousel-item__active' : ''
            }`}
            key={index}>
            {item.name}
          </div>
        ))}
      </div>
    </>
  );
}
