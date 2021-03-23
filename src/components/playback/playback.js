import React, { useState, useEffect } from 'react';
import './playback.css';

import FirstSvg from '../../images/first.svg';
import PreviousSvg from '../../images/previous.svg';
import NextSvg from '../../images/next.svg';
import LastSvg from '../../images/last.svg';
import PlaySvg from '../../images/play.svg';
import PauseSvg from '../../images/pause.svg';
import ReplaySvg from '../../images/replay.svg';

const Playback = (props) => {
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
    props.setBoard(firstBoard);

    props.setHistoryIndex(0);
  }

  const last = () => {
    let lastBoard = props.history[props.history.length - 1].board;
    props.setBoard(lastBoard);

    props.setHistoryIndex(props.history.length - 1);
  }

  const next = () => {
    let nextBoard = props.history[props.historyIndex + 1].board;
    props.setBoard(nextBoard);

    props.setHistoryIndex(props.historyIndex + 1);
  }

  const previous = () => {
    let previousBoard = props.history[props.historyIndex - 1].board;
    props.setBoard(previousBoard);

    props.setHistoryIndex(props.historyIndex - 1);
  }

  return (
    <div id="playback-wrapper">
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
        alt="play-pause-replay"
        onClick={() => { } }
        src={PlaySvg}
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

export default Playback;
