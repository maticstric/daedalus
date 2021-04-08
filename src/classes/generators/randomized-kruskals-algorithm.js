import Board from '../board.js';
import Cell from '../cell.js';
import DisjointSet from '../disjoint-set.js';

class RandomizedKruskalsAlgorithm {
  static generate = (size, canvasSize, setHistory, setHistoryIndex, setCells) => {
    let board = new Board(canvasSize, canvasSize, (size * 2) + 1, (size * 2) + 1);
    let generatorState = this.getInitialState(board);
    let wallList = generatorState.wallList;
    let cellSets = generatorState.cellSets;
    let history = [{
      prev: Cell.cloneCellArray(board.cells), // 'prev' in first entry takes you to initial state
      next: null
    }];

    while (cellSets.numSets > 1) {
      let randomWallIndex = Math.floor(Math.random() * wallList.length);
      let randomWall = wallList[randomWallIndex];

      let {cellA, cellB} = board.getCellsDividedByWall(randomWall);

      if (cellSets.findSet(cellA.index) !== cellSets.findSet(cellB.index)) {
        let nextHistory = {};
        let prevHistory = {};

        if (board.cells[cellA.index].isWall) {
          board.cells[cellA.index].isWall = false;
          nextHistory[cellA.index] = false;
          prevHistory[cellA.index] = true;
        }

        if (board.cells[cellB.index].isWall) {
          board.cells[cellB.index].isWall = false;
          nextHistory[cellB.index] = false;
          prevHistory[cellB.index] = true;
        }

        if (board.cells[randomWall.index].isWall) {
          board.cells[randomWall.index].isWall = false;
          nextHistory[randomWall.index] = false;
          prevHistory[randomWall.index] = true;
        }

        wallList.splice(randomWallIndex, 1);

        cellSets.union(cellA.index, cellB.index);

        history[history.length - 1].next = nextHistory;

        history.push({
          prev: prevHistory,
          next: null
        });
      }
    }

    // 'next' in last entry takes you to final state
    history[history.length - 1].next = Cell.cloneCellArray(board.cells);

    setHistory(history);
    setHistoryIndex(history.length - 1);
    setCells(Cell.cloneCellArray(board.cells));
  }

  static getInitialState(board) {
    return {
      wallList: this.getInitialWallList(board),
      cellSets: this.getInitialCellSets(board)
    }
  }

  static getInitialWallList(board) {
    let walls = [];

    board.cells.forEach((cell) => {
      let {row, col} = board.getRowAndCol(cell);

      if (row !== 0 && row !== board.rows - 1 && col !== 0 && col !== board.cols - 1) {
        if (row % 2 !== 0 || col % 2 !== 0) {
          if (row % 2 === 0)  {
            walls.push(cell);
          } else if (col % 2 === 0) {
            walls.push(cell);
          }
        }
      }
    });

    return walls;
  }

  static getInitialCellSets(board) {
    let cellIndices = [];

    board.cells.forEach((cell) => {
      let {row, col} = board.getRowAndCol(cell);

      if (row % 2 === 1 && col % 2 === 1)  {
        cellIndices.push(cell.index);
      }
    });

    return new DisjointSet(cellIndices);
  }
}

export default RandomizedKruskalsAlgorithm;
