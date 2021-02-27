class Cell {
  constructor(x, y, row, col, width, height, isWall, ctx) {
    this.x = x;
    this.y = y;
    this.row = row;
    this.col = col;
    this.width = width;
    this.height = height;
    this.isWall = isWall;
    this.ctx = ctx;
  }

  show() {
    if (this.isWall) {
      this.ctx.fillStyle = "#000000";
    } else {
      this.ctx.fillStyle = "#FFFFFF";
    }

    this.ctx.fillRect(this.x, this.y, this.width, this.height);
    this.ctx.stroke();
  }
}

export default Cell;
