import React from 'react';
import './controls.css';

import Playback from '../playback/playback.js';

const Controls = (props) => {
  return (
    <div id="controls-wrapper">
      <Playback
        historyIndex={props.historyIndex}
        history={props.history}
        setBoard={props.setBoard}
        setGeneratorState={props.setGeneratorState}
        setHistoryIndex={props.setHistoryIndex}
      />
    </div>
  );
};

export default Controls;
