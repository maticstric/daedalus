import React, { useState } from 'react';
import './app.css';

import Canvas from './components/canvas/canvas.js';
import Controls from './components/controls/controls.js';
import Selector from './components/selector/selector.js';
import RandomizedDepthFirstSearch from './classes/generators/randomized-depth-first-search.js';
import Board from './classes/board.js';

const MAZE_ROWS = 5;
const MAZE_COLS = 5;
const CANVAS_WIDTH = 550;
const CANVAS_HEIGHT = 550;

const App = (props) => {
  const [board, setBoard] = useState(new Board(CANVAS_WIDTH, CANVAS_HEIGHT, (MAZE_ROWS * 2) + 1, (MAZE_COLS * 2) + 1));
  const [stack, setStack] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(0);
  const [history, setHistory] = useState([{
    board: board,
    stack: []
  }]);

  function generateRandomizedDepthFirstSearch() {
    RandomizedDepthFirstSearch.nextStep(board, stack, history, setBoard, setStack, setHistory);
  }

  console.log(board);

  return (
    <div id="app">
      <Controls 
        generateRandomizedDepthFirstSearch={generateRandomizedDepthFirstSearch}
        board={board}
        stack={stack}
        history={history}
        historyIndex={historyIndex}
        setBoard={setBoard}
        setStack={setStack}
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
