import React from 'react';
import './controls.css';

import Playback from '../playback/playback.js';
import SizeSlider from '../size-slider/size-slider.js';
import SpeedSlider from '../speed-slider/speed-slider.js';

const Controls = (props) => {
  return (
    <div id="controls-wrapper">
      <h2>controls</h2>
      <SizeSlider
        setSize={props.setSize}
        isPlaying={props.isPlaying}
      />
      <SpeedSlider
        setSpeed={props.setSpeed}
      />
      <Playback
        history={props.history}
        speed={props.speed}
        historyIndex={props.historyIndex} setHistoryIndex={props.setHistoryIndex}
        isPlaying={props.isPlaying} setIsPlaying={props.setIsPlaying}
        cells={props.cells} setCells={props.setCells}
      />
      <div></div>
      <blockquote>
        <p>
          <span>Such was the work, so intricate the place,</span>
          <span>That scarce the workman all its turns cou’d trace;</span>
          <span>And Daedalus was puzzled how to find</span>
          <span>The secret ways of what himself design’d.</span>
        </p>
        <p>— Ovid, <cite>Metamorphoses</cite></p>
      </blockquote>
    </div>
  );
};

export default Controls;
