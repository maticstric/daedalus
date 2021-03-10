class RandomizedDepthFirstSearch {
  static nextStep = (board, stack, history, setBoard, setStack, setHistory) => {
    let newStack = stack.slice();
    let newBoard = board.clone();

    if (newStack.length === 0) {
      let startingCell = board.cells[board.cols + 1]
      newBoard.cells[startingCell.index].isWall = false;
      newBoard.cells[startingCell.index].isVisited = true;

      newStack.push(startingCell);
    } else {
      while (newStack.length !== 0) {
        let currentCell = newStack.pop();

        let unvisitedNeighbors = board.unvisitedNeighbors(currentCell);

        if (unvisitedNeighbors.length !== 0) {
          newStack.push(currentCell);

          let randomIndex = Math.floor(Math.random() * unvisitedNeighbors.length);
          let randomNeighbor = unvisitedNeighbors[randomIndex];

          let cellBetween = board.cellBetween(currentCell, randomNeighbor);
          newBoard.cells[cellBetween.index].isWall = false;

          newBoard.cells[randomNeighbor.index].isWall = false;
          newBoard.cells[randomNeighbor.index].isVisited = true;
          newStack.push(randomNeighbor);

          break;
        }
      }
    }

    setHistory(history.concat([{
      board: newBoard,
      stack: newStack
    }]));

    setBoard(newBoard);
    setStack(newStack);
  }
}

export default RandomizedDepthFirstSearch;
