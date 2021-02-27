class Cell {
  constructor(x, y, width, height, wall, ctx) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.wall = wall;
    this.ctx = ctx;
  }

  show() {
    if (this.wall) {
      this.ctx.fillStyle = "#000000";
    } else {
      this.ctx.fillStyle = "#FFFFFF";
    }

    this.ctx.fillRect(this.x, this.y, this.width, this.height);
    this.ctx.stroke();
  }
}

export default Cell;
