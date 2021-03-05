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

        cells.push(new Cell(x, y, i, j, width, height, true, false, this.ctx));
      }
    }

    return cells;
  }

  show() {
    this.cells.forEach(cell => cell.show());
  }

  neumannNeighborhood(cell) {
    let neighbors = [];
    let row = cell.row;
    let col = cell.col;

    let top = this.cells[this.index(row - 2, col)];
    let right = this.cells[this.index(row, col + 2)];
    let bottom = this.cells[this.index(row + 2, col)];
    let left = this.cells[this.index(row, col - 2)];

    if (top) { neighbors.push(top); }
    if (right) { neighbors.push(right); }
    if (bottom) { neighbors.push(bottom); }
    if (left) { neighbors.push(left); }

    return neighbors;
  }

  // TODO: Probably some smarter way of doing this
  cellBetween(cellA, cellB) {
    if (Math.abs(cellA.col - cellB.col) === 2) {
      let colBetween = (cellA.col + cellB.col) / 2;
      return this.cells[this.index(cellA.row, colBetween)];
    }

    if (Math.abs(cellA.row - cellB.row) === 2) {
      let rowBetween = (cellA.row + cellB.row) / 2;
      return this.cells[this.index(rowBetween, cellA.col)];
    }
  }

  index(row, col) { // Convert from 2d array coordinates to 1d
    if (row < 0 || col < 0 || row > this.rows - 1 || col > this.cols - 1) {
      return -1; // Invalid index
    }

    return col + row * this.cols;
  }
}

export default Board;
