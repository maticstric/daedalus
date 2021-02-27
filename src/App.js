import React, { Component } from 'react';
import './app.css';

import Canvas from './components/canvas/canvas.js';
import Controls from './components/controls/controls.js';
import Selector from './components/selector/selector.js';

class App extends Component {
  render() {
    return (
      <div id="app">
        <Controls />
        <Canvas />
        <Selector />
      </div>
    );
  }
};

export default App;
