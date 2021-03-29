import React, { useState } from 'react';
import './speed-slider.css';

const SpeedSlider = (props) => {
  const [speedText, setSpeedText] = useState('speed: 3');

  return (
    <div id="speed-slider-wrapper">
      <p>{speedText}</p>
      <div id="slider-wrapper">
        <span>0</span>
        <input
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
        <span>1</span>
      </div>
    </div>
  );
};

export default SpeedSlider;
