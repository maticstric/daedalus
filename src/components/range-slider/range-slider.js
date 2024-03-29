import React from 'react';
import './range-slider.css';

const RangeSlider = (props) => {
  return (
    <div id="range-slider-wrapper">
      <div>{props.min}</div>
      <input
        type="range"
        disabled={props.disabled}
        min={props.min}
        max={props.max}
        step={props.step}
        defaultValue={props.defaultValue}
        onChange={props.onChange}
        onMouseUp={props.onMouseUp}
      />
      <div>{props.max}</div>
    </div>
  );
};

export default RangeSlider;
