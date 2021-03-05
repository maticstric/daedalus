class Generator {
  constructor(board, speed, isPaused) {
    this.board = board;
    this.cells = board.cells;
    this.speed = speed;
    this.isPaused = isPaused;
  }
}

export default Generator;
