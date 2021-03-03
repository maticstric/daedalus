import React, { Component } from 'react';
import './slider.css';

class Slider extends Component {
  render() {
    return (
      <div id="slider-wrapper">
        <input id="slider" type="range" min="0" max="1" defaultValue="1" onChange={this.props.onChange} step="0.01" />
      </div>
    );
  }
};

export default Slider;
