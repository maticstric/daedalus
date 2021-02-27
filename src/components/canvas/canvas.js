import React, { Component, createRef } from 'react';
import './canvas.css';

import Board from '../../classes/board.js';

//const CANVAS_SCALE = 0.4;
const ROWS = 5;
const COLS = 5;

class Canvas extends Component {
  constructor(props) {
    super(props);

    this.canvasRef = createRef();
    this.width = 550;//Math.floor(window.innerWidth * CANVAS_SCALE);
    this.height = 550;//Math.floor(window.innerWidth * CANVAS_SCALE);
  }

  componentDidMount() {
    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext("2d")

    ctx.canvas.width = this.width;
    ctx.canvas.height = this.height;

    let board = new Board(this.width, this.height, (ROWS * 2) + 1, (COLS * 2) + 1, ctx);
    board.show();
  }

  render() {
    return (
      <div id="wrapper">
        <canvas id="canvas" ref={this.canvasRef} width={550} height={550} />
      </div>
    );
  }
};

export default Canvas;
