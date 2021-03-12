import React, { Component } from 'react';
import './selector.css';

class Selector extends Component {
  render() {
    return (
      <div id='selector-wrapper'>
        <button>Randomized Depth First Search</button>
        <button>Randomized Kruskal’s Algorithm</button>
      </div>
    );
  }
};

export default Selector;
