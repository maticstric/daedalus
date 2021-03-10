import React, { useState } from 'react';
import './controls.css';

import NextSvg from '../../images/next.svg';
import PreviousSvg from '../../images/previous.svg';

const Controls = (props) => {
  const [isPreviousDisabled, setIsPreviousDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);

  const next = () => {
    let maxHistoryIndex = Math.floor(props.board.cols / 2) * Math.floor(props.board.rows / 2);

    if (props.historyIndex === maxHistoryIndex - 1) {
      setIsNextDisabled(true);
    }

    setIsPreviousDisabled(false);

    let lastBoard = props.history[props.history.length - 1].board;
    let lastStack = props.history[props.history.length - 1].stack;

    // If on last board in history, generate new
    if (JSON.stringify(lastBoard) === JSON.stringify(props.board) &&
        JSON.stringify(lastStack) === JSON.stringify(props.stack)) {
      props.nextStep();
    } else { // ... if not, just keep going forward in history
      let nextBoard = props.history[props.historyIndex + 1].board;
      let nextStack = props.history[props.historyIndex + 1].stack;

      props.setBoard(nextBoard);
      props.setStack(nextStack);
    }

    props.setHistoryIndex(props.historyIndex + 1);
  }

  const previous = () => {
    if (props.historyIndex === 1) {
      setIsPreviousDisabled(true);
    }

    setIsNextDisabled(false);

    let previousBoard = props.history[props.historyIndex - 1].board;
    let previousStack = props.history[props.historyIndex - 1].stack;

    props.setBoard(previousBoard);
    props.setStack(previousStack);

    props.setHistoryIndex(props.historyIndex - 1);
  }

  return (
    <div id="controls-wrapper">
      <input
        type="image"
        alt="previous"
        disabled={isPreviousDisabled}
        onClick={previous}
        src={PreviousSvg}
      />
      <input
        type="image"
        alt="next"
        disabled={isNextDisabled}
        onClick={next}
        src={NextSvg}
      />
    </div>
  );
};

export default Controls;
