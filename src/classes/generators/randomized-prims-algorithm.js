class RandomizedPrimsAlgorithm {
  static generate = (board, setHistory) => {
    let newGeneratorState = this.getInitialState();
    let newWallList = newGeneratorState.wallList;
    let newBoard = board;
    let newHistory = [{
      board: board.clone(),
      wallList: []
    }];

    if (newWallList.length === 0) {
      let startingCell = newBoard.cells[newBoard.cols + 1]
      newBoard.cells[startingCell.index].isWall = false;

      let wallNeumannNeighborhood = this.wallNeumannNeighborhood(newBoard, startingCell);
      newWallList.push(...wallNeumannNeighborhood);
    }

    while (newWallList.length > 0) {
      let randomIndex = Math.floor(Math.random() * newWallList.length);
      let randomWall = newWallList[randomIndex];

      let {cellA, cellB} = newBoard.getCellsDividedByWall(randomWall);

      if ((!cellA.isWall && cellB.isWall) || (cellA.isWall && !cellB.isWall)) { // XOR
        let cellWhichIsWall = cellA.isWall ? cellA : cellB;

        randomWall.isWall = false;
        cellWhichIsWall.isWall = false;

        let wallNeumannNeighborhood = this.wallNeumannNeighborhood(newBoard, cellWhichIsWall);
        newWallList.push(...wallNeumannNeighborhood);

        newHistory = newHistory.concat([{
          board: newBoard,
          generatorState: newGeneratorState
        }]);

        newBoard = newBoard.clone();
        newGeneratorState = this.cloneState(newBoard, newGeneratorState);
        newWallList = newGeneratorState.wallList;
      }

      newWallList.splice(randomIndex, 1);
    }

    setHistory(newHistory);
  }

  static wallNeumannNeighborhood(board, cell) {
    let wallNeighbors = [];
    let {row, col} = board.getRowAndCol(cell);
    let top, right, bottom, left;
    
    if (row - 1 > 0) {
      top = board.cells[board.index(row - 1, col)];
    }

    if (col + 1 < board.cols - 1) {
      right = board.cells[board.index(row, col + 1)];
    }

    if (row + 1 < board.rows - 1) {
      bottom = board.cells[board.index(row + 1, col)];
    }

    if (col - 1 > 0) {
      left = board.cells[board.index(row, col - 1)];
    }

    if (top && top.isWall) { wallNeighbors.push(top); }
    if (right && right.isWall) { wallNeighbors.push(right); }
    if (bottom && bottom.isWall) { wallNeighbors.push(bottom); }
    if (left && left.isWall) { wallNeighbors.push(left); }

    return wallNeighbors;
  }

  static getInitialState() {
    return {
      wallList: []
    }
  }

  static cloneState(board, state) {
    let newWallList = []; 

    state.wallList.forEach((cell) => {
      let newCell = board.cells[cell.index];

      newWallList.push(newCell);
    });

    return { wallList: newWallList };
  }
}

export default RandomizedPrimsAlgorithm;
