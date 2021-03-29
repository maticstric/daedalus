import React, { useState, useEffect } from 'react';
import './app.css';

import Canvas from './components/canvas/canvas.js';
import Controls from './components/controls/controls.js';
import Selector from './components/selector/selector.js';
import Generators from './generators.js';
import RandomizedDepthFirstSearch from './classes/generators/randomized-depth-first-search.js';
import RandomizedKruskalsAlgorithm from './classes/generators/randomized-kruskals-algorithm.js';
import RandomizedPrimsAlgorithm from './classes/generators/randomized-prims-algorithm.js';

const App = (props) => {
  const [generator, setGenerator] = useState(Generators.RandomizedDepthFirstSearch);
  const [generatorText, setGeneratorText] = useState('randomized depth first search');
  const [size, setSize] = useState(10);
  const [speed, setSpeed] = useState(1);
  const [canvasSize, setCanvasSize] = useState(546);
  const [historyIndex, setHistoryIndex] = useState(0);
  const [history, setHistory] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const closestMultiple = (n, m) => {
      let result = n + m / 2;
      result -= result % m;

      return result;
    }

    let canvasSize = closestMultiple(550, 2 * size + 1);
    setCanvasSize(canvasSize);

    if (generator === Generators.RandomizedDepthFirstSearch) {
      RandomizedDepthFirstSearch.generate(size, canvasSize, setHistory, setHistoryIndex);
      setGeneratorText('randomized depth first search');
    } else if (generator === Generators.RandomizedKruskalsAlgorithm) {
      RandomizedKruskalsAlgorithm.generate(size, canvasSize, setHistory, setHistoryIndex);
      setGeneratorText('randomized kruskal’s algorithm');
    } else if (generator === Generators.RandomizedPrimsAlgorithm) {
      RandomizedPrimsAlgorithm.generate(size, canvasSize, setHistory, setHistoryIndex);
      setGeneratorText('randomized prim’s algorithm');
    }
  }, [generator, size]);

  return (
    <div id="app">
      <Controls
        historyIndex={historyIndex}
        history={history}
        setHistoryIndex={setHistoryIndex}
        setSize={setSize}
        setSpeed={setSpeed}
        setIsPlaying={setIsPlaying}
        speed={speed}
        isPlaying={isPlaying}
      />
      <div id="center">
        <h1>daedalus</h1>
        <h2>{generatorText}</h2>
        <Canvas
          history={history}
          historyIndex={historyIndex}
          canvasSize={canvasSize}
        />
      </div>
      <Selector
        setGenerator={setGenerator}
      />
    </div>
  );
};

export default App;
