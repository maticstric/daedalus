import React from 'react';
import './controls.css';

import Playback from '../playback/playback.js';
import SizeSlider from '../size-slider/size-slider.js';

const Controls = (props) => {
  return (
    <div id="controls-wrapper">
      <h2>controls</h2>
      <SizeSlider
        setSize={props.setSize}
      />
      <Playback
        historyIndex={props.historyIndex}
        history={props.history}
        setHistoryIndex={props.setHistoryIndex}
      />
    </div>
  );
};

export default Controls;
