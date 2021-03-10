import React, {  } from 'react';
import './controls.css';

import NextSvg from '../../images/next.svg';
import PreviousSvg from '../../images/previous.svg';

const Controls = (props) => {
  const next = () => {
    let lastBoard = props.history[props.history.length - 1].board;
    let lastStack = props.history[props.history.length - 1].stack;

    // If on last board in history, generate new
    if (JSON.stringify(lastBoard) === JSON.stringify(props.board) &&
        JSON.stringify(lastStack) === JSON.stringify(props.stack)) {
      props.generateRandomizedDepthFirstSearch();
    } else { // ... if not, just keep going forward in history
      let nextBoard = props.history[props.historyIndex + 1].board;
      let nextStack = props.history[props.historyIndex + 1].stack;

      props.setBoard(nextBoard);
      props.setStack(nextStack);
    }

    props.setHistoryIndex(props.historyIndex + 1);
  }

  const previous = () => {
    let previousBoard = props.history[props.historyIndex - 1].board;
    let previousStack = props.history[props.historyIndex - 1].stack;

    props.setBoard(previousBoard);
    props.setStack(previousStack);
    
    props.setHistoryIndex(props.historyIndex - 1);
  }

  return (
    <div id="controls-wrapper">
      <div>
        <img onClick={previous} alt="previous" src={PreviousSvg} />
        <img onClick={next} alt="next" src={NextSvg} />
      </div>
    </div>
  );
};

export default Controls;
