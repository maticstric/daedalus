import React, { useState, useEffect } from 'react';
import './playback.css';

import FirstSvg from '../../images/first.svg';
import PreviousSvg from '../../images/previous.svg';
import NextSvg from '../../images/next.svg';
import LastSvg from '../../images/last.svg';
import PlaySvg from '../../images/play.svg';
import PauseSvg from '../../images/pause.svg';

class CancellationToken {
  constructor() {
    this.isCancellationRequested = false; 
  }

  cancel() {
    this.isCancellationRequested = true;
  }
}

const Playback = (props) => {
  const [isPreviousDisabled, setIsPreviousDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [isMainButtonDisabled, setIsMainButtonDisabled] = useState(false);
  const [cancellationToken, setCancellationToken] = useState(new CancellationToken());
  const [mainButtonState, setMainButtonState] = useState('play');
  const [mainButtonSvg, setMainButtonSvg] = useState(PlaySvg);

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

    if (mainButtonState === 'pause') {
      setIsPreviousDisabled(true);
      setIsNextDisabled(true);
    }
  }, [mainButtonState, props.historyIndex, props.history.length]);

  useEffect(() => {
    if (mainButtonState === 'play') {
      setMainButtonSvg(PlaySvg);
    } else if (mainButtonState === 'pause') {
      setMainButtonSvg(PauseSvg);
    }
  }, [mainButtonState]);

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

  const play = async () => {
    let historyIndex = props.historyIndex;

    props.setHistoryIndex(historyIndex + 1);
    historyIndex += 1;

    while (historyIndex < props.history.length - 1) {
      await new Promise(resolve => setTimeout(resolve, 1000));

      if(cancellationToken.isCancellationRequested) {
        setCancellationToken(new CancellationToken());
        return;
      }
      
      props.setHistoryIndex(historyIndex + 1);
      historyIndex += 1;
    }

    setMainButtonState('play');
  }

  const pause = async () => {
    cancellationToken.cancel();
  }

  const mainButtonOnClick = async () => {
    if (mainButtonState === 'play') {
      setMainButtonState('pause');

      play();
    } else if (mainButtonState === 'pause') {
      setMainButtonState('play');

      pause();
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
