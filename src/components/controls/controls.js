import React, { useState } from 'react';
import './controls.css';

import FirstSvg from '../../images/first.svg';
import PreviousSvg from '../../images/previous.svg';
import NextSvg from '../../images/next.svg';
import LastSvg from '../../images/last.svg';

const Controls = (props) => {
  const [isFirstDisabled, setIsFirstDisabled] = useState(true);
  const [isPreviousDisabled, setIsPreviousDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [isLastDisabled, setIsLastDisabled] = useState(false);

  const first = () => {
    setIsPreviousDisabled(true);
    setIsFirstDisabled(true);
    setIsNextDisabled(false);
    setIsLastDisabled(false);

    props.setBoard(props.history[0].board);
    props.setGeneratorState(props.history[0].generatorState);

    props.setHistoryIndex(0);
  }

  const last = () => {
    setIsPreviousDisabled(false);
    setIsFirstDisabled(false);
    setIsNextDisabled(true);
    setIsLastDisabled(true);

    let maxHistoryIndex = Math.floor(props.board.cols / 2) * Math.floor(props.board.rows / 2) - 1;

    let lastBoard = props.history[props.history.length - 1].board;
    let lastGeneratorState = props.history[props.history.length - 1].generatorState;
    let lastHistoryIndex = props.history.length - 1;

    let numSteps = maxHistoryIndex - lastHistoryIndex;

    props.doSteps(numSteps, lastBoard, lastGeneratorState, props.history, props.setBoard, props.setGeneratorState, props.setHistory);

    props.setHistoryIndex(maxHistoryIndex);
  }

  const next = () => {
    let maxHistoryIndex = Math.floor(props.board.cols / 2) * Math.floor(props.board.rows / 2) - 1;

    if (props.historyIndex === maxHistoryIndex - 1) {
      setIsNextDisabled(true);
      setIsLastDisabled(true);
    }

    setIsPreviousDisabled(false);
    setIsFirstDisabled(false);

    let lastBoard = props.history[props.history.length - 1].board;
    let lastGeneratorState = props.history[props.history.length - 1].generatorState;

    // If on last board in history, generate new
    if (JSON.stringify(lastBoard) === JSON.stringify(props.board) &&
        JSON.stringify(lastGeneratorState) === JSON.stringify(props.generatorState)) {
      props.doSteps(1, props.board, props.generatorState, props.history, props.setBoard, props.setGeneratorState, props.setHistory);
    } else { // ... if not, just keep going forward in history
      let nextBoard = props.history[props.historyIndex + 1].board;
      let nextGeneratorState = props.history[props.historyIndex + 1].generatorState;

      props.setBoard(nextBoard);
      props.setGeneratorState(nextGeneratorState);
    }

    props.setHistoryIndex(props.historyIndex + 1);
  }

  const previous = () => {
    if (props.historyIndex === 1) {
      setIsPreviousDisabled(true);
      setIsFirstDisabled(true);
    }

    setIsNextDisabled(false);
    setIsLastDisabled(false);

    let previousBoard = props.history[props.historyIndex - 1].board;
    let previousGeneratorState = props.history[props.historyIndex - 1].generatorState;

    props.setBoard(previousBoard);
    props.setGeneratorState(previousGeneratorState);

    props.setHistoryIndex(props.historyIndex - 1);
  }

  return (
    <div id="controls-wrapper">
      <input
        type="image"
        alt="first"
        disabled={isFirstDisabled}
        onClick={first}
        src={FirstSvg}
      />
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
      <input
        type="image"
        alt="last"
        disabled={isLastDisabled}
        onClick={last}
        src={LastSvg}
      />
    </div>
  );
};

export default Controls;
