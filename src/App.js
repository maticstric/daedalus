import React, { Component } from 'react';
import './app.css';

import Canvas from './components/canvas/canvas.js';

class App extends Component {
  render() {
    return (
      <div id="app">
        <Canvas />
      </div>
    );
  }
};

export default App;
