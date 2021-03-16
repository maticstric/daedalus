import React from 'react';
import './selector.css';

import Generators from '../../generators.js';

const Selector = (props) => {

  const generateRandomizedDepthFirstSearch = () => {
    props.resetAndGenerate(Generators.RandomizedDepthFirstSearch);
  }

  const generateRandomizedKruskalsAlgorithm = () => {
    props.resetAndGenerate(Generators.RandomizedKruskalsAlgorithm);
  }

  const generateRandomizedPrimsAlgorithm = () => {
    props.resetAndGenerate(Generators.RandomizedPrimsAlgorithm);
  }

  return (
    <div id='selector-wrapper'>
      <h2>maze generation algorithms</h2>
      <button onClick={generateRandomizedDepthFirstSearch}>randomized depth first search</button>
      <button onClick={generateRandomizedKruskalsAlgorithm}>randomized kruskal’s algorithm</button>
      <button onClick={generateRandomizedPrimsAlgorithm}>randomized prim’s algorithm</button>
    </div>
  );
};

export default Selector;
