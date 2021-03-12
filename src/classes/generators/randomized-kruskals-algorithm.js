class RandomizedKruskalsAlgorithm {
  static doSteps = (numSteps, board, generatorState, history, setBoard, setGeneratorState, setHistory) => {
    let newGeneratorState = this.cloneState(generatorState);
    let wallList = newGeneratorState.wallList;
    let cellSets = newGeneratorState.cellSets;
    let newBoard = board.clone();

    let cumulativeHistory = [];

    let currentStep = 0;

    while (currentStep < numSteps) {

      while (true) {
        let randomWallIndex = Math.floor(Math.random() * wallList.length);
        let randomWall = wallList[randomWallIndex];

        let {cellA, cellB} = this.getCellsDividedByWall(newBoard, randomWall);
        // TODO: Compare JSONstrings of objects instead of just index
        let setOfCellA = this.getSetWithCellIndex(cellSets, cellA.index);
        let setOfCellB = this.getSetWithCellIndex(cellSets, cellB.index);

        if (setOfCellA !== setOfCellB) {
          newBoard.cells[cellA.index].isWall = false;
          newBoard.cells[cellB.index].isWall = false;
          newBoard.cells[randomWall.index].isWall = false;

          wallList.slice(randomWallIndex);

          cellSets.slice(cellSets.indexOf(setOfCellA));
          cellSets.slice(cellSets.indexOf(setOfCellB));
          cellSets.push(new Set([...setOfCellA, ...setOfCellB]));

          break;
        }
      }

      // Update history
      cumulativeHistory = cumulativeHistory.concat([{
        board: newBoard,
        generatorState: newGeneratorState
      }]);

      newGeneratorState = this.cloneState(newGeneratorState);
      wallList = newGeneratorState.wallList;
      cellSets = newGeneratorState.cellSets;
      newBoard = newBoard.clone();

      currentStep++;
    }

    // Set all state variables with new values
    setHistory(history.concat(cumulativeHistory));

    setBoard(newBoard);
    setGeneratorState(newGeneratorState);
  }

  static getInitialState(board) {
    return {
      wallList: this.getInitialListOfWalls(board),
      cellSets: this.getInitialCellSets(board)
    }
  }

  static cloneState(state) {
    let newWallList = []; 
    let newCellSets = []; 

    state.wallList.forEach((cell) => {
      let newCell = cell.clone();

      newWallList.push(newCell);
    });

    state.cellSets.forEach((set) => {
      let newSet = new Set(set);

      newCellSets.push(newSet);
    });

    return {
      wallList: newWallList,
      cellSets: newCellSets
    }
  }

  static getSetWithCellIndex(sets, index) {
    let set;

    sets.forEach((s) => {
      s.forEach((cell) => {
        if (cell.index === index) {
          set = s;
        }
      });
    });

    return set;
  }

  static getCellsDividedByWall(board, wall) {
    let {row, col} = board.getRowAndCol(wall);
    let cellA;
    let cellB;

    if (row % 2 === 0) {
      cellA = board.cells[wall.index - board.cols];
      cellB = board.cells[wall.index + board.cols];
    } else if (col % 2 === 0) {
      cellA = board.cells[wall.index - 1];
      cellB = board.cells[wall.index + 1];
    }

    return { cellA: cellA, cellB: cellB };
  }

  static getInitialListOfWalls(board) {
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
}

export default RandomizedKruskalsAlgorithm;
