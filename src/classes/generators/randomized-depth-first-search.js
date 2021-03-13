class RandomizedDepthFirstSearch {
  static generate = (board, setHistory) => {
    let newGeneratorState = this.getInitialState();
    let newStack = newGeneratorState.stack;
    let newBoard = board.clone();
    let newHistory = [{
      board: board.clone(),
      stack: []
    }];

    if (newStack.length === 0) {
      let startingCell = newBoard.cells[newBoard.cols + 1]
      newBoard.cells[startingCell.index].isWall = false;
      newBoard.cells[startingCell.index].isVisited = true;

      newStack.push(startingCell);
    }

    while (newStack.length !== 0) {
      let currentCell = newStack.pop();

      let unvisitedNeighbors = newBoard.unvisitedNeighbors(currentCell);

      if (unvisitedNeighbors.length !== 0) {
        newStack.push(currentCell);

        let randomIndex = Math.floor(Math.random() * unvisitedNeighbors.length);
        let randomNeighbor = unvisitedNeighbors[randomIndex];

        let cellBetween = newBoard.cellBetween(currentCell, randomNeighbor);
        newBoard.cells[cellBetween.index].isWall = false;

        newBoard.cells[randomNeighbor.index].isWall = false;
        newBoard.cells[randomNeighbor.index].isVisited = true;
        newStack.push(randomNeighbor);

        newHistory = newHistory.concat([{
          board: newBoard,
          generatorState: newGeneratorState
        }]);

        newGeneratorState = this.cloneState(newGeneratorState);
        newStack = newGeneratorState.stack;
        newBoard = newBoard.clone();
      }
    }

    setHistory(newHistory);
  }

  static getInitialState() {
    return {
      stack: []
    }
  }

  static cloneState(state) {
    let newStack = []; 

    state.stack.forEach((cell) => {
      let newCell = cell.clone();

      newStack.push(newCell);
    });

    return { stack: newStack };
  }
}

export default RandomizedDepthFirstSearch;
