class RandomizedDepthFirstSearch {
  static nextStep = (board, generatorState, history, setBoard, setGeneratorState, setHistory) => {
    let newGeneratorState = this.cloneState(generatorState);
    let stack = newGeneratorState.stack;

    let newBoard = board.clone();

    if (stack.length === 0) {
      let startingCell = board.cells[board.cols + 1]
      newBoard.cells[startingCell.index].isWall = false;
      newBoard.cells[startingCell.index].isVisited = true;

      stack.push(startingCell);
    }

    while (stack.length !== 0) {
      let currentCell = stack.pop();

      let unvisitedNeighbors = board.unvisitedNeighbors(currentCell);

      if (unvisitedNeighbors.length !== 0) {
        stack.push(currentCell);

        let randomIndex = Math.floor(Math.random() * unvisitedNeighbors.length);
        let randomNeighbor = unvisitedNeighbors[randomIndex];

        let cellBetween = board.cellBetween(currentCell, randomNeighbor);
        newBoard.cells[cellBetween.index].isWall = false;

        newBoard.cells[randomNeighbor.index].isWall = false;
        newBoard.cells[randomNeighbor.index].isVisited = true;
        stack.push(randomNeighbor);

        break;
      }
    }

    setHistory(history.concat([{
      board: newBoard,
      generatorState: newGeneratorState
    }]));

    setBoard(newBoard);
    setGeneratorState(newGeneratorState);
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
