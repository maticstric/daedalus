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
}

export default Cell;
