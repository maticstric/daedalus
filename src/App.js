import React, { Component } from 'react';
import './app.css';

import Canvas from './components/canvas/canvas.js';
import Controls from './components/controls/controls.js';
import Selector from './components/selector/selector.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.updateSpeed = this.updateSpeed.bind(this);
    this.updatePause = this.updatePause.bind(this);

    this.state = {
      speedValue: 0,
      paused: false,
    };
  }

  render() {
    return (
      <div id="app">
        <Controls
          onChange={this.updateSpeed}
          onClick={this.updatePause}
          paused={this.state.paused}
        />
        <Canvas
          speedValue={this.state.speedValue}
          paused={this.state.paused}
        />
        <Selector />
      </div>
    );
  }

  updateSpeed(event) {
    this.setState({speedValue: event.target.value});
  }

  updatePause() {
    if (this.state.paused) {
      this.setState({
        paused: false,
      });
    } else {
      this.setState({
        paused: true,
      });
    }
  }
};

export default App;
