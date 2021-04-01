import React from 'react';
import './selector.css';

import Generators from '../../generators.js';

const Selector = (props) => {

  const setToRandomizedDepthFirstSearch = () => {
    props.setGenerator({current: Generators.RandomizedDepthFirstSearch});
  }

  const setToRandomizedKruskalsAlgorithm = () => {
    props.setGenerator({current: Generators.RandomizedKruskalsAlgorithm});
  }

  const setToRandomizedPrimsAlgorithm = () => {
    props.setGenerator({current: Generators.RandomizedPrimsAlgorithm});
  }

  return (
    <div id='selector-wrapper'>
      <h2>maze generation algorithms</h2>
      <button
        onClick={setToRandomizedDepthFirstSearch}
        disabled={props.isPlaying}>
          randomized depth first search
      </button>
      <button
        onClick={setToRandomizedKruskalsAlgorithm}
        disabled={props.isPlaying}>
          randomized kruskal’s algorithm
      </button>
      <button
        onClick={setToRandomizedPrimsAlgorithm}
        disabled={props.isPlaying}>
          randomized prim’s algorithm
      </button>
    </div>
  );
};

export default Selector;