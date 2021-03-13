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

  return (
    <div id='selector-wrapper'>
      <button onClick={generateRandomizedDepthFirstSearch}>Randomized Depth First Search</button>
      <button onClick={generateRandomizedKruskalsAlgorithm}>Randomized Kruskal’s Algorithm</button>
    </div>
  );
};

export default Selector;
