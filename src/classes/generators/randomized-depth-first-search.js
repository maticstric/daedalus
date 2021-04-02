import Board from '../board.js';

class RandomizedDepthFirstSearch {
  static generate = (size, canvasSize, setHistory, setHistoryIndex) => {
    let newBoard = new Board(canvasSize, canvasSize, (size * 2) + 1, (size * 2) + 1);
    let newGeneratorState = this.getInitialState();
    let newStack = newGeneratorState.stack;
    let newHistory = [newBoard.clone()];

    if (newStack.length === 0) {
      let startingCell = newBoard.cells[newBoard.cols + 1]
      newBoard.cells[startingCell.index].isWall = false;

      newStack.push(startingCell);
    }

    while (newStack.length !== 0) {
      let currentCell = newStack.pop();

      let wallNeighbors = this.wallNeighbors(newBoard, currentCell);

      if (wallNeighbors.length !== 0) {
        newStack.push(currentCell);

        let randomIndex = Math.floor(Math.random() * wallNeighbors.length);
        let randomNeighbor = wallNeighbors[randomIndex];

        let cellBetween = newBoard.cellBetween(currentCell, randomNeighbor);
        newBoard.cells[cellBetween.index].isWall = false;

        newBoard.cells[randomNeighbor.index].isWall = false;
        newStack.push(randomNeighbor);

        newHistory.push(newBoard);

        newBoard = newBoard.clone();
        newGeneratorState = this.cloneState(newBoard, newGeneratorState);
        newStack = newGeneratorState.stack;
      }
    }

    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  }

  static wallNeighbors = (board, cell) => {
    let neighbors = board.neumannNeighborhood(cell);
    let wallNeighbors = [];

    for (let i = 0; i < neighbors.length; i++) {
      let c = neighbors[i];
      if(c.isWall) {
        wallNeighbors.push(c);
      }
    }

    return wallNeighbors;
  }

  static getInitialState() {
    return {
      stack: []
    }
  }

  static cloneState(board, state) {
    let newStack = [];

    state.stack.forEach((cell) => {
      let newCell = board.cells[cell.index];

      newStack.push(newCell);
    });

    return { stack: newStack };
  }
}

export default RandomizedDepthFirstSearch;
