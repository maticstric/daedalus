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
  const [size, setSize] = useState(10);
  const [canvasSize, setCanvasSize] = useState(546);
  const [board, setBoard] = useState(null);
  const [historyIndex, setHistoryIndex] = useState(0);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const closestMultiple = (n, m) => {
      let result = n + m / 2;
      result -= result % m;

      return result;
    }

    let canvasSize = closestMultiple(550, 2 * size + 1);
    setCanvasSize(canvasSize);

    if (generator === Generators.RandomizedDepthFirstSearch) {
      RandomizedDepthFirstSearch.generate(size, canvasSize, setBoard, setHistory, setHistoryIndex);
    } else if (generator === Generators.RandomizedKruskalsAlgorithm) {
      RandomizedKruskalsAlgorithm.generate(size, canvasSize, setBoard, setHistory, setHistoryIndex);
    } else if (generator === Generators.RandomizedPrimsAlgorithm) {
      RandomizedPrimsAlgorithm.generate(size, canvasSize, setBoard, setHistory, setHistoryIndex);
    }
  }, [generator, size]);

  const generatorText = (generator) => {
    if (generator === Generators.RandomizedDepthFirstSearch) {
      return 'randomized depth first search';
    } else if (generator === Generators.RandomizedKruskalsAlgorithm) {
      return 'randomized kruskal’s algorithm';
    } else if (generator === Generators.RandomizedPrimsAlgorithm) {
      return 'randomized prim’s algorithm';
    }
  }

  return (
    <div id="app">
      <Controls
        historyIndex={historyIndex}
        history={history}
        setBoard={setBoard}
        setHistoryIndex={setHistoryIndex}
        setSize={setSize}
      />
      <div id="center">
        <h1>daedalus</h1>
        <h2>{generatorText(generator)}</h2>
        <Canvas
          board={board}
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
