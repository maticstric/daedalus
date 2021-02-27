import React, { Component, createRef } from 'react';
import './canvas.css';

import Board from '../../classes/board.js';

//const CANVAS_SCALE = 0.4;

class Canvas extends Component {
  constructor(props) {
    super(props);

    this.canvasRef = createRef();
    this.width = 500;//Math.floor(window.innerWidth * CANVAS_SCALE);
    this.height = 500;//Math.floor(window.innerWidth * CANVAS_SCALE);
  }

  componentDidMount() {
    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext("2d")

    ctx.canvas.width = this.width;
    ctx.canvas.height = this.height;

    let board = new Board(this.width, this.height, 10, 10, ctx);
    board.show();
  }

  render() {
    return (
      <div id="wrapper">
        <canvas id="canvas" ref={this.canvasRef} width={500} height={500} />
      </div>
    );
  }
};

export default Canvas;
