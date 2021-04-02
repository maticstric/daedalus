import Cell from './cell.js';

class Board {
  constructor(width, height, rows, cols) {
    this.width = width; // Width and height in pixels
    this.height = height;
    this.rows = rows;   // Num of rows and cols
    this.cols = cols;

    this.cells = this.initCells();
  }

  initCells = () => {
    let cells = [];

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        let width = this.width / this.cols;
        let height = this.height / this.rows;
        let x = width * j;
        let y = height * i;
        let index = i * this.cols + j;

        cells.push(new Cell(x, y, index, width, height, true));
      }
    }

    return cells;
  }

  neumannNeighborhood = (cell) => {
    let neighbors = [];
    let {row, col} = this.getRowAndCol(cell);

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

  cellBetween = (cellA, cellB) => {
    if (cellA.index - cellB.index === 2) {
      return this.cells[cellB.index + 1];
    } else if (cellB.index - cellA.index === 2) {
      return this.cells[cellA.index + 1];
    } else if (cellA.index - cellB.index === this.cols * 2) {
      return this.cells[cellB.index + this.cols];
    } else if (cellB.index - cellA.index === this.cols * 2) {
      return this.cells[cellA.index + this.cols];
    }
  }

  getCellsDividedByWall(wall) {
    let {row, col} = this.getRowAndCol(wall);
    let cellA;
    let cellB;

    if (row % 2 === 0) {
      cellA = this.cells[wall.index - this.cols];
      cellB = this.cells[wall.index + this.cols];
    } else if (col % 2 === 0) {
      cellA = this.cells[wall.index - 1];
      cellB = this.cells[wall.index + 1];
    }

    return { cellA: cellA, cellB: cellB };
  }


  index = (row, col) => { // Convert from 2d array coordinates to 1d
    if (row < 0 || col < 0 || row > this.rows - 1 || col > this.cols - 1) {
      return -1; // Invalid index
    }

    return col + row * this.cols;
  }

  getRowAndCol(cell) {
    let row = Math.floor(cell.index / this.cols);
    let col = cell.index % this.cols;

    return {row: row, col: col};
  }

  clone = () => {
    let boardCopy = new Board(this.width, this.height, this.rows, this.cols);

    boardCopy.cells = [];

    this.cells.forEach((cell) => {
      let cellCopy = cell.clone();
      boardCopy.cells.push(cellCopy);
    });


    return boardCopy;
  }
}

export default Board;
