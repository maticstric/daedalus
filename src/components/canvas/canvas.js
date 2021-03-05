import React, { Component, createRef } from 'react';
import './canvas.css';

import Board from '../../classes/board.js';
import RandomizedDepthFirstSearch from '../../classes/generators/randomized-depth-first-search.js';

const ROWS = 5;
const COLS = 5;

class Canvas extends Component {
  constructor(props) {
    super(props);

    this.canvasRef = createRef();
    this.width = 550;
    this.height = 550;

    this.generator = null;
    this.board = null;
  }

  componentDidMount() {
    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext("2d")

    ctx.canvas.width = this.width;
    ctx.canvas.height = this.height;

    this.board = new Board(this.width, this.height, (ROWS * 2) + 1, (COLS * 2) + 1, ctx);
    this.board.show();

    this.generator = new RandomizedDepthFirstSearch(this.board, this.props.generationSpeed, this.props.isPaused);
    this.generator.generate();
  }

  render() {
    if (this.generator) {
      this.generator.speed = this.props.generationSpeed;
      this.generator.isPaused = this.props.isPaused;
    }

    return (
      <div id="canvas-wrapper">
        <canvas id="canvas" ref={this.canvasRef} width={550} height={550} />
      </div>
    );
  }
};

export default Canvas;
