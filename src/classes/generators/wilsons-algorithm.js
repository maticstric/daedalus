import Board from '../board.js';
import Cell from '../cell.js';

const Directions = {
  North: 0,
  East: 1,
  South: 2,
  West: 3
};

class WilsonsAlgorithm {
  static generate = (size, canvasSize, setHistory, setHistoryIndex, setCells) => {
    let board = new Board(canvasSize, canvasSize, (size * 2) + 1, (size * 2) + 1);
    let generatorState = this.getInitialState(board);
    let notInMaze = generatorState.notInMaze;

    let history = [{
      prev: Cell.cloneCellArray(board.cells), // 'prev' in first entry takes you to initial state
      next: null
    }];

    let startingCell = board.cells[board.cols + 1]
    board.cells[startingCell.index].isWall = false;

    notInMaze.delete(startingCell);

    while (notInMaze.size > 0) {
      let notInMazeArray = [...notInMaze];
      let randomIndex = Math.floor(Math.random() * notInMazeArray.length);
      let randomCell = notInMazeArray[randomIndex];

      let visitedThisWalk = this.loopErasedRandomWalk(randomCell, board, notInMaze);

      let nextHistory = {};
      let prevHistory = {};

      visitedThisWalk.forEach((cell) => {
        if (cell.isWall) {
          nextHistory[cell.index] = false;
          prevHistory[cell.index] = true;
        }
      });

      history[history.length - 1].next = nextHistory;

      history.push({
        prev: prevHistory,
        next: null
      });

      visitedThisWalk.forEach((cell) => notInMaze.delete(cell));
      visitedThisWalk.forEach((cell) => { cell.isWall = false; });
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

  static loopErasedRandomWalk(startingCell, board, notInMaze) {
    let visitedThisWalk = [startingCell];

    let currentCell = startingCell;

    while (notInMaze.has(currentCell)) {
      let randomDirection = this.getRandomDirection(currentCell, board);
      let cellsInDirection =  this.cellsInDirection(currentCell, board, randomDirection);

      let indexOfNewCell = visitedThisWalk.indexOf(cellsInDirection[1]);

      if (indexOfNewCell !== -1) { // If already in array, means we have a loop so we erase it
        visitedThisWalk = visitedThisWalk.slice(0, indexOfNewCell + 1);
      } else { // Else just add the new cells
        visitedThisWalk = visitedThisWalk.concat(cellsInDirection);
      }

      currentCell = visitedThisWalk[visitedThisWalk.length - 1];
    }

    return visitedThisWalk;
  }

  static cellsInDirection(cell, board, direction) {
    if (direction === Directions.North) {
      return [
        board.cells[cell.index - board.cols],
        board.cells[cell.index - 2 * board.cols]
      ];
    } else if (direction === Directions.East) {
      return [
        board.cells[cell.index + 1],
        board.cells[cell.index + 2]
      ];
    } else if (direction === Directions.South) {
      return [
        board.cells[cell.index + board.cols],
        board.cells[cell.index + 2 * board.cols]
      ];
    } else if (direction === Directions.West) {
      return [
        board.cells[cell.index - 1],
        board.cells[cell.index - 2]
      ];
    }
  }

  static getRandomDirection(cell, board) {
    let {row, col} = board.getRowAndCol(cell);

    let possibleDirections = [];

    if (row > 1) {
      possibleDirections.push(Directions.North)
    }

    if (col < board.cols - 2) {
      possibleDirections.push(Directions.East)
    }

    if (row < board.rows - 2) {
      possibleDirections.push(Directions.South)
    }

    if (col > 1) {
      possibleDirections.push(Directions.West)
    }

    let randomIndex = Math.floor(Math.random() * possibleDirections.length);
    let randomDirection = possibleDirections[randomIndex];

    return randomDirection;
  }

  static getInitialState(board) {
    let cells = [];

    board.cells.forEach((cell) => {
      let {row, col} = board.getRowAndCol(cell);

      if (row % 2 === 1 && col % 2 === 1)  {
        cells.push(cell);
      }
    });

    return {
      notInMaze: new Set(cells)
    }
  }
}

export default WilsonsAlgorithm;
