import React, { useState } from 'react';
import './size-slider.css';

const SizeSlider = (props) => {
  const [sizeText, setSizeText] = useState('size: 10');

  return (
    <div id="size-slider-wrapper">
      <p>{sizeText}</p>
      <div id="slider-wrapper">
        <span>2</span>
        <input
          disabled={props.isPlaying}
          type="range"
          min="2"
          max="30"
          step="1"
          defaultValue="10"
          onChange={(event) => { setSizeText('size: ' + event.target.value); }}
          onMouseUp={(event) => { props.setSize(event.target.value); }}
        />
        <span>30</span>
      </div>
    </div>
  );
};

export default SizeSlider;
