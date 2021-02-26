import React, { Component, createRef } from 'react';
import './canvas.css';

const CANVAS_SCALE = 0.4;

class Canvas extends Component {
  constructor(props) {
    super(props);

    this.canvasRef = createRef();
  }

  componentDidMount() {
    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext("2d")

    ctx.canvas.width = Math.floor(window.innerWidth * CANVAS_SCALE);
    ctx.canvas.height = Math.floor(window.innerWidth * CANVAS_SCALE);
  }

  render() {
    return (
      <div id="wrapper">
        <canvas id="canvas" ref={this.canvasRef} width={600} height={600} />
      </div>
    );
  }
};

export default Canvas;
