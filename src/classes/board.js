import Cell from './cell.js';

class Board {
  constructor(width, height, rows, cols, ctx) {
    this.width = width; // Width and height in pixels
    this.height = height;
    this.rows = rows;   // Num of rows and cols
    this.cols = cols;
    this.ctx = ctx;

    this.cells = this.initCells();
  }

  initCells() {
    let cells = [];

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        let width = this.width / this.cols;
        let height = this.height / this.rows;
        let x = width * j;
        let y = height * i;

        cells.push(new Cell(x, y, width, height, true, this.ctx));
      }
    }

    return cells;
  }

  show() {
    this.cells.forEach(cell => cell.show());
  }
}

export default Board;
