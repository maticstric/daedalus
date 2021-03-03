import React, { Component } from 'react';
import './app.css';

import Canvas from './components/canvas/canvas.js';
import Controls from './components/controls/controls.js';
import Selector from './components/selector/selector.js';

class App extends Component {

  constructor(props) {
    super(props);

    this.updateSpeed = this.updateSpeed.bind(this);

    this.state = {
      speedValue: 0
    };
  }

  render() {
    return (
      <div id="app">
        <Controls onChange={this.updateSpeed} />
        <Canvas speedValue={this.state.speedValue} />
        <Selector />
      </div>
    );
  }

  updateSpeed(event) {
    this.setState({speedValue: event.target.value});
  }
};

export default App;
