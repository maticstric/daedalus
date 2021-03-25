import React, { useEffect, useRef } from 'react';
import './canvas.css';

import Colors from '../../colors.js';

const Canvas = (props) => {
  const canvasEl = useRef();

  useEffect(() => {
    const canvas = canvasEl.current;
    let ctx = canvas.getContext('2d');

    ctx.canvas.width = props.canvasSize;
    ctx.canvas.height = props.canvasSize;

    const showBoard = (board, ctx) => {
      if (board) {
        board.cells.forEach(cell => {
          if (cell.isWall) {
            ctx.fillStyle = Colors.black;
          } else {
            ctx.fillStyle = Colors.white;
          }

          ctx.fillRect(cell.x, cell.y, cell.width, cell.height);
          ctx.stroke();
        });
      } else {
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
    }

    let board = props.history[props.historyIndex];

    showBoard(board, ctx);
  }, [props.historyIndex, props.history, props.canvasSize]);

  return (
    <div id="canvas-wrapper">
      <canvas
        id="canvas"
        ref={canvasEl}
        width={props.canvasSize}
        height={props.canvasSize}
      />
    </div>
  );
};

export default Canvas;
