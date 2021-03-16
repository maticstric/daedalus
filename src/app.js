import React, { useState, useEffect } from 'react';
import './app.css';

import Canvas from './components/canvas/canvas.js';
import Controls from './components/controls/controls.js';
import Selector from './components/selector/selector.js';
import Board from './classes/board.js';
import Generators from './generators.js';
import RandomizedDepthFirstSearch from './classes/generators/randomized-depth-first-search.js';
import RandomizedKruskalsAlgorithm from './classes/generators/randomized-kruskals-algorithm.js';
import RandomizedPrimsAlgorithm from './classes/generators/randomized-prims-algorithm.js';

const MAZE_ROWS = 5;
const MAZE_COLS = 5;
const CANVAS_WIDTH = 550;
const CANVAS_HEIGHT = 550;

const App = (props) => {
  const [generator, setGenerator] = useState(Generators.RandomizedDepthFirstSearch);
  const [board, setBoard] = useState(new Board(CANVAS_WIDTH, CANVAS_HEIGHT, (MAZE_ROWS * 2) + 1, (MAZE_COLS * 2) + 1));
  const [generatorState, setGeneratorState] = useState(null);
  const [historyIndex, setHistoryIndex] = useState(0);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    generate(Generators.RandomizedDepthFirstSearch, board.clone(), setHistory);
  }, []);

  const resetAndGenerate = (generator) => {
    let board = new Board(CANVAS_WIDTH, CANVAS_HEIGHT, (MAZE_ROWS * 2) + 1, (MAZE_COLS * 2) + 1);
    setBoard(board);
    setGeneratorState(null);
    setHistoryIndex(0);
    setHistory([]);

    setGenerator(generator);
    generate(generator, board, setHistory);
  }

  const generate = (generator, board, setHistory) => {
    if (generator === Generators.RandomizedDepthFirstSearch) {
      RandomizedDepthFirstSearch.generate(board.clone(), setHistory);
    } else if (generator === Generators.RandomizedKruskalsAlgorithm) {
      RandomizedKruskalsAlgorithm.generate(board.clone(), setHistory);
    } else if (generator === Generators.RandomizedPrimsAlgorithm) {
      RandomizedPrimsAlgorithm.generate(board.clone(), setHistory);
    }
  }

  const generatorText = (generator) => {
    if (generator === Generators.RandomizedDepthFirstSearch) {
      return 'randomized depth first search';
    } else if (generator === Generators.RandomizedKruskalsAlgorithm) {
      return 'randomized kruskal’s algorithn';
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
        setGeneratorState={setGeneratorState}
        setHistoryIndex={setHistoryIndex}
      />
      <div id="center">
        <h1>daedalus</h1>
        <h2>{generatorText(generator)}</h2>
        <Canvas
          board={board}
          canvasWidth={CANVAS_WIDTH}
          canvasHeight={CANVAS_HEIGHT}
        />
      </div>
      <Selector
        resetAndGenerate={resetAndGenerate}
      />
    </div>
  );
};

export default App;
