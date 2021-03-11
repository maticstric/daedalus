import React, { useState } from 'react';
import './app.css';

import Canvas from './components/canvas/canvas.js';
import Controls from './components/controls/controls.js';
import Selector from './components/selector/selector.js';
import Board from './classes/board.js';
import RandomizedDepthFirstSearch from './classes/generators/randomized-depth-first-search.js';
import RandomizedKruskalsAlgorithm from './classes/generators/randomized-kruskals-algorithm.js';

const MAZE_ROWS = 5;
const MAZE_COLS = 5;
const CANVAS_WIDTH = 550;
const CANVAS_HEIGHT = 550;

const App = (props) => {
  const [board, setBoard] = useState(new Board(CANVAS_WIDTH, CANVAS_HEIGHT, (MAZE_ROWS * 2) + 1, (MAZE_COLS * 2) + 1));
  //const [generatorState, setGeneratorState] = useState(RandomizedDepthFirstSearch.getInitialState());
  const [generatorState, setGeneratorState] = useState(RandomizedKruskalsAlgorithm.getInitialState(board));
  const [historyIndex, setHistoryIndex] = useState(0);
  const [history, setHistory] = useState([{
    board: board,
    generatorState: generatorState
  }]);

  function nextStep() {
    //RandomizedDepthFirstSearch.nextStep(board, generatorState, history, setBoard, setGeneratorState, setHistory);
    RandomizedKruskalsAlgorithm.nextStep(board, generatorState, history, setBoard, setGeneratorState, setHistory);
  }

  return (
    <div id="app">
      <Controls
        nextStep={nextStep}
        board={board}
        generatorState={generatorState}
        history={history}
        historyIndex={historyIndex}
        setBoard={setBoard}
        setGeneratorState={setGeneratorState}
        setHistoryIndex={setHistoryIndex}
      />
      <Canvas
        board={board}
        canvasWidth={CANVAS_WIDTH}
        canvasHeight={CANVAS_HEIGHT}
      />
      <Selector />
    </div>
  );
};

export default App;
