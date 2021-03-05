import React, { Component } from 'react';
import './app.css';

import Canvas from './components/canvas/canvas.js';
import Controls from './components/controls/controls.js';
import Selector from './components/selector/selector.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.updateGenerationSpeed = this.updateGenerationSpeed.bind(this);
    this.updateIsPaused = this.updateIsPaused.bind(this);

    this.state = {
      generationSpeed: 0,
      isPaused: false
    };
  }

  render() {
    return (
      <div id="app">
        <Controls
          updateGenerationSpeed={this.updateGenerationSpeed}
          updateIsPaused={this.updateIsPaused}
          isPaused={this.state.isPaused}
        />
        <Canvas
          generationSpeed={this.state.generationSpeed}
          isPaused={this.state.isPaused}
        />
        <Selector />
      </div>
    );
  }

  updateGenerationSpeed(event) {
    this.setState({
      generationSpeed: event.target.value
    });
  }

  updateIsPaused(isPaused) {
    this.setState({
      isPaused: isPaused
    });
  }
};

export default App;
