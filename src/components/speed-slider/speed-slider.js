import React, { useState } from 'react';
import './speed-slider.css';
import RangeSlider from '../range-slider/range-slider.js';

const SpeedSlider = (props) => {
  const [speedText, setSpeedText] = useState('speed: 0');

  return (
    <div id="speed-slider-wrapper">
      <p>{speedText}</p>
      <RangeSlider
        disabled={props.isPlaying}
        type="range"
        min="0"
        max="1"
        step="0.01"
        defaultValue="0"
        onChange={(event) => {
            setSpeedText('speed: ' + event.target.value);
            props.setSpeed(Math.pow(1000, event.target.value)); 
        }}
      />
    </div>
  );
};

export default SpeedSlider;
