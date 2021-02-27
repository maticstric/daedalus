import React, { Component } from 'react';
import './app.css';

import Canvas from './components/canvas/canvas.js';
import Controls from './components/controls/controls.js';

class App extends Component {
  render() {
    return (
      <div id="app">
        <Controls />
        <Canvas />
      </div>
    );
  }
};

export default App;
