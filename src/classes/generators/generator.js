class Generator {
  constructor(board, speed, paused) {
    this.board = board;
    this.cells = board.cells;
    this.speed = speed;
    this.paused = paused;
  }
}

export default Generator;
