import Board from '../board.js';

class RandomizedKruskalsAlgorithm {
  static generate = (size, canvasSize, setHistory, setHistoryIndex) => {
    let newBoard = new Board(canvasSize, canvasSize, (size * 2) + 1, (size * 2) + 1);
    let newGeneratorState = this.getInitialState(newBoard);
    let newWallList = newGeneratorState.wallList;
    let newCellSets = newGeneratorState.cellSets;
    let newHistory = [newBoard.clone()];

    while (newCellSets.length > 1) {
      let randomWallIndex = Math.floor(Math.random() * newWallList.length);
      let randomWall = newWallList[randomWallIndex];

      let {cellA, cellB} = newBoard.getCellsDividedByWall(randomWall);
      let setOfCellA = this.getSetWithCell(newCellSets, cellA);
      let setOfCellB = this.getSetWithCell(newCellSets, cellB);

      if (setOfCellA !== setOfCellB) {
        newBoard.cells[cellA.index].isWall = false;
        newBoard.cells[cellB.index].isWall = false;
        newBoard.cells[randomWall.index].isWall = false;

        newWallList.splice(randomWallIndex, 1);

        newCellSets.splice(newCellSets.indexOf(setOfCellA), 1);
        newCellSets.splice(newCellSets.indexOf(setOfCellB), 1);
        newCellSets.push(new Set([...setOfCellA, ...setOfCellB]));

        newHistory.push(newBoard);

        newBoard = newBoard.clone();
        newGeneratorState = this.cloneState(newBoard, newGeneratorState);
        newWallList = newGeneratorState.wallList;
        newCellSets = newGeneratorState.cellSets;
      }
    }

    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  }

  static getSetWithCell(sets, cell) {
    let set;
    sets.forEach((s) => {
      s.forEach((c) => {
        if (c === cell) {
          set = s;
        }
      });
    });

    return set;
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
    let cellSets = [];

    board.cells.forEach((cell) => {
      let {row, col} = board.getRowAndCol(cell);

      if (row % 2 === 1 && col % 2 === 1)  {
        let cellSet = new Set();
        cellSet.add(cell);
        cellSets.push(cellSet);
      }
    });

    return cellSets;
  }

  static getInitialState(board) {
    return {
      wallList: this.getInitialWallList(board),
      cellSets: this.getInitialCellSets(board)
    }
  }

  static cloneState(board, state) {
    let newWallList = [];
    let newCellSets = [];

    state.wallList.forEach((cell) => {
      let newCell = board.cells[cell.index];

      newWallList.push(newCell);
    });

    state.cellSets.forEach((set) => {
      let newSet = new Set();

      set.forEach((cell) => {
        let newCell = board.cells[cell.index];
        newSet.add(newCell);
      });

      newCellSets.push(newSet);
    });

    return {
      wallList: newWallList,
      cellSets: newCellSets
    }
  }
}

export default RandomizedKruskalsAlgorithm;
