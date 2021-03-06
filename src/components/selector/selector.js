import React from 'react';
import './selector.css';

import Generators from '../../generators.js';

const Selector = (props) => {

  const setToRandomizedDepthFirstSearch = () => {
    props.setGenerator(Generators.RandomizedDepthFirstSearch);
  }

  const setToRandomizedKruskalsAlgorithm = () => {
    props.setGenerator(Generators.RandomizedKruskalsAlgorithm)
  }

  const setToRandomizedPrimsAlgorithm = () => {
    props.setGenerator(Generators.RandomizedPrimsAlgorithm);
  }

  return (
    <div id='selector-wrapper'>
      <h2>maze generation algorithms</h2>
      <button onClick={setToRandomizedDepthFirstSearch}>randomized depth first search</button>
      <button onClick={setToRandomizedKruskalsAlgorithm}>randomized kruskal’s algorithm</button>
      <button onClick={setToRandomizedPrimsAlgorithm}>randomized prim’s algorithm</button>
    </div>
  );
};

export default Selector;
