import React, { useState, useEffect } from 'react';
import './controls.css';

import FirstSvg from '../../images/first.svg';
import PreviousSvg from '../../images/previous.svg';
import NextSvg from '../../images/next.svg';
import LastSvg from '../../images/last.svg';

const Controls = (props) => {
  const [isPreviousDisabled, setIsPreviousDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);

  useEffect(() => {
    if (props.historyIndex === 0) {
      setIsPreviousDisabled(true);
      setIsNextDisabled(false);
    } else if (props.historyIndex === props.history.length - 1) {
      setIsPreviousDisabled(false);
      setIsNextDisabled(true);
    } else {
      setIsPreviousDisabled(false);
      setIsNextDisabled(false);
    }
  }, [props.historyIndex, props.history.length]);

  const first = () => {
    let firstBoard = props.history[0].board;
    let firstGeneratorState = props.history[0].generatorState;

    props.setBoard(firstBoard);
    props.setGeneratorState(firstGeneratorState);

    props.setHistoryIndex(0);
  }

  const last = () => {
    let lastBoard = props.history[props.history.length - 1].board;
    let lastGeneratorState = props.history[props.history.length - 1].generatorState;

    props.setBoard(lastBoard);
    props.setGeneratorState(lastGeneratorState);

    props.setHistoryIndex(props.history.length - 1);
  }

  const next = () => {
    let nextBoard = props.history[props.historyIndex + 1].board;
    let nextGeneratorState = props.history[props.historyIndex + 1].generatorState;

    props.setBoard(nextBoard);
    props.setGeneratorState(nextGeneratorState);

    props.setHistoryIndex(props.historyIndex + 1);
  }

  const previous = () => {
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
        disabled={isPreviousDisabled}
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
        disabled={isNextDisabled}
        onClick={last}
        src={LastSvg}
      />
    </div>
  );
};

export default Controls;
