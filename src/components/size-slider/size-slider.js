import React, { useState } from 'react';
import './size-slider.css';
import RangeSlider from '../range-slider/range-slider.js';

const SizeSlider = (props) => {
  const [sizeText, setSizeText] = useState('size: 10');

  return (
    <div id="size-slider-wrapper">
      <p>{sizeText}</p>
      <RangeSlider
        disabled={props.isPlaying}
        type="range"
        min="2"
        max="30"
        step="1"
        defaultValue="10"
        onChange={(event) => { setSizeText('size: ' + event.target.value); }}
        onMouseUp={(event) => { props.setSize(event.target.value); }}
      />
    </div>
  );
};

export default SizeSlider;
