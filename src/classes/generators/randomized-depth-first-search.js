import Board from '../board.js';
import Cell from '../cell.js';

class RandomizedDepthFirstSearch {
  static generate = (size, canvasSize, setHistory, setHistoryIndex, setCells) => {
    let board = new Board(canvasSize, canvasSize, (size * 2) + 1, (size * 2) + 1);
    let generatorState = this.getInitialState();
    let stack = generatorState.stack;
    let history = [{
      prev: Cell.cloneCellArray(board.cells), // 'prev' in first entry takes you to initial state
      next: null
    }];

    let startingCell = board.cells[board.cols + 1]
    board.cells[startingCell.index].isWall = false;

    stack.push(startingCell);

    while (stack.length > 0) {
      let currentCell = stack.pop();

      let wallNeighbors = board.wallSecondNeumannNeighbors(currentCell);

      if (wallNeighbors.length !== 0) {
        stack.push(currentCell);

        let randomIndex = Math.floor(Math.random() * wallNeighbors.length);
        let randomNeighbor = wallNeighbors[randomIndex];

        let cellBetween = board.cellBetween(currentCell, randomNeighbor);
        board.cells[cellBetween.index].isWall = false;

        board.cells[randomNeighbor.index].isWall = false;
        stack.push(randomNeighbor);

        history[history.length - 1].next = {
          [cellBetween.index]: false,
          [randomNeighbor.index]: false
        };

        history.push({
          prev: {
            [cellBetween.index]: true,
            [randomNeighbor.index]: true
          },
          next: null
        });
      }
    }

    // 'next' in last entry takes you to final state
    history[history.length - 1].next = Cell.cloneCellArray(board.cells);

    // 'startingCell' is a special case so we just add it here
    history[0].next[startingCell.index] = false;
    history[1].prev[startingCell.index] = true;

    setHistory(history);
    setHistoryIndex(history.length - 1);
    setCells(Cell.cloneCellArray(board.cells));
  }

  static getInitialState() {
    return {
      stack: []
    }
  }
}

export default RandomizedDepthFirstSearch;
