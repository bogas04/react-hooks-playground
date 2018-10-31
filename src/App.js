import React, { useState } from 'react';
import Counter from './Counter';
import Carousel from './Carousel';
import './styles.css';

export default function App() {
  const [wrapAround, setWrapAround] = useState(false);
  const [autoPlay, setAutoplay] = useState(false);
  const [autoPlayMS, setAutoplayTime] = useState(1000);

  return (
    <>
      <div className="App">
        <h1>React 16.7 Playground</h1>
        <div className="example">
          <h3 className="example-header">Counter Example</h3>
          <Counter />
        </div>

        <div className="example">
          <h3 className="example-header">Carousel Example</h3>

          <label htmlFor="wraparound">
            <input
              id="wraparound"
              type="checkbox"
              checked={wrapAround}
              onChange={() => setWrapAround(!wrapAround)}
            />{' '}
            {wrapAround ? 'Wrapping' : 'Wrap around?'}
          </label>

          <label htmlFor="autoplay">
            <input
              id="autoplay"
              type="checkbox"
              checked={autoPlay}
              onChange={() => setAutoplay(!autoPlay)}
            />{' '}
            {autoPlay ? 'Autoplaying' : 'Auto play?'}
          </label>

          <label htmlFor="autoplayTime">
            Speed:{' '}
            <input
              disabled={autoPlay === false}
              id="autoplayTime"
              type="number"
              step="100"
              value={autoPlayMS}
              onChange={e => setAutoplayTime(e.currentTarget.value)}
            />{' '}
          </label>

          <Carousel
            wrapAround={wrapAround}
            autoPlay={autoPlay}
            autoPlayMS={autoPlayMS}
            items={[
              { name: '1' },
              { name: '2' },
              { name: '3' },
              { name: '4' },
              { name: '5' },
            ]}
          />
        </div>
      </div>
      <footer>
        <a href="https://twitter.com/bogas04" target="_blank" rel="noopener">
          @bogas04
        </a>
      </footer>
    </>
  );
}
