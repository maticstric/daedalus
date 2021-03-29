import React, { useState, useEffect, useRef } from 'react';
import './playback.css';

import FirstSvg from '../../images/first.svg';
import PreviousSvg from '../../images/previous.svg';
import NextSvg from '../../images/next.svg';
import LastSvg from '../../images/last.svg';
import PlaySvg from '../../images/play.svg';
import PauseSvg from '../../images/pause.svg';

const Playback = (props) => {
  const [isPreviousDisabled, setIsPreviousDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [isMainButtonDisabled, setIsMainButtonDisabled] = useState(false);
  const [timer, setTimer] = useState(null);
  const [mainButtonSvg, setMainButtonSvg] = useState(PlaySvg);

  const speedRef = useRef(props.speed);
  speedRef.current = props.speed;

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

    if (props.historyIndex === props.history.length - 1) {
      setIsMainButtonDisabled(true);
    } else {
      setIsMainButtonDisabled(false);
    }

    if (props.isPlaying) {
      setIsPreviousDisabled(true);
      setIsNextDisabled(true);
    }
  }, [props.isPlaying, props.historyIndex, props.history.length]);

  useEffect(() => {
    if (props.isPlaying) {
      setMainButtonSvg(PauseSvg);
    } else {
      setMainButtonSvg(PlaySvg);
    }
  }, [props.isPlaying]);

  const first = () => {
    props.setHistoryIndex(0);
  }

  const last = () => {
    props.setHistoryIndex(props.history.length - 1);
  }

  const next = () => {
    let historyIndex = props.historyIndex;
    props.setHistoryIndex(historyIndex + 1);
  }

  const previous = () => {
    let historyIndex = props.historyIndex;
    props.setHistoryIndex(historyIndex - 1);
  }

  const play = (historyIndex) => {
    let timeout = 1000 * (1 / speedRef.current);

    historyIndex += 1;
    props.setHistoryIndex(historyIndex);

    if (historyIndex < props.history.length - 1) {
      setTimer(setTimeout(() => { play(historyIndex); }, timeout));
    } else {
      props.setIsPlaying(false);
    }
  }

  const pause = () => {
    clearTimeout(timer)
  }

  const mainButtonOnClick = () => {
    if (props.isPlaying) {
      props.setIsPlaying(false);

      pause();
    } else {
      props.setIsPlaying(true);

      play(props.historyIndex);
    }
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
        alt="play-pause"
        disabled={isMainButtonDisabled}
        onClick={mainButtonOnClick}
        src={mainButtonSvg}
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
