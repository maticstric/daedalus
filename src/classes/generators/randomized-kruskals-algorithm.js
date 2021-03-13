class RandomizedKruskalsAlgorithm {
  static generate = (board, setHistory) => {
    let newGeneratorState = this.getInitialState(board.clone());
    let newWallList = newGeneratorState.wallList;
    let newCellSets = newGeneratorState.cellSets;
    let newBoard = board.clone();
    let newHistory = [{
      board: board.clone(),
      newWallList: this.getInitialWallList(board.clone()),
      newCellSets: this.getInitialCellSets(board.clone())
    }];

    while (newCellSets.length > 1) {
      let randomWallIndex = Math.floor(Math.random() * newWallList.length);
      let randomWall = newWallList[randomWallIndex];

      let {cellA, cellB} = this.getCellsDividedByWall(newBoard, randomWall);
      let setOfCellA = this.getSetWithCellIndex(newCellSets, cellA.index);
      let setOfCellB = this.getSetWithCellIndex(newCellSets, cellB.index);

      if (setOfCellA !== setOfCellB) {
        newBoard.cells[cellA.index].isWall = false;
        newBoard.cells[cellB.index].isWall = false;
        newBoard.cells[randomWall.index].isWall = false;

        newWallList.splice(randomWallIndex, 1);

        newCellSets.splice(newCellSets.indexOf(setOfCellA), 1);
        newCellSets.splice(newCellSets.indexOf(setOfCellB), 1);
        newCellSets.push(new Set([...setOfCellA, ...setOfCellB]));

        newHistory = newHistory.concat([{
          board: newBoard,
          generatorState: newGeneratorState
        }]);

        newGeneratorState = this.cloneState(newGeneratorState);
        newWallList = newGeneratorState.wallList;
        newCellSets = newGeneratorState.cellSets;
        newBoard = newBoard.clone();
      }
    }

    setHistory(newHistory);
  }

  static getInitialState(board) {
    return {
      wallList: this.getInitialWallList(board),
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
}

export default RandomizedKruskalsAlgorithm;
