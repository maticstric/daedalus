import React, { Component } from 'react';
import './controls.css';

import GenerationSpeedSlider from '../../components/generation-speed-slider/generation-speed-slider.js';
import PlayPauseButton from '../../components/play-pause-button/play-pause-button.js';

class Controls extends Component {
  render() {
    return (
      <div id="controls-wrapper">
        <GenerationSpeedSlider updateGenerationSpeed={this.props.updateGenerationSpeed} />
        <PlayPauseButton
          updateIsPaused={this.props.updateIsPaused}
          isPaused={this.props.isPaused}
        />
      </div>
    );
  }
};

export default Controls;
