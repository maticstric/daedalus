class Cell {
  constructor(x, y, index, width, height, isWall) {
    this.x = x;
    this.y = y;
    this.index = index;
    this.width = width;
    this.height = height;
    this.isWall = isWall;
  }

  clone() {
    return new Cell(this.x, this.y, this.index, this.width, this.height, this.isWall);
  }

  static cloneCellArray(cells) {
    let newCells = [];

    cells.forEach((cell) => {
      let cellCopy = cell.clone();
      newCells.push(cellCopy);
    });

    return newCells;
  }
}

export default Cell;
