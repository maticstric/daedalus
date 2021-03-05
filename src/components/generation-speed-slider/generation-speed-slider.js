import React, { Component } from 'react';
import './generation-speed-slider.css';

class SpeedSlider extends Component {
  render() {
    return (
      <div id="generation-speed-slider-wrapper">
        <input
          id="generation-speed-slider"
          type="range"
          min="0"
          max="1"
          defaultValue="0"
          onChange={this.props.updateGenerationSpeed}
          step="0.01"
        />
      </div>
    );
  }
};

export default SpeedSlider;
