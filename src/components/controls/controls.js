import React, { Component } from 'react';
import './controls.css';

import Slider from '../../components/slider/slider.js';
import PlayPauseButton from '../../components/play-pause-button/play-pause-button.js';

class Controls extends Component {
  render() {
    return (
      <div id='controls-wrapper'>
        <p>imma control</p>
        <Slider onChange={this.props.onChange} />
        <PlayPauseButton onClick={this.props.onClick} paused={this.props.paused}/>
      </div>
    );
  }
};

export default Controls;
