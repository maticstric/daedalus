import Board from '../board.js';
import Cell from '../cell.js';

class RandomizedPrimsAlgorithm {
  static generate = (size, canvasSize, setHistory, setHistoryIndex, setCells) => {
    let board = new Board(canvasSize, canvasSize, (size * 2) + 1, (size * 2) + 1);
    let generatorState = this.getInitialState();
    let wallList = generatorState.wallList;
    let history = [{
      prev: Cell.cloneCellArray(board.cells), // 'prev' in first entry takes you to initial state
      next: null
    }];

    let startingCell = board.cells[board.cols + 1]
    board.cells[startingCell.index].isWall = false;

    let wallNeumannNeighborhood = board.wallNeumannNeighborhood(startingCell);
    wallList = wallList.concat(wallNeumannNeighborhood);

    while (wallList.length > 0) {
      let randomIndex = Math.floor(Math.random() * wallList.length);
      let randomWall = wallList[randomIndex];

      let {cellA, cellB} = board.getCellsDividedByWall(randomWall);

      if ((!cellA.isWall && cellB.isWall) || (cellA.isWall && !cellB.isWall)) { // XOR
        let cellWhichIsWall = cellA.isWall ? cellA : cellB;

        randomWall.isWall = false;
        cellWhichIsWall.isWall = false;

        let wallNeumannNeighborhood = board.wallNeumannNeighborhood(cellWhichIsWall);
        wallList = wallList.concat(wallNeumannNeighborhood);

        history[history.length - 1].next = {
          [randomWall.index]: false,
          [cellWhichIsWall.index]: false
        };

        history.push({
          prev: {
            [randomWall.index]: true,
            [cellWhichIsWall.index]: true
          },
          next: null
        });
      }

      wallList.splice(randomIndex, 1);
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
      wallList: []
    }
  }
}

export default RandomizedPrimsAlgorithm;
