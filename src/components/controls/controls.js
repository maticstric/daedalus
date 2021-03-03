import React, { Component } from 'react';
import './controls.css';

import Slider from '../../components/slider/slider.js';

class Controls extends Component {
  render() {
    return (
      <div id='controls-wrapper'>
        <p>imma control</p>
        <Slider onChange={this.props.onChange} />
      </div>
    );
  }
};

export default Controls;
