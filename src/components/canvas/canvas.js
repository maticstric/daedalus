import React, { useEffect, useRef } from 'react';
import './canvas.css';

import Colors from '../../colors.js';

const Canvas = (props) => {
  const canvasEl = useRef();

  useEffect(() => {
    const canvas = canvasEl.current;
    let ctx = canvas.getContext('2d');

    ctx.canvas.width = props.canvasWidth;
    ctx.canvas.height = props.canvasHeight;
  }, [props.canvasHeight, props.canvasWidth]);

  useEffect(() => {
    const canvas = canvasEl.current;
    let ctx = canvas.getContext('2d');

    showBoard(ctx);
  });

  const showBoard = (ctx) => {
    props.board.cells.forEach(cell => {
      if (cell.isWall) {
        ctx.fillStyle = Colors.black;
      } else {
        ctx.fillStyle = Colors.white;
      }

      ctx.fillRect(cell.x, cell.y, cell.width, cell.height);
      ctx.stroke();
    });
  }

  return (
    <div id="canvas-wrapper">
      <canvas id="canvas" ref={canvasEl} width={550} height={550} />
    </div>
  );
};

export default Canvas;
